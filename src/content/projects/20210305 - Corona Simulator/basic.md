---
title: "Simulating the spread of Covid-19"
tags: ["Epidemiology"]
description: "Interactive simulation of how diseases spread"
author: "Sourav Kulkarni"
date: "2020-03-17"
priority: "starred"
---

---
![Sim Initialize](./initial.png)

Inspired by <a href="https://youtu.be/gxAaO2rsdIs" target="_blank">this</a> beautiful video by <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" target="_blank">3Blue1Brown</a>, I tried making a simulation of the spread of Covid-19.

<a href="https://souruly.github.io/P5-Playground/Corona_Spread_Simulation/index.html" target="_blank">Link to Sim</a>

Please open this link in a new tab and read along.

Each circle represents a person moving randomly through space, and each collision counts as a contact. As people come into contact with each other, the disease spreads through the population.

![Sim Start](./started.png)
Now as you can see, some people are getting infected(<font color="#ff007f">red</font>) while most are still safe(<font color="#85db25">green</font>).

We assume that the vaccine is going to be invented at some point of time. After which, people start getting vaccinated(circles randomly turn blue).

![Sim Start](./middle.png)
Once all paramenters are set, we start the simulation and take a look how the virus spreads, how many people get vaccinated(<font color="#3399ff">blue</font>), how many people would never even come in contact with the virus(still <font color="#85db25">green</font>) and how many people would unfortunately die(hollow circle).
