import type { RouteObject } from "react-router-dom";
import {
    LOGIN_ROUTE,
    OBJECTS_ROUTE,
    PLAN_CONVA_ROUTE,
    PLANS_ROUTE,
    REGISTRATION_ROUTE,
    RESET_PASSWORD_ROUTE,
    ROOMS_ROUTE,
    SEND_REQUEST_TO_CHANGE_PASSWORD_ROUTE,
    VERIFY_EMAIL_ROUTE,
} from "../utils/routes";
import RegistrationPage from "../../pages/Auth/Registration/Registration.page";
import VerifyEmailPage from "../../pages/Auth/VerifyEmail/VerifyEmail.page";
import LoginPage from "../../pages/Auth/Login/Login.page";
import SendRequestToResetPasswordPage from "../../pages/Auth/SendRequestToResetPassword/SendRequestToResetPassword.page";
import ResetPasswordPage from "../../pages/Auth/ResetPassword/ResetPassword.page";
import ObjectsPage from "../../pages/Objects/Objects.page";
import RoomsPage from "../../pages/Rooms/Rooms.page";
import PlansPage from "../../pages/Plans/Plans.page";
import PlanConvaPage from "../../pages/PlanConva/PlanConva.page";

export const unAuthRoutes: RouteObject[] = [
    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage />,
    },
    {
        path: VERIFY_EMAIL_ROUTE,
        element: <VerifyEmailPage />,
    },
    {
        path: LOGIN_ROUTE,
        element: <LoginPage />,
    },
    {
        path: SEND_REQUEST_TO_CHANGE_PASSWORD_ROUTE,
        element: <SendRequestToResetPasswordPage />,
    },
    {
        path: RESET_PASSWORD_ROUTE,
        element: <ResetPasswordPage />,
    },
];

export const authRoutes: RouteObject[] = [
    {
        path: OBJECTS_ROUTE,
        element: <ObjectsPage />,
    },
    {
        path: ROOMS_ROUTE,
        element: <RoomsPage />,
    },
    {
        path: PLANS_ROUTE,
        element: <PlansPage />,
    },
    {
        path: PLAN_CONVA_ROUTE,
        element: <PlanConvaPage />,
    },
];
