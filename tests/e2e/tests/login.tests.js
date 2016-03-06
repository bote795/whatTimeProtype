describe('login', function() {
    var username, password, loginButton;
    beforeEach(function() {
        browser.get('/#/login');
        username = element(by.model('vm.username'));
        password = element(by.model('vm.password'));
        loginButton = element(by.linkText('Log in'));
    });
    it('should validate the credentials for a successful login and display the My profile view', function() {
        username.sendKeys('jack');
        password.sendKeys('jack');
        loginButton.click();
         expect(browser.getLocationAbsUrl())
            .toMatch('/profile');
    });
    it('should display unsuccessful  login ', function() {
        username.sendKeys('jack');
        password.sendKeys('jacks');
        loginButton.click();
         expect(browser.getLocationAbsUrl())
            .toMatch('/login');
        var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();
    });

});