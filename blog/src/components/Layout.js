import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'

//Layout = Parent component to everything else
const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
           <Outlet />
      </main>
    </>
  )
}

export default Layout
