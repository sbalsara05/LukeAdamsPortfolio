document.addEventListener("DOMContentLoaded", function() {
    const images = [

        { src: "./images/IMG_2673.jpeg", category: "featured" },
        { src: "./images/IMG_2676.jpeg", category: "featured" },
        { src: "./images/IMG_4872.jpeg", category: "featured" },
        { src: "./images/IMG_6779.jpeg", category: "featured" },


        { src: "./images/IMG_4210.jpeg", category: "sunsets"},
        { src: "./images/IMG_4563.jpeg", category: "sunsets" },

        { src: "./images/IMG_2278.jpeg", category: "cars" },
        { src: "./images/IMG_4192.jpeg", category: "cars" },
        { src: "./images/IMG_6150.jpeg", category: "cars" },
        { src: "./images/IMG_2425.jpeg", category: "cars" },
        { src: "./images/CAR - 1.jpeg", category: "cars" },
        { src: "./images/CAR -2.jpeg", category: "cars" },

        { src: "./images/IMG_2673.jpeg", category: "sunsets" },
        { src: "./images/IMG_2676.jpeg", category: "sunsets" },
        { src: "./images/IMG_4872.jpeg", category: "sunsets" },
        { src: "./images/IMG_6779.jpeg", category: "sunsets" },

        { src: "./images/IMG_2081.jpeg", category: "sunrises" },
        { src: "./images/IMG_2219.jpeg", category: "sunrises" },
        { src: "./images/IMG_2083.jpeg", category: "sunrises" },
        { src: "./images/IMG_6190.jpeg", category: "sunrises" },

        { src: "./images/IMG_6305.jpeg", category: "cities" },
        { src: "./images/IMG_6236.jpeg", category: "cities" },
        { src: "./images/IMG_5117.jpeg", category: "cities" },
        { src: "./images/IMG_2219.jpeg", category: "cities" },

        { src: "./images/IMG_5314.jpeg", category: "towns" },
        { src: "./images/IMG_5302.jpeg", category: "towns" },
        { src: "./images/IMG_5231.jpeg", category: "towns" },
        { src: "./images/IMG_4441.jpeg", category: "towns" },


    ];

    const filterOptions = ["Featured", "Cars", "Sunrises", "Sunsets", "Cities" ,"Towns"];
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