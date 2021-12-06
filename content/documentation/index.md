---
# SEO
metaData:
  titleParts:
    - Documentation
---

# Getting started

Before you get started with Clinic.js, first let's make sure we install it on our machines and run a couple of tests just to make sure everything is working fine. Let's follow these steps to kick off:

**1.** Note: You must use a version of Node.js `>= 8.11.1`

```bash
npm install -g clinic
```

**2.** Confirm that it has installed ok with:

```bash
clinic --help
```

**3.** It should print something similar to the following:

```
Clinic.js - v2.2.1

Getting started
As a first step, run the clinic doctor:

  clinic doctor -- node server.js

Then benchmark your server with wrk or autocannon:

  wrk http://localhost:3000
  autocannon http://localhost:3000

Finally shut down your server (Ctrl+C). Once the server process has shutdown
clinic doctor will analyse the collected data and detect what type of issue
you are having. Based on the issue type, it will provide a recommendation for
you.

For example, to debug I/O issues, use Clinic.js Bubbleprof:

  clinic bubbleprof -- node server.js

Then benchmark your server again, just like you did with clinic doctor.

Report an issue
If you encounter any issue, feel free to send us an issue report at:

  https://github.com/clinicjs/node-clinic/issues

Utilities
When using clinic a bunch you have fill up your directory with data folders and files.
You can clean these easily using clinic clean.

More information
For information on the clinic sub-commands, use the --help option:

  clinic doctor --help
  clinic bubbleprof --help
  clinic clean --help
  clinic flame --help
  clinic heapprofiler --help

Flags
-h | --help                Display Help
-v | --version             Display Version
```

**4.** We have a set of example apps on Github. Let's run through the first one using [Clinic.js Doctor](/doctor/) and autocannon:

```bash
git clone git@github.com:nearform/node-clinic-doctor-examples.git
cd node-clinic-doctor-examples
npm install
clinic doctor --autocannon [ / ] -- node ./slow-io
```

This will run autocannon against a simple app with an IO issue and once it's complete it will automatically launch the Doctor tool inside your browser.

---

##### Up next

Normally, when using Clinic.js, we begin by using Clinic.js Doctor to identify what performance problems exist in an application. Doctor will then give us recommendations on what tools and enquires to make next.

[Get started with Clinic.js Doctor](/documentation/doctor/).

Alternatively you can dive into an in-depth overview of the CLI.

[CLI](/documentation/cli).
