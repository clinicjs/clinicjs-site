---
title: 'Setup'
priority: 1

# SEO
metaData:
  titleParts:
    - Setup
    - Heap
    - Documentation
---

# Setup

Heap Profiler is part of the Clinic.js suit of tools. To install Heap Profiler, simply install
Clinic.js like so:

```bash
npm install -g clinic
```

After installing, we can check if HeapProfiler has been installed with running the
`clinic heapprofiler` command with the `--help` flag.

```bash
clinic heapprofiler --help
```

It should print something similar to the following:

```
Clinic.js Heap Profiler - v3.0.0

clinic heapprofiler helps you find memory leaks
by creating a flamegraph visualization that assists in identifying
function calls that may be leaking memory.

To run clinic heapprofiler

  clinic heapprofiler -- node server.js

Once you exit (Ctrl-C) the process, your report will open in a browser window. You can disable this behavior:

  clinic heapprofiler --open=false -- node server.js

If profiling on a server, it can be useful to only do data collection:

  clinic heapprofiler --collect-only -- node server.js

You can then transfer the data and visualize it locally:

  clinic heapprofiler --visualize-only PID.clinic.heapprofile

You can use the --autocannon flag to simulate load on your server.
--autocannon accepts configuration for autocannon using "subarg" syntax:

  clinic heapprofiler --autocannon [ -m POST /api/example ] -- node server.js

When configuring --autocannon, the $PORT environment variable contains the
port your server is listening on:

  clinic heapprofiler --autocannon [ -m POST 'http://localhost:$PORT/?\$page=1' ] -- node server.js

Note that dollar signs ($) appearing in the URL must be escaped, else they
will be treated as environment variables as well.

Flags
-h | --help                Display Help
-v | --version             Display Version
--collect-only             Do not process data on termination
--visualize-only datapath  Build or rebuild visualization from data
--on-port                  Run a script when the server starts listening on a port.
--autocannon               Run the autocannon benchmarking tool when the server starts listening on a port.
--open                     Boolean to enable or disable your report opening in your web browser.
--dest                     Destination for the collected data (default .clinic/).
```

---

##### Up next

[Getting ready](/documentation/heapprofiler/02-getting-ready/)
