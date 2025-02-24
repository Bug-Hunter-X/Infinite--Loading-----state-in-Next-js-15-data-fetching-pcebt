# Next.js 15 Data Fetching Bug

This repository demonstrates a bug encountered in a Next.js 15 application related to data fetching. The application uses `React.useEffect` and the `fetch` API to retrieve data from an API endpoint.  The issue is that the component displays a loading message indefinitely, even when the API call completes successfully.

## Bug Description

The `MyComponent` fetches data from `/api/data`. The API call works correctly, returning a JSON response.  However, the component remains stuck in the loading state, displaying "Loading..." continuously.  This is likely due to a misunderstanding of how `useEffect` and asynchronous operations work within Next.js's React environment.

## Reproduction Steps

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and navigate to `http://localhost:3000`. 
6. Observe that the page remains in a loading state, never displaying the data from the API.

## Solution

The solution involves correctly handling the asynchronous operation within `useEffect` and properly updating the component's state.