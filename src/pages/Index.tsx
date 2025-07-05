import { useState } from "react";
import SubjectSelection from "@/components/SubjectSelection";
import ExamInterface from "@/components/ExamInterface";
import ExamResults from "@/components/ExamResults";

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  questions: number;
  duration: number;
}

type AppState = 'selection' | 'exam' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('selection');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [examResults, setExamResults] = useState<{
    answers: number[];
    timeSpent: number;
    score: number;
  } | null>(null);

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentState('exam');
  };

  const handleExamComplete = (answers: number[], timeSpent: number, score: number) => {
    setExamResults({ answers, timeSpent, score });
    setCurrentState('results');
  };

  const handleRetakeExam = () => {
    setExamResults(null);
    setCurrentState('exam');
  };

  const handleBackToHome = () => {
    setSelectedSubject(null);
    setExamResults(null);
    setCurrentState('selection');
  };

  const handleExitExam = () => {
    setSelectedSubject(null);
    setCurrentState('selection');
  };

  return (
    <div className="min-h-screen">
      {currentState === 'selection' && (
        <SubjectSelection onSubjectSelect={handleSubjectSelect} />
      )}
      
      {currentState === 'exam' && selectedSubject && (
        <ExamInterface
          subject={selectedSubject}
          onExamComplete={handleExamComplete}
          onExit={handleExitExam}
        />
      )}
      
      {currentState === 'results' && selectedSubject && examResults && (
        <ExamResults
          subject={selectedSubject.name}
          score={examResults.score}
          totalQuestions={20}
          timeSpent={examResults.timeSpent}
          answers={examResults.answers}
          onRetakeExam={handleRetakeExam}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default Index;
