document.addEventListener("DOMContentLoaded", function() {
    const images = [

        { src: "./images/LukeAdamPhotos/IMG_3282.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_5483.JPG", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_7139.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_7428.JPG", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_7587.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_7632.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8059.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8510.JPG", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8515.JPG", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8582.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8660.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8697.jpg", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8132.JPG", category: "portrait" },
        { src: "./images/LukeAdamPhotos/IMG_8925.jpg", category: "portrait" },



        { src: "./images/LukeAdamPhotos/FullSizeRender.jpg", category: "designs"},
        { src: "./images/LukeAdamPhotos/IMG_5149.JPG", category: "designs" },
        { src: "./images/LukeAdamPhotos/IMG_5480.JPG", category: "designs"},
        { src: "./images/LukeAdamPhotos/IMG_7579.jpg", category: "designs" },
        { src: "./images/LukeAdamPhotos/IMG_8132.JPG", category: "designs" },
        { src: "./images/LukeAdamPhotos/IMG_8513.JPG", category: "designs" },
        { src: "./images/LukeAdamPhotos/IMG_8514.JPG", category: "designs"},
        // { src: "./images/LukeAdamPhotos/IMG_8580.JPG", category: "designs" },
        { src:"./images/LukeAdamPhotos/lukeadams9_15.JPEG", category: "designs" },
        { src: "./images/LukeAdamPhotos/DovesandCrowsLukeAdams.jpg", category: "designs" },



        { src: "./images/LukeAdamPhotos/IMG_7079.JPG", category: "patterns" },
        { src: "./images/LukeAdamPhotos/IMG_7486.JPG", category: "patterns" },
        { src: "./images/LukeAdamPhotos/IMG_7833.JPG", category: "patterns" },
        { src: "./images/LukeAdamPhotos/IMG_8141.JPG", category: "patterns" },
        { src: "./images/LukeAdamPhotos/IMG_8401.JPG", category: "patterns" },

        { src: "./images/LukeAdamPhotos/IMG_7824.JPG", category: "patterns"},

        { src: "./images/LukeAdamPhotos/IMG_6665.PNG", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6640.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6644.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6647.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6649.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6655.jpeg", category: "photography" },

        { src: "./images/LukeAdamPhotos/IMG_6659.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6660.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6662.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_6664.jpeg", category: "photography" },

        { src: "./images/LukeAdamPhotos/IMG_8204.jpeg", category: "photography"},
        { src: "./images/LukeAdamPhotos/IMG_8580.jpeg", category: "photography" },
        { src: "./images/LukeAdamPhotos/IMG_8559.jpeg", category: "photography"},
        { src: "./images/LukeAdamPhotos/IMG_8847.jpeg", category: "photography" },



        // { src: "./images/IMG_2081.jpeg", category: "sunrises" },
        // { src: "./images/IMG_2219.jpeg", category: "sunrises" },
        // { src: "./images/IMG_2083.jpeg", category: "sunrises" },
        // { src: "./images/IMG_6190.jpeg", category: "sunrises" },
        //
        // { src: "./images/IMG_6305.jpeg", category: "cities" },
        // { src: "./images/IMG_6236.jpeg", category: "cities" },
        // { src: "./images/IMG_5117.jpeg", category: "cities" },
        // { src: "./images/IMG_2219.jpeg", category: "cities" },
        //
        // { src: "./images/IMG_5314.jpeg", category: "towns" },
        // { src: "./images/IMG_5302.jpeg", category: "towns" },
        // { src: "./images/IMG_5231.jpeg", category: "towns" },
        // { src: "./images/IMG_4441.jpeg", category: "towns" },


    ];

    const filterOptions = ["All", "Portraits", "Designs", "Patterns","Photography"];
    const imageGrid = document.getElementById("imageGrid");
    const filterList = document.getElementById("filter");

    // Generate filter options
    filterList.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "LI") {
            // Remove active class from all buttons
            const buttons = filterList.getElementsByTagName("li");
            for (let button of buttons) {
                button.classList.remove("active");
            }
            // Add active class to the clicked button
            target.classList.add("active");
            // Filter images based on the selected category
            filterImages(target.getAttribute("data-filter"));
        }
    });

    // Display one featured image from each category initially
    displayFeaturedImages(images);

    // Function to filter images
    function filterImages(category) {
        const filteredImages = category === ".all" ? images : images.filter(image => image.category === category.slice(1));
        displayImages(filteredImages);
    }


    // Function to display images
    function displayImages(images) {
        imageGrid.innerHTML = "";
        images.forEach(image => {
            const div = document.createElement("div");
            div.classList.add("image");
            div.classList.add(image.category);
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = "";
            div.appendChild(img);
            imageGrid.appendChild(div);
        });
    }
});