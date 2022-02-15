import { useState } from "react";

import { selectPriorityArray, selectTypeArray } from "../data/optionsArray";

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
  const [errorsToShow, setErrorsToShow] = useState({});

  let today = new Date().toISOString().slice(0, 10);
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const validate = () => {
    let objectErrors = {};
    if (inputValue.content.length === 0) {
      objectErrors.descriptionError = "Description is required.";
    }
    if (inputValue.date === today) {
      objectErrors.deadlineError = "Deadline is required.";
    } else if (inputValue.date < today) {
      objectErrors.deadlineError = "Deadline is invalid.";
    }
    if (inputValue.category === "0") {
      objectErrors.categoryError = "Category is required.";
    }
    if (inputValue.priority === "0") {
      objectErrors.priorityError = "Priority is required.";
    }
    console.log(objectErrors);
    if (!isEmpty(objectErrors)) {
      setErrorsToShow(objectErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = new Date().getTime();
    console.log(validate());
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
    if (event.target.name === "content") {
      errorsToShow.descriptionError = "";
    }
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
        <InputGroup hasError={haveError && errorsToShow.descriptionError}>
          <label>Description</label>
          <Input
            value={inputValue.content}
            onChange={handleInput}
            type="text"
            name="content"
            placeholder="Insert a task"
            maxLength={25}
            hasError={haveError && errorsToShow.descriptionError}
          />
          <span>
            {errorsToShow.descriptionError
              ? errorsToShow.descriptionError
              : null}
          </span>
        </InputGroup>
        <InputGroup hasError={haveError && errorsToShow.deadlineError}>
          <label>Deadline</label>
          <Input
            type="date"
            value={inputValue.date}
            onChange={handleInput}
            name="date"
            hasError={haveError && errorsToShow.deadlineError}
          />
          <span>
            {errorsToShow.deadlineError ? errorsToShow.deadlineError : null}
          </span>
        </InputGroup>
        <InputGroup hasError={haveError && errorsToShow.priorityError}>
          <label>Priority</label>
          <Select
            hasError={haveError && errorsToShow.priorityError}
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
          <span>
            {errorsToShow.priorityError ? errorsToShow.priorityError : null}
          </span>
        </InputGroup>
        <InputGroup hasError={haveError && errorsToShow.categoryError}>
          <label>Category</label>
          <Select
            hasError={haveError && errorsToShow.categoryError}
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
          <span>
            {errorsToShow.categoryError ? errorsToShow.categoryError : null}
          </span>
        </InputGroup>
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
