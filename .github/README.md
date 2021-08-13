# Jenkins Utility Server

[![authors](https://img.shields.io/badge/authors-scott%20meesseman-6F02B5.svg?logo=visual%20studio%20code)](https://www.littlesm.com)
[![app-category](https://img.shields.io/badge/category-jenkins%20plugins-blue.svg)](https://github.com/spmeesseman/jenkins-mantisbt-plugin)
[![app-lang](https://img.shields.io/badge/language-javascript-blue.svg)](https://github.com/spmeesseman/jenkins-mantisbt-plugin)
[![app-publisher](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-app--publisher-e10000.svg)](https://github.com/spmeesseman/app-publisher)
[![PayPalDonate](https://img.shields.io/badge/paypal-donate-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YWZXT3KE2L4BA&item_name=taskexplorer&currency_code=USD)

[![GitHub issues open](https://img.shields.io/github/issues-raw/spmeesseman/jenkins%2dutility%2dserver.svg?logo=github)](https://github.com/spmeesseman/jenkins-mantisbt-plugin/issues)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/spmeesseman/jenkins%2dutility%2dserver.svg?logo=github)](https://github.com/spmeesseman/jenkins-mantisbt-plugin/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/spmeesseman/jenkins%2dutility%2dserver.svg?logo=github)](https://github.com/spmeesseman/jenkins-mantisbt-plugin/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/spmeesseman/jenkins%2dutility%2dserver.svg?logo=github)](https://github.com/spmeesseman/jenkins-mantisbt-plugin)

- [Jenkins Utility Server](#jenkins-utility-server)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Run the Server](#run-the-server)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Endpoints - /openfile](#endpoints---openfile)
  - [License Information](#license-information)
  - [Open Source Projects](#open-source-projects)

## Introduction

Jenkins Utility Server is a HTTP server that runs on a Jenkins node, that can serve user interface tasks via a pipeline script using a simple HTTP request.

At the time of this writing and for the initial release, only one task is supported - "open file in notepad".

## Requirements

Jenkins HTTP Request Plugin

## Installation

To install `Jenkins Utility Server` from a command line, run the following command:

    npm install -g @spmeesseman/jenkins-utility-server

## Run the Server

Run the `Jenkins Utility Server` from a command line using the following command:

    jenkins-utility-server

By default, the bound port number is 4322.  To change the bound port number, use the following command:

    jenkins-utility-server --port 6000

## Usage

Simply add a request to a pipeline script invoking `httpRequest` on the appropriate endpoint, for example:

    steps {
      echo "Jenkins-utility-server: Send request to open changelog in Notepad"
      def jsonEncWs = WORKSPACE.replace("\\", "\\\\")
      def bodyJson = "{\"path\": \"${jsonEncWs}\\\\CHANGELOG.md\", \"token\": \"${env.JENKINS_UTILITY_SERVER_TOKEN}\"}"
      httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: bodyJson, url: "http://localhost:4322/openfile"
    }

## Endpoints

Endpoints are called by sending a request to the server with the following address format:

    http://localhost:portnumber/endpointname

At the time of this writing and for the initial release, only one task is supported - "open file in notepad".

### Endpoints - /openfile

Usage:

    steps {
      echo "Jenkins-utility-server: Send request to open changelog in Notepad"
      def jsonEncWs = WORKSPACE.replace("\\", "\\\\")
      def bodyJson = "{\"path\": \"${jsonEncWs}\\\\CHANGELOG.md\", \"token\": \"${env.JENKINS_UTILITY_SERVER_TOKEN}\"}"
      httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: bodyJson, url: "http://localhost:4322/openfile"
    }

## License Information

Licensed under MIT, see the [LICENSE](LICENSE.md)

## Open Source Projects

|Package|Use Case|Repository|Marketplace|
|-|-|-|-|
|app-publisher|Release Automation / CI|[GitHub](https://www.npmjs.com/package/@spmeesseman/app-publisher)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/app-publisher)|
|arg-parser|Node Argument Parser|[GitHub](https://github.com/spmeesseman/arg-parser)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/arg-parser)|
|code-package|Code Dev Environment|[GitHub](https://github.com/spmeesseman/code-package)|[GitHub Releases](https://github.com/spmeesseman/code-package/releases)|
|env-ci|CI ENvironment Detection|[GitHub](https://github.com/spmeesseman/env-ci)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/env-ci)|
|extjs-pkg-filterbar|ExtJS Grid Filter Bar|[GitHub](https://github.com/spmeesseman/extjs-pkg-filterbar)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-filterbar)|
|extjs-pkg-fontawesome|ExtJS FontAwesome Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-fontawesome)|
|extjs-pkg-fontawesome-pro|ExtJS FontAwesome Pro Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-fontawesome-pro)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/@spmeesseman/extjs-pkg-fontawesome-pro)|
|extjs-pkg-intltelinput|ExtJS IntlTelInput Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-intltelinput)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-intltelinput)|
|extjs-pkg-mantis|ExtJS MantisBT Integration|[GitHub](https://github.com/spmeesseman/extjs-pkg-mantis)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-mantis)|
|extjs-pkg-plyr|ExtJS Plyr Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-plyr)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-plyr)|
|extjs-pkg-tinymce|ExtJS TinyMCE Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-tinymce)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-tinymce)|
|extjs-pkg-websocket|ExtJS WebSocket Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-websocket)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-websocket)|
|extjs-pkg-webworker|ExtJS WebWorker Wrapper|[GitHub](https://github.com/spmeesseman/extjs-pkg-webworker)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-pkg-webworker)|
|extjs-theme-graphite-small|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-graphite-small)|[Npmjs.org Private Registry](https://www.npmjs.com/package/@spmeesseman/@spmeesseman/extjs-theme-graphite-small)|
|extjs-theme-amethyst|ExtJS Purple Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-amethyst)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-amethyst)|
|extjs-theme-emerald|ExtJS Green Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-emerald)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-emerald)|
|extjs-theme-ruby|ExtJS Red Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-ruby)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-ruby)|
|extjs-theme-ruby-dark|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-ruby-dark)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-ruby-dark)|
|extjs-theme-turquoise|ExtJS Blue Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-turquoise)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-turquoise)|
|extjs-theme-turquoise-dark|ExtJS Dark Theme|[GitHub](https://github.com/spmeesseman/extjs-theme-turquoise-dark)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/extjs-theme-turquoise-dark)|
|jenkins-mantisbt-plugin|Jenkins MantisBT Integration|[GitHub](https://github.com/spmeesseman/jenkins-mantisbt-plugin)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/jenkins-mantisbt-plugin)|
|jenkins-utility-server|Jenkins Desktop Server|[GitHub](https://github.com/spmeesseman/jenkins-utility-server)|[Npmjs.org Registry](https://www.npmjs.com/package/@spmeesseman/jenkins-utility-server)|
|mantisbt|MantisBT Custom Site|[GitHub](https://github.com/spmeesseman/mantisbt)|[GitHub Releases](https://github.com/spmeesseman/mantisbt/releases)|
|ApiExtend|MantisBT API Extensions|[GitHub](https://github.com/mantisbt-plugins/ApiExtend)|[GitHub Releases](https://github.com/mantisbt-plugins/ApiExtend/releases)|
|CommitReact|MantisBT Post Commit Actions|[GitHub](https://github.com/mantisbt-plugins/CommitReact)|[GitHub Releases](https://github.com/mantisbt-plugins/CommitReact/releases)|
|GanttChart|MantisBT Gantt Chart|[GitHub](https://github.com/mantisbt-plugins/GanttChart)|[GitHub Releases](https://github.com/mantisbt-plugins/GanttChart/releases)|
|IFramed|MantisBT IFramed Pages|[GitHub](https://github.com/mantisbt-plugins/IFramed)|[GitHub Releases](https://github.com/mantisbt-plugins/IFramed/releases)|
|ProjectPages|MantisBT Custom Nav Buttons|[GitHub](https://github.com/mantisbt-plugins/ProjectPages)|[GitHub Releases](https://github.com/mantisbt-plugins/ProjectPages/releases)|
|Releases|MantisBT Releases Management|[GitHub](https://github.com/mantisbt-plugins/Releases)|[GitHub Releases](https://github.com/mantisbt-plugins/Releases/releases)|
|SecurityExtend|MantisBT SPAM Filter|[GitHub](https://github.com/mantisbt-plugins/SecurityExtend)|[GitHub Releases](https://github.com/mantisbt-plugins/SecurityExtend/releases)|
|ServerFiles|MantisBT Server File Editor|[GitHub](https://github.com/mantisbt-plugins/ServerFiles)|[GitHub Releases](https://github.com/mantisbt-plugins/ServerFiles/releases)|
|svn-scm-ext|VSCode SVN Extension|[GitHub](https://github.com/spmeesseman/svn-scm-ext)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.svn-scm-ext)|
|vscode-extjs|VSCode ExtJS Intellisense|[GitHub](https://github.com/spmeesseman/vscode-extjs)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-extjs)|
|vscode-taskexplorer|VSCode Tasks Management|[GitHub](https://github.com/spmeesseman/vscode-taskexplorer)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-taskexplorer)|
|vscode-vslauncher|VSCode VS Project Launcher|[GitHub](https://github.com/spmeesseman/vscode-vslauncher)|[Visual Studio Marketplace](https://marketplace.visualstudio.com/itemdetails?itemName=spmeesseman.vscode-vslauncher)|
