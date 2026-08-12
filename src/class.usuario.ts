import { db } from "./connnection"

class Usuario {
    constructor(
        private id: number,
        private usuario: string,
        private senha: string,
        private grupos: string
    ) { }

    salvar() {
        const q = db.query(`
            INSERT INTO usuarios(usuario, senha, grupos)
                VALUES($usuario, $senha, $grupos)
        `)

        const response = q.run({
            $usuario: this.usuario,
            $senha: this.senha,
            $grupos: this.grupos
        })
    }
}

const u1 = new Usuario(0, "carlinhos", "qwerty", "fa de cavalos")
u1.salvar()
