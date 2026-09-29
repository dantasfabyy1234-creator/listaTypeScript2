// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7).

//  O programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function questpoo36():void{

class Curso {
    private _titulo: string
    private _cargaHoraria: number

    constructor(titulo: string, cargaHoraria: number) {
        this._titulo = titulo
        this._cargaHoraria = cargaHoraria
    }

    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }
    public get cargaHoraria(): number {
        return this._cargaHoraria
    }
    public set cargaHoraria(value: number) {
        this._cargaHoraria = value
    }
    emitirCertificado(): void {
    }
}
class CursoLivre extends Curso {
    private _horasConcluidas: number

    constructor(titulo: string, cargaHoraria: number, horasConcluidas: number) {
        super(titulo, cargaHoraria)
        this._horasConcluidas = horasConcluidas
    }

    public get horasConcluidas(): number {
        return this._horasConcluidas
    }
    public set horasConcluidas(value: number) {
        this._horasConcluidas = value
    }

    emitirCertificado(): void {

        if (this.horasConcluidas >= this.cargaHoraria) {
            alert(`Certificado liberado!
            -------
            Curso: ${this.titulo}
            Carga horária: ${this.cargaHoraria} horas`)
        }
        else {
            alert(`Certificado pendente!
            -------
            Curso: ${this.titulo}
            Horas concluídas: ${this.horasConcluidas}
            Carga horária necessária: ${this.cargaHoraria}`)
        }
    }
}
class CursoTecnico extends Curso {
    private _notaProjeto: number

    constructor(titulo: string, cargaHoraria: number, notaProjeto: number) {
        super(titulo, cargaHoraria)
        this._notaProjeto = notaProjeto
    }

    public get notaProjeto(): number {
        return this._notaProjeto
    }
    public set notaProjeto(value: number) {
        this._notaProjeto = value
    }

    emitirCertificado(): void {

        if (this.notaProjeto >= 7) {

            alert(`Certificado liberado!
            -------
            Curso: ${this.titulo}
            Carga horária: ${this.cargaHoraria} horas
            Nota do projeto: ${this.notaProjeto}`)
        }
        else {

            alert(`Certificado pendente!
            -------
            Curso: ${this.titulo}
            Nota do projeto: ${this.notaProjeto}
            É necessário ter nota maior ou igual a 7.`)
        }
    }
}

let listaCursos: Curso[] = []

let titulo:string, cargaHoraria:number, horasConcluidas:number, notaProjeto:number
let cursoLivre:CursoLivre
let cursoTecnico:CursoTecnico
let opcao = 0

while (opcao != 3) {

    opcao = Number(prompt(`Informe o tipo de curso:

    1 - Curso Livre
    2 - Curso Técnico
    3 - Sair`))

    if (opcao == 1) {

        titulo = String(prompt("Informe o título do curso: "))
        cargaHoraria = Number(prompt("Informe a carga horária: "))
        horasConcluidas = Number(prompt("Informe quantas horas foram concluídas: "))

        cursoLivre = new CursoLivre(titulo, cargaHoraria, horasConcluidas)
        listaCursos.push(cursoLivre)
    }
    else if(opcao == 2){
        
        titulo = String(prompt("Informe o título do curso: "))
        cargaHoraria = Number(prompt("Informe a carga horária: "))
        notaProjeto = Number(prompt("Informe a nota do projeto obtida: "))

        cursoTecnico = new CursoTecnico(titulo, cargaHoraria, notaProjeto)
        listaCursos.push(cursoTecnico)

    }
}
for (let i = 0; i < listaCursos.length; i++) {

    listaCursos[i].emitirCertificado()
}
}