import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log(url);
        const response = await axios.get(url); // Waiting for get requests
        const resData = response.data;

        setData(resData); // Set fetched data in state
        setLoading(false);
        setError(null);
      } catch (error) {
        if (error.message === "Request failed with status code 404") {
          setError(error.message);
          setLoading(false);
          setData(null);
        }
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, error, data, setData, setLoading, setError };
};

export default useFetchData;
