import { Fragment, useEffect, useState } from "react";
import { MOVIE_BASE_URL } from "../../utils/utils";
import {MOVIE_API_KEY} from '../../API_KEY/api_keys';
export type ApiResponseData = {
    gross: string;
    id: string;
    image: string;
    rank: string;
    title: string;
    weekend: string;
    weeks: string;
  };

const Movies = () =>{
    const [officeBoxItems, setOfficeBoxItems] = useState<ApiResponseData[]>([]);
    useEffect(() => {
      const url = `${MOVIE_BASE_URL}/BoxOffice/${MOVIE_API_KEY}`;
      const response = async () => {
        const response = await fetch(url).then((response) => response);
        if (!response.ok) {
          throw new Error("ErrorMessage");
        }
        const responseData = await response.json().then((data) => data);
        setOfficeBoxItems(responseData.items);
      };
      response();
    }, []);
    return(
        <Fragment>
        {officeBoxItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </Fragment>
    )
}

export default Movies;