const reporter = require('cucumber-html-reporter');
 
const options = {
        theme: 'bootstrap',
        jsonFile: 'testreport.json',
        output: 'htmlreport.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
    };
 
    reporter.generate(options);