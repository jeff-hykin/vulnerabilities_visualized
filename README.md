# What is this?

Ever want to explore software exploits (CVE), but didn't want your eyes to be murdered by [cvedetails.com](cvedetails.com)?<br>
Then this is the site for you.

# What's it look like?

Currently (as of Dec 2021) hosted [here (takes a good 10sec to load)](http://134.209.57.254:3000), although the site may come down eventually.

## Main view

This shows repositories, size = quantity of vulnerabilities.
<img width="1920" alt="main_view" src="https://user-images.githubusercontent.com/17692058/144728224-4791e8f7-7597-4d43-bcba-1d76d7907bb5.png">

## Repo View

Clicking a repo bubble will show stats for a particular repository
<img width="1920" alt="repo_view" src="https://user-images.githubusercontent.com/17692058/144728225-923a7e9d-871f-4ec9-96e2-c7bab99b5989.png">



# Setup the code for yourself

- Just run `repo=https://github.com/jeff-hykin/vulerabilities_visualized eval "$(curl -fsSL git.io/JE2Zm || wget -qO- git.io/JE2Zm)"`
- If you're on Windows, install WSL then run that ^ in WSL
- If you need more detail see `documentation/setup.md`
