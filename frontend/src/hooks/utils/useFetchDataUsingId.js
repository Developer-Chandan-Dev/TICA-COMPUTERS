import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDataUsingId = (url, id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/${id}`); // Fetching data using id or name
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
        console.error(error.data.error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, url]);

  return { data, loading, error, setError, setLoading, setData };
};

export default useFetchDataUsingId;
