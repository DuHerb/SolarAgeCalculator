import $ from 'jquery';
import { Solarage } from './solarages';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#userSubmit').on('click', function(e){
    e.preventDefault();
    $('output').empty();
    let userPlanetOption = $('#planetInput').val();
    let solarage = new Solarage($('#userBday').val());
    $('output').text("You are " + solarage.planetAge(userPlanetOption) + " years old on " + userPlanetOption + ".");
  });
});