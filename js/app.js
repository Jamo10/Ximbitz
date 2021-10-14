document.getElementById('productos').style.display = 'none';
document.getElementById('contacto').style.display = 'none';


Mostrar = (value) => {
    document.getElementById('nosotros').style.display = 'none';
    document.getElementById('productos').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';

    document.getElementById(value).style.display = 'block';
  } 