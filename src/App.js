import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import ManageInventory from "./Components/ManageInvertory/ManageInventory";
import Food from "./Components/Food/Food";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "login", element: <Login></Login> },
        { path: "signup", element: <SignUp></SignUp> },
        {
          path: "products",
          loader: async () => {
            return fetch("/fakeData/products.json");
          },
          element: <Section></Section>,
        },
        {
          path: "orders",
          loader: async () => {
            return fetch("/fakeData/products.json");
          },
          element: <Orders></Orders>,
        },
        {
          path: "manageInventory",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
            );
          },
          element: <ManageInventory></ManageInventory>,
        },
        {
          path: "manageInventory/:FoodName",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/search.php?f=${params.FoodName}`
            );
          },
          element: <Food></Food>,
        },
        {
          path: "*",
          element: <h1>nothing found</h1>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      {/* routing 1st way */}
      <RouterProvider router={router}></RouterProvider>
      {/* routing 2nd way
    <Navbar></Navbar>
    <Routes>
    <Route
    path='/'
    element={<Home></Home>}
    ></Route>
    <Route
    path='/login'
    element={<Login></Login>}
    ></Route>
    <Route
    path='/signup'
    element={<SignUp></SignUp>}
    ></Route>
    <Route
    path='/products'
    loader ={ async() =>{
      return fetch('/fakeData/products.json')
    }}
    element={<Section></Section>}
    ></Route>
    <Route
    path='/orders'
    loader ={ async() =>{
      return fetch('/fakeData/products.json')
    }}
    element={<Orders></Orders>}
    ></Route>
    <Route
    path='*'
    element={<h1>nothing found</h1>}
    ></Route>
    </Routes> */}
    </div>
  );
}

export default App;
