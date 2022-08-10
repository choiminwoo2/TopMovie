import { Fragment, useEffect, useState } from "react";
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
      const url = `https://imdb-api.com/en/API/BoxOffice/${process.env.MOVIE_API_KEY}`;
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
        </div>
        </Fragment>
    )
}

export default Movies;