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
