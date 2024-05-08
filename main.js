import { menu, adicionar_item, remover_item, pesquisar_item, ordenar_lista, exibir_lista, limpar_lista } from './functions.js';

while (true) {
    menu();
    let opcao = parseInt(prompt('Digite a opção: '));
    switch (opcao) {
      case 1:
        adicionar_item();
        break;
      case 2:
        remover_item();
        break;
      case 3:
        pesquisar_item();
        break;
      case 4:
        ordenar_lista();
        break;
      case 5:
        exibir_lista();
        break;
      case 6:
        limpar_lista();
        break;
      case 7:
        console.log('Saindo...');
        break;
      default:
        console.log('Opção inválida!!!');
    }
  
    if (opcao === 7) {
      console.log('Você saiu do programa! \n Obrigado por nos escolher!!!');
      break;
    }
  }
  