import "./style.css";

async function loadData() {
  const res = await fetch("/api/hello");
  const data = await res.json();

  let app = document.getElementById("app");
  if (app == null) return;

  app.textContent = data.message;
}

document.addEventListener("DOMContentLoaded", loadData);
