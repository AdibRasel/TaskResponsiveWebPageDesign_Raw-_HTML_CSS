
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














//  ======================== Countdown Start ===============================

function getNextMonthFirstDate() {
    const now = new Date();
    const nextMonth = now.getMonth() + 1;
    const year = now.getFullYear() + (nextMonth > 11 ? 1 : 0); 
    const month = (nextMonth) % 12; 
    return new Date(year, month, 1, 0, 0, 0); 
  }

  function updateCountdown() {
    const endDate = getNextMonthFirstDate();
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
//  ======================== Countdown End ===============================
