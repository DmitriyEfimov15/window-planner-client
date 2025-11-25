export interface ModalStateI {
    open: boolean;
    type: TypeModalT;
}

export type TypeModalT = "create" | "edit"
