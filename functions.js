let lista_de_compras = [];


export function menu() {
    console.log(
      '\nLista de Compras: \n 1. Adicionar item \n 2. Remover item \n 3. Pesquisar item \n 4. Ordenar lista \n 5. Exibir lista \n 6. Limpar lista \n 7. Sair \n Escolha uma opção:'
    );
  }
  
export function adicionar_item() {
    let item_adicionar = prompt('Digite o item que deseja adicionar: ');
    if (item_adicionar) {
      lista_de_compras.push(item_adicionar);
      console.log('Item ' + item_adicionar + ' adicionado na lista com sucesso!!!');
    } else {
      console.log('Inválido!!!');
    }
  }
  
export  function remover_item() {
  let item_remover = prompt('Digite o item que deseja remover: ');
  if (item_remover) {
    let index = lista_de_compras.indexOf(item_remover);
    if (index !== -1) {
      lista_de_compras.splice(index, 1);
      console.log('Item ' + item_remover + ' removido da lista com sucesso!!!');
    } else {
      console.log('O item não existe!!!');
    }
  } else {
    console.log('Inválido!!!');
  }
}
  
export  function pesquisar_item() {
    let item_pesquisar = prompt('Digite o item que deseja pesquisar: ');
    if (item_pesquisar) {
      let encontrar = lista_de_compras.includes(item_pesquisar);
      let mensagem = encontrar ? 'sim' : 'não';
      console.log('O item ' + item_pesquisar + ' foi encontrado? \n' + mensagem);

    } else {
      console.log('O item não foi encontrado na lista!!!');
    }
  }
  
export function ordenar_lista() {
    let ordenar = lista_de_compras.sort();
    console.log('A lista foi ordenada! \n Aqui está: ' + ordenar);
  }
  
export function exibir_lista() {
    if (lista_de_compras.length === 0) {
      console.log('A lista está vazia!!!');
    } else {
      console.log(lista_de_compras.forEach((item) => console.log('-' + item)));
    }
}

export function limpar_lista(){
  lista_de_compras.length=0;
  console.log('A lista foi limpada com sucesso!!!')
}