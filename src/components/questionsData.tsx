export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questionsData: Record<string, Question[]> = {
  Networking: [
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
  {
    "id": 21,
    "question": "Which of the following is a valid MAC address?",
    "options": ["192.168.1.1", "00:14:22:01:23:45", "10.0.0.1", "255.255.255.0"],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "question": "What is the purpose of the DHCP protocol?",
    "options": ["To encrypt data packets", "To route data packets", "To assign IP addresses dynamically to devices", "To resolve domain names to IP addresses"],
    "correctAnswer": 3
  },
  {
    "id": 23,
    "question": "Which of the following is a type of network topology?",
    "options": ["Ring", "Star", "Bus", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 24,
    "question": "What does the acronym 'HTTP' stand for?",
    "options": ["HyperText Transmission Protocol", "HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
    "correctAnswer": 2
  },
  {
    "id": 25,
    "question": "Which layer of the OSI model is responsible for routing?",
    "options": ["Transport Layer", "Network Layer", "Data Link Layer", "Application Layer"],
    "correctAnswer": 2
  },
  {
    "id": 26,
    "question": "What is the primary function of the Transport Layer?",
    "options": ["Routing data packets", "Encrypting data packets", "Providing error detection and correction", "Establishing end-to-end communication"],
    "correctAnswer": 4
  },
  {
    "id": 27,
    "question": "Which of the following is a type of network?",
    "options": ["LAN", "MAN", "All of the above", "WAN"],
    "correctAnswer": 3
  },
  {
    "id": 28,
    "question": "What is the purpose of the FTP protocol?",
    "options": ["To transfer files between devices", "To assign IP addresses to devices", "To route data packets", "To encrypt data packets"],
    "correctAnswer": 1
  },
  {
    "id": 29,
    "question": "Which of the following is a valid IPv6 address?",
    "options": ["10.0.0.1", "172.16.0.1", "2001:0db8:85a3:0000:0000:8a2e:0370:7334", "192.168.1.1"],
    "correctAnswer": 3
  },
  {
    "id": 30,
    "question": "What does the acronym 'MAC' stand for in networking?",
    "options": ["Machine Address Control", "Media Address Control", "Machine Access Control", "Media Access Control"],
    "correctAnswer": 4
  },
  {
    "id": 31,
    "question": "Which of the following is a private IP address range?",
    "options": ["10.0.0.0 to 10.255.255.255", "172.16.0.0 to 172.31.255.255", "All of the above", "192.168.0.0 to 192.168.255.255"],
    "correctAnswer": 3
  },
  {
    "id": 32,
    "question": "What is the purpose of the SNMP protocol?",
    "options": ["To encrypt data packets", "To manage devices on a network", "To route data packets", "To assign IP addresses to devices"],
    "correctAnswer": 2
  },
  {
    "id": 33,
    "question": "Which of the following is a type of network cable?",
    "options": ["Twisted pair cable", "Fiber optic cable", "Coaxial cable", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 34,
    "question": "What is the purpose of the Telnet protocol?",
    "options": ["To assign IP addresses to devices", "To encrypt data packets", "To provide remote command-line access to devices", "To transfer files between devices"],
    "correctAnswer": 3
  },
  {
    "id": 35,
    "question": "Which of the following is a valid IPv4 address?",
    "options": ["172.16.0.1", "192.168.1.1", "256.256.256.256", "10.0.0.256"],
    "correctAnswer": 2
  },
  {
    "id": 36,
    "question": "What does the acronym 'SMTP' stand for?",
    "options": ["Simple Message Transfer Protocol", "Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Secure Message Transfer Protocol"],
    "correctAnswer": 2
  },
  {
    "id": 37,
    "question": "Which of the following is a type of network attack?",
    "options": ["Denial of Service (DoS)", "Phishing", "Man-in-the-Middle (MitM)", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 38,
    "question": "What is the default port number for FTP?",
    "options": ["22", "23", "25", "20/21"],
    "correctAnswer": 4
  },
  {
    "id": 39,
    "question": "Which protocol is used to securely transfer files over the internet?",
    "options": ["SFTP", "POP3", "HTTP", "FTP"],
    "correctAnswer": 1
  },
  {
    "id": 40,
    "question": "What is the purpose of NAT?",
    "options": ["To assign IP addresses dynamically", "To route data packets", "To encrypt data packets", "To translate private IP addresses to public IP addresses"],
    "correctAnswer": 4
  },
  {
    "id": 41,
    "question": "Which layer of the OSI model ensures reliable transmission of data?",
    "options": ["Transport Layer", "Data Link Layer", "Session Layer", "Network Layer"],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Which IP class provides the maximum number of host addresses?",
    "options": ["Class B", "Class A", "Class D", "Class C"],
    "correctAnswer": 2
  },
  {
    "id": 43,
    "question": "What does ICMP stand for?",
    "options": ["Internet Communication Message Protocol", "Internet Control Message Protocol", "Internal Control Message Protocol", "Internal Communication Message Protocol"],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "Which of the following is a broadcast address in IPv4?",
    "options": ["192.168.1.1", "0.0.0.0", "127.0.0.1", "255.255.255.255"],
    "correctAnswer": 4
  },
  {
    "id": 45,
    "question": "Which protocol is used to retrieve emails from a server?",
    "options": ["IMAP", "FTP", "POP3", "SMTP"],
    "correctAnswer": 3
  },
  {
    "id": 46,
    "question": "Which device operates at multiple layers of the OSI model?",
    "options": ["Switch", "Router", "Repeater", "Hub"],
    "correctAnswer": 2
  },
  {
    "id": 47,
    "question": "Which of the following is a classful IP address?",
    "options": ["10.0.0.1", "All of the above", "192.168.1.1", "172.16.0.1"],
    "correctAnswer": 2
  },
  {
    "id": 48,
    "question": "What is the default port number for Telnet?",
    "options": ["25", "22", "23", "21"],
    "correctAnswer": 3
  },
  {
    "id": 49,
    "question": "Which layer of the OSI model provides end-to-end delivery?",
    "options": ["Network Layer", "Physical Layer", "Transport Layer", "Data Link Layer"],
    "correctAnswer": 3
  },
  {
    "id": 50,
    "question": "What is the function of a switch?",
    "options": ["Assign IP addresses", "Forward packets between networks", "Amplify signals", "Filter traffic based on MAC addresses"],
    "correctAnswer": 4
  },
  {
    "id": 51,
    "question": "What is the default port number for DNS?",
    "options": ["21", "80", "25", "53"],
    "correctAnswer": 4
  },
  {
    "id": 52,
    "question": "Which of the following is a type of wireless network?",
    "options": ["Wi-Fi", "All of the above", "Infrared", "Bluetooth"],
    "correctAnswer": 2
  },
  {
    "id": 53,
    "question": "Which of the following is a valid broadcast IP address in class C?",
    "options": ["192.168.1.1", "192.168.1.255", "10.0.0.255", "192.168.0.255"],
    "correctAnswer": 2
  },
  {
    "id": 54,
    "question": "Which of the following is used to prevent loops in a network?",
    "options": ["DHCP", "ARP", "STP (Spanning Tree Protocol)", "DNS"],
    "correctAnswer": 3
  },
  {
    "id": 55,
    "question": "Which port number is used by SMTP?",
    "options": ["110", "25", "80", "21"],
    "correctAnswer": 2
  },
  {
    "id": 56,
    "question": "What is the default port for POP3?",
    "options": ["443", "25", "143", "110"],
    "correctAnswer": 4
  },
  {
    "id": 57,
    "question": "Which layer of the OSI model handles logical addressing?",
    "options": ["Network Layer", "Transport Layer", "Data Link Layer", "Application Layer"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which device is used to connect two different networks?",
    "options": ["Hub", "Router", "Switch", "Repeater"],
    "correctAnswer": 2
  },
  {
    "id": 59,
    "question": "Which protocol is used for secure web browsing?",
    "options": ["FTP", "HTTPS", "SMTP", "HTTP"],
    "correctAnswer": 2
  },
  {
    "id": 60,
    "question": "Which of the following is a feature of TCP?",
    "options": ["Reliable transmission", "Connectionless", "No error checking", "No flow control"],
    "correctAnswer": 1
  },
  {
    "id": 61,
    "question": "What is the maximum number of hosts in a Class C network?",
    "options": ["65,534", "254", "16,777,214", "256"],
    "correctAnswer": 2
  },
  {
    "id": 62,
    "question": "Which of the following is true about UDP?",
    "options": ["Connection-oriented", "Provides flow control", "Slower than TCP", "Unreliable"],
    "correctAnswer": 4
  },
  {
    "id": 63,
    "question": "Which of the following is a multicast address in IPv4?",
    "options": ["192.168.1.1", "224.0.0.1", "255.255.255.255", "10.0.0.1"],
    "correctAnswer": 2
  },
  {
    "id": 64,
    "question": "Which of the following is a function of the Data Link Layer?",
    "options": ["Framing", "Routing", "Segmentation", "Encryption"],
    "correctAnswer": 1
  },
  {
    "id": 65,
    "question": "Which layer of the OSI model handles error detection and correction?",
    "options": ["Transport Layer", "Data Link Layer", "Network Layer", "Physical Layer"],
    "correctAnswer": 2
  },
  {
    "id": 66,
    "question": "What is the primary function of the Network Layer?",
    "options": ["Routing packets", "Segmentation", "Framing", "Data encryption"],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "Which of the following protocols is used for remote login?",
    "options": ["FTP", "Telnet", "SMTP", "HTTP"],
    "correctAnswer": 2
  },
  {
    "id": 68,
    "question": "Which layer of the OSI model is responsible for physical addressing?",
    "options": ["Data Link Layer", "Network Layer", "Transport Layer", "Physical Layer"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "question": "Which protocol resolves domain names to IP addresses?",
    "options": ["DNS", "DHCP", "ARP", "ICMP"],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "question": "What is the default port number for SSH?",
    "options": ["22", "23", "25", "21"],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Which of the following is true about IPv6?",
    "options": ["It is 32 bits long", "It is 64 bits long", "It is 128 bits long", "It is 256 bits long"],
    "correctAnswer": 3
  },
  {
    "id": 72,
    "question": "Which of the following is an advantage of a star topology?",
    "options": ["Easy to troubleshoot", "Requires less cable", "No central point of failure", "Difficult to expand"],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "Which of the following is a valid IP address in Class B?",
    "options": ["172.16.0.1", "224.0.0.1", "192.168.1.1", "10.0.0.1"],
    "correctAnswer": 1
  },
  {
    "id": 74,
    "question": "Which of the following is a unicast address in IPv4?",
    "options": ["255.255.255.255", "0.0.0.0", "224.0.0.1", "192.168.1.1"],
    "correctAnswer": 4
  },
  {
    "id": 75,
    "question": "Which of the following is used to encrypt email?",
    "options": ["SSL", "TLS", "PGP", "DHCP"],
    "correctAnswer": 3
  },
  {
    "id": 76,
    "question": "Which of the following is a function of the Presentation Layer?",
    "options": ["Routing", "Segmentation", "Error detection", "Data translation"],
    "correctAnswer": 4
  },
  {
    "id": 77,
    "question": "Which device is used to connect multiple devices in a LAN?",
    "options": ["Switch", "Router", "Repeater", "Firewall"],
    "correctAnswer": 1
  },
  {
    "id": 78,
    "question": "Which of the following is a valid IPv4 multicast address?",
    "options": ["10.0.0.1", "224.0.0.1", "192.168.1.1", "255.255.255.255"],
    "correctAnswer": 2
  },
  {
    "id": 79,
    "question": "Which protocol is used to manage network devices?",
    "options": ["SMTP", "SNMP", "FTP", "HTTP"],
    "correctAnswer": 2
  },
  {
    "id": 80,
    "question": "Which of the following is a connection-oriented protocol?",
    "options": ["UDP", "ICMP", "IP", "TCP"],
    "correctAnswer": 4
  },
  ],
  Java: [
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
  },
  {
    "id": 21,
    "question": "Which keyword is used to define an abstract class in Java?",
    "options": ["abstract", "interface", "final", "extends"],
    "correctAnswer": 1
  },
  {
    "id": 22,
    "question": "Which of these is used to inherit multiple interfaces in Java?",
    "options": ["extends", "implements", "inherits", "super"],
    "correctAnswer": 2
  },
  {
    "id": 23,
    "question": "Which method is used to start a thread in Java?",
    "options": ["start()", "run()", "begin()", "execute()"],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "question": "Which of these is not a wrapper class in Java?",
    "options": ["Integer", "Double", "Character", "StringBuilder"],
    "correctAnswer": 4
  },
  {
    "id": 25,
    "question": "Which operator is used for object comparison in Java?",
    "options": ["==", "equals()", "!=", "compare()"],
    "correctAnswer": 2
  },
  {
    "id": 26,
    "question": "Which of these is not a Java access modifier?",
    "options": ["public", "protected", "private", "internal"],
    "correctAnswer": 4
  },
  {
    "id": 27,
    "question": "Which method is used to read input from console in Java?",
    "options": ["Scanner.next()", "BufferedReader.readLine()", "Console.read()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 28,
    "question": "Which of these keywords is used for exception handling in Java?",
    "options": ["try", "catch", "finally", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 29,
    "question": "Which of these cannot be used with a switch statement in Java?",
    "options": ["int", "String", "boolean", "char"],
    "correctAnswer": 3
  },
  {
    "id": 30,
    "question": "Which of the following is used to pause a thread in Java?",
    "options": ["sleep()", "wait()", "join()", "stop()"],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "question": "Which of these is used to prevent method overriding in Java?",
    "options": ["final", "static", "abstract", "protected"],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "question": "Which method is called when an object is garbage collected?",
    "options": ["finalize()", "destroy()", "cleanup()", "delete()"],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Which of the following is not part of Java memory area?",
    "options": ["Stack", "Heap", "Register", "Permanent Generation"],
    "correctAnswer": 3
  },
  {
    "id": 34,
    "question": "Which exception is thrown when a null object is accessed?",
    "options": ["NullPointerException", "ClassNotFoundException", "ArithmeticException", "IOException"],
    "correctAnswer": 1
  },
  {
    "id": 35,
    "question": "Which of the following is a checked exception?",
    "options": ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
    "correctAnswer": 1
  },
  {
    "id": 36,
    "question": "Which of these is not a Java loop?",
    "options": ["for", "while", "do-while", "repeat-until"],
    "correctAnswer": 4
  },
  {
    "id": 37,
    "question": "Which class is used to handle files in Java?",
    "options": ["File", "Scanner", "BufferedReader", "IOException"],
    "correctAnswer": 1
  },
  {
    "id": 38,
    "question": "Which of these is used for formatting output in Java?",
    "options": ["System.out.format()", "printf()", "String.format()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 39,
    "question": "Which of the following is immutable in Java?",
    "options": ["String", "StringBuilder", "StringBuffer", "ArrayList"],
    "correctAnswer": 1
  },
  {
    "id": 40,
    "question": "Which of these is not a Java collection?",
    "options": ["ArrayList", "HashMap", "Vector", "Array"],
    "correctAnswer": 4
  },
  {
    "id": 41,
    "question": "Which of the following can be used to stop a thread safely?",
    "options": ["interrupt()", "stop()", "suspend()", "kill()"],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Which of these cannot be used as a variable name in Java?",
    "options": ["int", "float", "class", "myVar"],
    "correctAnswer": 3
  },
  {
    "id": 43,
    "question": "Which interface is used for sorting in Java?",
    "options": ["Comparable", "Comparator", "Iterable", "Serializable"],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "Which of these keywords is used for type casting in Java?",
    "options": ["cast", "instanceof", "(type)", "convert"],
    "correctAnswer": 3
  },
  {
    "id": 45,
    "question": "Which of these is used to create a thread pool in Java?",
    "options": ["ThreadPoolExecutor", "ExecutorService", "ScheduledThreadPoolExecutor", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 46,
    "question": "Which keyword is used to refer to the current object in Java?",
    "options": ["this", "super", "current", "self"],
    "correctAnswer": 1
  },
  {
    "id": 47,
    "question": "Which of these is used to define a constant in Java?",
    "options": ["final", "const", "static", "immutable"],
    "correctAnswer": 1
  },
  {
    "id": 48,
    "question": "Which of these is used to implement multiple inheritance in Java?",
    "options": ["Interfaces", "Abstract classes", "Classes", "Packages"],
    "correctAnswer": 1
  },
  {
    "id": 49,
    "question": "Which class in Java is used to generate random numbers?",
    "options": ["Random", "Math", "ThreadLocalRandom", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 50,
    "question": "Which of these methods is used to stop a thread safely?",
    "options": ["sleep()", "wait()", "interrupt()", "join()"],
    "correctAnswer": 3
  },
  {
    "id": 51,
    "question": "Which of these is used to synchronize threads in Java?",
    "options": ["synchronized", "volatile", "transient", "static"],
    "correctAnswer": 1
  },
  {
    "id": 52,
    "question": "Which of these is not a Java primitive type?",
    "options": ["int", "boolean", "byte", "String"],
    "correctAnswer": 4
  },
  {
    "id": 53,
    "question": "Which method converts a string to integer in Java?",
    "options": ["Integer.parseInt()", "Integer.valueOf()", "String.toInt()", "parseInt()"],
    "correctAnswer": 1
  },
  {
    "id": 54,
    "question": "Which of these is used to read bytes from a file in Java?",
    "options": ["FileInputStream", "FileReader", "BufferedReader", "Scanner"],
    "correctAnswer": 1
  },
  {
    "id": 55,
    "question": "Which class is used to handle exceptions thrown by arithmetic operations?",
    "options": ["ArithmeticException", "IOException", "ClassNotFoundException", "NullPointerException"],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "Which of these is used for key-value mapping in Java?",
    "options": ["HashMap", "ArrayList", "LinkedList", "Vector"],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "Which of these is used for dynamic method dispatch in Java?",
    "options": ["Method overriding", "Method overloading", "Abstract class", "Interface"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which of these is used to convert a char to string in Java?",
    "options": ["Character.toString()", "String.valueOf()", "new String()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 59,
    "question": "Which of these keywords is used to access parent class methods?",
    "options": ["this", "super", "parent", "base"],
    "correctAnswer": 2
  },
  {
    "id": 60,
    "question": "Which of these statements about final variables is true?",
    "options": ["Can be reassigned", "Cannot be reassigned", "Can be null", "Can be overridden"],
    "correctAnswer": 2
  },
  {
    "id": 61,
    "question": "Which of these methods is used to sort collections in Java?",
    "options": ["Collections.sort()", "Arrays.sort()", "List.sort()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 62,
    "question": "Which of these keywords is used to define an interface in Java?",
    "options": ["interface", "abstract", "implements", "class"],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "Which of these classes is immutable in Java?",
    "options": ["String", "StringBuilder", "StringBuffer", "ArrayList"],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "Which of these can be used to pause execution in Java?",
    "options": ["sleep()", "wait()", "join()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 65,
    "question": "Which of these is used to create a generic class in Java?",
    "options": ["<>", "{}", "()", "[]"],
    "correctAnswer": 1
  },
  {
    "id": 66,
    "question": "Which of these is used to access a superclass constructor?",
    "options": ["super()", "this()", "parent()", "base()"],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "Which of these is used to create a package in Java?",
    "options": ["package", "import", "class", "interface"],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Which of these is used to handle multiple exceptions in a single catch block?",
    "options": ["Multi-catch", "Try-catch-finally", "Nested try", "Throw"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "question": "Which method is used to start a thread by implementing Runnable?",
    "options": ["start()", "run()", "execute()", "begin()"],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "question": "Which of these is not a valid Java identifier?",
    "options": ["_myVar", "$myVar", "2Var", "myVar"],
    "correctAnswer": 3
  },
  {
    "id": 71,
    "question": "Which of these is a marker interface in Java?",
    "options": ["Serializable", "Comparable", "Runnable", "Cloneable"],
    "correctAnswer": 1
  },
  {
    "id": 72,
    "question": "Which of these is used for exception propagation in Java?",
    "options": ["throw", "throws", "try-catch", "finalize"],
    "correctAnswer": 2
  },
  {
    "id": 73,
    "question": "Which method is used to read a line of text using BufferedReader?",
    "options": ["read()", "readLine()", "readChar()", "readText()"],
    "correctAnswer": 2
  },
  {
    "id": 74,
    "question": "Which class in Java represents a resizable array?",
    "options": ["ArrayList", "LinkedList", "Vector", "Stack"],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "Which class provides methods to convert between primitive types and objects?",
    "options": ["Wrapper classes", "Collections", "Arrays", "Object"],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "question": "Which keyword is used to implement an interface in Java?",
    "options": ["implements", "extends", "inherits", "interface"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Which of these methods belongs to the Object class?",
    "options": ["equals()", "hashCode()", "toString()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 78,
    "question": "Which of these is used to check if an object is of a particular type?",
    "options": ["instanceof", "isType()", "typeof", "checkType()"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "Which of these is not an exception in Java?",
    "options": ["IOException", "Error", "Throwable", "IntegerOverflow"],
    "correctAnswer": 4
  },
  {
    "id": 80,
    "question": "Which of these statements is true about abstract classes?",
    "options": ["Cannot be instantiated", "Can contain abstract and concrete methods", "Must be extended", "All of the above"],
    "correctAnswer": 4
  }
  ],
  Python:[
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
  },
  {
    "id": 21,
    "question": "Which function is used to get the ASCII value of a character?",
    "options": ["chr()", "ord()", "ascii()", "code()"],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "question": "Which of the following is used to create an anonymous function in Python?",
    "options": ["def", "lambda", "func", "anonymous"],
    "correctAnswer": 2
  },
  {
    "id": 23,
    "question": "What is the output of print(list(range(0,5)))?",
    "options": ["[0,1,2,3,4]", "[1,2,3,4,5]", "[0,1,2,3,4,5]", "[1,2,3,4]"],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "question": "Which method is used to remove whitespace from the beginning and end of a string?",
    "options": ["strip()", "trim()", "remove()", "clean()"],
    "correctAnswer": 1
  },
  {
    "id": 25,
    "question": "Which of the following operators is used for exponentiation?",
    "options": ["^", "**", "%", "//"],
    "correctAnswer": 2
  },
  {
    "id": 26,
    "question": "What will be the output of print(type({'a':1}))?",
    "options": ["dict", "tuple", "set", "list"],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "Which of these functions can be used to get the length of a string?",
    "options": ["len()", "length()", "count()", "size()"],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "Which keyword is used to create an iterator in Python?",
    "options": ["iter()", "next()", "generator", "iterator"],
    "correctAnswer": 1
  },
  {
    "id": 29,
    "question": "Which statement is used to exit a loop in Python?",
    "options": ["exit", "break", "stop", "return"],
    "correctAnswer": 2
  },
  {
    "id": 30,
    "question": "Which of these is a Python tuple method?",
    "options": ["append()", "index()", "insert()", "pop()"],
    "correctAnswer": 2
  },
  {
    "id": 31,
    "question": "Which keyword is used to handle exceptions in Python?",
    "options": ["try", "catch", "except", "error"],
    "correctAnswer": 3
  },
  {
    "id": 32,
    "question": "Which of these converts a string to lowercase?",
    "options": ["lower()", "casefold()", "toLower()", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 33,
    "question": "Which of the following statements creates a set in Python?",
    "options": ["{}", "set()", "[]", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 34,
    "question": "Which method is used to sort a list in Python?",
    "options": ["sort()", "sorted()", "order()", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 35,
    "question": "Which of these is used to check if all elements in an iterable are True?",
    "options": ["any()", "all()", "check()", "true()"],
    "correctAnswer": 2
  },
  {
    "id": 36,
    "question": "Which of these functions converts an object to a string?",
    "options": ["str()", "string()", "repr()", "Both 1 and 3"],
    "correctAnswer": 4
  },
  {
    "id": 37,
    "question": "Which of these is used to combine lists in Python?",
    "options": ["append()", "+", "extend()", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 38,
    "question": "Which of these is the correct way to create a Python generator?",
    "options": ["def gen(): yield 1", "def gen(): return 1", "gen = generator()", "generator def gen():"],
    "correctAnswer": 1
  },
  {
    "id": 39,
    "question": "Which of these keywords is used to define a class in Python?",
    "options": ["class", "def", "object", "struct"],
    "correctAnswer": 1
  },
  {
    "id": 40,
    "question": "Which operator is used to check membership in Python?",
    "options": ["in", "contains", "member", "has"],
    "correctAnswer": 1
  },
  {
    "id": 41,
    "question": "Which of these is used to concatenate strings in Python?",
    "options": ["+", "&", "concat()", "append()"],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Which of these converts a list to a tuple?",
    "options": ["tuple()", "list()", "set()", "dict()"],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "Which of these is used to remove duplicates from a list?",
    "options": ["set()", "unique()", "distinct()", "remove()"],
    "correctAnswer": 1
  },
  {
    "id": 44,
    "question": "Which built-in function returns the type of an object?",
    "options": ["typeof()", "type()", "class()", "objtype()"],
    "correctAnswer": 2
  },
  {
    "id": 45,
    "question": "Which of these converts a number to a string?",
    "options": ["str()", "int()", "float()", "string()"],
    "correctAnswer": 1
  },
  {
    "id": 46,
    "question": "Which of these is used to iterate through a dictionary?",
    "options": ["for key in dict", "for val in dict", "for key, val in dict.items()", "for i in dict.keys()"],
    "correctAnswer": 3
  },
  {
    "id": 47,
    "question": "Which of these is used to check if an object is an instance of a class?",
    "options": ["instanceof()", "isinstance()", "type()", "classof()"],
    "correctAnswer": 2
  },
  {
    "id": 48,
    "question": "Which of these statements is used to define an empty function in Python?",
    "options": ["pass", "continue", "empty", "void"],
    "correctAnswer": 1
  },
  {
    "id": 49,
    "question": "Which of these methods removes an element from a list by value?",
    "options": ["remove()", "pop()", "del()", "discard()"],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "question": "Which of these is used to merge two dictionaries in Python 3.9+?",
    "options": ["update()", "|", "merge()", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 51,
    "question": "Which of these functions converts a string to lowercase?",
    "options": ["lower()", "casefold()", "down()", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 52,
    "question": "Which of these keywords is used to define an exception in Python?",
    "options": ["raise", "try", "except", "throw"],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "question": "Which method returns the index of the first occurrence of a value in a list?",
    "options": ["find()", "index()", "locate()", "search()"],
    "correctAnswer": 2
  },
  {
    "id": 54,
    "question": "Which of these is used to reverse a list in Python?",
    "options": ["reverse()", "reversed()", "invert()", "Both 1 and 2"],
    "correctAnswer": 4
  },
  {
    "id": 55,
    "question": "Which of these is used to remove all elements from a list?",
    "options": ["clear()", "remove()", "delete()", "pop()"],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "Which of these keywords is used to create a global variable?",
    "options": ["global", "public", "extern", "var"],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "Which of these operators is used for identity comparison?",
    "options": ["is", "==", "equals", "same"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which function is used to evaluate a string as a Python expression?",
    "options": ["eval()", "exec()", "execfile()", "parse()"],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "question": "Which of these methods adds an element to a set?",
    "options": ["add()", "append()", "insert()", "extend()"],
    "correctAnswer": 1
  },
  {
    "id": 60,
    "question": "Which of these data structures does Python use internally for dicts?",
    "options": ["List", "Hash table", "Tuple", "Set"],
    "correctAnswer": 2
  },
  {
    "id": 61,
    "question": "Which of these is used to get the maximum value in a list?",
    "options": ["max()", "maximum()", "top()", "biggest()"],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "question": "Which of these is used to check if a list is empty?",
    "options": ["len(list)==0", "list.empty()", "list==[]", "Both 1 and 3"],
    "correctAnswer": 4
  },
  {
    "id": 63,
    "question": "Which of these statements is used to terminate a function without returning a value?",
    "options": ["return", "pass", "exit", "break"],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "Which of these converts a tuple to a list?",
    "options": ["list()", "tuple()", "set()", "dict()"],
    "correctAnswer": 1
  },
  {
    "id": 65,
    "question": "Which of these is used to delete an item from a dictionary?",
    "options": ["del dict[key]", "dict.remove(key)", "dict.popitem()", "Both 1 and 3"],
    "correctAnswer": 4
  },
  {
    "id": 66,
    "question": "Which of these is used to create a Python module?",
    "options": ["module.py", "package", "class", "script.py"],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "Which of these is used to check if a file exists?",
    "options": ["os.path.exists()", "file.exists()", "os.file.exists()", "exists()"],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Which function reads a single line from standard input?",
    "options": ["input()", "read()", "readline()", "scan()"],
    "correctAnswer": 3
  },
  {
    "id": 69,
    "question": "Which of these is used to convert a string to a float?",
    "options": ["float()", "int()", "str()", "convert()"],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "question": "Which of these is a Python built-in module for mathematics?",
    "options": ["math", "cmath", "numpy", "numbers"],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Which method is used to remove an element at a specific index from a list?",
    "options": ["pop()", "remove()", "del()", "discard()"],
    "correctAnswer": 1
  },
  {
    "id": 72,
    "question": "Which of these methods counts occurrences of an element in a list?",
    "options": ["count()", "len()", "frequency()", "index()"],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "Which keyword is used to create a constant variable in Python?",
    "options": ["const", "final", "immutable", "Python has no constant keyword"],
    "correctAnswer": 4
  },
  {
    "id": 74,
    "question": "Which function is used to return the absolute value of a number?",
    "options": ["abs()", "absolute()", "fabs()", "All of the above"],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "Which of these creates an empty set in Python?",
    "options": ["{}", "set()", "[]", "empty()"],
    "correctAnswer": 2
  },
  {
    "id": 76,
    "question": "Which of these is used to iterate over multiple lists in parallel?",
    "options": ["zip()", "enumerate()", "map()", "for loop"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Which method checks if a string starts with a specified prefix?",
    "options": ["startswith()", "prefix()", "startwith()", "beginwith()"],
    "correctAnswer": 1
  },
  {
    "id": 78,
    "question": "Which of these converts an integer to hexadecimal in Python?",
    "options": ["hex()", "oct()", "bin()", "int()"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "Which of these creates a shallow copy of a list?",
    "options": ["copy()", "deepcopy()", "list()", "clone()"],
    "correctAnswer": 1
  },
  {
    "id": 80,
    "question": "Which of these functions returns the largest item in an iterable?",
    "options": ["max()", "largest()", "biggest()", "top()"],
    "correctAnswer": 1
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
  },
  {
    "id": 21,
    "question": "Which SQL keyword is used to remove a column from a table?",
    "options": ["DELETE COLUMN", "DROP COLUMN", "REMOVE COLUMN", "ALTER COLUMN"],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "question": "Which SQL clause is used to specify conditions on aggregate functions?",
    "options": ["WHERE", "GROUP BY", "HAVING", "FILTER BY"],
    "correctAnswer": 3
  },
  {
    "id": 23,
    "question": "Which SQL function returns the largest value of a column?",
    "options": ["MIN()", "MAX()", "TOP()", "LARGEST()"],
    "correctAnswer": 2
  },
  {
    "id": 24,
    "question": "Which SQL function returns the smallest value of a column?",
    "options": ["SMALL()", "MIN()", "LOWEST()", "BOTTOM()"],
    "correctAnswer": 2
  },
  {
    "id": 25,
    "question": "Which SQL statement is used to modify existing data in a table?",
    "options": ["MODIFY", "ALTER", "UPDATE", "CHANGE"],
    "correctAnswer": 3
  },
  {
    "id": 26,
    "question": "Which SQL clause is used to combine rows from two or more tables based on a related column?",
    "options": ["JOIN", "MERGE", "UNION", "LINK"],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "Which JOIN returns only matching rows from both tables?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "Which JOIN returns all rows from the left table and matched rows from the right table?",
    "options": ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    "correctAnswer": 1
  },
  {
    "id": 29,
    "question": "Which JOIN returns all rows from the right table and matched rows from the left table?",
    "options": ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "FULL JOIN"],
    "correctAnswer": 1
  },
  {
    "id": 30,
    "question": "Which JOIN returns all rows when there is a match in either table?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    "correctAnswer": 4
  },
  {
    "id": 31,
    "question": "Which SQL operator is used to search for a specified pattern in a column?",
    "options": ["LIKE", "PATTERN", "MATCH", "SEARCH"],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "question": "Which SQL keyword is used to specify ascending or descending order in a query?",
    "options": ["ORDER BY", "SORT BY", "GROUP BY", "FILTER BY"],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Which SQL function calculates the total sum of a numeric column?",
    "options": ["SUM()", "TOTAL()", "ADD()", "COUNT()"],
    "correctAnswer": 1
  },
  {
    "id": 34,
    "question": "Which SQL function returns the number of unique values in a column?",
    "options": ["COUNT()", "DISTINCT()", "COUNT(DISTINCT)", "UNIQUE()"],
    "correctAnswer": 3
  },
  {
    "id": 35,
    "question": "Which SQL keyword is used to remove all rows from a table without deleting the table?",
    "options": ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    "correctAnswer": 3
  },
  {
    "id": 36,
    "question": "Which SQL keyword is used to remove a table and its data permanently?",
    "options": ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
    "correctAnswer": 2
  },
  {
    "id": 37,
    "question": "Which SQL constraint ensures that a column cannot have NULL values?",
    "options": ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"],
    "correctAnswer": 2
  },
  {
    "id": 38,
    "question": "Which SQL constraint ensures unique values in a column?",
    "options": ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
    "correctAnswer": 3
  },
  {
    "id": 39,
    "question": "Which SQL constraint is used to enforce referential integrity?",
    "options": ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
    "correctAnswer": 2
  },
  {
    "id": 40,
    "question": "Which SQL constraint is used to enforce a condition on a column?",
    "options": ["CHECK", "NOT NULL", "PRIMARY KEY", "FOREIGN KEY"],
    "correctAnswer": 1
  },
  {
    "id": 41,
    "question": "Which SQL clause is used to combine the result of two SELECT statements?",
    "options": ["UNION", "JOIN", "MERGE", "COMBINE"],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Which SQL clause is used to combine the result of two SELECT statements including duplicates?",
    "options": ["UNION ALL", "UNION", "JOIN ALL", "MERGE ALL"],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "Which SQL keyword is used to remove a database?",
    "options": ["DROP DATABASE", "DELETE DATABASE", "REMOVE DATABASE", "TRUNCATE DATABASE"],
    "correctAnswer": 1
  },
  {
    "id": 44,
    "question": "Which SQL statement is used to rename a table?",
    "options": ["ALTER TABLE ... RENAME", "RENAME TABLE", "MODIFY TABLE", "CHANGE TABLE"],
    "correctAnswer": 1
  },
  {
    "id": 45,
    "question": "Which SQL keyword is used to prevent duplicate rows in the result set?",
    "options": ["DISTINCT", "UNIQUE", "UNION", "PRIMARY KEY"],
    "correctAnswer": 1
  },
  {
    "id": 46,
    "question": "Which SQL function rounds a numeric field to the nearest integer?",
    "options": ["ROUND()", "CEIL()", "FLOOR()", "TRUNC()"],
    "correctAnswer": 1
  },
  {
    "id": 47,
    "question": "Which SQL function rounds a numeric field up to the nearest integer?",
    "options": ["ROUND()", "CEIL()", "FLOOR()", "TRUNC()"],
    "correctAnswer": 2
  },
  {
    "id": 48,
    "question": "Which SQL function rounds a numeric field down to the nearest integer?",
    "options": ["ROUND()", "CEIL()", "FLOOR()", "TRUNC()"],
    "correctAnswer": 3
  },
  {
    "id": 49,
    "question": "Which SQL function removes leading and trailing spaces from a string?",
    "options": ["TRIM()", "STRIP()", "REMOVE()", "CLEAN()"],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "question": "Which SQL function returns the current date?",
    "options": ["CURRENT_DATE()", "NOW()", "GETDATE()", "TODAY()"],
    "correctAnswer": 1
  },
  {
    "id": 51,
    "question": "Which SQL function returns the current time?",
    "options": ["CURRENT_TIME()", "NOW()", "GETTIME()", "TIME()"],
    "correctAnswer": 1
  },
  {
    "id": 52,
    "question": "Which SQL function returns the current timestamp?",
    "options": ["CURRENT_TIMESTAMP()", "NOW()", "GETTIMESTAMP()", "TIMESTAMP()"],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "question": "Which SQL clause is used to specify the number of records to return?",
    "options": ["LIMIT", "TOP", "ROWNUM", "FETCH"],
    "correctAnswer": 1
  },
  {
    "id": 54,
    "question": "Which SQL keyword is used to change a column name?",
    "options": ["ALTER COLUMN", "RENAME COLUMN", "MODIFY COLUMN", "CHANGE COLUMN"],
    "correctAnswer": 2
  },
  {
    "id": 55,
    "question": "Which SQL function returns the remainder of a division?",
    "options": ["MOD()", "REM()", "DIV()", "REMAINDER()"],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "Which SQL function returns the number of characters in a string?",
    "options": ["LEN()", "LENGTH()", "CHARCOUNT()", "SIZE()"],
    "correctAnswer": 2
  },
  {
    "id": 57,
    "question": "Which SQL statement is used to create an index on a table?",
    "options": ["CREATE INDEX", "ADD INDEX", "MAKE INDEX", "INSERT INDEX"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which SQL keyword is used to prevent the insertion of duplicate records?",
    "options": ["UNIQUE", "DISTINCT", "PRIMARY KEY", "CHECK"],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "question": "Which SQL command is used to start a transaction?",
    "options": ["BEGIN", "START", "COMMIT", "ROLLBACK"],
    "correctAnswer": 1
  },
  {
    "id": 60,
    "question": "Which SQL command is used to save changes made in a transaction?",
    "options": ["COMMIT", "SAVE", "APPLY", "END"],
    "correctAnswer": 1
  },
  {
    "id": 61,
    "question": "Which SQL command is used to undo changes in a transaction?",
    "options": ["ROLLBACK", "UNDO", "REVERT", "CANCEL"],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "question": "Which SQL command is used to make permanent changes to the database?",
    "options": ["COMMIT", "ROLLBACK", "SAVE", "UPDATE"],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "Which SQL operator is used to combine multiple conditions?",
    "options": ["AND", "OR", "NOT", "ALL"],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "Which SQL operator is used to specify alternative conditions?",
    "options": ["OR", "AND", "NOT", "XOR"],
    "correctAnswer": 1
  },
  {
    "id": 65,
    "question": "Which SQL operator is used to negate a condition?",
    "options": ["NOT", "AND", "OR", "NEGATE"],
    "correctAnswer": 1
  },
  {
    "id": 66,
    "question": "Which SQL clause is used to specify conditions for groups?",
    "options": ["HAVING", "WHERE", "GROUP BY", "FILTER"],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "Which SQL clause is used to rename a column in the result set?",
    "options": ["AS", "RENAME", "ALIAS", "COLUMN AS"],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Which SQL statement is used to remove all rows from a table?",
    "options": ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "question": "Which SQL statement is used to remove one row from a table?",
    "options": ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "question": "Which SQL keyword is used to specify a default value for a column?",
    "options": ["DEFAULT", "SET", "VALUE", "ASSIGN"],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Which SQL function returns the number of rows in a table?",
    "options": ["COUNT()", "ROWS()", "NUM()", "TOTAL()"],
    "correctAnswer": 1
  },
  {
    "id": 72,
    "question": "Which SQL function returns the sum of all values in a column?",
    "options": ["SUM()", "TOTAL()", "ADD()", "AGGREGATE()"],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "Which SQL function returns the average value of a column?",
    "options": ["AVG()", "MEAN()", "SUM()/COUNT()", "AVERAGE()"],
    "correctAnswer": 1
  },
  {
    "id": 74,
    "question": "Which SQL clause is used to group rows that have the same values?",
    "options": ["GROUP BY", "HAVING", "WHERE", "ORDER BY"],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "Which SQL clause is used to filter groups after aggregation?",
    "options": ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "question": "Which SQL keyword is used to create a view?",
    "options": ["CREATE VIEW", "MAKE VIEW", "ADD VIEW", "INSERT VIEW"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Which SQL keyword is used to update a column in multiple rows?",
    "options": ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
    "correctAnswer": 1
  },
  {
    "id": 78,
    "question": "Which SQL keyword is used to remove all indexes on a table?",
    "options": ["DROP INDEX", "DELETE INDEX", "REMOVE INDEX", "TRUNCATE INDEX"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "Which SQL keyword is used to add a foreign key to a table?",
    "options": ["ADD FOREIGN KEY", "ALTER TABLE ... ADD FOREIGN KEY", "CREATE FOREIGN KEY", "INSERT FOREIGN KEY"],
    "correctAnswer": 2
  },
  {
    "id": 80,
    "question": "Which SQL statement is used to merge two tables based on a condition?",
    "options": ["MERGE", "JOIN", "COMBINE", "UNION"],
    "correctAnswer": 1
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
  },
  {
    "id": 21,
    "question": "Which AI technique is inspired by evolution and natural selection?",
    "options": ["Neural Networks", "Genetic Algorithms", "Decision Trees", "Fuzzy Logic"],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "question": "Which type of learning uses labeled data?",
    "options": ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Deep Learning"],
    "correctAnswer": 1
  },
  {
    "id": 23,
    "question": "Which AI technique is commonly used for recommendation systems?",
    "options": ["Decision Trees", "Collaborative Filtering", "Naive Bayes", "Genetic Algorithms"],
    "correctAnswer": 2
  },
  {
    "id": 24,
    "question": "Which type of neural network is used for sequential data like text or time series?",
    "options": ["CNN", "RNN", "DNN", "GAN"],
    "correctAnswer": 2
  },
  {
    "id": 25,
    "question": "Which of the following is a type of unsupervised learning?",
    "options": ["Clustering", "Regression", "Classification", "Decision Trees"],
    "correctAnswer": 1
  },
  {
    "id": 26,
    "question": "Which AI model generates new data similar to training data?",
    "options": ["GAN", "RNN", "SVM", "Random Forest"],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "Which evaluation metric is commonly used for classification models?",
    "options": ["Accuracy", "Mean Squared Error", "R-squared", "Cohen’s Kappa"],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "Which of these is a limitation of AI?",
    "options": ["High accuracy on all tasks", "Requires large datasets", "Self-awareness", "Creativity"],
    "correctAnswer": 2
  },
  {
    "id": 29,
    "question": "Which algorithm is widely used for spam email detection?",
    "options": ["K-Means", "Naive Bayes", "Decision Trees", "Linear Regression"],
    "correctAnswer": 2
  },
  {
    "id": 30,
    "question": "Which AI technique is used in autonomous vehicles for decision-making?",
    "options": ["Computer Vision", "Natural Language Processing", "Speech Recognition", "Recommender Systems"],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "question": "Which AI approach is based on trial and error learning with feedback?",
    "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning"],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "question": "Which of the following is a type of deep learning model?",
    "options": ["Convolutional Neural Network", "Decision Tree", "Linear Regression", "K-Means"],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Which activation function outputs values between 0 and 1?",
    "options": ["ReLU", "Sigmoid", "Tanh", "Linear"],
    "correctAnswer": 2
  },
  {
    "id": 34,
    "question": "Which activation function outputs values between -1 and 1?",
    "options": ["Sigmoid", "Tanh", "ReLU", "Linear"],
    "correctAnswer": 2
  },
  {
    "id": 35,
    "question": "Which AI algorithm is used for predicting continuous numeric values?",
    "options": ["Regression", "Classification", "Clustering", "Decision Trees"],
    "correctAnswer": 1
  },
  {
    "id": 36,
    "question": "Which AI field focuses on speech recognition and processing?",
    "options": ["Computer Vision", "Natural Language Processing", "Speech Recognition", "Robotics"],
    "correctAnswer": 3
  },
  {
    "id": 37,
    "question": "Which machine learning algorithm is used to find patterns in unlabeled data?",
    "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
    "correctAnswer": 2
  },
  {
    "id": 38,
    "question": "Which AI algorithm is used for image recognition tasks?",
    "options": ["CNN", "RNN", "Linear Regression", "Decision Trees"],
    "correctAnswer": 1
  },
  {
    "id": 39,
    "question": "Which AI term refers to the process of tuning model parameters to minimize error?",
    "options": ["Training", "Testing", "Validation", "Inference"],
    "correctAnswer": 1
  },
  {
    "id": 40,
    "question": "Which AI technique is used for anomaly detection?",
    "options": ["Clustering", "Regression", "Classification", "Association Rules"],
    "correctAnswer": 1
  },
  {
    "id": 41,
    "question": "Which of the following is an unsupervised feature learning method?",
    "options": ["Autoencoder", "Decision Tree", "Linear Regression", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Which AI concept refers to learning representations of input data automatically?",
    "options": ["Feature Engineering", "Feature Learning", "Dimensionality Reduction", "Clustering"],
    "correctAnswer": 2
  },
  {
    "id": 43,
    "question": "Which AI approach uses probabilities for decision making?",
    "options": ["Bayesian Networks", "Decision Trees", "Neural Networks", "Genetic Algorithms"],
    "correctAnswer": 1
  },
  {
    "id": 44,
    "question": "Which AI technique is used to reduce dimensionality of data?",
    "options": ["PCA", "K-Means", "Decision Tree", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 45,
    "question": "Which AI approach simulates the functioning of the human brain?",
    "options": ["Genetic Algorithms", "Neural Networks", "Decision Trees", "Bayesian Networks"],
    "correctAnswer": 2
  },
  {
    "id": 46,
    "question": "Which AI method is commonly used in self-driving cars for object detection?",
    "options": ["RNN", "CNN", "Linear Regression", "K-Means"],
    "correctAnswer": 2
  },
  {
    "id": 47,
    "question": "Which AI method is commonly used in game-playing agents like AlphaGo?",
    "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Linear Regression"],
    "correctAnswer": 1
  },
  {
    "id": 48,
    "question": "Which AI evaluation metric is used for regression tasks?",
    "options": ["Mean Squared Error", "Accuracy", "Precision", "Recall"],
    "correctAnswer": 1
  },
  {
    "id": 49,
    "question": "Which technique prevents overfitting by adding a penalty to large coefficients?",
    "options": ["Regularization", "Normalization", "Gradient Descent", "Pooling"],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "question": "Which optimization algorithm is commonly used to train neural networks?",
    "options": ["Gradient Descent", "Decision Trees", "K-Means", "Linear Regression"],
    "correctAnswer": 1
  },
  {
    "id": 51,
    "question": "Which AI method uses layers of neurons for learning?",
    "options": ["Deep Learning", "Machine Learning", "Reinforcement Learning", "Decision Trees"],
    "correctAnswer": 1
  },
  {
    "id": 52,
    "question": "Which AI field focuses on robots interacting with the environment?",
    "options": ["Computer Vision", "Natural Language Processing", "Robotics", "Expert Systems"],
    "correctAnswer": 3
  },
  {
    "id": 53,
    "question": "Which AI model is used for language translation?",
    "options": ["RNN", "CNN", "Decision Tree", "SVM"],
    "correctAnswer": 1
  },
  {
    "id": 54,
    "question": "Which AI method uses reward signals to learn optimal behavior?",
    "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning"],
    "correctAnswer": 1
  },
  {
    "id": 55,
    "question": "Which AI evaluation metric measures the ratio of correctly predicted positives?",
    "options": ["Precision", "Recall", "Accuracy", "F1-Score"],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "Which AI evaluation metric measures the ratio of actual positives detected?",
    "options": ["Precision", "Recall", "Accuracy", "F1-Score"],
    "correctAnswer": 2
  },
  {
    "id": 57,
    "question": "Which AI evaluation metric combines precision and recall into one score?",
    "options": ["F1-Score", "Accuracy", "ROC-AUC", "Log Loss"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which AI method is used for topic modeling in NLP?",
    "options": ["Latent Dirichlet Allocation", "Naive Bayes", "RNN", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "question": "Which AI approach is used to generate human-like text?",
    "options": ["GPT models", "Decision Trees", "K-Means", "SVM"],
    "correctAnswer": 1
  },
  {
    "id": 60,
    "question": "Which AI concept involves reasoning under uncertainty?",
    "options": ["Fuzzy Logic", "Decision Tree", "Neural Networks", "Genetic Algorithms"],
    "correctAnswer": 1
  },
  {
    "id": 61,
    "question": "Which AI algorithm is used for time-series forecasting?",
    "options": ["RNN", "CNN", "K-Means", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "question": "Which AI model is specifically designed for sequence-to-sequence tasks?",
    "options": ["RNN", "CNN", "Random Forest", "SVM"],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "Which technique reduces model complexity to avoid overfitting?",
    "options": ["Pruning", "Bagging", "Boosting", "Ensembling"],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "Which AI approach is commonly used for facial recognition?",
    "options": ["CNN", "RNN", "Naive Bayes", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 65,
    "question": "Which AI model uses attention mechanisms for NLP tasks?",
    "options": ["Transformer", "RNN", "CNN", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 66,
    "question": "Which AI method clusters similar data points together?",
    "options": ["K-Means", "Decision Tree", "Naive Bayes", "Linear Regression"],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "Which AI technique is used for dimensionality reduction in high-dimensional data?",
    "options": ["PCA", "SVM", "Decision Tree", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Which AI model is used for sentiment analysis on text data?",
    "options": ["Naive Bayes", "CNN", "RNN", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "question": "Which AI algorithm uses ensemble learning with multiple decision trees?",
    "options": ["Random Forest", "Gradient Boosting", "SVM", "K-Means"],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "question": "Which AI algorithm iteratively improves weak learners to form a strong model?",
    "options": ["Gradient Boosting", "Random Forest", "SVM", "K-Means"],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Which AI technique is used for handwriting recognition?",
    "options": ["CNN", "RNN", "K-Means", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 72,
    "question": "Which AI approach is used to simulate human decision-making processes?",
    "options": ["Expert Systems", "Neural Networks", "Genetic Algorithms", "Deep Learning"],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "Which AI technique is used for anomaly detection in data streams?",
    "options": ["Isolation Forest", "Decision Tree", "Naive Bayes", "Linear Regression"],
    "correctAnswer": 1
  },
  {
    "id": 74,
    "question": "Which AI technique learns a policy to maximize cumulative rewards?",
    "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning"],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "Which AI technique is used for optical character recognition (OCR)?",
    "options": ["CNN", "RNN", "Naive Bayes", "Decision Tree"],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "question": "Which AI algorithm is used for object detection in images?",
    "options": ["YOLO", "RNN", "Decision Tree", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Which AI method is used to optimize hyperparameters automatically?",
    "options": ["Grid Search", "Random Forest", "Decision Tree", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 78,
    "question": "Which AI approach is used for speech synthesis?",
    "options": ["Text-to-Speech (TTS)", "Speech-to-Text (STT)", "RNN", "CNN"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "Which AI algorithm is used for topic clustering in large document collections?",
    "options": ["Latent Dirichlet Allocation", "K-Means", "Decision Tree", "Naive Bayes"],
    "correctAnswer": 1
  },
  {
    "id": 80,
    "question": "Which AI method is used to detect fraudulent transactions?",
    "options": ["Anomaly Detection", "Decision Tree", "Naive Bayes", "Linear Regression"],
    "correctAnswer": 1
  }
  ],
  DSA:[
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
  },
  {
    "id": 21,
    "question": "Which data structure is used in Breadth First Search (BFS)?",
    "options": ["Queue", "Stack", "Heap", "Array"],
    "correctAnswer": 1
  },
  {
    "id": 22,
    "question": "Which data structure is used to implement recursion internally?",
    "options": ["Queue", "Stack", "Heap", "Graph"],
    "correctAnswer": 2
  },
  {
    "id": 23,
    "question": "Which data structure allows insertion and deletion from both ends?",
    "options": ["Stack", "Queue", "Deque", "Linked List"],
    "correctAnswer": 3
  },
  {
    "id": 24,
    "question": "Which of the following is NOT a linear data structure?",
    "options": ["Array", "Stack", "Queue", "Graph"],
    "correctAnswer": 4
  },
  {
    "id": 25,
    "question": "Which sorting algorithm is NOT stable?",
    "options": ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
    "correctAnswer": 3
  },
  {
    "id": 26,
    "question": "Which data structure is used in implementing a LRU cache?",
    "options": ["Stack", "Queue", "Hash Map + Doubly Linked List", "Heap"],
    "correctAnswer": 3
  },
  {
    "id": 27,
    "question": "Which data structure is used in a priority queue?",
    "options": ["Heap", "Stack", "Queue", "Linked List"],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "What is the height of a balanced binary tree with n nodes?",
    "options": ["O(n)", "O(log n)", "O(n^2)", "O(sqrt n)"],
    "correctAnswer": 2
  },
  {
    "id": 29,
    "question": "Which data structure is used for implementing undo operations in software?",
    "options": ["Queue", "Stack", "Heap", "Linked List"],
    "correctAnswer": 2
  },
  {
    "id": 30,
    "question": "Which graph traversal technique uses a stack?",
    "options": ["DFS", "BFS", "Dijkstra", "Kruskal"],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "question": "Which data structure is used to implement a recursive algorithm iteratively?",
    "options": ["Queue", "Stack", "Heap", "Linked List"],
    "correctAnswer": 2
  },
  {
    "id": 32,
    "question": "Which algorithm is used to detect a cycle in a directed graph?",
    "options": ["DFS", "BFS", "Kruskal", "Prim"],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Which data structure provides the fastest access to elements by key?",
    "options": ["Array", "Linked List", "Hash Table", "Stack"],
    "correctAnswer": 3
  },
  {
    "id": 34,
    "question": "Which algorithm technique is used in Merge Sort?",
    "options": ["Divide and Conquer", "Greedy", "Dynamic Programming", "Backtracking"],
    "correctAnswer": 1
  },
  {
    "id": 35,
    "question": "Which data structure is used for memory-efficient string storage and retrieval?",
    "options": ["Trie", "Hash Table", "Stack", "Queue"],
    "correctAnswer": 1
  },
  {
    "id": 36,
    "question": "Which data structure is best suited for implementing a call stack?",
    "options": ["Queue", "Stack", "Heap", "Tree"],
    "correctAnswer": 2
  },
  {
    "id": 37,
    "question": "Which is the time complexity of searching in a balanced binary search tree?",
    "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    "correctAnswer": 2
  },
  {
    "id": 38,
    "question": "Which algorithm finds minimum spanning tree by considering edges in increasing weight order?",
    "options": ["Prim's Algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm"],
    "correctAnswer": 3
  },
  {
    "id": 39,
    "question": "Which data structure stores elements in hierarchical order?",
    "options": ["Array", "Stack", "Tree", "Queue"],
    "correctAnswer": 3
  },
  {
    "id": 40,
    "question": "Which data structure is ideal for representing a graph?",
    "options": ["Array", "Linked List", "Adjacency List/Matrix", "Stack"],
    "correctAnswer": 3
  },
  {
    "id": 41,
    "question": "Which data structure is used for adjacency representation in sparse graphs?",
    "options": ["Adjacency Matrix", "Adjacency List", "Stack", "Queue"],
    "correctAnswer": 2
  },
  {
    "id": 42,
    "question": "Which algorithm is used for topological sorting in a directed acyclic graph?",
    "options": ["DFS based algorithm", "BFS based algorithm", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "Which algorithm repeatedly divides the array into two halves to find an element?",
    "options": ["Linear Search", "Binary Search", "Jump Search", "Exponential Search"],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "Which algorithm is used to find all-pairs shortest paths in a weighted graph?",
    "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm"],
    "correctAnswer": 2
  },
  {
    "id": 45,
    "question": "Which algorithm sorts using a heap data structure?",
    "options": ["Merge Sort", "Heap Sort", "Quick Sort", "Bubble Sort"],
    "correctAnswer": 2
  },
  {
    "id": 46,
    "question": "Which search algorithm works on a sorted array and checks elements at intervals first?",
    "options": ["Binary Search", "Jump Search", "Linear Search", "Exponential Search"],
    "correctAnswer": 2
  },
  {
    "id": 47,
    "question": "Which algorithm finds the shortest path from a single source to all other vertices even if negative weights exist?",
    "options": ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm"],
    "correctAnswer": 2
  },
  {
    "id": 48,
    "question": "Which algorithm is commonly used in pattern matching?",
    "options": ["KMP Algorithm", "Dijkstra's Algorithm", "DFS", "Floyd-Warshall Algorithm"],
    "correctAnswer": 1
  },
  {
    "id": 49,
    "question": "Which algorithm sorts by selecting a pivot and partitioning the array around it?",
    "options": ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
    "correctAnswer": 2
  },
  {
    "id": 50,
    "question": "Which algorithm is used for finding strongly connected components in a graph?",
    "options": ["Kosaraju's Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm"],
    "correctAnswer": 1
  },
  {
    "id": 51,
    "question": "Which algorithm uses memoization to optimize recursive solutions?",
    "options": ["Dynamic Programming", "Greedy", "Backtracking", "Divide and Conquer"],
    "correctAnswer": 1
  },
  {
    "id": 52,
    "question": "Which algorithm is used to detect cycles in an undirected graph?",
    "options": ["DFS", "BFS", "Union-Find", "Dijkstra"],
    "correctAnswer": 3
  },
  {
    "id": 53,
    "question": "Which sorting algorithm is stable and uses insertion to sort elements?",
    "options": ["Insertion Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    "correctAnswer": 1
  },
  {
    "id": 54,
    "question": "Which algorithm is best for shortest paths in dense graphs?",
    "options": ["Dijkstra", "Floyd-Warshall", "Bellman-Ford", "Prim"],
    "correctAnswer": 2
  },
  {
    "id": 55,
    "question": "Which algorithm is greedy and selects minimum edges to form MST?",
    "options": ["Kruskal", "Prim", "Dijkstra", "Bellman-Ford"],
    "correctAnswer": 1
  },
  {
    "id": 56,
    "question": "Which algorithm is used for longest common subsequence problem?",
    "options": ["Dynamic Programming", "Greedy", "Divide and Conquer", "Backtracking"],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "Which data structure is used in implementing BFS to store nodes at current level?",
    "options": ["Queue", "Stack", "Heap", "Array"],
    "correctAnswer": 1
  },
  {
    "id": 58,
    "question": "Which algorithm technique tries all possibilities and backtracks if solution fails?",
    "options": ["Backtracking", "Greedy", "Divide and Conquer", "Dynamic Programming"],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "question": "Which algorithm is used to find articulation points in a graph?",
    "options": ["DFS based Tarjan's Algorithm", "BFS based Algorithm", "Dijkstra", "Prim"],
    "correctAnswer": 1
  },
  {
    "id": 60,
    "question": "Which data structure is used in implementing a min/max heap?",
    "options": ["Array", "Linked List", "Tree", "Stack"],
    "correctAnswer": 3
  },
  {
    "id": 61,
    "question": "Which algorithm is used for solving the knapsack problem optimally?",
    "options": ["Dynamic Programming", "Greedy", "DFS", "Backtracking"],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "question": "Which algorithm technique is used in Huffman coding?",
    "options": ["Greedy", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "Which algorithm is used to detect cycle in a directed graph?",
    "options": ["DFS with recursion stack", "BFS", "Union-Find", "Dijkstra"],
    "correctAnswer": 1
  },
  {
    "id": 64,
    "question": "Which sorting algorithm has O(n log n) worst-case complexity?",
    "options": ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
    "correctAnswer": 1
  },
  {
    "id": 65,
    "question": "Which algorithm finds shortest paths from all nodes to all nodes?",
    "options": ["Dijkstra", "Floyd-Warshall", "Bellman-Ford", "Prim"],
    "correctAnswer": 2
  },
  {
    "id": 66,
    "question": "Which algorithm technique is used in matrix chain multiplication?",
    "options": ["Greedy", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
    "correctAnswer": 2
  },
  {
    "id": 67,
    "question": "Which algorithm is used for topological sorting using DFS?",
    "options": ["DFS with stack", "BFS with queue", "Dijkstra", "Kruskal"],
    "correctAnswer": 1
  },
  {
    "id": 68,
    "question": "Which data structure is used in implementing adjacency matrix of a graph?",
    "options": ["2D Array", "Linked List", "Queue", "Stack"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "question": "Which algorithm is used in finding connected components of a graph?",
    "options": ["DFS", "BFS", "Union-Find", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 70,
    "question": "Which algorithm is used to find minimum cost spanning tree in a graph?",
    "options": ["Kruskal", "Prim", "Dijkstra", "Floyd-Warshall"],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "Which algorithm technique is used in coin change problem for optimal solution?",
    "options": ["Greedy", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
    "correctAnswer": 2
  },
  {
    "id": 72,
    "question": "Which algorithm is used to solve N-Queens problem?",
    "options": ["Greedy", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
    "correctAnswer": 3
  },
  {
    "id": 73,
    "question": "Which algorithm is used in detecting strongly connected components?",
    "options": ["Kosaraju", "Tarjan", "DFS", "All of the above"],
    "correctAnswer": 4
  },
  {
    "id": 74,
    "question": "Which data structure is used to implement priority queues efficiently?",
    "options": ["Heap", "Stack", "Queue", "Linked List"],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "Which algorithm is used to find the longest increasing subsequence?",
    "options": ["Greedy", "Dynamic Programming", "DFS", "BFS"],
    "correctAnswer": 2
  },
  {
    "id": 76,
    "question": "Which algorithm technique is used in fractional knapsack problem?",
    "options": ["Greedy", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Which algorithm is used for detecting articulation points in a graph?",
    "options": ["DFS based Tarjan's Algorithm", "BFS based Algorithm", "Dijkstra", "Prim"],
    "correctAnswer": 1
  },
  {
    "id": 78,
    "question": "Which algorithm is used to find the maximum flow in a network?",
    "options": ["Ford-Fulkerson", "Dijkstra", "Prim", "Kruskal"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "Which algorithm technique is used in solving subset sum problem optimally?",
    "options": ["Greedy", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
    "correctAnswer": 2
  },
  {
    "id": 80,
    "question": "Which algorithm is used to find the shortest path in a graph with negative weights?",
    "options": ["Bellman-Ford", "Dijkstra", "Floyd-Warshall", "Prim"],
    "correctAnswer": 1
  }
  ]
};