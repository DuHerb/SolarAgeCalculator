# <p align="center">Solar Age Calculator</p>

### An App to calculate your age on each planet and how much spacetime you've got left.

### Author:

#### Dustin Herboldshimer

### Version:

#### 0.0.1 - May 31 2019

### Installation:
From your terminal:
1. [your local dir]$git clone https://github.com/DuHerb/SolarAgeCalculator.git
2. [your local dir] SolarAgeCalculator$npm install
   1. Run local Server: [your local dir] SolarAgeCalculator$npm run start
   2. Run Jest to see test coverage: [your local dir] SolarAgeCalculator$npm run test

## Specifications:
| Spec                                                                  | Input      | Output                                                                                                      |
|-----------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------------|
| Retrieve a date(birthdate) from user                                  | 12-18-1980 | "12-18-1980"
| Convert date 'string' into Date object                                | 12-18-1980 | Js Date Obj: Thursday Dec 18, 1980 03:24:00 GMT-0700 (Pacific Daylight Time)
| Return age in Mercury years                                           | 12-18-1980 | +- 158.5 years                                                                                              |
| Return age in Venus years                                             | 12-18-1980 | +- 57.12                                                                                                    |
| Return age in Mars years                                              | 12-18-1980 | +- 20.2                                                                                                     |
| Return age in Jupiter years                                           | 12-18-1980 | +- 3.17                                                                                                     |                                                                                                |
| Retrieve user's life expectancy                                       | 80 years   | 1980 + 80 = 2060                                                                                            |
| Return how many years on each planet till end of user life expectancy | 80 years   | Mercury Time = 173.5 years left                                                                             |
| User uses select box to choose which planets data to display          | Mercury    | Your BirthDate = Dec 18 1980 Earth Age = 38 Life Expectancy = 80 Mercury Age = 158.5 SpaceTime Left = 173.5 |

## Known Issues, Bugs, and ToDos

1. needs more validation options to trigger display messages(maybe an error parser in the solarage object)
2. Planets outside Jupiter (saturn, uranus and neptune) are not included in options yet. They are so far out that your
   solar age on any of those planets would be under one year old, and as of now, solarage logic floors all outputs to the lowest
   whole number, which isn't helpful when you'd need to measure age in decimals. The planets have been included in the solarage object
   for future updates.

## Support and contact details

Contact Dustin Herboldshimer at dustnpdx@gmail.com

## Technologies Used

1. Webpack
2. Jest
3. Jquery

### License

Protected under the <a href="https://opensource.org/licenses/MIT">MIT License</a>

Copyright (c) 2019 **Dustin Herboldshimer**


