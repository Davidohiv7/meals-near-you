import { IS_MOCK, API_URL } from 'config';
import { Alert } from 'react-native';
import { Paths } from 'types/Api';

type getDataArgs = {
  param?: string;
  queryParams?: { [key: string]: string };
  path: Paths;
};

const useFetchApi = () => {
  const getData = async ({
    param = '',
    queryParams = {},
    path,
  }: getDataArgs) => {
    try {
      const fullQueryParams = {
        ...queryParams,
        mock: IS_MOCK === 'true',
      };
      const paramPath = param ? `/${param}` : '';
      const queryParamEntries = Object.entries(fullQueryParams).map(
        ([key, value]) => `${key}=${value}`
      );
      const queryParamsString = queryParamEntries.length
        ? `?${queryParamEntries.join('&')}`
        : '';
      const url = `${API_URL}${path}${paramPath}${queryParamsString}`;
      const response = await fetch(url);
      const data = await response?.json();
      if (!response.ok) {
        throw Error(data?.message);
      }
      return {
        data,
        error: false,
        message: 'Success response',
      };
    } catch (e: any) {
      return {
        data: undefined,
        error: true,
        message: e?.message || 'Error fetching data',
      };
    }
  };

  return {
    getData,
  };
};

export default useFetchApi;
