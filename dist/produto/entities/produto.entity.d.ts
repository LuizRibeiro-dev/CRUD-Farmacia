import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
export declare class Produto {
    id: number;
    nome: string;
    laboratorio: string;
    foto: string;
    preco: number;
    categoria: Categoria;
    usuario: Usuario;
}
