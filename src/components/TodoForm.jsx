import { FormContainer, Button, Input } from "../global/Todo";

export const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <Button type="submit">{editId ? "Edit" : "Go"}</Button>
    </FormContainer>
  );
};
