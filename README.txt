It turns out some of our customers want the done todos to
be displayed after reload, and some don't. Modify Gruntfile.js
and config.ejs, so that you can use `--purge-done` flag during
build time.

Basing on the new constant from `corelogic.config` module modify
the behavior of `todoList` in config function.