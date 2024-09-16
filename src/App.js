import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Project from './pages/directory/Directory';
import Directory from './pages/directory/Directory'
import Error from './pages/error/Error';
import CV from './pages/CV/CV';




const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
    	errorElement: <Error />
	},
	{
		path: "/directory/:id",
		element: <Project />,
		errorElement: <Error />
	},
	{
		path: '/contact',
		element: <Contact />,
    errorElement: <Error />
	},
  {
    path: '/Directory',
    element: <Directory />,
    errorElement: <Error />
  },
  {
    path: '/CV',
    element: <CV />
  },
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
