# FinwegoTest
Hi I am Implementing only API not implementing UI,
Because of I have urgent office work so not implementing.



1. I am Using MySql Database, Create The Two Tables

CREATE TABLE `items` (
  `orderNo` int(11) NOT NULL,
  `itemName` varchar(200) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `cost` int(11) NOT NULL,
  `createDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Order` (
  `orderNo` int(11) NOT NULL AUTO_INCREMENT,
  `totalPrice` int(11) NOT NULL,
  `address` varchar(2000) DEFAULT NULL,
  `createDate` date DEFAULT NULL,
  PRIMARY KEY (`orderNo`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

2. cd API/
3. npm install, npm start in one cmd 
4. take another cmd,  cd UI/ 
5. npm install, npm start


POST URL:- http://localhost:5000/v1/pizza
Body:- {
	 "totalPrice": 360,
     "address": "Hyderabad",
     "items":[ 
     		{
	     		"itemName":"onion pizza",
	     		"quantity": 3,
	     		"cost": 70
			 },
			 {
	     		"itemName":" Tamotopizza",
	     		"quantity": 3,
	     		"cost": 50
			 }
     ]
}

GET, DELETE URL:- http://localhost:5000/v1/pizza
Body:- {
	    "id":14
    }

here id means give Order Id




