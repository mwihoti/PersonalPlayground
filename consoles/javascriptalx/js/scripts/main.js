const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}



document.querySelector("#bt").addEventListener("click", function () {
    alert("Ouch! Stop poking me!")
})

document.querySelector('.btc').addEventListener('click', function ()
 {alert ("!Ouch, I am using  class instead of id") })


 let myButton = document.querySelector("#my");
 let myHeading = document.querySelector("h1");


 function setUserName() {
    const myName = prompt("Please enter your name. !");
    if (!myName) {
        alert("Enter name")
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`
    }
    
 }

 if (!localStorage.getItem("name")){
    setUserName();
 } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
 }

 myButton.onclick = () => {
    setUserName();
 }