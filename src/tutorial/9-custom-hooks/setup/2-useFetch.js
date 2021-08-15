import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setLoading((loading) => !loading);
      setProducts(data);
    };

    fetchData();
  }, [url]);

  return { products, loading };
};

// using useCallback approach
export const useFetching = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    setLoading((loading) => !loading);
    setProducts(data);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, url]);

  return { products, loading };
};
