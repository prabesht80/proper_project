import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

import GlobalStats from '../components/GlobalStats';
import SearchCrypto from '../components/SearchCrypto';

const Cryptocurrency = () => {
  const count = 50;
  //fetching data from the cryptoApi
  const { data, isFetching } = useGetCryptosQuery(count);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'loading...';
  return (
    <div>
      <GlobalStats globalStats={globalStats} />
      <SearchCrypto coins={data} />
    </div>
  );
};

export default Cryptocurrency;
