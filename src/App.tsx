import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main className="max-w-4xl mx-auto px-2">
      <Header image={{ src: goalsImg, alt: "An image of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        id={1}
        title="Learn TS"
        description="Crash course for learning TS"
      >
        Start at : Monday
      </CourseGoal>
    </main>
  );
}

export default App;
