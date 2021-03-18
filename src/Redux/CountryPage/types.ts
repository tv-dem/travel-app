type ImageObj = {
  url: string,
  description: string,
}

type Images = {
  URL: ImageObj[],
  pending: boolean,
  id: number,
  rate: number[] | [],
};

type CurrentImage = {
  countryId: string,
  imageId: number,
}

export type stateType = {
    currentImage: CurrentImage
    images: Images,
    pending: boolean,
    data: Object,
    error: null|string,
    pendingExchange: boolean,
    dataExchange: Object,
    errorExchange: null|string,
    date: Date
}
