interface SearchValue {
  searchValue: string,
  category: string,
  sortBy: string
}

export interface SearchPayload extends SearchValue {
  startIndex: number;
  maxResults: number;
}

export type SearchDispatch = (payload: SearchPayload, setSubmitting: SetSubmitting) => void;

export type SearchProps = {
  search: SearchDispatch;
};

export type SetSubmitting = (isSubmitting: boolean) => void

export type OnSubmit = (value: SearchValue, setSubmitting: SetSubmitting) => void;