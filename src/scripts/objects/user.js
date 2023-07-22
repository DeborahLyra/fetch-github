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
    },

     setEvents(gitEvents) {
         this.events = gitEvents;
     }
}

export { user }