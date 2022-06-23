export type StateType = {
  searchValue: string,
  category: string,
  sortBy: string
  startIndex: number | null;
  maxResults: number | null;
  totalItems: number | null;
  isLoaded: boolean;
  items: Array<Item>;
  book: BookState | undefined;
  errorMessage: string | null;
};

export type Item = {
  id: string;
  volumeInfo: VolumeInfo;
};

interface VolumeInfo {
  title: string;
  authors: Array<string> | undefined;
  categories: Array<string> | undefined;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  } | undefined;
};

export interface BookVolumeInfo extends VolumeInfo {
  subtitle: string
}

export type BookState = {
  volumeInfo: BookVolumeInfo
}