
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
    // Add more questions as needed
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
  ],
  // Add more subjects...
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

  // Timer effect
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

  // Prevent navigation away
  useEffect(() => {
    if (!examStarted) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        toast.error("Warning: Tab switching detected!");
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
                  variant="outline" 
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
              variant="outline"
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
