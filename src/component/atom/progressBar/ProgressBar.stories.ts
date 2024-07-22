import { ProgressBar } from "./ProgressBar";

export default {
    title: "atom/ProgressBar",
    component: ProgressBar,
    tags: ['autodocs'],
        argTypes: {
            progress: {
            control: {
                type: "number",
            },
            },
            total: {
            control: {
                type: "number",
            },
            },
            color: {
            control: {
                type: "string",
            },
            },
        },
    };

export const ProgressBarComponent = {
    args: {
        progress: 7,
        total: 7,
        color: "#4caf50",
    }
};