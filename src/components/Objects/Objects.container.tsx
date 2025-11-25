import { useEffect, useState, type FC } from "react";
import ObjectsComponent from "./Objects.components";
import { useForm } from "antd/es/form/Form";
import type { GetAllObjectsPayload, ObjectsSearchForm } from "./types";
import { useLazyGetAllObjectsQuery } from "./api";
import type { ModalStateI } from "../../core/types/modal.types";
import { useSearchObjects } from "../../core/hooks/useSerchObjects";

const ObjectsContainer: FC = () => {
    const [isCreateModalState, setIsCreateModalState] = useState<ModalStateI>({open: false, type: 'create'});

    const [form] = useForm<ObjectsSearchForm>();

    const [getAllObjects, { data: objectsData, isFetching: isObjectsLoading }] =
        useLazyGetAllObjectsQuery();

    const handleSearchObjects = useSearchObjects<GetAllObjectsPayload>(getAllObjects);

    const onSearchFormChange = (values: ObjectsSearchForm) => {
        const { search } = values;
        handleSearchObjects({search});
    };

    useEffect(() => {
        handleSearchObjects({search: ''});
    }, []);

    const handleOpenCreateModal = () => {
        setIsCreateModalState({open: true, type: 'create'});
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalState({open: false, type: 'create'});

    };

    return (
        <ObjectsComponent
            form={form}
            objects={objectsData?.objects ?? []}
            isObjectsLoading={isObjectsLoading}
            isCreateModalOpen={isCreateModalState.open}
            isCreateModalType={isCreateModalState.type}
            handleOpenCreateModal={handleOpenCreateModal}
            handleCloseCreateModal={handleCloseCreateModal}
            onSearchFormChange={onSearchFormChange}
        />
    );
};

export default ObjectsContainer;
