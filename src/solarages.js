//Solarage objects store planetary conversion factors, the current
//date, a user's birthday and their calculated age.  Age is stored
//as milliseconds by nature of the javascript Date object
export class Solarage {
  constructor(bdayString) {
    this.bday = new Date(bdayString);
    this.now = new Date();
    this.age = Math.abs(this.now - this.bday);
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
    return this.age/(365*24*60*60*1000);
  }

  ageInDays(){
    return this.age/(24*60*60*1000);
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
    return parseInt(lifeExpectancyString) - this.planetAge(planetsKey);
  }
}