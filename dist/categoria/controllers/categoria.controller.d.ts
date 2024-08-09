import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";
export declare class CategoriaController {
    private readonly categoriaService;
    categoriaRepository: any;
    constructor(categoriaService: CategoriaService);
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    findByTipo(tipo: string): Promise<Categoria[]>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
