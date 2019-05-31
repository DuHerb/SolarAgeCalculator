//Solarage objects store planetary conversion factors, the current
//date, a user's birthday and their calculated age.  Age is stored
//as milliseconds by nature of the javascript Date object
export class Solarage {
  constructor(bdayString) {
    this.bday = new Date(bdayString);
    this.now = new Date();
    this.msAge = Math.abs(this.now - this.bday);
    this.planets = {
      "Mercury": 88,
      "Venus": 225,
      "Earth": 365,
      "Mars": 687,
      "Jupiter":(11.8*365),
      "Saturn":(29.4*365),
      "Uranus":(84*365),
      "Neptune":(164*365)
    };
  }

  ageInYears(){
    return this.msAge/(365*24*60*60*1000);
  }

  ageInDays(){
    return this.msAge/(24*60*60*1000);
  }

  getPlanet(planetsKey){
    return this.planets[planetsKey];
  }

  //solar age will be calculated by days for a marginal
  //gain in accuracy.
  planetAge(planetsKey){
    return Math.floor(this.ageInDays()/this.planets[planetsKey]);
  }

  yearsLeft(lifeExpectancyString, planetsKey){
    let solarExpectancy = Math.floor(parseInt(lifeExpectancyString)*365/this.planets[planetsKey]);
    return solarExpectancy - this.planetAge(planetsKey);
  }
}

export function isNotFutureDate(dateString){
  let now = new Date();
  let given = new Date(dateString);
  return ((now - given) > 0);
}