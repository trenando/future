export interface ActionFunction<T> {
  (): T;
}

export interface PayloadActionFunction<T, P> {
  (payload: P): T;
}
