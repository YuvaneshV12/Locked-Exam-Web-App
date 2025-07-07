import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BarChart3, BookOpen, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Score {
  id: number;
  subject_id: string;
  subject_name: string;
  score: number;
  time_spent: number;
  created_at: string;
}

const ExamScore = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId"); // Make sure to set this on login

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/fetch-scores/${userId}`
        );
        setScores(res.data);
      } catch (err) {
        console.error("Error fetching scores", err);
      }
    };

    if (userId) {
      fetchScores();
    } else {
      navigate("/login");
    }
  }, [userId, navigate]);

  const handleHome = () => navigate("/subjectselection");

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
            disabled
            className="flex items-center px-4 py-2 bg-sky-100 text-sky-700 w-full rounded-lg"
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            My Score
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sky-800">Your Exam Scores</h1>
            <p className="text-sky-600 mt-2">
              Here are your latest test performances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scores.length > 0 ? (
              scores.map((score) => (
                <Card
                  key={score.id}
                  className="border border-sky-200 bg-white shadow-sm rounded-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-sky-800">
                      {score.subject_name}
                    </CardTitle>
                    <CardDescription className="text-sm text-sky-600">
                      Taken on {new Date(score.created_at).toLocaleString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sky-700 space-y-2">
                    <p>Course: <span className="font-semibold">{score.subject_id}/20</span></p>
                    <p>Score: <span className="font-semibold">{score.score}/20</span></p>
                    <p>Time Spent: <span className="font-semibold">{score.time_spent} mins</span></p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center text-sky-600">
                No scores found. Take a test first!
              </div>
            )}
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

export default ExamScore;