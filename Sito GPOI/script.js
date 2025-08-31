function caricaPagina(id) {
  const sezioni = document.querySelectorAll('.sezione');
  sezioni.forEach(sezione => sezione.classList.remove('attiva'));

  const attiva = document.getElementById(id);
  if (attiva) {
    attiva.classList.add('attiva');
  }
}

function caricaPagina(pagina) {
  const sezioni = document.querySelectorAll('.sezione');
  sezioni.forEach(sezione => sezione.classList.remove('attiva'));

  const sezioneAttiva = document.getElementById(pagina);
  if (sezioneAttiva) {
    sezioneAttiva.classList.add('attiva');
  }

  const banner = document.getElementById('banner');
  switch (pagina) {
    case 'home':
      banner.style.backgroundImage = "url('TPS.jpg')";
      break;
    case 'pull':
      banner.style.backgroundImage = "url('PULL.jpeg')";
      break;
    case 'muda':
      banner.style.backgroundImage = "url('MUDA.webp')";
      break;
    case 'jit':
      banner.style.backgroundImage = "url('JIT.png')";
      break;
    case 'jidoka':
      banner.style.backgroundImage = "url('JIDOKA.jpg')";
      break;
    case 'kaizen':
      banner.style.backgroundImage = "url('KAIZEN.png')";
      break;
    case 'taylorismoefordismo':
      banner.style.backgroundImage = "url('VS.png')";
      break;
      case 'aziendeascelta':
      default:
      banner.style.backgroundImage = "url('dhl-bosch.png')";
      break;
  }
}
