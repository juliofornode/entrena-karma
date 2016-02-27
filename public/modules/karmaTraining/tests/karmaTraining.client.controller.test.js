(function () {

    "use strict";

    describe('ControllerTestingControllers', function () {

        beforeEach(module('karmaTraining'));

        var $controller;

        beforeEach(inject(function(_$controller_){
            // The injector unwraps the underscores (_) from around the parameter
            // names when matching
            $controller = _$controller_;
        }));

        it('should give us the palabra', function () {

            var scope = {};
            var controller = $controller('ControllerTestingControllers', { $scope: scope });
            expect(scope.palabra).toBe("Caraculo");

        })

    })

}());
