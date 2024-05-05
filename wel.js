// document.addEventListener('DOMContentLoaded', () => {
//     const searchParams = new URLSearchParams(window.location.search);
//     const userName = searchParams.get('name');
//     const userEmail = searchParams.get('email');
//     if (userName && userEmail) {
//         const welcomeMessage = document.getElementById('welcomeMessage');
//         welcomeMessage.textContent = `Welcome, ${userName}! Thank you for registering with email: ${userEmail}`;
//     } else {
//         console.error('Invalid or missing parameters in the URL.');
//     }
// });

var AllQuery=location.search;
var myQuery=AllQuery.substring(1, AllQuery.length);
console.log(myQuery);
//console.log (myQuery)
var myArray=myQuery.split("&");
//console.log(myArray)

var name=myArray[0].split("=")[1];
var uname=myArray[0].split("=")[1];
var email=myArray[0].split("=")[1];
var phone=myArray[0].split("=")[1];


console.log(uname)
console.log(email)
console.log(phone)