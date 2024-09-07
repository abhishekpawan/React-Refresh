# React Refresh

This is a repo in which I am refreshing my React knowledge, staying up to date with React 18, and preparing for what's coming in React 19.

## Table of Contents
- [What I have learned so far...](#what-i-have-learned-so-far)
  - [New way to create a React app with Vite](#new-way-to-create-a-react-app-with-vite)
  - [Changes in React-Router-Dom syntax](#changes-in-react-router-dom-syntax)
  - [React Queary](#react-queary)
  - [Try to avoid using useEffect as much as possible](#try-to-avoid-using-useeffect-as-much-as-possible)
  - [Resources](#resources)

## What I have learned so far...

### New way to create a React app with Vite

- `npx create-react-app my-app` is deprecated.
- `npm create vite@latest my-react-app` is the newer way to create a project with Vite.
- Vite is based on ESBuild.

- How to configure Vite and use environment variables in `vite.config.ts` — you can take reference from the `react_work_finder_project`.
- Vite's proxy allows setting a default fetching URL. I observed that the actual backend URL doesn't appear in the browser's network calls; instead, the call is routed to the frontend URL with the endpoint.

### Changes in React-Router-Dom syntax

- Newer syntax for using routes. You can take reference from `react_work_finder_project`:

  ```ts
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
  ```

### React Queary

A new way to fetch data `without using useEffect` — I still need to learn more about it..

### Try to avoid using useEffect as much as possible

- Reduces app complexity and prevents unnecessary re-renders.

### Resources

- [axios-vs-fetch comparison - All Methods' Syntax](https://jasonwatmore.com/post/2021/10/03/axios-vs-fetch-http-post-request-comparison-by-example)
