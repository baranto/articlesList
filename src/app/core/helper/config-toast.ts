import {ConfigToast, Position} from "../models/ConfigToast";

export function getConfigSuccessToast(detail: string, position: Position = 'tr', life: number = 30000): ConfigToast {
    return new ConfigToast('success', 'Success', detail, position, life, true);
}

export function getConfigInfoToast(detail: string, position: Position = 'tr', life: number = 30000): ConfigToast {
    return new ConfigToast('info', 'Info', detail, position, life, true);
}

export function getConfigErrorToast(detail: string, position: Position = 'tr', life: number = 30000): ConfigToast {
    return new ConfigToast('error', 'Error', detail, position, life, true);
}

export function getConfigWarningToast(detail: string, position: Position = 'tr', life: number = 30000): ConfigToast {
    return new ConfigToast('warning', 'Warn', detail, position, life, true);
}
