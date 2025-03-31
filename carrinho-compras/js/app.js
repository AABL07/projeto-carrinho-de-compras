let totalGeral;
limpar();

function adicionar() {
    //Passo 1 - Recuperar valores: nome do produto, valor e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === '') {
        alert('Por favor, selecione um produto válido.');
        return;
    }
    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //Passo 2 - Calcular o preço, ou seja, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    
    //Passo 3 - Adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
   
    //Passo 4 - Atualizar o valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}


