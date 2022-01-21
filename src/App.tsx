import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from "./App.module.css"
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages"

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          {/* <Route path={'*'} element={<Navigate to={'/'} />} /> */}
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/signIn'} element={<SignInPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/detail/:touristRouteId'} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
