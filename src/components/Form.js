const Form = ({ inputValue, setInputValue, tasks, setTasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();
    if (inputValue.length > 0) {
      setTasks([...tasks, { id: newId, content: inputValue, active: true }]);
      setInputValue("");
    }
  };

  const handleInput = (event) => setInputValue(event.target.value);
  return (
    <form onSubmit={handleSubmit} className="input-group mb-3 col-6">
      <div className="input-group mb-3">
        <input
          value={inputValue}
          onChange={handleInput}
          type="text"
          placeholder="Insert a task"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
