//a function to display greetings
function displayGreetings() {
  alert("Jambo!");
}

//a function to perform multiplication
function multiply() {
  let product = 5 * 66;
  return product;
}

//a function to diplay current date
function displayCurrentDate() {
  document.getElementById("here").innerText=Date();
}
window.onload = function()  {
displayGreetings();
document.getElementById("currentDate").addEventListener("click", function() {
  document.getElementById("here").innerText = Date();
});
document.getElementById("result").onclick = function()  {
  document.getElementById("result").innerText = multiply();
};
}



