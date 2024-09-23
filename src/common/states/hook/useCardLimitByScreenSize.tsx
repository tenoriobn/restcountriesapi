import { useEffect, useState } from "react";
import { ILimitCardsState } from "../../interfaces/ILimitCardsState";

export function useCardLimitByScreenSize() {
  const [limit, setLimit] = useState<ILimitCardsState>({sliceLimit: 8, cardsLimit: 8});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth > 951 && window.innerWidth < 1295 ? 9 : 8;

      if (limit.cardsLimit !== screenWidth) {
        setLimit({ sliceLimit: screenWidth, cardsLimit: screenWidth });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [limit]);

  return { limit, setLimit };
}