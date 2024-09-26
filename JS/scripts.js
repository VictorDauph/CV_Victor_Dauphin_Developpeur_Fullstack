console.log("JS activated");

document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("pdf-button").addEventListener("click", function () {
        // Faire défiler la fenêtre vers le coin supérieur gauche
        window.scrollTo(0, 0);
        var element = document.getElementById("cv-content"); // L'élément contenant ton CV


        // Forcer un reflow en manipulant le style
        element.style.display = 'none'; // Cachez l'élément
        void element.offsetHeight; // Forcez un reflow
        element.style.display = ''; // Montrez à nouveau l'élément
        
        // Utiliser html2canvas pour obtenir les dimensions de l'élément
        html2canvas(element, { scale: 2 }).then(function(canvas) { // Augmentez le scale si nécessaire
            var imgData = canvas.toDataURL('image/jpeg');
            
            // Accéder à jsPDF à partir de l'objet window
            const { jsPDF } = window.jspdf; // Assurez-vous d'accéder correctement à jsPDF

            // Récupérez la largeur et la hauteur de l'élément
            var imgWidth = canvas.width;
            var imgHeight = canvas.height;

            // Créez le PDF avec la largeur et la hauteur de l'image
            var pdf = new jsPDF({
                unit: 'pt',
                format: [imgWidth, imgHeight], // Définir la taille selon l'image
                orientation: 'portrait'
            });

            // Ajoutez l'image en prenant en compte la largeur de la page
            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight); // Remplir le PDF avec l'image de l'élément
            pdf.save('long-page.pdf'); // Sauvegarder le PDF
        });
    }); 
});
