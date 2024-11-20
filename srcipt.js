const targetDate = new Date('2025-01-01T00:00:00');

function updateCountdown() {
  const currentDate = new Date();

  if (currentDate > targetDate) {
    document.getElementById('countdown').textContent = 'Countdown has ended.';
    return;
  }

  const timeDifference = targetDate - currentDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();