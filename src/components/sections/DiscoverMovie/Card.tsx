import Image from 'next/image';
import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import { BASE_IMG_URL_500w } from '@/lib/repository/themoviesdb/movieApi';
import { APIResponseMovieByID } from '@/lib/repository/themoviesdb/themoviedb';

import { useUserContext } from '../../../../context/userContext';

const Card = ({ data }: { data: APIResponseMovieByID }) => {
  const { setIsModal } = useUserContext();
  const { setModalData } = useUserContext();
  // or use tailwind hover group this is just to show react events control :P
  const [isHover, setIsHover] = useState(false);
  if (!data) {
    return <div> Loading </div>;
  }
  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => {
          setModalData(data);
          setIsModal(true);
        }}
        className='relative flex justify-center text-white'
      >
        <Image
          src={`${BASE_IMG_URL_500w}${data.backdrop_path}`}
          alt={data.title}
          className='rounded-lg'
          width={350}
          height={200}
        />

        <div
          className={`${
            isHover
              ? 'absolute w-full bg-gradient-to-b from-transparent to-black px-4  py-2 transition-all  '
              : 'hidden transition-all'
          } bottom-0 transition-all`}
        >
          <div className='font-medium'>{data.title}</div>
          <div className=' flex items-center space-x-2 '>
            <div className='flex items-center justify-center space-x-2 rounded-md bg-[#d41420] px-4 py-2 font-bold'>
              <span>{data.vote_average}</span>
              <BsStarFill />
            </div>
            <div className='cursor-pointer rounded-full border-2  p-1 text-2xl'>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
