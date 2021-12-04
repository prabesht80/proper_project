import React from 'react';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';

import {
  Homepage,
  Exchanges,
  Cryptocurrency,
  CryptoDetails,
  News,
  Login,
  Register,
} from './views';

const App = () => {
  return (
    <>
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/homepage"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />

          <Route
            exact
            path="/exchanges"
            element={
              <Layout>
                <Exchanges />
              </Layout>
            }
          />

          <Route
            exact
            path="/cryptocurrency"
            element={
              <Layout>
                <Cryptocurrency />
              </Layout>
            }
          />

          <Route
            exact
            path="crypto/:coinId"
            element={
              <Layout>
                <CryptoDetails />
              </Layout>
            }
          />

          <Route
            exact
            path="/news"
            element={
              <Layout>
                <News />
              </Layout>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
