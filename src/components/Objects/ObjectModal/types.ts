import type { FormInstance } from "antd";
import type { ObjectI } from "../types";
import type { TypeModalT } from "../../../core/types/modal.types";

export interface ObjectModalContainerProps {
    open: boolean;
    type: TypeModalT;
    object?: ObjectI;
    handleClose: () => void;
}

export interface ObjectModalComponentProps
    extends Pick<
        ObjectModalContainerProps,
        "open" | "handleClose" | "type"
    > {
    form: FormInstance<ObjectModalForm>;
    isObjectLoading: boolean;
    handleOk: () => void;
}

export interface ObjectModalForm {
    name: string;
    number: number;
}
