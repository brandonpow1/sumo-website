# Sumo Website
[![.github/workflows/pages.yml](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml)

## Installation
before starting, please install the following programs:
- [node](https://nodejs.org)
- [ruby](https://www.ruby-lang.org)

for ease of use, also install:
- [vs code](https://code.visualstudio.com/)
- tailwind extension inside vscode

to get working for the first time:
- clone repo
- open a terminal in the repo folder (in vscode: open folder > sumo-website > terminal > new terminal)
- `bundle install` (installs jekyll, webrick and all the required ruby gems)
- `npm install` (installs tailwind, flowbite and all the nodejs dependencies)
- to start editing, `bundle exec jekyll serve --livereload`
-- a message should print saying `server address: http://127.0.0.1:4000` or another address. hold ctrl and click on it to open in a browser.
- every commit refreshes the webpage on github pages using the [.yml workflow in the .github/workflows folder](.github/workflows/pages.yml). allow for one minute after commiting for changes to be reflected. check the actions tab if it fails.

## Adding a New Blog Post
- all blog posts sit in the `_posts` folder. add a new file using the format `<yyyy>-<mm>-<dd>-<title>.md`, for example `2022-01-01-happy-new-year.md`.
- inside every blog post, fill out the front matter (the text in between the dashed lines):
```
---
layout: post
title: New Website!
author: rydrako
---
```
- most times only title and author need to be edited.
- the text inside every blog post uses markdown formatting, please check the [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) for more info.

## Further Reading
- [jekyll](https://jekyllrb.com/)
- [tailwind v3](https://tailwindcss.com/)
- [flowbite](https://flowbite.com)
