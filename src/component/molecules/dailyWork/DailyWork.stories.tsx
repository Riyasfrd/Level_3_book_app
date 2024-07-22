import { DailyWork } from "./DailyWork";
import { DailyWorkIcon } from "../../../Assets/icons/Icons"

export default {
  title: "molecules/DailyWork",
  component: DailyWork,
  tags: ['autodocs'],
    argTypes: {
        icon: {
        control: {
            type: "object",
        },
        },
    },
};

export const DailyWorkComponent = {
    args: {
        icon: <DailyWorkIcon />,
    }
};