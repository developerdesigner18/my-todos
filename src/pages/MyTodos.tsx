import { useState } from "react";
// import Todos from "../components/MyTodos/Todos";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";

export default function MyTodos() {
  const [todo, setTodo] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xl flex flex-col mx-auto">
        <h3 className="font-bold mb-3">My todos</h3>
        <div className="flex flex-col gap-3">
          <Input onChange={setTodo} value={todo} placeholder="create a todo..." isCircleEnabled />
          <div className="flex gap-3">
            <Input
              className="w-full"
              onChange={setTodo}
              value={todo}
              placeholder="search todos..."
            />
            <Button className="">Search</Button>
            <Button className="" variant="pink">
              Create
            </Button>
          </div>

          {/* <Todos todos={["Hi", "Hello"]} /> */}

          <div className="bg-todo-white rounded-xl p-4 text-center ">
            <span className="text-todo-gray-400">
              You have no todo now. <br />
              Did you just get everything done?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
