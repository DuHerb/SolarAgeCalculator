//Solarage objects store planetary conversion factors, the current
//date, a users birthday and their age.  Age is stored as milliseconds by nature
//of the javascript date object
export class Solarage {
  constructor(bdayString) {
    this.bday = new Date(bdayString);
    this.now = new Date();
    this.age = Math.abs(this.now - this.bday);
    this.planets = {
      "Mercury": 88,
      "Venus": 225,
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

  getPlanet(planetOptionValue){
    return this.planets[planetOptionValue];
  }

  //solar age will be calculated by days for a marginal
  //gain in accuracy.
  planetAge(planetOptionValue){
    return Math.floor(this.ageInDays()/this.planets[planetOptionValue]);
  }
}