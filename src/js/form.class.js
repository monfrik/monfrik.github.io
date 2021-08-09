import $ from 'jquery';

import { FormControll } from './formControll.class';
import {
  textValidation,
  companyValidation,
  emailValidation,
  telValidation,
} from './validations';


export class Form {

  _formControls = []; // FormControl[]

  constructor() {
    this._checkActive();
    this._initForm();
  }

  _checkActive() {
    $('.participation__form-input').on('input', function(event) {
      if (event.target.value && !$(this).next().hasClass('active')) {
        $(this).next().addClass('active');
        return;
      }
      
      if (!event.target.value && $(this).next().hasClass('active')) {
        $(this).next().removeClass('active');
      }
    });
  }
  
  _onsubmit() {
    this._formControls.forEach(formControll => {
      formControll.onsubmit();
    });
    
    let formValid = !this._formControls.some((formControll) => {
      return !formControll.valid;
    });

    if (!formValid) {
      console.log('form invalid');
      return;
    }

    console.log('form valid');
  }

  _initForm() {
    const fullname = new FormControll({
      control: $('.participation__form-input_fullname'),
      errorField: $('.participation__form-input_fullname ~ .participation__form-error'),
      validatorFanctions: [
        textValidation,
      ],
    });
    this._formControls.push(fullname);

    const company = new FormControll({
      control: $('.participation__form-input_company'),
      errorField: $('.participation__form-input_company ~ .participation__form-error'),
      validatorFanctions: [
        companyValidation,
      ],
    });
    this._formControls.push(company);

    const email = new FormControll({
      control: $('.participation__form-input_email'),
      errorField: $('.participation__form-input_email ~ .participation__form-error'),
      validatorFanctions: [
        emailValidation,
      ],
    });
    this._formControls.push(email);

    const tel = new FormControll({
      control: $('.participation__form-input_tel'),
      errorField: $('.participation__form-input_tel ~ .participation__form-error'),
      validatorFanctions: [
        telValidation,
      ],
    });
    this._formControls.push(tel);

    $('.participation__form').on('submit', (event) => {
      event.preventDefault();
      this._onsubmit();
    });
  }
}