import CourseGoal from "./components/CourseGoal";

function App() {
  return (
    <main className="max-w-4xl mx-auto px-2">
      <h1 className="text-red-500">Hello typescript</h1>
      <CourseGoal title="Learn TS" description="Crash course for learning TS" />
    </main>
  );
}

export default App;
