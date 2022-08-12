export const MOVIE_BASE_URL= 'https://imdb-api.com/en/API';
import { MOVIE_API_KEY } from "../API_KEY/api_keys";
import axios from "axios";

// export function isAxiosError<ResponseType>(error: unknown): error is AxiosError<ResponseType> {
//     return axios.isAxiosError(error);
//   }


  export const BASE_URL = `${MOVIE_BASE_URL}`;
  interface movieType{
      items: object[]
      errorMessage: string
  }

  export const fetchUsers = async () => {
    const items: movieType['items']= [];
    try {
      return await axios.get<movieType>(`${BASE_URL}/BoxOffice/${MOVIE_API_KEY}`);
    } catch (error) {
      return {
        items: items
      }
    }
  };