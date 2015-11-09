-- MySQL dump 10.13  Distrib 5.5.38, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: sitecreator
-- ------------------------------------------------------
-- Server version	5.5.38-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `banimage` varchar(255) DEFAULT NULL,
  `buttomname` varchar(255) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `enterprise_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_banners_business1_idx` (`enterprise_id`),
  CONSTRAINT `fk_banners_business1` FOREIGN KEY (`enterprise_id`) REFERENCES `enterprises` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (5,'Permítenos ir junto a ti hacia el éxito de tus proyectos tecnológicos','b6511c6716ef679eb95c99e1c254b384.jpg','CONÓCELO','active','top',1,'2014-07-31 17:14:49','2014-07-31 17:14:49',NULL);
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `busscomments`
--

DROP TABLE IF EXISTS `busscomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `busscomments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` text,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `commenttype_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_busscomments_users1_idx` (`user_id`),
  KEY `fk_busscomments_comment_types1_idx` (`commenttype_id`),
  CONSTRAINT `fk_busscomments_comment_types1` FOREIGN KEY (`commenttype_id`) REFERENCES `commenttypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_busscomments_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `busscomments`
--

LOCK TABLES `busscomments` WRITE;
/*!40000 ALTER TABLE `busscomments` DISABLE KEYS */;
/*!40000 ALTER TABLE `busscomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pagelink` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'ELÉCTRICA','electrics','e6b0','2014-07-29 00:00:00','2014-07-29 20:16:26'),(2,'TELECOMUNICACIONES','telecommunications','e61d','2014-07-29 00:00:00','2014-07-29 20:16:26'),(3,'INTEGRACIONES','integrations','e690','2014-07-29 00:00:00','2014-07-29 20:16:26'),(4,'NETWORKING','networking','e6c1',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `logo` text,
  `description` varchar(700) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (9,'Generic','aeca2249cb7219b04b65a1a6080ae15c.jpg','Lorem ipsum dolor sit amet, omnesque adolescens ut sit. Et nisl ignota instructior vel, ius eu movet paulo ponderum. Mei stet legere ex. Copiosae vulputate sed in, quis case debet duo an. Doming dissentias eam te, quo ne fastidii molestie petentium. Ut prima illum laudem nam, at eos lorem perpetua interpretaris. Eum tollit nonumes id, quo natum habeo te.','2014-07-29 21:16:28','2014-07-29 21:16:28'),(10,'Adams-D\'Amore','2ed507143fba511bef618de1d3dff173.jpg','','2014-07-29 21:16:29','2014-07-29 21:16:29'),(11,'Bechtelar and Sons','eab464c3eeb76c123075294732f01c5f.jpg','','2014-07-29 21:16:29','2014-07-29 21:16:29'),(12,'Dickinson-Schiller','110f7aa66f0315858bee41774e6b5c9d.jpg','','2014-07-29 21:16:30','2014-07-29 21:16:30'),(13,'Greenholt Ltd','323b60b4fd0be6d26680fa390acb9cfb.jpg','','2014-07-29 21:16:31','2014-07-29 21:16:31'),(14,'Ebert-Langosh','a79a4ea15a86bbb6fc35fd8c979867c3.jpg','','2014-07-29 21:16:31','2014-07-29 21:16:31'),(15,'Tromp-Klein','e17d4e3912c24ecac29ad981d5acfa5e.jpg','','2014-07-29 21:16:32','2014-07-29 21:16:32'),(16,'Mosciski, White and Kuvalis','8db0534dcc464bbbf523c9dd04f1c76a.jpg','','2014-07-29 21:16:33','2014-07-29 21:16:33');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commenttypes`
--

DROP TABLE IF EXISTS `commenttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commenttypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commenttypes`
--

LOCK TABLES `commenttypes` WRITE;
/*!40000 ALTER TABLE `commenttypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `commenttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `body` text,
  `image` varchar(255) DEFAULT NULL,
  `event_date_from` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `event_date_to` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `contenttype_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contents_clients1_idx` (`client_id`),
  KEY `fk_contents_contenttypes1_idx` (`contenttype_id`),
  KEY `fk_contents_category1_idx` (`category_id`),
  CONSTRAINT `fk_contents_category1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_contents_clients1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_contents_contenttypes1` FOREIGN KEY (`contenttype_id`) REFERENCES `contenttypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES (33,'Ut quis enim.','March Hare went \'Sh! sh!\' and the words \'DRINK ME\' beautifully printed on it except a little glass table. \'Now, I\'ll manage better this time,\' she said this, she noticed that they would die. \'The.','360c0eb76c02a590c1db63ff5f56ad1d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:44','2014-07-29 21:46:44',9,2,2),(34,'Et dolorem non pariatur.','Heads below!\' (a loud crash)--\'Now, who did that?--It was Bill, the Lizard) could not join the dance? \"You can really have no idea what to do that,\' said the Mock Turtle. \'Certainly not!\' said Alice.','/home/vagrant/code/iptelecom/public/img/content/53390a8c966e230248f7d1bf7a13cf4d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:44','2014-07-29 21:46:44',9,3,1),(35,'Sit incidunt iure.','Duchess was sitting on a branch of a muchness\"--did you ever eat a little wider. \'Come, it\'s pleased so far,\' thought Alice, \'it\'ll never do to hold it. As soon as she could, for her to wink with.','/home/vagrant/code/iptelecom/public/img/content/ac4feeb8cb3d202cb39e26303620050b.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:45','2014-07-29 21:46:45',9,2,1),(36,'At neque ea.','I hate cats and dogs.\' It was high time to avoid shrinking away altogether. \'That WAS a curious appearance in the other. In the very middle of one! There ought to be no chance of this, so she bore.','/home/vagrant/code/iptelecom/public/img/content/f4a14e5cbf666db3d40d0e7eea0fd09e.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:46','2014-07-29 21:46:46',9,3,3),(37,'Asperiores qui sit.','Alice: \'allow me to introduce some other subject of conversation. \'Are you--are you fond--of--of dogs?\' The Mouse did not get hold of its mouth and yawned once or twice, and shook itself. Then it.','/home/vagrant/code/iptelecom/public/img/content/cee0790b8725e9cf5a507b4cd4bf8a13.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:47','2014-07-29 21:46:47',9,3,3),(38,'Sint sapiente aut magnam.','Alice timidly. \'Would you tell me,\' said Alice, \'it\'s very interesting. I never heard before, \'Sure then I\'m here! Digging for apples, indeed!\' said the King replied. Here the Queen was close behind.','/home/vagrant/code/iptelecom/public/img/content/895df5dfa162a8f99bedac0ed3f559ea.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:47','2014-07-29 21:46:47',9,3,3),(39,'Praesentium quo itaque quasi atque.','I to get in at the cook, and a Dodo, a Lory and an Eaglet, and several other curious creatures. Alice led the way, and nothing seems to suit them!\' \'I haven\'t the least notice of her voice. Nobody.','/home/vagrant/code/iptelecom/public/img/content/7a6a7164e6d8780125fc1a56e87f2761.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:48','2014-07-29 21:46:48',9,1,2),(40,'Odit id et.','Duchess by this time, as it happens; and if it wasn\'t trouble enough hatching the eggs,\' said the cook. \'Treacle,\' said a whiting before.\' \'I can see you\'re trying to find that the Queen was close.','/home/vagrant/code/iptelecom/public/img/content/727d39a7a55bcee96a93159fce4b2d97.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:49','2014-07-29 21:46:49',9,3,3),(41,'Ut qui est quaerat ea.','He was looking at everything about her, to pass away the moment she quite forgot how to spell \'stupid,\' and that makes the matter worse. You MUST have meant some mischief, or else you\'d have signed.','/home/vagrant/code/iptelecom/public/img/content/ec411150ef7d31635643434889111998.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:49','2014-07-29 21:46:49',9,3,3),(42,'Nemo doloribus.','Why, it fills the whole window!\' \'Sure, it does, yer honour: but it\'s an arm for all that.\' \'With extras?\' asked the Mock Turtle is.\' \'It\'s the thing Mock Turtle is.\' \'It\'s the first really clever.','/home/vagrant/code/iptelecom/public/img/content/06dc64584760407af460f481306604d1.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:50','2014-07-29 21:46:50',9,2,1),(43,'Aliquid consequuntur sint.','I should think very likely it can be,\' said the Queen. \'I never heard before, \'Sure then I\'m here! Digging for apples, yer honour!\' \'Digging for apples, yer honour!\' (He pronounced it \'arrum.\') \'An.','/home/vagrant/code/iptelecom/public/img/content/85b6102ed04cd4bbe650b4107e36655a.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:51','2014-07-29 21:46:51',9,1,3),(44,'Sit ea est.','I give you fair warning,\' shouted the Queen, who was peeping anxiously into her face. \'Wake up, Alice dear!\' said her sister; \'Why, what are they made of?\' \'Pepper, mostly,\' said the Hatter went on,.','/home/vagrant/code/iptelecom/public/img/content/efea99e94e00a252979eb82330e9d283.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:51','2014-07-29 21:46:51',9,3,2),(45,'Quia tempore sed eos.','Queen. An invitation from the change: and Alice heard the King said to Alice. \'Only a thimble,\' said Alice more boldly: \'you know you\'re growing too.\' \'Yes, but some crumbs must have a trial: For.','/home/vagrant/code/iptelecom/public/img/content/55494e7f09871a16f5551a7eacdd987d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:52','2014-07-29 21:46:52',9,2,1),(46,'Modi vel laudantium.','QUITE as much as she went nearer to watch them, and considered a little three-legged table, all made of solid glass; there was silence for some minutes. The Caterpillar and Alice was soon submitted.','/home/vagrant/code/iptelecom/public/img/content/2ca83b639d4752d99790e90cf74b6598.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:53','2014-07-29 21:46:53',9,1,2),(47,'Eaque et optio.','Majesty,\' said the Caterpillar. Alice said to the confused clamour of the sense, and the two sides of the day; and this was of very little use, as it is.\' \'Then you shouldn\'t talk,\' said the Queen..','/home/vagrant/code/iptelecom/public/img/content/647c72b67888bfbb3129f6c82f765449.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:53','2014-07-29 21:46:53',9,2,1),(48,'Quaerat expedita sunt et.','Caterpillar. Alice said to live. \'I\'ve seen hatters before,\' she said to the porpoise, \"Keep back, please: we don\'t want to stay with it as a partner!\' cried the Mock Turtle sang this, very slowly.','/home/vagrant/code/iptelecom/public/img/content/04525f0224f57a9ce513e2a8180e5c75.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:54','2014-07-29 21:46:54',9,1,2),(49,'Soluta numquam ducimus velit.','I think--\' (she was rather glad there WAS no one to listen to her, And mentioned me to him: She gave me a good deal frightened at the Queen, and Alice joined the procession, wondering very much.','/home/vagrant/code/iptelecom/public/img/content/40d0b5edd837e7ef28077c8cf7b3a6cc.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:55','2014-07-29 21:46:55',9,2,1),(50,'Tenetur dolores.','I only wish they COULD! I\'m sure she\'s the best way to hear it say, as it happens; and if I know I have none, Why, I wouldn\'t be so kind,\' Alice replied, rather shyly, \'I--I hardly know, sir, just.','/home/vagrant/code/iptelecom/public/img/content/2dfda09cfc87a06945b72e97a551840b.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:55','2014-07-29 21:46:55',9,2,1),(51,'Hic eos.','I can\'t take LESS,\' said the Duchess, as she could not think of nothing else to do, so Alice soon came upon a low voice. \'Not at first, but, after watching it a minute or two sobs choked his voice..','/home/vagrant/code/iptelecom/public/img/content/851c039133d17b9d517104d374ae3523.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:56','2014-07-29 21:46:56',9,3,1),(52,'Sunt ut.','I shall remember it in with a bound into the roof of the wood--(she considered him to you, Though they were trying which word sounded best. Some of the Lobster; I heard him declare, \"You have baked.','/home/vagrant/code/iptelecom/public/img/content/6e36da041e5f50ced3098c9e3a4630ff.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:57','2014-07-29 21:46:57',9,1,3),(53,'Sunt beatae unde autem.','I\'m not used to do:-- \'How doth the little--\"\' and she told her sister, as well as if nothing had happened. \'How am I to get out again. That\'s all.\' \'Thank you,\' said Alice, seriously, \'I\'ll have.','/home/vagrant/code/iptelecom/public/img/content/b55ed1ba9738776d0c01ffa5b29df118.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:58','2014-07-29 21:46:58',9,1,3),(54,'Magni accusamus recusandae vero.','Let me see--how IS it to be lost: away went Alice like the wind, and was going to say,\' said the Dodo. Then they both sat silent for a minute or two sobs choked his voice. \'Same as if nothing had.','59c221421a1cee79f1e087ca4dab1754.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:58','2014-07-29 21:46:58',9,2,2),(55,'Illum illo.','Alice had learnt several things of this sort in her pocket) till she was peering about anxiously among the trees as well as if it please your Majesty!\' the Duchess began in a loud, indignant voice,.','/home/vagrant/code/iptelecom/public/img/content/797ae21595a8c472413eb59d56280914.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:46:59','2014-07-29 21:46:59',9,1,2),(56,'Consequuntur optio corrupti id.','I think I should be like then?\' And she went on in the last few minutes, and she was quite pleased to have the experiment tried. \'Very true,\' said the youth, \'and your jaws are too weak For anything.','/home/vagrant/code/iptelecom/public/img/content/f6bd3dca8680241957263ac4f19f9175.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:00','2014-07-29 21:47:00',9,3,2),(57,'Asperiores eos est.','March Hare said in a sulky tone, as it can be,\' said the Caterpillar. Here was another puzzling question; and as Alice could see it trying in a day or two: wouldn\'t it be of very little way off, and.','/home/vagrant/code/iptelecom/public/img/content/ac253647fbe88b4208ecc87a1d88f60f.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:01','2014-07-29 21:47:01',9,1,3),(58,'Dicta suscipit odit accusamus corrupti.','SHE HAD THIS FIT--\" you never to lose YOUR temper!\' \'Hold your tongue!\' added the Dormouse. \'Don\'t talk nonsense,\' said Alice to herself. Imagine her surprise, when the Rabbit came up to the Queen,.','90f2acf42d961e48c23eda37929980c9.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:02','2014-07-29 21:47:02',9,1,1),(59,'Eum dolore libero.','Pat, what\'s that in some alarm. This time there could be NO mistake about it: it was in such long ringlets, and mine doesn\'t go in at all?\' said the King; \'and don\'t be particular--Here, Bill! catch.','/home/vagrant/code/iptelecom/public/img/content/98af7c7958dcb4e2c46831fea46a2793.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:02','2014-07-29 21:47:02',9,3,3),(60,'Aut mollitia in corrupti.','I don\'t keep the same year for such dainties would not give all else for two reasons. First, because I\'m on the Duchess\'s knee, while plates and dishes crashed around it--once more the pig-baby was.','/home/vagrant/code/iptelecom/public/img/content/3668e274756d28cf941ccbbac56e5e5a.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:03','2014-07-29 21:47:03',9,1,2),(61,'Sed explicabo qui voluptatem.','Alice to find herself still in existence; \'and now for the next moment a shower of little pebbles came rattling in at the time they had at the bottom of a tree in front of them, with her head!\'.','080b437d8984b227ee9948f1d5f5a6c4.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:04','2014-07-29 21:47:04',9,2,2),(62,'Voluptatum sequi rerum.','Queen. \'Never!\' said the Caterpillar. \'Is that the hedgehog a blow with its head, it WOULD twist itself round and look up in a large ring, with the bread-and-butter getting so far off). \'Oh, my poor.','/home/vagrant/code/iptelecom/public/img/content/8f2afe9e8653a74bc3e5c714e9c2a1d5.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-07-29 21:47:05','2014-07-29 21:47:05',9,3,1),(64,'veamos','Lorem ipsum dolor sit amet, unum altera audiam et pro. Per oblique fuisset eligendi cu, ad etiam essent minimum sea. Id mei referrentur neglegentur, ne vivendo delicatissimi pri. Has principes dissentiunt at. Exerci sanctus ei sit, audiam vivendo perfecto no mel, ad nam delenit scribentur.\r\n\r\nDuo luptatum prodesset id, diceret debitis similique duo ea. Vix populo tibique referrentur an. Tota maiorum volumus pri id, vivendo assueverit vel ne. Error labitur no duo, iudico tempor aliquip cum at. Te omittam adolescens qui. Eum dicit scaevola aliquando eu, tota saepe ut ius.\r\n\r\nNonumes legendos assueverit ea vel, dicit graeco ut vel, quas laudem ea quo. Quot vocent integre id mel. Munere luptatum vim te. Ut vim dico eros denique, elitr suavitate persecuti eam id, te deserunt senserit salutandi eos. Aeque perfecto te pri, eros inciderint no his, eum agam tempor reprimique id. Eius nihil atomorum pri cu, sea ei audire menandri qualisque, mutat dicam laboramus pri no.\r\n\r\nEsse putent expetenda ex per, an amet ignota causae per. Nec ex accumsan mnesarchum, cum te luptatum adipiscing, quando vidisse at nec. Quod corrumpit has ei, commodo abhorreant nam te. Inimicus postulant philosophia sed an, aliquid equidem omnesque ad per, est ei viris omittantur. Pro eu timeam tractatos accommodare.','360c0eb76c02a590c1db63ff5f56ad1d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-08-15 01:10:18','2014-08-15 01:10:18',9,1,1),(65,'Titulazo','<p></p><div>Lorem ipsum dolor sit amet, mel perfecto argumentum disputando et, ad ullum antiopam per, primis constituto ius ei. Brute iudico ei mea, mei recusabo indoctum explicari ex. Illud altera prodesset ei est, etiam debitis ei sit. Percipit perpetua an has, ei vim scripta repudiare deterruisset. Ei soleat eleifend pertinacia mea, sea recteque ocurreret in. Vivendo recusabo pro et, nam nullam consectetuer et, ea novum malorum dissentiet sit. Velit nostrud volutpat vix ne, eos dicunt blandit eleifend ad.</div><p><span class=\"f-img-wrap\"><img alt=\"Image title\" src=\"http://i.froala.com/images/54d2a784ee8b2f916d6be548cc0d716416de379b.png?1408476736\" width=\"177\" style=\"min-width: 16px; min-height: 16px; margin: 10px 0px;\"></span></p><p></p><p></p><div>Diam ipsum probatus sed an. Id sed suscipit definiebas, per ei suscipit periculis complectitur. Quot omnis vel an. Est sint soluta ut, qui ei iudico perfecto, at eam novum corpora. At mundi sonet cum, equidem placerat vis id.</div><p><span style=\"line-height: 20.8px;\">Sanctus invidunt persecuti ex eum, id pri sale comprehensam. Dicant impetus discere eam ex, vel velit partem indoctum ut. Cum soluta sanctus et. Magna deseruisse cum eu, at prodesset disputando usu. Dolore officiis persequeris id usu.</span><br></p><p><span class=\"f-img-wrap\"><img alt=\"Image title\" src=\"http://i.froala.com/images/1e558ce24113283f6130c127680eb06ce8c69f71.jpg?1408476771\" width=\"154\" style=\"min-width: 16px; min-height: 16px; margin: 10px 0px;\"></span></p><p></p><div>Ut enim nulla nam, no mea fugit dissentias necessitatibus. Ut clita dissentiet qui, autem malis accusamus ea ius. Qui etiam elitr civibus ei, ea sed tollit postulant conclusionemque, cum ei eius interpretaris. Usu an verear dissentiunt, in duo lorem constituto. Mea te euismod expetenda evertitur, affert imperdiet pri eu. Ut usu summo nihil lobortis, mel laudem scaevola percipitur ea, sea purto legere praesent in.</div><p><span style=\"line-height: 20.799999237060547px;\">Labores pertinax facilisis ei per, velit habemus tacimates in cum. Te primis detracto senserit mea. Dicunt feugiat has ea. At habeo munere mei, nostro deserunt reprehendunt in mei, his mentitum temporibus ut. Pro ea dicat dicant omnium, quot qualisque posidonium usu ei, probo aperiri an ne</span><br></p><p></p>','360c0eb76c02a590c1db63ff5f56ad1d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-08-19 19:14:35','2014-08-19 19:14:35',9,1,1),(66,'SERVICIO LEGÍTIMO','<p><div style=\"text-align: justify;\">Lorem ipsum dolor sit amet, mel perfecto argumentum disputando et, ad ullum antiopam per, primis constituto ius ei. Brute iudico ei mea, mei recusabo indoctum explicari ex. Illud altera prodesset ei est, etiam debitis ei sit. Percipit perpetua an has, ei vim scripta repudiare deterruisset. Ei soleat eleifend pertinacia mea, sea recteque ocurreret in. Vivendo recusabo pro et, nam nullam consectetuer et, ea novum malorum dissentiet sit. Velit nostrud volutpat vix ne, eos dicunt blandit eleifend ad.</div><p><span class=\"f-img-wrap\"><img alt=\"Image title\" src=\"http://iptelecom.dev:8000/img/content/edition/p0IeIbcCie_face1.jpg\" width=\"300\" style=\"min-width: 16px; min-height: 16px; margin-bottom: 10px; margin-left: auto; margin-right: auto; margin-top: 10px\"></span></p><p></p><div>Diam ipsum probatus sed an. Id sed suscipit definiebas, per ei suscipit periculis complectitur. Quot omnis vel an. Est sint soluta ut, qui ei iudico perfecto, at eam novum corpora. At mundi sonet cum, equidem placerat vis id.</div><p><span style=\"line-height: 20.8px;\">Sanctus invidunt persecuti ex eum, id pri sale comprehensam. Dicant impetus discere eam ex, vel velit partem indoctum ut. Cum soluta sanctus et. Magna deseruisse cum eu, at prodesset disputando usu. Dolore officiis persequeris id usu.</span><br></p><p></p><div>Ut enim nulla nam, no mea fugit dissentias necessitatibus. Ut clita dissentiet qui, autem malis accusamus ea ius. Qui etiam elitr civibus ei, ea sed tollit postulant conclusionemque, cum ei eius interpretaris. Usu an verear dissentiunt, in duo lorem constituto. Mea te euismod expetenda evertitur, affert imperdiet pri eu. Ut usu summo nihil lobortis, mel laudem scaevola percipitur ea, sea purto legere praesent in.</div><p><span class=\"f-img-wrap\"><img alt=\"Image title\" src=\"http://iptelecom.dev:8000/img/content/edition/LFtqcWZPiP_face4.jpg\" width=\"300\" style=\"min-width: 16px; min-height: 16px; margin-bottom: 10px; margin-left: auto; margin-right: auto; margin-top: 10px\"></span></p><p></p><div>Labores pertinax facilisis ei per, velit habemus tacimates in cum. Te primis detracto senserit mea. Dicunt feugiat has ea. At habeo munere mei, nostro deserunt reprehendunt in mei, his mentitum temporibus ut. Pro ea dicat dicant omnium, quot qualisque posidonium usu ei, probo aperiri an nec.</div><br></p>','360c0eb76c02a590c1db63ff5f56ad1d.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00','2014-08-19 20:38:33','2014-08-19 20:38:33',9,3,1),(67,'nuevo upload','<p><br></p><div>Lorem ipsum dolor sit amet, mel perfecto argumentum disputando et, ad ullum antiopam per, primis constituto ius ei. Brute iudico ei mea, mei recusabo indoctum explicari ex. Illud altera prodesset ei est, etiam debitis ei sit. Percipit perpetua an has, ei vim scripta repudiare deterruisset. Ei soleat eleifend pertinacia mea, sea recteque ocurreret in. Vivendo recusabo pro et, nam nullam consectetuer et, ea novum malorum dissentiet sit. Velit nostrud volutpat vix ne, eos dicunt blandit eleifend ad.</div><p><br></p><div>Diam ipsum probatus sed an. Id sed suscipit definiebas, per ei suscipit periculis complectitur. Quot omnis vel an. Est sint soluta ut, qui ei iudico perfecto, at eam novum corpora. At mundi sonet cum, equidem placerat vis id.</div><p><span class=\"f-img-wrap\" style=\"text-align: center;\"><img alt=\"Image title\" src=\"http://iptelecom.dev:8000/img/content/edition/QcfExBT5lz_face4.jpg\" width=\"300\" style=\"min-width: 16px; min-height: 16px; margin: 10px 0px; float: none;\"></span></p><p><br></p><p><br></p><div>Sanctus invidunt persecuti ex eum, id pri sale comprehensam. Dicant impetus discere eam ex, vel velit partem indoctum ut. Cum soluta sanctus et. Magna deseruisse cum eu, at prodesset disputando usu. Dolore officiis persequeris id usu.</div><p><br></p><div>Ut enim nulla nam, no mea fugit dissentias necessitatibus. Ut clita dissentiet qui, autem malis accusamus ea ius. Qui etiam elitr civibus ei, ea sed tollit postulant conclusionemque, cum ei eius interpretaris. Usu an verear dissentiunt, in duo lorem constituto. Mea te euismod expetenda evertitur, affert imperdiet pri eu. Ut usu summo nihil lobortis, mel laudem scaevola percipitur ea, sea purto legere praesent in.</div><p><span class=\"f-img-wrap\"><img alt=\"Image title\" src=\"http://iptelecom.dev:8000/img/content/edition/Qo08j0RSDi_desktop.png\" width=\"300\" style=\"min-width: 16px; min-height: 16px; margin-bottom: 10px; margin-left: auto; margin-right: auto; margin-top: 10px\"></span></p><p><br></p><p><br></p><div>Labores pertinax facilisis ei per, velit habemus tacimates in cum. Te primis detracto senserit mea. Dicunt feugiat has ea. At habeo munere mei, nostro deserunt reprehendunt in mei, his mentitum temporibus ut. Pro ea dicat dicant omnium, quot qualisque posidonium usu ei, probo aperiri an nec.</div><p><br></p>',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00','2014-08-19 20:58:27','2014-08-19 20:58:27',9,2,1);
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenttypes`
--

DROP TABLE IF EXISTS `contenttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contenttypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `pagelink` varchar(255) NOT NULL,
  `order` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `menustate` varchar(255) NOT NULL,
  `menuitem` tinyint(1) NOT NULL,
  `marketitem` tinyint(1) NOT NULL,
  `footeritem` tinyint(1) NOT NULL,
  `categorize` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenttypes`
--

LOCK TABLES `contenttypes` WRITE;
/*!40000 ALTER TABLE `contenttypes` DISABLE KEYS */;
INSERT INTO `contenttypes` VALUES (1,'SERVICIOS','services','2','cogs','',1,1,1,1,'2014-07-29 00:00:00','2014-07-29 20:08:37'),(2,'PORTAFOLIO','portfolio','3','briefcase','',1,1,1,1,'2014-07-29 00:00:00','2014-07-29 20:08:37'),(3,'HISTORIAS DE ÉXITO','successstories','','trophy','',0,1,1,0,'2014-07-29 00:00:00','2014-07-29 20:08:37'),(4,'HOME','','1','home','active',1,0,0,0,NULL,NULL),(5,'ACERCA DE IPTELECOM','about','4','institution','',0,0,0,0,NULL,NULL);
/*!40000 ALTER TABLE `contenttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enterprises`
--

DROP TABLE IF EXISTS `enterprises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enterprises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `salesemail` varchar(45) DEFAULT NULL,
  `twitter` varchar(45) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `celphone` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `testimonialsintro` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enterprises`
--

LOCK TABLES `enterprises` WRITE;
/*!40000 ALTER TABLE `enterprises` DISABLE KEYS */;
INSERT INTO `enterprises` VALUES (1,'IP TELECOM','logo_ipt.png','2401855','randrade@iptelec.com','randrade@iptelec.com','','','','www.iptelec.com','0989115030','Los Ciclames E1167 y Los Guabos','Nuestros Clientes han confiado en nuestro trabajo.. Ha sido magnífico trabajar con ellos...','2014-07-29 00:00:00','2014-07-29 19:49:01');
/*!40000 ALTER TABLE `enterprises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `client` varchar(255) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `inquiry` text,
  `status` tinyint(4) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leads`
--

LOCK TABLES `leads` WRITE;
/*!40000 ALTER TABLE `leads` DISABLE KEYS */;
INSERT INTO `leads` VALUES (1,'juan','andrade','2444444','jfrand011@hotmail.com','yo',NULL,'texto',1,'2014-08-04 19:02:23','2014-08-04 19:02:23'),(2,'juan','andrade','2444444','jfandradea@gmail.com','',NULL,'',1,'2014-08-04 20:26:15','2014-08-04 20:26:15'),(3,'juan','andrade','2444444','jfrand011@hotmail.com','',NULL,'dsxdsxdsxsd',1,'2014-08-04 20:30:11','2014-08-04 20:30:11'),(4,'juan','andrade','6666676','jfandradea@gmail.com','',NULL,'',1,'2014-08-04 20:32:33','2014-08-04 20:32:33'),(5,'juan','andrade','2444444','jfandradea@gmail.com','',NULL,'',1,'2014-08-05 00:17:32','2014-08-05 00:17:32'),(6,'juan','andrade','2444444','jfandradea@gmail.com','',NULL,'',1,'2014-08-05 00:19:52','2014-08-05 00:19:52'),(7,'juan','andrade','2444444','jfandradea@gmail.com','',NULL,'',1,'2014-08-05 00:25:01','2014-08-05 00:25:01'),(8,'juan','andrade','2444444','jfandradea@gmail.com','',NULL,'',1,'2014-08-05 00:27:29','2014-08-05 00:27:29'),(9,'juan','andrade','0968741465','jfrand011@hotmail.com','ACME CIA. LTDA.',NULL,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ',1,'2014-08-05 00:44:55','2014-08-05 00:44:55'),(10,'juan','andrade','2444444','jfrand011@hotmail.com','ACME CIA. LTDA.',NULL,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ',1,'2014-08-05 00:47:47','2014-08-05 00:47:47'),(11,'juan','andrade','2444444','jfrand011@hotmail.com','ACME CIA. LTDA.',NULL,'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ',1,'2014-08-05 00:51:27','2014-08-05 00:51:27'),(12,'juan','andrade','telf','jfandradea@gmail.com','acme',NULL,'consulta',1,'2014-08-05 21:56:05','2014-08-05 21:56:05'),(13,'cdcdsc','sdcdscsdc','ccdscdscds','jfandradea@gmail.com','csdcdsc',NULL,'cdcsc',1,'2014-08-05 22:34:49','2014-08-05 22:34:49'),(14,'bfgb','gbgfbbg','gbgfbgfb','jfandradea@gmail.com','fbgfbfgbgfb',NULL,'gbgfbfg',1,'2014-08-05 22:39:16','2014-08-05 22:39:16'),(15,'bfgbvgb','vgfvgfv','vddv','jfandradea@gmail.com','gfvfgvgfvf',NULL,'fdvfdvfd',1,'2014-08-05 22:40:42','2014-08-05 22:40:42'),(16,'bfgbvgb','vgfvgfv','vfvdfv','jfandradea@gmail.com','gfvfgvgfvf',NULL,'fdvfdvfdvfd',1,'2014-08-05 22:42:07','2014-08-05 22:42:07'),(17,'bfgbvgb','vgfvgfv','cfdc','jfandradea@gmail.com','gfvfgvgfvf',NULL,'dfcdcfd',1,'2014-08-05 22:46:13','2014-08-05 22:46:13'),(18,'ht','btyt','hythtyht','htyhtyh','ttytbtb',NULL,'ythh',1,'2014-08-05 23:20:58','2014-08-05 23:20:58'),(19,'bgv','fgbvgfbgfbg','vdffdvdfvdfvfd','jfandradea@gmail.com','fgbgfbb',NULL,'vdfvdfv',1,'2014-08-06 00:00:33','2014-08-06 00:00:33'),(20,'juan','andrade','2444444','jfandradea@gmail.com','jfa',NULL,'consultation',1,'2014-08-06 00:03:31','2014-08-06 00:03:31'),(21,'Juan','Andrade','2444444','jfandradea@gmail.com','',NULL,' s sdxsdxdsxdsxds',1,'2014-08-06 00:46:51','2014-08-06 00:46:51'),(22,'juan','An','2444444','jfandradea@gmail.com','jknjknk',NULL,'nknlknlknklnnl\r\njknjnjknjknjkn',1,'2014-08-06 01:15:57','2014-08-06 01:15:57'),(23,'juan','andrade','2444444','jfrand011@hotmail.com','acme',NULL,'vfvdfvfdvfdv',1,'2014-08-07 03:06:13','2014-08-07 03:06:13'),(24,'juan','andrade','2444444','jfrand011@hotmail.com','ACME CIA. LTDA.',NULL,'consulta',1,'2014-08-07 03:07:05','2014-08-07 03:07:05'),(25,'juan','andrade','0968741465','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'ferfrefrferfref',1,'2014-08-07 03:10:18','2014-08-07 03:10:18'),(26,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'cfcfcccfcd',1,'2014-08-11 21:03:26','2014-08-11 21:03:26'),(27,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'cfcfcccfcd',1,'2014-08-11 21:03:57','2014-08-11 21:03:57'),(28,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'cfcfcccfcd',1,'2014-08-11 21:04:23','2014-08-11 21:04:23'),(29,'juanf','andradef','2444444','jfrand011@hotmail.com','acme',NULL,'derderdece',1,'2014-08-11 21:23:11','2014-08-11 21:23:11'),(30,'juan','andrade','23434343','jfandradea@gmail.com','acmera',NULL,'34343434',1,'2014-08-11 21:25:38','2014-08-11 21:25:38'),(31,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'cececedxdcf',1,'2014-08-11 22:03:25','2014-08-11 22:03:25'),(32,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'cececedxdcf',1,'2014-08-11 22:03:51','2014-08-11 22:03:51'),(33,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'vfecfecfedce',1,'2014-08-11 22:19:36','2014-08-11 22:19:36'),(34,'juan','andrade','3333333','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'33333333',1,'2014-08-11 22:22:21','2014-08-11 22:22:21'),(35,'juan','andrade','2444444','jfandradea@gmail.com','ACME CIA. LTDA.',NULL,'dexdcecdxdscdscsds',1,'2014-08-19 22:31:42','2014-08-19 22:31:42');
/*!40000 ALTER TABLE `leads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketingchunks`
--

DROP TABLE IF EXISTS `marketingchunks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marketingchunks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `contenttype_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_marketingchunks_content_types1_idx` (`contenttype_id`),
  CONSTRAINT `fk_marketingchunks_content_types1` FOREIGN KEY (`contenttype_id`) REFERENCES `contenttypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketingchunks`
--

LOCK TABLES `marketingchunks` WRITE;
/*!40000 ALTER TABLE `marketingchunks` DISABLE KEYS */;
INSERT INTO `marketingchunks` VALUES (1,'Consultoría e Integración','Presentamos nuestros servicios de Consultoría e Integración de soluciones\n                tecnológiicas en los diferentes aspectos de la Ingeniería Eléctrica,\n                Telecomunicaciones  e Infraestructura Computacional. Conoce cómo creamos\n                las mejores soluciones para las Empresas y Negocios.','2014-07-29 20:31:28','2014-07-29 20:31:28',1),(2,'Proyectos','Una invitación a una galería construida durante estos 8 años en los que,\n                con mucha alegría, y por que no, con mucho orgullo se han obtenido resultados\n                de calidad en las soluciones entregadas a nuestros clientes.','2014-07-29 20:31:28','2014-07-29 20:31:28',2),(3,'Historias de Éxito','Conoce historias reales de la realización de nuestros proyectos: ingeniería,\n                personas y planificación, los retos encontrados y los obstáculos superados hasta llegar a la\n                implantación de una infraestructura, de una solución tecnológica. ','2014-07-29 20:31:28','2014-07-29 20:31:28',3);
/*!40000 ALTER TABLE `marketingchunks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2014_08_02_182726_add_fields_to_contenttypes_table',1),('2014_08_02_185416_add_field_to_contenttypes_table',2),('2014_08_02_185723_add_anotherfield_to_contenttypes_table',3),('2014_08_02_210100_add_marketfield_to_contenttypes_table',4),('2014_08_02_225106_add_fields_to_profile_table',5),('2014_08_02_234933_add_field_to_enterprise_table',6),('2014_08_05_163934_add_footer_info_field_to_contentypes_table',7),('2014_08_11_203436_add_field_to_categorty_table',8),('2014_08_12_233607_add_icon_field_to_categories_table',9),('2014_08_20_164557_add_project_date_to_contents_table',10),('2014_08_20_180018_add_categorization_field_to_contenttypes_table',11),('2014_09_02_203335_add_description_to_clients_table',12),('2014_09_25_210149_createDeletedAtFieldInBannersTable',13);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(256) DEFAULT NULL,
  `imageable_id` int(11) DEFAULT NULL,
  `imageable_type` varchar(48) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'juan.jpeg',42,'App\\User',NULL,NULL),(29,'/members/bio/phBio-42-xqT22F3STPDMz8p0.png',11,'App\\Profile','2015-02-18 16:52:50','2015-02-18 15:30:24'),(30,'/members/bio/phBio-74-HJy4rWcC9IzN3fM7.png',14,'App\\Profile','2015-02-18 23:14:17','2015-02-18 23:14:17');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL COMMENT 'user''s first name',
  `last_name` varchar(255) DEFAULT NULL COMMENT 'user''s last name',
  `photoprofile` varchar(255) DEFAULT NULL COMMENT 'user''s photo',
  `title` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `biography` text,
  PRIMARY KEY (`id`),
  KEY `fk_profiles_users1_idx` (`user_id`),
  CONSTRAINT `fk_profiles_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (5,7,'Myrtie','Carroll','juan.jpeg','Presidente Acme','2014-08-02 22:12:51','2014-08-02 22:12:51',''),(6,6,'Elfrieda','Hagenes','juan.jpeg','Gerente de Tecnologia AAirlines','2014-08-02 22:12:52','2014-08-02 22:12:52',''),(7,4,'Frida','Gutkowski','juan.jpeg','Gerente General Seguros Colonial','2014-08-02 22:12:52','2014-08-02 22:12:52',''),(8,3,'Uriah','Willms','juan.jpeg','Jefe Tecnología Fybeca','2014-08-02 22:12:53','2014-08-02 22:12:53',''),(9,8,'Evalyn','Gleason','juan.jpeg','Responsable de Comunicaciones FFAA Ecuador','2014-08-02 22:12:53','2014-08-02 22:12:53',''),(10,5,'Tiara','Leuschke','juan.jpeg','Jefe Tecnología TAME','2014-08-02 22:12:54','2014-08-02 22:12:54',''),(11,42,'Juan','Andrade',NULL,'PApa','2015-02-03 00:53:35','2015-02-18 21:57:58','editando y validando'),(12,43,'j','a','juan.jpeg','papa','0000-00-00 00:00:00',NULL,''),(13,73,'___','___',NULL,'','2015-02-18 22:44:35','2015-02-18 22:53:21','detalle bio'),(14,74,'','',NULL,'','2015-02-18 23:12:04','2015-02-18 23:12:29','nuevazaaaa');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonials`
--

DROP TABLE IF EXISTS `testimonials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `testimonial` text,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_testimonials_users1_idx` (`user_id`),
  CONSTRAINT `fk_testimonials_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials`
--

LOCK TABLES `testimonials` WRITE;
/*!40000 ALTER TABLE `testimonials` DISABLE KEYS */;
INSERT INTO `testimonials` VALUES (1,'Quia doloribus quibusdam reprehenderit eos voluptatem harum ex et tenetur est dolorem officiis voluptas minima molestiae sed nemo sit.',3,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(2,'Ratione odio perspiciatis omnis consectetur hic sit omnis eveniet aspernatur earum qui.',4,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(3,'Facilis qui ipsum aliquid maiores dolor pariatur quibusdam blanditiis omnis eveniet recusandae cumque.',5,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(4,'Ut quo perferendis inventore sapiente qui laborum saepe autem et quos aliquid aut quis.',6,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(5,'Voluptas dolores et reiciendis totam quo molestias rerum molestiae aliquam nulla est.',7,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(6,'Quasi magni earum dolore officiis eos debitis sed maxime quia tempore.',8,'2014-08-02 22:17:36','2014-08-02 22:17:36'),(13,'Tenetur nulla suscipit eos iure at reprehenderit et ab distinctio cum ea aut et enim voluptatem magnam aut possimus ratione omnis.',5,'2014-09-13 01:02:46','2014-09-13 01:02:46'),(14,'Et rem doloribus aut doloribus officiis culpa laboriosam neque qui qui eum quia.',7,'2014-09-13 01:02:46','2014-09-13 01:02:46'),(15,'Corporis ullam sunt atque placeat quae aut autem soluta voluptas iste consequatur ut quo aliquam.',3,'2014-09-13 01:02:46','2014-09-13 01:02:46'),(16,'Id corrupti ipsum ipsam aspernatur amet sed saepe natus natus est consequatur fugiat in ipsa exercitationem aut repellat et voluptate.',8,'2014-09-13 01:02:46','2014-09-13 01:02:46'),(17,'Et quasi qui molestias occaecati suscipit reprehenderit quas quia iusto voluptatem aut illo autem.',4,'2014-09-13 01:02:46','2014-09-13 01:02:46'),(18,'Totam et illo nulla quis nam doloribus perspiciatis dolorem possimus assumenda sint.',5,'2014-09-13 01:02:46','2014-09-13 01:02:46');
/*!40000 ALTER TABLE `testimonials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usercontents`
--

DROP TABLE IF EXISTS `usercontents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usercontents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `active` int(11) DEFAULT NULL COMMENT 'check if site content is active',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `contenttype_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`contenttype_id`),
  KEY `fk_usercontents_users_idx` (`user_id`),
  KEY `fk_usercontents_contenttypes1_idx` (`contenttype_id`),
  CONSTRAINT `fk_usercontents_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usercontents_contenttypes1` FOREIGN KEY (`contenttype_id`) REFERENCES `contenttypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercontents`
--

LOCK TABLES `usercontents` WRITE;
/*!40000 ALTER TABLE `usercontents` DISABLE KEYS */;
INSERT INTO `usercontents` VALUES (4,1,'2015-02-09 22:41:08','2015-02-14 21:09:14',42,1),(5,0,'2015-02-09 22:41:08','2015-02-18 19:57:15',42,2),(6,0,'2015-02-09 22:41:08','2015-02-10 23:52:29',42,3),(7,0,'2015-02-09 22:41:08','2015-02-10 20:51:57',42,4),(8,0,'2015-02-09 22:41:08','2015-02-10 20:26:11',42,5),(9,1,'2015-02-09 22:42:21','2015-02-09 22:42:21',49,1),(10,1,'2015-02-09 22:42:21','2015-02-09 22:42:21',49,2),(11,1,'2015-02-09 22:42:21','2015-02-09 22:42:21',49,3),(12,1,'2015-02-09 22:42:21','2015-02-09 22:42:21',49,4),(13,1,'2015-02-09 22:42:21','2015-02-09 22:42:21',49,5),(14,1,'2015-02-09 22:45:01','2015-02-09 22:45:01',72,1),(15,1,'2015-02-09 22:45:01','2015-02-09 22:45:01',72,2),(16,1,'2015-02-09 22:45:01','2015-02-09 22:45:01',72,3),(17,1,'2015-02-09 22:45:01','2015-02-09 22:45:01',72,4),(18,1,'2015-02-09 22:45:01','2015-02-09 22:45:01',72,5),(19,1,'2015-02-18 22:44:35','2015-02-18 22:44:35',73,1),(20,1,'2015-02-18 22:44:35','2015-02-18 22:44:35',73,2),(21,1,'2015-02-18 22:44:35','2015-02-18 22:44:35',73,3),(22,1,'2015-02-18 22:44:35','2015-02-18 22:44:35',73,4),(23,1,'2015-02-18 22:44:35','2015-02-18 22:44:35',73,5),(24,1,'2015-02-18 23:12:04','2015-02-18 23:12:04',74,1),(25,1,'2015-02-18 23:12:04','2015-02-18 23:12:04',74,2),(26,1,'2015-02-18 23:12:04','2015-02-18 23:12:04',74,3),(27,1,'2015-02-18 23:12:04','2015-02-18 23:12:04',74,4),(28,1,'2015-02-18 23:12:04','2015-02-18 23:12:04',74,5);
/*!40000 ALTER TABLE `usercontents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usertype_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL COMMENT 'user''s nickname or username',
  `password` varchar(2048) NOT NULL DEFAULT '' COMMENT 'user''s password',
  `email` varchar(255) NOT NULL COMMENT 'user''s email',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0:ok',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_users_usertypes1_idx` (`usertype_id`),
  CONSTRAINT `fk_users_usertypes1` FOREIGN KEY (`usertype_id`) REFERENCES `usertypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,4,'halvorson.gabrielle','12345','yvonne05@yahoo.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(4,4,'o\'hara.vance','12345','cleora17@conn.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(5,4,'emmanuel85','12345','ffriesen@bergnaum.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(6,4,'jreinger','12345','waelchi.jazlyn@block.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(7,4,'goodwin.erika','12345','wswift@gmail.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(8,4,'morar.elise','12345','lkessler@smith.com',1,NULL,'2014-08-02 22:10:45','2014-08-02 22:10:45'),(42,2,'yof','$2y$10$5NMICdJPQu1hduNXf5ljxeMfB/lgcjy2SyEFDjMCB/8OtaK.AqyW.','jfandradea@gmail.com',0,'92GJ1LmUKQacc71QL6VMHjmTXOgQhsWW8CQBiWcP80FgHIg0EzzRSnYEi24Y','2015-01-29 20:20:39','2015-02-18 22:43:44'),(43,2,'juan','$2y$10$0EF4Imi9AQVtjyc1G/iKOeJD6NhM7h5N3RTq8mPVyrFD65RBmGbx.','jfrand011@hotmail.com',0,'2LkwCSOoHMinGn6FVqYbar3eYP4eAhOQ6PshizTa8ZIlgrKW8xpcgmkshAXd','2015-01-29 21:08:22','2015-02-03 17:09:50'),(44,2,'JFRANC014','$2y$10$g8mmQazrhrpo3ET39cD.5.mqGjQ1lrgrYSesRm473Zr5ygxh59kSq','nikolat014@gmail.com',0,'KPYD8gn2wByhnpwrbcOkB3uM7IZsRx6zy5WBqCysjfJu3rg1CZkqplHdTjil','2015-01-29 21:09:54','2015-01-29 21:11:20'),(45,2,'juanf','$2y$10$iMGBgwCUac9fi7muw1Rq9Ohe9pT/OaMXP.hBy4VwKKjVHoszkyWni','ju@hmail.com',0,'VM1tN4AIhax2FvfPzfTrN2UHAw6hDoJ7IxTK72Kqyfq5IkXJFFyM1jMbXC1Z','2015-01-29 21:46:25','2015-01-29 21:47:43'),(46,2,'fogo','$2y$10$Z/zr5JFZAFqn6Mw8hFS.veTTBilCfUWcQWDlnosnEAB79oox4mI.2','cheg@huatita.com',0,NULL,'2015-01-29 21:48:18','2015-01-29 21:48:18'),(47,2,'flora','$2y$10$xWg6Tyq/biofdDLFWYEbHOISds32wXd2lirrybf.fuu6JVb9fQpf.','fal@hotmail.com',0,'nhNLzAFrokkYBGeLtqtifkY6RnlB5o7ceeX6w6tdloX8Yd86tv9XKCmv27pA','2015-01-30 15:22:58','2015-01-30 15:23:24'),(48,2,'manuwl','$2y$10$buKrZ0j1UMdYekqMPWTY0OYEROnzjL.0KjixmQfvD08RcJ5VYeH2G','man@gmail.com',0,'sV3ked3u0S7MXnkQKFoSp07oDbyvlxjl5hFA2sxRieBuyaz2jRsE2ZIJPNB0','2015-01-30 15:26:01','2015-01-30 15:26:16'),(49,2,'','$2y$10$wEqlXwJ1lzqrjsya0wpGEeMYlLht5cqdRpzrizpbELN4Rb5Vkx0He','gandrade@gmail.com',0,'9cV3d3jc8JeKa9fCbMH6l3VHSsdncLRBfE4LJaY4CNgiE4uxliYrM25MHseJ','2015-01-31 17:55:14','2015-02-15 19:56:09'),(50,2,'new','$2y$10$Equi9/CTX29.W0EwLy74K.uwPiwzZHp6f7/Dch2y89YUotbJkiXFi','new@hotmail.com',0,'X85xvPPJPppnMeQI4DFgPXQhdfrdP6wDXUNJUfEh8OB4aeW2uxtza6y66uD9','2015-02-04 18:40:29','2015-02-04 19:13:51'),(51,2,'nuevo','$2y$10$ae6iiYqYJebk0O4PjdCeKuCNdPVArAina2OzE1f.epPiuuZyXp9xG','new@gmail.com',0,'yLCYBMzusYTiVLpU4sVw4Ndj6TKebgbTZ8mO6EdEfyWpntlC4VBpAge8GuTd','2015-02-04 20:34:20','2015-02-04 20:45:45'),(52,2,'useroptions','$2y$10$9.SWTnHLT3JBaTnoVLNKMemoBpinWGruPZPCHGx60.heyBgBx2jJ.','useroptions@gmail.com',0,'YiwsVwpdIsR0WCZfRReOgsKzn3T26vZ9Erh3DmixfcC3aft0hclUAiim93WL','2015-02-09 22:10:35','2015-02-09 22:14:19'),(53,2,'testu','$2y$10$IC/gB1fKSAJMdc6aKyx66e7V/7WmpnyJCG7j8MNXyWGuDT2LWaq0G','test@gmail.com',0,'vIUFz52IIYK8o9HMzNplXT8ELRnCo5kHXDa4QpGMlFQjiwlCQGES4q1qDLcJ','2015-02-09 22:14:47','2015-02-09 22:16:05'),(54,2,'xdxd','$2y$10$/Ewc4nEMWHM8HLadiQGX3eZ3fp0/2nVBBZTQSfoOX1yOf.Brwy4u6','xdxd@gmail.com',0,'2EckQ5Ca5CWX3WhE317NplInnU38xls6hRYgd1LeDQzQaOamHvZe0j33uCHk','2015-02-09 22:16:21','2015-02-09 22:17:20'),(55,2,'cfc','$2y$10$cx0/CioFE8fYEP97xTPSUOlgg4cX.OLWwONCAIBrUDWafv1Nr9pCm','de@de.com',0,'hYp5Zi4KSevcKo30rlbkZcHO73tCoYfP23uGSIh1nWgN6QHri24N2xhr7e6r','2015-02-09 22:17:42','2015-02-09 22:18:26'),(56,2,'vgvg','$2y$10$3PZKP7FMqcz7RwmhTlKFX.EaJyfYXq79DurOx4dzF3TIdU6yj7Psu','sw@hot.com',0,'hSh71D7WaVaW3xW8GKIhIJ2cT99RJjUJxOFYLd18yJdGsPWlPGGjtcsS84p5','2015-02-09 22:18:57','2015-02-09 22:24:21'),(57,2,'vgvgvg','$2y$10$AEuBQyrBESHKXJ/9VFWm6.YNwt5W7LH5S5jhpFixRP1U/Z7pmOq3u','fvfvf@gma.com',0,NULL,'2015-02-09 22:24:38','2015-02-09 22:24:38'),(58,2,'vgfvgvg','$2y$10$4N4/1iKn/4MMnqBJjUv7Yuxp1.IZMOfGMDhIzEdPBxfnfnbB1pC5C','falgg@hotmail.com',0,NULL,'2015-02-09 22:26:26','2015-02-09 22:26:26'),(60,2,'juanpedro','$2y$10$ZuTDOfRM5tpy2lrfvP7gW.Beh15BAoeN/KiRuh0Q6Q3PyBwCIbdYS','jpedroj@hotmail.com',0,NULL,'2015-02-09 22:28:03','2015-02-09 22:28:03'),(61,2,'juanpedroy','$2y$10$fkpCAEpCPCv65zrDHUicd.d.e3fOQTE64qBPl9wWm6bMoSARl83X.','jpedrojy@hotmail.com',0,NULL,'2015-02-09 22:28:30','2015-02-09 22:28:30'),(62,2,'juanpedroyt','$2y$10$H74q7jvcCHQbRrmtA4z0XuVed.j.r0WHN10RGv2xL2gwT/OmpiOxy','jpedrojyv@hotmail.com',0,NULL,'2015-02-09 22:30:19','2015-02-09 22:30:19'),(63,2,'junaco','$2y$10$/MWxPjFfxDfKcuUQuyazru4IPvRiZKtcXaaCBcC9TInKnjyEWzbL6','huhu@gm.com',0,NULL,'2015-02-09 22:31:29','2015-02-09 22:31:29'),(64,2,'jaca','$2y$10$1o.GdFbgCtgpHTGaD0lYvuM7o2tRPb7Cr49cP2.UGpNVQxAMbOhcW','op@hu.com',0,NULL,'2015-02-09 22:32:06','2015-02-09 22:32:06'),(65,2,'jacae','$2y$10$SM4RGCrvGxKaVeD/zSIMq.u.Q20u2A9fnqyj0hh7q2pelZYOIkc1W','opf@hu.com',0,NULL,'2015-02-09 22:33:14','2015-02-09 22:33:14'),(66,2,'jojoj','$2y$10$WMR1J64DhSITOaOj2z8LbuwfiIYHNyscVyBZ87VufpBjyBHk1ZDSC','jdxd@de.com',0,NULL,'2015-02-09 22:35:06','2015-02-09 22:35:06'),(67,2,'jojojfff','$2y$10$ua7yMlUJ9W8taAb7cKHte.LGAiECJjSGHHIhWBqm/Djilug11/UNe','jdxdf@de.com',0,NULL,'2015-02-09 22:38:18','2015-02-09 22:38:18'),(68,2,'jojojfffg','$2y$10$d2p9.1f8qO9UOj4Rh7Hgg.YasUEhJ.usbIfiPdm8lKvCqVOHv/6g.','jdxddf@de.com',0,NULL,'2015-02-09 22:38:51','2015-02-09 22:38:51'),(69,2,'eventaso','$2y$10$B6pBAOwsF3DyYUCez2rac.8.YeDQPdU8XFcojtGShfQNfWsDg6Jkm','eventaso@de.com',0,NULL,'2015-02-09 22:40:36','2015-02-09 22:40:36'),(70,2,'eventaso2','$2y$10$nO0Oi/iZxrWguysftT/PhewnGF1z8ucZfQNCJtrwU9Lgh73QAs6wW','eventaso2@de.com',0,'eQDEhgBMQVex73EehmY6uub6uPtMr0JhoXqt0lQO2GZhc1Wm55WWasFgmJsu','2015-02-09 22:41:08','2015-02-09 22:41:58'),(71,2,'eventaso3','$2y$10$L7amMWQMSDQcz1eKQbvxaejUBqfBhK5hvKo9WosbloWwamXidFsFC','pedropa@ha.com',0,'Jjqzho89U1n7wd7ceWIYOo0WzJTz4C6rBx5D2drlsjWC9dYym2mAwZK9KGNX','2015-02-09 22:42:21','2015-02-09 22:44:37'),(72,2,'eventaso4','$2y$10$HglgYFyTwvB5rsP4Cpr7SOVQcxk83ix1.n5g22nqOYE5oQNg.rX9K','sw@hota.com',0,NULL,'2015-02-09 22:45:01','2015-02-09 22:45:01'),(73,2,'pedroParamesio','$2y$10$D94Rmc0KauTHA.7.6KP3zuO13Z7EeITNBUfFu5z.ezcfWNb6aYRua','pedroparamesio@yuca.com',0,'AelK1jiwVkMdFuiW0XfBgYctyjCdLEdNkG8REZst4Bo0JMtfUZTaGvTFs6Oa','2015-02-18 22:44:35','2015-02-18 23:11:44'),(74,2,'fromcero','$2y$10$CYaUTHlY9az5YzB/9wrGWuvJQf5gDVR2NnccTKnS6RHwa0X28mSSK','fromcero@cero.com',0,NULL,'2015-02-18 23:12:04','2015-02-18 23:12:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertypes`
--

DROP TABLE IF EXISTS `usertypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usertypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT 'Type of user: Admin, Co-owner, Board, etc.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertypes`
--

LOCK TABLES `usertypes` WRITE;
/*!40000 ALTER TABLE `usertypes` DISABLE KEYS */;
INSERT INTO `usertypes` VALUES (1,'Guest',NULL,NULL),(2,'Subscriber',NULL,NULL),(3,'Administrator',NULL,NULL),(4,'Client',NULL,NULL);
/*!40000 ALTER TABLE `usertypes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-02-18 23:23:29