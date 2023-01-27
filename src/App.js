import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Pages/routes/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import auth from './firebase_init';
import { setLoading, setUser } from './features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)


  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user))
      }
      dispatch(setLoading(false))
    })
  }, [auth])

  if (isLoading) {
    return <p>Loading...</p>
  }


  return (
    <div className="App">
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App
