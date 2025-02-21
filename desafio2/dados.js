const cards = document.querySelector('main');
fetch('./dados.json')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(d => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${d.nome}</h3>
            <p>${d.descricao}</p>
            <img src="${d.imagem}" alt="Produto">
            <h3>R$ ${d.preco}</h3>
        `;
        cards.appendChild(card);
    });
})