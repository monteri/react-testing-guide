import { useState, useEffect } from "react";
import axios from "axios";

export function useAPI() {
  const [data, setData] = useState();

  useEffect(() => {
    let isMounted = true;
    axios.get("/api").then((response) => {
        if (isMounted) {
          setData(response.data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return data;
}