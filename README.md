# React Refresh

This is a repo in which I am refreshing my React knowledge, staying up to date with React 18, and preparing for what's coming in React 19.

## Table of Contents
- [What I have learned so far...](#what-i-have-learned-so-far)
  - [New way to create a React app with Vite](#new-way-to-create-a-react-app-with-vite)
  - [Changes in React-Router-Dom syntax](#changes-in-react-router-syntax)
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

### Changes in React Router Syntax

- Newer syntax for using routes. You can take reference from `react_work_finder_project`:

  ```ts
  import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
  
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
  #### Loader in React Router
    ```ts
    <Route path="/jobs/:id" element={<JobPage />} loader={ ({params}) => jobLoader(params.id!)} /> 
    ```
    - React Router waits for the `loader` function to resolve before rendering the component
    - The `loader` function allows you to fetch data before rendering a route component.

    #### How to Show a Loader While the Data is Fetching: 

    If you want to show a loading spinner or fallback before the jobLoader promise resolves (i.e., while the promise is pending), you need to handle this by using a `layout route` or pending navigation state. Here’s how you can show a loader while the loader is still fetching data.

    #### Solution: Show Loader Before Data is Ready

    You can use `useNavigation` to track when the loader is pending and display a loader until the data is ready.
    
    You can take reference from `react_work_finder_project`:
    ```ts
    const MainLayout = () => {
      const navigation = useNavigation();
      return (
        <>
          <Navbar />
          {navigation.state === "loading" ? <Spinner loading /> : <Outlet />}
        </>
      );
    };
    ```
    - `useNavigation`: Tracks the state of the navigation. When the navigation is loading, you show a loader. Once the jobLoader resolves, the child component (JobPage) is rendered.
    
    - ```ONE BIG DRAWBACK: Refreshing the JobPage doesn't show the loader, occurs because React Router's navigation.state is not triggered when a page is loaded directly via a refresh. In this case, the loader runs automatically in the background, but since there's no route navigation occurring, the useNavigation hook doesn't detect a pending state. As a result, the layout doesn't show the loader.```

### React Queary

A new way to fetch data `without using useEffect` — I still need to learn more about it..

### Try to avoid using useEffect as much as possible

- Reduces app complexity and prevents unnecessary re-renders.

### Resources

- [axios-vs-fetch comparison - All Methods' Syntax](https://jasonwatmore.com/post/2021/10/03/axios-vs-fetch-http-post-request-comparison-by-example)
