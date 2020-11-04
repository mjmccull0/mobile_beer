import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Constants from "expo-constants";

const endpoint = Constants.manifest.beerApi.endpoint;

export const useBeer = () => {
  const perPage = 40;
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(`${endpoint}?_page=${page}&_limit=${perPage}`);
  const [beer, setBeer] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data, error, refresh } = useFetch(url);

  useEffect(() => {
    // There is a better way to handle fetching data and preventing
    // duplication; but now this will do.
    let beerMap = new Map();
    [...beer, ...data].forEach((beer) => {
      beerMap.set(beer.id, beer);
    });
    setBeer(Array.from(beerMap.values()));
    setIsRefreshing(false);
  }, [data])

  const search = (params) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const newUrl = new URL(url);
    Object.keys(params).map(key => {
      newUrl.searchParams.append(key, params[key]);
    });

    const fetchResults = async () => {
      try {
        const response = await fetch(newUrl);
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      }
    }
    fetchResults();
    return () => {
      abortController.abort();
    }
  }

  const nextPage = () => {
    const newUrl = new URL(url);
    newUrl.searchParams.append('_page', page + 1);

    const fetchNextPage = async () => {
      try {
        const response = await fetch(newUrl);
        const data = await response.json();
        let beerMap = new Map();
        [...beer, ...data].forEach((beer) => {
          beerMap.set(beer.id, beer);
        });
        setBeer(Array.from(beerMap.values()));
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        setPage((prev) => prev + 1);
      }
    }
    fetchNextPage();
  }

  const handleRefresh = () => {
    const newUrl = new URL(url);
    newUrl.searchParams.append('_page', 1);

    const refresh = async () => {
      try {
        const response = await fetch(newUrl);
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        setPage(1);
      }
    }
    refresh();
  }

  return [ beer, nextPage, handleRefresh, isRefreshing, search ];
}
