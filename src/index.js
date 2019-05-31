import $ from 'jquery';
import { Solarage, isNotFutureDate } from './solarages';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#userSubmit').on('click', function(e){
    e.preventDefault();
    $('output').empty();
    let userPlanetOption = $('#planetInput').val();
    let solarage = new Solarage($('#userBday').val());
    let lifeExpectancey = $('#lifeExpectancy').val();
    if(!isNotFutureDate($('#userBday').val())){
      $('#planetAge').text("Hello!? McFly!? You haven't been born yet. Re-enter your real birthday");
    }
    else {
      $('#planetAge').text("You are " + solarage.planetAge(userPlanetOption) + " years old on " + userPlanetOption + ".");
      if(lifeExpectancey){
        $('#yearsLeft').text("You have " + solarage.yearsLeft(lifeExpectancey, userPlanetOption) + " " + userPlanetOption +" years left.");
      }
    }
  });
});