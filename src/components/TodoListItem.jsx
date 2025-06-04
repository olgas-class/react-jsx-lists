import AppButton from "./AppButton";

const TodoListItem = ({ title, state, priority, time }) => {
  const checkState = (state) => {
    let color = "gray";
    if (state === "completed") {
      color = "green";
    } else if (state === "backlog") {
      color = "orange";
    } else if (state === "in_progress") {
      color = "lightblue";
    }
    return color;
  };

  return (
    <li>
      <h4>
        {title}
        <span className="state" style={{ backgroundColor: checkState(state) }}>
          {state}
        </span>
      </h4>
      <p>Priorità: {priority}</p>
      <p>Tempo stimato: {time} min</p>

      <AppButton text="Modifica" type="warning" />
      <AppButton text="Cancella" type="danger" />
    </li>
  );
};

export default TodoListItem;
