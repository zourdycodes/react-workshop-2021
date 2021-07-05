export const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button type="submit">{editId ? "Edit" : "Go"}</button>
    </form>
  );
};
