function verificar() {
  var cadena = $('#caja').val();
  try {
    PARSER.parse(cadena);
    $("#texto2").text(PARSER.parse(cadena));
    $("#ok").attr("class","btn btn-success");
  } catch (e) {
    try {
      PARSERR.parse(cadena);
      $("#texto2").text(PARSERR.parse(cadena));
      $("#ok").attr("class","btn btn-success");
    } catch (e) {
      $("#texto2").text("Esta sentencia no es reconocida");
      $("#ok").attr("class","btn btn-danger");
    }
  }
}
