exports.config = {  
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {                
                args: ['--disable-web-security']
            } 
        },
        baseUrl: 'http://localhost:8101',
        specs: [
            '/tests/*.tests.js'
        ],
        jasmineNodeOpts: {
            isVerbose: true,
        }
};