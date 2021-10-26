const inputs = document.querySelectorAll("input");
const tim = document.querySelector("#dynamic-time");
const sendpin = document.querySelector("#resendPincode");
const confirmPincode = document.querySelector("#confirmPin");
const backPage = document.querySelector("#goBackPage");

class PinCodeManager {
  constructor() {
    this.countDown = 40;
    this.tempInterval = this.countDown;
    this.startCountDown();
  }
  on(ev, callback) {
    switch (ev) {
      case "change":
        inputs.forEach((el, i) => {
          el.addEventListener("keyup", (input) => callback(input, inputs, i));
        });
        break;
      case "resend_ready":
        break;
    }
  }
  render(time, cb) {
    cb();
    this.time = countdown;
  }

  setCountDown(count) {
    this.countDown = count;
  }

  startCountDown() {
    if (this.tempInterval !== this.countDown) {
      return;
    } else if (!this.tempInterval) {
      this.tempInterval = this.countDown;
    }
    const time = setInterval(() => {
      if (this.tempInterval === 0) {
        clearInterval(time);
        return;
      }
      tim.innerHTML = `(${--this.tempInterval})`;
    }, 1000);
  }
}

const pinCode = new PinCodeManager();

pinCode.on("change", (digit, inputs, index) => {
  var cont = document.getElementsByName("form-cont")[0];
  const nextSibiling = inputs[++index];
  if (!nextSibiling) {
  } else {
    nextSibiling.focus();
  }
  if (digit.key < 48 || digit.key > 57) {
    console.log("digit is " + digit.key);
  } else {
    cont.reset();
    cont[0].focus();
  }
});

pinCode.on("resend_ready", (countDown, time) => {
  if (time <= 0) {
    clearInterval(time);
    console.log("resend is ready");
  }
});

function reset() {
  pinCode.startCountDown();
}

function resendPin() {
  this.countDown = 40;
  this.tempInterval = this.countDown;
  if (this.tempInterval !== this.countDown) {
    return;
  } else if (!this.tempInterval) {
    this.tempInterval = this.countDown;
  }
  const time = setInterval(() => {
    if (this.tempInterval === 0) {
      clearInterval(time);
      return;
    }
    tim.innerHTML = `(${--this.tempInterval})`;
  }, 1000);
}
