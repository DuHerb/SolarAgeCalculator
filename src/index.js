import $ from 'jquery';
import './solarages';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { greet } from './solarages';

$(document).ready(function(){
  $('output').text(greet());
});