/* count how many days have passed since day x to the current day, using a function that takes today's day, and prints it on the screen, complementing the result with "days" */

function dataChange()
{
    var doc_data = document.getElementById("dataAtualId");
    var doc_data = doc_data.value;
    var datas_input = [];
    datas_input = doc_data.split("-")
    return datas_input;
}

function calcularData(){
    
    removeTexts();
    var YYYYMMDD = dataChange();

    if (YYYYMMDD.length == 1){
        typeResult('Insira uma data!');
        return;
    };

    addText("Data digitada: " + YYYYMMDD[2] + "/" + YYYYMMDD[1] + "/" + YYYYMMDD[0]);
    var inputDay = parseInt(YYYYMMDD[2]);
    var inputMounth = parseInt(YYYYMMDD[1]) - 1; 
    var inputYear = parseInt(YYYYMMDD[0]);
    var listMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nameMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var currentDay = new Date().getDate();
    var currentMounth = new Date().getMonth();
    var CurrentYear = new Date().getFullYear();

    var countDays = 0;
    var countDaysLastYear = 0;

    addText("Data digita (por extenso): "+inputDay + ' de ' + nameMonths[inputMounth] + ' de ' + inputYear + "\n");
    addText("Data de Hoje (por extenso): "+currentDay + ' de ' + nameMonths[currentMounth] + ' de ' + CurrentYear + "\n");

    if((currentMounth - inputMounth + 1) > 1){

    for (var i = inputMounth; i < currentMounth; i++){

            countDays += listMonths[i]; 

        }

        var result = currentDay + countDays;

    }else{

        var result = currentDay;

    };

    var daysUntil = 0;
    var entireYear = 0;
    var CountMounths = 0;
    var leapYear = 0;
    var old = 0;

    if(CurrentYear > inputYear){

        for (var i = inputYear; i < CurrentYear; i++) {
            if (i%4 == 0) {
                if (i%100==0){
                    if (i%400==0){
                        leapYear++;
                    }
                }else {
                    leapYear++;
                }
            }
        };

        old = CurrentYear - inputYear;

        if (currentMounth <= inputMounth){
            if (currentDay <= inputDay){
                old -= 1;
            }
        };

        console.log("a " + currentMounth);

        if (CurrentYear - inputYear > 1) {
            entireYear = ((CurrentYear - inputYear) - 1) * 365;
            CountMounths += ((CurrentYear - inputYear) - 1) * 12;
        }
        
        for (var i = inputMounth; i < listMonths.length; i++) {
            countDaysLastYear += parseInt(listMonths[i]); 
        };

        for (var i = 0; i < currentMounth; i++) {
            daysUntil += parseInt(listMonths[i]); 
        };

        countDaysLastYear -= inputDay;
        
        countDaysLastYear += daysUntil + currentDay;

        countDaysLastYear += entireYear;

        addText('se passaram +- ' + ((12 - inputMounth) + currentMounth + CountMounths) + ' mes/meses\n');
        
        addText('são ' + (countDaysLastYear + leapYear) + ' dias\n');

        addText('São ' + old + ' anos \n');

    }else {

        if (inputYear%4 == 0) {
            if (inputYear%100==0){
                if (inputYear%400==0){
                    leapYear++;
                }
            }else {
                leapYear++;
            }
        };

        addText('se passaram +- ' + (currentMounth - inputMounth) + ' mes/meses\n');
        
        addText('são ' + (result + leapYear) + ' dias\n');  

    }

}//fechar a função calcular

function addText(text) {
    // Crie um novo elemento <span>
    var novoSpan = document.createElement("span");

    // Defina o texto do novo <span>
    novoSpan.textContent = text;

    // Adicione o novo <span> ao elemento com id "container" no HTML
    document.getElementById("resultado").appendChild(novoSpan);
}

function removeTexts() {
    var container = document.getElementById("resultado");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

function typeResult(text) {
    const textoArray = text.split('');
    document.querySelector('#resultado').innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function()
        {
            document.querySelector('#resultado').innerHTML += letra;

        }, 50 * (i))
    }
    );
}