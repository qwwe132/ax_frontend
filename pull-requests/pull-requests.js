window.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".publish_box button");
    console.log(elements);
    for (el of elements) {
        el.addEventListener("click", function() {
            const icon = el.querySelector("i");
            console.log(icon);
            if (!icon) return;

            if (icon.classList.contains("rotate")) {
            // 닫는 로직 
                icon.classList.remove("rotate");
            } else {
                 icon.classList.add("rotate");
               
               
                // 여는 로직
            }
        });
       
    }
});