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
        // tim.forEach((call) => {
        //   call.addEventListener("keyup", (special) => callback(tim, inputs));
        // });
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
      // if (this.tempInterval === 0) {
      //   break;
      // }
      // console.log(this.tempInterval);
      tim.innerHTML = `(${--this.tempInterval})`;
    }, 1000);
  }
}

const pinCode = new PinCodeManager();

pinCode.on("change", (digit, inputs, index) => {
  var cont = document.getElementsByName("form-cont")[0];
  const nextSibiling = inputs[++index];
  if (!nextSibiling) {
    // window.alert("Pincode Submited");
    // cont.reset();
    // cont[0].focus();
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

// pinCode.render(time, () => {});

function reset() {
  pinCode.startCountDown();
}
function Confirmation() {
  // pinCode.on(cont.reset());
  // window.alert("your pincode has submitted");
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

function goBack() {}

// function confirmPincode() {
//   window.alert("back b");
// }

// class PinCodePro {
//   constructor() {
//     this.pinCode = new PinCodeManager(document.querySelectorAll("input"));
//   }
//   inputDigit(e) {
//     this.pinCode.on("change", (data) => console.log(data));
//   }
//   deleteDigit(e) {
//     console.log("delete digit");
//     console.log(e.target);
//   }
//   countdown() {
//     if (timer === 0) {
//       console.log("resend is ready");
//     }
//   }
// }

// const pinCodeManager = new PinCodeManager();

// const inputs = document.querySelectorAll("input");
// const codeBlock = document.getElementById("code-block");
// const code = document.getElementById("code");
// const form = document.querySelector("form");

// inputs.forEach((input, key) => {
//   if (key !== 0) {
//     input.addEventListener("click", function () {
//       inputs[0].focus();
//     });
//   }
// input.addEventListener("keyup", function () {
//   pinCodePro.deleteDigit();
//   if (input.value) {
//     if (key === 3) {
//       // Last one tadaa
//       const userCode = [...inputs].map((input) => input.value).join("");
//       codeBlock.classList.remove("hidden");
//       code.innerText = userCode;
//     } else {
//       inputs[key + 1].focus();
//     }
//   }
// });
// });

// const inputs = document.querySelectorAll("input");
// const codeBlock = document.getElementById("code-block");
// const code = document.getElementById("code");
// const form = document.querySelector("form");

// inputs.forEach((input, key) => {
//   if (key !== 0) {
//     input.addEventListener("click", function () {
//       inputs[0].focus();
//     });
//   }
//   input.addEventListener("keyup", function () {
//     if (input.value) {
//       if (key === 3) {
//         // Last one tadaa
//         const userCode = [...inputs].map((input) => input.value).join("");
//         codeBlock.classList.remove("hidden");
//         code.innerText = userCode;
//       } else {
//         inputs[key + 1].focus();
//       }
//     }
//   });
// });

// const reset = () => {
//   form.reset();
//   codeBlock.classList.add("hidden");
//   code.innerText = "";
// };
