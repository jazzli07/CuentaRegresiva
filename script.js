const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
// Declaramos una contaste de los elementos maquetados en nuestro index

const currentYear = new Date().getFullYear(); // Obtenemos el año en curso
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`); // Obtenemos el 1 de enero del siguiente año
// Utilizamos la funcion Date() para dar formato de fecha y hora

// Seteamos el nuevo año en year
year.innerText = currentYear + 1;

// Creamos una funcion para actualizar el contador
function updateCountdown() {
  const currentTime = new Date(); // Obtenemos la fecha actual
  const diff = newYearTime - currentTime; // Declamos la diferencia entre lo que falta para el año nuevo y la fecha en curso

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  // Calculamos y declaramos los dias, horas, minutos y segundos restantes descomponiendo diff

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
  // Seteamos los dias, horas, minutos y segundos, y formatemos de forma correcta 2 digitos poniendo 0 si son menor a 10
}

// Mostramos el spinner de carga previo a la cuenta regresiva
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Ejecutamos la funcion updateCountdown a cada segundo
setInterval(updateCountdown, 1000);
