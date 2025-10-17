// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
const themeToggleBtn = document.getElementById('themeToggle');

const themeIcon = document.getElementById('themeIcon');

const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
themeToggleBtn.addEventListener('click', toggleDarkMode);



// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    const darkModeFlag = body.classList.contains('dark-mode');
    updateIcon(darkModeFlag);


    // Optional: Save the current mode to localStorage
    // This is optional - try it after completing the basic functionality!
    // Your code here (optional):
    if (darkModeFlag) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    if (isDarkMode) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}


// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    const cachedMode = localStorage.getItem('mode');
    if (cachedMode === 'dark') {
        toggleDarkMode();
    }
    else {
        updateIcon(false);
    }

}

// Call the function when the page loads (uncomment when you implement it)
loadSavedTheme();
