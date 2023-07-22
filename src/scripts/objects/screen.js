
const screen = {
  userProfile: document.querySelector('.profile-data'),

  renderUser(user) {
    let userInfo = `<div class="info">
                            <img src = "${user.avatarUrl}" alt = "foto do usuário"/>
                            <div class = "data">
                                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrada"}</p> 
                                <p> Seguidores: ${user.followers}</p>
                                <p> Seguindo: ${user.following}</p>
                            </div>
                        </div>
        `
    this.userProfile.innerHTML = userInfo

    let reposItens = ''

    user.repositories.forEach(repo => reposItens += `<li><a href="${repo.html_url}" target= "_blank">${repo.name}</a> <br> 
                                                        <div class="repos-itens">
                                                            <span>🍴: ${repo.forks_count ?? '?'}</span>
                                                            <span>⭐️: ${repo.stargazers_count ?? '?'}</span>
                                                            <span>👀: ${repo.watchers_count ?? '?'}</span>
                                                            <span>👨‍💻: ${repo.language ?? '?'}</span>
                                                        </div>
                                                      </li>`);

    if (user.repositories.length > 0) {

      this.userProfile.innerHTML += `<div class= "repositories section">
                                    <h2>Repositórios</h2>
                                     <ul>${reposItens}</ul>
                                   </div>
                                 `
    }




    let eventItens = '';


    user.events.forEach(event => {

      if (event.type === 'CreateEvent' || event.type === 'PusheEvent') {
        if (event.payload.commits) {
          eventItens += `<li><p>${event.repo.name} - ${event.payload.commits[0].message}</p></li>`
        } else if (event.type === 'CreateEvent') {
          eventItens += `<li><p>${event.repo.name} - ${event.payload.description}</p></li>`
        }
      }
    });

    if (reposItens) {

      this.userProfile.innerHTML += `<div class= "events section">
                                    <h2>Eventos</h2>
                                     <ul>${eventItens}</ul>
                                   </div>
                                 `
    }
  },

  rederNotFound() {
    this.userProfile.innerHTML += `<h3>Usuário não encontrado</h3>
     `
  }

}

export { screen }