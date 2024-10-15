
// =============> Chapter 43-48 <================
//Q# 01
function showAlert() {
    alert("You clicked the link!");
}

//Q# 02
function showAlert(mobileName) {
    alert("You clicked on " + mobileName);
    alert("Thanks for purchasing a phone from us!");
}

//Q# 03
function deleteRow(button) {
    // `button` is the delete button itself, we find the parent row (tr) and remove it
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//Q# 04
// function changeImage() {
//     document.getElementById("myImage").src = "Beauty product.jpg";
// }

// function resetImage() {
//     document.getElementById("myImage").src = "beauty-products 2.avif";
// }

// document.getElementById("myImage").addEventListener("mouseover", changeImage);
// document.getElementById("myImage").addEventListener("mouseout", resetImage);

// function swapPic() {
//      document.getElementById("before").src = "beauty-products 2.avif";
// }

//Q# 05
// Initialize the counter value
var counterValue = 0;

// Function to increase the counter
function increase() {
    counterValue++; // Increase the counter
    document.getElementById("counter").textContent = counterValue; // Update the display
}

// Function to decrease the counter
function decrease() {
    counterValue--; // Decrease the counter
    document.getElementById("counter").textContent = counterValue; // Update the display
}


