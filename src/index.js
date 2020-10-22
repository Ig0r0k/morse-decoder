const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function foo(str) {
  let res = [];
  let result = '';
  if (str[0] === '*') {
    return ' ';
  } else {
    for (let i = 0; i < str.length; i += 2) {
      if (str[i] === '1') {
        if (str[i + 1] === '0') {
          res.push('.');
        } else {
          res.push('-');
        }
      }
    }
  }
  result = res.join('');
  result = MORSE_TABLE[result];
  return result;
}

function decode(expr) {
  let morsemessage = [];
  let result = '';
  let res = [];
  for (let i = 0; i < expr.length; i += 10) {
    morsemessage.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < morsemessage.length; i++) {
    res.push(foo(morsemessage[i]));
  }
  result = res.join('');
  return result;
}

module.exports = {
  decode
}