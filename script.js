document.addEventListener('DOMContentLoaded', () => {
    const catForm = document.getElementById('catForm');
    const catsList = document.getElementById('catsList');

    catForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const catName = document.getElementById('catName').value;
        const catAge = document.getElementById('catAge').value;
        const catDescription = document.getElementById('catDescription').value;
        const catImage = document.getElementById('catImage').files[0];

        if (catImage) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const catCard = document.createElement('div');
                catCard.classList.add('cat-card');

                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = catName;

                const infoDiv = document.createElement('div');
                infoDiv.classList.add('cat-info');

                const nameHeading = document.createElement('h2');
                nameHeading.textContent = catName;
                const ageParagraph = document.createElement('p');
                ageParagraph.textContent = `Ålder: ${catAge} år`;
                const descriptionParagraph = document.createElement('p');
                descriptionParagraph.textContent = catDescription;

                infoDiv.appendChild(nameHeading);
                infoDiv.appendChild(ageParagraph);
                infoDiv.appendChild(descriptionParagraph);

                catCard.appendChild(img);
                catCard.appendChild(infoDiv);

                catsList.appendChild(catCard);

                // Clear form fields
                catForm.reset();
            };
            reader.readAsDataURL(catImage);
        }
    });
});
