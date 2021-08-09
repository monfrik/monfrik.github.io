/**
 * 
 * @param {string} value 
 * @returns {boolean}
 * @returns {Object: {status: boolean, text: string}}
 */
export function textValidation(value) {
  if (/^[a-zA-Zа-яА-Я\-\ ]+$/.test(value)) {
    return true;
  }

  return {
    status: false,
    text: 'Поле должно содержать только буквы или знак -',
  }
}

/**
 * 
 * @param {string} value 
 * @returns {boolean}
 * @returns {Object: {status: boolean, text: string}}
 */
export function companyValidation(value) {
  if (/^[\wА-Я\-\ ]+$/.test(value)) {
    return true;
  }

  return {
    status: false,
    text: 'Поле должно содержать только буквы, цифры или знак -',
  }
}

/**
 * 
 * @param {string} value 
 * @returns {boolean}
 * @returns {Object: {status: boolean, text: string}}
 */
export function emailValidation(value) {
  if (/^[\w\_\-]+@[\w\_\-]+\.[\w\_\-]+\.?[\w\_\-]*$/.test(value)) {
    return true;
  }

  return {
    status: false,
    text: 'Поле должно содержать только буквы, цифры или знак -',
  }
}

/**
 * 
 * @param {string} value 
 * @returns {boolean}
 * @returns {Object: {status: boolean, text: string}}
 */
export function telValidation(value) {
  if (/^(8|\+7)[\ ]?[\(\ \-]?\d{3}[\)\ \-]?[\ ]?\d{3}[\ \-]?\d{2}[\ \-]?\d{2}$$/.test(value)) {
    return true;
  }

  return {
    status: false,
    text: 'Не правильно введён телефон. Образец: +7 (777) 777-77-77',
  }
}