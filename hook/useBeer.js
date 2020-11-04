import { useEffect, useState } from 'react';
import Constants from "expo-constants";

const endpoint = "https://api.punkapi.com/v2/beers";

export const useBeer = () => {
  const perPage = 25;
  const [page, setPage] = useState(1);
  const [beer, setBeer] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);


  useEffect(() => {
    fetchBeer().then(data => setBeer(data));
  }, []);


  const search = async (params = {}) => {
    const results = await fetchBeer(params);
    setBeer(results);
  }

  const nextPage = async () => {
    let beerMap = new Map();
    const results = await fetchBeer({ page: page + 1});
    [...beer, ...results].forEach((beer) => {
      beerMap.set(beer.id, beer);
    });

    setBeer(Array.from(beerMap.values()));
    setPage((prev) => prev + 1);
  }


  const handleRefresh = async () => {
    const results = await fetchBeer({page: 1});
    setBeer(results);
    setPage(1);
  }

  const fetchBeer = async (params = {}) => {
    const newUrl = new URL(endpoint);

    Object.keys(params).map(key => {
      newUrl.searchParams.append(key, params[key]);
    });

    newUrl.searchParams.append('per_page', perPage);

    try {
      const response = await fetch(newUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }


  return [ beer, nextPage, handleRefresh, isRefreshing, search ];
}
