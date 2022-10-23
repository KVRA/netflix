import { render, screen } from '@testing-library/react';

import { APIResponseMovieByID } from '@/lib/repository/themoviesdb/themoviedb';

import Card from '@/components/sections/DiscoverMovie/Card';

describe('404', () => {
  it('renders a heading', () => {
    render(<Card data={example} />);

    const movieTitle = screen.getByText(/Fight Club/i);
    expect(movieTitle).toBeInTheDocument();
    const movieVote = screen.getByText(example.vote_average);
    expect(movieVote).toBeInTheDocument();
  });
});

const example: APIResponseMovieByID = {
  adult: false,
  backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 35,
      name: 'Comedy',
    },
  ],
  homepage: 'http://www.foxmovies.com/movies/fight-club',
  id: 550,
  imdb_id: 'tt0137523',
  original_language: 'en',
  original_title: 'Fight Club',
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  popularity: 103.361,
  poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  production_companies: [
    {
      id: 508,
      logo_path: '/7cxRWzi4LsVm4Utfpr1hfARNurT.png',
      name: 'Regency Enterprises',
      origin_country: 'US',
    },
    {
      id: 711,
      logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
      name: 'Fox 2000 Pictures',
      origin_country: 'US',
    },
    {
      id: 4700,
      logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
      name: 'The Linson Company',
      origin_country: 'US',
    },
    {
      id: 20555,
      logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
      name: 'Taurus Film',
      origin_country: 'DE',
    },
    {
      id: 54051,
      logo_path: null,
      name: 'Atman Entertainment',
      origin_country: '',
    },
    {
      id: 54052,
      logo_path: null,
      name: 'Knickerbocker Films',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'DE',
      name: 'Germany',
    },
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1999-10-15',
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'Mischief. Mayhem. Soap.',
  title: 'Fight Club',
  video: false,
  vote_average: 8.427,
  vote_count: 25033,
};