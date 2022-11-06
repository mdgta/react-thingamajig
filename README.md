Implementing various React hooks, context, routes and json server.

# Installation and running

## Installing
To install:

```bash
npm i
```

## Running
To run:

### Terminal #1

Running the app using Vite:

```bash
npm run dev
```

### Terminal #2

Running `json-server`:

```bash
npx json-server --watch data/blogs.json --port 8000
```

# Resources

- [react-router-dom-v6 ](https://dev.to/adidoshi/react-router-dom-v6-51j2)
- [Cannot update a component while rendering a different component warning](https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning)- having to wrap a useState provided by a context with a useEffect