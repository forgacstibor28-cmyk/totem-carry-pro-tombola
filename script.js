const button = document.getElementById('participateBtn');
const toast = document.getElementById('toast');
button.addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
});
