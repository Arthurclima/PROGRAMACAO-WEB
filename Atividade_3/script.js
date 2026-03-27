

        
        const btnIncrementar = document.getElementById('btn-incrementar');
        const btnDecrementar = document.getElementById('btn-decrementar');
        const spanValorContador = document.getElementById('valor-contador');
        let contador = 0;

        
        const inputTexto = document.getElementById('input-texto');
        const spanContagemCaracteres = document.getElementById('contagem-caracteres');
        const divAreaParagrafos = document.getElementById('area-paragrafos');

        
        const selectTipoLista = document.getElementById('tipo-lista');
        const inputItem = document.getElementById('input-item');
        const btnAdicionarItem = document.getElementById('btn-adicionar-item');
        const listaUl = document.getElementById('lista-ul');
        const listaOl = document.getElementById('lista-ol');

        
        const btnReset = document.getElementById('btn-reset');


        

        
        btnIncrementar.addEventListener('click', () => {
            contador++;
            spanValorContador.textContent = contador;
        });

        btnDecrementar.addEventListener('click', () => {
            if (contador > 0) {
                contador--;
                spanValorContador.textContent = contador;
            } else {
                alert("O contador já está em zero!");
            }
        });

        
        inputTexto.addEventListener('input', () => {
            
            const textoSemEspacos = inputTexto.value.replace(/\s/g, '');
            spanContagemCaracteres.textContent = textoSemEspacos.length;
        });

        
        inputTexto.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const textoDigitado = inputTexto.value.trim();
                
                if (textoDigitado !== '') {
                    
                    const novoParagrafo = document.createElement('p');
                    novoParagrafo.textContent = textoDigitado;
                    
                    
                    divAreaParagrafos.appendChild(novoParagrafo);
                    
                    
                    inputTexto.value = '';
                    spanContagemCaracteres.textContent = '0';
                }
            }
        });

        
        btnAdicionarItem.addEventListener('click', () => {
            const textoItem = inputItem.value.trim();
            const tipoSelecionado = selectTipoLista.value;

            if (textoItem !== '') {
                const novoLi = document.createElement('li');
                novoLi.textContent = textoItem;

                if (tipoSelecionado === 'ul') {
                    listaUl.appendChild(novoLi);
                } else if (tipoSelecionado === 'ol') {
                    listaOl.appendChild(novoLi);
                }
                
                inputItem.value = ''; 
            } else {
                alert("Digite um item para adicionar na lista.");
            }
        });

        
        btnReset.addEventListener('click', () => {
            
            contador = 0;
            spanValorContador.textContent = contador;

            
            inputTexto.value = '';
            spanContagemCaracteres.textContent = '0';
            divAreaParagrafos.innerHTML = '';

            
            inputItem.value = '';
            listaUl.innerHTML = '';
            listaOl.innerHTML = '';
        });