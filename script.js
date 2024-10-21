var saldoInicial = Number(prompt("Qual seu saldo inicial de peças?"));


function mostrarSaldo(){
    var tela = document.getElementById('tela');
    tela.innerHTML = "Seu saldo é: " + saldoInicial;
}

function exibir(tipo){        // Textos que serão exibidos
    switch (tipo){
    case 'saldo':
        alert("Você tem " + saldoInicial + " Peças");
        break;
    case 'comprou':
        alert("Compra feita com sucesso, agora você tem " + saldoInicial + " peças.");
        break;    

    case 'vendeu':
        alert("Venda feita com sucesso, agora você tem " + saldoInicial + " peças.");
        break;

    case 'nVendeu':
        alert("Saldo insuficiente, você tem " + saldoInicial + " peças.");
        break;

    case 'saindo':
        alert("Ação desfeita! voltando...");
        break;  

    default:
        alert("Erro! tente novamente mais tarde.");
        break;
    }
}

function comprar() {
    exibir('saldo');   // Exibe quantia do saldo

    var compra = Number(prompt("Quanto deseja comprar?"));   // Obtendo quantia de compra
    let confirma = confirm("Deseja prosseguir?");   // Confirmando compra

    if(confirma == true) {   // Se confirmado, somar e exibir resultado
    saldoInicial = saldoInicial + compra;
    exibir('comprou');
    } else {   // Caso contrário, exibe mensagem de saída
        exibir('saindo');
    }
    mostrarSaldo(); // Imprime o saldo na tela 
    }

function vender() {
    exibir('saldo');   // Exibe quantia do saldo 
    var venda = Number(prompt("Quanto deseja vender?")); // Obtendo quantia de venda
    let confirma = confirm("Deseja prosseguir?");  // Confirmando venda
    
    if(confirma == true) { // Se confirmado, seguir
        if(venda <= saldoInicial){  // Se valor de venda for menor que saldo, subtrair e exibir resultado
            saldoInicial = saldoInicial - venda;
            exibir('vendeu');
            mostrarSaldo(); // Imprime o saldo na tela 
            } else {  // Caso contrário, exibir mensagem de saldo insuficiente
                exibir('nVendeu');
                mostrarSaldo(); // Imprime o saldo na tela 
            }
        } else {
            exibir('saindo') // Caso não confirmado, exibe mensagem de saída
            mostrarSaldo(); // Imprime o saldo na tela 
        }
      

    
    }

