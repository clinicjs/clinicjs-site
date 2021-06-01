---
priority: 3

# SEO
metaData:
  titleParts:
    - Controlling the output
    - CLI
    - Documentation
---

# Controlling the output

By default, any of the Clinic.js tool commands will generate a compiled HTML file and directory of data, so the following command:

```bash
clinic doctor -- node server.js
```

Would generate a file structure like this:

```
.clinic/1234.clinic-doctor/1234.clinic-doctor-processstat
.clinic/1234.clinic-doctor/1234.clinic-doctor-systeminfo
.clinic/1234.clinic-doctor/1234.clinic-doctor-traceevent
.clinic/1234.clinic-doctor.html
```

_The exact output will vary between [Doctor](/doctor/), [Flame](/flame/) and [Bubbleprof](/bubbleprof/) since each tool generates and requires slightly different data to create a sample._

## Collecting data only

In order to prevent any tool from generating the HTML, we can use the `--collect-only` flag like so:

```bash
clinic doctor --collect-only -- node server.js
```

This would generate a directory from which the HTML profile can be generated, with a file structure similar to this:

```
.clinic/1234.clinic-doctor/1234.clinic-doctor-processstat
.clinic/1234.clinic-doctor/1234.clinic-doctor-systeminfo
.clinic/1234.clinic-doctor/1234.clinic-doctor-traceevent
```

## Visualizing existing data

To generate or re-generate the HTML profile from Clinic.js collected data, we can use the `--visualize-only` flag and pass it the local path to the existing data like so:

```bash
clinic doctor --visualize-only .clinic/1234.clinic-doctor
```

This would generate the following HTML file in the same directory as its data directory `1234.clinic-doctor`:

```
.clinic/1234.clinic-doctor.html
```

Note that since we're generating the sample visualization from an existing sample, we don't need to call any server start script after a `--` flag delimiter when passing a directory path to the `--visualize-only` flag.

## Changing the output destination

By default all tool sample files will be generated within the directory the command is run from (`.`). To change this, we can use the `--dest` flag to point to a different destination like so:

```bash
clinic doctor --dest ../some-other-dir -- node server.js
```

This is quite useful when generating lots of Clinic.js files to ensure they don't fall within a project directory and avoid any version control mistakes!

---

##### Up next

[Managing samples](/documentation/cli/03-managing-samples/)
