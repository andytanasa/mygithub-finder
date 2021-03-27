class Github {
  constructor() {
    this.client_id = "c704e8621531b243894d";
    this.client_secret = "72c65b14d2ca1dd2ae5b952c3db7111db6dd29a7";
    this.repos_count = 5;
    this.repos_sort = "created asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
