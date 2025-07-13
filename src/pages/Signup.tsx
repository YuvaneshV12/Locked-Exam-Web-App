import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      const response = await fetch(
        "https://locked-exam-web-app.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-12">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center mb-4 space-x-4 sm:mb-6">
            <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-white shadow-lg">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-sky-500" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-sky-700 tracking-tight">
              TechExamHub
            </h1>
          </div>
          <p className="text-sky-700 text-base sm:text-lg">
            Create your account and start testing your knowledge!
          </p>
        </div>

        {/* Card */}
        <Card className="bg-white shadow-lg rounded-3xl border border-sky-300/60 px-4 py-6 sm:px-6 sm:py-8">
          <CardHeader className="px-0">
            <CardTitle className="text-3xl sm:text-4xl font-semibold text-center text-sky-800">
              Sign Up
            </CardTitle>
            <CardDescription className="text-center text-sky-600 mt-2 text-base sm:text-lg">
              Create a new account to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 pt-4">
            <form onSubmit={handleSignup} className="space-y-6 sm:space-y-8">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base sm:text-lg font-medium text-sky-800 mb-2"
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

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base sm:text-lg font-medium text-sky-800 mb-2"
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

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base sm:text-lg font-medium text-sky-800 mb-2"
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

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base sm:text-lg font-medium text-sky-800 mb-2"
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

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-md transition text-lg sm:text-xl py-3 sm:py-4"
              >
                Sign Up
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-sky-700 text-base sm:text-lg">
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

        {/* Footer */}
        <div className="w-full text-sky-700 text-center py-4 mt-8 sm:mt-10 text-base sm:text-lg">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/yuvanesh-v-78730b32a"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-sky-400 transition"
          >
            Yuvanesh V
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;