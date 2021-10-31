const quotes = [
    {
        quote: "이길 수 있다고 생각하면 이길 수 있다. 승리에는 신념이 필요하다",
        author: "윌리엄 해즐릿"
    },
    {
        quote: "자신은 위험을 무릅쓰고 하지 않을 행동을 충동질 하는 이를 조심하라",
        author: "호아킨 세탄티"
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 해!",
        author: "찰리 채플린"
    },
    {
        quote: "우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다",
        author: "스티브 잡스"
    },
    {
        quote: "집중력은 자신감과 갈망이 결합하여 생긴다",
        author: "아놀드 파머"
    },
    {
        quote: "천재는 거대한 인내일 뿐이다",
        author: "뷔퐁"
    },
    {
        quote: "자신감은 위대한 과업의 첫째 요건이다",
        author: "사무엘 존슨"
    },
    {
        quote: "한 인간의 가치는 그가 무엇을 받을 수 있느냐가 아니라 무엇을 주느냐로 판단된다",
        author: "알버트 아인슈타인"
    },
    {
        quote: "그 여정이 바로 보상이다",
        author: "스티브 잡스"
    },
    {
        quote: "강한 신념이야말로 거짓보다 더 위험한 진리의 적이다",
        author: "프레드리히 니체"
    },
]
const quoteJs = document.querySelector("#quotes")
const authorJs = document.querySelector("#author")
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quoteJs.innerHTML = `${todayQuote.quote}`
authorJs.innerHTML = `${todayQuote.author}`