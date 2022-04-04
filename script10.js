// Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, e outro um valor para a “raíz”.
// Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela.

    let valorInicial = Number(prompt('Digite um valor'))
    let raiz = Number(prompt('Digite o segundo valor'))
    let resultado = [valorInicial]
        
    for (i = 1; i <=10; i++) [
        valorInicial += raiz,
        resultado.push(valorInicial)
        ]

    alert (resultado.join(', '))


