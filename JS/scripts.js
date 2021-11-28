console.log("JS activated");

//identification boutons et sections à afficher
const OCTitle= document.getElementById("OCTitle");
const OC= document.getElementById("OC");
const proTitle= document.getElementById("proTitle");
const pro= document.getElementById("pro");
const formationsTitle= document.getElementById("formationsTitle");
const formations= document.getElementById("formations");

//variables d'affichage
let displayedOC = true
let displayedPro = true
let displayedFormations = true


OCTitle.addEventListener("click",selectOC);
proTitle.addEventListener("click",selectPro);
formationsTitle.addEventListener("click",selectFormations);

function selectOC()
{
    displayedOC = displaySection(OC,displayedOC);
    console.log("displayedOC", displayedOC)
}

function selectPro()
{
    displayedPro = displaySection(pro,displayedPro);
}

function selectFormations()
{
    displayedFormations = displaySection(formations,displayedFormations);
    console.log("formations selected");
}

function hideAllSections()
{
    console.log("hiding");
    OC.classList.toggle("d-none",true);
    pro.classList.toggle("d-none",true);
    formations.classList.toggle("d-none",true);
    displayedOC = false
    displayedPro = false
    displayedFormations = false
}

function displaySection(section,displayed)
{   
    
    console.log(section, "affichage avant", displayed);

    if (displayed=== false)
    {
    section.classList.toggle("d-none",false);
    console.log(section, "affichage après", displayed);
    return true;
    }

    else if (displayed=== true)
    {
        hideAllSections()
        section.classList.toggle("d-none",true);
        console.log(section, "affichage après", displayed);
        return false;
    }

}

//enlever les images pour la version pdf
// Pour supprimer les images mettre removeImage sur true, pour capture en pdf utiliser https://www.sejda.com/fr/html-to-pdf, zoom 35%
const removeImage = false;

const imgsToRemove = document.getElementsByClassName("card-img-top");
const ArrayToRemove = Object.values(imgsToRemove);
console.log("ArraytoRemove:",ArrayToRemove)

if (removeImage == true)
    {
        ArrayToRemove.forEach(element => {
            element.classList.add("d-none");
        });
    }