import { useState } from "react";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md flex flex-col mx-auto">
        <h3 className="font-bold mb-3">Sign Up or Log In</h3>
        <div className="flex flex-col items-end gap-3">
          <Input
            className="w-full"
            onChange={setEmail}
            value={email}
            placeholder="E-mail"
            isCircleEnabled
          />
          <Input
            className="w-full"
            onChange={setPassword}
            value={password}
            placeholder="Password"
            type="password"
            isCircleEnabled
          />
          <div>
            <Button className="mr-3">Log in</Button>
            <Button variant="pink">Signup</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
