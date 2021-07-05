import { Button, List, TodoText, ListContainer } from "../global/Todo";

export const TodoLists = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ListContainer>
      {todos.map((t) => (
        <List>
          <TodoText key={t.id}>{t.todo}</TodoText>
          <Button onClick={() => handleEdit(t.id)}>Edit</Button>
          <Button onClick={() => handleDelete(t.id)}>Delete</Button>
        </List>
      ))}
    </ListContainer>
  );
};
