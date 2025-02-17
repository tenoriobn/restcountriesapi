import { RecoilState, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { RecoilObserver } from "./recoilObserver"; // Presumindo que você tenha este arquivo com o RecoilObserver implementado
import { darkTheme, lightTheme } from "src/common/Themes/colors";
import { ReactNode } from "react";
import { darkModeState } from "src/common/states/atom";

interface ThemeWrapperProps<T> {
  state: RecoilState<T>; 
  onChangeMock: () => void;
  children: ReactNode;
}

export const ThemeWrapper = <T,>({ state, onChangeMock, children }: ThemeWrapperProps<T>) => {
  const darkMode = useRecoilValue(darkModeState);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
      <RecoilObserver node={state} onChange={onChangeMock} />
    </ThemeProvider>
  );
};
