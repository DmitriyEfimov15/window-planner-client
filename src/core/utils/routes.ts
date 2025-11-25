// unauthorized routes
export const LOGIN_ROUTE = "/auth/login";
export const REGISTRATION_ROUTE = "/auth/registration";
export const VERIFY_EMAIL_ROUTE = "/auth/verify-email/:activationLink";
export const SEND_REQUEST_TO_CHANGE_PASSWORD_ROUTE = "/auth/send-request-to-change-password";
export const RESET_PASSWORD_ROUTE = "/auth/reset-password/:token";

// authorized routes
export const OBJECTS_ROUTE = '/'
export const ROOMS_ROUTE = '/object/:objectId'
export const PLANS_ROUTE = '/object/:objectId/room/:roomId'
export const PLAN_CONVA_ROUTE = '/plan/:planId'