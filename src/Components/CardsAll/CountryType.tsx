type CapitalLocation = {
  coordinates: Array<number>;
  type: string;
};

type Localizations = {
  capital: string;
  description: string;
  lang: string;
  name: string;
};

export type CountryType = {
  ISOCode: string;
  capitalLocation: CapitalLocation;
  currency: string;
  id: string;
  imageUrl: string;
  localizations: Array<Localizations>;
  rate: Array<any>;
  utc: string;
  videoUrl: string;
  _id: string;
};

 export type CountryCardProps = {
  country: CountryType;
};

