import React from 'react';
import AppRoutes from './app.routes';
import {BrowserRouter } from 'react-router-dom'


const Routes: React.FC = ({children}) => (
  <BrowserRouter>
     <AppRoutes />
  </BrowserRouter>
)

export default Routes;