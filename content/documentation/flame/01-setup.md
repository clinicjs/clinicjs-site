---
title: 'Setup'
priority: 1

# SEO
metaData:
  titleParts:
    - Setup
    - Flame
    - Documentation
---

# Setup

Flame is part of the Clinic.js suit of tools. To install Flame, simply install
Clinic.js like so:

```bash
npm install -g clinic
```

After installing, we can check if Flame has been installed with running the
`clinic flame` command with the `--help` flag.

```bash
clinic flame --help
```

It should print something similar to the following:

```
Clinic.js Flame - v3.6.0 (0x v4.7.2)

clinic flame helps you find synchronous bottlenecks
by creating a flamegraph visualization that assists in identifying
function calls that may be blocking the event loop.

For more information see the 0x readme, https://github.com/davidmarkclements/0x

To run clinic flame

  clinic flame -- node server.js

If profiling on a server, it can be useful to only do data collection:

  clinic flame --collect-only -- node server.js

You can then transfer the data and visualize it locally:

  clinic flame --visualize-only PID.clinic.flame

Flags
-h | --help                Display Help
-v | --version             Display Version
--collect-only             Do not process data on termination
--visualize-only datapath  Build or rebuild visualization from data
```

---

##### Up next

[Getting ready](/documentation/flame/02-getting-ready/)
