// Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”). 
// No segundo, pergunte o primeiro valor que deseja calcular. No terceiro, o segundo valor que deseja calcular. 
// Em seguida, realize o cálculo e exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.


        let operacao = prompt('Qual tipo de calculo deseja fazer?')
        let num1 = Number(prompt('Qual o primeiro número que deseja informar?'));
        let num2 = Number(prompt('Qual segundo numero que deseja informar?'));

        let resultado


        switch (operacao) {

            case '+':
             resultado = num1 + num2
              alert ('O resultado do seu calculo é: ' + resultado);
            
            break;

            case '-':
             resultado = num1 - num2
            alert ( 
                'O resultado do seu calculo é: ' + resultado
            )
            break;

            case '*':
              resultado = num1 * num2
              alert ( 
                'O resultado do seu calculo é: ' + resultado
            )
            break;

            case '/':
              resultado = num1 /num2
              alert ( 
                'O resultado do seu calculo é: ' + resultado
            )
            break;

            default:
                alert ('Operador invalido')
                break;


        }
