import React, { useState } from 'react';
import { useGetNewsQuery } from '../services/newsApi';

const News = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data: newsData, isFetching } = useGetNewsQuery({
    newsCategory,
    count: 12,
  });
  if (isFetching) return <div className="animate-spin"></div>;

  const cryptoNews = newsData?.value;

  const singleNews = cryptoNews.slice(0, 1);
  const secondSlice = cryptoNews.slice(5, 12);
  console.log(cryptoNews);

  const demoImage =
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZ00tHOJYDuc/v0/280x210.jpg';

  // console.log(data);
  return (
    <div className="m-auto max-w-screen-md xl:max-w-screen-lg mt-16 mb-12">
      <div className="flex mb-8 ml-8 md:ml-0">
        <button
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => setNewsCategory('cryptocurrency')}
        >
          Cryptocurency
        </button>
        <button
          className="ml-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => setNewsCategory('Bitcoin')}
        >
          Bitcoin
        </button>
        <button
          className="ml-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => setNewsCategory('Etherium')}
        >
          Etherium
        </button>
        <button
          className="ml-4 p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => setNewsCategory('Terra')}
        >
          Terra
        </button>
      </div>
      <div className="ml-2">
        {/* hero News */}
        <div className="flex flex-wrap md:flex-nowrap">
          <img
            src={singleNews?.image?.thumbnail?.contentUrl || demoImage}
            alt="#"
            className="ml-8 md:ml-0"
          />
          <div className="ml-8 mt-4">
            <h1 className="text-3xl font-semibold hover:underline">
              {singleNews[0].name}
            </h1>
            <p className="mt-2 font-medium">{singleNews[0].description}</p>
          </div>
        </div>
        {/* parallel News */}
        <div className="mt-16 flex flex-wrap md:flex-nowrap  ">
          <div className="pt-4 pb-4 pr-4">
            <img
              src={cryptoNews[1]?.image?.thumbnail?.contentUrl}
              alt="#"
              className="h-44 w-44 ml-8 md:ml-0"
            />
            <h3 className="text-lg font-semibold hover:underline ml-8 md:ml-0">
              {cryptoNews[1].name}
            </h3>
          </div>
          <div className="mt-4 md:mt-0 p-0 md:p-4">
            <img
              src={cryptoNews[2]?.image?.thumbnail?.contentUrl}
              alt="#"
              className="h-44 w-44 ml-8 md:ml-0"
            />
            <h3 className="text-lg font-semibold hover:underline ml-8 md:ml-0">
              {cryptoNews[3].name}
            </h3>
          </div>
          <div className="mt-4 md:mt-0 p-0 md:p-4">
            <img
              src={cryptoNews[4]?.image?.thumbnail?.contentUrl}
              alt="#"
              className="h-44 w-44 ml-8 md:ml-0"
            />
            <h3 className="text-lg font-semibold hover:underline ml-8 md:ml-0">
              {cryptoNews[4].name}
            </h3>
          </div>
        </div>
        {/* vertical News */}
        <div className="mt-8 border-t-4">
          <h1 className="text-3xl font-bold text-center">
            More on {newsCategory}
          </h1>
          {secondSlice.map((news) => {
            return (
              <div
                key={news.id}
                className="flex justify-between my-12 flex-wrap md:flex-nowrap ml-8 md:ml-0 border-t-4"
              >
                <h1 className="text-2xl font-semibold hover:underline">
                  {news.name}
                </h1>
                <img
                  src={cryptoNews?.image?.thumbnail?.contentUrl || demoImage}
                  alt="#"
                  className="h-32 w-432 "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
