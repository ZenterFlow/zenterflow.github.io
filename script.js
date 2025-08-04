
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('copy-btn')) {
    const targetId = e.target.getAttribute('data-target');
    const code = document.getElementById(targetId).innerText;
    navigator.clipboard.writeText(code).then(() => {
      e.target.textContent = 'Copied!';
      setTimeout(() => e.target.textContent = 'Copy', 1500);
    });
  }
});

