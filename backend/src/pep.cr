# TODO: Write documentation for `Pep`
require "kemal"
require "db"
require "pg"

db = DB.open("postgresql://pep:admin@database:5432/pep")
def setup_db(db)
  db.exec("CREATE TABLE IF NOT EXISTS collections(id VARCHAR PRIMARY KEY, title VARCHAR, author VARCHAR, rating VARCHAR, tags VARCHAR, chapters VARCHAR, ts TIMESTAMP)")
end
module Pep
  VERSION = "0.1.0"
  


  # TODO: Put your code here
  get "/" do |env|
    resp = db.query_one("SELECT NOW()", as: {Time})
    env.response.content_type = "application/json"
    {"time": resp}.to_json 
  end

  get "/get/:id" do |env|
    env.response.content_type = "application/json"
    id = env.params.url["id"]
    retval = {"error": true}.to_json
    begin
      resp = db.query_one("SELECT * FROM collections WHERE id=$1 ORDER BY ts DESC LIMIT 1", id, as: {String, String, String, String, String, String, Time})
      retval = {"id": resp[0], "title": resp[1], "author": resp[2], "rating": resp[3], "tags": resp[4], "chapters": resp[5], "created": resp[6]}.to_json
    rescue ex
      puts ex.message
    end
    retval
  end

  get "/search" do |env|
    env.response.content_type = "application/json"
    tag_string = env.params.query["tags"]
    if tag_string
      ids = nil
      tags = tag_string.split(" ")
      tags.each do |tag|
	safe_tag = tag.gsub(/[^[:alnum:]]/, "")
	if safe_tag != ""
	  tagged_ids = [] of String
	  match = "[[:<:]]"+safe_tag+"[[:>:]]"
	  db.query("SELECT id FROM collections WHERE tags ~ $1", match) do |rs|
	    rs.each do
	      tagged_ids << rs.read(String)
	    end
	  end
	  if !ids
	    ids = tagged_ids
	  else
	    ids = ids & tagged_ids
	  end
	  puts tag
	end
      end
      ids.to_json
    end
    ([] of Nil).to_json
  end

  post "/create-test-collection" do |env|
    begin
      id = env.params.json["id"].as(String)
      title = env.params.json["title"].as(String)
      author = env.params.json["author"].as(String)
      rating = env.params.json["rating"].as(String)
      tags = env.params.json["tags"].as(String)
      chapters = env.params.json["chapters"].as(String)
      db.exec("INSERT INTO collections values ($1, $2, $3, $4, $5, $6, $7)", id, title, author, rating, tags, chapters, Time.utc)
    rescue ex
      puts ex.message
      "error"
    end
    "ok"
  end

  static_headers do |response, filepath, filestat|
    if filepath =~ /\.json$/
      response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173/library")
    end
    response.headers.add("Content-Size", filestat.size.to_s)
  end
  
  setup_db(db)
  Kemal.run
end

