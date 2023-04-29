const passField = document.querySelector('input'),
  showBtn = document.querySelector('i');

showBtn.addEventListener('click', () => {
  if (passField.type === 'password') {
    passField.type = 'text';
    showBtn.classList.add('hide');
  } else {
    passField.type = 'password';
    showBtn.classList.remove('hide');
  }
});