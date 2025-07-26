---
layout: "../../layouts/BlogLayout.astro"
title: "git reset cheatsheet"
publishDate: "04/29/25"
topic: "programming"
---
staging is changes that you have added with `git add`

workingdir is changes that you have not added with `git add`

```sh
git reset --soft [commit]
```
make the branch point to that commit
- commit = reset
- staging = same
- workingdir = same

```sh
git reset --mixed [commit]
```
(this is the default)
make the branch point to that commit, and reset the staging area
- commit = reset
- staging = reset
- workingdir = same

```sh
git reset --hard [commit]
```
make the branch point to that commit, and reset everything, including ***working directory***
- commit = reset
- staging = reset
- workingdir = reset
