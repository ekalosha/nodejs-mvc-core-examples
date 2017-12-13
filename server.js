
// Using STRICT mode for ES6 features
"use strict";

const Core = require('dft-mvc-core');

/**
 *  Importing Application Facade and run the Application.
 *
 *  @author Eugene A. Kalosha <ekalosha@dfusiontech.com>
 */
const applicationFacade = Core.ApplicationFacade.instance;
applicationFacade.load('server', Core.Modules.HTTPServer);
applicationFacade.load('mongoose', Core.Modules.Mongoose);
applicationFacade.load('bootstrap', require('./app/bootstrap.js'));

// Initializing all modules
applicationFacade.init();

// Running modules
applicationFacade.run();
