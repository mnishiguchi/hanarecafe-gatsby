import * as utils from './utils';

describe('pathToPageKey', () => {
  it('converts default lang root path to page key', () => {
    expect(utils.pathToPageKey('/')).toStrictEqual('home');
  });

  it('converts default lang path to page key', () => {
    expect(utils.pathToPageKey('/pastries')).toStrictEqual('pastries');
  });

  it('converts EN root path to page key', () => {
    expect(utils.pathToPageKey('/en/')).toStrictEqual('home');
  });

  it('converts EN path to page key', () => {
    expect(utils.pathToPageKey('/en/pastries')).toStrictEqual('pastries');
  });

  it('removes trailing slash', () => {
    expect(utils.pathToPageKey('/en/pastries/')).toStrictEqual('pastries');
  });
});

describe('pathToDefaultForm', () => {
  const languages = ['ja', 'en'];

  it('converts default lang root path to default form', () => {
    expect(utils.pathToDefaultForm('/', languages)).toStrictEqual('/');
  });

  it('converts default lang path to default form', () => {
    expect(utils.pathToDefaultForm('/amenities', languages)).toStrictEqual(
      '/amenities'
    );
  });

  it('converts EN root path to default form', () => {
    expect(utils.pathToDefaultForm('/en/', languages)).toStrictEqual('/');
  });

  it('converts EN path to default form', () => {
    expect(utils.pathToDefaultForm('/en/amenities', languages)).toStrictEqual(
      '/amenities'
    );
  });
});
