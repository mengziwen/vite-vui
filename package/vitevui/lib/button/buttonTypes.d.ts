import { PropType } from 'vue';
declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "danger", "link"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["circle", "circle-outline", "round"];
export declare type ButtonShape = typeof ButtonShapes[number];
declare const ButtonSizes: ["large", "default", "small"];
export declare type ButtonSize = typeof ButtonSizes[number];
declare const buttonProps: () => {
    size: {
        type: PropType<"small" | "default" | "large">;
        default: "default";
    };
    loading: BooleanConstructor;
    icon: StringConstructor;
    shapes: {
        type: PropType<"small" | "default" | "large">;
        default: string;
    };
    type: {
        type: PropType<"link" | "default" | "primary" | "ghost" | "dashed" | "danger">;
        default: "default";
    };
};
export default buttonProps;
