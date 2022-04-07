<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# :cat: NODEJS - with NEST  :cat:

------------------------------------------------

- [x] :coffee: `npm install -g @nestjs/cli`

This command installs nest js to use in the API.;

- [x] :coffee: `nest - v`

## :cat: Crate new project :cat:

- [x] :coffee: `nest new <project name>`

This command Create a new nest project for use in the API;

<div align="center"><br>
    <img align="center" src='./img/nestcreate.png'>
    <img src = './img/installingNest.png'>
</div>

-------------------------------------------------------

## :cat: CONTROLLER with NEST :cat:

-------------------------------------------------------

For declare controller using nest:

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript

import { Controller, Get } from '@nestjs/common';

@Controller('produtos')
class produtosController {
    @Get()
    static obterTodos(): string {
        return 'listar todos os Produtos';
    }
}

export default produtosController;

```
With this code I created a control using nest and the decorators with @ symbols

-----------------------------------------------------

## :cat: DECORADORES DO NEST :cat:

-----------------------------------------------------

Alguns decoradores: 

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
@Controller("url definitions") \\ recebe o valor de uma URL 
@Get( ':id' )                  \\ Pode receber o valor de um ID ver decor @Param
@Post( )                       \\ method Post
@Put( ':id ' )                 \\ POde recebe um ID
@Delete( ':id' )               \\ method delete pode receber ID

@Param() value                 \\ parametro na url value = nome da var params
@Body() value                  \\ váriavel que veem no corpo da req.
```
Após ser criado os methods para a API precisamos importar o Produtos Controller
para o arquivo gerado no nest:cat: chamado de app.module.ts no campo. @modules -> Controller.

OBS: todos os valores precisam ser importados dentro do import como 

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript

import { Body, Param, Post, Put, Get, Delete, Controller } from '@nestjs/common'

```

------------------------------------------------------------

### :cat: Código com todos os methods :cat: ;

------------------------------------------------------------

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
/* eslint-disable prettier/prettier */
import { Get, Controller, Param, Post, Body, Put, Delete } from '@nestjs/common';


@Controller('produtos')
export class ProdutosController{
    @Get()
    obterTodos(): string{
        return "lista todos os produtos."
    }
    @Get(':id')
    obterUm(@Param() params): string{
        return `Retorna o valor de um produto ${params.id}`
    }
    @Post()
    Criar(@Body() produto): string{
        return `Retornou o produto criado ${produto.valor}`
    }
    @Put(':id')
    Alterar(@Body() body, @Param() params): string{
        return `O ID ${params.id} teve o produto ${body.valor} alterado`
    }
    @Delete(':id')
    apagar(@Param() params):string{
        return `O objeto de ID ${params.id} foi apagado`
    }
}   

```
Podemos também informar o status HTTP de uma operação usando o decorador.
@HttpCode(200)

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript

@Get()
@HttpCode(200)
BuscarTodas(): Pessoas[]{
  return Pessoas;
}

```


---------------------------------------------------------

## :cat: USANDO INJECT PARA TRABALHAR COM class :cat:
 
--------------------------------------------------------

O nest:cat: possui vantagens quando queremos usar outras class
no exemplo do exercicio feito usamos o decorador @Injectable() 
e desta maneira conseguimos envocar a class dentro do projeto
sem precisar instanciar a mesma com new.

Preciso lembrar que quando uma class decorada com Injectable 
é importante adicionar em app.module o chamado para class.
Isso é realizado em.

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
  @Module({
      imports: [],
      controllers: [AppController, ProdutosController],
      providers: [AppService, ProdutosServices],
    })
    export class AppModule {}
```

Conforme o exemplo acima adicionamos a class em Provideres.

na class que usaremos com serviço faremos::

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
@Injectable()
export class ProdutosServices{
    produto: Produtos[] = [
        new Produtos('livro01', 'Aulas de TDD com javascript', 29.90),
        new Produtos('livro02', 'Orientação a OBJS Javascript', 59.90),
        new Produtos('livro03', 'Map ForEach Reduce and Filter javascript', 29.90),
    ]
//demais funções do method.(como buscar buscarUm criar deletar atualizar...)
}
```

quando chamado no projeto, dentro da class do controller decorado
pelo method do nest usamos então somente um constructor para class
lembrando de importar a mesma no projeto.
:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
@Controller('produtos')
export class ProdutosController{

    constructor( private ProdutosServices: ProdutosServices){

    }

    @Get()
    @HttpCode(200)
    obterTodos(): Produtos[]{
        return this.ProdutosServices.bucarProdutos();
    }
    @Get(':id')
    @HttpCode(200)
    obterUm(@Param() params): Produtos{
        return this.ProdutosServices.buscarUm(params.id);
    }
    @Post()
    @HttpCode(201)
    Criar(@Body() valor): Produtos[]{
        return this.ProdutosServices.criar(valor);
    }
    @Put(':id')
    @HttpCode(200)
    Alterar(@Body() body, @Param() params): Produtos[]{
        return this.ProdutosServices.atualizar(params.id, body);
    }
    @Delete(':id')
    @HttpCode(200)
    apagar(@Param() params):Produtos[]{
        return this.ProdutosServices.deletar(params.id);
    }
}   
```

Conforme o código acima usamos os methods buscarProduto, buscarUm
criar, deletar e atualizar da class do services para dentro do 
controle sem precisar instanciar, somente chamando ela dentro do 
constructor da class ````controller```

----------------------------------------------------------------

### :cat: INTEGRACAO COM O SQL :cat:

----------------------------------------------------------------

Para entregar o projeto ao sql precisamos de algumas dependencias no projeto
sendo elas..

- [x] :coffee: `npm install --save-dev @nestjs/sequelize`
- [x] :coffee: `npm install --save-dev sequelize`
- [x] :coffee: `npm install --save-dev sequelize-typescript`
- [x] :coffee: `npm install --save-dev mysql2`
- [x] :coffee: `npm install --save-dev @types/sequelize`

Após a dependências adicionadas precisamos adicionar as informações
em nosso api.modelo para construir o banco no sql.

obs: é importante já ter criado a database no sql, e também
adicionar as informações corretas para o SequelizeModule.

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hoot',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Livros])
  ],
```

Desta maneira será instanciado um novo banco de dados. conforme a documentação
do @nest/sequelize :cat: 

Assim que executado o código acima existe alguns recursos do nest com o 
sequelize que poderão ser usados como novos decoradores de tabelas
e colunas.

Neste sentido, retornando então ao livros.modelos.ts então será usado o 
código @Table do Sequelize-typescript para indiciar a tabela, 
na sequencia será usado os methods decorados @columns({}) que recebe 
os valores do sequelize para implementar os banco de dados ... os decoradores
@Columns são colocados antes dos attributes para indicar que aquela é uma 
coluna.

Ex.;

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript

import { Column, Model, Table, DataType } from "sequelize-typescript";
@Table
export class Livros extends Model<Livros>{
    @Column({
        type: DataType.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
     id: number;
     @Column({
        type: DataType.STRING(60), 
        allowNull: false,
        
    })
     codigo: string;
     @Column({
        type: DataType.STRING(60), 
        allowNull: false,
        
    })
     nome: string;
     @Column({
        type: DataType.INTEGER, 
        allowNull: false,
        
    })
     preco: number;
}
```

O :cat: nest :cat: possui outros methods com o TypeORM integrado
para executar os banco de dados.

-----------------------------------------------------------------

### :cat: ADICIONADO O MODELS :cat:

----------------------------------------------------------------

Em Serviçes precisamos adicionar outro decorador dentro do 
construtor da class LivrosServices, este Decorador de modelos irá
buscar o banco de dados Livros em models e instaciar os livros
jogando os mesmo no bnc dados.

Importante lembrar que as funcões retornam uma promesa então usamos
async na frete dos methods..

para isso criamos..

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from "src/models/Livros.models";

@Injectable()
export class LivrosServices{
    constructor(
        @InjectModel(Livros)
        private livroModel: typeof Livros
    ){}
   

    async bucarLivros(): Promise<Livros[]>{
        return this.livroModel.findAll();
    }
    async buscarUm(id: number): Promise<Livros>{
        return this.livroModel.findOne({where:{id: id}});
    }
    async criar(valores): Promise<Livros>{
       return this.livroModel.create(valores);
    }
    async atualizar(id: number, valores: Livros){
        return this.livroModel.update(valores, {where: { id: id}});
    }
    async deletar(id: number): Promise<number>{
        return this.livroModel.destroy({where: {id: id}})
    }
}
```

Conforme o modelo acima no cosntructor adicionado tambem o attribute
private LivroModels com o typeof de Livros e com ele executamos
nossos serviços para o crud com findAll findByPk findOne Create Update e delete
o type do tipscript é Promise com parametros <Livros[]> em casos de array
methods sem retorno de livros como deletar podem ficar sem a tipagem.

-----------------------------------------------------------------

### :cat: ADICIONADO AO CONTROLLER :cat: 

-----------------------------------------------------------------

Para finalizar o projeto ajustamos os valores dentro do controller.
para isso tipamos os methods como Promise<livros[]> ou Promise<Livro> e
Chamamos o devido methods do serviçes para nosso banco de dados.

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript
import { Get, Controller, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { LivrosServices } from 'src/services/Livros.service';
import { Livros } from '../models/Livros.models';


@Controller('Livros')
export class LivrosController{

    constructor( private LivrosServices: LivrosServices){
    }

    @Get()
    @HttpCode(200)
    async obterTodos(): Promise<Livros[]>{
        return this.LivrosServices.bucarLivros();
    }
    
    @Get(':id')
    @HttpCode(200)
    async  obterUm(@Param() params): Promise<Livros>{
        return this.LivrosServices.buscarUm(params.id);
    }

    @Post()
    @HttpCode(201)
    async Criar(@Body() valor){
        return this.LivrosServices.criar(valor);
    }

    @Put(':id')
    @HttpCode(200)
    async Alterar(@Body() body, @Param() params){
        return this.LivrosServices.atualizar(params.id, body);
    }

    @Delete(':id')
    @HttpCode(200)
    async apagar(@Param() params){
        return this.LivrosServices.deletar(params.id);
    }
}   
```

----------------------------------------------------------------

 :heart: :heart: :heart: FIM :heart: :heart: :heart:

----------------------------------------------------------------