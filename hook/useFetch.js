import { useEffect, useReducer } from 'react';

export const useFetch = (url) => {
	const initialState = {
		status: 'idle',
		error: null,
		data: []
	};

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: 'fetching' };
			case 'FETCHED':
				return { ...initialState, status: 'fetched', data: action.payload };
			case 'FETCH_ERROR':
				return { ...initialState, status: 'error', error: action.payload };
			case 'RELOAD':
				return { ...initialState };
			default:
				return state;
		}
	}, initialState);


  const refresh = async () => {
    dispatch({ type: 'FETCHING' });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'FETCHED', payload: data });
    } catch (error) {
    }
  }

	useEffect(() => {
		let cancelRequest = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (cancelRequest) return;
        dispatch({ type: 'FETCHED', payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [url]);

	return {...state, refresh};
};
