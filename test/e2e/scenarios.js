'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('blog', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });


    it('should automatically redirect to /posts when location hash/fragment is empty', function() {
        expect(browser().location().url()).toBe("/posts");
    });

    describe('header', function() {
        it('Should render the header', function() {
            expect(element('header > div > h1 > a').text())
                .toEqual("Chris Moultrie's");
        });
    });

    describe('sidebar', function() {
        it('Should render the contact links', function() {
            expect(element('sidebar > ul > li:first').text())
                .toMatch(/@tebriel/);
        });
    });


    describe('posts-list', function() {

        beforeEach(function() {
            browser().navigateTo('#/posts');
        });


        it('should render the posts when the user goes to /posts', function() {
            expect(element('[ng-view] li:first').text())
                .toMatch(/.+/);
        });

    });


    describe('post-detail', function() {

        beforeEach(function() {
            browser().navigateTo('#/posts/marionette');
        });


        it('should render view2 when user navigates to /view2', function() {
            expect(element('[ng-view] h2 > a').text())
                .toMatch(/Backbone\.Marionette/);
        });

    });
});
