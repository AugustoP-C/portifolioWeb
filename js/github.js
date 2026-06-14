const USER = "AugustoP-C";

async function carregarGithub() {

  const usuario = await fetch(
    `https://api.github.com/users/${USER}`
  );

  const dadosUsuario = await usuario.json();

  document.getElementById("repoCount").textContent =
    dadosUsuario.public_repos;

  document.getElementById("followers").textContent =
    dadosUsuario.followers;

  document.getElementById("updated").textContent =
    new Date(dadosUsuario.updated_at).toLocaleDateString();

  const repos = await fetch(
    `https://api.github.com/users/${USER}/repos`
  );

  const listaRepos = await repos.json();

  const div = document.getElementById("repos");

  listaRepos.forEach(repo => {

    div.innerHTML += `
      <div class="repo">

        <h3>${repo.name}</h3>

        <p>${repo.description || "Sem descrição"}</p>

        <a href="${repo.html_url}" target="_blank">
          Ver Repositório
        </a>

      </div>
    `;
  });
}

carregarGithub();