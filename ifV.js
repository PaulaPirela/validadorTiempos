function verificar() {
  var cadena = $('#caja').val();
  try {
    console.log(PARSER.parse(cadena));
    $("#texto2").text("Esta sentencia if es válida");
    $("#ok").attr("class","btn btn-success");
  } catch (e) {
    $("#texto2").text("Esta sentencia if es inválida");
    $("#ok").attr("class","btn btn-danger");
  }
}
