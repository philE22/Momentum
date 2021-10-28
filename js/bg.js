const image = ["0.jpg", "1.jpg", "2.jpg"]

const randomBgNumber = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomBgNumber}`;

document.body.appendChild(bgImage);