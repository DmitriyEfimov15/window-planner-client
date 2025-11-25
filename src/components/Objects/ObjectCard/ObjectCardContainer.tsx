import { useMemo, useState, type FC } from "react";
import type { ObjectCardContainerProps } from "./types";
import ObjectCardComponent from "./ObjectCardComponent";
import { useDeleteObjectMutation } from "../api";
import type { DeleteObjectPayload, ObjectI } from "../types";
import useModal from "antd/es/modal/useModal";
import type { ModalStateI } from "../../../core/types/modal.types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setObject } from "../../Rooms/slice";

const ObjectCardContainer: FC<ObjectCardContainerProps> = ({
    id,
    title,
    number,
}) => {
    const [editModalState, setEditModalState] = useState<ModalStateI>({
        open: false,
        type: "edit",
    });
    const object: ObjectI = useMemo(() => ({ name: title, id, number }), [id]);

    const [deleteObject, { isLoading: isDeletingObject }] =
        useDeleteObjectMutation();
    const [modal, context] = useModal();
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleDeleteObject = async () => {
        const confirm = await modal.confirm({
            title: "Удаление объекта",
            content: `Вы уверены, что хотите удалить объект "${title}"`,
            okText: "Удалить",
            okButtonProps: { danger: true, loading: isDeletingObject },
        });
        if (confirm) {
            const payload: DeleteObjectPayload = {
                objectId: id,
            };

            deleteObject(payload);
        }
    };

    const handleOpenEditModal = () => {
        setEditModalState({ open: true, type: "edit" });
    };

    const handleCloseEditModal = () => {
        setEditModalState({ open: false, type: "edit" });
    };

    const handleObjectClick = () => {
        navigate(`/object/${object.id}`);
        dispatch(setObject(object))
    };

    return (
        <>
            {context}
            <ObjectCardComponent
                title={title}
                number={number}
                isEditModalOpen={editModalState.open}
                typeEditModal={editModalState.type}
                object={object}
                handleObjectClick={handleObjectClick}
                handleOpenEditModal={handleOpenEditModal}
                handleCloseEditModal={handleCloseEditModal}
                handleDeleteObject={handleDeleteObject}
            />
        </>
    );
};

export default ObjectCardContainer;
