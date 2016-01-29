We want our todoStore to be capable of working in two modes.

First one is the regular one - all todos are preserved across
application restarts.

In the other one, after application is reloaded we want to drop
all done todos, so that only the pending ones get displayed after
startup.

Refactor `todoList` into a provider. It should expose an additional
`purgeDone(<true/false>)` method. If called with true in config function,
should operate in the second described mode.