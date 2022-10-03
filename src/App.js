import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Section from './Components/Section/Section'
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';



function App() {
  const router = createBrowserRouter([
   {
    path:'/',
   
    element :<Main></Main>,
    children:[
      {path:'/',
      element:<Home></Home>
      },
      {path:'login',
      element:<Login></Login>
      },
      {path:'signup',
      element:<SignUp></SignUp>
      },
      {path:'products',
      loader : async() =>{
        return fetch('/fakeData/products.json')
      },
      element:<Section></Section>
      },
      {path:'orders',
      loader : async() =>{
        return fetch('/fakeData/products.json')
      },
      element:<Orders></Orders>
      },
      {
        path:'*',
        element :<h1>nothing found</h1>
      }
    ]
   }
  ]) 
  return (
    <div className="App">
    
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
