function loadContent(page) {
    const content = document.querySelector('#content');
    fetch(page)
      .then(response => response.text())
      .then(data => content.innerHTML = data)
      .catch(error => console.log(error));
  }
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    const link = document.querySelector('#toggle-dark-mode');
    if (body.classList.contains('dark-mode')) {
      link.textContent = 'Modo claro';
    } else {
      link.textContent = 'Modo oscuro';
    }
  }
  