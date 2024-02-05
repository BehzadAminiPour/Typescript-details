type Props = {
  id: number;
  title: string;
  description: string;
};

const CourseGoal = ({ title, description, id }: Props) => {
  return (
    <article>
      <div>
        <h2>
          {id}-{title}
        </h2>
        <p>{description}</p>
      </div>
      <button className="p-1 bg-red-500 text-slate-50 rounded-md px-2 mt-2">
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
