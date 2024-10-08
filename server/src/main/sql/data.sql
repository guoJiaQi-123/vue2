insert into student(name, sex, age)
values ('宋远桥', '男', 40),
       ('俞莲舟', '男', 38),
       ('俞岱岩', '男', 32),
       ('张松溪', '男', 27),
       ('张翠山', '男', 24),
       ('殷梨亭', '男', 19),
       ('莫声谷', '男', 17);

insert into user(id, username, password)
values (1, 'admin', '123'),
       (2, 'zhang', '123'),
       (3, 'li', '123'),
       (4, 'wang', '123'),
       (5, 'zhao', '123');

insert into role(id, name)
values (10, '管理员'),
       (11, '运维'),
       (12, '顾客');

insert into menu(id, name, pid, path, component, icon)
values (101, '菜单1', 0, '/m1', null, 'el-icon-platform-eleme'),
       (102, '菜单2', 0, '/m2', null, 'el-icon-delete-solid'),
       (103, '菜单3', 0, '/m3', null, 'el-icon-s-tools'),
       (104, '菜单4', 0, '/m4', 'M4View.vue', 'el-icon-user-solid'),
       (105, '子项1', 101, '/m1/c1', 'C1View.vue', 'el-icon-s-goods'),
       (106, '子项2', 101, '/m1/c2', 'C2View.vue', 'el-icon-menu'),
       (107, '子项3', 102, '/m2/c3', 'C3View.vue', 'el-icon-s-marketing'),
       (108, '子项4', 102, '/m2/c4', 'C4View.vue', 'el-icon-s-platform'),
       (109, '子项5', 102, '/m2/c5', 'C5View.vue', 'el-icon-picture'),
       (110, '子项6', 103, '/m3/c6', 'C6View.vue', 'el-icon-upload'),
       (111, '子项7', 103, '/m3/c7', 'C7View.vue', 'el-icon-s-promotion');

insert into func(id, name)
values (200, '功能1'),
       (201, '功能2'),
       (202, '功能3'),
       (203, '功能4'),
       (204, '功能5'),
       (205, '功能6'),
       (206, '功能7'),
       (207, '功能8'),
       (208, '功能9'),
       (209, '功能10'),
       (210, '功能11'),
       (211, '功能12'),
       (212, '功能13'),
       (213, '功能14');

insert into user_role
values (1, 10),
       (2, 11),
       (3, 11),
       (4, 12),
       (5, 12);

insert into role_menu
values (10, 101),
       (10, 102),
       (10, 103),
       (10, 104),
       (10, 105),
       (10, 106),
       (10, 107),
       (10, 108),
       (10, 109),
       (10, 110),
       (10, 111),
       (11, 102),
       (11, 107),
       (11, 108),
       (11, 109),
       (12, 103),
       (12, 110),
       (12, 111);
