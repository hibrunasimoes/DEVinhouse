// Faça 2 prompts ao usuário: no primeiro, pergunte o ano de nascimento. No segundo, pergunte o ano atual. 
// Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.

        let anoAtual = prompt ('Qual ano atual?');
        let anoNasc = prompt ('Qual ano do seu nascimento?');

        let idade = anoAtual - anoNasc;
        let idadeVariavel = (anoAtual -1) - anoNasc;

        alert('Sua idade é: ' + idade + ' se voce nao tiver feito aniversario ainda, sua idade é ' + idadeVariavel);
    
