// Prevents the default right-click menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    // alert("Right-click is disabled.");
});
// Prevents F12 key or Ctrl+Shift+I or Ctrl+Shift+I or Ctrl+Shift+J
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) {
        e.preventDefault();
        // alert("Developer tools are disabled.");
    }
});
// Block certain key combinations for the right-click menu on certain browsers
document.addEventListener('keydown', function (e) {
    // Ctrl+U (View source), Ctrl+Shift+I (Inspect), F12 (Developer Tools)
    if (e.ctrlKey && (e.keyCode === 85 || (e.shiftKey && e.keyCode === 73))) {
        e.preventDefault();
        // alert("Opening developer tools or source view is disabled.");
    }
});
// For some browsers like Chrome, you can use `beforeunload` to make it harder to inspect via menu:
window.onbeforeunload = function () {
    // alert("Don't use developer tools! It's not allowed.");
};