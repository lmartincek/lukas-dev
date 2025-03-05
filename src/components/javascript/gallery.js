document.addEventListener("DOMContentLoaded", () => {
    const galleryModal = document.createElement("div");
    galleryModal.classList.add(
        "fixed", "inset-0", "bg-black", "bg-opacity-90",
        "flex", "items-center", "justify-center", "opacity-0",
        "pointer-events-none", "transition-opacity", "duration-300",
        "transition", "duration-500", "ease-in-out"
    );

    galleryModal.innerHTML = `
    <div class="absolute inset-0"></div>
    <div class="relative">
      <div class="gallery-nav -top-12 sm:top-0 absolute w-full h-[50px] sm:bg-black sm:bg-opacity-40 z-20">
        <span class="gallery-counter absolute left-3 top-3 z-10 text-white text-lg m-0"></span>
        <button class="gallery-close absolute top-3 right-3 z-10 text-white text-opacity-75 text-lg transition duration-300 ease-in-out hover:text-opacity-100">✕</button>
      </div>
      <div class="relative flex items-center">
        <button class="prev absolute left-4 text-white text-opacity-75 text-xl transition duration-300 ease-in-out hover:text-opacity-100">◀</button>
            <img src="" alt="" class="max-w-screen max-h-screen object-contain">
        <button class="next absolute right-4 text-white text-opacity-75 text-xl transition duration-300 ease-in-out hover:text-opacity-100">▶</button>
      </div>
      <div class="gallery-footer -bottom-12 sm:bottom-0 absolute w-full h-[50px] sm:bg-black sm:bg-opacity-40 z-20">
        <span class="img-caption absolute top-3 z-10 text-white text-lg text-center w-full m-0"></span>
      </div>
    </div>
  `;

    document.body.appendChild(galleryModal);

    galleryModal.addEventListener("click", (event) => {
        // Close only if the clicked element is the background overlay (not the image or navigation buttons)
        if (event.target === galleryModal.querySelector(".absolute.inset-0")) {
            closeGallery();
        }
    });

    const closeButton = galleryModal.querySelector(".gallery-close");
    const prevButton = galleryModal.querySelector(".prev");
    const nextButton = galleryModal.querySelector(".next");
    const galleryImage = galleryModal.querySelector("img");

    const galleryImageCaption = galleryModal.querySelector(".img-caption");
    const galleryCounter = galleryModal.querySelector(".gallery-counter");

    let galleryImages = [];
    let currentIndex = 0;

    function updateImage() {
        if (galleryImages.length > 0) {
            galleryImage.src = galleryImages[currentIndex].src;
            galleryImageCaption.textContent = galleryImages[currentIndex].alt
            galleryCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
        }
    }

    const body = document.querySelector('body')
    function openGallery(index) {
        body.classList.add("overflow-hidden")

        currentIndex = index;
        updateImage();
        galleryModal.classList.add("opacity-100", "pointer-events-auto");
        galleryModal.classList.remove("opacity-0", "pointer-events-none");
        document.addEventListener("keydown", handleKeydown);
    }

    function closeGallery() {
        body.classList.remove("overflow-hidden")

        galleryModal.classList.remove("opacity-100", "pointer-events-auto");
        galleryModal.classList.add("opacity-0", "pointer-events-none");
        document.removeEventListener("keydown", handleKeydown);
    }

    function handleKeydown(event) {
        if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "ArrowLeft") {
            prevImage();
        } else if (event.key === "Escape") {
            closeGallery();
        }
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateImage();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateImage();
    }

    closeButton.addEventListener("click", closeGallery);
    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);


    // Get all images on the page for fullscreen gallery
    galleryImages = Array.from(document.querySelectorAll(".gallery-image, .carousel-image")).map(img => img);

    document.querySelectorAll(".gallery-image, .carousel-image").forEach((img, index) => {
        img.addEventListener("click", () => openGallery(index));
    });
});
