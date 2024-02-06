import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
//**Use alias for avoid repeatition CourseGoal type*/
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalList) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id} className="bg-slate-300 p-2 my-2 rounded-sm">
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={onDeleteGoal}
          >
            Start at : Monday
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
