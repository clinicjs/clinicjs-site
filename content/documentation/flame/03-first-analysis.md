---
title: 'First analysis'
priority: 3

# SEO
metaData:
  titleParts:
    - First analysis
    - Flame
    - Documentation
---

# First analysis

Now we're ready to profile the application.

Let's try with the first server in the repo, `1-server-with-slow-function.js`.

It contains an HTTP server, built using Express with a root route (`/`) that performs some work before rendering a landing page.

The server can be started with `node 1-server-with-slow-function.js` and then accessed in the browser at http://localhost:3000/. If the landing page says
"Hello World" then things are working!

Let's try and profile the server with Flame to see if we can find any bottlenecks.

To do that we need a tool that can simulate sufficiently intense HTTP load.

We suggest `autocannon` which is supported on Windows, Mac and Linux and is straightforward to use.

Let's install it from npm:

```bash
npm install -g autocannon
```

To run the analysis we want to run the server with Flame and when the server is ready - i.e. starts listening on a port - we want to send a ton of requests to it using `autocannon`.

All that can be performed with a single command, which can be copied and pasted as-is:

```bash
clinic flame --on-port 'autocannon localhost:$PORT' -- node 1-server-with-slow-function.js
```

Let's break this command down:

- The `clinic flame` portion invokes the `flame`
  command tool.
- The `--on-port` flag will execute the supplied script as soon as the server starts listening on a port.
- The `$PORT` variable in that script is set to the first port that the server began listening on.
- Everything after the double-dash (`--`) is the command which starts the server that we want to profile, in this case `node 1-server-with-slow-function.js`.

This one command runs three executables: the `clinic flame` parent executable, the `autocannon` executable in `--on-port` and the `node` executable.

Upon running the command, the process will be load tested for 10 seconds (as per the `autocannon` default duration), then the results be compiled into a single HTML file that should automatically open in the browser.

The resulting HTML should look similar to the following:

![Flamegraph screenshot](03.png)

This is known as a Flamegraph.

---

##### Up next

[Flamegraphs](/documentation/flame/04-flamegraphs)
