import React, { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import CustomerDetailPage from './pages/CustomerDetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import UserCreatePage from './pages/UserCreatePage';

const CustomerContext = createContext({})

function App() {
  const [customerList, setCustomerList] = useState(null)

  return (
    <CustomerContext.Provider value = {{customerList, setCustomerList}}>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/detail/:id" element={<CustomerDetailPage/>}/>
          <Route path="/user/create" element={<UserCreatePage/>}/>
        </Routes>
      </div>
    </CustomerContext.Provider>
  );
}

export {CustomerContext}
export default App;
