let inputLot = document.querySelector('#lotin')
let inputKir = document.querySelector('#kiril')
let toKiril = document.querySelector('#lot_to_kir')
let toLot = document.querySelector('#kir_to_lot')
let clear = document.querySelector('#clear')

let letter = {
  A: 'А',
  a: 'а',
  B: 'Б',
  b: 'б',
  V: 'В',
  v: 'в',
  G: 'Г',
  g: 'г',
  D: 'Д',
  d: 'д',
  E: 'Е',
  e: "е",
  Yo: 'Ё',
  yo: 'ё',
  J: 'Ж',
  j: 'ж',
  Z: 'З',
  z: 'з',
  I: 'И',
  i: 'и',
  Y: 'Й',
  y: 'й',
  K: 'К',
  k: 'к',
  L: 'Л',
  l: 'л',
  M: 'М',
  m: 'м',
  N: 'Н',
  n: 'н',
  O: 'О',
  o: 'о',
  P: 'П',
  p: 'п',
  R: 'Р',
  r: 'р',
  S: 'С',
  s: 'с',
  T: 'Т',
  t: 'т',
  U: 'У',
  u: 'у',
  F: 'Ф',
  f: 'ф',
  X: 'Х',
  x: 'х',
  Ts: 'Ц',
  ts: 'ц',
  Ch: 'Ч',
  ch: 'ч',
  Sh: 'Ш',
  sh: 'ш',
  Yu: 'Ю',
  yu: 'ю',
  Ya: 'Я',
  ya: 'я',
  Q: 'Қ',
  q: 'қ',
  H: 'Ҳ',
  h: 'ҳ',
  ' ': ' ',
  w: 'в',
  W: 'В',
  "g'": 'ғ',
  "G'": "Ғ",
  "O'": 'ў',
  "o'": 'ў',
  Ts: 'Ц',
  ts: 'ц'

}

let letter2 = {
  'а': 'a',
  'А': 'A',
  'б': 'b',
  'Б': 'B',
  'в': 'v',
  'В': 'V',
  'г': 'g',
  'Г': 'G',
  'д': 'd',
  'Д': 'D',
  'е': 'e',
  'Е': 'E',
  'ё': 'yo',
  'Ё': 'Yo',
  'ж': 'j',
  'Ж': 'J',
  'з': 'z',
  'З': 'Z',
  'и': 'i',
  'И': 'I',
  'й': 'y',
  'Й': 'Y',
  'к': 'k',
  'К': 'K',
  'л': 'l',
  'Л': 'L',
  'м': 'm',
  'М': 'M',
  'н': 'n',
  'Н': 'N',
  'о': 'o',
  'О': 'O',
  'п': 'p',
  'П': 'P',
  'р': 'r',
  'Р': 'R',
  'с': 's',
  'С': 'S',
  'т': 't',
  'Т': 'T',
  'у': 'u',
  'У': 'U',
  'ф': 'f',
  'Ф': 'F',
  'х': 'x',
  'Х': 'X',
  'ц': 's',
  'Ц': 'S',
  'ч': 'ch',
  'Ч': 'Ch',
  'ш': 'sh',
  'Ш': 'Sh',
  'ъ': 'ʼ',
  'Ъ': 'ʼ',
  'ь': '',
  'Ь': '',
  'э': 'e',
  'Э': 'E',
  'ю': 'yu',
  'Ю': 'Yu',
  'я': 'ya',
  'Я': 'Ya',
  'ў': 'oʻ',
  'Ў': 'Oʻ',
  'қ': 'q',
  'Қ': 'Q',
  'ғ': 'gʻ',
  'Ғ': 'Gʻ',
  'ҳ': 'h',
  'Ҳ': 'H',
  ' ': ' '
}

function convert() {
  let str = ''
  let nmadr = inputLot.value
  for (let i = 0; i < nmadr.length; i++) {
    let harp = nmadr[i] + nmadr[i+1]
    if(letter[harp]) {
      str += letter[harp]
      i++
    } else {
      str += letter[nmadr[i]]
    }
  }
  inputKir.value = str
  inputLot.value = ''
}

toKiril.onclick = convert

function convert2() {
  let str = ''
  for (let key of inputKir.value) {
    str += letter2[key]
  }
  console.log(str)
  inputLot.value = str
  inputKir.value = ''
}

toLot.onclick = convert2

function clearText() {
  inputKir.value = ''
  inputLot.value = ''
}

clear.onclick = clearText