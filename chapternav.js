// Simple chapter navigation
const currentChapter = parseInt(document.body.getAttribute("data-chapter"), 10);
const totalChapters = 1; // Change this when you add more chapters

function goToChapter(chapter) {
    window.location.href = `chapter${chapter}.html`;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentChapter > 1) goToChapter(currentChapter - 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentChapter < totalChapters) goToChapter(currentChapter + 1);
});
