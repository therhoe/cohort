(function () {
    document.addEventListener("DOMContentLoaded", function () {
        if (!window.location.pathname.includes('/products/')) return;

        let thingy = document.createElement("thingy-button");

        let script = document.createElement("script");
        script.type = "module";
        script.src = "https://start-indigo_coffee.toddle.site/.toddle/custom-element/thingy-button.js";

        thingy.appendChild(script);

        let target = document.querySelector(".product-form");
        if (target) {
            target.parentNode.insertBefore(thingy, target.nextSibling);
        } else {
            console.warn("Target element not found");
        }
    });
})();
