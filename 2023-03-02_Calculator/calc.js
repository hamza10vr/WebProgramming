function add() {
  var initial_string = 0, last_char = 0;
  initial_string = form.calc_screen.value ;
  last_char = initial_string.charAt(initial_string.length-1);
  if (last_char == '+' || last_char == '-' || last_char == '/' || last_char == '*') {
    form.calc_screen.value = initial_string.substr(0, initial_string.length -1);
    form.calc_screen.value += '+';
  }else {
    form.calc_screen.value += '+'
  }
}

function sub() {
  var initial_string = 0, last_char = 0;
  initial_string = form.calc_screen.value ;
  last_char = initial_string.charAt(initial_string.length-1);
  if (last_char == '+' || last_char == '-' || last_char == '/' || last_char == '*') {
    form.calc_screen.value = initial_string.substr(0, initial_string.length -1);
    form.calc_screen.value += '-';
  }else {
    form.calc_screen.value += '-'
  }
}



function multiply() {
  var initial_string = 0, last_char = 0;
  initial_string = form.calc_screen.value ;
  last_char = initial_string.charAt(initial_string.length-1);
  if (last_char == '+' || last_char == '-' || last_char == '/' || last_char == '*') {
    form.calc_screen.value = initial_string.substr(0, initial_string.length -1);
    form.calc_screen.value += '*';
  }else {
    form.calc_screen.value += '*'
  }
}



function divide() {
  var initial_string = 0, last_char = 0;
  initial_string = form.calc_screen.value ;
  last_char = initial_string.charAt(initial_string.length-1);
  if (last_char == '+' || last_char == '-' || last_char == '/' || last_char == '*') {
    form.calc_screen.value = initial_string.substr(0, initial_string.length -1);
    form.calc_screen.value += '/';
  }else {
    form.calc_screen.value += '/'
  }
}
