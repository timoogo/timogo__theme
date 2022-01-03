console.log('hello mix');

let count = document.querySelector('[data-section_colored]');
let allCounts = document.querySelectorAll('[data-section_colored]');

// Check if an element has a data attribute
if (count.matches('[data-section_colored]')) {
	console.log('We have a match!');
}