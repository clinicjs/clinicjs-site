---
# Ensure the content and frontmatter is passed to the correct template explicitly
template: tool

# Add context to the template (icon, colour etc)
type: flame

# Ordering
priority: 3

# Heading 1
title: Clinic.js Flame

# Subtitle (Heading 2)
subtitle: Uncovers the bottlenecks and hot paths in your code with flamegraphs

# List of tool features
features:
  - Collects metrics by CPU sampling
  - Tracks top-of-stack frequency
  - Creates flamegraphs

# Tool featured video for homepage
video: /assets/videos/flame-feature.mp4

# Links for template buttons
gitHubUrl: https://github.com/clinicjs/node-clinic-flame-demo
exampleUrl: /assets/html/flame-example.html

# CTA button for tool template
cta:
  label: Get started with Flame
  path: /documentation/flame/

# SEO
metaData:
  titleParts:
    - Flame
  description: Uncovers the bottlenecks and hot paths in your code with flamegraphs
  image: /assets/images/tools/flame-feature.jpg
---

To quote their inventor, Brendan Gregg, [flamegraphs](http://www.brendangregg.com/flamegraphs.html) are a visualization of profiled software, allowing the most frequent code-paths to be identified quickly and accurately. Clinic.js Flame is specifically for Node.js and is built into Clinic.js. It collects metrics using by CPU sampling, then tracks top-of-the-stack frequency and creates flamegraphs.

A flamegraph is an aggregated visualization of stacks sampled over time. It primarily visualizes two metrics. The amount of time a function was on CPU, and the amount of time a function top of stack. The last function to be called is referred to as being at the top of the stack. If a function is observed being at the top of stack more times than other functions, this function may be blocking the event loop. If a function is observed as being at the top of the stack in higher ratio it's referred to as being "hot".

## Demo

<video src="/assets/videos/flame-screen-recording.mp4" playsinline loop autoplay muted></video>

**[Interactive example](/assets/html/flame-example.html)**

## Setup

```bash
npm install -g clinic
clinic flame --help
```
