fetch("./data/version.json")
.then(r => r.json())
.then(data => {

  document.getElementById("version").innerHTML = `
    <p>Versão: ${data.version}</p>
    <p>Data: ${data.date}</p>
  `;
});