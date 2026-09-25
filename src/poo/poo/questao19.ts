// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade "°C" e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm.
// O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function questpoo19():void{

abstract class Sensor{
    id:number
    constructor(id:number){
        this.id = id
    }
    abstract exibirRelatorio():void
}
class Temperatura extends Sensor {
    medidaTemp:number
    constructor(id:number, medidaTemp:number){
        super(id)
        this.medidaTemp = medidaTemp
    }

    public alertaTemperatura(){
        if(this.medidaTemp >= 40){
            alert("Alerta! Temperatura em: " + this.medidaTemp +" ºC" )
        }
    }
    exibirRelatorio(): void {
        alert(`Sensor de temperatura
            -----
            Id: ${id}
            Medida da temperatura: ${medidatemp}`)
    }
   
}
class Pressao extends Sensor{
    medidaATM:number

    constructor(id:number,medidaATM:number){
        super(id)
        this.medidaATM = medidaATM
    }

    public alertaPressao(){
        if (this.medidaATM > 5 ){
            alert("Alerta! Pressão em: " + this.medidaATM +" atm" )
        }
    }
    exibirRelatorio(): void {
        alert(`Sensor de Pressão
            -----
            Id: ${id}
            Medida da pessão: ${medidaAtm}`)
    }

}

let listaTemp:Temperatura[] = []
let id:number, medidatemp:number

let temperatura:Temperatura

let listaAtm:Pressao[] = []
let medidaAtm:number

let pressao:Pressao

let opcao = 0

while(opcao != 3){
    opcao= Number(prompt(`MENU:
    1 - cadastrar temperatura
    2 - cadastrar Pressão
    3 - sair`)
)

    if(opcao == 1){
        id = Number(prompt("Digite o id: "))
        medidatemp = Number(prompt("Informe a medida da temperatura: "))

        temperatura = new Temperatura(id, medidatemp)
        listaTemp.push(temperatura)
    }
    if(opcao == 2){
        id = Number(prompt("Digite o id: "))
        medidaAtm = Number(prompt("Informe a medida da temperatura: "))

        pressao = new Pressao(id, medidaAtm)
        listaAtm.push(pressao)
    }
}

document.writeln("===SENSORES EM ALERTA!===")

listaTemp.filter(temperatura => temperatura.alertaTemperatura())
listaTemp.forEach(temperatura => temperatura.exibirRelatorio())

listaAtm.filter(pressao => pressao.alertaPressao())
listaAtm.forEach(pressao => pressao.exibirRelatorio())
}