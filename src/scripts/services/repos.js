import { baseUrl, reposQuantity } from '/src/scripts/variables.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQuantity}`);
    return await response.json()
}

export { getRepos }
