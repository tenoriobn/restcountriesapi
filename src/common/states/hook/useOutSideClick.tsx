import { useEffect } from "react";

export default function useOutSideClick(setOpenListOptions: React.Dispatch<React.SetStateAction<boolean>>) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const clickedOutsideContainer = event.target as HTMLElement;
      if (!clickedOutsideContainer.closest('#filter-select-container')) {
        setOpenListOptions(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setOpenListOptions]);
}
