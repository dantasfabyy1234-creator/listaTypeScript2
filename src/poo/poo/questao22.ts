// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas

// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. 
// 
// O sistema interativo deve perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

export function questpoo22():void{              

class Veiculo {
    private _placa: string
    private _kmAtual: number
    

    constructor(placa:string, kmAtual:number){
        this._placa = placa
        this._kmAtual = kmAtual
    }
    public get placa(): string {
        return this._placa
    }
    public set placa(value: string) {
        this._placa = value
    }
    public get kmAtual(): number {
        return this._kmAtual
    }
    public set kmAtual(value: number) {
        this._kmAtual = value
    }
}
class Onibus extends Veiculo {
        public precisaRevisao(): boolean {
            return this.kmAtual >= 10000
    }
}
class Ambulancia extends Veiculo {
        public precisaRevisao(): boolean {
            return this.kmAtual >= 5000
        }
}

let ListaFrota:Veiculo[] = []
let placa:string, kmAtual:number

let onibus:Onibus 
let ambulancia:Ambulancia

let opcao = 0 

while(opcao != 3){
    opcao = Number(prompt(`Informe o tipo de veículo: 
        1 - Cadastrar onibus
        2 - Cadastrar ambulância
        3 - Sair`))

    if(opcao == 1){
        placa = String(prompt("Informe a placa do seu veículo: "))
        kmAtual = Number(prompt("Informe a quilometragem atual do seu veículo: "))

        onibus = new Onibus(placa, kmAtual) 
        ListaFrota.push(onibus)
}
    else if(opcao == 2){
        placa = String(prompt("Informe a placa do seu veículo: "))
        kmAtual = Number(prompt("Informe a quilometragem atual do seu veículo: "))

        ambulancia = new Ambulancia(placa, kmAtual) 
        ListaFrota.push(ambulancia)
    }
}
}