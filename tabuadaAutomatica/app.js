 //LÓGICA
        //Pede ao usuário qual a tabuada ele deseja e até quanto o número será multiplicado

        function multiplicar(){
            var num1, num2
            num1 = document.getElementById("num1").value

            num2 = document.getElementById("num2").value

            //Loop para pegar o primeiro valor digitado pelo usuario

            for(i = 0; i<=num2; i++){

                //pegar o numero 2 digitado pelo usuario e multiplicar pelo primeiro numero

                 document.getElementById("resultado").innerHTML = (num1 + " X " + i + " = " + (num1*i))
               


                //  console.log(num1 + " X " + i + " = " + (num1*i))
            }
        }


        //ADICIONAR FUNÇÃO PARA QUE SE ESTOURAR O LIMITE DE MEMÓRIA IMPOSTO PELO SITE,  ATUALIZAR A JANELA IMEDIATAMENTE