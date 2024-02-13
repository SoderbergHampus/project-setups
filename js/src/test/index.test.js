import {helloWorld} from '../index';

describe('Should return "Hello World"', () => {
  it('Expects Hello World', () => {
    expect(helloWorld()).toBe('Hello World');
  });
});
