.DEFAULT_GOAL := help
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

server: ## hexo server
	screen -d -m ./node_modules/hexo-cli/bin/hexo server

clean: ## hexo clean
	./node_modules/hexo-cli/bin/hexo clean

static: ## hexo generate
	./node_modules/hexo-cli/bin/hexo generate
	mkdir -p ./public/img/
	cp -f ./img/* ./public/img/

commit: ## git commit
	git pull
	make static
	git add .
	git commit -m 'deploy'
	git push

deploy: ## make static + git push
	make commit
	git subtree push --prefix web/web/public origin gh-pages

%: ## hexo new
	./node_modules/hexo-cli/bin/hexo new $@
	vim ./source/_posts/$@.md
