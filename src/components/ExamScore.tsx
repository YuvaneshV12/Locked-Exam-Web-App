import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BarChart3, BookOpen, Home, LogIn, UserPlus, Menu, X } from "lucide-react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await axios.get(
          `https://locked-exam-web-app.onrender.com/api/fetch-scores/${userId}`
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

  const handleHome = () => {
    navigate("/subjectselection");
    setIsSidebarOpen(false);
  };
  const handleScore = () => {
    setIsSidebarOpen(false);
  };
  const handleLogin = () => {
    navigate("/login");
    setIsSidebarOpen(false);
  };
  const handleSignIn = () => {
    navigate("/signup");
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 bg-white shadow-md relative z-30">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 text-sky-600 mr-2" />
          <span className="text-xl font-bold text-sky-800">TechExamHub</span>
        </div>
        <button
          aria-label="Toggle Menu"
          className="text-sky-700"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-60 bg-white border-r shadow-lg py-8 px-4 z-20 md:relative absolute top-0 left-0 h-full md:h-auto`}
      >
        <div className="hidden md:flex items-center mb-10">
          <BookOpen className="w-8 h-8 text-sky-600 mr-2" />
          <span className="text-xl font-bold text-sky-800 select-none">TechExamHub</span>
        </div>
        <nav className="space-y-4 w-full mt-10">
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
          <button
            onClick={handleLogin}
            className="flex items-center px-4 py-2 text-sky-700 hover:bg-sky-100 w-full rounded-lg transition"
          >
            <LogIn className="w-5 h-5 mr-3" />
            Login
          </button>
          <button
            onClick={handleSignIn}
            className="flex items-center px-4 py-2 text-sky-700 hover:bg-sky-100 w-full rounded-lg transition"
          >
            <UserPlus className="w-5 h-5 mr-3" />
            SignUp
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto w-full">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-800">Your Exam Scores</h1>
          <p className="text-sky-600 mt-2 text-base md:text-lg">
            Here are your latest test performances.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {scores.length > 0 ? (
            scores.map((score) => (
              <Card
                key={score.id}
                className="border border-sky-200 bg-white shadow-sm rounded-2xl"
                aria-label={`Score for ${score.subject_name} taken on ${new Date(
                  score.created_at
                ).toLocaleString()}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-sky-800">{score.subject_name}</CardTitle>
                  <CardDescription className="text-sm text-sky-600">
                    Taken on {new Date(score.created_at).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sky-700 space-y-2">
                  <p>
                    Subject: <span className="font-semibold">{score.subject_id}</span>
                  </p>
                  <p>
                    Score: <span className="font-semibold">{score.score}/20</span>
                  </p>
                  <p>
                    Time Spent:{" "}
                    <span className="font-semibold">
                      {Math.floor(score.time_spent / 60)} mins {score.time_spent % 60} secs
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center text-sky-600 text-lg">
              No scores found. Take a test first!
            </div>
          )}
        </section>

        <footer className="w-full text-sky-700 text-center py-4 mt-16 text-sm md:text-base">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/yuvanesh-v-78730b32a"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-sky-900 transition"
          >
            Yuvanesh V
          </a>
        </footer>
      </main>
    </div>
  );
};

export default ExamScore;