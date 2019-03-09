# Setup

After bootstrapping this project, there are a few more things that need to be done:

1. Create a remote GitHub project
2. Add project to Travis
3. Add project to Codacy
4. Add project to GreenKeeper
5. Add project to Codecov
6. Add project to Snyk
7. Configure an NPM access token

## Add project to Travis

### Configure GitHub access token

To have semantic release and doc deployments, we need to GitHub access right. This can be configured by the following steps:

**Step 1:**

Get a Personal Access Token under https://github.com/settings/tokens

Only enable "public_repo" access for public repositories, "repo" for private.

Save the token somewhere as you can only see it once.

**Step 2:**

On the Travis settings for the repository `https://travis-ci.org/<me>/<myrepo>/settings` create an environment variable:

`GITHUB_API_KEY=<token>`
`GITHUB_TOKEN=<token>`
and make sure to mark "Display value in build log" as "Off".

This is safe because only authorized pushes by you see such environment variables, so if a malicious user tries to make a pull request to get your string, the variable won't be there.

Just make sure that you never, ever list your environment variables on your build!


## Add project to Codacy

**Step 1:**

From the get the codacy project token project settings.
CODACY_PROJECT_TOKEN

**Step 2:**

On the Travis settings for the repository `https://travis-ci.org/<me>/<myrepo>/settings` create an environment variable:

`CODACY_PROJECT_TOKEN=<token>`
and make sure to mark "Display value in build log" as "Off".



## Configure an NPM access token

In order to have automatice semantic releases, we need to have an NPM access token.

**Step 1:**

https://docs.npmjs.com/creating-and-viewing-authentication-tokens

**Step 2:**

On the Travis settings for the repository `https://travis-ci.org/<me>/<myrepo>/settings` create an environment variable:

`NPM_TOKEN=<token>`
and make sure to mark "Display value in build log" as "Off".