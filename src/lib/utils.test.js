import { pathToPageKey } from './utils';

describe('pathToPageKey', () => {
  it('converts path name to page key', () => {
    expect(pathToPageKey('/pastries')).toStrictEqual('pastries');
  });
});
