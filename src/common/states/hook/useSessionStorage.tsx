import { useRecoilState, useSetRecoilState } from "recoil";
import { errorStatusState, selectedCountryState } from "../atom";
import { useEffect } from "react";

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
