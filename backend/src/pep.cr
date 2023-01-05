# TODO: Write documentation for `Pep`
require "kemal"
require "json"
module Pep
  VERSION = "0.1.0"

  # TODO: Put your code here
  static_headers do |response, filepath, filestat|
    if filepath =~ /\.json$/
      response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173/library")
    end
    response.headers.add("Content-Size", filestat.size.to_s)
  end

  Kemal.run
end

