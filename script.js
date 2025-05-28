let p = document.querySelector(".selector");
let words = p.innerText;
let wordCount = words.split(" ");



if(wordCount.length>20){
    let wordArrange = wordCount.slice(0, 20).join(" ");
    console.log(wordArrange)
    let ttlWords = wordCount.slice(20).join(" ");
    console.log(ttlWords)


  const readMore = ()=>{
      p.innerHTML = `${wordArrange}...<a href="#" class="readmore">Read more</a>`;
    document.querySelector(".readmore").addEventListener("click", function(e){
        e.preventDefault();
        readLess();
        
    })
  }

  const readLess = ()=>{
      p.innerHTML = `${words}<a href="#" class="readless">Read less</a>`;
    document.querySelector(".readless").addEventListener("click", function(e){
        e.preventDefault();
        readMore();
        
    })
  }

  

  readMore();

 
}