//Q# 01(i)
// Getting the element with id "main-content"
var mainContent = document.getElementById("main-content");

// Logging the element to the console to see the result
console.log(mainContent);

//Q# 01(ii)
// Getting the element with id "main-content"
var mainContent = document.getElementById("main-content");

// Accessing and displaying all child elements of "main-content"
var children = mainContent.children;

// Looping through the children and displaying them in the console
for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
}

//Q# 01(iii)
document.getElementById("showContentBtn").addEventListener("click", function() {
    // Get all elements with class "render"
    var elements = document.getElementsByClassName("render");
    var output = ""; // Variable to store the content

    // Loop through each element and get its innerHTML
    for (var i = 0; i < elements.length; i++) {
        output += elements[i].innerHTML + "<br>"; // Append innerHTML with a line break
    }

    // Display the content in the output div
    document.getElementById("output").innerHTML = output;
});

//Q# 01 (IV)

 // JavaScript to fill input value when button is clicked
 document.getElementById("fillValueBtn").addEventListener("click", function() {
    // Select the input element by ID and set its value
    document.getElementById("first-name").value = "Alex";
});

//Q# 01 (v)
// JavaScript to fill input values when button is clicked
document.getElementById("fillValueBtn").addEventListener("click", function() {
    // Fill the first name input
    document.getElementById("first-name").value = "Alex";

    // Fill the last name input
    document.getElementById("last-name").value = "Bank";

    // Fill the email input
    document.getElementById("email").value = "alexbank@example.com";
});

//Q# 02 (i)

// Get the element with id "form-content"
var formContentElement = document.getElementById("form-content");

// Get the node type of the element
var nodeType = formContentElement.nodeType;

// Display the node type in the output div
document.getElementById("output").innerHTML = "Node type of 'form-content': " + nodeType;

//Q# 02 (ii)
 // Get the element with id "lastName"
 var lastNameElement = document.getElementById("lastName");

 // Get the node type of the element "lastName"
 var lastNameNodeType = lastNameElement.nodeType;

 // Get the first child node of the "lastName" element
 var childNode = lastNameElement.firstChild;
 var childNodeType = childNode.nodeType;

 // Display the node types in the output div
 document.getElementById("output").innerHTML = 
     "Node type of 'lastName' element: " + lastNameNodeType + "<br>" +
     "Node type of 'lastName' child node: " + childNodeType;

     //Q# 02 (iii)
     // JavaScript to update the child node of the element with id "lastName"
     document.getElementById("updateTextBtn").addEventListener("click", function() {
        // Select the element by its ID
        var lastNameElement = document.getElementById("lastName");

        // Update the text content of the element
        lastNameElement.textContent = "Last Name: Smith"; // Updating the text to "Last Name: Smith"
    });

    //Q# 02 (iv)


    // JavaScript to get the first and last child ELEMENT of the element with id "main-content"
        document.getElementById("showChildrenBtn").addEventListener("click", function() {
            // Select the element with id "main-content"
            var mainContentElement = document.getElementById("main-content");

            // Get the first and last ELEMENT children (ignores text nodes like spaces)
            var firstElementChild = mainContentElement.firstElementChild;
            var lastElementChild = mainContentElement.lastElementChild;

            // Display the element names or element content in the output div
            document.getElementById("output").innerHTML =
                "First child element: " + firstElementChild.nodeName + "<br>" +
                "First child content: " + firstElementChild.textContent + "<br><br>" +
                "Last child element: " + lastElementChild.nodeName + "<br>" +
                "Last child content: " + lastElementChild.textContent;
        });

        //Q# 02 (v)
        // JavaScript to get the first and last child ELEMENT of the element with id "main-content"
        document.getElementById("showChildrenBtn").addEventListener("click", function() {
            // Select the element with id "main-content"
            var mainContentElement = document.getElementById("main-content");

            // Get the first and last ELEMENT children (ignores text nodes like spaces)
            var firstElementChild = mainContentElement.firstElementChild;
            var lastElementChild = mainContentElement.lastElementChild;

            // Display the element names or element content in the output div
            document.getElementById("output").innerHTML =
                "First child element: " + firstElementChild.nodeName + "<br>" +
                "First child content: " + firstElementChild.textContent + "<br><br>" +
                "Last child element: " + lastElementChild.nodeName + "<br>" +
                "Last child content: " + lastElementChild.textContent;
        });

        //Q# 02 (vi)
         // JavaScript to get the parent node and node type of the element with id "email"
         document.getElementById("showParentAndTypeBtn").addEventListener("click", function() {
            // Select the element with id "email"
            var emailElement = document.getElementById("email");

            // Get the parent node of the email element
            var parentNode = emailElement.parentNode;

            // Get the node type of the email element
            var nodeType = emailElement.nodeType;

            // Display the parent node and node type in the output div
            document.getElementById("output").innerHTML =
                "Parent node: " + parentNode.nodeName + "<br>" +
                "Node type: " + nodeType;
        });

 




