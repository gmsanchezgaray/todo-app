// Styled Component
import { IconCategory, WrapperCategory } from "./styles/CategoryGadget.element";

// Assets
import PersonalIcon from "../assets/Personal.svg";
import WorkIcon from "../assets/Work.svg";
import SchoolIcon from "../assets/School.svg";
import TrainingIcon from "../assets/Training.svg";
import TravelIcon from "../assets/Travel.svg";
import HealthIcon from "../assets/Health.svg";
import ShoppingIcon from "../assets/Shopping.svg";
import OtherIcon from "../assets/Other.svg";

const CategoryGadget = ({ categoryIndex }) => {
  const categories = {
    1: { name: "Personal", icon: PersonalIcon },
    2: { name: "Work", icon: WorkIcon },
    3: { name: "School", icon: SchoolIcon },
    4: { name: "Training", icon: TrainingIcon },
    5: { name: "Travel", icon: TravelIcon },
    6: { name: "Health", icon: HealthIcon },
    7: { name: "Shopping", icon: ShoppingIcon },
    8: { name: "Other", icon: OtherIcon },
  };
  return (
    <WrapperCategory>
      <IconCategory>
        <img
          src={categories[categoryIndex].icon}
          alt={categories[categoryIndex].name}
        />
      </IconCategory>
      <p>{categories[categoryIndex].name} </p>
    </WrapperCategory>
  );
};

export default CategoryGadget;
