-- Tạo database : create database ten_csdl
create database db_shoes;
use db_shoes;

-- Kiểu dữ liệu cơ bản
/* 
	Kiểu số : int,....
    Kiểu chuỗi : varchar(độ dài của ký tự),
    Kiểu đúng sai : bool
    Kiểu ngày tháng năm:  date
    
    tạo bảng : create table ten_bang( các cột của bảng)
*/
create table product(
	id int auto_increment,
    name varchar(255),
    price int,
    created_date date,
    alias varchar(255),
    size varchar(3),
    deleted bool,
    id_category int,
    
    primary key(id),
    foreign key(id_category) references category(id)
);

create table category(
	id int auto_increment,
    name varchar(255),
    
    primary key(id)
);

-- Câu lệnh xoá bảng : cú pháp : drop table ten_bang_can_xoa
drop table product;

-- Câu lệnh thêm cột vào bảng đã tồn tại : alter table ten_bang add column ten_cot kieu_du_lieu
alter table product add column description text;

-- Câu lệnh dùng để chỉnh sửa kiểu dữ liệu của một cột đã tồn tại trong bảng
alter table product modify column size varchar(255);

/* 
	Thêm dữ liệu vào bảng chỉ định
    cú pháp : insert into ten_bang(ten_cot_can_them,ten_cot_can_them) values (gia_tri,gia_tri)
*/ 
insert into product(name,price,created_date,alias,size,deleted) 
values ('Nike Air Max',250,'2022-05-21','nike-air-max','[36,37,38,39,40,41]',false);

insert into product(name,price,created_date,alias,size,deleted) 
values ('Adidas Ultra Boot',500,'2022-05-20','adidas','[36,37,38,39,40,41]',false);

insert into product(name,price,created_date,alias,size,deleted) 
values ('Puma',250,'2022-05-18','Puma','[36,37,38,39,40,41]',false);

insert into product(name,price,created_date,alias,size,deleted) 
values ('Puma A1',250,'2022-05-18','Puma','[36,37,38,39,40,41]',false);

insert into category(name) values('Nike');
insert into category(name) values('Adidas');
insert into category(name) values('Puma');

/* 
	Lấy dữ liệu từ bảng chỉ định
    Cú pháp : select tên_cột_cần_hiển_thị from tên_bảng
    Nếu lấy hết cột : select * 
    
	Lấy dữ liệu có điều kiện : where cột_trong_bảng = giá_trị_muốn_lấy
*/

select * 
from product;

select *
from product p, category c
where  p.id_category = c.id and c.id = 3;

/* 
	Tạo một bảng user
    - username
    - password
    - created_date
    - full_name
    - gender
    
    - Thêm 3 dòng dữ liệu vào bảng user
    - Viết câu query để lấy hết danh sách user đã thêm
    
*/

create table users(
	id int auto_increment,
    username varchar(255),
    password varchar(255),
    created_date datetime,
    full_name varchar(255),
    gender varchar(5),
    
    primary key(id)
);

insert into users(username, password, created_date, full_name, gender)
values ('nguyenvana@gmail.com','123','2022-06-13','Nguyễn Văn A','nam');
insert into users(username, password, created_date, full_name, gender)
values ('nguyenvanb@gmail.com','admin123','2022-06-13','Nguyễn Văn B','nam');
insert into users(username, password, created_date, full_name, gender)
values ('nguyenvanc@gmail.com','1236789','2022-06-13','Nguyễn Văn C','nữ');

select *
from users;

select *
from category
