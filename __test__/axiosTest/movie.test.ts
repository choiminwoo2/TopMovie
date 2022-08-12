import axios from "axios";

import { BASE_URL, fetchUsers } from "../../utils/utils";
import {MOVIE_API_KEY} from '../../API_KEY/api_keys'
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return movies list", async () => {
      // given
      const movieImtes = {
        items: [
          {
            id: "tt12593682",
            rank: "1",
            title: "Bullet Train",
            image:
              "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
            weekend: "$30.0M",
            gross: "$30.0M",
            weeks: "1",
          },
          {
            id: "tt8912936",
            rank: "2",
            title: "DC League of Super-Pets",
            image:
              "https://m.media-amazon.com/images/M/MV5BYWI2NDg5M2MtMGMwYS00NzU1LWI1YzktYTg0ZDEwMjY4YmUwXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_UX128_CR0,3,128,176_AL_.jpg",
            weekend: "$11.1M",
            gross: "$45.0M",
            weeks: "2",
          },
        ],
        errorMessage:""
      };
      //axios get메서드에서 R = AxiosResponse<T>는  Pormise<R> 값의 타입을 가짐.
      //Promise가 성공했을 때, 임의의 데이터를 주입해줌.
      mockedAxios.get.mockResolvedValueOnce(movieImtes);

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/BoxOffice/${MOVIE_API_KEY}`);
      expect(result).toEqual(movieImtes);
    });
  });

  describe("when API call fails", () => {
    it("should return empty movie list", async () => {
      // given
      const message = "Network Error";
      mockedAxios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/BoxOffice/${MOVIE_API_KEY}`);
      expect(result).toEqual({
        items:[]
      });
    });
  });
});
