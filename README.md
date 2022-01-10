# Karaoke Mugen Otaku database

![Badge](https://img.shields.io/github/last-commit/AxelTerizaki/karaokebase.svg)
![Badge](https://img.shields.io/github/tag/AxelTerizaki/karaokebase.svg)
![Badge](https://img.shields.io/github/repo-size/AxelTerizaki/karaokebase.svg) ![Discord](https://img.shields.io/discord/84245347336982528.svg)

[![Creative Commons](https://img.shields.io/badge/License-Creative%20Commons%204.0%20BY--NC--SA-brightgreen.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

This is the git repository for the [Karaoke Mugen](http://karaokes.moe) karaoke database. It is to be used with the software found at the site linked just now, but you can also use it freely for your own purposes. See [our license](LICENSE.md) for more information.

## Format

A karaoke is made of the following elements :

* A `.kara.json` file in the `karaokes` folder
* A `.ass` file in the `lyrics` folder
* A video or audio file in the `medias` folder
* One or more `.tag.json` files in the `tags` folder
* Optionally `.hook.yml` files in the `hooks` folder for tag automation when creating/editing songs in the app

### `karaokes` folder

This folder holds files with karaoke metadata such as video file, lyrics file, etc. It uses the standard JSON format.

### `lyrics` folder

This folder contains the subtitles files as specified in the `.kara.json` file.

It is generally a `.ass` file made with Aegisub. See [the contribution guide](CONTRIBUTING.md) for a more detailed tutorial on how to write good karaokes.

### `medias` folder

This folder contains the video or audio file as specified in the `.kara.json` file.

Videos aren't included in this git repository or else it'd be way too huge (about several hundred gigabytes at the moment). KM will take care of these for you.

**If you get errors from Karaoke Mugen during database generation / folder validation, make sure you have the latest version of the repository (`git pull` or downloaded latest `master.zip`).**

### `tags` folder

A song has many tags defining its metadata, like singers, songwriters, creators, genres, etc. These are used by the search engine.

## I want to contribute and make some karaoke or send ones I already own

See [the contribution guide](CONTRIBUTING.md) for more information on how you can help.

## Can I use this freely?

More or less, yes. See [the license](LICENSE.md) for more details.

