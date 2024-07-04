const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
    }
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('dragover');
    if (event.dataTransfer.files.length > 0) {
        handleFile(event.dataTransfer.files[0]);
    }
});

function handleFile(file) {
    const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedExtensions.includes(fileExtension)) {
        alert('Invalid file type. Only PDF, JPG, JPEG, and PNG are allowed.');
        fileInput.value = '';
        return;
    }

    if (file.size > maxSize) {
        alert('File is too large. Maximum size is 5MB.');
        fileInput.value = '';
        return;
    }

    dropZone.textContent = file.name;
}

uploadForm.addEventListener('submit', (event) => {
    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        event.preventDefault();
    }
});
