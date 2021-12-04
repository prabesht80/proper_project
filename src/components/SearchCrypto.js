import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchCrypto = ({ coins }) => {
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(cryptos);

  useEffect(() => {
    setCryptos(coins?.data?.coins);

    const filteredData = coins?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [coins, searchTerm]);

  return (
    <div>
      {/* crypo search */}
      <div className="relative mr-40">
        <input
          placeholder="search crypto...."
          className="ml-2 sm:ml-0 w-5/4 sm:w-1/3 p-2 rounded-lg bg-yellow-300 sm:absolute bottom-0 right-2"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
      {/* all crypto */}
      <div className="py-10">
        <table className="w-5/6 text-center">
          <tr className="text-gray-700">
            <th>Name</th>
            <th>Price</th>
            <th>24h High/ 24h Low</th>
            <th>24h Volume</th>
            <th>Exchanges</th>
          </tr>

          {cryptos?.map((crypto) => {
            return (
              <tr key={crypto.id} className="text-lg">
                <td className="flex flex-row m-3 md:ml-36 rounded-lg hover:bg-gray-200">
                  <Link key={crypto.id} to={`/crypto/${crypto.id}`}>
                    <img src={crypto.iconUrl} alt="#" className="w-10 h-8" />
                    <span className="text-bold ">({crypto.symbol})</span>
                    <span>{crypto.name}</span>
                  </Link>
                </td>
                <td>${Math.round(crypto.price * 100) / 100}</td>
                <td>
                  {crypto.change < 0 ? (
                    <p style={{ color: 'red' }}>{crypto.change}%</p>
                  ) : (
                    <p style={{ color: 'green' }}>{crypto.change}%</p>
                  )}
                </td>
                <td>{millify(crypto.volume)}</td>
                <td>{crypto.numberOfExchanges}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default SearchCrypto;
