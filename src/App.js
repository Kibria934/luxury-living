import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Pages/routes/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import auth from './firebase_init';
import { getUser, setLoading, setUser } from './features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(setLoading(true))

    onAuthStateChanged(auth, user => {
      dispatch(getUser({ email: user.email, name: user?.displayName, img: user?.photoURL }))
      dispatch(setLoading(false))
    })

    dispatch(setLoading(false))

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
