import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import { USER_TOKEN } from "../utils/constants";

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordRegex = /^(.{8,})$/;

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErrors, setInputErrors] = useState("");

  const [createUser, { loading: isUserCreating, error: signupError }] = useMutation(gql`
    mutation CreateUser {
      createUser(email: "${email}", password: "${password}") {
        email,
      }
    }
  `);

  const [getToken, { data: tokenRes, loading: isUserSigningIn, error: signinError }] =
    useMutation(gql`
    mutation GetToken {
      token(email: "${email}", password: "${password}")
    }
  `);

  useEffect(() => {
    if (!tokenRes) return;
    localStorage.setItem(USER_TOKEN, tokenRes.token);

    navigate("/");
  }, [tokenRes]);

  const validateInputs = () => {
    setInputErrors("");

    if (!emailRegex.test(email)) {
      setInputErrors("Put a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setInputErrors("Password must be atleast 8 characters");
    }
  };

  const handleSignin = async () => {
    validateInputs();
    if (inputErrors) return;

    try {
      await getToken();

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = async () => {
    validateInputs();
    if (inputErrors) return;

    try {
      await createUser();

      await getToken();
    } catch (error) {
      console.error(error);
    }
  };

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
          {(inputErrors || signinError || signupError) && (
            <div className="border-1 border border-todo-pink-300 p-2 w-full text-center duration-300">
              <span className="text-todo-pink-300">
                {inputErrors || signinError?.message || signupError?.message}
              </span>
            </div>
          )}
          <div>
            <Button onClick={handleSignin} isDisabled={isUserSigningIn} className="mr-3">
              Log in
            </Button>
            <Button onClick={handleSignup} isDisabled={isUserCreating} variant="pink">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
