-- MySQL dump 10.13  Distrib 8.1.0, for macos12.6 (x86_64)
--
-- Host: localhost    Database: bugr
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0470eda2-7e32-453c-89b5-0dbdacf35661','56663bac425bb0024e24c6c247c5f3d7d36821d9c391d4df429e60f31b302768','2023-10-18 18:17:21.037','20231018181720_good_migration',NULL,NULL,'2023-10-18 18:17:20.980',1),('355b37b8-cb6c-43be-acfe-25950f101b06','6039737e4eae1f784f20954c51a8522ab26a1682cd6ab8e22e82d5c15e0f33fe','2023-10-18 18:10:48.490','20231018181048_viewing_damages',NULL,NULL,'2023-10-18 18:10:48.483',1),('f0abcb16-755c-48d6-aa48-c73a369142eb','27b19351011d93e6bea3d92d096e5315037a9ef125aa606c2984ee8428611584','2023-10-18 18:10:15.444','20231016100651_add_assigned_issues',NULL,NULL,'2023-10-18 18:10:15.403',1),('f290c0de-f967-4e23-b15d-1b6918e4a796','be65b80eab4ea3a43eac9d7661078bb2e592bfe1b60d4388c8614a6d13f6d16e','2023-10-18 18:10:15.403','20231013134211_add_model',NULL,NULL,'2023-10-18 18:10:15.291',1),('fd97421d-bb36-4e84-a7b0-30d60215cd69','5b43c39da70c48bb909ffac91e268b234fd1b74992bfee2e53d1348ee43479ce','2023-10-18 18:10:15.290','20231007155840_create_issue',NULL,NULL,'2023-10-18 18:10:15.283',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Account`
--

DROP TABLE IF EXISTS `Account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Account` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `providerAccountId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` text COLLATE utf8mb4_unicode_ci,
  `access_token` text COLLATE utf8mb4_unicode_ci,
  `expires_at` int DEFAULT NULL,
  `token_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scope` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_token` text COLLATE utf8mb4_unicode_ci,
  `session_state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  KEY `Account_userId_fkey` (`userId`),
  CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Account`
--

LOCK TABLES `Account` WRITE;
/*!40000 ALTER TABLE `Account` DISABLE KEYS */;
INSERT INTO `Account` VALUES ('clo1wzn4q0002w1jtbra903kj','clo1wzn400000w1jtuyfn4x0z','oauth','google','107083021366201888550',NULL,'ya29.a0AfB_byBjBv_9hM70gxA55xi0MdPz5SF0gIJJvBjj2uiO0BLGHAt9DbFKGMGzFPW5Gwts0jjApwu4SEx5zcjkH-bXmVrZOO1qqZpMzY1ciPINuteWMx4deBAL0a1GKKF7RFxO_VVF3x76W7kOw8iJURq6HoJkxayzfNUaCgYKATASARESFQGOcNnCaWzT47z-CSjXi8RQ0X9ssw0170',1698009697,'Bearer','openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email','eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMDYxMjM4NDg5MDAtbWVvMWw4bHEyaGFvNTd2amQxYWoxMWJubXA4bjlyZmsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzMDYxMjM4NDg5MDAtbWVvMWw4bHEyaGFvNTd2amQxYWoxMWJubXA4bjlyZmsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDcwODMwMjEzNjYyMDE4ODg1NTAiLCJlbWFpbCI6Im1vc2VtbjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIwVzRlWWFmUHYtZEZ5UThKa0NnX0hnIiwibmFtZSI6Ik1vw69zZSBOIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pZMzdpckpHSVpubkp2ZEZ6VHRZa3FOZ2RFSm5vZzJraUFzUG9OS2Q4d3AyTT1zOTYtYyIsImdpdmVuX25hbWUiOiJNb8Ovc2UiLCJmYW1pbHlfbmFtZSI6Ik4iLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTY5ODAwNjA5OCwiZXhwIjoxNjk4MDA5Njk4fQ.ZOWY93Im9UodxByp1jHSU6TWViReWh9nz_hNwIPhwB3_h5rH6cxMRPH-AFiT1bJjB09jLMHIgCQ3FbiS1Y9vz5URhmR0RJKwdBYD5M7o8qnu4HM5wxYffMg8AtRw--RnjZ43INGxnfJ2uw4PCe3Wv9yK2RQwRkGXIRcI52S1Lasj14In0sSVhNLBqYXsxWs7G8gH8n6kj7Mq6PVbqYaBbGTRFFfvjOjPzQAFL1fDsb9Z09TfHaQl3D0sDPXvxNittIEiGhXNRNqDK6xQxR_nKMbcKgb5Q7tfgsHhQb1oXB4QWMczZnhlIoZuMw8UzLwNGQaFcOndeaF13OEZgGvX-A',NULL);
/*!40000 ALTER TABLE `Account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Issue`
--

DROP TABLE IF EXISTS `Issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Issue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('OPEN','IN_PROGRESS','CLOSED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'OPEN',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `assignedToUserId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Issue_assignedToUserId_fkey` (`assignedToUserId`),
  CONSTRAINT `Issue_assignedToUserId_fkey` FOREIGN KEY (`assignedToUserId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Issue`
--

LOCK TABLES `Issue` WRITE;
/*!40000 ALTER TABLE `Issue` DISABLE KEYS */;
INSERT INTO `Issue` VALUES (1,'Login failure','Users reported that they are unable to login using their credentials. Error message displays \"Invalid username or password\" even when the credentials are correct.','OPEN','2023-07-01 07:00:00.000','2023-10-23 15:57:53.219',NULL),(2,'Slow page loads','Multiple reports have indicated that the landing page takes more than 15 seconds to load, impacting user experience significantly.','IN_PROGRESS','2023-07-10 09:12:00.000','2023-07-12 12:30:00.000',NULL),(3,'Database error','During peak times, the application throws database connection errors. We suspect it might be due to connection pool exhaustion.','OPEN','2023-08-01 13:20:00.000','2023-08-01 14:00:00.000',NULL),(4,'Payment gateway issues','Some users have reported that they are facing issues while trying to make a payment. The gateway throws a \"Payment Failed\" error.','CLOSED','2023-08-15 08:00:00.000','2023-08-20 10:45:00.000',NULL),(5,'UI misalignment in mobile view','In the mobile view, some of the UI elements do not align properly, leading to a messy appearance.\', \'IN_PROGRESS','IN_PROGRESS','2023-09-05 07:30:00.000','2023-09-06 08:00:00.000',NULL),(6,'API endpoint not responding','The GET /users endpoint does not return a response occasionally, and the request times out.','OPEN','2023-09-10 12:30:00.000','2023-09-10 13:00:00.000',NULL),(7,'Outdated documentation','The API documentation references endpoints that no longer exist or have been modified.','OPEN','2023-09-18 09:00:00.000','2023-09-18 10:15:00.000',NULL),(8,'Security vulnerability in auth','A potential security vulnerability has been identified in the authentication module, which can allow attackers to bypass login.','IN_PROGRESS','2023-10-01 11:00:00.000','2023-10-23 16:26:24.823','clo1wzn400000w1jtuyfn4x0z'),(9,'Search functionality broken','The search functionality is not returning relevant results. It seems to be an issue with the search algorithm.','OPEN','2023-10-10 07:45:00.000','2023-10-10 08:30:00.000',NULL),(10,'Image upload errors','Users are unable to upload images in their profiles. The upload fails with an \"Unknown Error\" message.','CLOSED','2023-10-15 14:00:00.000','2023-10-16 09:45:00.000',NULL),(11,'Notification not being sent','Users have reported not receiving any notifications even when their settings are enabled.','IN_PROGRESS','2023-07-20 13:20:00.000','2023-07-21 07:30:00.000',NULL),(12,'Profile update crashes','Updating user profile details causes the application to crash. The issue seems to be sporadic.','OPEN','2023-08-05 12:45:00.000','2023-08-05 13:30:00.000',NULL),(13,'Permission issues on files','Some files on the server have incorrect permissions, leading to \"Access Denied\" errors for users.','CLOSED','2023-08-20 10:10:00.000','2023-08-25 14:45:00.000',NULL),(14,'Incorrect data in reports','The monthly reports seem to have incorrect data, potentially due to a bug in the data aggregation logic.','IN_PROGRESS','2023-09-01 08:30:00.000','2023-09-02 08:00:00.000',NULL),(15,'Broken links in footer','Some of the links in the footer of the website lead to 404 error pages.','OPEN','2023-09-12 07:00:00.000','2023-09-12 07:45:00.000',NULL),(16,'Translation errors','The Spanish version of the website has some translation errors, leading to confusion among users.','CLOSED','2023-09-25 12:00:00.000','2023-10-18 19:27:41.392',NULL),(17,'Contact form not working','The contact form on the website does not seem to send emails. Users have reported not getting any acknowledgment.','CLOSED','2023-10-04 09:45:00.000','2023-10-08 08:30:00.000',NULL),(18,'Mobile app crash on launch','The latest version of the mobile app is crashing on launch for some Android users.','IN_PROGRESS','2023-10-11 10:00:00.000','2023-10-12 11:00:00.000',NULL),(19,'Data sync issues','Data syncing between the mobile app and the web platform is inconsistent, leading to data mismatches.','OPEN','2023-07-28 13:00:00.000','2023-10-18 19:28:55.772',NULL),(20,'Analytics data discrepancy','The analytics dashboard is showing different data compared to the database records. There seems to be a discrepancy.','CLOSED','2023-08-30 08:45:00.000','2023-09-04 10:30:00.000',NULL),(21,'Expired SSL Certificate','Users are experiencing security warnings when visiting the website. It appears that the SSL certificate has expired, which is causing browsers to show the website as insecure. Immediate renewal of the certificate is necessary to maintain user trust and website integrity.','OPEN','2023-08-01 08:00:00.000','2023-08-01 08:30:00.000',NULL),(22,'Error 500 on Product Page','The product pages are intermittently returning a 500 internal server error. This might be due to a backend service failing or a problem with the server configuration. It’s essential to investigate this to ensure that customers can view and purchase products reliably.','IN_PROGRESS','2023-08-03 12:30:00.000','2023-08-03 13:00:00.000',NULL),(23,'Missing Order Confirmations','Customers have reported that they are not receiving order confirmation emails after making a purchase. This issue could lead to uncertainty and confusion, potentially resulting in customer service inquiries and dissatisfaction.','OPEN','2023-08-05 09:00:00.000','2023-08-05 10:00:00.000',NULL),(24,'Incorrect Stock Levels','The stock levels displayed on the website don’t accurately reflect the available inventory. Customers might order items that are actually out of stock, leading to potential order cancellations or delays.','CLOSED','2023-08-09 14:00:00.000','2023-08-09 15:00:00.000',NULL),(25,'Password Reset Failure','The password reset functionality seems to be broken. Users are not receiving the password reset emails, and some who do receive an email report that the reset link is invalid or expired.','OPEN','2023-08-15 11:00:00.000','2023-08-15 12:00:00.000',NULL),(26,'Inaccurate Search Results','The search feature on the website is not returning accurate results. Users are finding it difficult to find specific products or information, which might be affecting the user experience and sales.','IN_PROGRESS','2023-08-21 07:00:00.000','2023-08-21 08:00:00.000',NULL),(27,'Failed Order Processing','There’s a critical issue where some customer orders are not being processed correctly. Customers are being charged, but the orders are not being registered in the system, causing fulfillment problems.','OPEN','2023-08-25 13:30:00.000','2023-08-25 14:30:00.000',NULL),(28,'CSS Issues on Safari','The website appears to have CSS styling issues when viewed on Safari. Some elements are misaligned or not displaying correctly, causing the site to look unprofessional and hampering usability.','CLOSED','2023-08-29 10:00:00.000','2023-08-29 11:00:00.000',NULL),(29,'Broken Filters on Catalog Page','Users have reported that filters on the catalog page are not working correctly. They either don’t filter the products as expected or lead to error pages, which makes product navigation challenging.','OPEN','2023-09-02 08:30:00.000','2023-09-02 09:30:00.000',NULL),(30,'Delayed Customer Support Response','Customers are experiencing significant delays when contacting customer support. The current response time is over 48 hours, which is leading to customer frustration and negative feedback.','IN_PROGRESS','2023-09-08 12:00:00.000','2023-09-08 13:00:00.000',NULL),(31,'Incorrect Billing Information','The system seems to be displaying incorrect or outdated billing information on user accounts. This is causing issues with payment processing and may lead to failed transactions or billing errors.','OPEN','2023-09-12 09:30:00.000','2023-09-12 10:30:00.000',NULL),(32,'Newsletter Subscription Error','Users attempting to subscribe to the newsletter are encountering an error message. This prevents them from successfully subscribing and may be causing a loss of potential subscribers.','CLOSED','2023-09-19 07:00:00.000','2023-09-19 08:00:00.000',NULL),(33,'Unavailable Customer Reviews','Customer reviews for products are not displaying on the website. As a result, potential customers cannot view feedback from previous buyers, which could impact their purchasing decisions.','OPEN','2023-09-22 14:00:00.000','2023-09-22 15:00:00.000',NULL),(34,'Disappearing Shopping Cart Items','Items added to the shopping cart are disappearing after users navigate to a different page. This issue is causing frustration and may lead to abandoned carts and lost sales.','IN_PROGRESS','2023-09-27 11:30:00.000','2023-09-27 12:30:00.000',NULL),(35,'Unoptimized Images','Product images on the website are not optimized, causing slow loading times. This issue affects user experience, especially for users with slower internet connections or data limits.','OPEN','2023-10-02 08:00:00.000','2023-10-02 09:00:00.000',NULL),(36,'Faulty Discount Codes','Discount codes generated for promotions are not working at checkout. Customers are unable to avail of the promised discounts, leading to frustration and potential loss of sales.','CLOSED','2023-10-06 13:00:00.000','2023-10-06 14:00:00.000',NULL),(37,'Access Denied on User Profiles','Users are encountering \"Access Denied\" errors when trying to access their own user profiles. This prevents them from viewing or updating their personal information and order history.','IN_PROGRESS','2023-10-10 10:30:00.000','2023-10-10 11:30:00.000',NULL),(38,'Outdated Product Information','Product information on the website is outdated, and in some cases, inaccurate. This misguides the customers and may lead to wrong purchase decisions and subsequent returns.','OPEN','2023-10-15 12:00:00.000','2023-10-15 13:00:00.000',NULL),(39,'Issues with Payment Refunds','Customers are experiencing delays and issues when trying to process refunds. The system is either showing errors or processing refunds with significant delays.','CLOSED','2023-10-20 07:30:00.000','2023-10-24 08:05:02.755',NULL),(40,'Dysfunctional Social Media Links','The social media links on the website footer are not functioning correctly. They either lead to error pages or direct users to the wrong social media profiles.','OPEN','2023-10-25 14:30:00.000','2023-10-24 08:05:37.474',NULL);
/*!40000 ALTER TABLE `Issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Session`
--

DROP TABLE IF EXISTS `Session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Session` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sessionToken` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Session_sessionToken_key` (`sessionToken`),
  KEY `Session_userId_fkey` (`userId`),
  CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Session`
--

LOCK TABLES `Session` WRITE;
/*!40000 ALTER TABLE `Session` DISABLE KEYS */;
/*!40000 ALTER TABLE `Session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emailVerified` datetime(3) DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('clo1wzn400000w1jtuyfn4x0z','Moïse N','mosemn2@gmail.com',NULL,'https://lh3.googleusercontent.com/a/ACg8ocJY37irJGIZnnJvdFzTtYkqNgdEJnog2kiAsPoNKd8wp2M=s96-c');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VerificationToken`
--

DROP TABLE IF EXISTS `VerificationToken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VerificationToken` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `identifier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) NOT NULL,
  UNIQUE KEY `VerificationToken_token_key` (`token`),
  UNIQUE KEY `VerificationToken_identifier_token_key` (`identifier`,`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VerificationToken`
--

LOCK TABLES `VerificationToken` WRITE;
/*!40000 ALTER TABLE `VerificationToken` DISABLE KEYS */;
/*!40000 ALTER TABLE `VerificationToken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 21:15:47
