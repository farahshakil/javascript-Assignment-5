// ===================> Chapter 49-52 <=========================
//Q# 01

var form = document.getElementById('signUpForm');
var output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault();

     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;

   
     output.innerHTML = `
         <h3>Submitted Data:</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Password:</strong> ${password}</p>
     `;
 });

 //Q# 02
 function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";  // Show the hidden text
        btnText.innerHTML = "Read less";   // Change button text to "Read less"
    } else {
        moreText.style.display = "none";   // Hide the text again
        btnText.innerHTML = "Read more";   // Change button text back to "Read more"
    }

}
//Q# 03

const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
const editForm = document.getElementById('editForm');
let editRowIndex;

// Add student to the table
studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('studentName').value;
    var age = document.getElementById('studentAge').value;
    var grade = document.getElementById('studentGrade').value;


    var newRow = studentTable.insertRow();
            newRow.insertCell(0).textContent = name;
            newRow.insertCell(1).textContent = age;
            newRow.insertCell(2).textContent = grade;

            // Create Edit and Delete buttons
            var actionsCell = newRow.insertCell(3);
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => editStudent(newRow.rowIndex);
            actionsCell.appendChild(editButton);

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteStudent(newRow.rowIndex);
            actionsCell.appendChild(deleteButton);

            // Clear the input fields
            studentForm.reset();
        });

        // Delete student from the table
        function deleteStudent(rowIndex) {
            studentTable.deleteRow(rowIndex - 1); // Adjust for header row
        }

         // Delete student from the table
         function deleteStudent(rowIndex) {
            studentTable.deleteRow(rowIndex - 1); // Adjust for header row
        }

        // Edit student details
        function editStudent(rowIndex) {
            var row = studentTable.rows[rowIndex - 1];
            document.getElementById('editName').value = row.cells[0].textContent;
            document.getElementById('editAge').value = row.cells[1].textContent;
            document.getElementById('editGrade').value = row.cells[2].textContent;

            editRowIndex = rowIndex;
            editForm.classList.remove('hidden');
        }

        // Save changes to the student details
        document.getElementById('saveChanges').addEventListener('click', function() {
            var row = studentTable.rows[editRowIndex - 1];
            row.cells[0].textContent = document.getElementById('editName').value;
            row.cells[1].textContent = document.getElementById('editAge').value;
            row.cells[2].textContent = document.getElementById('editGrade').value;

            editForm.classList.add('hidden');
        });
