import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from '../constant'

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),  
});

export default apiSlice