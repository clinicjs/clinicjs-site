---
priority: 4

# SEO
metaData:
  titleParts:
    - CLI
    - Documentation
---

# CLI

Clinic.js comes with a number of tools to help us identify performance issues in our Node.js applications. All these tools can be accessed using the top-level `clinic` command once [Clinic.js is installed](/documentation/).

## The anatomy of a command

A Clinic.js command in its simplest form that generates a [Doctor](/doctor/) sample is as follows:

```
clinic doctor -- node server.js
```

The `--` denotes the [end of the command and flags](https://nodejs.org/api/cli.html#cli_1), dividing the command into the following two related parts:

**1.** `clinic doctor` informs Clinic.js that we wish to use [Clinic.js Doctor](/documentation/doctor/) to get an overview of our application's current performance.

**2.** `node server.js` is the command we use in order to run our Node.js application from the command line as normal. 

If our application needs some [environment variables](https://nodejs.org/api/cli.html#cli_environment_variables), we can set them beforehand:

```
NODE_ENV=production clinic doctor -- node server.js
```

From here, we can start making the most out of Clinic.js by [simulating load](/documentation/cli/01-simulating-load/).

## Viewing tool information

To see all help information relating to a Clinic.js tool including the version and [supported flags](/documentation/cli/04-reference/#flags) we can simply run:

```
clinic doctor --help
```

Or, to quickly see the version of each Clinic.js tool:

```
clinic flame --version
```

If we want to just see information about an installed version of Clinic.js:

```
clinic --help
```

Or, to just see the installed version of Clinic.js:

```
clinic --version
```

For a complete list of options, see the [CLI reference](/documentation/cli/04-reference).

---

##### Up next

[Simulating load](/documentation/cli/01-simulating-load/)
