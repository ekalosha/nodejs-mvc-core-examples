
// Using STRICT mode for ES6 features
"use strict";

const Core = require('dft-mvc-core');

/**
 *  CLI Module.
 *
 *  @author Eugene A. Kalosha <ekalosha@dfusiontech.com>
 */
class CLIModule extends Core.Bootstrap {

    /**
     * HTTP Server constructor
     */
    constructor () {
        // We must call super() in child class to have access to 'this' in a constructor
        super();
    }

    /**
     * Run some CLI actions
     */
    run () {
        this._logger.log('@@@@@@@@@@@@@@@ Run some CLI Action');
    };
}

module.exports = CLIModule;