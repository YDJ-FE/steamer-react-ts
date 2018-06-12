"use strict";

const path = require("path"),
    os = require("os"),
    fs = require("fs-extra"),
    chalk = require("chalk"),
    bluebird = require("bluebird"),
    expect = require("expect.js"),
    sinon = require("sinon"),
    compareVersions = require("compare-versions"),
    cp = require("child_process"),
    spawnSync = cp.spawnSync,
    SteamerKit = require("steamer-plugin-kit");

var nodeVer = process.version.replace("V", "").replace("v", ""),
    isNode8 = compareVersions(nodeVer, "8.0.0") > -1;

const CUR_ENV = process.cwd();
const TEST = "";
const PROJECT = path.join(process.cwd(), TEST, "project");
const KIT = path.join(process.cwd(), TEST, "kit");
const kitHomePath = path.join(process.cwd(), TEST, ".steamer/starterkits");
const kitOptionsPath = path.join(kitHomePath, "starterkits.js");

const kitPkg = require('../package.json');
const kitOptions = {
    list: {
        "steamer-react-redux-ts": {
            url: 'https://github.com/YDJ-FE/steamer-react-redux-ts.git',
            path: path.join(process.cwd(), "../../steamer-react-redux-ts"),
            versions: [kitPkg.version],
            description: kitPkg.description,
            currentVersion: kitPkg.version,
            latestVersion: kitPkg.version
        }
    }
};

function linkKit(kitName, cmd) {
    process.chdir(KIT);
    process.chdir(kitName);
    spawnSync("npm", [cmd], { stdio: "inherit" });
}

function userInput(key, val, order) {
    setTimeout(function() {
        process.stdin.emit(key, val);
    }, order * 200);
}

function userInputEnd(cb, order) {
    setTimeout(function() {
        cb();
    }, order * 200);
}

function trimString(str) {
    return str.replace(/(\r\n|\n|\r)/gm, "");
}

before(function() {
    fs.removeSync(path.join(process.cwd(), TEST, ".steamer"));
});

describe("install starterkit", function() {
    before(() => {
        fs.removeSync(PROJECT);
        fs.ensureDirSync(PROJECT);
    });

    it("install", function(done) {
        this.timeout(999999);
        let kit = new SteamerKit({});
        kit.kitHomePath = path.join(process.cwd(), "../../");
        kit.kitOptionsPath = kitOptionsPath;
        kit.writeKitOptions(kitOptions); // reset starterkit.js
        kit.kitOptions = kitOptions;
        let kitGitStub = sinon.stub(kit, "git").callsFake(function(localPath) {
            let fakeGit = {
                checkout: (version, cb) => {
                    expect(version).to.be(kitPkg.version);
                    cb && cb();
                    return fakeGit;
                }
            };

            return fakeGit;
        });

        kit.init();

        userInput("data", "\n", 1);
        userInput("data", "\n", 2);
        userInput("data", `./project/steamer-project1\n`, 3);
        userInput("data", "steamer-project1\n", 4);

        // user options
        userInput("data", "\n", 5);
        userInput("data", "\n", 6);
        userInput("data", "\n", 7);
        userInput("data", "y\n", 8);
        userInput("data", "y\n", 9);

        userInputEnd(() => {
            // console.log(fs.readdirSync(PROJECT))
            // expect(fs.readdirSync(PROJECT)).to.eql(["steamer-project1"]);
            kitGitStub.restore();
            // let folderInfo = fs.readdirSync(
            //     path.join(PROJECT, "steamer-project1")
            // );
            done();
            // let pkg = require(path.join(
            //     PROJECT,
            //     "steamer-project1/package.json"
            // ));
            // expect(pkg.name).to.eql("steamer-project1");
            // expect(pkg.scripts.test).to.eql("jest");
        }, 10);
    });
});
