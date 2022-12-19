<img
  src="static/assets/images/clinic.svg"
  alt="Clinic.js"
  style="display: block; margin: auto"
  width="64"
  height="64"
/>

# Clinic.js Website

<details>
  <summary>Table of contents</summary>
<!-- MarkdownTOC autolink="true" levels="1,2,3,4" -->

- [Getting Started](#getting-started)
- [Environments](#environments)
  - [Staging](#staging)
  - [Live](#live)
- [NPM Scripts](#npm-scripts)
  - [Developing locally](#developing-locally)
  - [Building the website statically](#building-the-website-statically)
  - [Serving static site locally](#serving-static-site-locally)
  - [Formatting and linting](#formatting-and-linting)
  - [Build breaks, what should I do?](#build-breaks-what-should-i-do)
- [Creating new pages](#creating-new-pages)
  - [Create a page using React](#create-a-page-using-react)
    - [Example:](#example)
  - [Generate page from markdown](#generate-page-from-markdown)
    - [Example:](#example-1)
- [Authoring content](#authoring-content)
  - [Images](#images)
  - [Videos](#videos)
    - [Video dimensions](#video-dimensions)
    - [Generating an image from a video frame](#generating-an-image-from-a-video-frame)
  - [Codeblocks](#codeblocks)
  - [Fixed section IDs](#fixed-section-ids)
- [Markdown templates](#markdown-templates)
  - [Implicit template linking](#implicit-template-linking)
    - [Example](#example-2)
  - [Explicit template linking](#explicit-template-linking)
  - [Frontmatter](#frontmatter)
- [Templates & features](#templates--features)
  - [SEO](#seo)
    - [Breakdown](#breakdown)
  - [`about.js`](#aboutjs)
  - [`blog-list.js`](#blog-listjs)
  - [`blog.js`](#blogjs)
  - [`default.js`](#defaultjs)
  - [`documentation.js`](#documentationjs)
  - [`tool.js`](#tooljs)
    - [Breakdown](#breakdown-1)
- [Pages](#pages)
  - [`index.js`](#indexjs)
  - [`support.js`](#supportjs)
  - [`404.js`](#404js)
- [Stubs](#stubs)
  - [Team members](#team-members)
  - [Testimonials](#testimonials)
  - [Support Package](#support-package)
  - [FAQ](#faq)
- [Content trees](#content-trees)
  - [How link titles are computed](#how-link-titles-are-computed)
  - [Overview of GraphQL integration](#overview-of-graphql-integration)
    - [Example:](#example-3)
    - [Example:](#example-4)
- [HubSpot](#hubspot)
- [Fonts](#fonts)
  - [⛔️ Warning](#%E2%9B%94%EF%B8%8F-warning)
- [Credits](#credits)

<!-- /MarkdownTOC -->
</details>

&nbsp;

## Getting Started

Clone this repo:

```bash
git clone https://github.com/clinicjs/clinicjs-site.git
```

Navigate into the directory and run the following:

```bash
cd clinicjs-website
npm install
npm run develop
```

You should now be able to see the website at [http://localhost:8000](http://localhost:8000) 🙌

&nbsp;

## Environments

  - **Staging**: [clinicjs.netlify.com](https://clinicjs.netlify.com)
  - **Live**: [clinicjs.org](https://clinicjs.org)

### Staging

Netlify is used to create staging environments using Deploy previews. Every time you create a pull request against `main` you'll find a link to the preview under 'checks'. Find out more [here](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/). Technically the staging environment just mirrors live, so use deploy previews to check changes with a sharable URL when creating PRs.

The Netlify website is linked to the NearForm team account. Speak to [Eamonn](eamonn.frisby@nearform.com ) for access.

💡 *To clear the ServiceWorker cache add `?no-cache=1` to the end of any URL when looking at changes.*

### Live

The `master` uses Github Actions to deploy to an AWS bucket automatically. Any PRs merged into `master`

&nbsp;

## NPM Scripts

The site is built with [Gatsby 2](https://www.gatsbyjs.org/docs/) which is a static site generator that uses webpack and React and is enhanced using Remark to build content from markdown files.

### Developing locally
```bash
npm run develop
```
Alias to run `gatsby develop` which starts development env at [http://localhost:8000](http://localhost:8000)

### Building the website statically
```bash
npm run build
```
Alias to run `gatsby build` which builds static version of site in `public` directory

### Serving static site locally
```bash
npm run serve
```
Alias to run `gatsby serve` which starts a static server to test built site.

### Formatting and linting
```bash
npm run lint
```
This will run eslint in the `/src` directory

```bash
npm run format
```
This will run prettier on all source JS (non-bundled) and on all markdown inside the `/content` directory.

```bash

npm run write-good
```
This will flag any prose errors within the `/content` directory.

### Build breaks, what should I do?
```bash
npm run clean
```
If there's an unknown Gatsby error, chances are the `/.cache` or `/public` directory are out of whack. This is a convenience command for removing those directories.

&nbsp;

## Creating new pages

There are two ways to create new pages, depending on the author's intent:

1. Create an interactive page using React components. [View](#create-a-page-using-react)
2. Create page which is generated by markdown (via [remark](https://using-remark.gatsbyjs.org/)). [View](#generate-page-from-markdown) **(recommended)**

### Create a page using React

Gatsby core will automatically take all React components in `src/pages` and turn them into pages. The name of the file will match the route of the component.

#### Example:

`src/pages/test.js` would automatically load at [http://localhost:8000/test](http://localhost:8000/test)

### Generate page from markdown

All markdown content is stored in the `content/` directory. Any nested directory inside this `content/` directory represents a "project" directory. This directory structure inside the `content/` directory dictates the route of the post by subdirectory name or file name. To link a post to the subdirectory name itself use an `index.md` file.

#### Example:
```
content/doctor/index.md               => /doctor
content/doctor/tutorial/index.md      => /doctor/tutorial

content/doctor/api.md                 => /doctor/api
content/doctor/tutorial/first-step.md => /doctor/tutorial/first-step
```

## Authoring content
Markdown is parsed using Remark and used the GitHub syntax, so should be familiar if you are used to writing `README.md` files or even PRs. Since markdown also supports HTML, you can add pure HTML to the markdown files, but for sanity this should be kept to an absolute minimum.

### Images
Simply use the markdown `![Alt tag](/image/path)` syntax where possible, although in some cases where you need to specify a size for the image you can use an `<img>` tag.

### Videos
Where GIFs are required you should simply use MP4
s if possible. This will be more performant, lightweight and easier to manage.

To place a *GIF-like* video in a markdown file use the following HTML with these boolean attributes to enable looping, remove controls and ensure it autoplays on page load without sound:

```html
<video src="/path/to/video.mp4" playsinline loop autoplay muted></video>
```

To record your screen and create a video to place in a page you can follow the steps in the video [here](https://drive.google.com/file/d/1GzASKTm6HfOu_C8BiE-yQiIeq-kQgELI/view?usp=sharing).

The steps are as follows:

1. Record your screen with [Nimbus Chrome extension](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj?hl=en)
2. Convert the saved WEBM as an MP4 with the [Handbrake app](https://handbrake.fr/) and use the 'Web optimised' option when converting
3. Place your MP4 file in an accessible folder a link to the relative path using the code snippet above.

💡 To convert the video as a GIF, use [ezgif](https://ezgif.com/video-to-gif)*.

*This is not recommended, use an MP4 within the markdown for performance and quality reasons)*

#### Video dimensions
The dimensions of the videos used within the website currently are as follows:

##### Screen recordings
[Example](./static/assets/videos/doctor-screen-recording.mp4)

```
Dimensions: 1440x798px
```

This ensures the video fits wide enough when full width on desktop and is a good size to present each Clinic.js tool to a user.

##### Tool feature video
[Example](./static/assets/videos/doctor-feature.mp4)

```
Dimensions: 1100×758px
```

This ensures the video fits wide-screen on desktops with good pixel density when scaled for retina screens and ensures a concise UI presentation across Clinic.js tools..

#### Generating an image from a video frame
You might want to generate an image from a video for social media/meta data purposes. There are many ways to achieve this, but the most precise and quickest method would be to use `ffmpeg` which is a CLI tool for converting and augmenting videos.

1. Install using Homebrew:
```bash
brew install ffmpeg
```

2. Generate a JPG from an MP4 at a timestamp as follows:

```
ffmpeg -i INPUT.mp4 -ss 00:00:00 -vframes 1 OUTPUT.jpg
```

This will generate an image of the first frame of the video in the same dimensions as the source video.

### Codeblocks

Code is syntax-highlighted using Prism. You should use language tags on the opening of the codeblock to ensure your code examples look pretty and are easy to read like so:

```
```js
const foo = () => 'bar'

```bash
npm install -g clinic
```

### Fixed section IDs

To add a fixed ID to any documentation page instead of relying on the ID automatically generated by the `gatsby-remark-autolink-headers` plugin you can use this HTML:

```html
<div id="controls-c" data-offset></div>
```
_💡 Be sure to add empty lines above and below the above HTML within your Markdown_

This is useful for when you might want to link to a part of the docs from an external website without risking the ID changing in the future.


&nbsp;

## Markdown templates
Templates are used to to enhance the related markdown page and offer particular extended functionality based on the type of content and the frontmatter provided. Templates are associated with markdown content on build, so when developing it is important to restart the dev server to rebuild and re-link markdown content.

There are two methods by which content is displayed with a particular template:

### Implicit template linking
Any content in a top level directory in the main [`/content`](./content) directory will be linked to a template of the same name in the [`/src/templates`](./src/templates) directory.

#### Example
```
/content/documentation/index.md               => /src/templates/documentation.js
/content/documentation/doctor/index.md        => /src/templates/documentation.js
/content/documentation/bubbleprof/01-setup.md => /src/templates/documentation.js
```

Should a piece of content not have a named template, the markdown will be displayed in the `/src/templates/default.js` template.

### Explicit template linking
Using `frontmatter` it is possible to override the implicit linking by defining which template to use like so:

```yml
template: tool
```

Will link the content to the `/src/templates/tool.js` template.

### Frontmatter
Frontmatter is used to add extra contextual information to the markdown page and is written as `YAML` at the top of the file between `---` delimiters like so

```markdown
---
# Frontmatter
key: Some string value...
---
# Here's an h1
And a paragraph....
```

Comments in the frontmatter `YAML` are not parsed and so are recommended to help future and other content editors 👍

&nbsp;

## Templates & features
Building on the frontmatter data format, certain templates have enhanced functionality which rely on optional data passed to them.

### SEO
All templates can take a `metaData` object which is combined with the default meta data in the [`/data/meta-data.js`](./data/meta-data.js) file and output using React Helmet in the [`/src/components/MetaData.js`](./src/components/MetaData.js) component.

The frontmatter options are as follows:

```yml
metaData:
  titleParts:
    - Doctor
  description: Diagnose performance issues in your Node.js applications
  image: https://source.unsplash.com/random/800x450
```

#### Breakdown

##### `Array: titleParts`

Defines all parts of the title which will be prepended to the page `<title />` and joined with a dash.

##### `String: description`

Will be used for the following meta tags:

```html
<meta name="description" content="DESCRIPTION" />
<meta property="og:description" content="DESCRIPTION" />
<meta name="twitter:description" content="DESCRIPTION" />
```

##### `String: image`

Will be used for the following meta tag:

```html
<meta property="og:image" content="DESCRIPTION" />
```

### `about.js`

```yml
# Copy for the team section of the template
teamSectionTitle: The Clinic.js experts

# CTA button for bottom of template
cta:
  label: Visit Clinic.js Github repo
  path: https://github.com/clinicjs/node-clinic
```

Within the markdown itself, the following element will be replaced with the `Team` component to show the NearForm team associated with Clinic.js:

```html
<template data-team />
```

This is crudely replaced with a react component within the template and fed with data that's pulled from [stub content](#stubs) in the [`/content/stubs/team`](./content/stubs/team) directory. This has been done to reduce the complexity of the frontmatter in the main 'About' markdown file and while it will create a page, it will not be visible unless linked to within the website.

Note the priority is used to control the order in which the team members appear in the `Team` component in the generated page.

### `blog-list.js`
This template uses GraphQL to look for all converted markdown pages using a regex filter on the page path to ensure it is a blog post. This limits all blog posts to a fixed path canonical '/blog'. Each found page will display as a card which is powered by the frontmatter.

### `blog.js`
Each blog post markdown file has the following frontmatter support:

```yml
# Post author(s)
author: "Andreas Madsen"

# Post date [Y-M-D] (used for ordering)
date: "2018-08-22"

# Use this instead of an h1 in markdown
title: "Clinic.js Doctor just got more advanced with TensorFlow.js"

# The featured image in the blog post card where displayed
hero: "/assets/images/doctor-tensorflow.png"
```

The `title`, `date` and `author` values are combined to create the post heading and all other content outside the frontmatter is parsed as HTML like other templates. Please ensure you don't use a markdown `# h1` as this will repeat in the page.

### `default.js`
This is a catch-all template and simply renders the markdown HTML with support for the `metaData` frontmatter only.

### `documentation.js`
This template is used for the documentation part of the website and is powered by the content in the subdirectories along with the [content tree](#content-trees) JSON.

### `tool.js`
This template displays any content which is explicitly linked using the `template` frontmatter key.

The frontmatter options available are as follows:

```yml
# Ensure the content and frontmatter is passed to the correct template explicitly
template: tool

# Add context to the template (icon, colour etc)
type: doctor

# Ordering (lowest first)
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
exampleUrl: static/assets/html/doctor-example.html

# CTA button for tool template
cta:
  label: Get started with Doctor
  path: /documentation/doctor/
```

#### Breakdown

##### `String: template`
This links content to the `tool.js` template and ensures it is surfaced on the homepage in the [`index.js`](#index.js) React page.

##### `String: type`
This gives the necessary tool branding to the content with the relevant icon and colour scheme. Supported types are:

```
doctor
bubbleprof
flame
heapprofiler
```

Look at the [`/src/theme/helpers/tool-attributes.js`](./src/theme/helpers/tool-attributes.js) helper for more insight.

##### `Number: priority`
This is used in the [`/src/pages/index.js`](./src/pages/index.js) page components GraphQL to show up to three tools on the homepage in an order chosen by the content editor.

##### `String: title`
The tool title which is combined in the template to show along with the buttons and icon to create the page heading or as part of the funnel on the homepage.

##### `String: subtitle`
Subtitle on the page or as part of the funnel on the homepage.

##### `Array: features`
Used only in the tool funnel on the homepage for the styled feature lists with arrows.

##### `String: video`
Used only in the tool funnel on the homepage as the promoted animation linking trough to the tool page.

##### `String: gitHubUrl` & `String: exampleUrl`
Button URLs for the page heading

##### `Object: cta`
Used for the internal CTA button link and text to drive users to documentation for that tool

&nbsp;

## Pages

### `index.js`
This is the homepage which is fed with tool, blog and testimonial content using GraphQL and the [`SiteConfig.js`](./data/SiteConfig.js) file.

### `support.js`
This is the Commercial Support page which is fed with support-package, testimonial and FAQ stub content using GraphQL and the [`SiteConfig.js`](./data/SiteConfig.js) file.

### `404.js`
>>>>>>> fix/filenames
Generic 404 handler. Necessary for in-browser redirects to work when the website is built statically. The copy for the heading and CTA are editable in the [`SiteConfig.js`](./data/SiteConfig.js) file.

## Stubs
Stubs live as normal markdown content in the [`/content/stubs`](./content/stubs) directory. A stub is a piece of parsed markdown which is non-indexable (due to `sitemap.xml` exclusion rules) and is used to enhance templates and pages with extra content-editable features. As of writing, stubs only make use of frontmatter to provide content to components within the website.

### Team members
Team member stubs are used to power the images, names and social media links in the 'The Clinic.js experts' section of the about page.

To update a team member, simply edit the frontmatter in their named markdown file. The options are as follows:

```yml
# Team member name
title: Matteo Collina

# Team member image
image: https://avatars3.githubusercontent.com/u/52195?s=400&v=4

# Links for template buttons
gitHubUrl: https://github.com/mcollina
linkedInUrl: https://www.linkedin.com/in/matteocollina
twitterUrl: https://twitter.com/matteocollina

# Order (lowest number first)
priority: 1
```

### Testimonials
Testimonial stubs are used to power the quote, author and image used for testimonials as they appear on the homepage and and tool pages. Each testimonial uses the `type` frontmatter key to relate it to the correct tool.

To update a testimonial, simply edit the frontmatter in their named markdown file. The options are as follows:

```yml
# Tool type
type: bubbleprof
# Quote
quote: Bubbleprof is kinda blowing my mind.
# Author of quote
author: Jerome Covington, Software Engineer Condé Nast
# Image of author
image: https://pbs.twimg.com/profile_images/766625364328218625/Pve_f1Qy_400x400.jpg
```

The options for the `type` key are as follows:
```
doctor
bubbleprof
flame
heapprofiler
clinic
```

*The `clinic` option is used for the homepage*

### Support Package
The Support Package stubs are used to power the contents of the comparison table on the support page. The frontmatter options are below. It is recommended that the `promoted` option is applied to the middle package to honour the design and for visual clarity.

```yml
# Package title
title: Enterprise

# List of package features
features:
  - Custom solutions to help you reach your goals
  - Support bundles including other NearForm services

# Image to use in comparison
image: /assets/images/support-packages/enterprise.svg

# Button text to appear
buttonText: Contact us to learn more

# Accent colour
colour: '#825034'

# Ordering
priority: 1
```

### FAQ
FAQ stubs use frontmatter for the title to ensure they are all formatted consistently and priority for ordering, but make use of the the markdown body for the answer in order to provide content editors with enough flexibility to add links and other simple HTML to the answer if applicable.

```yml
# Heading
title: What does the Enterprise Tier provide?

# Ordering of FAQs as they appear in the Commercial Support page
priority: 3
```

&nbsp;

## Content trees

During Gatsby startup, the `/content/` directory is parsed and searched for any markdown files. A JSON tree representation of the directory is written into each nested project directory. The file name is `<directory-name>-tree.json`.

This file is used to drive the navigation tree for the documentation part of the when retrieved via GraphQL for the `documentation.js` template and passed to the `SideNav` component by creating a JSON representation of the directory structure of every top level directory within the `/content/` directory.

**To re-generate this file, restart the server.** These files are ignored in git

### How link titles are computed

The generated tree JSON file also parses the file names for each markdown file and uses those as the default value for the tree item title. If the title contains `-` or `_`, they are turned into spaces `' '`. Each word is also capitalized.

To align the title of the markdown file the following rules apply when the tree is transformed from the JSON structure to the final navigation structure via GraphQL. Any frontmatter `title` entries will be used as the displayed link value, otherwise the `# Heading 1` from the markdown file is used as a fallback.  If neither exist then the aforementioned default title value will be used as parsed from the markdown filename.

Given a markdown file with the following name `getting-started.md`:

Priority title from frontmatter. Displayed in the `SideNav` component as *'Getting started with Doctor'*

```yml
title: Getting started with Doctor
```

Second priority if frontmatter `title` does not exist. Displayed in the `SideNav` component as *'Getting started with Clinic.js and Doctor'*

```md
# Getting started with Clinic.js and Doctor
```

Default from filename if neither frontmatter or `h1` exist. Displayed in the `SideNav` component as *'Getting Started'*

### Overview of GraphQL integration

Each Tree JSON file is loaded into Gatsby using [gatsby-transformer-json](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-json) at Gatsby startup. The field name follows the convention `<projectFolder>Json`.

#### Example:

`content/documentation/documentation-tree.json` can be queried in GraphQL with the field `documentationJson`. Each get the value of this JSON, the template needs to query the links, titles, and entry for each project and pass the resulting links array into the `NavigationTree` component.

#### Example:

```graphql
fragment EntryFragment on File {
  id
  childMarkdownRemark {
    htmlAst
    fields {
      slug
      template
    }
    frontmatter {
      title
      priority
    }
  }
}
```

```graphql
tableOfContents: documentationJson {
  title
  entry {
    ...EntryFragment
  }
  links {
    title
    entry {
      ...EntryFragment
    }
    links {
      title
      entry {
        ...EntryFragment
      }
    }
  }
}
```

**NOTE:** The entire file is read statically with GraphQL meaning whenever a new nested directory is added to a project directory, the GraphQL query inside the template component **MUST** be updated to include the new nested structure. Otherwise, the new nested directory will **NOT** be visible.

&nbsp;

## HubSpot
A HubSpot form is integrated as part of the header CTA and homepage hero inside a modal. The config for this form can be found in the [`SiteConfig.js`](./data/SiteConfig.js) file.

In order for the styling to take effect on the form, ensure the form is rendered rather than embedded by turning the 'Unstyled form' option on in HubSpot.

Talk to **Sean Walsh** for more information about HubSpot.

&nbsp;

## Fonts
The fonts used on this website are:

```
Archia Regular (brand, licensed)
Archia Bold    (brand, licensed)
Campton Bold   (brand, licensed)
Space Mono     (Google font, open license)
```

### ⛔️ Warning
Fonts and the font-face CSS live inside the [`static/assets`](./static/assets) directory. These are being used across brand assets from this website as a remote resource, so please **DO NOT** modify the contents, location or name of these files without first considering their usage in the following repos:

- [node-clinic-data-server](https://github.com/clinicjs/node-clinic-data-server)
- [node-clinic-common](https://github.com/clinicjs/node-clinic-common)
- [node-clinic-flame](https://github.com/clinicjs/node-clinic-flame)
- [node-clinic-bubbleprof](https://github.com/clinicjs/node-clinic-bubbleprof)
- [node-clinic-doctor](https://github.com/clinicjs/node-clinic-doctor)
- [node-clinic-heap-profiler](https://github.com/clinicjs/node-clinic-heap-profiler)

&nbsp;

## Credits

Based off [gatsby-start-docs](https://github.com/ericwindmill/gatsby-starter-docs) and [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).
