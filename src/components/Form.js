import { useState } from "react";

import { selectPriorityArray, selectTypeArray } from "../data/optionsArray";
import Alert from "./Alert";

//Styled Components
import {
  Button,
  FormBody,
  FormFooter,
  HeaderForm,
  Input,
  InputGroup,
  Select,
  StyledForm,
} from "./styles/Form.elements";

const Form = ({
  inputValue,
  setInputValue,
  tasks,
  setTasks,
  showModal,
  setShowModal,
}) => {
  const [haveError, setHaveError] = useState(false);
  const [errorsToShow, setErrorsToShow] = useState([]);

  let today = new Date().toISOString().slice(0, 10);

  const validate = () => {
    let arrayErrors = [];
    if (inputValue.content.length === 0) {
      arrayErrors.push("Description");
    }
    if (inputValue.date === today) {
      arrayErrors.push("Deadline");
    }
    if (inputValue.category === "0") {
      arrayErrors.push("Category");
    }
    if (inputValue.priority === "0") {
      arrayErrors.push("Priority");
    }
    if (arrayErrors.length !== 0) {
      setErrorsToShow(arrayErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();

    if (validate() === true) {
      setTasks([...tasks, { id: newId, ...inputValue, active: true }]);
      resetValues();
      setShowModal(!showModal);
      setErrorsToShow([]);
    } else {
      setHaveError(true);
    }
  };

  const resetValues = () => {
    setInputValue({ content: "", category: "0", priority: "0", date: today });
  };

  const handleInput = (event) => {
    const newValue = event.target.value;
    setInputValue({ ...inputValue, [event.target.name]: newValue });
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      autoComplete="off"
      showModal={showModal}
    >
      <HeaderForm>
        <p>New Task</p>
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          ✖
        </button>
      </HeaderForm>
      <FormBody>
        <InputGroup big>
          <label>Description</label>
          <Input
            value={inputValue.content}
            onChange={handleInput}
            type="text"
            name="content"
            placeholder="Insert a task"
            maxLength={25}
          />
        </InputGroup>
        <InputGroup>
          <label>Deadline</label>
          <Input
            type="date"
            value={inputValue.date}
            onChange={handleInput}
            name="date"
          />
        </InputGroup>
        <InputGroup>
          <label>Priority</label>
          <Select onChange={handleInput} name="priority">
            {selectPriorityArray.map((select, index) => {
              return (
                <option value={index} key={index}>
                  {select.value}
                </option>
              );
            })}
          </Select>
        </InputGroup>
        <InputGroup>
          <label>Category</label>
          <Select onChange={handleInput} name="category">
            {selectTypeArray.map((select, index) => {
              return (
                <option value={index} key={index}>
                  {select.value}
                </option>
              );
            })}
          </Select>
        </InputGroup>
        <Alert haveError={haveError} errorsToShow={errorsToShow} />
        <FormFooter>
          <Button
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Cancel
          </Button>
          <Button
            primary
            onClick={handleSubmit}
            className="btn btn-primary"
            type="submit"
          >
            Add task
          </Button>
        </FormFooter>
      </FormBody>
    </StyledForm>
  );
};

export default Form;
