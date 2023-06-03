(() => {
    // ByReaper98 Si deseas agregar más imágenes, agrega el enlace y la URL de la imagen en la siguiente lista de arrays.
    const images_list = [
        {
            "url": "https://www.html-code-generator.com/images/slider/1.png",
            "alt": "",
            "name": "image 1",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/2.png",
            "alt": "",
            "name": "image 2",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/3.png",
            "alt": "",
            "name": "image 3",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/4.png",
            "alt": "",
            "name": "image 4",
            "link": ""
        },
        {
            "url": "https://www.html-code-generator.com/images/slider/5.png",
            "alt": "",
            "name": "image 5",
            "link": ""
        }
    ];


    let slider_id = document.querySelector("#hcg-slider-1");

    // Agregar todas las imágenes
    let dots_div = "";
    let images_div = "";
    for (let i = 0; i < images_list.length; i++) {
        // Si no hay un enlace, no se incluye la etiqueta href=""
        let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
        images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:flex"' : '') + '>' +
            '<span class="hcg-slide-number">' + (i + 1) + '/' + images_list.length + '</span>' +
            '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
            '<span class="hcg-slide-text">' + images_list[i].name + '</span>' +
            '</a>';
        dots_div += '<a href="#" class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></a>';
    }
    slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
    slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

    let slide_index = 0;

    const images = slider_id.querySelectorAll(".hcg-slides");
    const dots = slider_id.querySelectorAll(".hcg-slide-dot");
    const showSlides = () => {
        if (slide_index > images.length - 1) {
            slide_index = 0;
        }
        if (slide_index < 0) {
            slide_index = images.length - 1;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
            dots[i].classList.remove("dot-active");
            if (i == slide_index) {
                images[i].style.display = "flex";
                dots[i].classList.add("dot-active");
            }
        }
    }

    const dot_click = event => {
        event.preventDefault();
        slide_index = event.target.dataset.id;
        showSlides();
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", dot_click, false);
    }
    // Reproducción automática con setInterval es una función incorporada en JavaScript nene c;
    setInterval(() => {
        slide_index++;
        showSlides();
    }, 3000);
})();
