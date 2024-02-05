import CourseGoal from "./components/CourseGoal";

function App() {
  return (
    <main className="max-w-4xl mx-auto px-2">
      <h1 className="text-red-500">Hello typescript</h1>
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
