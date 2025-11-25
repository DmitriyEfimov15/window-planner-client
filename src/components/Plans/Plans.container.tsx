import { useForm } from "antd/es/form/Form";
import PlansComponent from "./Plans.component";
import { type GetAllPlansPayload, type PlanSearchForm } from "./types";
import { useSearchObjects } from "../../core/hooks/useSerchObjects";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../core/hooks/redux/useAppSelector";
import { objectSelector, roomSelector } from "./selectors";
import type { ModalStateI } from "../../core/types/modal.types";
import { useLazyGetAllPlansQuery } from "./api";

const PlansContainer = () => {
    const [createPlanModalState, setCreateModalState] = useState<ModalStateI>({open: false, type: 'create'})
    const [form] = useForm<PlanSearchForm>();
    const params = useParams();
    const [getAllPlans, {data: plans, isFetching: isPlansFetching }] =
        useLazyGetAllPlansQuery();
    
    const room = useAppSelector(roomSelector)
    const object = useAppSelector(objectSelector)
    const navigate = useNavigate()

    const onSearchFormChange = (values: PlanSearchForm) => {
        if (params.roomId && params.objectId) {
            const { search } = values;
            const payload: GetAllPlansPayload = {
                search,
                roomId: params.roomId,
                objectId: params.objectId,
            };

            handleGetAllPlans(payload)
        }
    };

    const handleGetAllPlans = useSearchObjects<GetAllPlansPayload>(getAllPlans);

    useEffect(() => {
        if (params.roomId && params.objectId) {
            const payload: GetAllPlansPayload = {
                roomId: params.roomId,
                objectId: params.objectId,
            };

            handleGetAllPlans(payload)
        }
    }, [params])

    const handleOpenCreateModal = () => {
        setCreateModalState({open: true, type: 'create'})
    }

    const handleCloseCreateModal = () => {
        setCreateModalState({open: false, type: 'create'})
    }

    const handleBack = () => {
        navigate(`/object/${object?.id}`)
    }

    return (
        <PlansComponent
            form={form}
            isPlansFetching={isPlansFetching}
            room={room}
            object={object}
            plans={plans?.plans ?? []}
            isCreateModalOpen={createPlanModalState.open}
            typeCreateModal={createPlanModalState.type}
            onSearchFormChange={onSearchFormChange}
            handleOpenCreateModal={handleOpenCreateModal}
            handleCloseCreateModal={handleCloseCreateModal}
            handleBack={handleBack}
        />
    );
};

export default PlansContainer;
