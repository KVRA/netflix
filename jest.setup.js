import '@testing-library/jest-dom/extend-expect';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: function () {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: function () {},
    };
  };

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock('next/router', () => require('next-router-mock'));
