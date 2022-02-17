export const getLocalData = () => {
  //get the localStorage data or set an array empty
  let data = localStorage.getItem("tasks");

  if (data) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [];
  }
};

export let today = new Date().toISOString().slice(0, 10);

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}; // return a boolean to validate if an object is empty or not

export const validate = (inputValue, setErrorsToShow) => {
  let objectErrors = {};
  if (inputValue.description.length === 0) {
    objectErrors.descriptionError = "Description is required.";
  }
  if (inputValue.deadline === "") {
    objectErrors.deadlineError = "Deadline is required.";
  } else if (inputValue.deadline < today) {
    objectErrors.deadlineError = "Deadline is invalid.";
  } //deadline cannot be before today
  if (inputValue.category === "0") {
    objectErrors.categoryError = "Category is required.";
  }
  if (inputValue.priority === "0") {
    objectErrors.priorityError = "Priority is required.";
  }
  if (!isEmpty(objectErrors)) {
    //if the object has any errors show them in their respective label
    setErrorsToShow(objectErrors);
    return false;
  }
  return true;
};
