---
title: 'Setup'
priority: 1

# SEO
metaData:
  titleParts:
    - Setup
    - Bubbleprof
    - Documentation
---

# Setup

Bubbleprof is part of the Clinic.js suit of tools. To install Bubbleprof, simply install Clinic.js like so:

```bash
npm install -g clinic
```

After installing, we can check if Bubbleprof has been installed by running the `clinic bubbleprof` command with the `--help` flag.

```bash
clinic bubbleprof --help
```

It should print something similar to the following:

```
Clinic.js BubbleProf - v1.11.0

clinic bubbleprof helps you find asynchronous bottlenecks and debug event loop blocking.

To run clinic bubbleprof

  clinic bubbleprof -- node server.js

If profiling on a server, it can be useful to only do data collection:

  clinic bubbleprof --collect-only -- node server.js

You can then transfer the data and visualize it locally:

  clinic bubbleprof --visualize-only PID.clinic-bubbleprof-sample

Flags
-h | --help                Display Help
-v | --version             Display Version
--collect-only             Do not process data on terminiation
--visualize-only datapath  Build or rebuild visualization from data
```

---

##### Up next

[Getting ready](/documentation/bubbleprof/02-getting-ready/)
