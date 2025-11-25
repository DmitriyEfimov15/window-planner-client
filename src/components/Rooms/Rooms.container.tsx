import { useForm } from "antd/es/form/Form";
import RoomsComponent from "./Rooms.component";
import { type GetAllRoomsPayload, type RoomsSearchForm } from "./types";
import { useLazyGetAllRoomsQuery } from "./api";
import { useSearchObjects } from "../../core/hooks/useSerchObjects";
import { useEffect, useState } from "react";
import type { ModalStateI } from "../../core/types/modal.types";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../core/hooks/redux/useAppSelector";
import { OBJECTS_ROUTE } from "../../core/utils/routes";
import { objectSelector } from "./selector";

const RoomsContainer = () => {
    const [createModalState, setCreateModalState] = useState<ModalStateI>({
        open: false,
        type: "create",
    });
    const params = useParams();
    const object = useAppSelector(objectSelector)
    const navigate = useNavigate()

    const [form] = useForm<RoomsSearchForm>();

    const [getAllRooms, { data: rooms, isFetching: isRoomsFetching }] =
        useLazyGetAllRoomsQuery();

    const onSearchFormChange = (values: RoomsSearchForm) => {
        if (params.objectId) {
            const { search } = values;
            
            handleGetAllRooms({search, objectId: params.objectId});
        }
    };

    const handleGetAllRooms = useSearchObjects<GetAllRoomsPayload>(getAllRooms);

    const handleOpenCreateModal = () => {
        setCreateModalState({ open: true, type: "create" });
    };

    const handleCloseCreateModal = () => {
        setCreateModalState({ open: false, type: "create" });
    };

    const handleBack = () => {
        navigate(OBJECTS_ROUTE)
    }

    useEffect(() => {
        if (params.objectId) {
            handleGetAllRooms({objectId: params.objectId, search: ''});
        }
    }, []);

    return (
        <RoomsComponent
            form={form}
            rooms={rooms?.rooms ?? []}
            isRoomsFetching={isRoomsFetching}
            isCreateModalOpen={createModalState.open}
            typeModal={createModalState.type}
            object={object}
            handleCloseCreateModal={handleCloseCreateModal}
            onSearchFormChange={onSearchFormChange}
            handleOpenCreateModal={handleOpenCreateModal}
            handleBack={handleBack}
        />
    );
};

export default RoomsContainer;
