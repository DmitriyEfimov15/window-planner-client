import type { FormInstance } from "antd"
import type { TypeModalT } from "../../../core/types/modal.types"
import type { RoomFormI, RoomI } from "../types"

export interface RoomModalContainerProps {
    open: boolean
    type: TypeModalT,
    room?: RoomI
    handleClose: () => void
}

export interface RoomModalComponentProps extends Pick<RoomModalContainerProps, 'open' | 'type'> {
    form: FormInstance<RoomFormI>
    isLoading: boolean
    handleCancel: () => void
    handleOk: () => void
}