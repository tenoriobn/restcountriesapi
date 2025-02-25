import { RecoilState } from "recoil";
import { ReactNode } from "react";

export interface ThemeWrapperProps<T> {
  state: RecoilState<T>; 
  onChangeMock: () => void;
  children: ReactNode;
}