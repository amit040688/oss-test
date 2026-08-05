$(document).ready(function() {
   // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     $('.slider').owlCarousel({
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 2,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });





    $(".read-more-content").hide();

    $(".choose-header .btn-primary").click(function () {

        $(".read-more-content").slideToggle(400);

        if ($(this).text().trim() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

    });

     $('.test-slider').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     $('.exclusive').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            }
        }
    });



    $(".about .read-more-content").hide();

    $(".about .btn-primary").click(function () {

        $(this).siblings(".read-more-content").slideToggle(400);

        if ($(this).text().trim() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

    });


    $(".dropdown").click(function(){
        $("body").toggleClass("active");
    });



});

const container = document.getElementById("propertyList");


document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // FILTER SELECT BOXES
    // ==============================
    const filterBox = document.querySelector(".search-container");

    if (!filterBox) {
        console.error("Search container not found!");
        return;
    }

    const selects = filterBox.querySelectorAll("select");

    const genderFilter = selects[0];
    const locationFilter = selects[1];
    const priceFilter = selects[2];


    // ==============================
    // GET ALL REAL PROPERTY CARDS
    // ==============================
    function getCards() {

        return Array.from(document.querySelectorAll(".main-hose"))
            .filter(function (card) {

                // Empty/demo cards ko ignore karega
                return card.querySelector(".house-main h2");

            });
    }


    // ==============================
    // GET PROPERTY DATA
    // ==============================
    function getPropertyData(card) {

        // Property location
        const locationElement = card.querySelector(".house-main p");

        const location = locationElement
            ? locationElement.textContent.trim().toLowerCase()
            : "";


        // Gender
        const genderElement = card.querySelector(".gender");

        let gender = "";

        if (genderElement) {

            const genderImage = genderElement.querySelector("img");

            if (genderImage && genderImage.alt) {

                gender = genderImage.alt.trim().toLowerCase();

            } else {

                gender = genderElement.textContent.trim().toLowerCase();

            }

        }


        // All prices
        const priceElements = card.querySelectorAll(".space-item strong");

        let prices = [];

        priceElements.forEach(function (priceElement) {

            const priceText = priceElement.textContent
                .replace(/[₹,\s]/g, "")
                .replace("/mo", "");

            const price = parseInt(priceText);

            if (!isNaN(price)) {
                prices.push(price);
            }

        });


        // Lowest available price
        let lowestPrice = prices.length
            ? Math.min(...prices)
            : 999999999;


        return {
            gender: gender,
            location: location,
            price: lowestPrice
        };

    }


    // ==============================
    // MAIN FILTER FUNCTION
    // ==============================
    function applyFilter() {

        const selectedGender = genderFilter.value
            .trim()
            .toLowerCase();

        const selectedLocation = locationFilter.value
            .trim()
            .toLowerCase();

        const selectedPrice = priceFilter.value;


        let cards = getCards();


        // ==============================
        // FILTER GENDER + LOCATION
        // ==============================
        cards.forEach(function (card) {

            const data = getPropertyData(card);

            let genderMatch = true;
            let locationMatch = true;


            // Gender filter
            if (selectedGender !== "") {

                genderMatch = data.gender === selectedGender;

            }


            // Location filter
            if (
                selectedLocation !== "" &&
                selectedLocation !== "all"
            ) {

                locationMatch =
                    data.location === selectedLocation;

            }


            // Show / Hide
            if (genderMatch && locationMatch) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });


        // ==============================
        // PRICE SORTING
        // ==============================
        if (
            selectedPrice === "low-to-high" ||
            selectedPrice === "high-to-low"
        ) {

            cards.sort(function (cardA, cardB) {

                const priceA = getPropertyData(cardA).price;
                const priceB = getPropertyData(cardB).price;


                if (selectedPrice === "low-to-high") {

                    return priceA - priceB;

                } else {

                    return priceB - priceA;

                }

            });


            // Reorder cards
            cards.forEach(function (card) {

                card.parentNode.appendChild(card);

            });

        }

    }


    // ==============================
    // EVENTS
    // ==============================

    genderFilter.addEventListener("change", function () {

        applyFilter();

    });


    locationFilter.addEventListener("change", function () {

        applyFilter();

    });


    priceFilter.addEventListener("change", function () {

        applyFilter();

    });


    // Initial load
    applyFilter();

});
