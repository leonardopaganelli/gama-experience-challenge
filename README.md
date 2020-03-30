# Desafio Gama Experience - edição #31 e #32

O desafio consiste em consumir uma api com dados dos jogadores do Fifa 19, mostrar os dados e implementar um gráfico qualquer.

**Utilizando as seguintes bibliotecas**:
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Para estilização e uso dos componentes
* [Chart JS](https://www.chartjs.org/) - Para construção do gráfico

## Dados utilizados

Os dados foram obtidos através do [dataset do fifa 19](https://www.kaggle.com/karangadiya/fifa19) e expostos na API https://fifagama.herokuapp.com/fifa19/${SKIP}/{LIMIT}

**parametros**:
* SKIP: quantidade de dados para serem pulados
* LIMIT: total de dados para serem retornados

### Exemplo de consumo

```bash
$ curl --request GET \
    --url https://fifagama.herokuapp.com/fifa19/0/10
```

### O retorno

Sempre será retorado um array de objetos com a quantidade de jogadores requisitada onde dentro possui as chaves `_id` e `data`. Todos os dados do jogador estão dentro da chave data.

```json
   {
     "_id": "5e3e4ba63912273b086fd59e",
     "data": {
       "Name": "L. Messi",
       "Age": 31,
       "Photo": "https://cdn.sofifa.org/players/4/19/158023.png",
       "Nationality": "Argentina",
       "..."
     }
   }
 ```

## Resultado final

O exemplo pode ser acessado [aqui](https://leonardopaganelli.github.io/gama-experience-challenge/) ou clonando o projeto e abrindo o arquivo index.html por qualquer navegador.

![Test Image 3](/gama-example.gif)

https://cdn.sofifa.org/players/10/19/158023.png

## * Imagem dos jogadores

Por padrão a imagem dos jogadores vem no seguinte formato:

``
https://cdn.sofifa.org/players/4/19/158023.png
``

Sendo:

``
https://cdn.sofifa.org/players/${SIZE}/${GAME_VERSION}/158023.png
``

**parametros**:
* SIZE: tamanho da image. De 4 à 7 e 10.
* GAME_VERSION: de qual versão do jogo será a foto. de 07 à 20

### Tamanho da imagem

Caso queira aumentar o tamanho da foto basta fazer um replace do parâmetro ${SIZE} da url da imagem, como no exemplo abaixo:

```javascript

let players = [
    {
        _id: "5e3e4ba63912273b086fd59e",
        data: {
            field1: "0",
            ID: "158023",
            Name: "L. Messi",
            Age: "31",
            Photo: "https://cdn.sofifa.org/players/4/19/158023.png",
            ...
        },
    },
    {
        _id: "5e3e4ba63912273b086fd59f",
        data: {
            field1: "1",
            ID: "20801",
            Name: "Cristiano Ronaldo",
            Age: "33",
            Photo: "https://cdn.sofifa.org/players/4/19/20801.png",
            ...
        },
    },
]

function adjustImageSize(player, quality = 10) {
    return {
        ...player,
        data: {
            ...player.data,
            Photo: player.data.Photo.replace('/4/', `/${quality}/`)
        }
    }
}

players.map((player) => adjustImageSize(player))

```

Abaixo segue o exemplo da imagem de tamahho 4, 5, 6, 7 e 10, respectivamente.

![Imagem de tamanho 4](https://cdn.sofifa.org/players/4/19/158023.png)
![Imagem de tamanho 5](https://cdn.sofifa.org/players/5/19/158023.png)
![Imagem de tamanho 6](https://cdn.sofifa.org/players/6/19/158023.png)
![Imagem de tamanho 7](https://cdn.sofifa.org/players/7/19/158023.png)
![Imagem de tamanho 10](https://cdn.sofifa.org/players/10/19/158023.png)

### Tamanho da imagem

Caso queira a foto de uma versião anterior ou posterior ao FIFA 19 basta fazer um replace do parâmetro ${GAME_VERSION} da url da imagem, como no exemplo abaixo:

```javascript

let players = [
    {
        _id: "5e3e4ba63912273b086fd59e",
        data: {
            field1: "0",
            ID: "158023",
            Name: "L. Messi",
            Age: "31",
            Photo: "https://cdn.sofifa.org/players/4/19/158023.png",
            ...
        },
    },
    {
        _id: "5e3e4ba63912273b086fd59f",
        data: {
            field1: "1",
            ID: "20801",
            Name: "Cristiano Ronaldo",
            Age: "33",
            Photo: "https://cdn.sofifa.org/players/4/19/20801.png",
            ...
        },
    },
]

function adjustImageVersion(player, gameVersion = 20) {
    return {
        ...player,
        data: {
            ...player.data,
            Photo: player.data.Photo.replace('/19/', `/${gameVersion}/`)
        }
    }
}

players.map((player) => adjustImageVersion(player))

```
Abaixo segue o exemplo da imagem dos fifas 07 ao 20 respectivamente.
*Nem todos os jogadores de imagem de fifas anteriores.

![Imagem do fifa 07](https://cdn.sofifa.org/players/10/07/158023.png)
![Imagem do fifa 08](https://cdn.sofifa.org/players/10/08/158023.png)
![Imagem do fifa 09](https://cdn.sofifa.org/players/10/09/158023.png)
![Imagem do fifa 10](https://cdn.sofifa.org/players/10/10/158023.png)
![Imagem do fifa 11](https://cdn.sofifa.org/players/10/11/158023.png)
![Imagem do fifa 12](https://cdn.sofifa.org/players/10/12/158023.png)
![Imagem do fifa 13](https://cdn.sofifa.org/players/10/13/158023.png)
![Imagem do fifa 14](https://cdn.sofifa.org/players/10/14/158023.png)
![Imagem do fifa 15](https://cdn.sofifa.org/players/10/15/158023.png)
![Imagem do fifa 16](https://cdn.sofifa.org/players/10/16/158023.png)
![Imagem do fifa 17](https://cdn.sofifa.org/players/10/17/158023.png)
![Imagem do fifa 18](https://cdn.sofifa.org/players/10/18/158023.png)
![Imagem do fifa 19](https://cdn.sofifa.org/players/10/19/158023.png)
![Imagem do fifa 20](https://cdn.sofifa.org/players/10/20/158023.png)