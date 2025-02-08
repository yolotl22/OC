const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Cambié el selector de clase 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();  // Se necesita convertir a dato JSON
    console.log(data);
    
    $n.textContent = `${data.name}`;  // Cambié los template literals
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;  // Usé `$n` en lugar de `n`
}

displayUser('stolinski').catch(handleError);
 