  // Need to use the React-specific entry point to import createApi
  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  const baseUrl = process.env.REACT_APP_API_URL;

  // Define a service using a base URL and expected endpoints
  export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api` }),
    endpoints: (builder) => ({
      getProductByName: builder.query({
        query: (name) => `${name}`,
      }),
    }),
  });

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetProductByNameQuery } = productApi;
