import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
type CourseGoalList = { goals: CGoal[] };

const CourseGoalList = ({ goals }: CourseGoalList) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id} className="bg-slate-300 p-2 my-2 rounded-sm">
          <CourseGoal title={goal.title} description={goal.description}>
            Start at : Monday
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
