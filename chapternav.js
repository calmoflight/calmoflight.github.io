// chapternav.js
// Change only THIS value when you add new chapters
const totalChapters = 400;

// Automatically generate chapter links
function generateChapterLinks(currentChapter) {
    const navContainer = document.getElementById("chapter-navigation");
    if (!navContainer) return;

    let html = "";

    if (currentChapter > 1) {
        html += `<a href="chapter${currentChapter - 1}.html" class="chapter-link">⬅ Previous</a>`;
    }

    if (currentChapter < totalChapters) {
        html += `<a href="chapter${currentChapter + 1}.html" class="chapter-link">Next ➡</a>`;
    }

    navContainer.innerHTML = html;
}
