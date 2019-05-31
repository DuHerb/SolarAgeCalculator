/* eslint-disable no-unused-vars */
import { Solarage } from './../src/solarages';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';


describe('solarage', function() {
  test('should return true if input is date object', () => {
    let input = new Date();
    expect(typeof input).toBe('object');
  });

  test('should return valid class property types/values from constructor', () => {
    let solarage = new Solarage("12-18-1980");
    expect(typeof solarage.bday).toBe('object');
    expect(typeof solarage.now).toBe('object');
    expect(solarage.now.getFullYear()).toEqual(2019);
    expect(solarage.bday.getFullYear()).toEqual(1980);
  });

  test('should return users age in years', () => {
    let earthAge = new Solarage("12-18-1980").inYears();
    expect(Math.floor(earthAge)).toEqual(38);
  });

  test('should return users age in days', () => {
    let earthAge = new Solarage("12-18-1980").inDays();
    expect(Math.floor(earthAge)).toEqual(14043);
  });

  test('should return the correct planet by string', () => {
    let userString = "Jupiter";
    let solarage = new Solarage("12-18-1980");
    expect(solarage.getPlanet(userString)).toEqual(solarage.planets["Jupiter"]);
  });


});

