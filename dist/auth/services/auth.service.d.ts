import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from './../../usuario/services/usuario.service';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private bcrypt;
    constructor(usuarioService: UsuarioService, jwtService: JwtService, bcrypt: Bcrypt);
    validateUser(username: string, password: string): Promise<any>;
    login(usuarioLogin: UsuarioLogin): Promise<{
        id: number;
        nome: string;
        usuario: string;
        senha: string;
        foto: string;
        token: string;
    }>;
}
