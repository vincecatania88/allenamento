let countdownInterval;

  function startTimer(seconds) {
    clearInterval(countdownInterval);
    let timeLeft = seconds;

    const displayTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const remainingSeconds = timeLeft % 60;
      document.getElementById('timer-display').innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    countdownInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer-display').innerHTML = "Riprendi!";
      } else {
        displayTimer();
        timeLeft--;
      }
    }, 1000);

    displayTimer();
  }
