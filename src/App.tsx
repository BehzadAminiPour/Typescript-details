import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  //**Another way to define */
  // const [goals, setGoals] = useState<Array<CourseGoal>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: "Typescript",
        description: "Learn typescript in depth!",
      };
      return [...prevGoals, newGoals];
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-2">
      <Header image={{ src: goalsImg, alt: "An image of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button
        onClick={handleAddGoal}
        className="btn btn-sm bg-green-800 text-slate-50 px-1 rounded-md"
      >
        Add Goal
      </button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} className="bg-slate-300 p-2 my-2 rounded-sm">
            <CourseGoal title={goal.title} description={goal.description}>
              Start at : Monday
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
