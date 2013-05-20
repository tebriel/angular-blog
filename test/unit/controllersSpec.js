'use strict';

/* jasmine specs for controllers go here */

describe('PostListCtrl', function() {
    var scope, ctrl, $httpBackend, $controller, $log;

    beforeEach(inject(function(_$httpBackend_, $rootScope, _$controller_, _$log_) {
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        $log = _$log_;
        scope = $rootScope.$new();
    }));

    it('Should fetch the posts', function() {
        $httpBackend.expectGET('posts.json').
            respond([{postName: 'Some_Post'}, {postName: 'Some_Other'}]);

        ctrl = $controller(PostListCtrl, {$scope: scope});
        $httpBackend.flush();
        expect(scope.posts.length).toEqual(2);
    });

    it('Should log an error if the data is null', function() {
        $httpBackend.expectGET('posts.json').
            respond(null);

        ctrl = $controller(PostListCtrl, {$scope: scope});
        $httpBackend.flush();
        expect($log.error.logs.length).toEqual(1);
    });

    it('Should set postIndex as the order property', function() {
        $httpBackend.expectGET('posts.json').
            respond([{postName: 'Some_Post'}, {postName: 'Some_Other'}]);
        ctrl = $controller(PostListCtrl, {$scope: scope});
        expect(scope.orderProp).toEqual('postIndex');
    });

    it('Should set reverse order to true', function() {
        $httpBackend.expectGET('posts.json').
            respond([{postName: 'Some_Post'}, {postName: 'Some_Other'}]);
        ctrl = $controller(PostListCtrl, {$scope: scope});
        expect(scope.reverse).toBeTruthy();
    });
});

describe('PostDetailCtrl', function() {
    var scope, ctrl, routeParams, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('posts.json').
            respond([{postName: 'Some_Post'}, {postName: 'Some_Other'}]);

        scope = $rootScope.$new();
        routeParams = {postName: 'Some_Other'};
        ctrl = $controller(PostDetailCtrl, {$scope: scope, $routeParams: routeParams});
    }));

    it('Should fetch single post', function() {
        $httpBackend.flush();
        expect(scope.post.postName).toEqual('Some_Other');
    });
});

describe('SidebarCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('sidebar.json').
            respond([{methodLink: 'http://www.google.com'}]);

        scope = $rootScope.$new();
        ctrl = $controller(SidebarCtrl, {$scope: scope});
    }));

    it('Should fetch the list of contact info', function() {
        $httpBackend.flush();
        expect(scope.methods.length).toEqual(1);
    });

    it('Should set itemIndex as the order property', function() {
        expect(scope.orderProp).toEqual('itemIndex');
    });

    it('Should set reverse order to false', function() {
        expect(scope.reverse).toBeFalsy();
    });
});
