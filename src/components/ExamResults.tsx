
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Clock, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react";

interface ExamResultsProps {
  subject: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: number[];
  onRetakeExam: () => void;
  onBackToHome: () => void;
}

const ExamResults = ({ 
  subject, 
  score, 
  totalQuestions, 
  timeSpent, 
  answers, 
  onRetakeExam, 
  onBackToHome 
}: ExamResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 60;
  const timeInMinutes = Math.floor(timeSpent / 60);
  const timeInSeconds = timeSpent % 60;

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-500' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-500' };
    return { grade: 'F', color: 'text-red-500' };
  };

  const { grade, color } = getGrade(percentage);

  const getResultMessage = () => {
    if (percentage >= 90) return "Outstanding Performance! 🌟";
    if (percentage >= 80) return "Excellent Work! 🎉";
    if (percentage >= 70) return "Good Job! 👍";
    if (percentage >= 60) return "Well Done! ✨";
    return "Keep Learning! 📚";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Trophy className={`w-16 h-16 ${passed ? 'text-yellow-500' : 'text-gray-400'}`} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Exam Completed!</h1>
          <p className="text-xl text-gray-600">{subject}</p>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className={`text-4xl font-bold ${color} mb-2`}>
                {grade}
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">
                {percentage}%
              </div>
              <div className="text-gray-600">Grade</div>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {score}
              </div>
              <div className="text-lg text-gray-600 mb-1">
                out of {totalQuestions}
              </div>
              <div className="text-gray-600">Correct Answers</div>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">
                {timeInMinutes}:{timeInSeconds.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-600">Time Taken</div>
            </CardContent>
          </Card>
        </div>

        {/* Result Message and Progress */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {getResultMessage()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Score Progress</span>
                  <span>{score}/{totalQuestions}</span>
                </div>
                <Progress 
                  value={percentage} 
                  className={`h-3 ${passed ? '' : 'opacity-75'}`}
                />
              </div>
              
              <div className={`p-4 rounded-lg border-l-4 ${
                passed 
                  ? 'bg-green-50 border-green-400' 
                  : 'bg-red-50 border-red-400'
              }`}>
                <div className="flex items-center">
                  {passed ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  <span className={`font-medium ${
                    passed ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {passed ? 'Congratulations! You passed the exam.' : 'Better luck next time! Keep studying and try again.'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Breakdown */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-green-700">Correct</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
                <div className="text-sm text-red-700">Incorrect</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{totalQuestions}</div>
                <div className="text-sm text-gray-700">Total</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
                <div className="text-sm text-blue-700">Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRetakeExam}
            variant="outline"
            size="lg"
            className="flex items-center space-x-2"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Retake Exam</span>
          </Button>
          
          <Button
            onClick={onBackToHome}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Results are automatically saved. Share your achievement with friends!</p>
        </div>
      </div>
    </div>
  );
};

export default ExamResults;
