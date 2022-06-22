class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.daysSpanRef = document.querySelector(
      `${selector} [data-value="days"]`
    );
    this.hoursSpanRef = document.querySelector(
      `${selector} [data-value="hours"]`
    );
    this.minsSpanRef = document.querySelector(
      ` ${selector} [data-value="mins"]`
    );
    this.secsSpanRef = document.querySelector(
      `${selector} [data-value="secs"]`
      );
      this.updateTimer()
  }

  updateTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((delta % (1000 * 60)) / 1000);
      this.daysSpanRef.textContent = days;
      this.hoursSpanRef.textContent = hours;
      this.minsSpanRef.textContent = mins;
      this.secsSpanRef.textContent = secs;
    }, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 1, 2022"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jul 31, 2022"),
});

const timer3 = new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date("Jul 17, 2022"),
});


