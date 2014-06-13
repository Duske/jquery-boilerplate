#DUSKE VERSION
# jQuery Boilerplate

### An enhanced version of jQuery-Boilerplate!

When using jquery-boilerplate, I noticed some features missing for my workflow, e.g. testing and stylesheets.
So this fork enhances the original version with features I consider useful for developing jQuery plugins.

## Additional features
* Less stylesheets (less)
* karma-test-runner with jasmine (karma, karma-jasmine)
* jQuery-testing capabilities like fixture support and DOM-methods (jasmine-jquery)
* Grunt server (grunt-contrib-connect)
## Structure

The basic structure of the project is given in the following way:

´´´
demo/
├── index.html
└── layout
    ├── img
    │   └── grey_wash_wall.png
    ├── less
    │   └── main.less
    └── main.css
dist/
├── jquery.boilerplate.js
└── jquery.boilerplate.min.js
src/
├── jquery.boilerplate.coffee
└── jquery.boilerplate.js
test/
├── fixtures
│   └── fixture.html
├── test.js
├── vendor
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── karma.conf.js
├── boilerplate.jquery.json
├── Gruntfile.js
└── package.json
```

## Grunt commands
