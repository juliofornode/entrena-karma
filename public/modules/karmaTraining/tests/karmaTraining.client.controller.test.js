(function () {

    "use strict";

    describe('testing ControllerTestingControllers', function () {


        var $controller;

        //instantiate module
        beforeEach(module('karmaTraining'));

        //inject _$controller_ service to instantiate controller
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        beforeEach(function () {
            //instantiate controller
            var scope = {};
            var ControllerTestingControllers = $controller('ControllerTestingControllers', {$scope: scope});

        });

        //more simple alternative
        /*
         var scope;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('MyController', {$scope: scope});
        }));
        */


        it('should return the right model', function () {



            expect(scope.palabra).toBe('Caraculo');


        })


    })


}());