import { getUser } from "/src/scripts/services/user.js";
import { getRepos } from "/src/scripts/services/repos.js";
import { user } from "/src/scripts/objects/user.js";
import { screen } from "./objects/screen.js";



const btn = document.querySelector('#btn-search');
const input = document.querySelector('#input-search')

btn.addEventListener('click', () => {
    if (input.value.length === 0) {
        alert('Preencha o campo')
        return
    }
    getUserData(input.value)
})

input.addEventListener('keyup', e => {
    const userName = e.target.value;

    if (e.keyCode === 13) {
        if (input.value.length === 0) {
            alert('Preencha o campo')
            return
        }
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)
  
    if(userResponse.message === 'Not Found'){   //vê se o usuário existe
        screen.rederNotFound()
        return
    }

    const reposResponse = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepos(reposResponse)

    screen.renderUser(user)
}


