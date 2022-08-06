- [Linux基本命令](#linux基本命令)
- [配置Git](#配置git)
- [Git忽略文件](#git忽略文件)
### Linux基本命令
| 命令                | 作用                                    |
| :------------------ | :-------------------------------------- |
| cd ..               | 回到上一级目录                          |
| pwd                 | 显示当前目录                            |
| clear               | 清屏                                    |
| ls                  | 列出当前目录下所有文件                  |
| touch [filename]    | 新建一个文件                            |
| rm 	 [filename]     | 删除一个文件                            |
| rm -rf  	[filename] | 删除目录中所有文件                      |
| mkdir [filename]    | 创建目录                                |
| rm -r [name]        | 删除目录                                |
| mv                  | 移动文件		mv  移动的文件   移动到的路径 |
| reset               | 重新初始化终端/清屏                     |
| history             | 列出所有使用过的命令                    |
| exit                | 退出                                    |

### 配置Git
| 命令 | 作用 |
| ---- | :--- |
git config --global user.name 'jgckM'
git config --global user.emall 'xxxxxxxx@163.com'
git clone [url] |  克隆仓库 [url]:克隆的仓库地址
git config -l	|	列出配置清单
git config --system --list	|	列出Git系统配置
git config --global --list	|	列出用户自己的 Git 配置
ssh-keygen	| 生成公钥
git init |初始化本地仓库
git add . |添加到暂存区
git status |查看此时git的提交状态
git commit -m "第一次提交代码" |提交代码
git log |查看提交记录
git reset --hard HEAD^ |回退到上一个版本
git reflog 操作记录
git reset --hard 前面六位版本号 |返回指定版本
git remote add origin 链接 |链接远程仓库
git pull origin master |拉取远程仓库代码并且和本地代码合并
git push origin master| 往远程仓库提交代码
git branch -a |查看所有分支
git checkout -b dev |创建分支
git checkout master| 切换分支
git merge dev| 将分支dev合并到当前分支中
git push origin :dev |删除远程仓库的分支
git branch -d dev| 删除本地的分支
```
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 合并指定分支到当前分支
git merge [branch]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]

cat [filename]	查看文件内容
git reflog   	查看历史
git reset --hard [版本号]	版本穿梭
git remote add origin git@git.oschina.net:yourname/demo.git 	关联到远程仓库
git pull origin master   拉取远程仓库代码并且和本地代码合并
```

### Git忽略文件
- 创建 .gitignore 文件 
忽略文件中的空行或以井号（#）开始的行将会被忽略。

- 可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。

- 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。

- 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。

- 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。


|           | 作用                                               |
| :-------: | :------------------------------------------------- |
|     #     | 为注释                                             |
|   *.txt   | 忽略所有 .txt结尾的文件,这样的话上传就不会被选中！ |
| !lib.txt  | 但lib.txt除外                                      |
|   /temp   | 仅忽略项目根目录下的TODO文件,不包括其它目录temp    |
|  build/   | 忽略build/目录下的所有文件                         |
| doc/*.txt | 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt  |

