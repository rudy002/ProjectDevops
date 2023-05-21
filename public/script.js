

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    clearErrors();

    // Récupère les valeurs des notes
    var grade1 = parseFloat(document.getElementById('grade1').value);
    var grade2 = parseFloat(document.getElementById('grade2').value);
    var grade3 = parseFloat(document.getElementById('grade3').value);

    // Effectue la validation et affiche les messages d'erreur si nécessaire
    if (isNaN(grade1) || grade1 < 0 || grade1 > 100) {
        showError('grade1', 'Incorrect grade. Must be between 0 and 100');
    }

    if (isNaN(grade2) || grade2 < 0 || grade2 > 100) {
        showError('grade2', 'Incorrect grade. Must be between 0 and 100');
    }

    if (isNaN(grade3) || grade3 < 0 || grade3 > 100) {
        showError('grade3', 'Incorrect grade. Must be between 0 and 100');
    }

    // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire
    if (!hasErrors()) {
        var studentData = { name: document.getElementById('student').value, grade1: grade1, grade2: grade2, grade3: grade3 };

        fetch('/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        })
        .then(function(response) {
            return response.json();
            console.log("response " + response);
        })
        .then(function(data) {
            console.log("data " + data);
        })
        .catch(function(error) {
            console.log("error " + error);
        });
        
    }
});




function showError(inputId, message) {
    var errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function(errorElement) {
        errorElement.textContent = '';
    });
}

function hasErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    for (var i = 0; i < errorElements.length; i++) {
        if (errorElements[i].textContent !== '') {
            return true;
        }
    }
    return false;
}

//
