const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    const apiurl = "https://api.quotable.io/random";

    async function getquote(url) {
        const response = await fetch(url);
        const data = await response.json();

        quote.innerHTML = data.content;
        author.innerHTML = data.author;
        console.log(data);
    }

    function tweet() {
        const quoteText = encodeURIComponent(quote.innerText);
        window.open("https://twitter.com/intent/tweet?text=" + quoteText, "Tweet Window", "width=600,height=300");
    }

    getquote(apiurl);