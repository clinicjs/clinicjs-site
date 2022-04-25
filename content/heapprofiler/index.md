---
# Ensure the content and frontmatter is passed to the correct template explicitly
template: tool

# Add context to the template (icon, colour etc)
type: heap

# Orderingflame
priority: 4

# Heading 1
title: Clinic.js HeapProfiler

# Subtitle (Heading 2)
subtitle: Uncovers memory allocations by functions with Flamegraphs.

# List of tool features
features:
  - Collects metrics of memory allocation
  - Tracks top-of-stack allocations
  - Creates flamegraphs

# Tool featured video for homepage
video: /assets/videos/heapprofiler-screen-recording.mp4

# Links for template buttons
gitHubUrl: https://github.com/clinicjs/node-clinic-heap-profiler
exampleUrl: /assets/html/heapprofiler-example.html

# CTA button for tool template
cta:
  label: Get started with HeapProfiler
  path: /documentation/heapprofiler/

# SEO
metaData:
  titleParts:
    - Heap Profiler
  description: Uncovers memory allocations by functions with Flamegraphs.
  image: /assets/images/tools/heapprofiler-feature.jpg
---

The flamegraph is an aggregated visualization of memory allocated over time. Each block represents the amount of memory allocated by a function. The wider the block, the more memory was allocated.

## Demo

<video src="/assets/videos/heapprofiler-screen-recording.mp4" playsinline loop autoplay muted></video>

**[Interactive example](/assets/html/heapprofiler-example.html)**

## Setup

```bash
npm install -g clinic
clinic heapprofiler --help
```
