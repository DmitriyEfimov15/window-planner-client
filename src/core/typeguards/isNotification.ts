import type { Notification } from "../types/notification.types";
import { isNotificationStatus } from "./isNotificationStatus";

export const isNotification = (subject: unknown): subject is Notification =>
  subject !== null &&
  typeof subject === "object" &&
  "statusCode" in subject &&
  isNotificationStatus(subject.statusCode) &&
  "message" in subject &&
  typeof subject.message === "string";
