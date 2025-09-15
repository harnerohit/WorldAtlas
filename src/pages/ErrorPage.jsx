import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
const error = useRouteError();
console.log(error);

  return (
    <div>
        <h1>Oops! chud gaye guru</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"><button>Go Back to Home Page</button></NavLink>
    </div>
  )
}

export default ErrorPage
