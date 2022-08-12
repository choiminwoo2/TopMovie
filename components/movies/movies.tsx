import { Fragment, useEffect, useState } from "react";

export const MOVIE_BASE_URL= 'https://imdb-api.com/en/API';

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
      const url = `${MOVIE_BASE_URL}/BoxOffice/${process.env.MOVIE_API_KEY}`;
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