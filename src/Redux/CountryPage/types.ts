type ImageObj = {
  url: string,
  description: string,
}

type Images = {
  URL: ImageObj[],
  pending: boolean,
};

export type stateType = {
    images: Images,
    pending: boolean,
    data: Object,
    error: null|string,
    pendingExchange: boolean,
    dataExchange: Object,
    errorExchange: null|string,
    date: Date
}
