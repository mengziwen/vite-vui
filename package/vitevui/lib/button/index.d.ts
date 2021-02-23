declare const Button: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<"small" | "default" | "large">;
        default: "default";
    };
    loading: BooleanConstructor;
    icon: StringConstructor;
    shapes: {
        type: import("vue").PropType<"small" | "default" | "large">;
        default: string;
    };
    type: {
        type: import("vue").PropType<"link" | "default" | "primary" | "ghost" | "dashed" | "danger">;
        default: "default";
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: "small" | "default" | "large";
    loading: boolean;
    shapes: "small" | "default" | "large";
    type: "link" | "default" | "primary" | "ghost" | "dashed" | "danger";
} & {
    icon?: string | undefined;
}>, {
    size: "small" | "default" | "large";
    loading: boolean;
    shapes: "small" | "default" | "large";
    type: "link" | "default" | "primary" | "ghost" | "dashed" | "danger";
}>;
export default Button;
