const quotes = [
    {
        author: "Socrates",
        quote: "The only true wisdom is in knowing you know nothing."
    },
    {
        author: "Socrates",
        quote: "The unexamined life is not worth living."
    },
    {
        author: "Albert Einstein",
        quote: "In the middle of difficulty lies opportunity."
    },
    {
        author: "Confucius",
        quote: "Life is really simple, but we insist on making it complicated."
    },
    {
        author: "Seneca",
        quote: "It is not the man who has too little, but the man who craves more, that is poor."
    },
    {
        author: "Oprah Winfrey",
        quote: "Turn your wounds into wisdom."
    },
    {
        author: "Buddha",
        quote: "What we think, we become."
    },
    {
        author: "Lao Tzu",
        quote: "The journey of a thousand miles begins with one step."
    },
    {
        author: "Friedrich Nietzsche",
        quote: "He who has a why to live can bear almost any how."
    },
    {
        author: "Socrates",
        quote: "Wisdom begins in wonder."
    }
];


function generate(){
    let currentQuote = Math.floor(Math.random() * (quotes.length - 1))
    document.querySelector(".quote").innerHTML = quotes[currentQuote].quote
    document.querySelector(".author").innerHTML = quotes[currentQuote].author
}

