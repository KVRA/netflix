import AOS from 'aos';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';

import { APIkey, movieApi } from '@/lib/repository/themoviesdb/movieApi';
import { APIResponseMovieByID } from '@/lib/repository/themoviesdb/themoviedb';

import Header from '@/components/layout/Header';
import Modal from '@/components/Modal';
import Banner from '@/components/sections/Banner';
import DiscoverMovies from '@/components/sections/DiscoverMovie/DiscoverMovies';

const Movies = ({
  movieList1,
  movieList2,
}: {
  movieList1: APIResponseMovieByID[];
  movieList2: APIResponseMovieByID[];
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Netflix - Watch TV shows Online, Watch Movies Online</title>
        {/* TODO: install locally */}
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <div className='overflow-x-hidden bg-black'>
        <Header />
        <Banner />
        <DiscoverMovies movieList1={movieList1} movieList2={movieList2} />
        <Modal />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const movieList1 = await movieApi.get(
    `/discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );

  const movieList2 = await movieApi.get(
    `discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020&with_watch_monetization_types=flatrate`
  );

  return {
    props: {
      movieList1: movieList1.data.results,
      movieList2: movieList2.data.results,
    },
    revalidate: 30,
  };
}

export default Movies;
