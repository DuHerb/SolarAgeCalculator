/* eslint-disable no-unused-vars */
import { greet } from './../src/solarages';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('solarage', function() {

  test('should return a string object', () => {
    expect(typeof greet()).toEqual('string');
  });

});

