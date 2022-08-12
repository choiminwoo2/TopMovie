import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import {MOVIE_API_KEY} from '../../API_KEY/api_keys'
import { isAxiosError, MOVIE_BASE_URL } from '../../utils/utils'
interface movie{
    items: object[],
    errorMessage: string
}
type MyExpectedResponseType = {
    thisIsANumber: number;
  };
export const getOfficeBoxList = () =>{
    try{
    return axios.get<movie>(`${MOVIE_BASE_URL}/BoxOffice/${MOVIE_API_KEY}`);
    }
    catch (error : unknown) {
        if(isAxiosError<MyExpectedResponseType>(error)){
           return Promise.resolve(error.response?.data.thisIsANumber);
        }
  }
}
