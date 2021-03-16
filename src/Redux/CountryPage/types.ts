export type stateType = {
    pending: boolean,
    data: Object,
    error: null|string,
    pendingExchange: boolean,
    dataExchange: Object,
    errorExchange: null|string,
    date: Date
}