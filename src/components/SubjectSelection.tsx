import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Network,
  Code,
  Code2,
  TreePine,
  BarChart3,
  Database,
  Brain,
  Cpu,
  Home,
} from "lucide-react";
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
    duration: 20,
  },
  {
    id: 'java',
    name: 'Java Programming',
    description: 'OOP, Collections, Multithreading, Spring Framework',
    icon: <Cpu className="w-8 h-8" />,
    questions: 20,
    duration: 20,
  },
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Syntax, Data Types, Functions, OOP, Libraries',
    icon: <Code2 className="w-8 h-8" />,
    questions: 20,
    duration: 20,
  },
  {
    id: 'AI',
    name: 'Artificial Intelligence',
    description: 'Machine Learning, NLP, Neural Networks, Robotics',
    icon: <Brain className="w-8 h-8" />,
    questions: 20,
    duration: 20,
  },
  {
    id: 'SQL',
    name: 'SQL Database',
    description: 'Queries, Joins, Transactions, Database Design',
    icon: <Database className="w-8 h-8" />,
    questions: 20,
    duration: 20,
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    description: 'Arrays, Linked Lists, Trees, Sorting, Searching',
    icon: <TreePine className="w-8 h-8" />,
    questions: 20,
    duration: 20,
  },
];

interface SubjectSelectionProps {
  onSubjectSelect: (subject: Subject) => void;
}

const SubjectSelection = ({ onSubjectSelect }: SubjectSelectionProps) => {
  const navigate = useNavigate();

  const handleHome = () => navigate("/subjectselection");
  const handleScore = () => navigate("/examscore");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r shadow-lg py-8 px-4 flex flex-col items-center">
        <div className="flex items-center mb-10">
          <BookOpen className="w-8 h-8 text-sky-600 mr-2" />
          <span className="text-xl font-bold text-sky-800">TechExamHub</span>
        </div>
        <nav className="space-y-4 w-full">
          <button
            onClick={handleHome}
            className="flex items-center px-4 py-2 text-sky-700 hover:bg-sky-100 w-full rounded-lg transition"
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </button>
          <button
            onClick={handleScore}
            className="flex items-center px-4 py-2 text-sky-700 hover:bg-sky-100 w-full rounded-lg transition"
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            My Score
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
          <BookOpen className="w-12 h-12 text-sky-600 mr-4" />
          <h1 className="text-5xl font-extrabold text-sky-800">TechExamHub</h1>
        </div>
            <p className="text-xl text-sky-700 max-w-2xl mx-auto">
              Test your technical knowledge with our comprehensive exam platform.
              Choose your domain and challenge yourself with 20 carefully curated questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject) => (
              <Card
                key={subject.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-sky-300/60 bg-white rounded-3xl"
                onClick={() => onSubjectSelect(subject)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-sky-600">
                    {subject.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-sky-800">
                    {subject.name}
                  </CardTitle>
                  <CardDescription className="text-sky-600">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-sky-700">
                      <span>Questions:</span>
                      <span className="font-medium">{subject.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm text-sky-700">
                      <span>Duration:</span>
                      <span className="font-medium">{subject.duration} minutes</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
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
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 max-w-2xl mx-auto shadow-md">
              <h3 className="text-lg font-semibold text-sky-800 mb-3">Exam Instructions</h3>
              <ul className="text-sm text-sky-700 space-y-2 text-left">
                <li>• Each exam contains 20 multiple-choice questions</li>
                <li>• You have 20 minutes to complete the exam</li>
                <li>• The exam will enter full-screen mode for security</li>
                <li>• You cannot navigate away or refresh during the exam</li>
                <li>• Results will be shown immediately after submission</li>
              </ul>
            </div>
          </div>

          <div className="w-full text-sky-700 text-center py-4 mt-16">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/yuvanesh-v-78730b32a"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg underline hover:text-sky-900 transition"
            >
              Yuvanesh V
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;