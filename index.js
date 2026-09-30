function calcular(event){
event.preventDefault(); 

var origem = document.querySelector('input[name="moedaorigem"]:checked');
var destino = document.querySelector('input[name="moedadestino"]:checked');
var taxa; 
var dinheiro = parseFloat(document.getElementById('dinheiro').value);

var moedaorigem = origem.value;
var moedadestino = destino.value;

if(moedaorigem === 'BRL' && moedadestino === 'USDT'){
taxa = dinheiro /5.10;
}

else if(moedaorigem === 'BRL' && moedadestino === 'EUR'){
taxa = dinheiro /5.94;
}

else if(moedaorigem === 'USDT' && moedadestino === 'BRL'){
taxa = dinheiro *5.10;
}

else if(moedaorigem === 'USDT' && moedadestino === 'EUR'){
taxa = dinheiro /0.86;
}

else if(moedaorigem === 'EUR' && moedadestino === 'BRL'){
taxa = dinheiro *5.94;
}

else if(moedaorigem === 'EUR' && moedadestino === 'USDT'){
taxa = dinheiro *1.16;
}

else{ taxa = dinheiro;}

 document.getElementById('conversao').innerHTML =
         dinheiro.toFixed(2) +  moedaorigem + ' ' + '  equivale a  ' + taxa.toFixed(2) + moedadestino + '<br/> Baseado na cotaçao do dia 09/09/2026';
        }























