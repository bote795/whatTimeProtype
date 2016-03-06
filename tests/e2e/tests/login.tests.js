describe('login', function() {
    var username, password, loginButton;
    beforeEach(function() {
        browser.get('/');
        username = element(by.model('vm.user.username'));
        password = element(by.model('vm.user.password'));
        loginButton = element(by.buttonText("Sign In"));
    });
    it('should validate the credentials for a successful login and display the My profile view', function() {
        username.sendKeys('jack');
        password.sendKeys('jack');
        loginButton.click();
         expect(browser.getLocationAbsUrl())
            .toMatch('/tab/home');
    });
    it('should display unsuccessful  login ', function() {
        username.sendKeys('jack');
        password.sendKeys('jacks');
        loginButton.click();
         expect(browser.getLocationAbsUrl())
            .toMatch('/login');
       /* var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();*/
    });

});