// Chargement de jQuery
var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
jqueryScript.integrity = 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo';
jqueryScript.crossOrigin = 'anonymous';
document.head.appendChild(jqueryScript);

// Chargement de Popper.js
var popperScript = document.createElement('script');
popperScript.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js';
popperScript.integrity = 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1';
popperScript.crossOrigin = 'anonymous';
document.head.appendChild(popperScript);

// Chargement de Bootstrap JavaScript
var bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
bootstrapScript.integrity = 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM';
bootstrapScript.crossOrigin = 'anonymous';

document.head.appendChild(bootstrapScript);

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
        e.target.submit();
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
