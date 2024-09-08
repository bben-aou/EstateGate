// src/api/locationService.ts
import axios from 'axios';
import { ENDPOINTS } from '@services/api/searchLocation';
import { LocationData } from '@/interfaces/data/location';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

const getLocation = async (query: string): Promise<LocationData[]> => {
  const response = await axios.get(ENDPOINTS.search, {
    params: {
      key: API_KEY,
      q: query,
      format: 'json',
    },
  });
  
  return response.data;
};


export const useLocationSearch = (query: string, debounceDelay : number): UseQueryResult<LocationData[]> & { debouncedQuery: string } => {
  const debouncedQuery = useDebounce(query, debounceDelay); // 300ms delay

  const result = useQuery({
    queryKey: ['locationSearch', debouncedQuery],
    queryFn: () => getLocation(debouncedQuery),
    enabled: !!debouncedQuery,
    // staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { ...result, debouncedQuery };
};