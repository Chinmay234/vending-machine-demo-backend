-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 0.0.0.0    Database: vending_machine
-- ------------------------------------------------------
-- Server version	8.0.28
--
-- Table structure for table `product`
--
DROP DATABASE IF EXISTS `vending_machine`;
CREATE DATABASE `vending_machine`;
USE `vending_machine`;

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `createdAt` date DEFAULT NULL,
  `currentInventory` int DEFAULT '0',
  `description` varchar(200) DEFAULT NULL,
  `image` mediumblob default null,
  `maximumInventory` int DEFAULT '100',
  `name` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=15916 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
