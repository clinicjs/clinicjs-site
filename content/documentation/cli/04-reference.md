---
priority: 5

# SEO
metaData:
  titleParts:
    - Reference
    - CLI
    - Documentation
---

# Reference

This page contains a reference of all the commands and flags supported by Clinic.js to help us get the most out of using Clinic.js.

## Commands

### `clinic doctor`

Separated by the `--` flag delimiter, this command takes a start script for a Node.js application and generates [Doctor](/doctor/) sample to diagnose performance issues.

**Example**:

```bash
clinic doctor -- node server.js
```

For more technical information follow the [Doctor docs](/documentation/doctor/).

### `clinic flame`

Separated by the `--` flag delimiter, this command takes a start script for a Node.js application and generates [Flame](/flame/) sample to uncover bottlenecks and hot functions in code with flamegraphs.

**Example**:

```bash
clinic flame -- node server.js
```

For more technical information follow the [Flame docs](/documentation/flame/).

### `clinic bubbleprof`

Separated by the `--` flag delimiter, this command takes a start script for a Node.js application and generates [Bubbleprof](/bubbleprof/) sample to observe and map async operations.

**Example**:

```bash
clinic bubbleprof -- node server.js
```

For more technical information follow the [Bubbleprof docs](/documentation/bubbleprof/).

## Flags

Below is a reference list of useful flags (options) that can be passed to Clinic.js when generating samples with Doctor, Flame and Bubbleprof.

### `--on-port`

Takes a command string which is executed when the application that's being profiled starts listening to a port.

**Example**:

```bash
clinic doctor --on-port 'my-script localhost:$PORT' -- node server.js
```

More information about this flag with use cases can be found in the [Simulating load docs](/documentation/cli/01-simulating-load/#using-our-own-command).

### `--autocannon`

Takes subargs inside the `[ ]` which are passed to autocannon.

**Example**:

```bash
clinic doctor --autocannon [ 'localhost:$PORT' ] -- node server.js
```

More information about this flag with use cases can be found in the [Simulating load docs](/documentation/cli/01-simulating-load/#using-autocannond).

### `--collect-only`

If used, the Clinic.js tool will only generate a directory of sample information with no visualization HTML.

**Example**:

```bash
clinic doctor --collect-only -- node server.js
```

More information about this flag can be found in the [Controlling the output docs](/documentation/cli/02-controlling-the-output/#collecting-data-only).

### `--visualize-only`

Takes a path to a directory of previously collected Clinic tool sample data and generates visualization HTML to view the output in a browser.

**Example**:

```bash
clinic doctor --visualize-only .clinic/1234.clinic-doctor
```

More information about this flag can be found in the [Controlling the output docs](/documentation/cli/02-controlling-the-output/#visualizing-existing-data).

### `--dest`

Takes a path to a local directory which the generated sample output is saved to.

**Example**:

```bash
clinic doctor --dest ../some-other-dir -- node server.js
```

More information about this flag can be found in the [Controlling the output docs](/documentation/cli/02-controlling-the-output/#changing-the-output-destination).

**Default**: `.` (current directory)

### `--sample-interval`

Takes a number and changes the rate at which Doctor samples an application in milliseconds.

**Example**:

```bash
clinic doctor --sample-interval 100 -- node server.js
```

**Default**: `10`

_\* This flag is applicable with the `clinic doctor` command._

### `--version`

If used will output the current installed version of the Clinic.js or the specific Clinic.js tool.

**Examples**:

```bash
clinic --version
# or
clinic -v

clinic doctor --version
# or
clinic doctor -v
```

### `--help`

If used will output help text with example commands and supported flags for Clinic.js or the specific Clinic.js tool.

**Examples**:

```bash
clinic --help
# or
clinic -h

clinic doctor --help
# or
clinic doctor -h
```
