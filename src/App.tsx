import { useState } from "react";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
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

  const handleDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto px-2">
      <Header image={{ src: goalsImg, alt: "An image of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </main>
  );
}

export default App;
