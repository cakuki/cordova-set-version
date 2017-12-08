#! /usr/bin/env node

const fs = require('fs');
const ConfigParser = require('cordova-common').ConfigParser;

const version = process.argv[2]
    || JSON.parse(fs.readFileSync('./package.json', { encoding: 'UTF-8' })).version;

const config = new ConfigParser('./config.xml');

config.setVersion(version);
config.write();
