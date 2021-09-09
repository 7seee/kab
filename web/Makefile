.DEFAULT_GOAL := help
.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## hexo clean
	./node_modules/hexo-cli/bin/hexo clean

static: ## hexo generate
	./node_modules/hexo-cli/bin/hexo generate
	mkdir -p ./public/img/
	cp -f ./img/* ./public/img/

deploy: ## make static + git push
	git pull
	make static
	git add .
	git commit -m 'deploy'
	git push

%: ## hexo new
	./node_modules/hexo-cli/bin/hexo new $@
	vim ./source/_posts/$@.md
