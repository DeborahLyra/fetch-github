const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    repoName: '',
    events: [],
    forks: '',
    stars: '', 
    watchers:'',
    language:'',

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },

    setRepos(gitHubRepos) {
        this.repoName = gitHubRepos.full_name;
        this.repositories = gitHubRepos;
        this.forks = gitHubRepos.forks_count;
        this.stars = gitHubRepos.stargazers_count;
        this.watchers = gitHubRepos.watchers_count;
        this.language = gitHubRepos.language;
    },

     setEvents(gitEvents) {
         this.events = gitEvents;
     }
}

export { user }