export type NotificationStatus =
  | 200 // OK
  | 201 // Created
  | 204 // No Content
  | 400 // Bad Request
  | 401 // Unauthorized
  | 403 // Forbidden
  | 404 // Not Found
  | 409 // Conflict
  | 500; // Internal Server Error

export interface Notification {
  statusCode: NotificationStatus;
  message: string;
}

export interface NotificationState {
  notification: Notification | null
}