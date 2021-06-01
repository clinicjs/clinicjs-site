---
priority: 1

# SEO
metaData:
  titleParts:
    - Simulating load
    - CLI
    - Documentation
---

# Simulating load

If our app handles requests, simply pointing Clinic.js at it won't be particularly insightful when testing its performance, since there will be no load to monitor unless we're manually using the running app. One way around this is to simulate load using a benchmarking tool like [autocannon](https://github.com/mcollina/autocannon).

## Using autocannon

We can simulate load on our server with autocannon very easily using the `--autocannon` flag:

```bash
clinic doctor --autocannon [ 'localhost:$PORT' ] -- node server.js
```

Clinic.js automatically replaces the value of `$PORT` with the actual port our server is listening to inside `server.js`. To make things even simpler, if we've set up our server to use the `PORT` environment variable for the application port, we can produce the same results as the above command like this:

```bash
clinic doctor --autocannon [ / ] -- node server.js
```

Here `/` is the same as `'localhost:$PORT'` inside the subargs: `[ ]`.

_Be careful to ensure there is space after the opening and before the closing square bracket to ensure the subargs are parsed correctly._

### Common autocannon flags

All available flags can be seen in the [autocannon README](https://github.com/mcollina/autocannon#command-line), but some of the more common flags are documented below.

#### Connections

By default, autocannon will set the number of concurrent connections to 10. To change this to 100 for example, we can set the `-c` or `--connections` flag as a subarg like so:

```bash
clinic doctor --autocannon [ -c 100 / ] -- node server.js
```

#### HTTP methods

Let's say we have an API with a POST endpoint that we want to test and monitor, this is easily accomplished using the `-m` or `--method` flag as a subarg:

```bash
clinic doctor --autocannon [ -m POST /api/item ] -- node server.js
```

That's probably not that helpful without sending some actual data in the body of the request though, so let's add some using the `-b` or `--body` flag as a subarg:

```bash
clinic doctor --autocannon [ -m POST /api/item -b '{"my": "data"}' ] -- node server.js
```

This could get a bit hard to manage with JSON strings or any other data type as part of the command, especially if we want to test different endpoints with different data sets or varying lengths. Handily autocannon supports using a local file to provide data for the request body, so with some JSON files we can simplify this load test with the `-i` flag like this:

```bash
clinic doctor --autocannon [ -m POST /api/item -i my-data.json ] -- node server.js
```

Neat!

## Using our own command

For more control, we can point any custom command at our server by using the `--on-port` flag. With `autocannon` globally installed we can simulate load on our app like so:

```bash
clinic doctor --on-port 'autocannon localhost:$PORT' -- node server.js
```

Just like with the `--autocannon` flag, Clinic.js replaces the value of `$PORT` with the actual port our server is listening to inside `server.js`.

The advantage of the `--on-port` flag is that it gives us the flexibility to use any command we like, including other benchmarking tools such as [wrk](https://github.com/wg/wrk). For example, a similar command as above with `wrk` globally installed would be:

```bash
clinic doctor --on-port 'wrk http://localhost:$PORT' -- node server.js
```

Clinic.js then simply monitors the performance of the application under simulated load and will generate a sample when the script running `--on-port` exits. Which script we use is entirely up to us, we might have some complicated test commands already in place as [NPM scripts](https://docs.npmjs.com/cli/run-script.html) so we could easily call one of those instead:

```bash
clinic doctor --on-port 'npm run load-test' -- node server.js
```

---

##### Up next

[Controlling the output](/documentation/cli/02-controlling-the-output/)
