function calc1() {
  const n = parseFloat(document.getElementById("n1").value);
  const p = parseFloat(document.getElementById("p1").value);
  document.getElementById("r1").textContent = ((p / 100) * n);
}

function calc2() {
  const x = parseFloat(document.getElementById("x2").value);
  const y = parseFloat(document.getElementById("y2").value);
  document.getElementById("r2").textContent = ((x / y) * 100) + "%";
}

function calc3() {
  const o = parseFloat(document.getElementById("old3").value);
  const n = parseFloat(document.getElementById("new3").value);
  document.getElementById("r3").textContent = (((n - o) / o) * 100) + "%";
}

function calc4() {
  const o = parseFloat(document.getElementById("old4").value);
  const n = parseFloat(document.getElementById("new4").value);
  document.getElementById("r4").textContent = (((o - n) / o) * 100) + "%";
}
