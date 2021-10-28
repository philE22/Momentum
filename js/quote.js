const quotes = [
    {
        quote: "a",
        author: "a"
    },
    {
        quote: "b",
        author: "b"
    },
    {
        quote: "c",
        author: "c"
    },
    {
        quote: "d",
        author: "d"
    },
    {
        quote: "e",
        author: "e"
    },
    {
        quote: "1",
        author: "1"
    },
    {
        quote: "2",
        author: "2"
    },
    {
        quote: "3",
        author: "3"
    },
    {
        quote: "4",
        author: "4"
    },
    {
        quote: "5",
        author: "5"
    },
]
const quoteJs = document.querySelector("#quotes")
const authorJs = document.querySelector("#author")
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quoteJs.innerHTML = `${todayQuote.quote}`
authorJs.innerHTML = `${todayQuote.author}`