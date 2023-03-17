import { GithubUser, UserRepository } from '@shared/api/github/types';
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

const getRepositories = (username: string): Promise<UserRepository[]> => {
  return octokit
    .request(`GET /users/${username}/repos`, {
      username,
    })
    .then((res) => res.data);
};

export const githubApi = {
  getUser,
  getRepositories,
};
