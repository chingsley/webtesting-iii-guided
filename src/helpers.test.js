import { savePerson, save } from './helpers';

// this will override the mock we have in uuid
jest.mock('uuid', () => {
  return () => 'abc234';
});

describe('helpers', () => {
  describe('savePerson', () => {
    it('should return newly saved person', () => {
      const name = 'brandon';
      const expected = { id: 'abc234', name };
      const actual = savePerson(name);
      expect(actual).toEqual(expected);
    });
  });
});

describe('spies', () => {
  const bond = jest.fn();

  save('charles', bond);

  expect(bond).toHaveBeenCalled();
  expect(bond).toHaveBeenCalledTimes(2);
  expect(bond).toHaveBeenCalledWith('charles');
  expect(bond).toHaveBeenNthCalledWith(1, 'charles');
  expect(bond).toHaveBeenNthCalledWith(2, 'charles james');
});