export type HandleEvent = {
  currentTarget: EventTarget | null;
  target: EventTarget | null;
  keyCode: number;
};

export type SearchDispatch = (payload: string) => void;

export type ChangeInputValue = (payload: string) => void;

export type Handle = (event: HandleEvent) => void;

export type SearchProps = {
  searchValue: string;
  search: SearchDispatch;
  changeInputValue: ChangeInputValue;
  handle: Handle;
};

export type GetInputValue = () => void;

export type OnInputChange = (event: { target: { value: string } }) => void;

export type OnKeyDown = (event: HandleEvent) => void;
