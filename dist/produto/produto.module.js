"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produto_entity_1 = require("./entities/produto.entity");
const produto_service_1 = require("./services/produto.service");
const produto_controller_1 = require("./controllers/produto.controller");
const categoria_module_1 = require("../categoria/categoria.module");
const categoria_service_1 = require("../categoria/services/categoria.service");
let ProdutoModule = class ProdutoModule {
};
exports.ProdutoModule = ProdutoModule;
exports.ProdutoModule = ProdutoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([produto_entity_1.Produto]), categoria_module_1.CategoriaModule],
        providers: [produto_service_1.ProdutoService, categoria_service_1.CategoriaService],
        controllers: [produto_controller_1.ProdutoController],
        exports: [typeorm_1.TypeOrmModule]
    })
], ProdutoModule);
//# sourceMappingURL=produto.module.js.map