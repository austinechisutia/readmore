let words = document.querySelector(".selector");
let totalWords = words.innerText;
let wordCount = totalWords.split(' ');

if(wordCount.length>20){
    let seenWords = wordCount.splice(0, 20).join(" ");
    console.log(seenWords)
    let restWords = wordCount.splice(20).join(" ")
    console.log(restWords)

    function showSmallText(){
        words.innerHTML = `${seenWords}... <a href="#" class="readmore">Read more</a>`;
    document.querySelector(".readmore").addEventListener("hover", showFullText);
    }

    function showFullText(e){
        e.preventDefault();
        words.innerText = totalWords;

    }
    showSmallText();

    words.addEventListener("mouseleave", function(){
        showSmallText
    })
}
