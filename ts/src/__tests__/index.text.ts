import {myFunction} from '../index';

describe('Testing hello world', () => {
  it('Should return "Hello World"', () => {
    expect(myFunction()).toEqual('Hello World');
  });
});
