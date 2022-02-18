install:
	npm ci

app:
	node bin/app.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node bin/calc.js

del:
	node bin/del.js