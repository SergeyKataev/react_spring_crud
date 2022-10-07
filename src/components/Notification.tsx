import { notification } from "antd";

// @ts-ignore
const openNotificationWithIcon = (type, message, description) => {
    // @ts-ignore
    notification[type]({
        message,
        description
    });
};

// @ts-ignore
export const successNotification = (message, description) =>
    openNotificationWithIcon('success', message, description)

// @ts-ignore
export const infoNotification = (message, description) =>
    openNotificationWithIcon('info', message, description)
// @ts-ignore
export const warningNotification = (message, description) =>
    openNotificationWithIcon('warning', message, description)
// @ts-ignore
export const errorNotification = (message, description) =>
    openNotificationWithIcon('error', message, description)