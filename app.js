function calc1() {
  const n = parseFloat(document.getElementById("n1").value);
  const p = parseFloat(document.getElementById("p1").value);
  const r = (p / 100) * n;
  document.getElementById("r1").textContent = r;
}

function calc2() {
  const x = parseFloat(document.getElementById("x2").value);
  const y = parseFloat(document.getElementById("y2").value);
  const r = (x / y) * 100;
  document.getElementById("r2").textContent = r + "%";
}

function calc3() {
  const o = parseFloat(document.getElementById("old3").value);
  const n = parseFloat(document.getElementById("new3").value);
  const r = ((n - o) / o) * 100;
  document.getElementById("r3").textContent = r + "%";
}

function calc4() {
  const o = parseFloat(document.getElementById("old4").value);
  const n = parseFloat(document.getElementById("new4").value);
  const r = ((o - n) / o) * 100;
  document.getElementById("r4").textContent = r + "%";
}
