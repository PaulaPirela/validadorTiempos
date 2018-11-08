var ifV = "if = ('si'_* parentesis _* (expcondicionales)* _* parentesis _*'{'_*'}'_*);";
var expcondicionales = "expcondicionales = (expresion)+condicional(expresion)+/(expresion)+condicional2(expresion)+/(expresion)+/parentesis expresion+ parentesis/parentesis expresion+ condicional2 expresion parentesis/condicional expresion+;";
var expresion = "expresion = aditividad;";
var variable = "variable = (([a-zA-Z_])([a-zA-Z0-9_])*);";
var nentero = "nentero = [0-9]+;";
var aditividad = "aditividad = primario _* [+-] _* aditividad/muldiv;";
var muldiv = "muldiv = primario* _* [*/] _* aditividad/primario;";
var vacio = "_ = ['\t'];";
var primario = "primario = variable/nentero;";
var condicional = "condicional = '=='/'&&';";
var condicional2 = "condicional2 = '=='/'&&';";
var parentesis = "parentesis = ('<==ll==========>')/'('/')'/('<==========ll==>')/('parentesis');";
var sentenciaU=ifV+expcondicionales+expresion+variable+nentero+aditividad+muldiv+vacio+primario+condicional+parentesis+condicional2;
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
