//Styled Components
import {
  SnackbarContainer,
  SnackbarBackground,
} from "./styles/Snackbar.elements";

const Snackbar = ({ showForm }) => {
  return (
    <SnackbarContainer>
      <SnackbarBackground>
        <p>
          The list is empty
          <span>Add more tasks to do and keep track.</span>
        </p>
        <button onClick={showForm}>Add task</button>
      </SnackbarBackground>
    </SnackbarContainer>
  );
};

export default Snackbar;
