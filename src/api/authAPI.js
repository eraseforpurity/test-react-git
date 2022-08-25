export const loginWithGitHub = async (name) => {
  return fetch(`https://api.github.com/users/${name}`);
};
