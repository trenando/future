export type StateType = {
  searchValue: string;
  startIndex: number;
  maxResults: number;
  items: Array<Item>;
};

export type Item = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  accessInfo: AccessInfo;
  saleInfo: SaleInfo;
  searchInfo: SearchInfo;
};

type AccessInfo = {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: { isAvailable: boolean };
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
};

type SaleInfo = {
  buyLink: string;
  country: string;
  isEbook: boolean;
  listPrice: {
    amount: number;
    currencyCode: typeof RUB;
  };
  offers: Array<Offer>;
  retailPrice: {
    amount: number;
    currencyCode: typeof RUB;
  };
  saleability: string;
};

type Offer = {
  finskyOfferType: number;
  listPrice: {
    amountInMicros: number;
    currencyCode: typeof RUB;
  };
  retailPrice: {
    amountInMicros: number;
    currencyCode: typeof RUB;
  };
};

type SearchInfo = {
  textSnippet: string;
};

type VolumeInfo = {
  title: string;
  allowAnonLogging: boolean;
  authors: Array<string>;
  canonicalVolumeLink: string;
  categories: Array<string>;
  contentVersion: string;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  industryIdentifiers: Array<{
    type: string;
    identifier: string;
  }>;
  infoLink: string;
  language: string;
  maturityRating: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: {
    text: boolean;
    image: boolean;
  };
};

const RUB = "RUB";
