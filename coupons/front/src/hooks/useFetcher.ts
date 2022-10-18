import axios from "axios";
import { useState } from "react";

interface IFetcher {
  method: "get" | "post" | "put" | "delete";
  path: string;
  params?: { [key: string]: any };
  body?: { [key: string]: any };
  jwt?: string;
}

const useFetcher = async ({ method, path, params, body, jwt }: IFetcher) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState(200);
  let baseURL = `${process.env.API_URL}/api${path}`;
  console.log(baseURL);
  return { data };
};
export default useFetcher;
