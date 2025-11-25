import type { FormInstance } from "antd"
import type { TypeModalT } from "../../core/types/modal.types"

export interface ObjectsComponentProps {
    form: FormInstance<ObjectsSearchForm>
    objects: ObjectI[]
    isObjectsLoading: boolean
    isCreateModalOpen: boolean
    isCreateModalType: TypeModalT
    handleOpenCreateModal: () => void
    handleCloseCreateModal: () => void
    onSearchFormChange: (values: any) => void
}

export interface ObjectsSearchForm {
    search: string
}

export interface GetAllObjectsPayload {
    search?: string
}

export interface GetAllObjectsResponse {
    objects: ObjectI[]
}

export interface ObjectI {
    name: string
    number: number
    id: string
}

export type CreateObjectPayload = Omit<ObjectI, 'id'>

export interface UpdateObjectPayload {
    body: Partial<CreateObjectPayload>
    params: {
        objectId: string
    }
}

export interface DeleteObjectPayload {
    objectId: string
}