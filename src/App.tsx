import { useEffect } from "react";
import { useAppSelector } from "./core/hooks/redux/useAppSelector";
import RouterWrapper from "./core/router/RouterWrapper";
import { notificationSelector } from "./core/store/selectors/notification";
import useNotification from "antd/es/notification/useNotification";

function App() {
    const [notification, context] = useNotification();

    const notificationState = useAppSelector(notificationSelector);

    useEffect(() => {
        if (
            notificationState &&
            notificationState.statusCode >= 400 &&
            notificationState.statusCode < 500
        ) {
            notification.error({
                message: "Ошибка",
                description: notificationState.message,
            });
        }
        if (notificationState && notificationState.statusCode === 200) {
            notification.success({
                message: "Успешно!",
                description: notificationState.message,
                duration: 2
            });
        }
    }, [notificationState]);

    return (
        <>
            {context}
            <RouterWrapper />
        </>
    );
}

export default App;
