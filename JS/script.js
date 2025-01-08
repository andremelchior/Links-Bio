function toggleMode() {
    const html = document.documentElement;

    const img = document.querySelector("#profile img");

    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add("light");
    // }

    html.classList.toggle("light");

    img.style.opacity = "0";

    setTimeout(() => {
        if (html.classList.contains("light")) {
            img.setAttribute("src", "Assets/avatar-light.png");
            img.setAttribute(
                "alt",
                "Foto de perfil de André Melchior do tema claro"
            );
        } else {
            img.setAttribute("src", "Assets/avatar.png");
            img.setAttribute(
                "alt",
                "Foto de perfil de André Melchior do tema escuro"
            );
        }

        // Restaura a opacidade para 1
        img.style.opacity = "1";
    }, 150);
}
