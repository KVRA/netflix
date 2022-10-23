import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Slider from 'react-slick/lib/slider';

import { APIResponseMovieByID } from '@/lib/repository/themoviesdb/themoviedb';

import Card from './Card';
import SearchCard from './SearchCard';
import { settings } from './settings';

const DiscoverMovies = ({
  movieList1,
  movieList2,
}: {
  movieList1: APIResponseMovieByID[];
  movieList2: APIResponseMovieByID[];
}) => {
  if (!movieList1) {
    return (
      <div>
        <div className='flex items-center space-x-2 text-xl text-white'>
          <AiOutlineLoading3Quarters className='animate-spin' />
          <p>Loading</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='sm:px-10   '>
        <div className='my-5  px-5 text-xl font-medium text-white sm:text-2xl'>
          Popular Movies{' '}
        </div>

        <Slider {...settings}>
          {movieList1.slice(0, 7).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Slider>
        <div className='my-5  px-5 text-xl font-medium text-white sm:text-2xl'>
          Best of the Year
        </div>
        <Slider {...settings}>
          {movieList1.slice(7, 14).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Slider>
        <div className='my-5  px-5 text-xl  font-medium text-white sm:text-2xl'>
          Best of this week{' '}
        </div>
        <Slider {...settings}>
          {movieList1.slice(14, 20).map((item) => (
            <SearchCard key={item.id} data={item} />
          ))}
        </Slider>
        <div className='my-5  px-5 text-xl  font-medium text-white sm:text-2xl'>
          Best of this year{' '}
        </div>
        <Slider {...settings}>
          {movieList2.slice(0, 7).map((item) => (
            <SearchCard key={item.id} data={item} />
          ))}
        </Slider>
        <div className='my-5  px-5 text-xl  font-medium text-white sm:text-2xl'>
          Best of this Year{' '}
        </div>
        <Slider {...settings}>
          {movieList2.slice(8, 14).map((item) => (
            <SearchCard key={item.id} data={item} />
          ))}
        </Slider>
        <div className='my-5  px-5 text-xl  font-medium text-white sm:text-2xl'>
          Best of this century{' '}
        </div>
        <Slider {...settings}>
          {movieList2.slice(15, 20).map((item) => (
            <SearchCard key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverMovies;
