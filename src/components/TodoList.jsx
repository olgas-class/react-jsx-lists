import AppButton from "./AppButton";
import StarTitle from "./StarTitle";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];
  //
  //   const filteredTasks = tasks.filter(
  //     (curTask) => curTask.state === "completed"
  //   );
  //
  //   console.log(filteredTasks);

  const buttonText = "Aggiungi un nuovo todo";

  return (
    <section className="container">
      <StarTitle titleText="Todolist" />

      <AppButton text={buttonText} type="success" />
      <ul className="todos">
        {tasks.map((curTask) => (
          <TodoListItem
            key={`task-${curTask.id}`}
            title={curTask.title}
            state={curTask.state}
            priority={curTask.priority}
            time={curTask.estimatedTime}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
