function addReadMore(selector, wordLimit = 20) {
    const elements = document.querySelectorAll(".selector");

    elements.forEach(el => {
        const words = el.textContent.trim().split(/\s+/);
        if (words.length > wordLimit) {
            const visibleText = words.slice(0, wordLimit).join(' ');
            const hiddenText = words.slice(wordLimit).join(' ');
            el.innerHTML = `
                ${visibleText}
                <span class="read-more-ellipsis">... </span>
                <span class="read-more-hidden" style="display:none;">${hiddenText}</span>
                <a href="#" class="read-more-link">Read more</a>
            `;

            el.querySelector('.read-more-link').addEventListener('click', function(e) {
                e.preventDefault();
                el.querySelector('.read-more-hidden').style.display = 'inline';
                el.querySelector('.read-more-ellipsis').style.display = 'none';
                this.style.display = 'none';
            });
        }
    });
}

// Usage example: addReadMore to all elements with class 'readmore'
document.addEventListener('DOMContentLoaded', function() {
    addReadMore('.readmore', 20);
});