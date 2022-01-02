import { selectPriorityArray, selectTypeArray } from "../data/Data";

const Form = ({ inputValue, setInputValue, tasks, setTasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();

    if (inputValue.content.length > 0) {
      setTasks([...tasks, { id: newId, ...inputValue, active: true }]);
      resetValues();
    }
  };

  const resetValues = () => {
    let today = new Date().toISOString().slice(0, 10);
    setInputValue({ content: "", category: "0", priority: "0", date: today });
  };

  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputValue({ ...inputValue, [event.target.name]: newValue });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="input-group mb-3 col-6"
      autocomplete="off"
    >
      <div className="input-group mb-3">
        <input
          value={inputValue.content}
          onChange={handleInput}
          type="text"
          name="content"
          placeholder="Insert a task"
          className="form-control"
        />
        <input
          type="date"
          value={inputValue.date}
          onChange={handleInput}
          name="date"
        />
        <select onChange={handleInput} name="priority">
          {selectPriorityArray.map((select, index) => {
            return (
              <option value={index} key={index}>
                {select.value}
              </option>
            );
          })}
        </select>
        <select onChange={handleInput} name="category">
          {selectTypeArray.map((select, index) => {
            return (
              <option value={index} key={index}>
                {select.value}
              </option>
            );
          })}
        </select>
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
