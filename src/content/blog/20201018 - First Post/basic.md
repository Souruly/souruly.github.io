---
title: "First Post"
tags: ["Hello World"]
description: "999"
author: "Sourav Kulkarni"
date: "2020-10-18"
---

---
# *Publishing React Site to Github pages* 
<br/>  

### How to publish your Gatsby starter site to your github page :

1. **Install github pages plugin:**  
    `npm install gh-pages --save-dev`  
    <br/>
2. **Making changes to gatsby-config.json:**    
    Add the following script to package.json :  
     `"deploy": "gatsby build && gh-pages -d public -b master"`  
    <br/>
3. **Git branches:**   
    Create a new local `dev` branch and a remote `dev` branch  
    We shall use this branch to keep all the source code while we keep the master branch to host the website.  
    <br/>
    Make a local branch:  
    `git branch dev`  
    <br/>
    Make a new remote branch:  
    `git remote add origin https://github.com/Souruly/souruly.github.io`  
    <br/>

    Add remote branch:  
    `git checkout -b dev`  
    <br/>

    Push to origin  
    `git push origin dev`  
    <br/>  
4. **Deploying to your github page :  ___.github.io:**  
    When you are done making changes to your code, add them to git: `git add .`  
    <br/>
    Commit changes : `git commit -m "Commit message"`  
    <br/>
    Push Changes : `git push origin dev`  
    <br/>
    Deploy : `npm run deploy`  
<br/>    
<br/>
<br/>
<br/>

---
