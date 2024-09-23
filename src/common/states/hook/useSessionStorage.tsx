import { useRecoilState } from "recoil";
import { selectedCountryState } from "../atom";
import { useEffect } from "react";

export default function useSessionStorage() {
  const [selectedCountry, setSelectedCountry] = useRecoilState(selectedCountryState);

  useEffect(() => {
    const storedCountry = localStorage.getItem('selectedCountry');
    
    if (selectedCountry) {
      localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
    } else if (storedCountry) {
      setSelectedCountry(JSON.parse(storedCountry));
    }
  }, [selectedCountry, setSelectedCountry]);
}
