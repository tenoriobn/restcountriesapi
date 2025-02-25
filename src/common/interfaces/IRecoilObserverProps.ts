/* eslint-disable no-unused-vars */
import { RecoilState } from "recoil";

export interface RecoilObserverProps<T> {
  node: RecoilState<T>;
  onChange: (value: T) => void;
}