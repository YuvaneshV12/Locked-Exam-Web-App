import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch("https://locked-exam-web-app.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Server error.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <BookOpen className="h-10 w-10 text-sky-500" />
            </div>
            <h1 className="text-5xl font-extrabold text-sky-700 tracking-tight">
              TechExamHub
            </h1>
          </div>
          <p className="text-sky-700 text-lg">
            Create your account and start testing your knowledge!
          </p>
        </div>

        <Card className="bg-white shadow-lg rounded-3xl border border-sky-300/60">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold text-center text-sky-800">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-sky-600 mt-1 text-lg">
              Create a new account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-8">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-lg font-medium text-sky-800 mb-3"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-sky-800 mb-3"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-sky-800 mb-3"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-lg font-medium text-sky-800 mb-3"
                >
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-md transition text-xl py-4"
              >
                Sign Up
              </Button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sky-700 text-lg">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-sky-900 font-semibold underline underline-offset-2 hover:text-sky-700 transition"
                >
                  Login here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="w-full text-sky-700 text-center py-4 mt-10">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/yuvanesh-v-78730b32a"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg underline hover:text-sky-400 transition"
          >
            Yuvanesh V
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;