const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world its dante";

document.querySelector("#bt").addEventListener("click", function () {
    alert("Ouch! Stop poking me!")
})

document.querySelector('.btc').addEventListener('click', function ()
 {alert ("!Ouch, I am using  class instead of id") })