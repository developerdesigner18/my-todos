import Todo from "./Todo";

interface Props {
  todos: string[];
}

export default function Todos({ todos }: Props) {
  return todos.map((todo) => <Todo todo={todo} />);
}
