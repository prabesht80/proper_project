import React from 'react';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';

import {
  Homepage,
  Exchanges,
  Cryptocurrency,
  CryptoDetails,
  News,
} from './views';

const App = () => {
  return (
    <>
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/exchanges" element={<Exchanges />} />

            <Route exact path="/cryptocurrency" element={<Cryptocurrency />} />

            <Route exact path="crypto/:coinId" element={<CryptoDetails />} />

            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App;
