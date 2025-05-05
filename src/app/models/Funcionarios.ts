export interface Funcionario {
    id? : number;
    nome: string;
    sobrenome: string;
    departamentoEnum: string;
    ativo: boolean;
    turnoEnum: string;
    dataDeCriacao?: string;
    dataDeAlteracao?: string;
}