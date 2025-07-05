import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Network, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  questions: number;
  duration: number;
}

const subjects: Subject[] = [
  {
    id: 'networking',
    name: 'Computer Networking',
    description: 'TCP/IP, OSI Model, Network Protocols, Security',
    icon: <Network className="w-8 h-8" />,
    questions: 20,
    duration: 20
  },
  {
    id: 'java',
    name: 'Java Programming',
    description: 'OOP, Collections, Multithreading, Spring Framework',
    icon: <Code className="w-8 h-8" />,
    questions: 20,
    duration: 20
  },
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Syntax, Data Types, Functions, OOP, Libraries',
    icon: <Code className="w-8 h-8" />,
    questions: 20,
    duration: 20
  },
  {
  id: 'AI',
  name: 'Artificial Intelligence',
  description: 'Machine Learning, NLP, Neural Networks, Robotics',
  icon: <Code className="w-8 h-8" />,
  questions: 20,
  duration: 20
  },
  {
  id: 'SQL',
  name: 'SQL Database',
  description: 'Queries, Joins, Transactions, Database Design',
  icon: <Code className="w-8 h-8" />,
  questions: 20,
  duration: 20
  },
  {
  id: 'dsa',
  name: 'Data Structures & Algorithms',
  description: 'Arrays, Linked Lists, Trees, Sorting, Searching',
  icon: <Code className="w-8 h-8" />,
  questions: 20,
  duration: 20
  },
];

interface SubjectSelectionProps {
  onSubjectSelect: (subject: Subject) => void;
}

const SubjectSelection = ({ onSubjectSelect }: SubjectSelectionProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center justify-center flex-1">
              <BookOpen className="w-12 h-12 text-indigo-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">TechExamHub</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your technical knowledge with our comprehensive exam platform. 
            Choose your domain and challenge yourself with 20 carefully curated questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
              onClick={() => onSubjectSelect(subject)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 text-indigo-600">
                  {subject.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {subject.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Questions:</span>
                    <span className="font-medium">{subject.questions}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium">{subject.duration} minutes</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubjectSelect(subject);
                  }}
                >
                  Start Exam
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Exam Instructions</h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• Each exam contains 20 multiple-choice questions</li>
              <li>• You have 20 minutes to complete the exam</li>
              <li>• The exam will enter full-screen mode for security</li>
              <li>• You cannot navigate away or refresh during the exam</li>
              <li>• Results will be shown immediately after submission</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
