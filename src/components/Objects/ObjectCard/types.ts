import type { TypeModalT } from "../../../core/types/modal.types"
import type { ObjectI } from "../types"

export interface ObjectCardContainerProps {
    id: string
    title: string
    number: number
}

export interface ObjectCardComponentProps extends Pick<ObjectCardContainerProps, 'title' | 'number'> {
    isEditModalOpen: boolean
    object: ObjectI
    typeEditModal: TypeModalT
    handleOpenEditModal: () => void
    handleCloseEditModal: () => void
    handleDeleteObject: () => void
    handleObjectClick: () => void
}