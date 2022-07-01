import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export type Docs = {
  author_facet: string[];
  author_key: string[];
  author_name: string[];
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  has_fulltext: boolean;
  isbn: string[];
  key: string;
  language: string[];
  last_modified_i: number;
  title: string;
};

function useFetch(query: string, page: number) {
  const [data, setData] = useState<Docs[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendQuery = useCallback(async () => {
    console.log('current page is ', page);
    const endPoint = `https://openlibrary.org/search.json?q=${query}&page=${page}`;
    setLoading(true);
    const { data }: { data: { docs: Docs[] } } = await axios.get(endPoint);
    setData((prev) => [...prev, ...data.docs]);
    setLoading(false);
  }, [query, page]);

  useEffect(() => {
    sendQuery();
  }, [query, page]);

  return {
    data,
    loading,
  };
}

export default useFetch;
