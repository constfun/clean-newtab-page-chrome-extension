SOURCES = clean.css manifest.json

clean-newtab.zip: $(SOURCES)
	mkdir -p build
	zip build/$@ $^
