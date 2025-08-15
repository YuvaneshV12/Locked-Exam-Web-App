import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { questionsData, Question } from "./questionsData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ChevronLeft, ChevronRight, Flag, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface Subject {
  id: string;
  name: string;
  questions: number;
  duration: number;
}

interface ExamInterfaceProps {
  userId: number;
  subject: Subject;
  onExamComplete: (answers: number[], timeSpent: number, score: number) => void;
  onExit: () => void;
}

function getRandomQuestions(subjectId: string, count: number): Question[] {
  const allQuestions = questionsData[subjectId] || [];
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const ExamInterface = ({ subject, onExamComplete, onExit }: ExamInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions] = useState<Question[]>(getRandomQuestions(subject.id, 20));
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(subject.duration * 60); // seconds
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [subjectName] = useState(subject.name);

  // Enter fullscreen
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

  // Exit fullscreen
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

  // Start exam
  const handleExamStart = useCallback(async () => {
    await enterFullscreen();
    setExamStarted(true);
    toast.success("Exam started! Timer is now running.");
  }, [enterFullscreen]);

  // Calculate score
  const calculateScore = useCallback(() => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        correct++;
      }
    });
    return correct;
  }, [answers, questions]);

  // Submit exam
  const handleSubmit = useCallback(async () => {
    const score = calculateScore();
    const timeSpent = subject.duration * 60 - timeLeft;

    const storedUserId = localStorage.getItem("userId");
    const userId = storedUserId ? Number(storedUserId) : null;

    try {
      if (!userId) throw new Error("User not logged in");

      await fetch("https://locked-exam-web-app.onrender.com/api/submit-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          subjectName,
          subjectId: subject.id,
          score,
          timeSpent,
        }),
      });
    } catch (err) {
      toast.error("Failed to submit score");
      console.error(err);
    }

    await exitFullscreen();
    onExamComplete(answers, timeSpent, score);
  }, [answers, timeLeft, subject.id, subjectName, subject.duration, calculateScore, exitFullscreen, onExamComplete]);

  // Timer
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

  // Security: blur, tab switch, fullscreen exit, beforeunload
  useEffect(() => {
    if (!examStarted) return;

    const handleWindowBlur = () => {
      toast.error("Focus lost! Exam submitted.");
      handleSubmit();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        toast.error("Tab switch detected! Exam submitted.");
        handleSubmit();
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        toast.error("You exited fullscreen. Exam submitted.");
        handleSubmit();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      handleSubmit();
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [examStarted, handleSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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

  const answeredQuestions = answers.filter((answer) => answer !== -1).length;

  // Render start screen
  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-100 to-white flex items-center justify-center px-4 py-6">
        <Card className="max-w-md sm:max-w-2xl w-full bg-white/95 backdrop-blur-sm mx-2">
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
                  <div className="text-lg text-sky-600">{subject.questions}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="font-semibold">Duration</div>
                  <div className="text-lg text-sky-600">{subject.duration} min</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={onExit} className="flex-1 bg-blue-400 hover:bg-blue-700">
                  Cancel
                </Button>
                <Button onClick={handleExamStart} className="flex-1 bg-sky-400 hover:bg-sky-700">
                  Start Exam
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render exam interface
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">{subject.name}</h1>
            <div className="text-xs md:text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm md:text-base">
            <div className="flex items-center space-x-1 font-mono text-red-500">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className={`${timeLeft < 300 ? "text-red-500" : "text-gray-700"}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="text-gray-600 hidden sm:block">
              Progress: {answeredQuestions}/{questions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <div className="bg-white shadow-sm border-r p-4 overflow-x-auto md:overflow-x-hidden flex md:block space-x-2 md:space-x-0">
          <div className="flex md:grid md:grid-cols-4 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`
                  w-10 h-10 rounded text-sm font-medium transition-colors
                  ${currentQuestion === index
                    ? "bg-blue-600 text-white"
                    : answers[index] !== -1
                    ? "bg-green-200 text-green-700 hover:bg-green-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg">Question {currentQuestion + 1}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg text-gray-900 leading-relaxed">
                {questions[currentQuestion]?.question}
              </div>
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 transition-all text-base
                      ${
                        answers[currentQuestion] === index
                          ? "border-sky-500 bg-sky-50 text-sky-900"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`
                          w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium
                          ${
                            answers[currentQuestion] === index
                              ? "border-sky-500 bg-sky-500 text-white"
                              : "border-gray-300"
                          }
                        `}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center bg-blue-400 hover:bg-blue-700 space-x-2 w-1/2 sm:w-auto justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {currentQuestion === questions.length - 1 ? (
                <div className="flex justify-center w-full sm:w-auto">
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 w-full sm:w-auto justify-center"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Submit Exam</span>
                  </Button>
                </div>
              ) : (
                <div className="flex justify-center w-full sm:w-auto">
                  <Button
                    onClick={nextQuestion}
                    className="flex items-center bg-sky-400 hover:bg-sky-700 space-x-2 w-1/2 sm:w-auto justify-center"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;