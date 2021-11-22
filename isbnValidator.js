/*
 * Function: IsbnValidator(isbn)
 *    Returns true/false
 *
 * "978-0-7167-0344-0" -> true
*/

function IsbnValidator (isbn) {
  if (isbn === "") return "Empty values not allowed";

  let sum = 0, pos = 0;
  isbn = isbn.replace(/\D/g, '');

  if (isbn.length === 10) {
    for (let i = 10; i > 0; i--) {
      sum = parseInt(isbn[pos]) * i + sum;
      pos++;
    }

    sum %= 11;
  }
  else if (isbn.length === 13) {
    for (let i = 13; i > 0; i--) {
      if (i % 2 === 0) sum = parseInt(isbn[pos]) * 3 + sum;
      else sum += parseInt(isbn[pos]);
      pos++;
    }

    sum %= 10;
  }
  else return false;


  return sum === 0 ? true : false;
}

module.exports = IsbnValidator;
