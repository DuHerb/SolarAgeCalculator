import $ from 'jquery';
import { Solarage } from './solarages';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#userSubmit').on('click', function(e){
    e.preventDefault();
    $('output').empty();
    let userBday = $('#userBday').val();
    let userPlanetOption = $('#planetInput').val();
    let solarage = new Solarage(userBday);
    let planetAge = solarage.planetAge(userPlanetOption);
    $('output').text("You are " + planetAge + " years old on " + userPlanetOption + ".");
  });
});