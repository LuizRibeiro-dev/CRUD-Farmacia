"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const usuario_service_1 = require("./../../usuario/services/usuario.service");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("../bcrypt/bcrypt");
let AuthService = class AuthService {
    constructor(usuarioService, jwtService, bcrypt) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
        this.bcrypt = bcrypt;
    }
    async validateUser(username, password) {
        const buscaUsuario = await this.usuarioService.findByUsuario(username);
        if (!buscaUsuario)
            throw new common_1.HttpException('Usuário não encontrado!', common_1.HttpStatus.NOT_FOUND);
        const matchPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha);
        if (buscaUsuario && matchPassword) {
            const { senha, ...resposta } = buscaUsuario;
            return resposta;
        }
        return null;
    }
    async login(usuarioLogin) {
        const payload = { sub: usuarioLogin.usuario };
        const buscaUsuario = await this.usuarioService.findByUsuario(usuarioLogin.usuario);
        return {
            id: buscaUsuario.id,
            nome: buscaUsuario.nome,
            usuario: usuarioLogin.usuario,
            senha: '',
            foto: buscaUsuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService,
        bcrypt_1.Bcrypt])
], AuthService);
//# sourceMappingURL=auth.service.js.map