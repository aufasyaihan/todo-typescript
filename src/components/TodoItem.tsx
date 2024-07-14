import React from "react";

const TodoItem: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default TodoItem;
