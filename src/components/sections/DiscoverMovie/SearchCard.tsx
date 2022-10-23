import Image from 'next/image';
import React, { useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import { BASE_IMG_URL } from '@/lib/repository/themoviesdb/movieApi';
import { APIResponseMovieByID } from '@/lib/repository/themoviesdb/themoviedb';

import { useUserContext } from '../../../../context/userContext';
const SearchCard = ({ data }: { data: APIResponseMovieByID }) => {
  const { setIsModal } = useUserContext();
  const { setModalData } = useUserContext();
  const [isHover, setIsHover] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fallBackSrc =
    'https://res.cloudinary.com/dewctbby3/image/upload/v1647663227/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w_dugogx.jpg';

  const src = `${BASE_IMG_URL}${data.backdrop_path}`;
  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='relative flex justify-center text-white'
      >
        <Image
          src={imageError ? fallBackSrc : src}
          onError={() => setImageError(true)}
          alt={data.title}
          className='rounded-lg'
          width={350}
          height={200}
        />

        <div
          className={`${
            isHover ? 'absolute transition-all' : 'hidden transition-all'
          } left-10 bottom-5  flex items-center space-x-2 transition-all sm:left-5`}
        >
          <div className='flex items-center justify-center space-x-1  rounded-md bg-[#d41420]  px-4 py-2 font-bold '>
            <div>Play</div>
            <BsPlayFill />
          </div>
          <div
            onClick={() => {
              setModalData(data);
              setIsModal(true);
            }}
            className='rounded-full border-2 p-1  text-2xl'
          >
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
};

export default SearchCard;
