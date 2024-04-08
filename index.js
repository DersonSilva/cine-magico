    // const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
    // const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    // const movieGrid = document.getElementById('movieGrid');

    // fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Objeto do filme:', data);

    //         // Verifique se a resposta contém filmes
    //         if (data.results && data.results.length > 0) {
    //             // Itere sobre os resultados e adicione cada filme ao grid
    //             data.results.forEach(movie => {
    //                 const movieCard = createMovieCard(movie);
    //                 movieGrid.appendChild(movieCard);
    //             });
    //         } else {
    //             console.log('Nenhum filme encontrado.');
    //         }
    //     })
    //     .catch(error => console.error('Erro ao obter dados do filme:', error));

    // // Função para criar um elemento de cartão para cada filme
    // function createMovieCard(movie) {
    //     const card = document.createElement('div');
    //     card.classList.add('movie-card');

    //     const title = document.createElement('h2');
    //     title.textContent = movie.title;

    //     const image = document.createElement('img');
    //     // Use a URL base das imagens e o caminho específico do filme fornecido pela API
    //     image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    //     image.alt = movie.title;

    //     const overview = document.createElement('p');
    //     // overview.textContent = movie.overview;

    //     card.appendChild(image);
    //     card.appendChild(title);
    //     card.appendChild(overview);

    //     return card;
    // }

    // document.addEventListener('DOMContentLoaded', function () {
    //     const form = document.querySelector('#searchForm');
    //     const input = document.querySelector('input');
    //     const movieGrid = document.getElementById('movieGrid');
    //     const searchResults = document.getElementById('searchResults');
    //     const backButton = document.getElementById('backButton');

    //     // Manipulador de eventos para o botão ou ícone de voltar
    //     backButton.addEventListener('click', function () {
    //         // Recarregar a página
    //         location.reload();
    //     });

    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault(); // Impede o envio padrão do formulário

    //         const searchTerm = input.value.trim();

    //         if (searchTerm === '') {
    //             // Se o campo de pesquisa estiver vazio, exibir mensagem de erro
    //             alert("Por favor, preencha o campo de pesquisa.");
    //         } else {
    //             // Realizar a lógica de pesquisa
    //             const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
    //             const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    //             fetch(apiUrl)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log('Resultados da pesquisa:', data);

    //                     // Limpar a mensagem de erro
    //                     searchResults.innerHTML = '';

    //                     // Limpar o grid de filmes antes de adicionar os novos resultados
    //                     movieGrid.innerHTML = '';

    //                     // Verificar se há resultados
    //                     if (data.results && data.results.length > 0) {
    //                         // Iterar sobre os resultados e adicionar cada filme ao grid
    //                         data.results.forEach(movie => {
    //                             const movieCard = createMovieCard(movie);
    //                             movieGrid.appendChild(movieCard);
    //                         });
    //                     } else {
    //                         // Se não houver resultados, exibir mensagem de erro
    //                         searchResults.innerHTML = '<h1 class="error-message">Nenhum resultado encontrado.</h1>';

    //                     }
    //                 })
    //                 .catch(error => console.error('Erro na pesquisa:', error));
    //         }
    //     });
    // });










    const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
    // const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR`;

    const movieGrid = document.getElementById('movieGrid');

    // Verificar se o elemento movieGrid existe antes de fazer a solicitação
    if (movieGrid) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Objeto do filme:', data);

                // Verificar se a resposta contém filmes
                if (data.results && data.results.length > 0) {
                    // Iterar sobre os resultados e adicionar cada filme ao grid
                    data.results.forEach(movie => {
                        const movieCard = createMovieCard(movie);
                        // Verificar se movieGrid não é nulo antes de usar appendChild
                        // if (movieGrid) {
                        //     movieGrid.appendChild(movieCard);
                        // } else {
                        //     console.error('O elemento movieGrid não foi encontrado.');
                        // }
                    });
                } else {
                    console.log('Nenhum filme encontrado.');
                }
            })
            .catch(error => console.error('Erro ao obter dados do filme:', error));
        // } else {
        //     console.error('O elemento movieGrid não foi encontrado.');
    }

    // Função para criar um elemento de cartão para cada filme
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const imageContainer = document.createElement('div'); // Contêiner para a imagem
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        image.alt = movie.title;
        image.classList.add('movie-poster'); // Adiciona uma classe para as imagens

        const overview = document.createElement('p');

        card.appendChild(imageContainer);
        imageContainer.appendChild(image);
        card.appendChild(title);
        card.appendChild(overview);

        // Adicionar evento de clique ao card do filme
        card.addEventListener('click', function () {
            // Chamar a função para abrir a página de elenco
            openCastPage(movie.id);
        });

        return card;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const movieGrid = document.getElementById('movieGrid');
        const searchResults = document.getElementById('searchResults');
        const backButton = document.getElementById('backButton');
        const input = document.querySelector('input');

        if (movieGrid) {
            // Se o elemento movieGrid existir, é uma página principal
            const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
            // const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
            const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR`;

            fetchMovies(apiUrl);
        } else {
            // Se o elemento movieGrid não existir, é uma página de elenco
            const urlParams = new URLSearchParams(window.location.search);
            const movieId = urlParams.get('movieId');

            if (movieId) {
                const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
                const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,credits`;

                fetchMovieDetails(apiUrl);
            } else {
                console.error('ID do filme não encontrado na URL.');
            }
        }

        // Função para criar um elemento de cartão para cada filme
        function createMovieCard(movie) {
            const card = document.createElement('div');
            card.classList.add('movie-card');

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const image = document.createElement('img');
            image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            image.alt = movie.title;
            image.classList.add('movie-poster');

            const overview = document.createElement('p');

            card.appendChild(imageContainer);
            imageContainer.appendChild(image);
            card.appendChild(title);
            card.appendChild(overview);

            // Adicionar evento de clique ao card do filme
            card.addEventListener('click', function () {
                // Chamar a função para abrir a página de elenco
                openCastPage(movie.id);
            });

            return card;
        }

        // Função para buscar filmes
        function fetchMovies(apiUrl) {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // console.log('Objeto do filme:', data);

                    // Verificar se a resposta contém filmes
                    if (data.results && data.results.length > 0) {
                        // Iterar sobre os resultados e adicionar cada filme ao grid
                        data.results.forEach(movie => {
                            const movieCard = createMovieCard(movie);
                            if (movieGrid) {
                                movieGrid.appendChild(movieCard);
                                // } else {
                                //     console.error('O elemento movieGrid não foi encontrado.');
                            }
                        });
                    } else {
                        alert('Nenhum filme encontrado.. Tente uma nova busca!!');
                    }
                })
                .catch(error => console.error('Erro ao obter dados do filme:', error));
        }

        // Função para buscar detalhes do filme
        function fetchMovieDetails(apiUrl) {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log('Detalhes do Filme:', data);

                    const trailerContainer = document.getElementById('trailer');
                    if (data.videos && data.videos.results.length > 0) {
                        const trailerKey = data.videos.results[0].key;
                        trailerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailerKey}" frameborder="0" allowfullscreen></iframe>`;
                    } else {
                        trailerContainer.innerHTML = '<p>Nenhum trailer disponível.</p>';
                    }

                    const castListContainer = document.getElementById('castList');
                    if (data.credits && data.credits.cast.length > 0) {
                        castListContainer.innerHTML = '<h2>Elenco:</h2>';
                        castListContainer.innerHTML += '<div class="cast-images-container">';

                        data.credits.cast.forEach(member => {
                            castListContainer.innerHTML += `<p>${member.name} (${member.character})</p>`;
                            if (member.profile_path) {
                                const profileImageUrl = `https://image.tmdb.org/t/p/w200${member.profile_path}`;
                                castListContainer.innerHTML += `<img class="cast-image" src="${profileImageUrl}" alt="${member.name}">`;
                            }
                        });

                        castListContainer.innerHTML += '</div>';
                    } else {
                        castListContainer.innerHTML = '<p>Nenhum elenco disponível.</p>';
                    }
                })
                .catch(error => console.error('Erro ao obter detalhes do filme:', error));
        }

        // Função para abrir a página de elenco
        function openCastPage(movieId) {
            const castPageUrl = `elenco.html?movieId=${movieId}`;
            window.location.href = castPageUrl;
        }

        // Adicionar evento de clique ao botão de voltar
        if (backButton) {
            backButton.addEventListener('click', function () {
                // Recarregar a página
                location.reload();
            });
            // } else {
            //     console.error('O elemento backButton não foi encontrado.');
        }

        // Adicionar evento de submit ao formulário de pesquisa
        const form = document.querySelector('#searchForm');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // const input = document.querySelector('input');
                // const searchTerm = input.value.trim();

                // Alteração aqui: Buscar o input dentro do formulário
                const input = form.querySelector('input');
                const searchTerm = input.value.trim();

                if (searchTerm === '') {
                    alert('Por favor, preencha o campo de pesquisa.');
                } else {

                    const apiKey = '0001ab8d93a7fbd3ddbbbc485195be0d';
                    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

                    // Limpar a mensagem de erro
                    searchResults.innerHTML = '';

                    // Limpar o grid de filmes antes de adicionar os novos resultados
                    if (movieGrid) {
                        movieGrid.innerHTML = '';


                        fetchMovies(searchUrl);
                        input.value = '';

                    } else {
                        // console.error('O elemento movieGrid não foi encontrado.');


                    }
                }
            });
        } else {
            console.error('O elemento searchForm não foi encontrado.');
        }
    });



    // Função para abrir a página de elenco
    function openCastPage(movieId) {
        // Construir a URL da página de elenco com o ID do filme
        const castPageUrl = `elenco.html?movieId=${movieId}`;

        // Redirecionar para a página de elenco
        window.location.href = castPageUrl;
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Seu código existente...

    });