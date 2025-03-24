document.addEventListener("DOMContentLoaded", function() {
    console.log("Page Loaded Successfully!");

    const videos = document.querySelectorAll(".fade-in");
    
    function checkScroll() {
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                video.style.opacity = "1";
                video.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
