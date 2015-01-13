angular.module("express-csrf", []).config([
    "$httpProvider",
    function($httpProvider) {
        var meta  = document.querySelector("meta[name=csrf-token]"),
            token = meta? getAttribute("content") : false;

        // No token
        if (!token) {
            return;
        }

        $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = token;
    }
]);
