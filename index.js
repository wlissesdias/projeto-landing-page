var setaDireita =window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda =window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    leonardo.style ="display:flax"
    Bruna.style ="display:none"
    setaDireita.style ="display:flax; margin-top:55px"
    setaEsquerda.style ="display:none"
}