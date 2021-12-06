---
title: 'First analysis'
priority: 3

# SEO
metaData:
  titleParts:
    - First analysis
    - Heap
    - Documentation
---

# First analysis

Now we're ready to profile the application.

Let's try with the first server in the repository, `1-server-with-many-allocations.js`.

It contains an HTTP server, built using Fastify with a root route (`/`) that adds an integer to a global array in each request received.

The server can be started with `node 1-server-with-many-allocations.js` and then accessed in the browser at http://localhost:3000/. If the landing page says
"Hello World" then things are working!

Let's try and profile the server with Flame to see if we can find any bottlenecks.

To do that we need a tool that can simulate sufficiently intense HTTP load.

We suggest `autocannon` which is supported on Windows, Mac and Linux and is straightforward to use.

Let's install it from npm:

```bash
npm install -g autocannon
```

To run the analysis we want to run the server with HeapProfiler and when the server is ready, we want to send a ton of requests to it using `autocannon`.

All that can be performed with a single command, which can be copied and pasted as-is:

```bash
clinic heapprofiler --autocannon [ / --method GET -d 120 ] -- node 1-server-with-many-allocations.js
```

Let's break this command down:

- The `clinic heapprofiler` portion invokes the `heapprofiler`
  command tool.
- The `--autocannon` flag will execute the tool as soon as the server starts listening on a port sending tons of requests.
- Everything after the double-dash (`--`) is the command which starts the server that we want to profile, in this case `node 1-server-with-many-allocations.js`.

This one command runs three executables: the `clinic heapprofiler` parent executable, the `autocannon` executable, and the `node` executable.

Upon running the command, the process will be load tested for 120 seconds (as per the `-d 120` parameter), then the results be compiled into a single HTML file that should automatically open in the browser.

The resulting HTML should look similar to the following:

![Flamegraph screenshot](03.png)

This is known as a Flamegraph.

---

##### Up next

[Flamegraphs](/documentation/heapprofiler/04-flamegraphs)
