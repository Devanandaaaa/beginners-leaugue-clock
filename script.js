function pad(n){return n<10?('0'+n):n}

function updateClock(){
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if(h===0) h = 12;
  const timeStr = `${pad(h)}:${pad(m)}:${pad(s)} ${ampm}`;
  document.getElementById('clock').textContent = timeStr;

  
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  document.getElementById('date').textContent = dateStr;
}


updateClock();
setInterval(updateClock, 1000);
