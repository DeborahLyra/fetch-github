
const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {
        let userInfo = `<div class="info">
                            <img src = "${user.avatarUrl}" alt = "foto do usuário"/>
                            <div class = "data">
                                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrada"}</p> 
                            </div>
                        </div>
        `                                         
        this.userProfile.innerHTML = userInfo

        let reposItens = '' 
        user.repositories.forEach(repo => reposItens += `<li><a href="${repo.html_url}" target= "_blank">${repo.name}</a></li>`);
        
      if(user.repositories.length > 0){

        this.userProfile.innerHTML += `<div class= "repositories section">
                                    <h2>Repositórios</h2>
                                     <ul>${reposItens}</ul>
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