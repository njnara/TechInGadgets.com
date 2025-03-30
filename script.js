document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#ff3300";
    });

    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#ff6600";
    });

    console.log("Website Loaded Successfully!");
});
