import { GithubUser } from '@shared/api/github/types';
import { GITHUB_TOKEN } from '@shared/config';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const getUser = async (username: string): Promise<GithubUser> => {
  return await octokit
    .request(`GET /users/${username}`, {
      username,
    })
    .then((res) => res.data);
};

export const githubApi = {
  getUser,
};
