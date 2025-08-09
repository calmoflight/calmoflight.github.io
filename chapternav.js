// Change this ONE number when you add a new chapter
const totalChapters = 400;  

// Current chapter detection (based on the file name)
const currentChapter = parseInt(window.location.pathname.match(/chapter(\d+)\.html$/)?.[1] || "1");

// Navigation logic
const prevChapter = currentChapter > 1 ? `chapter${currentChapter - 1}.html` : null;
const nextChapter = currentChapter < totalChapters ? `chapter${currentChapter + 1}.html` : null;

// Inject nav buttons
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("chapter-nav");
  if (!nav) return;

  if (prevChapter) {
    const prevBtn = document.createElement("a");
    prevBtn.href = prevChapter;
    prevBtn.textContent = "⬅ Previous";
    nav.appendChild(prevBtn);
  }

  if (nextChapter) {
    const nextBtn = document.createElement("a");
    nextBtn.href = nextChapter;
    nextBtn.textContent = "Next ➡";
    nav.appendChild(nextBtn);
  }
});
