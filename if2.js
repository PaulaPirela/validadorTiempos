var ifV = "if = ('si'_* parentesis _* (condicion)* _* parentesis _*'{'_*'}'_*);";
var _ "_ = ['\t']*;";

var sentenciaU=ifV+expcondicionales+expresion+variable+nentero+aditividad+muldiv+vacio+primario+condicional+parentesis;
var sw=0;


function verificar() {
  var parser = peg.generate(sentenciaU);
  var cadena = $('#caja').val();
  try {
    parser.parse(cadena);
    $("#texto2").text("Esta sentencia if es válida");
    $("#ok").attr("class","btn btn-success");
  } catch (e) {
    $("#texto2").text("Esta sentencia if es inválida");
    $("#ok").attr("class","btn btn-danger");
  }

}
