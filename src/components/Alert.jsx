import React from "react";
import { MessageBox } from "./styles/Alert.elements";

const Alert = ({ haveError, errorsToShow }) => {
  return (
    <MessageBox error={haveError}>
      <h5>Please complete the following fields:</h5>

      <ul>
        {errorsToShow.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* <li>Description</li>
        <li>Deadline</li>
        <li>Priority</li>
        <li>Category</li> */}
      </ul>
    </MessageBox>
  );
};

export default Alert;
