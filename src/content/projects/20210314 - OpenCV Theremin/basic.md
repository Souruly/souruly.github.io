---
title: "OpenCV Theremin"
tags: ["Entertainment"]
description: "Theremin based on OpenCV Blop Detection"
author: "Sourav Kulkarni"
date: "2017-11-14"
priority: "starred"
---

---

<a href="https://github.com/Souruly/Processing-Projects/tree/main/PS3%20Move%20Controller%20Theremin/Theremin3" target="_blank">Link to Project Repo</a>

A <a href="https://en.wikipedia.org/wiki/Theremin" target="_blank">Theremin</a> is an instrument which is played basically by (waving your hands in the air (of course in a precise. controlled manner). <a href="https://youtu.be/K6KbEnGnymk" target="_blank">Example</a>.

There are two variables involved : the volume and the pitch. One hadn controls the volume (horizontal) and one hand controls the pitch(vertical)

In this project. I used a PS3 Eye camera, the PS3 Move Controller and OpenCV Blob detection to replicate this instrument. The PS3 Move Controller as a sphereical bulb on it's head which glows in several bright colors. The camera captures the live feed with the glowing controller in frame. OpenCV then processes each frame for blob detection and then locates the glowing ball with respect to the frame coordinates. Based on this, location(x,y), the pitch and the volume is decided and thereby a particular frequency(musical note) is played.

---

<u>**PS(14th March 2021)**</u> : <br>
Unfortunately I don't have any images for this project.

If anyone wants to play around with the code and make/suggest some changes, it is available on github.