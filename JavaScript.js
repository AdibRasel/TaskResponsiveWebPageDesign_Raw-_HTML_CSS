
// ====================== DropDown Start ==================
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('open');

        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('open');
            }
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => dropdown.classList.remove('open'));
    }
});
// ====================== DropDown End ==================



