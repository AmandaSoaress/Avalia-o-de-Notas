
//var notaA = { se a nota for de 90 para cima}
//var notaB = {nota entre 80 á 89 pontos}
//var notaC = {nota entre 70 á 79 pontos}
//var notaD = {nota entre 60 á 69 pontos}
//var notaF = {nota menor que 60}

// Receber dados do campo input
// pegar o valor do input



function funcaoDoClick() {
    var quantidade = parseInt(document.getElementById('meuInput').value);
    //console.log("Value: "+quantidade);
    // alert('O valor digitado foi ' + quantidade);
    nota = 'meuInput'.value//valor recuperado do sistema
    if (meuInput.value >= 90) {
        //System.out.println("Alerta:Sua nota foi A");
        console.log("Sua nota é A.");
        alert('Sua nota é A, Parabéns');
        return
    }
    //faça a coisa certa
    if (meuInput.value >= 80 && meuInput.value <= 89) {
        console.log("Sua nota é B.");
        alert('Sua nota é B');
        return
    }
    if (meuInput.value >= 70 && meuInput.value <= 79) {
        console.log("Sua nota é C.");
        alert('Sua nota é C');
        return
    }
    if (meuInput.value >= 60 && meuInput.value <= 69) {
        console.log("Sua nota é D.");
        alert('Sua nota é D');
        return
    }
    if (meuInput.value < 60) {
        console.log("Sua nota é F.");
        alert('Sua nota é F');
    }
}

