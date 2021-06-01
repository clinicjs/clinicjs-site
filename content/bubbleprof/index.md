---
# Ensure the content and frontmatter is passed to the correct template explicitly
template: tool

# Add context to the template (icon, colour etc)
type: bubbleprof

# Ordering
priority: 2

# Heading 1
title: Clinic.js Bubbleprof

# Subtitle (Heading 2)
subtitle: Bubbleprof is a new, completely unique, approach to profiling your Node.js code

# List of tool features
features:
  - Collects metrics using async_hooks
  - Tracks latency between operations
  - Creates bubble graphs

# Tool featured video for homepage
video: /assets/videos/bubbleprof-feature.mp4

# Links for template buttons
gitHubUrl: https://github.com/clinicjs/node-clinic-bubbleprof-examples
exampleUrl: /assets/html/bubbleprof-example.html

# CTA button for tool template
cta:
  label: Get started with Bubbleprof
  path: /documentation/bubbleprof/


# SEO
metaData:
  titleParts:
    - Bubbleprof
  description: Bubbleprof is a new, completely unique, approach to profiling your Node.js code
  image: /assets/images/tools/bubbleprof-feature.jpg
---

Bubbleprof is a completely new way to visualize the operation of your Node.js processes. It observes the async operations of your application, groups them, measures their delays, and draws a map of the delays in your application's async flow

Read the [introductory blogpost here](https://clinicjs.org/blog/introducing-bubbleprof/) and the [launch announcement here](https://www.nearform.com/blog/introducing-clinic-bubbleprof-a-unique-way-to-visualise-node-js-code/).

## How it works

The size of each bubble represents time within a group of operations. These are grouped where the flow stayed within either your own code, a module, or node core. Tiny adjacent groups are also grouped to reduce clutter. The length of arrows connecting bubbles shows the delays while the flow moves from one group to another. Inner coloured lines indicate the mix of types of async operation responsible for this delay. Click to explore. Line lengths between and around the bubbles and numeric labels reflect the aggregated delay in miliseconds (ms).

## Demo

<video src="/assets/videos/bubbleprof-screen-recording.mp4" playsinline loop autoplay muted></video>

**[Interactive example](/assets/html/bubbleprof-example.html)**

## Setup

```bash
npm install -g clinic
clinic bubbleprof --help
```
