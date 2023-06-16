interface Props {
  todo: string;
}

export default function Todo({ todo }: Props) {
  return <div>{todo}</div>;
}
