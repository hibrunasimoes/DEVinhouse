// Pergunte ao usuário: nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm). 
// Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). 
// Faça com que esses 3 valores sejam exibidos no console do navegador.

        let nome = String(prompt ('Qual sua idade?'));
        let idade = Number(propmt ('Qual sua idade?'));
        let esportes = Boolean(confirm ('Gosta de esportes?'));

        console.log ("Nome: " + nome + ", Idade: " + idade + ", Esportes: "+ esportes );
