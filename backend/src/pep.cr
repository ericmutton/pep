# TODO: Write documentation for `Pep`
require "kemal"
module Pep
  VERSION = "0.1.0"

  # TODO: Put your code here
  get "/" do
    "Hello World!"
  end

  Kemal.run
end

