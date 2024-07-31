const accessKey = "UvzpHaX9kJI5McwldaLW5vwMB9u3MqxlznZnSwE2SA0";

const heading = document.getElementById("heading");
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const navB = document.getElementsByClassName("nav");

const animatedCanvas = document.getElementById("animatedCanvas");

const animatedCanvas1 = document.getElementById("animatedCanvas1");

let keyword = "";
let page = 0;

heading.style.margin = '10px';
searchResult.style.display = 'none';
animatedCanvas1.style.display = "";


async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    

    if (page === 1) {
        searchResult.innerHTML = "";
        animatedCanvas1.style.display = "none";
        searchResult.style.display = "";
    }
     
    
    const results = data.results;

    results.map((result) => {

    const image = document.createElement("img");

    image.src = result.urls.small;

    const imageLink = document.createElement("a");

    imageLink.href = result.links.html;

    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);

    })

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});



// ////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById("animatedCanvas");



const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.3;



const colors = ["#FF5733",'#FFFFFF', "#33FF57", "#5733FF", "#FFD700",
 "#FFFFFF", "#FF0000", "#FFFFFF","#800080", "#C0C0C0",
 "#FFA500", "#40E0D0",'#FFFFFF', "#FF00FF", "#DC143C", '#FFFFFF'];
const circles = [];



function Circle(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();

    };

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.draw();
    };
}

for (let i = 0; i < 70; i++) {

    const radius = Math.random() * 20;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;

    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    circles.push(new Circle(x, y, radius, dx, dy, color));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    for (let i = 0; i < circles.length; i++) {
        circles[i].update();
    }
}

animate();
animate();

///////////////////////////////////////////////////////////////////////

const canvas1 = document.getElementById("animatedCanvas1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight * 0.25;

const colors1 = ["#FF5733",'#FFFFFF', "#33FF57", "#5733FF", "#FFD700",
 "#FFFFFF", "#FF0000", "#FFFFFF","#800080", "#C0C0C0",
 "#FFA500", "#40E0D0",'#FFFFFF', "#FF00FF", "#DC143C", '#FFFFFF'];


const circles1 = [];

function Circle1(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function() {
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx1.fillStyle = this.color;
        ctx1.fill();

    };

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > canvas1.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas1.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.draw();
    };
}

for (let i = 0; i < 70; i++) {

    const radius = Math.random() * 20;
    const x = Math.random() * (canvas1.width - radius * 2) + radius;
    const y = Math.random() * (canvas1.height - radius * 2) + radius;

    const dx = (Math.random() - 0.5) * 4;
    const dy = (Math.random() - 0.5) * 4;
    const color = colors1[Math.floor(Math.random() * colors1.length)];

    circles1.push(new Circle1(x, y, radius, dx, dy, color));
}

function animate1() {
    requestAnimationFrame(animate1);
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);



    for (let i = 0; i < circles1.length; i++) {
        circles1[i].update();
    }
}

animate1();
animate1();
