import { useState } from "react";

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

// Arrays and functions
import { selectPriorityArray, selectTypeArray } from "../data/arrays";
import { arrayNameInput } from "../data/arrays.js";
import { validate } from "../utils/functions";

const Form = ({
  inputValue,
  setInputValue,
  tasks,
  setTasks,
  showModal,
  setShowModal,
}) => {
  const [errorsToShow, setErrorsToShow] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();
    //if the validation is OK, add the new task and reset all values.
    if (validate(inputValue, setErrorsToShow)) {
      setTasks([...tasks, { id: newId, ...inputValue, active: true }]);
      resetValues();
      setShowModal(!showModal);
      setErrorsToShow({});
    }
  };

  const resetValues = () =>
    setInputValue({
      description: "",
      category: "0",
      priority: "0",
      deadline: "",
    });

  const handleInput = (event) => {
    const newValue = event.target.value;

    arrayNameInput.forEach((element) => {
      if (event.target.name === element) {
        let errorKey = `${element}Error`;
        errorsToShow[errorKey] = "";
      }
    }); //Clear the label error when handled the respective component
    setInputValue({ ...inputValue, [event.target.name]: newValue });
  };

  //Destructuring
  const { descriptionError, deadlineError, priorityError, categoryError } =
    errorsToShow;
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
        <InputGroup hasError={descriptionError}>
          <label>Description</label>
          <Input
            value={inputValue.description}
            onChange={handleInput}
            type="text"
            name="description"
            placeholder="Insert a task"
            maxLength={25}
            hasError={descriptionError}
          />
          <span>{descriptionError ? descriptionError : null}</span>
        </InputGroup>
        <InputGroup hasError={deadlineError}>
          <label>Deadline</label>
          <Input
            type="date"
            value={inputValue.deadline}
            onChange={handleInput}
            name="deadline"
            hasError={deadlineError}
          />
          <span>{deadlineError ? deadlineError : null}</span>
        </InputGroup>
        <InputGroup hasError={priorityError}>
          <label>Priority</label>
          <Select
            hasError={priorityError}
            onChange={handleInput}
            name="priority"
          >
            {selectPriorityArray.map((select, index) => {
              return (
                <option value={index} key={index}>
                  {select.value}
                </option>
              );
            })}
          </Select>
          <span>{priorityError ? priorityError : null}</span>
        </InputGroup>
        <InputGroup hasError={categoryError}>
          <label>Category</label>
          <Select
            hasError={categoryError}
            onChange={handleInput}
            name="category"
          >
            {selectTypeArray.map((select, index) => {
              return (
                <option value={index} key={index}>
                  {select.value}
                </option>
              );
            })}
          </Select>
          <span>{categoryError ? categoryError : null}</span>
        </InputGroup>
        <FormFooter>
          <Button
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Cancel
          </Button>
          <Button primary onClick={handleSubmit} type="submit">
            Add task
          </Button>
        </FormFooter>
      </FormBody>
    </StyledForm>
  );
};

export default Form;
