npx hexo new ${1} ${2}

if [ -z ${2} ];then
    vim ./source/_posts/${1}.md
else
    vim ./source/_posts/${2}.md
fi
