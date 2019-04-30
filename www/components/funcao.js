$(document).on("click","#camera",function(){
    navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL, 
    saveToPhotoAlbum:true,
 });
function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = "data:image/jpeg;base64," + ImageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

function ScanBarcode(){
  window.plugins.barcodeScanner.scan(function(result){
    alert("Código de Barra\n" + 
              "Resultado:" + result.text + "\n" +
              "Formato:" + result.format + "\n" +
              "Cancelado:" + result.cancelled);
          }, function(error){
                alert("Erro:" + error);
          }
  
       );

}
$(document).on("click","#scan",function(){
      ScanBarcode();
});
