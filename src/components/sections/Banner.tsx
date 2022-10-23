import axios from 'axios';
import { ModalData, useUserContext } from 'context/userContext';
import React, { useEffect, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { FiInfo } from 'react-icons/fi';

function Banner() {
  const { setIsModal } = useUserContext();
  const { setModalData } = useUserContext();
  const [data, setData] = useState<ModalData>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);

    setLoading(true);

    axios

      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setData(data.results[RandNum]);
        setLoading(false);
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.log('e', e));
  }, []);

  if (loading) {
    return (
      <div className='ml-5  flex  h-screen w-screen items-center justify-start bg-black md:ml-20'>
        <div className='flex items-center space-x-2 text-xl text-white'>
          <div className='  mx-auto mt-20 rounded-md'>
            <div className='flex h-full animate-pulse flex-col  justify-center space-y-4 '>
              <div className=' h-10 w-[210px] rounded-lg bg-slate-300 sm:h-14'></div>
              <div className='flex space-x-4'>
                <div className='h-5 w-24 rounded-md bg-slate-300 sm:h-8 sm:rounded-lg'></div>
                <div className='h-5 w-24 rounded-md bg-slate-300 sm:h-8 sm:rounded-lg'></div>
              </div>
              <div className='bg-sl/t/pate-200 h-14 w-[320px] rounded-lg p-2'>
                <div className='h-4 w-full rounded-sm bg-slate-300'></div>
                <div className='mt-2 h-4 w-full rounded-sm bg-slate-300'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {data && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
          className='relative flex h-[90vh]  items-center    rounded-b-xl bg-cover bg-center px-10 sm:px-20'
        >
          <div className=' absolute bottom-0 left-0 z-20 h-52  w-full bg-gradient-to-t from-black to-transparent ring-0' />
          <div>
            <div data-aos='fade-up' className='   w-3/4'>
              <h1 className='text-4xl font-bold text-white drop-shadow-lg sm:text-6xl'>
                {data.title}
              </h1>
              <div className='mt-5 flex space-x-2 font-semibold text-white '>
                <div className='flex w-36 cursor-pointer items-center justify-center space-x-2 rounded-md bg-[#e50914]/90 py-2 text-center text-base active:scale-95 '>
                  <BsPlayFill />
                  <p>Play</p>
                </div>
                <div className='flex w-36 cursor-pointer items-center justify-center space-x-2 rounded-md  bg-[#6d6d6e]/80 py-2 text-center text-base  active:scale-95 '>
                  <FiInfo />
                  <p
                    onClick={() => {
                      setIsModal(true);
                      setModalData(data);
                    }}
                  >
                    {' '}
                    More info
                  </p>
                </div>
              </div>
              <div className='-z-20 mt-5 text-base  text-white sm:w-2/4 sm:text-2xl'>
                <p className='line-clamp-3  drop-shadow-lg'>
                  {data.overview.length < 200
                    ? data.overview
                    : data.overview.slice(0, 200) + '...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* modal */}
    </>
  );
}

export default Banner;
