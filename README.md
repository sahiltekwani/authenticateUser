# authenticateUser
Prolem Statement:Develop a Web service which authenticates a user and returns a token. 

API prototype :
Method: POST 
Route : /api/token






Features:
Login Parameters :
Userid (string) 
Password (string) 

Response (json) :
Code : 200 (success) 
Token (random alpha numeric string 10 chars)  
or Incorrect username or password

MySql code

CREATE DATABASE IF NOT EXISTS `login` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `login`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


Output:
![Screenshot (156)](https://user-images.githubusercontent.com/47172844/150485810-dd277578-491e-4f36-a696-7b139490d9b1.png)


 ![Screenshot (157)](https://user-images.githubusercontent.com/47172844/150485791-c78d0bff-ca49-4b1c-a2de-eb0656bedc90.png)
![Screenshot (158)](https://user-images.githubusercontent.com/47172844/150485801-afa0f04c-62dd-48e6-8fac-231075c6b2eb.png)
![Screenshot (159)](https://user-images.githubusercontent.com/47172844/150485808-973d059c-66d6-4320-b436-70fc884b5691.png)

