
/* function clickOMatic() {
    alert('helloooooooooouuuuu')
}

window.onload = function() {
const click = document.getElementById('click');

click.addEventListener("click", (event) => {
    clickOMatic();
    });
};*/ 
 /* in index:<button id="click" ">click here</button>*/

window.onload = function () {
  const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDark ? 'light☀️' : 'dark🌙';
    toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });
};


