import { TerminalSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "da6ebe006d2fc59a1";
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchdata();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
