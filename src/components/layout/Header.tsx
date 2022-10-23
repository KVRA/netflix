import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';

function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [down, setDown] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSearch(false);
    router.push(`/search/${searchText}`);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scrollPosition > 150) {
        setDown(true);
      }
      if (scrollPosition < 150) {
        setDown(false);
      }
      setScrollPosition(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);
  return (
    <div className='relative'>
      <div
        className={` ${
          down ? ' bg-black  ' : ''
        } fixed left-0 right-0 z-50 bg-gradient-to-b from-black`}
      >
        <div className=' flex items-center justify-between px-5 sm:px-10'>
          <div className='flex items-center text-white'>
            <Link href='/home'>
              <div className='flex h-20 items-center'>
                <img
                  className=' w-14 sm:hidden'
                  src='https://res.cloudinary.com/dewctbby3/image/upload/v1647661407/netflixLogo_wdgzbv.png'
                  alt=''
                />
                <img
                  className='z-50 hidden w-28 cursor-pointer sm:block md:w-36'
                  src='https://res.cloudinary.com/dewctbby3/image/upload/v1647661380/netflix_mtsxhk.png'
                  alt=''
                />
              </div>
            </Link>
            <div className='hidden sm:block'>
              <div className=' ml-5  flex space-x-5 text-lg'>
                <p className='cursor-pointer transition-all hover:scale-105'>
                  Home
                </p>
                <p
                  onClick={() => router.push('/movies')}
                  className='cursor-pointer transition-all hover:scale-105'
                >
                  Movies
                </p>
                <p className='cursor-pointer transition-all hover:scale-105'>
                  Tv Shows
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-7'>
            <div className='flex items-center space-x-2  '>
              {isSearch && (
                <form onSubmit={handleSubmit}>
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder=' Search movies, series'
                    className={` ${
                      isSearch ? ' w-40 border p-1 sm:w-56' : ' w-0  '
                    }  rounded-lg bg-transparent px-2 text-white  outline-none transition-all  placeholder:text-white `}
                    type='text'
                  />
                </form>
              )}
              <FiSearch
                onClick={() => setIsSearch(!isSearch)}
                className='cursor-pointer text-2xl  text-white '
              />
            </div>
            <div className='relative flex items-center space-x-2'>
              {/* TODO: use next-image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='w-10 rounded-full'
                src='https://res.cloudinary.com/dewctbby3/image/upload/v1647661487/user_nqjjjf.png'
                alt=''
              />
              <IoMdArrowDropdown className='text-2xl text-white' />
            </div>
          </div>
        </div>

        <div
          onClick={() => setMenu(true)}
          className={` ${down ? 'hidden' : ''} ${
            menu ? 'hidden' : ''
          } z-40 mx-auto mt-1 flex w-28 items-center justify-center rounded-lg bg-[#292929]/60 px-5 py-2  text-sm text-white backdrop-blur-sm sm:hidden `}
        >
          <p>Discover</p> <IoMdArrowDropdown />
        </div>
      </div>
      <div
        className={`  transition-all ${
          menu ? ' top-0' : '-top-[100vh]'
        } absolute z-30 h-screen w-screen bg-gradient-to-b  from-black`}
      >
        <div className='z-20 mt-20  flex flex-col items-center justify-center space-y-5 text-xl text-white '>
          <p onClick={() => router.push('/home')}>Home</p>
          <p onClick={() => router.push('/movies')}>Movies</p>
          <p>Tv Shows</p>
        </div>
        <div onClick={() => setMenu(false)} className='h-full'></div>
      </div>
    </div>
  );
}

export default Header;
