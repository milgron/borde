import $ from 'jquery'
import { actions } from './actions';
import './elements';
import './styles.scss';

const quit = document.querySelector('.quit');

quit.addEventListener('click', () => {
  const elemento = document.querySelector(".test-class");
  actions.toggleBorder(elemento)
})








