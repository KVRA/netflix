import AOS from 'aos';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';

import Header from '@/components/layout/Header';
import Modal from '@/components/Modal';
import Banner from '@/components/sections/Banner';
import DiscoverMovies from '@/components/sections/DiscoverMovie/DiscoverMovies';

const Movies = () => {
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
        <DiscoverMovies />
        <Modal />
      </div>
    </>
  );
};

export default Movies;
