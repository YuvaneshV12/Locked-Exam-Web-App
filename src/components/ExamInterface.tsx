
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, ChevronLeft, ChevronRight, Flag, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Subject {
  id: string;
  name: string;
  questions: number;
  duration: number;
}

interface ExamInterfaceProps {
  subject: Subject;
  onExamComplete: (answers: number[], timeSpent: number, score: number) => void;
  onExit: () => void;
}

// Sample questions for demo - in real app, these would come from backend
const sampleQuestions: { [key: string]: Question[] } = {
  networking: [
    {
    id: 1,
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "What is the default port number for HTTP?",
    options: ["21", "23", "80", "443"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which protocol is used to send emails?",
    options: ["FTP", "SMTP", "SNMP", "HTTP"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which IP class provides the maximum number of host addresses per network?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "What does DNS stand for?",
    options: ["Data Network Service", "Digital Node System", "Domain Name System", "Distributed Network Setup"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which device operates at the Data Link layer?",
    options: ["Router", "Hub", "Switch", "Gateway"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "What is the purpose of ARP?",
    options: ["To translate IP addresses to MAC addresses", "To route data packets", "To assign IP addresses", "To encrypt data"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "What is the maximum length of a MAC address?",
    options: ["32 bits", "48 bits", "64 bits", "128 bits"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "ICMP", "TCP", "IP"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which protocol is used to retrieve emails from a server?",
    options: ["SMTP", "POP3", "FTP", "IMAP"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What is the main function of the Transport layer?",
    options: ["Routing", "End-to-end communication", "Framing", "MAC addressing"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which of the following is a private IP address?",
    options: ["192.168.1.1", "172.33.56.7", "8.8.8.8", "66.249.66.1"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which topology has a central node?",
    options: ["Ring", "Bus", "Mesh", "Star"],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "What is the function of a router?",
    options: ["Amplify signals", "Forward packets between networks", "Convert digital to analog", "Assign MAC addresses"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Which port number is used for HTTPS?",
    options: ["80", "21", "443", "110"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Which layer ensures reliable transmission of data segments?",
    options: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "IPv6 addresses are how many bits long?",
    options: ["32", "64", "128", "256"],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "What does NAT stand for?",
    options: ["Network Address Translation", "New Address Type", "Network Allocation Table", "Name Address Translator"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Which protocol is used to securely transfer files over the internet?",
    options: ["FTP", "SFTP", "HTTP", "POP3"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which device works on multiple layers of the OSI model?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    correctAnswer: 2
  },
  ],
  java: [
    {
    id: 1,
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the size of int data type in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "run()", "main()", "init()"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which of the following is not a primitive data type in Java?",
    options: ["byte", "boolean", "String", "int"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which of these is used to handle exceptions in Java?",
    options: ["try-catch", "if-else", "for loop", "switch"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which package contains the Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which keyword is used to create an object in Java?",
    options: ["this", "class", "new", "create"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which access modifier makes a member visible to all classes?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which class is the parent of all classes in Java?",
    options: ["Object", "Class", "Main", "Super"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What will happen if the main method is declared as private?",
    options: ["Compile-time error", "Runtime error", "Program runs normally", "It gets ignored"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Which interface must be implemented by a class to support multithreading?",
    options: ["Serializable", "Cloneable", "Runnable", "Thread"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Which keyword is used to prevent inheritance?",
    options: ["static", "final", "abstract", "private"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which exception is thrown when an array is accessed with an illegal index?",
    options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "IllegalArgumentException"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Which of the following is a marker interface?",
    options: ["Runnable", "Cloneable", "Comparable", "Serializable"],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "What does JVM stand for?",
    options: ["Java Virtual Memory", "Java Very Machine", "Java Virtual Machine", "Just Virtual Machine"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What is the return type of the main method?",
    options: ["void", "int", "String", "boolean"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which of the following can be used to create a thread in Java?",
    options: ["Extending Thread class", "Implementing Runnable interface", "Both of the above", "None of the above"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Which of these keywords is used to define a constant variable?",
    options: ["final", "const", "static", "immutable"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which method can be used to compare two strings in Java?",
    options: ["==", "equals()", "compare()", "compareTo()"],
    correctAnswer: 1
  }
  ],
  python:[

    {
    id: 1,
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the output of print(type([]))?",
    options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which of the following is immutable in Python?",
    options: ["list", "dict", "tuple", "set"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is the correct syntax to create a dictionary?",
    options: ["dict = {}", "dict = []", "dict = ()", "dict = <>"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which operator is used for floor division in Python?",
    options: ["/", "//", "%", "**"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "How do you start a comment in Python?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "catch", "except", "handle"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What does the len() function do?",
    options: ["Returns the length of an object", "Returns the type of an object", "Converts to integer", "Deletes an object"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Which of the following is NOT a Python data type?",
    options: ["int", "float", "real", "bool"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "What will be the output of print(2**3)?",
    options: ["6", "8", "9", "5"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "How do you insert an element at the end of a list named 'lst'?",
    options: ["lst.add()", "lst.append()", "lst.insert()", "lst.push()"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which of the following functions can convert a string to a list of characters?",
    options: ["list()", "str()", "tuple()", "char()"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What is the output of print('Hello' + 'World')?",
    options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which keyword is used to create a class in Python?",
    options: ["class", "def", "object", "struct"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "How do you check for equality in Python?",
    options: ["=", "==", "equals", "!="],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which built-in function can be used to get user input?",
    options: ["input()", "scanf()", "read()", "get()"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What is the output of print(bool(''))?",
    options: ["True", "False", "None", "Error"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which module is commonly used for regular expressions in Python?",
    options: ["regex", "re", "express", "pyregex"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What does the 'pass' statement do in Python?",
    options: ["Exits a loop", "Does nothing", "Raises an error", "Returns a value"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which of the following is a mutable data type?",
    options: ["tuple", "string", "list", "int"],
    correctAnswer: 2
  }
  ],

  SQL:[

    {
    id: 1,
    question: "Which SQL statement is used to retrieve data from a database?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which command is used to add new records to a table?",
    options: ["INSERT INTO", "UPDATE", "CREATE", "ALTER"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which clause is used to filter the rows returned by a SELECT query?",
    options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which keyword is used to sort the result-set in ascending or descending order?",
    options: ["ORDER BY", "GROUP BY", "SORT BY", "FILTER BY"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which function is used to count the number of rows in SQL?",
    options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which SQL statement is used to change existing data in a table?",
    options: ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which keyword is used to remove duplicate rows in the result set?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "FILTER"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which command is used to remove all records from a table, but keep the table structure?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Which SQL clause groups rows that have the same values?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which statement is used to create a new table in SQL?",
    options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What is the purpose of the JOIN operation in SQL?",
    options: ["To combine rows from two or more tables", "To delete rows", "To sort data", "To create indexes"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Which type of JOIN returns all rows when there is a match in either left or right table?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctAnswer: 3
  },
  {
    id: 13,
    question: "What does the SQL keyword LIKE do?",
    options: ["Filters rows based on pattern matching", "Checks equality", "Filters NULL values", "Sorts data"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Which of the following is a SQL constraint that uniquely identifies each record?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "What is the result of a DELETE statement without a WHERE clause?",
    options: ["Deletes all records", "Deletes none", "Deletes first record", "Throws error"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which command permanently removes a table and its data from the database?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Which SQL statement is used to change the structure of an existing table?",
    options: ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "UPDATE TABLE"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "What does the HAVING clause do in SQL?",
    options: ["Filters groups after aggregation", "Filters rows before grouping", "Sorts groups", "Joins tables"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Which function returns the average value of a numeric column?",
    options: ["AVG()", "SUM()", "COUNT()", "MEAN()"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which of these SQL commands can be used to add a new column to an existing table?",
    options: ["ADD COLUMN", "INSERT COLUMN", "ALTER TABLE ADD", "UPDATE TABLE"],
    correctAnswer: 2
  }
  ],

  AI:[

    {
    id: 1,
    question: "What is the primary goal of Artificial Intelligence?",
    options: ["To build robots", "To simulate human intelligence", "To create databases", "To program computers"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is a type of machine learning?",
    options: ["Supervised learning", "Guided learning", "Unsupervised mining", "Directed learning"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which algorithm is commonly used for classification problems?",
    options: ["Linear Regression", "Decision Tree", "K-Means", "Apriori"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What does NLP stand for in AI?",
    options: ["Natural Language Processing", "Neural Language Program", "Network Learning Protocol", "Natural Logic Programming"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "What is overfitting in machine learning?",
    options: ["When the model performs well on new data", "When the model performs poorly on training data", "When the model performs well on training data but poorly on new data", "When the model is too simple"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which AI technique is inspired by the human brain?",
    options: ["Genetic Algorithms", "Neural Networks", "Decision Trees", "Bayesian Networks"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which of the following is NOT a part of AI?",
    options: ["Machine Learning", "Deep Learning", "Computer Graphics", "Expert Systems"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is reinforcement learning?",
    options: ["Learning from labeled data", "Learning by trial and error through rewards and penalties", "Learning without any feedback", "Learning from explicit instructions"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which algorithm is used for clustering?",
    options: ["K-Means", "Naive Bayes", "Random Forest", "Support Vector Machine"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which of these is a popular Python library for AI and machine learning?",
    options: ["NumPy", "TensorFlow", "React", "Django"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What is the Turing Test designed to evaluate?",
    options: ["Computer processing speed", "Human intelligence", "Whether a machine can exhibit intelligent behavior indistinguishable from a human", "Computer memory capacity"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Which AI concept refers to machines improving automatically through experience?",
    options: ["Artificial General Intelligence", "Machine Learning", "Computer Vision", "Natural Language Processing"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the main purpose of a chatbot?",
    options: ["To create graphics", "To interact with humans using natural language", "To store data", "To run simulations"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which of the following is an example of unsupervised learning?",
    options: ["Classification", "Regression", "Clustering", "Decision Trees"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Which term describes a simplified representation of a problem used to create an AI model?",
    options: ["Algorithm", "Dataset", "Model", "Abstraction"],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "Which of these AI fields focuses on interpreting visual information?",
    options: ["Natural Language Processing", "Computer Vision", "Robotics", "Expert Systems"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is a neural network composed of?",
    options: ["Nodes or neurons", "Decision trees", "Databases", "Rules and facts"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which is NOT a characteristic of Artificial General Intelligence (AGI)?",
    options: ["Can perform any intellectual task a human can", "Is highly specialized", "Has self-awareness", "Learns from experience"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which AI approach uses rules and facts to simulate expert decision making?",
    options: ["Expert Systems", "Genetic Algorithms", "Neural Networks", "Machine Learning"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which of the following is an example of a popular AI programming language?",
    options: ["Python", "HTML", "CSS", "SQL"],
    correctAnswer: 0
  }
  ],
  dsa:[

    {
    id: 1,
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Linked List", "Tree"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which traversal method uses Left, Root, Right order?",
    options: ["Preorder", "Postorder", "Inorder", "Level Order"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What data structure is used for recursion?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "What is the maximum number of children a binary tree node can have?",
    options: ["1", "2", "3", "Any number"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which data structure is ideal for implementing priority queues?",
    options: ["Heap", "Stack", "Queue", "Array"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Which algorithm technique divides the problem into smaller subproblems?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is the worst-case time complexity of linear search?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which data structure uses key-value pairs?",
    options: ["Array", "Hash Table", "Linked List", "Tree"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which of these is a self-balancing binary search tree?",
    options: ["Binary Tree", "AVL Tree", "Heap", "Trie"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is the space complexity of recursive Fibonacci implementation?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which traversal method visits nodes level by level?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Which algorithm is used for finding the shortest path in a graph?",
    options: ["Dijkstra’s Algorithm", "Kruskal’s Algorithm", "Prim’s Algorithm", "Depth First Search"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which data structure is used in Depth First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "What does a ‘heap’ data structure typically implement?",
    options: ["Priority Queue", "Queue", "Stack", "Graph"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "Which data structure stores elements in a contiguous block of memory?",
    options: ["Linked List", "Array", "Tree", "Graph"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What is the main advantage of a doubly linked list over a singly linked list?",
    options: ["Uses less memory", "Supports traversal in both directions", "Faster insertion", "Faster search"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What does ‘Big O’ notation describe?",
    options: ["Space complexity", "Time complexity", "Algorithm efficiency", "Both time and space complexity"],
    correctAnswer: 3
  }
  ]
};

const ExamInterface = ({ subject, onExamComplete, onExit }: ExamInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(20).fill(-1));
  const [timeLeft, setTimeLeft] = useState(subject.duration * 60); // Convert to seconds
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [questions] = useState<Question[]>(
    sampleQuestions[subject.id] || Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      question: `Sample question ${i + 1} for ${subject.name}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0
    }))
  );

  const enterFullscreen = useCallback(async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      setIsFullscreen(true);
    } catch (error) {
      console.error("Failed to enter fullscreen:", error);
      toast.error("Failed to enter fullscreen mode");
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
      setIsFullscreen(false);
    } catch (error) {
      console.error("Failed to exit fullscreen:", error);
    }
  }, []);

  const handleExamStart = useCallback(async () => {
    await enterFullscreen();
    setExamStarted(true);
    toast.success("Exam started! Timer is now running.");
  }, [enterFullscreen]);

  const calculateScore = useCallback(() => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        correct++;
      }
    });
    return correct;
  }, [answers, questions]);

  const handleSubmit = useCallback(async () => {
    const score = calculateScore();
    const timeSpent = (subject.duration * 60) - timeLeft;
    
    await exitFullscreen();
    onExamComplete(answers, timeSpent, score);
  }, [answers, timeLeft, subject.duration, calculateScore, exitFullscreen, onExamComplete]);

  useEffect(() => {
    if (!examStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, handleSubmit]);

  useEffect(() => {
    if (!examStarted) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      handleSubmit(); 
      e.preventDefault();
      e.returnValue = '';
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        toast.error("Tab switch detected. Exam Submitted.");
        handleSubmit();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [examStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  // Detect fullscreen exit and submit the exam
    useEffect(() => {
      const handleFullscreenExit = () => {
        if (!document.fullscreenElement && examStarted) {
          toast.error("Fullscreen exited! Submitting exam.");
          handleSubmit();
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenExit);

      return () => {
        document.removeEventListener("fullscreenchange", handleFullscreenExit);
      };
    }, [examStarted, handleSubmit]);

  const answeredQuestions = answers.filter(answer => answer !== -1).length;
  const progress = (answeredQuestions / 20) * 100;

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Ready to Start: {subject.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="font-semibold text-yellow-800">Important Notice</h3>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Your browser will enter full-screen mode</li>
                <li>• Timer will start immediately ({subject.duration} minutes)</li>
                <li>• You cannot navigate away or refresh</li>
                <li>• Exam will auto-submit when time expires</li>
              </ul>
            </div>
            
            <div className="text-center space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="font-semibold">Questions</div>
                  <div className="text-lg text-indigo-600">{subject.questions}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="font-semibold">Duration</div>
                  <div className="text-lg text-indigo-600">{subject.duration} min</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={onExit}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleExamStart}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  Start Exam
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">{subject.name}</h1>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-lg font-mono">
              <Clock className="w-5 h-5 text-red-500" />
              <span className={`${timeLeft < 300 ? 'text-red-500' : 'text-gray-700'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="text-sm text-gray-600">
              Progress: {answeredQuestions}/{questions.length}
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Question Navigation Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
          <div className="grid grid-cols-4 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`
                  w-10 h-10 rounded text-sm font-medium transition-colors
                  ${currentQuestion === index 
                    ? 'bg-indigo-600 text-white' 
                    : answers[index] !== -1 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-100 rounded"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-100 rounded"></div>
              <span>Not Answered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-indigo-600 rounded"></div>
              <span>Current</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg">
                Question {currentQuestion + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-gray-900 leading-relaxed">
                {questions[currentQuestion]?.question}
              </div>
              
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 transition-all
                      ${answers[currentQuestion] === index
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium
                        ${answers[currentQuestion] === index
                          ? 'border-indigo-500 bg-indigo-500 text-white'
                          : 'border-gray-300'
                        }
                      `}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation Controls */}
          <div className="max-w-4xl mx-auto mt-6 flex justify-between items-center">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            
            <div className="flex space-x-3">
              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
                >
                  <Flag className="w-4 h-4" />
                  <span>Submit Exam</span>
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
