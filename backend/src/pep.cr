# TODO: Write documentation for `Pep`
require "kemal"
require "db"
require "pg"

db = DB.open("postgresql://pep:admin@database:5432/pep")
module Pep
  VERSION = "0.1.0"

  # TODO: Put your code here
  get "/" do |env|
    resp = db.query_one("SELECT NOW()", as: {Time})
    env.response.content_type = "application/json"
    {"time": resp}.to_json 
  end

  Kemal.run
end

