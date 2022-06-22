// hiệu ứng gạch chân của menu
window.addEventListener("load", function () {
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    function handleHoverLink(event) {
        console.log(event.target);
        const { left, top, width, height } = event.target.getBoundingClientRect();
        console.log({ left, top, width, height });
        const offsetTop = -37;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + offsetTop}px`;
    }
    const menu = document.querySelector(".a-menu");
    menu.addEventListener("mouseleave", function(){
        line.style.width = 0;
    })
});



 