-- 通过 * 把 users 所有数据查询出来
-- select * from users

--  从 users 中把 password 和 username 数据查询出来
-- select password ,username from users 

-- 向 users 表中，插入新数据，username 的值为 tongy stark  password 的值为  098123
-- insert  into users (password, username) values ('098123','tony start')

-- select * from users

-- 将用户id 为 4 的 密码 改为 888888 
-- update users set password='888888' where id=4

-- select * from users

-- 更新  id=2 的用户的用户密码 为 admin123 同时把状态改为 1
-- update users set password='admin123',status='1' where id=2
-- select * from users

-- 删除 users 表中 id=4 的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 字句的使用
-- select * from users where id>2

-- 删除 id 大于3 
-- delete from users where id>3  

-- 显示所有id大于3 的 和 status为0的用户
-- select * from users where status=0 and id>3 

-- 使用 or 来显示 所有状态为1 或者 username 为 zs的用户
-- select * from users where status=1 or username='zs'

-- 对 users 表中的数据，按照 status 字段进行升序排序 
-- select * from users order by status

-- 按照id 降序排序
-- select * from users order by id desc

-- 对users表中先按照 status 降序排序 在按照 username 进行升序排序
-- select * from users order by status desc , username asc

--  查询users表中 status 为0 的总数据条数
-- select count(*) from users where status=0

--  使用 as 给列起别名
-- select count(*) as total from users where status=0

-- 修改输出结果的列名
-- select username as uname ,password as upwd from users

-- 自增 id 代表重新从1开始（包括1）
-- alter table users atuo increment = 1