# Exercícios de Programação em TypeScript

## 1. Contador

Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.

## 2. Ponto2D

Crie uma classe TypeScript chamada `Ponto2D` que represente um ponto no plano cartesiano. Além dos atributos identificados, a classe deve oferecer os seguintes membros:

a) Construtores sobrecarregados que permitam a inicialização do ponto:

i) Construtor padrão (sem parâmetros) na origem do plano 2D.

ii) Construtor com dois parâmetros `x` e `y` do tipo `number` para definir as coordenadas do ponto.

iii) Construtor que aceita outro objeto do tipo `Ponto2D` para criar um ponto com as mesmas coordenadas.

b) Métodos de acesso (getter/setter) para os atributos `x` e `y`.

c) Métodos sobrecarregados para movimentação do ponto com os mesmos parâmetros indicados para os construtores.

d) Método `equals(outroPonto: Ponto2D): boolean` para comparação semântica dos pontos.

e) Método `toString(): string` para representação do objeto como string.

f) Método `distancia(outroPonto: Ponto2D): number` para calcular a distância do ponto atual até outro ponto.

g) Método `clone(): Ponto2D` que cria e retorna uma cópia do ponto.

## 3. Número Complexo

Crie uma classe TypeScript chamada `NumeroComplexo` que represente um número complexo. A classe deve fornecer as seguintes operações:

a) Construtor que recebe valores das partes real e imaginária.

b) Métodos getter/setter para os atributos da parte real e imaginária.

c) Método `somar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o adiciona ao número complexo atual. (a+bi) + (c+di) = (a+c) + (b+d)i

d) Método `subtrair(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o subtrai do número complexo atual. (a+bi) - (c+di) = (a-c) + (b-d)i

e) Método `multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o multiplica ao número complexo atual. (a+bi) * (c+di) = (ac - bd) + (ad + bc)i

f) Método `dividir(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o divide pelo número complexo atual. (a+bi) / (c+di) = 
(ac + bd) / (c² + d²) 
+ 
(bc - ad) / (c² + d²)i

g) Método `equals(outroComplexo: NumeroComplexo): boolean` para comparação semântica dos números complexos.

h) Método `toString(): string` que gera e retorna a representação em string do número complexo.

i) Método `modulo(): number` que retorna o módulo do número complexo.

