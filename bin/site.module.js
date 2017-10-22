var utils = require("./utils"),
    fs = require("fs"),
    path = require("path"),
    glob = require("glob"),
    mustache = require("mustache"),
    stripBom = require("strip-bom"),
    utf8 = 'utf-8';



class SiteModule {

    constructor(name, template, target) {

        this.name = name;
        this.target = target;

        if (!template) {

            throw Error("template must be supplied to module");
        }

        this.template = fs.readFileSync(template, utf8);

    }

    build() {

        console.log("building core module level");

    }

    pageDefault() {

        //load the default page JSON object for the site

    }

    generatePageJSON(srcObj){}

    savePageJSON(key, moduleJSON) {

        //merge with default page JSON to create page specific JSON file
        //use this.tager as the root for the path. Join with the key to get the full file path
        //stringify the json to persist
        //utils.createFile(path.join(this.target, key), JSON.stringify(moduleJSON), true);

    }

}

module.exports = SiteModule;