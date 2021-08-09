export class FormControll {

  _control = null; // jQuery
  _errorField = null; // jQuery
  _validatorFanctions = []; // array of function
  _valid = true;

  /**
   * 
   * @param {Object: {control: jQuery, errorField: jQuery, validatorFanctions: Function[]}} params
   */
  constructor(params) {
    this._control = params.control;
    this._errorField = params.errorField;
    this._validatorFanctions = params.validatorFanctions;

    this._watchContol();
  }

  /**
   * @returns {boolean}
   */
  get valid() {
    return this._valid;
  }

  onsubmit() {
    if (!this._control) {
      return;
    }

    this._checkValid(this._control.val());
  }

  /**
   * 
   * @param {String} value 
   */
  _checkValid(value) {
    let error = null;
    this._validatorFanctions.some((validatorFanction) => {
      let validationStatus = validatorFanction(value);

      if(validationStatus === true) {
        return false;
      }

      error = validationStatus;
      return true;
    });

    if (!error && !this._valid) {
      this._valid = true;

      if(this._control) {
        $(this._control).removeClass('error');
      }
      
      if(this._errorField) {
        $(this._errorField).removeClass('error');
        $(this._errorField).html('');
      }

      return;
    }

    if(error && this._valid) {
      this._valid = false;

      if(this._control) {
        $(this._control).addClass('error');
      }
      
      if(this._errorField) {
        $(this._errorField).addClass('error');
        $(this._errorField).html(error.text);
      }
    }
  }

  _watchContol() {
    this._control.on('input', (event) => {
      this._checkValid(event.target.value);
    })
  }
}