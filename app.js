const btn = document.getElementById('btn');

const generatosQr = (bloque,link) => new QRCode(bloque, link);



function generar(span,url){
    span.textContent = "";
    generatosQr(span,url);

    document.getElementById('descargarPDF').classList.remove('inactive');

}


btn.addEventListener('click', (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const span = document.getElementById('qr');

    url === ""?span.textContent = 'ingresa una url para el codigo QR':generar(span,url);

})


document.getElementById('descargarPDF').addEventListener('click', function() {

    const contenido = document.getElementById('contenido'); // Obtener el contenido a convertir

    html2pdf()
      .from(contenido)
      .save(`QR_${new Date()}.pdf`); // Nombre del archivo PDF a descargar
  });
