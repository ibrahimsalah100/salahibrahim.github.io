function enregistrer(){
    var couleur = document.getElementById("color").value;
    var dimension = document.getElementById("dimension").value+"%";
    var texte = document.getElementById("texte").value;
    var transparence = 1-parseFloat(document.getElementById("transparence").value)/10;

    var calque = document.getElementById("calque");
    calque.style.backgroundColor = couleur;
    calque.style.height=dimension;
    calque.textContent=texte;
    calque.style.opacity = transparence;
}

var drapeau = false;
function AnimerH() {
  drapeau = !drapeau;
  let id = null;
  const elem = document.getElementById("calque");

  let pos = 0;
  let topleft = true;
  let topright = false;

  if(document.getElementById('start-h').value == "droite"){
    pos = contenaire2.offsetWidth - elem.offsetWidth - 4;
    topleft = false;
    topright = true;
    elem.style.left = pos + "px";
  }
  id = setInterval(frame, 1);
  function frame() 
  {
    let WIDTH = document.getElementById('contenaire2').offsetWidth;
    let HEIGHT = document.getElementById('contenaire2').offsetHeight;

    let width = elem.offsetWidth;
    let height = elem.offsetHeight;

    if(document.getElementById('start-v').value == "haut") {
      elem.style.top="0px";
  } else {
      elem.style.top= (HEIGHT - height - 4) + "px";
  }
    if (!drapeau) {
      clearInterval(id);
      elem.style.left = "0px";
    }
    if (topleft) 
    {
      pos++;
      elem.style.left = pos + "px";
      if (pos >= WIDTH - width - 4)
      {
        topright = true;
        topleft = false;
      } 
    }else if (topright) 
    {
      pos--;
      elem.style.left = pos + "px";
      if (pos == 0) 
      {
        topright = false;
        topleft = true;
      }
    }
 }
}

function AnimerV() {
  drapeau = !drapeau;
  let id = null;
  const elem = document.getElementById("calque");

  let pos = 0;
  let top= true;
  let bottom = false;

  if(document.getElementById('start-v').value == "bas"){
    pos = contenaire2.offsetHeight - elem.offsetHeight - 4;
    top= false;
    bottom = true;
    elem.style.top= pos + "px";
  }
  id = setInterval(frame, 1);
  function frame() 
  {
    let WIDTH = document.getElementById('contenaire2').offsetWidth;
    let HEIGHT = document.getElementById('contenaire2').offsetHeight;

    let width = elem.offsetWidth;
    let height = elem.offsetHeight;

    if(document.getElementById('start-h').value == "gauche") {
      elem.style.left="0px";
  } else {
      elem.style.left= (WIDTH - width - 4) + "px";
  }
    if (!drapeau) {
      clearInterval(id);
      elem.style.top = "0px";
    }
    if (top) 
    {
      pos++;
      elem.style.top = pos + "px";
      if (pos >= HEIGHT - height - 4)
      {
        bottom = true;
        top = false;
      } 
    }else if (bottom) 
    {
      pos--;
      elem.style.top = pos + "px";
      if (pos == 0) 
      {
        bottom = false;
        top = true;
      }
    }
 }
}

function AnimerD() {
  drapeau = !drapeau;
  let id = null;
  const elem = document.getElementById("calque");

  let posv = 0;
  let posh = 0;

  let left = true;
  let top= true;
  let bottom = false;
  let right = false;

  if(document.getElementById('start-v').value == "bas"){
    posv = contenaire2.offsetHeight - elem.offsetHeight - 4;
    top= false;
    bottom = true;
    elem.style.top= posv + "px";
  }

  if(document.getElementById('start-h').value == "droite"){
    posh = contenaire2.offsetWidth - elem.offsetWidth - 4;
    topleft = false;
    topright = true;
    elem.style.left = posh + "px";
  }

  
  id = setInterval(frame, 1);
  function frame() 
  {
    let WIDTH = document.getElementById('contenaire2').offsetWidth;
    let HEIGHT = document.getElementById('contenaire2').offsetHeight;

    let width = elem.offsetWidth;
    let height = elem.offsetHeight;

    if (!drapeau) {
      clearInterval(id);
      elem.style.left = "0px";
      elem.style.top = "0px";
    }

    if (top) 
    {
      posv++;
      elem.style.top = posv + "px";
      if (posv >= HEIGHT - height - 4)
      {
        bottom = true;
        top = false;
      } 
    }else if (bottom) 
    {
      posv--;
      elem.style.top = posv + "px";
      if (posv == 0) 
      {
        bottom = false;
        top = true;
      }
    }
    if (left)
    {
      posh++;
      elem.style.left = posh + "px";
      if (posh >= WIDTH - width - 4)
      {
        right = true;
        left = false;
      } 
    }
    else if (right)
    {
      posh--;
      elem.style.left = posh + "px";
      if (posh == 0) 
      {
        right = false;
        left = true;
      }
    }
 }
}

function Animer() {
  if (document.getElementById('parcours').value=='H')
    AnimerH();
  else if(document.getElementById('parcours').value=='V')
    AnimerV();
  else
    AnimerD();
}