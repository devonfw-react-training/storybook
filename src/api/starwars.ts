import axios from "axios";

const url = "https://swapi.dev/api/people";
export const getStarwars = async () => {
  return axios.get(url).then((res: any) => res.data.results);
};

const params = "?search=";
export const getSearch = async (value: string) => {
  return axios.get(url + params + value).then((res: any) => res.data.results);
};
