import { FormEvent, useRef } from "react";

const NewGoal = () => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className="my-2">
        <label className="mr-2" htmlFor="goal">
          Your Goal
        </label>
        <input className="rounded-md" type="text" id="goal" ref={goal} />
      </p>
      <p className="my-2">
        <label className="mr-2" htmlFor="summary">
          Short Summary
        </label>
        <input className="rounded-md" type="text" id="summary" ref={summary} />
      </p>
      <p className="my-2">
        <button className="bg-green-700 px-2 text-slate-50 rounded-md">
          Add Goal
        </button>
      </p>
    </form>
  );
};

export default NewGoal;
