---
priority: 4

# SEO
metaData:
  titleParts:
    - Managing samples
    - CLI
    - Documentation
---

# Managing samples

After we've used Clinic.js tools to gain insight into our application's performance, addressed some observed bottlenecks and re-tested, we might end up with a directory filled with Clinic.js-generated samples. To remove all of these files and directories we can run the following command from the directory these samples reside in:

```bash
clinic clean
```

If we've placed our files somewhere else, we can simply add the `--path` flag to point to that directory instead:

```bash
clinic clean --path ../some-other-dir
```

After running this command there should be no more samples left in the directory. This can be a handy step if we've finished analysing our app and need to push code changes, but don't want Clinic.js samples in our application's repo.

## Ignoring files in git

With `git`, we can add this entry to our application's `.gitignore` file to ensure any samples are ignored in the future:

```
.clinic
```

Alternatively, we can use a global gitignore, so the project does not have to change to accomodate Clinic.js. To configure a global ignore file for git, and add `.clinic` to it, open a command line and do:

```bash
git config --global core.excludesfile ~/.gitignore_global
echo '.clinic' >> ~/.gitignore_global
```

---

##### Up next

Get up to speed with the ins and outs of Clinic.js with the [CLI reference](/documentation/cli/04-reference).
