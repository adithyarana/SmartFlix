import { useEffect } from 'react';
import { Provider, useDispatch } from "react-redux";
import store from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { adduser, removeuser } from "./utils/Userslice";
import Login from "./components/Login";
import Browse from "./components/Browse";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

// Wrapper component to handle auth state
const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeuser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={approuter} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
