// "use strict";

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const  containerHTML = document.getElementById('container');
console.log(containerHTML);

function displayPosts(){
    posts.forEach((value) => {
    const post = document.createElement('div');
    post.className = 'post';
    const initials = getNameInitials(value.author.name);
    console.log(initials);

    if(!(value.author.image == null)){
        post.innerHTML = `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${value.author.image}" alt="${value.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${value.author.name}</div>
                    <div class="post-meta__time">${value.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${value.content}</div>
        <div class="post__image">
            <img src="${value.media}" alt="post image by ${value.author.name}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <div class="like-button  js-like-button" data-postid="${value.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </div>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${value.id}" class="js-likes-counter">${value.likes}</b> persone
                </div>
            </div> 
        </div>            
        `
    }
    else {
        post.innerHTML = `
        <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <div class="profile-pic-default">
                    <span>${initials}</span>
                </div>                    
            </div>                    
            <div class="post-meta__data">
                <div class="post-meta__author">${value.author.name}</div>
                <div class="post-meta__time">${value.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${value.content}</div>
    <div class="post__image">
        <img src="${value.media}" alt="post image by ${value.author.name}">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <div class="like-button  js-like-button" data-postid="${value.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </div>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${value.id}" class="js-likes-counter">${value.likes}</b> persone
            </div>
        </div> 
    </div>          
        `
    }

    containerHTML.append(post);
})
}
displayPosts();

const likeBtn = Array.from(document.querySelectorAll('.like-button'));
const likeCounterHTML = document.querySelectorAll('.js-likes-counter');
const likedPosts = [];
console.log(likeBtn);

likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('like-button--liked');
        const btnID = parseInt(btn.dataset.postid);
        console.log(btnID);
        posts.forEach((value) => {
            if(btnID === value.id && !(likedPosts.includes(value))){
                   likedPosts.push(value);
                   likeCounterHTML[btnID - 1].innerHTML = `${value.likes + 1}`;
                }
            else if(btnID === value.id && likedPosts.includes(value)){
                    likedPosts.splice(likedPosts.indexOf(value), 1);
                    likeCounterHTML[btnID - 1].innerHTML = `${value.likes}`;
                }
            })
        console.log(likedPosts);
    })
})