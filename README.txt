This project contains a special file called `.nvmrc`.
The only thing it contains is a version number of node to be used
for this project.

If you type:

     $ nvm use

In project dir, proper version of node and npm will get activated.

It also contains, a package.json file, which contains project configuration,
dependencies etc. You can generate it for new projects using

     $ npm init

But this one has it already prepared.

For this project we will be using grunt and bower. You will need following
packages installed:

- `grunt`,
- `grunt-cli`,
- `bower`

Try installing them with `npm install`. Remember the `--save` option.
It will persist the changes in `package.json`.

After you have your dependencies installed try removing the `node_modules`
directory and running:

    $ npm install
