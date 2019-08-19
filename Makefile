install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
begin:
	make publish
	sudo npm link
lint:
	npx eslint .
