import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
// import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  // QueryClient,
  // QueryClientProvider,
// } from 'react-query'
// import { getTodos, postTodo } from '../my-api'
// const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <React.StrictMode>
      {/* <QueryClientProvider client={queryClient}> */}
        <App />
      {/* </QueryClientProvider> */}
    </React.StrictMode>
  </Provider>
);

