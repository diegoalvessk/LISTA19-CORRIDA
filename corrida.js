/*
1. Crie uma classe Carro com as seguintes propriedades:
● Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
● Potência - número de cavalos de potência do carro;
● Velocidade Máxima - qual a maior velocidade que o carro pode alcançar;
● Aceleração - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

2. Adicione na classe carro um método que recebe como parâmetro uma distância em
metros e calcula o tempo em segundos para percorrer essa distância. Use a
seguinte fórmula para o cálculo: resultado = distância / (Velocidade Máxima /
Aceleração). A função deve retornar esse resultado.

3. Crie alguns objetos da classe Carro e adicione-os em um array

4. Crie uma classe Corrida com as seguintes propriedades:
● Nome - nome do local da corrida;
● Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
● Distância - o total em metros da corrida;
● Vencedor - qual a equipe que ganhou a corrida;

5. Adicione na classe Corrida um método que verifica qual foi o carro que completou a
corrida em menor tempo, para isso utilize o método criado na classe carro. Salve o
nome da equipe que fez o menor tempo na propriedade “Vencedor”.

6. Adicione na classe Corrida um método que exibe na tela quem é o vencedor da
corrida.

7. Crie um objeto da classe Corrida e chame seus métodos.
*/

class Carro{
    NomeEquipe = []
    Potencia = []
    VelocidadeMaxima = []
    Aceleracao = []

    MetrosSegundos(distancia){
        let MetrosSegundos = []
        for (let index = 0; index < 3; index++) {
                MetrosSegundos[index] = distancia / (this.VelocidadeMaxima[index] / this.Aceleracao[index])
        }

        corrida1.VerificarVencedor(MetrosSegundos)
    }
}

class Corrida{
    NomeLocal
    TipoCorrida
    DistanciaCorrida
    VencedorCorrida

    VerificarVencedor(VencedorCorrida){
        VencedorCorrida.sort((a, b) => a - b);

        this.VencedorCorrida = VencedorCorrida[0]
    }

    
}

let corrida1 = new Corrida()
corrida1.DistanciaCorrida = parseInt(prompt("Qual a distância da corrida?"))
corrida1.NomeLocal = "Veneza"
corrida1.TipoCorrida = "Formula 1"

let carro = new Carro()
carro.NomeEquipe[0] = "ferrari"
carro.Potencia[0] = 450
carro.VelocidadeMaxima[0] = 390
carro.Aceleracao[0] = 6

carro.NomeEquipe[1] = "Mercedes"
carro.Potencia[1] = 400
carro.VelocidadeMaxima[1] = 400
carro.Aceleracao[1] = 7

carro.NomeEquipe[2] = "Uno"
carro.Potencia[2] = 420
carro.VelocidadeMaxima[2] = 450
carro.Aceleracao[2] = 4

carro.MetrosSegundos(corrida1.DistanciaCorrida)