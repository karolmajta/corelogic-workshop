# Install node and npm

If you're on linux or mac use `nvm`. Install instructions
are available at:

https://github.com/creationix/nvm

(use the install script)

Then do:

    $ nvm ls-remote

to find out what is the newest stable version

    $ nvm install <version>

to install selected version

    $ nvm use <version>

to setup your path and make `node` and `npm` binaries available on PATH.

If you're on windows use the installer from nodejs.org:

https://nodejs.org/en/download/stable/

Try:

    $ npm --version
    $ node --version

To find out if it works.
