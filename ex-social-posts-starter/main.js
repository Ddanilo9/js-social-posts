const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=12"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=60"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=84",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=87"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

//recupero ul container dal dom dove stamperò il contenuto
let domEl = document.getElementById('container');


for (let i = 0; i < posts.length; i++){
    let post = posts[i]
    let dataReversed = post.created.split('-').reverse().join('-') //reverse data
   
    
    //con il template literal mi creo gli elementi nel dom dopo averli ciclati
    domEl.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                <img class="profile-pic" id="ciao" src="${post.author['image']}">                    
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${post.author['name']}</div>
                                                <div class="post-meta__time">${dataReversed}</div>
                                            </div>                    
                                        </div>
                                    </div>
                                    <div class="post__text">${post.content}</div>
                                    <div class="post__image">
                                        <img src="${post.media}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                                            </div>
                                        </div> 
                                    </div>            
                                </div>`
};

let contLinkeDom = document.querySelectorAll('.js-likes-counter');
let arrayId = [];
miPiace = false
let likes = document.querySelectorAll('.like-button');


for(let i = 0; i < likes.length; i++){
    let like = likes[i]
    // console.log(like)
    like.addEventListener('click', function(){
            if(miPiace == false) {
                like.classList.add('color-green');
                miPiace = true
                contLinkeDom[i].innerHTML =  `${posts[i].likes + 1}`
                if(!arrayId.includes(posts[i].id)){
                    arrayId.push(posts[i].id);
                }
            } else {
                like.classList.remove('color-green');
                contLinkeDom[i].innerHTML =  `${posts[i].likes }`
                miPiace = false
            }
            
        }
    );
    // console.log(arrayId)
}

console.log(arrayId)

let postIcon = document.querySelectorAll('.post-meta__icon');


postIcon.forEach((el, i) => {
    // console.log(el)
    // console.log(i)
    // console.log(postIcon)
    if (posts[i].author.image === null) {
        let iniziali = '';
        
        posts[i].author.name.split(' ').forEach(elDue => {
            iniziali += elDue.charAt().toUpperCase();
        });
        el.innerHTML = `<div>${iniziali}</div>`;
    }
})