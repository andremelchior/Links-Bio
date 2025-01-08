function toggleMode() {
    const html = document.documentElement;

    const img = document.querySelector("#profile img");

    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add("light");
    // }

    html.classList.toggle("light");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "../Assets/avatar-light.png");
    } else {
        img.setAttribute("src", "../Assets/avatar.png");
    }

    if (html.classList.contains("light")) {
        img.setAttribute(
            "alt",
            "Foto de perfil de André Melchior do tema claro"
        );
    } else {
        img.setAttribute(
            "alt",
            "Foto de perfil de André Melchior do tema escuro"
        );
    }
}
