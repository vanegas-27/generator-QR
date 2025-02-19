const btn = document.getElementById('btn');

const generatosQr = (bloque,link) => new QRCode(bloque, link);



function generar(span,url){
    span.textContent = "";
    generatosQr(span,url);

    document.getElementById('descargarqr').classList.remove('inactive');

}


btn.addEventListener('click', (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const span = document.getElementById('qr');

    url === ""?span.textContent = 'ingresa una url para el codigo QR':generar(span,url);

})


  document.getElementById('descargarqr').addEventListener('click', function() {
    const contenido = document.getElementById('contenido'); // Obtener el contenido a convertir

    html2canvas(contenido).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `QR_${new Date().toISOString()}.png`;
        link.click();
    });


});