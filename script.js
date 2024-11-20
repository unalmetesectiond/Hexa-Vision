
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('appointment-button').addEventListener('click', () => {
      document.getElementById('appointment-form').classList.add('active');
      document.getElementById('appointment-form').classList.remove('hidden');
      document.getElementById('assistance-form').classList.add('hidden');
      document.getElementById('assistance-form').classList.remove('active');
  });

  document.getElementById('assistance-button').addEventListener('click', () => {
      document.getElementById('assistance-form').classList.add('active');
      document.getElementById('assistance-form').classList.remove('hidden');
      document.getElementById('appointment-form').classList.add('hidden');
      document.getElementById('appointment-form').classList.remove('active');
  });
});

document.querySelectorAll('.form-nav-buttons .nav-button').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelectorAll('.form-nav-buttons .nav-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

