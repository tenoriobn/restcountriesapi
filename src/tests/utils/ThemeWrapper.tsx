import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { RecoilObserver } from "./recoilObserver";
import { darkTheme, lightTheme } from "src/common/Themes/colors";
import { darkModeState } from "src/common/states/atom";
import { ThemeWrapperProps } from "src/common/interfaces/IThemeWrapperProps";

export const ThemeWrapper = <T,>({ state, onChangeMock, children }: ThemeWrapperProps<T>) => {
  const darkMode = useRecoilValue(darkModeState);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
      <RecoilObserver node={state} onChange={onChangeMock} />
    </ThemeProvider>
  );
};
