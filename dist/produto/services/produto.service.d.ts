import { DeleteResult, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { CategoriaService } from "../../categoria/services/categoria.service";
export declare class ProdutoService {
    private produtoRepository;
    private categoriaService;
    constructor(produtoRepository: Repository<Produto>, categoriaService: CategoriaService);
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    findByNome(nome: string): Promise<Produto[]>;
    create(produto: Produto): Promise<Produto>;
    update(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<DeleteResult>;
}
