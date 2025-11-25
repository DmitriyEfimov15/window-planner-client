import type { FormInstance } from "antd"
import type { TypeModalT } from "../../../core/types/modal.types"
import type { PlanI } from "../types"

export interface PlanModalContainerProps {
    open: boolean
    type: TypeModalT
    plan?: PlanI
    handleClose: () => void
}

export interface PlanModalComponentProps extends Pick<PlanModalContainerProps, 'open' | 'type'> {
    form: FormInstance<PlanModalFormI>
    isPlanLoading: boolean
    handleOk: () => void
    handleCancel: () => void
}

export interface PlanModalFormI {
    name: string
    number: number
}