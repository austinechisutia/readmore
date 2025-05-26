let p = document.querySelector('.selector');
let textCount = p.innerText;
let words = textCount.split(" ");

let wordCount = words.length;

if (wordCount >20){
    let first20Words = words.slice(0, 20).join(" ");
    let remainingWords = words.slice(20).join(" ");
    console.log(first20Words);

    console.log(remainingWords);

    p.innerHTML = `${first20Words}... <a href="#" class="read-more">Read more</a>`;

    document.querySelector('.read-more').addEventListener('click', function(event) {
        event.preventDefault();
        p.innerText = textCount;
    });
}