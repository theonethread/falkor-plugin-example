# **Falkor Plugin Example**

Example [`@falkor/falkor-commander`](https://www.npmjs.com/package/@falkor/falkor-commander "Visit") plugin to demonstrate framework capabilities, and to serve as boilerplate for personal projects.

> _**NOTE:** The `master` branch holds compatible version with already released packages, while the `develop` branch holds a version currently developed along with latest unreleased sources of packages._

## **Usage**

Clone the repository's **master** branch, then run the following commands in the root directory:

```
$ npm install
$ npm run [ debug | release ]
```

The [`@falkor/falkor-commander`](https://www.npmjs.com/package/@falkor/falkor-commander "Visit") module is an optional dependency of plugins, it is not necessary to install it during development, but as a development feature one can test their work-in-progress projects running it from the root of a directory that is a `@falkor-plugin` under development:

```
$ npm install --no-save "@falkor/falkor-commander"
$ npm start
```

> _**NOTE:** Since `npm` v7 optional dependencies will also be installed when running `npm install`._

> _**NOTE:** To pass arguments to a local installation of `falkor-commander` one has to use the double dash POSIX separator twice (since first occurrence will be consumed by `npm` itself while parsing arguments) to pass extra positional arguments to be treated as buffered answers:_

```
$ npm start -- <options>... <buffered-tasks>... -- <buffered-answers>...
```

### **Configuration**

The [`@falkor/falkor-library`](https://www.npmjs.com/package/@falkor/falkor-library "Visit") looks for shared configurations in the Current Working Directory from where `falkor-commander` was executed (files could be named `.falkorrc`, `.ops.json`, `.ops.jsonc`, `falkor.json`, or `falkor.jsonc` - whichever is found first).

To see all available settings, and example plugin customizations check out the big [`.ops.jsonc`](https://github.com/theonethread/falkor-plugin-example/blob/develop/.ops.jsonc "Open") file provided as an example.

## **Demonstration**

Have a look at our first [video](https://www.youtube.com/watch?v=Spny53X3I7M "Visit") demonstrating the above workflow:

[![Demonstration Video](https://img.youtube.com/vi/Spny53X3I7M/mqdefault.jpg)](https://www.youtube.com/watch?v=Spny53X3I7M "Visit")

## **Plugin Requirements**

* Plugins should comply to [`@falkor/falkor-bundler`](https://www.npmjs.com/package/@falkor/falkor-bundler "Visit") requirements.
* Valid plugins' default exports should be one single -, or an array of `falkor.Task` instance(s).
* Currently `falkor-commander` searches for plugins under the `@falkor` scope by default (with module resolution similar to Node.js').
    * This can be customized running `falkor-commander` with the `-s` or `--scope` argument.
* Valid plugins' `package.json` must contain the keyword `@falkor-plugin` by default.
    * This can be customized running `falkor-commander`  with the `-k` or `--keyword` argument.

> _**SEE:** [`package.json`](https://github.com/theonethread/falkor-plugin-example/blob/develop/package.json "Open") and [`index.ts`](https://github.com/theonethread/falkor-plugin-example/blob/develop/src/index.ts "Open") for further reference._

## **Further Development**

The project uses the [`@falkor/falkor-bundler`](https://www.npmjs.com/package/@falkor/falkor-bundler "Visit") module to compile sources. One can use the commands in the root directory after cloning the repository:

```
$ npm install
$ npm run [ debug | release ]
```

### **Versioning and Branching Strategy**

Release sources can be found on the `master` branch, this one always points to the latest tagged release. Previous sources of releases' can be found using Git version tags (or browsing GitHub releases). Released packages can be found on [npmjs](https://www.npmjs.com/package/@falkor/falkor-plugin-example "Visit").

The repository's main branch is `develop` (due to technical reasons), this holds all developments that are already decided to be included in the next release. Usually this branch is ahead of master one patch version (but based on upcoming features to include this can become minor, or major), so prepared external links may yet be broken.

The `feature/*` branches usually hold ideas and POC code, these will only be merged into `develop` once their impact measured and quality meets release requirements.

> _The project uses [SemVer](https://semver.org "Visit"), Git tags are prefixed with a `v` character._

### **GitHub Actions**

The workflow can be found [here](https://github.com/theonethread/falkor-plugin-example/blob/develop/.github/workflows "Open").

#### **Continuous Integration**

Automatic builds are achieved via GitHub actions, CI will make nightly builds of the `develop` branch (using Ubuntu image).

### **Security**

The project uses [CodeQL](https://codeql.github.com "Visit") and [Snyk](https://snyk.io "Visit") to ensure standard security.

> _The **Falkor Framework** supports a healthy and ubiquitous Internet Immune System enabled by security research, reporting, and disclosure. Check out our [Vulnerability Disclosure Policy](https://github.com/theonethread/falkor-plugin-example/security/policy "Open") - based on [disclose.io](https://disclose.io "Visit")'s best practices._

### **Free and Open Source**

The latest sources can always be found on [GitHub](https://github.com/theonethread/falkor-plugin-example "Visit").

#### **Getting Involved**

We believe - and we hope you do too - that learning how to code, how to think, and how to contribute to free- and open source software can empower the next generation of coders and creators. We **value** first time contributors just the same as rock stars of the OSS world, so if you're interested in getting involved, just head over to our [Contribution Guidelines](https://github.com/theonethread/.github/blob/master/.github/contributing.md "Open") for a quick heads-up!

#### **License**

[MIT](https://github.com/theonethread/falkor-plugin-example/blob/master/license.txt "Open")

_©2020-2021 Barnabas Bucsy - All rights reserved._
