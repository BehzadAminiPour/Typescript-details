import { type ReactNode } from "react";
// using type before ReactNode is a good practice
type CourseGoalProps = {
  title: string;
  description: string;
  children: ReactNode;
};

//**An alternative way to use typescript**//
// import { FC } from "react";
// import { PropsWithChildren } from "react";

// type CourseGoalProps = PropsWithChildren<{
//   id: number;
//   title: string;
//   description: string;
// }>;

const CourseGoal = ({ title, description, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{children}</p>
      </div>
      <button className="p-1 bg-red-500 text-slate-50 rounded-md px-2 mt-2">
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;

//**An alternative way of typing components */
// const CourseGoal: FC<CourseGoalProps> = ({
//   id,
//   title,
//   description,
//   children,
// }) => {
//   return (
//     <article>
//       <div>
//         <h2>
//           {id}-{title}
//         </h2>
//         <p>{description}</p>
//         <p>{children}</p>
//       </div>
//       <button className="p-1 bg-red-500 text-slate-50 rounded-md px-2 mt-2">
//         Delete
//       </button>
//     </article>
//   );
// };

// export default CourseGoal;
