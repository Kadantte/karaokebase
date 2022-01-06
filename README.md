﻿[Version en français plus bas](#French version)

![Badge](https://img.shields.io/github/last-commit/AxelTerizaki/karaokebase.svg)
![Badge](https://img.shields.io/github/tag/AxelTerizaki/karaokebase.svg)
![Badge](https://img.shields.io/github/repo-size/AxelTerizaki/karaokebase.svg) ![Discord](https://img.shields.io/discord/84245347336982528.svg)

[![Creative Commons](https://img.shields.io/badge/License-Creative%20Commons%204.0%20BY--NC--SA-brightgreen.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

# English version

## Karaoke Mugen database

This is the git repository for the [Karaoke Mugen](http://karaokes.moe) karaoke database. It is to be used with the software found at the site linked just now, but you can also use it freely for your own purposes. See [our license](LICENSE.md) for more information.

## Format

A karaoke is made of the following elements :

* A `.kara.json` file in the `karaokes` folder
* A `.ass` file in the `lyrics` folder
* A video or audio file in the `medias` folder
* One or more `.tag.json` files in the `tags` folder

### `karaokes` folder

This folder holds files with karaoke metadata such as video file, lyrics file, etc. It uses the standard JSON format.

Example :
```JSON
{
  "header": {
    "version": 4,
    "description": "Karaoke Mugen Karaoke Data File"
  },
  "medias": [
    {
      "version": "Default",
      "filename": "ENG - DAICON IV - MV - Twilight.mp4",
      "audiogain": -5.61,
      "filesize": 62384194,
      "duration": 264,
      "default": true,
      "lyrics": [
        {
          "filename": "ENG - DAICON IV - MV - Twilight.ass",
          "default": true,
          "version": "Default",
          "subchecksum": "365637bcf398feb256f78773c75d81d9"
        }
      ]
    }
  ],
  "data": {
    "created_at": "Wed Oct 11 2017 19:03:04 GMT+0200 (GMT+02:00)",
    "kid": "17d535bd-101b-4ffc-836d-e26774bbb1b5",
    "modified_at": "Fri Mar 15 2019 11:19:17 GMT+0100 (GMT+01:00)",
    "repository": "kara.moe",
    "tags": {
      "authors": [
        "1df04771-a378-4f14-a5e1-1455187d681a"
      ],
      "creators": [
        "0cf8c590-19cd-413a-902c-fb18f44fc385"
      ],
      "families": [
        "0377db02-3af6-43b8-9b08-c759df3d25c3"
      ],
      "groups": [
        "7792cc27-9ff9-4d47-9287-2338b7db1575",
        "f5e7d2fc-0cbb-4fb9-a84a-b25dfb0e9e77"
      ],
      "langs": [
        "de5eda1c-5fb3-46a6-9606-d4554fc5a1d6"
      ],
      "misc": [
        "fe819ff1-9db8-4a0f-85dc-0e322c9126c4"
      ],
      "singers": [
        "d4f256fc-ad8d-4df6-8602-94e12300f935"
      ],
      "songtypes": [
        "7be1b15c-cff8-4b37-a649-5c90f3d569a9"
      ],
      "songwriters": [
        "d4f256fc-ad8d-4df6-8602-94e12300f935"
      ]
    },
    "title": "Twilight",
    "year": 1983
  }
}
```

For more information, read the [.kara.json format documentation](http://docs.karaokes.moe/en/dev-guide/kara-content/).

### `lyrics` folder

This folder contains the subtitles files as specified in the `.kara.json` file.

It is generally a `.ass` file made with Aegisub. See [the contribution guide](CONTRIBUTING.md) for a more detailed tutorial on how to write good karaokes.

### `medias` folder

This folder contains the video or audio file as specified in the `.kara.json` file.

Videos aren't included in this git repository or else it'd be way too huge (about several hundred gigabytes at the moment). You can launch `UpdateMedias.cmd` on Windows or `UpdateMedias.sh` on macOS/Linux to get the latest version of the `medias` folder via rsync from the Shelter server.

Launch the update script each time you pull/clone/download a new version of this repository to make sure the `medias` folder is in sync with the `.kara.json` files you just downloaded.

**If you get errors from Karaoke Mugen during database generation / folder validation, make sure you have the latest version of the repository (`git pull` or downloaded latest `master.zip`) and that you ran the `UpdateMedias` script at least twice in a row.**

### `series` folder

Contains series.json files for backward compatibility with Karaoke Mugen <3.3

### `tags` folder

A song has many tags defining its metadata, like singers, songwriters, creators, genres, etc. These are used by the search engine.

```JSON
{
  "header": {
    "description": "Karaoke Mugen Tag File",
    "version": 1
  },
  "tag": {
    "i18n": {
      "eng": "Video Game",
      "fre": "Jeu Vidéo"
    },
    "name": "Video Game",
    "tid": "dbedd6b3-d125-4cd8-aa32-c4175e4ca3a3",
    "types": [
      "families"
    ],
    "short": "VG"
  }
}
```

## I want to contribute and make some karaoke or send ones I already own

See [the contribution guide](CONTRIBUTING.md) for more information on how you can help.

## Can I use this freely?

More or less, yes. See [the license](LICENSE.md) for more details.

---

# French version

## Base de données des karaokés de Karaoke Mugen

Ceci est la base de données des times de [Karaoke Mugen](http://karaokes.moe).

## Format d'un time

Un karaoké Karaoke Mugen est composé de ces éléments rangés dans des dossiers

* Un fichier `.kara.json` dans le dossier `karas`
* Un fichier `.ass` dans le dossier `lyrics`
* Un fichier vidéo ou audio dans le dossier `medias`
* Des fichiers `.tag.json` dans le dossier `tags`

### Dossier `karas`

Ce dossier regroupe les fichiers qui contiennent les informations permettant d'afficher le karaoké dans la liste des chansons de Karaoke Mugen.

Exemple :
```JSON
{
  "header": {
    "version": 4,
    "description": "Karaoke Mugen Karaoke Data File"
  },
  "medias": [
    {
      "version": "Default",
      "filename": "ENG - DAICON IV - MV - Twilight.mp4",
      "audiogain": -5.61,
      "filesize": 62384194,
      "duration": 264,
      "default": true,
      "lyrics": [
        {
          "filename": "ENG - DAICON IV - MV - Twilight.ass",
          "default": true,
          "version": "Default",
          "subchecksum": "365637bcf398feb256f78773c75d81d9"
        }
      ]
    }
  ],
  "data": {
    "created_at": "Wed Oct 11 2017 19:03:04 GMT+0200 (GMT+02:00)",
    "kid": "17d535bd-101b-4ffc-836d-e26774bbb1b5",
    "modified_at": "Fri Mar 15 2019 11:19:17 GMT+0100 (GMT+01:00)",
    "repository": "kara.moe",
    "tags": {
      "authors": [
        "1df04771-a378-4f14-a5e1-1455187d681a"
      ],
      "creators": [
        "0cf8c590-19cd-413a-902c-fb18f44fc385"
      ],
      "families": [
        "0377db02-3af6-43b8-9b08-c759df3d25c3"
      ],
      "groups": [
        "7792cc27-9ff9-4d47-9287-2338b7db1575",
        "f5e7d2fc-0cbb-4fb9-a84a-b25dfb0e9e77"
      ],
      "langs": [
        "de5eda1c-5fb3-46a6-9606-d4554fc5a1d6"
      ],
      "misc": [
        "fe819ff1-9db8-4a0f-85dc-0e322c9126c4"
      ],
      "singers": [
        "d4f256fc-ad8d-4df6-8602-94e12300f935"
      ],
      "songtypes": [
        "7be1b15c-cff8-4b37-a649-5c90f3d569a9"
      ],
      "songwriters": [
        "d4f256fc-ad8d-4df6-8602-94e12300f935"
      ]
    },
    "title": "Twilight",
    "year": 1983
  }
}
```

Pour plus d'informations, consultez la [documentation sur le format](https://docs.karaokes.moe/fr/dev-guide/kara-content/)

### Dossier `lyrics`

Contient le fichier de sous-titres tel que spécifié dans le .kara.json

Il s'agit d'un .ass généralement crée via Aegissub. Voyez [le guide de contribution](CONTRIBUTING.md) pour des tutoriels sur comment faire de bons karaokés dans ce format.

### Dossier `medias`

Contient le fichier de vidéo ou d'audio tel que spécifié dans le .kara.json

Les vidéos ne sont pas fournies dans ce dépôt, par souci de place (et ça ferait un dépôt de plusieurs centaines de Go au bas mot). Vous pouvez néanmoins lancer `UpdateMedias.cmd` (Windows) ou `UpdateMedias.sh` (OSX/Linux) pour récupérer les vidéos par rsync depuis le serveur Shelter.

Pensez à lancer régulièrement ce script, parfois deux fois de suite pour vous assurer que tout a bien été récupéré. Le dossier de vidéos colle à la dernière version de la base.

**Si vous rencontrez des erreurs de Karaoke Mugen durant la génération de la base / la validation des dossiers, assurez-vous que vous avez bien la dernière version de ce dépôt (`git pull` ou téléchargez le dernier `master.zip`) et lancez le script `UpdateMedias` deux fois d'affilée pour être sûr.**

### Dossier `series`

Dossier contenant des fichiers series.json pour rétrocompatibilité avec Karaoke Mugen <3.3

### Dossier `tags`

Un karaoké est relié à différents fichiers tags qui le définissent. Chanteurs, compositeurs, genres, créateurs, tout est dans un fichier tag dédié comme celui-ci :

```JSON
{
  "header": {
    "description": "Karaoke Mugen Tag File",
    "version": 1
  },
  "tag": {
    "i18n": {
      "eng": "Video Game",
      "fre": "Jeu Vidéo"
    },
    "name": "Video Game",
    "tid": "dbedd6b3-d125-4cd8-aa32-c4175e4ca3a3",
    "types": [
      "families"
    ],
    "short": "VG"
  }
}
```

## Je veux aider et faire ou envoyer des karaokes a la base

Lisez [le guide de contribution](CONTRIBUTING.md) pour savoir comment faire et trouver de l'aide.

## Puis-je utiliser tout ça gratuitement ?

Plus ou moins. Voir [la license d'utilisation](LICENSE.md)

