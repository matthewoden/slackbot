#!/usr/bin/env node
//load environment variables
require('dotenv').config();

const config = require('./config');
//initialize bots
require('./src/mathbear')(config.bots.mathbear);
require('./src/wonder')(config.bots.botOfWonder);
