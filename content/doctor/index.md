---
# Ensure the content and frontmatter is passed to the correct template explicitly
template: tool

# Add context to the template (icon, colour etc)
type: doctor

# Ordering
priority: 1

# Heading 1
title: Clinic.js Doctor

# Subtitle (Heading 2)
subtitle: Diagnose performance issues in your Node.js applications

# List of tool features
features:
  - Collects metrics by injecting probes
  - Assess health and heuristics
  - Creates recommendations

# Tool featured video for homepage
video: /assets/videos/doctor-feature.mp4

# Links for template buttons
gitHubUrl: https://github.com/clinicjs/node-clinic-doctor-examples
exampleUrl: /assets/html/doctor-example.html

# CTA button for tool template
cta:
  label: Get started with Doctor
  path: /documentation/doctor/

# SEO
metaData:
  titleParts:
    - Doctor
  description: Diagnose performance issues in your Node.js applications
  image: /assets/images/tools/doctor-feature.jpg
---

Doctor helps diagnose performance issues in your application and guides you towards more specialised tools to look deeper into your specific issues. Symptoms such as low CPU usage, blocking garbage collection, frequent event loop delay or a chaotic number of active handles may indicate a number of potential problems. Doctor helps narrow down the possibilities by generating a recommendation based on those symptoms. Examples such as I/O issues, non-optimized garbage collection and blocked event loop are quite common. Doctor will help you with all of these.

Once the problem is diagnosed, Doctor helps you find the right solution. It may point you to a specific profiling tool or suggest a common approach to the problem. For those who prefer more context, Doctor also provides an in-depth explanation of the issue. In situations where you have a hunch that the issue may be different than the recommendation, Doctor provides easy access to the documentation of all the other issues.

## Demo

<video src="/assets/videos/doctor-screen-recording.mp4" playsinline loop autoplay muted></video>

**[Interactive example](/assets/html/doctor-example.html)**

## Setup

```bash
npm install -g clinic
clinic doctor --help
```
