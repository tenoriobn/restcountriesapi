import { useRecoilState, useSetRecoilState } from "recoil";
import { darkModeState, errorStatusState, selectedCountryState } from "../atom";
import { useEffect, useState } from "react";

export default function useSessionStorage() {
  const [selectedCountry, setSelectedCountry] = useRecoilState(selectedCountryState);
  const setErrorStatus = useSetRecoilState(errorStatusState);

  useEffect(() => {
    const storedCountry = localStorage.getItem('selectedCountry');
    setErrorStatus(false);
    
    if (selectedCountry) {
      localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
    } else if (storedCountry) {
      setSelectedCountry(JSON.parse(storedCountry));
    } else {
      setErrorStatus(true);
    }
  }, [selectedCountry, setSelectedCountry, setErrorStatus]);
}

export function useSessionStorageTheme() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }

    setLoading(false);
  }, [setDarkMode]);

  return { darkMode, loading };
}
