window.location.href = 'google.com';
alert('Hello! This script has executed.');

// Create a new image element
const gifImage = document.createElement('img');

// Set the source (URL) of the GIF
gifImage.src = 'https://02ip.ru/2gYyz4';
// Replace 'https://www.example.com/your-gif-url.gif' with the actual URL of your GIF

// Set any additional attributes if needed
gifImage.alt = 'GIF Image'; // Add alt text for accessibility

// Set styles to make the image occupy the maximum available space
gifImage.style.width = '100vw';
gifImage.style.height = '100vh';
gifImage.style.objectFit = 'contain';

// Hide the scroll bars by setting overflow to hidden
document.body.style.overflow = 'hidden';

// Append the image element to the body of the document
document.body.appendChild(gifImage);
