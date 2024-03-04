let products = [];

        function fetchProducts() {
            fetch('https://hur.webmania.cc/products.json')
                .then(response => response.json())
                .then(data => {
                    products = data.products;
                    displayProducts(0);
                })
                .catch(error => console.error('Hiba történt a termékek lekérése közben:', error));
        }

        function displayProducts(startIndex) {
            const container = document.getElementById('productsContainer');
            container.innerHTML = '';
            const endIndex = Math.min(startIndex + 3, products.length);
            for (let i = startIndex; i < endIndex; i++) {
                const product = products[i];
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="category">${product.category}</div>
                    <div class="name">${product.name}</div>
                    <img src="${product.picture}" alt="${product.name}">
                    <div class="description">${product.description}</div>
                    <div class="price">Ár: ${product.price} Ft</div>
                    <div class="stock">Raktáron: ${product.stock}</div>
                `;
                container.appendChild(card);
            }
        }

        function prevProducts() {
            startIndex = Math.max(startIndex - 3, 0);
            displayProducts(startIndex);
        }

        function nextProducts() {
            if (startIndex + 3 < products.length) {
                startIndex += 3;
                displayProducts(startIndex);
            }
        }

        fetchProducts();