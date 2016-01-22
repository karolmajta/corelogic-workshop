What if i asked you to add another js file to the mix? Let's say
`rest-services.js`. You can make it contain an API_URL constant, like this:

    angular.module('corelogic.rest-services', [])
        .constant('API_URL', 'http://corelogic.pl');

Modify `controllers.js`, so that we can use the `API_URL` in our template:

    angular.module('corelogic.controllers', ['corelogic.services', 'corelogic.rest-services'])
      .controller('pageController',
        ['$scope', 'GREETING', 'API_URL', function ($scope, GREETING, API_URL) {
          $scope.toast = GREETING;
          $scope.apiUrl = API_URL;
        }]
      );

And finally display it in the `templates/page.html` template like this:

    There is no real API at <a ng-href={{apiUrl}}>{{apiUrl}}</a>

We expect this to work, but we get an error instead!
Aha! We forgot to add the new file to `index.html` in a `<script>` tag.
Go ahead, add it and se how it fixes things. But this is inconvenient. We don't
want to modify `index.html` every time we add a new source file.

We can use `grunt-contrib-concat` for that. Add a `concat` task to your Grundfile
basing on the documentation at:

https://github.com/gruntjs/grunt-contrib-concat

Configure the task, so that it outputs the file to `build/js/app.js` file.
