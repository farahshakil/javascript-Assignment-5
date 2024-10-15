//================= Chapter Object ========================
//Q# 01
    var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

var totalPriceOfAllItems = 0;

for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    var totalPrice = item.price * item.quantity;
    console.log("Total price of " + item.name + ": " + totalPrice);
    
    totalPriceOfAllItems += totalPrice;
}

console.log("Total price of all items: " + totalPriceOfAllItems);

//Q# 02
// Creating the object
var user = {
    name: "Farah Naz",
    email: "farah@example.com",
    password: "password123",
    age: 25,
    gender: "female",
    city: "Karachi",
    country: "Pakistan"
};

// Checking if properties exist in the object
console.log("Does 'age' exist in the object? ", 'age' in user);      
console.log("Does 'country' exist in the object? ", 'country' in user);

// Checking if non-existent properties exist
console.log("Does 'firstName' exist in the object? ", 'firstName' in user);
console.log("Does 'lastName' exist in the object? ", 'lastName' in user); 

//Q# 03
// Constructor function
function User(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}

// Creating multiple records using the constructor function
var user1 = new User("Maryum shakil", "maryum@example.com", "mar123", 25, "female", "Karachi", "Pakistan");
var user2 = new User("Ayesha shakil", "ayesha@example.com", "ayPass", 30, "male", "Lahore", "Pakistan");
var user3 = new User("Fatima shakil", "fatima@example.com", "fati123", 22, "female", "Islamabad", "Pakistan");

// Display the records
console.log(user1);
console.log(user2);
console.log(user3);

//Q# 04

// Constructor function for a Population Record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to get form values and save the record
document.getElementById('populationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var profession = document.getElementById('profession').value;

    // Create a new Population Record
    var record = new PopulationRecord(name, gender, address, education, profession);

    // Save record in local storage
    saveRecordToLocalStorage(record);

    // Display updated records
    displayRecords();

    // Clear the form after submission
    document.getElementById('populationForm').reset();
});

// Function to save the record to local storage
function saveRecordToLocalStorage(record) {
    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(record);
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Function to display all records from local storage
function displayRecords() {
    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    var recordList = document.getElementById('recordList');
    recordList.innerHTML = '';

    // Display each record as a list item
    records.forEach(function(record) {
        var li = document.createElement('li');
        li.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, 
                          Education: ${record.education}, Profession: ${record.profession}`;
        recordList.appendChild(li);
    });
}

// Display records on page load
displayRecords();



