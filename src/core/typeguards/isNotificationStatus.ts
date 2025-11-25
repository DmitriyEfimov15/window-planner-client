import type { NotificationStatus } from "../types/notification.types";


export const isNotificationStatus = (subject: unknown): subject is NotificationStatus =>
  typeof subject === "number" &&
  [200, 201, 204, 400, 403, 404, 409, 500].includes(subject);
