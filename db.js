require.paths.unshift(__dirname + "/vendor/rest-mongo/src")

var rest_mongo = require("rest-mongo/core"),
    mongo_backend = require("rest-mongo/mongo_backend"),
    config = require('./config')


var schema = {
  Geek: {
    schema: {
      id: "Geek",
      description: "A geek / person / dev ...",
      type: "object",

      properties: {
        id: {type: "string"},
        name: {type: "string"},
        nickname: {type: "string"},
        pole: {type: "string"},
        avatar_fname: {type: "string"}, //avatar file name
        // position on map:
        width: {type: "float"},
        height: {type: "float"},
        top: {type: "float"},
        left: {type: "float"}
      }
    }
  },

  URL: {
    schema: {
      id: "URL",
      description: "URL, potentially interesting for geeks",
      type: "object",

      properties: {
        url: {type: "string"}, // the URL value
        from: {type: "string"}, // who posted the url (nick, name...)
        channel: {type: "string"} // where it has been posted (irc chan...)
      }
    }
  }

}

var backend = mongo_backend.get_backend(config.db)
exports.RFactory = rest_mongo.getRFactory(schema, backend)

