import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';
import { BASE_IMG_URL_500w } from '@/lib/repository/themoviesdb/movieApi';

import { useUserContext } from '../../context/userContext';
const Modal = () => {
  const { isModal, setIsModal } = useUserContext();
  const { ModalData } = useUserContext();
  return (
    <div>
      {ModalData && (
        <div
          className={clsxm(
            isModal
              ? 'fixed bottom-0 top-0 left-0 right-0 z-50 flex items-center  justify-center backdrop-blur-sm backdrop-brightness-50 transition-all'
              : 'hidden'
          )}
        >
          <div>
            <div
              data-aos='fade-in'
              className='w-[90vw] rounded-xl bg-[#181818] shadow-xl sm:w-[600px]'
            >
              <div className='relative'>
                {/* TODO: optimze image loading */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='h-full w-full rounded-lg rounded-b-none'
                  src={`${BASE_IMG_URL_500w}${ModalData.backdrop_path}`}
                  alt=''
                />
                <div
                  onClick={() => setIsModal(false)}
                  className='absolute top-3 right-3 cursor-pointer text-3xl text-white drop-shadow-md sm:text-4xl  '
                >
                  <RiCloseCircleLine />
                </div>
                <div className='absolute left-5 bottom-5 flex items-center space-x-3 text-white '>
                  <div className='flex cursor-pointer  items-center  space-x-2 rounded-md bg-[#d41420] p-3 font-semibold text-white'>
                    <span>{ModalData.vote_average}</span>
                    <BsStarFill />
                  </div>
                </div>
              </div>
              <div className='p-7 sm:p-10'>
                <h1 className='text-2xl font-bold text-white'>
                  {ModalData.title}
                </h1>
                <h2 className='line-clamp-4 mt-5 font-medium text-white sm:text-lg'>
                  {ModalData.overview}
                </h2>

                <hr className='my-5' />

                <h1 className='text-xl font-medium text-white'>
                  Info on{' '}
                  <span className='font-semibold'>{ModalData.title}</span>
                </h1>

                <div className='mt-5 font-semibold text-[#636363]'>
                  <div>
                    Release date :{' '}
                    <span className='text-white'>{ModalData.release_date}</span>
                  </div>
                  <div>
                    Original Language :{' '}
                    <span className='text-white'>
                      {ModalData.original_language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
