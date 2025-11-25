import { useEffect, type FC } from "react";
import RoomModalComponent from "./RoomModal.component";
import { useForm } from "antd/es/form/Form";
import type { CreateRoomPayload, RoomFormI, UpdateRoomPayload } from "../types";
import { useCreateRoomMutation, useUpdateRoomMutation } from "../api";
import { useParams } from "react-router-dom";
import type { RoomModalContainerProps } from "./types";

const RoomModalContainer: FC<RoomModalContainerProps> = ({
    open,
    type,
    room,
    handleClose,
}) => {
    const [form] = useForm<RoomFormI>();
    const params = useParams();

    const [createRoom, { isLoading: isRoomCreating }] = useCreateRoomMutation();
    const [updateRoom, { isLoading: isRoomUpdating }] = useUpdateRoomMutation();

    const isLoading = isRoomCreating || isRoomUpdating;

    const handleCreateRoom = async () => {
        await form.validateFields();
        const { name, number } = form.getFieldsValue();
        if (params.objectId) {
            const payload: CreateRoomPayload = {
                name,
                number,
                objectId: params.objectId,
            };

            await createRoom(payload).unwrap();
            handleCancel();
        }
    };

    const handleUpdateRoom = async () => {
        await form.validateFields();
        const { name, number } = form.getFieldsValue();

        if (room && params.objectId) {
            const payload: UpdateRoomPayload = {
                params: {
                    roomId: room.id,
                },
                body: {
                    name,
                    number,
                    objectId: params.objectId,
                },
            };

            await updateRoom(payload).unwrap();
            handleCancel();
        }
    };

    const handleOk = () => {
        if (type === "edit" && room) {
            handleUpdateRoom();
            return;
        }
        handleCreateRoom();
    };

    const handleCancel = () => {
        handleClose();
        form.resetFields();
    };

    useEffect(() => {
        if (room && type === "edit") {
            form.setFieldsValue({ name: room.name, number: room.number });
        }
    }, [open]);

    return (
        <RoomModalComponent
            open={open}
            type={type}
            form={form}
            isLoading={isLoading}
            handleCancel={handleCancel}
            handleOk={handleOk}
        />
    );
};

export default RoomModalContainer;
