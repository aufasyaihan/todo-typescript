import React from "react";

const TodoItem: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <li>
      <h3 className="text-3xl font-bold">{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default TodoItem;
