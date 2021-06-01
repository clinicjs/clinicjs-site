---
title: 'Setup'
priority: 1

# SEO
metaData:
  titleParts:
    - Setup
    - Doctor
    - Documentation
---

# Setup

Doctor is part of the Clinic.js suit of tools. To install Doctor, simply install Clinic.js like so:

```bash
npm install -g clinic
```

After installing, we can check if Doctor has been installed by running the `clinic doctor` command
with the `--help` flag.

```bash
clinic doctor --help
```

It should print something similar to the following:

```
Clinic.js Doctor - v3.12.0

clinic doctor is the first step in profiling your application.
It will show you what kind of problem you are having and recommend the path
forward.

To run clinic doctor

  clinic doctor -- node server.js

If profiling on a server, it can be useful to only do data collection:

  clinic doctor --collect-only -- node server.js

You can then transfer the data and visualize it locally:

  clinic doctor --visualize-only PID.clinic-doctor-sample

Flags
-h | --help                Display Help
-v | --version             Display Version
--collect-only             Do not process data on termination
--visualize-only datapath  Build or rebuild visualization from data
--sample-interval interval Sample interval in milliseconds
--on-port                  Run a script when the server starts listening on a port.
--dest                     Destination for the collect data (default .).
```

---

##### Up next

[Getting ready](/documentation/doctor/02-getting-ready/)
