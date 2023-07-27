import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CRM Admin`;
  }, [title]);
};

export default useTitle;
