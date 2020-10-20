---
title: "Deploy a gatsby site to github pages"
tags: ["Hello World"]
description: "999"
author: "Sourav Kulkarni"
date: "2020-10-18"
type: "Code"
---

---
#### Remove previous project(if any)
* Delete the branch where the project files are hosted  
* Delete all the deployment files  

In my case, I had used the **dev branch** of my repo to **host the code** and when I ran the deploy script, the **site was deployed on the master branch**.  

So I **deleted the entire dev branch using the Github UI**, and then **deleted all the files from the master branch** using the git command `git rm -r *`
<br/><br/><br/>

#### Install gh-pages package
`npm install gh-pages --save-dev`
<br/><br/><br/>

#### Add script to package.json
Add a deployment script to package.json :   
```
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master",
  },
``` 
<br/><br/>

#### Do git stuff : 
* `git init` : Initialize git in the project directory  
* `git checkout -b dev` : Checkout (new) branch 'dev'  
* `git remote add origin <url>` : Add remote repository    
(In my case the **url** was : https://github.com/Souruly/souruly.github.io.git)  
* `git add .` : Add files to git  
* `git commit -m "Initial Commit Message` : Give a commit message to the first commit  
* `git push origin dev` : Push your project files to the remote repository
<br/><br/><br/>

#### Deploy and see result : 
`npm run deploy`
<br/><br/><br/>

#### Steps for future deployments : 
After your first deployment, whenever you make any change to your project, just do the following steps to sync them up with the remote repo and to deploy the updated website.
* `git add .`
* `git commit -m "Commit Message`
* `git push origin dev`
* `npm run deploy`
<br/><br/><br/>