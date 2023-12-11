window.location.href = 'google.com';
alert('Hello! This script has executed.');
 const gifUrl = "https://02ip.ru/2gYyz4";
    const imgElement = document.createElement("img");
    imgElement.src = gifUrl;
    imgElement.alt = "GIF Image";

    // Set the styles to make the image occupy the maximum space
    const gifContainer = document.getElementById("gif-container");
    gifContainer.style.width = "100vw";
    gifContainer.style.height = "100vh";
    gifContainer.style.margin = "0";
    gifContainer.style.padding = "0";
    gifContainer.style.overflow = "hidden";

    imgElement.style.width = "100%";
    imgElement.style.height = "100%";
    imgElement.style.objectFit = "contain";

    // Append the image element to the container
    gifContainer.appendChild(imgElement);
