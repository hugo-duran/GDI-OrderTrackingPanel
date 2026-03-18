import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrderTracking from '../shared/client/order/pages/OrderTracking'
import NavBarTracking from '../shared/layout/Navbar/NavBarTracking'
import FooterTracking from '../shared/layout/Footer/FooterTracking'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBarTracking />
      <Routes>
        <Route path='/' element={<OrderTracking />} />
      </Routes>
      <FooterTracking />
    </BrowserRouter>
  )
}

export default AppRouter