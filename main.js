//hide and show screens with dom

document.getElementById("link-about").addEventListener("click", ( ) => {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "visible";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("cv").style.visibility = "hidden";
    document.getElementById("footer-section").style.visibility = "visible";
});

document.getElementById("link-skills").addEventListener("click", () =>  {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("skills").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("cv").style.visibility = "hidden";
    document.getElementById("footer-section").style.display = "block";

});

document.getElementById("link-projects").addEventListener("click", ( ) => {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("cv").style.visibility = "hidden";
    document.getElementById("footer-section").style.display = "block";
});

    document.getElementById("link-cv").addEventListener("click", ( ) => {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("cv").style.visibility = "visible";
    document.getElementById("cv-link").style.display = "block";
    document.getElementById("certificades-links").style.display = "block";
    document.getElementById("footer-section").style.display = "block";
    console.log("hola")
});

document.getElementById("cv-link").addEventListener("click", ( ) => {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("cv-img").style.display = "block";
    document.getElementById("certificades-links").style.display = "none";
    document.getElementById("footer-section").style.display = "block";
    console.log("hola carambola")
});

document.getElementById("certificades-links").addEventListener("click", ( ) => {
    document.getElementById("links-certificates").style.display = "block";
    document.getElementById("cv-link").style.display = "none"; 
    console.log("hola hola");

});

document.getElementById("link-contact").addEventListener("click", ( ) => {
    document.getElementById("section-header").style.visibility = "visible";
    document.getElementById("about").style.visibility = "hidden";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("cv").style.visibility = "hidden";
    document.getElementById("footer-section").style.display = "block";

})