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

  inYears(){
    return this.age/(365*24*60*60*1000);
  }

  inDays(){
    return this.age/(24*60*60*1000);
  }

  getPlanet(planetOptionValue){
    return this.planets[planetOptionValue];
  }
}