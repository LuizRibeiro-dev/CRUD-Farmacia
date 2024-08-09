import { Produto } from "../../produto/entities/produto.entity";
export declare class Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    produto: Produto[];
}
