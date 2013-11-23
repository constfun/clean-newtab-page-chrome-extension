SOURCES = clean.css manifest.json icon-128.png icon-48.png

clean-newtab.zip: $(SOURCES)
	mkdir -p build
	zip build/$@ $^
