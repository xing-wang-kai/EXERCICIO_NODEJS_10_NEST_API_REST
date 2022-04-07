/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Livros } from "src/models/Livros.models";

@Injectable()
export class LivrosServices{
    livro: Livros[] = [
        new Livros('livro01', 'Aulas de TDD com javascript', 29.90),
        new Livros('livro02', 'Orientação a OBJS Javascript', 59.90),
        new Livros('livro03', 'Map ForEach Reduce and Filter javascript', 29.90),
    ]

    bucarLivros(): Livros[]{
        return this.livro;
    }
    buscarUm(id: number): Livros{
        return this.livro[id-1];
    }
    criar(valores): Livros[]{
        const newlivro = new Livros(valores.codigo, valores.nome, valores.preco);
        this.livro.push(newlivro);
        return this.livro;
    }
    atualizar(id, valores): Livros[]{
        this.livro[id-1].codigo = valores.codigo;
        this.livro[id-1].nome = valores.nome;
        this.livro[id-1].preco = valores.preco;
        return this.livro;
    }
    deletar(id): Livros[]{
        this.livro.splice(id-1, 1);
        return this.livro
    }
}