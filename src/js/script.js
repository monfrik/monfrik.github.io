import $ from 'jquery';

import { Form } from './form.class';
import { initScroll } from './scroll';
import { initSliders } from './slider';

$(function () {
  initSliders();

  initScroll();

  new Form();
});