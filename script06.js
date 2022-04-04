// Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. 
// Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.

        let sobrenome = prompt ('Qual seu sobrenome?');
        
        alert(
         'Olá, ' +
         sobrenome.toUpperCase() +
        '. Seu sobrenome contém ' +
         sobrenome.length +
         ' letras! ')

         