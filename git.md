# git命令

1. `git init` 初始化本地仓库
2. `git add .` 添加到暂存区
3. `git status` 查看此时git的提交状态
4. `git commit -m "第一次提交代码"` 提交代码
5. `git log` 查看提交记录
6. `git reset --hard HEAD^` 回退到上一个版本
7. `git reflog` 操作记录
8. `git reset --hard 前面六位版本号` 返回指定版本
9. `git remote add origin 链接` 链接远程仓库
10. `git pull origin master` 拉取远程仓库代码并且和本地代码合并
11. `git push origin master` 往远程仓库提交代码
12. `git branch -a` 查看所有分支
13. `git checkout -b dev` 创建分支
14. `git checkout master` 切换分支
15. `git merge dev` 将分支dev合并到当前分支中
16. `git push origin :dev` 删除远程仓库的分支
17. `git branch -d dev` 删除本地的分支
