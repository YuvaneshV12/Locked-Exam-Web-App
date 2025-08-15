import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionAnsweredProps {
  questions: Question[];
  userAnswers: number[];
  onBack: () => void;
}

const QuestionAnswered = ({ questions, userAnswers, onBack }: QuestionAnsweredProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Exam Review
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Review your answers and correct answers
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Question {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-gray-900 font-medium">{q.question}</div>
                  <div className="space-y-2">
                    {q.options.map((option, i) => {
                      const isUserAnswer = i === userAnswer;
                      const isCorrectAnswer = i === q.correctAnswer;
                      return (
                        <div
                          key={i}
                          className={`flex items-center p-3 rounded-lg border-2 text-gray-800 ${
                            isCorrectAnswer
                              ? "border-green-500 bg-green-50"
                              : isUserAnswer && !isCorrectAnswer
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200"
                          }`}
                        >
                          <span className="font-bold w-6">{String.fromCharCode(65 + i)}</span>
                          <span className="ml-2">{option}</span>
                          {isUserAnswer && (
                            <span className="ml-auto">
                              {isCorrect ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-600" />
                              )}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswered;