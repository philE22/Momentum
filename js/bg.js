const image = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]

const randomBgNumber = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.id = "bg"
bgImage.src = `img/${randomBgNumber}`;

document.body.appendChild(bgImage);