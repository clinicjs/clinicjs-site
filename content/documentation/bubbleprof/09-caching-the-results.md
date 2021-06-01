---
title: 'Caching the results'
priority: 9

# SEO
metaData:
  titleParts:
    - Caching the results
    - Bubbleprof
    - Documentation
---

# Caching the results

A way to do that would be to add caching. Our result seldomly changes so caching it in an LRU cache
would be a great way to reduce the amount of database queries done in total.

This is implemented in `4-server-with-caching.js`. Let's run it:

```bash
clinic bubbleprof --on-port 'autocannon -c 5 -a 500 localhost:$PORT' -- node 4-server-with-caching.js
```

![Main view](09-A.png)

Our mongodb bubbles have shrunk 7x. And about 20x in comparison with the first example. Also, following the yellow line in the timeline
tells us that mongodb activity has been replaced by caching activity after initial query response arrived.
Now our mongodb bubbles are tiny - and by far the most time is spent just serving http requests.

Hope this helps you understand the Bubbleprof tool better and how to use it to find your bottlenecks.
