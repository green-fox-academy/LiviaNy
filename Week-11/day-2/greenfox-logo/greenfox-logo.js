//   Select left and right eyes
//   They have #left-eye and #right-eye
//   turn their color (fill) to tomato

const leftEye = document.getElementById(`left-eye`);
console.log(leftEye);
const rightEye = document.getElementById(`right-eye`);
leftEye.setAttribute(`fill`, `tomato`);
rightEye.setAttribute(`fill`, `tomato`);
