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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bios`
--

DROP TABLE IF EXISTS `bios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detail` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `default` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_biographies_users_idx` (`user_id`),
  CONSTRAINT `fk_biographies_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bios`
--

LOCK TABLES `bios` WRITE;
/*!40000 ALTER TABLE `bios` DISABLE KEYS */;
INSERT INTO `bios` VALUES (7,'<p>Soy Ingeniero Informático y me dedico al desarrollo de aplicaciones para Web y dispositivos Móviles.  En mi trabajo me oriento a crear productos y servicios que se acoplen bien a las expectativas de sus usuarios, y que además estos gusten de su funcionamiento. Obviamente esta calidad que se busca, ofrece siempre buenas oportunidades económicas y profesionales a empresas e individuos.<br/></p><p>Desde la creación de presencias de internet para profesionales, PYMES y Organizaciones sin fines de lucro, hasta Software como Servicio, le invito a conocer las consultorías en las cuales podríamos trabajar en su próximo proyecto, iniciativa o idea empresarial.<br/></p><p><br/></p>','2015-07-16 16:24:00','2015-08-06 17:50:22',NULL,3,'Biografía Predeterminada',1,1),(8,'<p>Soy Ingeniero Informático que ha trabajado en el área del Internet: básicamente en el desarrollo de aplicaciones y su infraestructura tecnológica. En realidad sería muy extenso describir todo el trabajo que se realiza en estas áreas, pero mi objetivo principal es obtener productos y servicios que se acoplen bien a las expectativas de sus usuarios, y que además estos gusten de su funcionamiento. Obviamente esta calidad que se busca, ofrece siempre buenas oportunidades económicas y profesionales a empresas e individuos.<br/></p><p>Desde la creación de presencias de internet para profesionales, PYMES y Organizaciones sin fines de lucro, Hasta Software como servicio, te invito a que conozcas las consultorías en las cuales podríamos trabajar en tu próximo proyecto, iniciativa o idea empresarial.<br/></p><p><br/></p>','2015-07-16 16:24:12','2015-07-16 16:25:50','2015-07-16 16:25:50',3,'Biografía Predeterminada',0,0),(9,'<p>Soy Ingeniero Informático que ha trabajado en el área del Internet: básicamente en el desarrollo de aplicaciones y su infraestructura tecnológica. En realidad sería muy extenso describir todo el trabajo que se realiza en estas áreas, pero mi objetivo principal es obtener productos y servicios que se acoplen bien a las expectativas de sus usuarios, y que además estos gusten de su funcionamiento. Obviamente esta calidad que se busca, ofrece siempre buenas oportunidades económicas y profesionales a empresas e individuos.<br/></p><p>Desde la creación de presencias de internet para profesionales, PYMES y Organizaciones sin fines de lucro, Hasta Software como servicio, te invito a que conozcas las consultorías en las cuales podríamos trabajar en tu próximo proyecto, iniciativa o idea empresarial.<br/></p><p><br/></p>','2015-07-16 16:25:36','2015-07-16 16:25:43','2015-07-16 16:25:43',3,'Biografía Predeterminada',0,0),(10,'<p style=\"text-align: justify;\">En el año 2006, bajo una visión emprendedora,<span>  </span>luego de varios años de trabajo, decidimos que era el momento de poner nuestros conocimientos y nuestra experiencia al servicio de las empresas de nuestro país. </p><p style=\"text-align: justify;\">IP TELECOM fue creada para dar servicio profesional, responsable, con apasionamiento y profundo convencimiento de que entregar soluciones que satisfagan a todos los clientes, independientemente de las marcas disponibles en el mercado tecnológico mundial, sería nuestra mayor satisfacción.</p><p style=\"text-align: justify;\"><span>Nuestros clientes se sienten confiados y seguros de la asesoría recibida y durante estos años se han mantenido junto a nosotros haciendo el mejor equipo de trabajo para cumplir las metas y los objetivos propuestos, gracias a ellos los continuos retos y emprendimientos nos han permitido crecer profesionalmente logrando éxito y reconocimiento.</span><br/></p><p style=\"text-align: justify;\"><br/></p>','2015-10-17 02:13:29','2015-10-19 21:54:59',NULL,5,'Bio1',1,1);
/*!40000 ALTER TABLE `bios` ENABLE KEYS */;
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
  `description` text,
  `pagelink` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categories_users1_idx` (`user_id`),
  CONSTRAINT `fk_categories_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
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
-- Table structure for table `contenttypes`
--

DROP TABLE IF EXISTS `contenttypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contenttypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `pagelink` varchar(255) NOT NULL,
  `setashome` tinyint(1) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenttypes`
--

LOCK TABLES `contenttypes` WRITE;
/*!40000 ALTER TABLE `contenttypes` DISABLE KEYS */;
INSERT INTO `contenttypes` VALUES (1,'PRODUCTOS Y SERVICIOS','productos-y-servicios',0,'3','cogs','',1,1,1,1,'2014-07-29 00:00:00','2014-07-29 20:08:37'),(2,'PORTAFOLIO','portafolio',0,'5','briefcase','',1,1,1,1,'2014-07-29 00:00:00','2014-07-29 20:08:37'),(4,'ACERCA DE','acercade',0,'2','home','active',1,0,0,0,NULL,NULL),(6,'CONTACTO','contacto',0,'6','','',0,0,0,0,'2015-05-21 00:00:00','2015-05-21 00:00:00'),(7,'RÉSUMÉ','resume',0,'4','','',0,0,0,0,'2015-05-21 00:00:00','2015-05-21 00:00:00'),(8,'HOME','home',0,'1','','',0,0,0,0,NULL,NULL);
/*!40000 ALTER TABLE `contenttypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educations`
--

DROP TABLE IF EXISTS `educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `educations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `title` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `initdate` varchar(255) DEFAULT NULL,
  `enddate` varchar(255) DEFAULT NULL,
  `detail` text,
  `activities` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `resume_id` int(11) NOT NULL,
  `current` tinyint(1) DEFAULT '0',
  `endtimestamp` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_educations_resumes1_idx` (`resume_id`),
  CONSTRAINT `fk_educations_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educations`
--

LOCK TABLES `educations` WRITE;
/*!40000 ALTER TABLE `educations` DISABLE KEYS */;
INSERT INTO `educations` VALUES (1,'Escuela Politécnica Nacional',1,'Ingeniero en Sistemas Informáticos y de Computación, Systems Engineering','Systems Engineering','enero-2000','julio-2007','<p>Algo que creo relevante en mi educación superior, fue el proyecto de titulación llamado: “Solución tecnológica para el compartimiento de conocimiento en una comunidad de práctica de desarrollo de software” Un Sistema de Gestión de Conocimiento basado en Web (PHP) bajo sistemas operativos Windows o Linux, el cual habilita la colaboración entre miembros de una comunidad de práctica relacionados al mundo del desarrollo de software.<br style=\"color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);\"/>Me gusta mucho este proyecto. En una época donde las redes sociales recién comenzaban a tener gran importancia, el proyecto hacía énfasis en destinar, justamente, una red social, al mejoramiento de la comunicación entre profesionales, al compartir de conocimiento y al almacenamiento del mismo; tal y como lo hacen ahora el propio Linked In, twitter, StackOverflow, etc. Siendo un proyecto Universitario, fue un proyecto visionario.<br/></p>',NULL,'2015-08-27 19:40:07','2015-08-27 19:40:44','2015-08-27 19:40:44',73,0,NULL),(2,'Team TreeHouse (teamtreehouse.com)',1,'Educación Continua','UX Design, Web and Mobile Development','noviembre-2013','agosto-2015','<p>Educación continua en línea en disciplinas de Diseño Centrado a usuario (incluyendo UX Design y Interface Usability), y desarrollo de aplicaciones Web y Mobile.</p><p><br/></p>','<p>http://teamtreehouse.com/jandrade<br/></p>','2015-08-27 19:48:07','2015-08-28 18:24:14',NULL,73,1,1438453454),(3,'Centro de Educación Continua EPN',1,'“Java Advanced Developper” : Java EE5, Computer Programming, Specific Applications, Nivel Intermedio','Java Language','enero-2009','junio-2009','<p>Curso del lenguaje de programación Java. El curso constaba de varios niveles desde Java básico hasta Java Enterprise Edition.</p>','','2015-08-27 19:52:04','2015-08-28 18:24:28',NULL,73,0,1243880668),(4,'Escuela Politécnica Nacional',1,'Ingeniero en Sistemas Informáticos y de Computación,','Systems Engineering','enero-2000','noviembre-2007','<p>Algo que creo relevante en mi educación superior, fue el proyecto de titulación llamado: “Solución tecnológica para el compartimiento de conocimiento en una comunidad de práctica de desarrollo de software” Un Sistema de Gestión de Conocimiento basado en Web (PHP) bajo sistemas operativos Windows o Linux, el cual habilita la colaboración entre miembros de una comunidad de práctica relacionados al mundo del desarrollo de software.<br style=\"color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);\"/>Me gusta mucho este proyecto. En una época donde las redes sociales recién comenzaban a tener gran importancia, el proyecto hacía énfasis en destinar, justamente, una red social, al mejoramiento de la comunicación entre profesionales, al compartir de conocimiento y al almacenamiento del mismo; tal y como lo hacen ahora el propio Linked In, twitter, StackOverflow, etc. Siendo un proyecto Universitario, fue un proyecto visionario.<br/></p>','<p><span style=\"color: rgb(25, 25, 25);background-color: rgb(255, 255, 255);\">Colaboración como profesor en curso de programación en la Asociación Estudiantil de la Universidad.</span><br/></p>','2015-08-27 19:54:15','2015-08-28 18:24:39',NULL,73,0,1193941479);
/*!40000 ALTER TABLE `educations` ENABLE KEYS */;
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
-- Table structure for table `experiences`
--

DROP TABLE IF EXISTS `experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `locality` varchar(255) DEFAULT NULL,
  `initdate` varchar(255) DEFAULT NULL,
  `enddate` varchar(255) DEFAULT NULL,
  `detail` text,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `resume_id` int(11) NOT NULL,
  `current` tinyint(1) DEFAULT '0',
  `endtimestamp` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_experiences_resumes1_idx` (`resume_id`),
  CONSTRAINT `fk_experiences_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES (1,'Ingeniero de Desarrollo de Software','Grupo Céntrico','Quito','marzo-2011','octubre-2013','<p>En Grupocéntrico, aporté de un 80% a 90% al crecimiento de los productos que la empresa comercializa. He participado en el desarrollo y administración de:</p><p>1. restaurantes.ec</p><p>2. evaluar.com </p><p>Para estas dos aplicaciones y otras que maneja la empresa internamente también me desempeñé como Web Master. Mantuve funcionales las aplicaciones al 99% 24/7. Se desarrolló un gran nivel en el soporte correctivo y predictivo de los Sistemas de Email, Servicios de Dominio, Servicios de Hosting y Aplicaciones hospedadas. Se desarrolló también un alto nivel de conocimiento de herramientas de marketing digital, últimas tendencias de diseño Web y del funcionamiento mediático con el cual éstas generan beneficios a las empresas a través de sus productos digitales. </p><p><span>Mi salida de Grupocéntrico se da porque en ese entonces la empresa sufría cambios estructurales que no incluían mi crecimiento profesional, factor importantísimo para las personas que se dedican ampliamente a su trabajo con ética y total profesionalismo.</span><br/></p>',1,'2015-08-25 22:47:04','2015-09-28 15:14:48',NULL,73,0,1380640488),(2,'Jefe de Gestión Tecnológica ex AGD','Ministerio de Finanzas','Quito','marzo-2010','octubre-2010','<p>En esta cargo, se realizó un diagnóstico de los sistemas informáticos que se manejaban en la ex AGD (Agencia de Garantías de Depósitos). Los informes generados sirvieron para toma de decisiones de la dirección de la ex AGD en consideración a coactivas a personas jurídicas y naturales. También se desarrollo un software administrativo con el fin de mejorar la organización de esas tareas.<br/></p>',1,'2015-08-25 22:53:14','2015-08-28 18:22:28',NULL,73,0,1285957348),(3,'Consultor Freelance Desarrollo de Aplicaciones','Freelance','Quito','abril-2014','agosto-2015','<p>Creación y ejecución de soluciones informáticas para Web y Mobile, e implantación de infraestructuras de comunicación sobre el Internet.<br/></p>',1,'2015-08-25 23:11:05','2015-09-11 21:22:39',NULL,73,1,1438464159),(4,'Ingeniero de Desarrollo','CONEA (Actual CEAACES)','Quito','junio-2009','enero-2010','<p>Participé en el primer proyecto de evaluación de Instituciones de Nivel Superior. El software que desarrollamos para el CONEA, actualmente llamado CEAACES, permitió calificar a todas las Universidades e Institutos técnicos y tecnológicos a nivel nacional, generando data necesaria para el análisis estadístico que determinó el ranking de las Instituciones y posteriores recomendaciones para el mejoramiento de las mismas.Referencia: </p><p>http://www.ceaaces.gob.ec/sitio/evaluacion-universidades-2009/<br/></p>',1,'2015-08-25 23:14:54','2015-08-28 18:22:46',NULL,73,0,1262370166),(5,'Desarrollador de aplicaciones','SAV Hemisferio','Quito','marzo-2008','junio-2009','<p>Participé en la generación de soluciones Web para iniciativas gubernamentales.</p><ol><li>Protección y control forestal (Ministerio del Ambiente). Desarrollamos la primera versión del Sistema de Administración Forestal: http://saf.ambiente.gob.ec/saf. <span>El software mejoró drásticamente el control de la explotación maderera en el Ecuador en un 80%, en una etapa del país donde muchas de estas actividades se hacían mediante control por formularios impresos.</span></li><li>Desarrollamos el software de registro y control de las organizaciones de Instituciones afiliadas al MIES. El software permitía a los funcionarios del MIES, finalmente, organizarse mejor con las empresas y ONG\'s que afiliaba. <br/></li></ol>',1,'2015-08-25 23:19:51','2015-08-28 18:22:56',NULL,73,0,1243880576),(6,'Ingeniero de Soporte','TecsInfo','Quito','noviembre-2007','febrero-2008','<p>Generé soluciones a problemas relacionados a la seguridad en redes y sus herramientas (hardware y software). El puesto consistía en:</p><p>1. Instalación y configuración de plataformas de seguridad en empresas clientes</p><p>2. Soporte de manejo y troubleshooting de herramientas de seguridad.<br/></p>',1,'2015-08-25 23:21:45','2015-09-28 15:22:02',NULL,73,0,1201879322),(7,'Técnico de soporte informático (Pasantía)','PetroIndustrial','Quito','marzo-2006','abril-2007','<p>Coadyuvé al desenvolvimiento propicio de equipos de hardware y software que funcionaban en la Institución, realizando tareas como:</p><ul><li>Mantenimiento de aplicación Web de digitalización y distribución de documentos.</li><li>Mantenimiento de bases de datos MSSQL Server: transformaciones Excel – base de datos,    procedimientos almacenados, programación de tareas (jobs), etc. </li><li><span>Análisis de reingeniería del sistema Maintracker (AS400) para Web.</span></li><li><span>Adaptación de aplicación Web ASP a sistema de manejo de documentos para la Unidad de Sistemas.</span></li><li><span>Soporte a usuarios: servicios de intranet, oficina y correo electrónico.</span><br/></li></ul>',1,'2015-08-25 23:26:13','2015-08-28 18:23:07',NULL,73,0,1175451787),(8,'English Teacher','The Bénédict School of Languages','Quito','junio-2000','marzo-2005','<p>Trabajé como profesor de inglés mientras estudiaba informática en la Universidad. Descubriendo a la enseñanza como una pasión en mi vida estoy seguro de haber logrado que mis estudiantes aprendieran Inglés: prácticamente mi segundo idioma.<br/></p>',1,'2015-08-25 23:28:00','2015-09-28 15:19:41',NULL,73,0,1109690381);
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homecalls`
--

DROP TABLE IF EXISTS `homecalls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homecalls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(1024) DEFAULT NULL,
  `message` text,
  `buttonlink` varchar(45) DEFAULT NULL,
  `buttonmessage` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `profile_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_homecalls_profiles_idx` (`profile_id`),
  CONSTRAINT `fk_homecalls_profiles` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homecalls`
--

LOCK TABLES `homecalls` WRITE;
/*!40000 ALTER TABLE `homecalls` DISABLE KEYS */;
INSERT INTO `homecalls` VALUES (1,NULL,'Presencia en Internet, Aplicaciones Web, y otros Servicios Tecnológicos que le otorgarán valor a su Empresa, Organización o Negocio.','productos-y-servicios','Servicios','2015-09-02 16:13:12','2015-09-29 10:51:03',NULL,1,1),(2,NULL,'Permítenos ir junto a ti hacia el éxito de tus proyectos tecnológicos.','productos-y-servicios','Conócelas','2015-10-16 21:11:34','2015-10-16 21:12:25',NULL,3,1);
/*!40000 ALTER TABLE `homecalls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageresources`
--

DROP TABLE IF EXISTS `imageresources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imageresources` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imageable_id` int(10) unsigned NOT NULL,
  `imageable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageresources`
--

LOCK TABLES `imageresources` WRITE;
/*!40000 ALTER TABLE `imageresources` DISABLE KEYS */;
INSERT INTO `imageresources` VALUES (1,'/members/home/home_image/homeimage-1-DmRnQ7BJcf3CWNL6.png',1,'App\\Homecall','2015-05-26 20:17:38','2015-09-29 15:56:41'),(2,'/saleables/details/icons/detailicon-2-yZpeSdFaiuYw35ta.png',2,'App\\Saleabledetail','2015-05-26 20:23:22','2015-05-26 23:56:42'),(3,'/saleables/details/icons/detailicon-3-MhFjGlqNQBtgSPco.png',3,'App\\Saleabledetail','2015-05-26 20:30:25','2015-05-26 20:30:25'),(4,'/saleables/details/icons/detailicon-4-9GpUPmNadNgqhRTg.png',4,'App\\Saleabledetail','2015-05-26 20:34:47','2015-05-26 20:37:55'),(5,'/saleables/details/icons/detailicon-5-P8h426LuXpAGeznS.png',5,'App\\Saleabledetail','2015-05-26 20:44:16','2015-05-26 20:45:05'),(6,'/saleables/details/icons/detailicon-8-LtNYhFVTiX5Pppsh.png',8,'App\\Saleabledetail','2015-05-26 23:40:06','2015-05-26 23:43:37'),(7,'/saleables/details/icons/detailicon-9-H97ZmseQ4zUl79TE.png',9,'App\\Saleabledetail','2015-05-26 23:42:48','2015-05-27 00:01:24'),(8,'/saleables/details/icons/detailicon-10-tAqyj7blJUlDwgKs.png',10,'App\\Saleabledetail','2015-05-26 23:43:58','2015-05-26 23:43:58'),(9,'/saleables/details/icons/detailicon-6-dqxnZy3GayRkWsj3.png',6,'App\\Saleabledetail','2015-05-26 23:58:12','2015-05-26 23:58:12'),(10,'/saleables/details/icons/detailicon-7-ybBYR87rkuZs91LB.png',7,'App\\Saleabledetail','2015-05-26 23:58:40','2015-05-26 23:58:40'),(11,'/saleables/details/icons/detailicon-11-yn9O2wuZhGn5BP0Z.png',11,'App\\Saleabledetail','2015-05-27 00:17:34','2015-05-27 00:46:25'),(12,'/saleables/details/icons/detailicon-12-LcLaQH6N6rRvXfte.png',12,'App\\Saleabledetail','2015-05-27 00:21:25','2015-05-27 00:47:44'),(13,'/saleables/details/icons/detailicon-13-3Az5dAZIfEhQGqJq.png',13,'App\\Saleabledetail','2015-05-27 00:23:26','2015-05-27 00:48:09'),(14,'/saleables/details/icons/detailicon-14-qLZEwAEKtOXUVBMx.png',14,'App\\Saleabledetail','2015-05-27 00:26:35','2015-05-27 00:48:58'),(15,'/saleables/details/icons/detailicon-15-JGTr8UXg5tNPsdRr.png',15,'App\\Saleabledetail','2015-05-27 00:28:49','2015-05-27 00:49:50'),(16,'/saleables/details/icons/detailicon-23-N5RTsC572MnRR6T0.png',23,'App\\Saleabledetail','2015-05-27 00:36:33','2015-05-27 00:52:01'),(17,'/saleables/details/icons/detailicon-24-gD1S9CLjwAtU9fw2.png',24,'App\\Saleabledetail','2015-05-27 00:37:08','2015-05-27 00:53:21'),(18,'/saleables/details/icons/detailicon-25-jei47onkeGOa0xPU.png',25,'App\\Saleabledetail','2015-05-27 00:39:16','2015-05-27 00:45:36'),(19,'/saleables/details/icons/detailicon-26-DsPfe83H1b1WkzE5.png',26,'App\\Saleabledetail','2015-05-27 01:14:18','2015-05-27 01:47:18'),(20,'/saleables/details/icons/detailicon-27-h8U1xl1PcayKtYN2.png',27,'App\\Saleabledetail','2015-05-27 01:19:11','2015-05-27 01:19:11'),(21,'/saleables/details/icons/detailicon-28-azlAUMBCKpkuH9cE.png',28,'App\\Saleabledetail','2015-05-27 01:24:56','2015-05-27 01:32:52'),(22,'/saleables/details/icons/detailicon-29-oVwzhIAiafhB8kvj.png',29,'App\\Saleabledetail','2015-05-27 01:29:02','2015-05-27 01:48:19'),(23,'/saleables/details/icons/detailicon-30-7D8XwgFZ6Ai1hFeJ.png',30,'App\\Saleabledetail','2015-05-27 01:36:11','2015-05-27 01:36:11'),(24,'/saleables/details/icons/detailicon-31-4Q4mz7IjctLeGAGU.png',31,'App\\Saleabledetail','2015-05-27 01:46:20','2015-05-27 01:46:20'),(25,'/saleables/details/icons/detailicon-32-qoUZZY6QtgYyH5zT.png',32,'App\\Saleabledetail','2015-05-27 01:53:14','2015-05-27 01:53:14'),(26,'/saleables/details/icons/detailicon-33-cLhHYEaX1MEu5haW.png',33,'App\\Saleabledetail','2015-05-27 02:02:28','2015-05-27 02:02:28'),(27,'/members/saleables/details/icons/detailicon-1-auMMCt35Wi9Z7niO.png',1,'App\\Saleabledetail','2015-09-04 02:45:28','2015-09-04 02:45:28'),(28,'/members/saleables/details/icons/detailicon-34-uWIGfrv0PRqTWsbr.png',34,'App\\Saleabledetail','2015-10-19 20:48:06','2015-10-19 20:48:06');
/*!40000 ALTER TABLE `imageresources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `detail` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `resume_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_languages_resumes1_idx` (`resume_id`),
  CONSTRAINT `fk_languages_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'Francés','Alianza Francesa\nNivel Intermedio\n2009 – 2012','2015-08-27 19:56:37','2015-08-27 19:56:37',NULL,73,1),(2,'Inglés','Bénédict School of Languages\nNivel Avanzado\n1998-2000','2015-08-27 19:58:08','2015-08-27 19:58:08',NULL,73,1),(3,'Español','Nativo','2015-08-27 19:59:55','2015-08-27 19:59:55',NULL,73,1);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `names` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `cellular` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `client` varchar(255) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `inquiry` text,
  `status` tinyint(4) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_lead_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leads`
--

LOCK TABLES `leads` WRITE;
/*!40000 ALTER TABLE `leads` DISABLE KEYS */;
INSERT INTO `leads` VALUES (1,'Juan Andrade','09989877','09887678','jfandradea@gmail.com',NULL,NULL,'algo',0,'2015-05-21 05:02:13','2015-05-21 05:02:13',3),(2,'Juan Andrade','09888888','09999999','jfandradea@gmail.com',NULL,NULL,'Test from jandrade.co domain for personal web site',0,'2015-07-22 20:36:21','2015-07-22 20:36:21',3),(3,'Juan Andrade','09888888','09999999','jfandradea@gmail.com',NULL,NULL,'Test from jandrade.co domain for personal web site',0,'2015-07-22 20:52:32','2015-07-22 20:52:32',3),(4,'Juan Andrade','09888888','09','jfandradea@gmail.com',NULL,NULL,'TEst email',0,'2015-07-22 20:53:09','2015-07-22 20:53:09',3),(5,'Juan Andrade','09888888','09999999','jfandradea@gmail.com',NULL,NULL,'test email',0,'2015-07-22 22:16:32','2015-07-22 22:16:32',3),(6,'Juan Andrade','09888888','09999999','jfandradea@gmail.com',NULL,NULL,'test email',0,'2015-07-22 22:20:29','2015-07-22 22:20:29',3),(7,'Juan Andrade','09888888','09999999','jfrand011@hotmail.com',NULL,NULL,'test email 2',0,'2015-07-23 02:58:53','2015-07-23 02:58:53',3),(8,'Juan Andrade','2401862','0968741465','jfandradea@gmail.com',NULL,NULL,'test de comentario',0,'2015-08-16 02:07:12','2015-08-16 02:07:12',3),(9,'Julio César Herrera','022779524','0996487272','jcesarherrera@gmail.com',NULL,NULL,'Señor Andrade:\r\nQuiero enviar una campaña masiva de email marketing para promocionar un curso de comercio exterior en Quito. ¿Puede dar el servicio? ¿Precio? Además necesito los detalles del número de correos que remitiría por envío, el número de envíos y si sus listas son segmentadas. Gracias.',0,'2015-10-09 19:18:59','2015-10-09 19:18:59',3),(10,'Juan Andrade','2401862','0968741465','jfandradea@gmail.com',NULL,NULL,'consulta',0,'2015-10-17 02:14:30','2015-10-17 02:14:30',5);
/*!40000 ALTER TABLE `leads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logos`
--

DROP TABLE IF EXISTS `logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(256) DEFAULT NULL,
  `imageable_id` int(11) DEFAULT NULL,
  `imageable_type` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logos`
--

LOCK TABLES `logos` WRITE;
/*!40000 ALTER TABLE `logos` DISABLE KEYS */;
INSERT INTO `logos` VALUES (1,'/members/logos/logo-3-uFpUfhg9Ki7nCWbY.png',1,'App\\Profile','2015-05-22 18:14:09','2015-05-21 00:47:56'),(2,'/members/logos/logo-5-VPydEeSkjSl50Epd.png',3,'App\\Profile','2015-10-16 21:09:10','2015-10-16 21:09:10');
/*!40000 ALTER TABLE `logos` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketingchunks`
--

LOCK TABLES `marketingchunks` WRITE;
/*!40000 ALTER TABLE `marketingchunks` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,'/members/bio/phBio-3-zaH7WH7T3ycZmUvQ.png',1,'App\\Profile','2015-05-22 20:49:06','2015-05-21 00:43:42');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio_categories`
--

DROP TABLE IF EXISTS `portfolio_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `portfolio_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_portfolio_categories_projects1_idx` (`project_id`),
  KEY `fk_portfolio_categories_categories1_idx` (`category_id`),
  CONSTRAINT `fk_portfolio_categories_projects1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_portfolio_categories_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_categories`
--

LOCK TABLES `portfolio_categories` WRITE;
/*!40000 ALTER TABLE `portfolio_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `portfolio_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ammount` decimal(11,2) DEFAULT NULL,
  `discount` decimal(11,2) DEFAULT '0.00',
  `description` varchar(512) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `saleable_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`saleable_id`),
  KEY `fk_prices_services1_idx` (`saleable_id`),
  CONSTRAINT `fk_prices_services1` FOREIGN KEY (`saleable_id`) REFERENCES `saleables` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
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
  `firstname` varchar(255) DEFAULT NULL COMMENT 'user''s first name',
  `lastname` varchar(255) DEFAULT NULL COMMENT 'user''s last name',
  `photoprofile` varchar(255) DEFAULT NULL COMMENT 'user''s photo',
  `title` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `biography` text,
  `phone` varchar(48) DEFAULT NULL,
  `cellular` varchar(48) DEFAULT NULL,
  `address` varchar(2048) DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `state` varchar(512) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `facebook` varchar(512) DEFAULT NULL,
  `twitter` varchar(512) DEFAULT NULL,
  `tumblr` varchar(512) DEFAULT NULL,
  `pinterest` varchar(512) DEFAULT NULL,
  `gplus` varchar(512) DEFAULT NULL,
  `dribbble` varchar(512) DEFAULT NULL,
  `youtube` varchar(512) DEFAULT NULL,
  `picassa` varchar(512) DEFAULT NULL,
  `github` varchar(512) DEFAULT NULL,
  `vimeo` varchar(512) DEFAULT NULL,
  `instagram` varchar(512) DEFAULT NULL,
  `flickr` varchar(512) DEFAULT NULL,
  `treehouse` varchar(512) DEFAULT NULL,
  `linkedin` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_profiles_users1_idx` (`user_id`),
  CONSTRAINT `fk_profiles_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,3,'Juan','Francisco Andrade',NULL,'','2015-05-21 03:28:30','2015-09-17 22:36:17','Presencia en Internet, Aplicaciones Web, y otros Servicios Tecnológicos que le otorgarán valor a\nsu Empresa, Organización o Negocio. ','2401862','0968741465','Los Ciclames E1167 y El Inca','Ecuador','Pichincha','Quito','','https://twitter.com/jfrand014',NULL,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,'https://teamtreehouse.com/jandrade','https://ec.linkedin.com/pub/juan-francisco-andrade-álvarez/52/2a1/303'),(2,4,'','',NULL,'','2015-06-11 03:57:57','2015-06-11 03:57:57','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,5,'Rocío','Andrade Alvarez',NULL,'','2015-10-17 02:02:21','2015-10-19 21:47:07','','593-02-2401862','593-989115030','Los Ciclames E-1167','Ecuador','Pichincha','Quito',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profinterests`
--

DROP TABLE IF EXISTS `profinterests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profinterests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `detail` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `resume_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_personalinterests_resumes1_idx` (`resume_id`),
  CONSTRAINT `fk_personalinterests_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profinterests`
--

LOCK TABLES `profinterests` WRITE;
/*!40000 ALTER TABLE `profinterests` DISABLE KEYS */;
INSERT INTO `profinterests` VALUES (1,'User Centered Design','<p>Implica el diseño de la experiencia de usuario y el diseño de interfaces de usuario </p>','2015-09-01 21:05:22','2015-09-01 21:07:26',NULL,73,1),(2,'Product Development','','2015-09-01 21:09:20','2015-09-01 21:09:20',NULL,73,1),(3,'Software as a Service',NULL,'2015-09-01 21:09:51','2015-09-01 21:09:51',NULL,73,1);
/*!40000 ALTER TABLE `profinterests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectgalleryimages`
--

DROP TABLE IF EXISTS `projectgalleryimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projectgalleryimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(256) DEFAULT NULL,
  `imageable_id` int(11) DEFAULT NULL,
  `imageable_type` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectgalleryimages`
--

LOCK TABLES `projectgalleryimages` WRITE;
/*!40000 ALTER TABLE `projectgalleryimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `projectgalleryimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectimages`
--

DROP TABLE IF EXISTS `projectimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projectimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(256) DEFAULT NULL,
  `imageable_id` int(11) DEFAULT NULL,
  `imageable_type` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectimages`
--

LOCK TABLES `projectimages` WRITE;
/*!40000 ALTER TABLE `projectimages` DISABLE KEYS */;
INSERT INTO `projectimages` VALUES (1,'/members/projects/project_image/projectimage-1-FTXmmb3z2k3ejo3u.png',1,'App\\Project','2015-08-28 18:26:07','2015-08-28 18:26:07');
/*!40000 ALTER TABLE `projectimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `status` tinyint(1) DEFAULT NULL,
  `featured_image` varchar(1024) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_projects_users_idx` (`user_id`),
  CONSTRAINT `fk_projects_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'ribbit','<p>ribbit</p>',0,NULL,'2015-08-28 23:26:02','2015-10-02 21:28:54',NULL,3);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resumes`
--

DROP TABLE IF EXISTS `resumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resumes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `cloned_id` int(11) DEFAULT NULL,
  `biography_id` int(11) DEFAULT '-1',
  `default` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_resumes_user_idx` (`user_id`),
  KEY `fk_resumes_biography_idx` (`biography_id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resumes`
--

LOCK TABLES `resumes` WRITE;
/*!40000 ALTER TABLE `resumes` DISABLE KEYS */;
INSERT INTO `resumes` VALUES (70,'resume v1',0,'2015-06-27 01:06:05','2015-07-16 16:29:49','2015-07-16 16:29:49',3,NULL,NULL,NULL),(71,'v2',0,'2015-06-26 20:44:24','2015-07-16 16:30:03','2015-07-16 16:30:03',3,NULL,NULL,NULL),(72,'Versión Predeterminada',0,'2015-07-16 16:28:56','2015-07-16 16:30:12','2015-07-16 16:30:12',3,NULL,7,NULL),(73,'Versión predeterminada',1,'2015-07-16 16:30:30','2015-08-25 22:49:55',NULL,3,NULL,7,1);
/*!40000 ALTER TABLE `resumes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resumesections`
--

DROP TABLE IF EXISTS `resumesections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resumesections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resumesections`
--

LOCK TABLES `resumesections` WRITE;
/*!40000 ALTER TABLE `resumesections` DISABLE KEYS */;
/*!40000 ALTER TABLE `resumesections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleable_categories`
--

DROP TABLE IF EXISTS `saleable_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleable_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `saleable_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_saleables_saleables_idx` (`saleable_id`),
  KEY `fk_category_saleables_categories1_idx` (`category_id`),
  CONSTRAINT `fk_category_saleables_saleables` FOREIGN KEY (`saleable_id`) REFERENCES `saleables` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_saleables_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleable_categories`
--

LOCK TABLES `saleable_categories` WRITE;
/*!40000 ALTER TABLE `saleable_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `saleable_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleabledetails`
--

DROP TABLE IF EXISTS `saleabledetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleabledetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detail` varchar(512) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `saleable_id` int(11) NOT NULL,
  `type` int(11) DEFAULT '0',
  PRIMARY KEY (`id`,`saleable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleabledetails`
--

LOCK TABLES `saleabledetails` WRITE;
/*!40000 ALTER TABLE `saleabledetails` DISABLE KEYS */;
INSERT INTO `saleabledetails` VALUES (1,'Le asesoramos en la identificación de las funcionalidades de su aplicación Web, en base a sus objetivos de emprendimiento u organización.','2015-05-26 16:17:36','2015-07-30 16:28:39',NULL,1,0),(2,'Planificamos el proyecto. Desde esta etapa inicial mantenemos una comunicación continua.','2015-05-26 16:23:20','2015-07-30 16:30:21',NULL,1,0),(3,'Interactuamos con Usted continuamente para acordar los diseños incluso antes de ser implementados. Esto permite corregir errores y mejorar la calidad de la aplicación tempranamente.','2015-05-26 16:30:24','2015-07-30 16:33:13',NULL,1,0),(4,'Los diseños son finalmente implementados y puestos en marcha en una Aplicación Web real. lista para cualquier objetivo de comercialización u organización empresarial.','2015-05-26 16:34:45','2015-05-26 16:37:53',NULL,1,0),(5,'Emprendimientos. Si tiene una idea, podemos apoyarle en la creación de la aplicación Web que la impulse y la dinamice, convirtiéndose en una herramienta muy valiosa e inclusive primordial en negocios orientados al Internet.','2015-05-26 16:44:15','2015-05-26 16:45:03',NULL,1,1),(6,'Organizar su negocio. Si se trata de organizar su oficina, una aplicación Web es una herramienta muy útil y que además le permite manejar de mejor manera sus procesos empresariales y gerenciales.','2015-05-26 16:54:36','2015-05-26 19:58:11',NULL,1,1),(7,'Cualquier iniciativa. El campo de acción de una aplicación Web es ilimitado. Cualquier idea, cualquier necesidad, y cualquier sueño puede ser llevado a cabo en el mundo del Internet.','2015-05-26 17:01:32','2015-05-26 19:58:39',NULL,1,1),(8,'Las aplicaciones Web: pueden implementar servicios de mensajería  como email y push notifications, integrarse con redes sociales como facebook o twitter, utilizar servicios externos como los de Amazon Web Services para mejorar en muchos aspectos el desempeño de una aplicación, desplegar informes estadísticos mediante charts, etc. Depende de sus necesidades, aunque no infinitas, las posibilidades de servicios que una aplicación Web le puede otorgar son inmensas.','2015-05-26 17:08:01','2015-05-26 17:22:30',NULL,1,2),(9,'Disponibilidad. Dado que se instala en un servidor en \"la nube\", las infraestructuras tecnológicas a nivel internacional que utilizamos, garantizan que los usuarios tengan acceso 24/7 a su aplicación sin dejar a un lado la seguridad de datos y código fuente. Además los usuarios pueden acceder desde cualquier lugar en el mundo.','2015-05-26 17:21:09','2015-05-26 20:00:57',NULL,1,2),(10,'Innovación y calidad. Las aplicaciones Web que se crean son basadas en tecnología moderna, aplicando estándares y procesos que determinan calidad. Además, se tiene una política de continuo aprendizaje que permite innovar en cada solución desarrollada.','2015-05-26 18:13:11','2015-05-26 18:13:11',NULL,1,2),(11,'Adquisición de un Nombre de dominio. Le asesoramos en definir un nombre para su dominio. y adquirirlo en un Registrar.','2015-05-26 20:17:32','2015-05-26 20:42:05',NULL,2,0),(12,'Desarrollo del Sitio Web. Desde la conceptualización del contenido hasta la instalación, creamos el sitio web para su negocio.','2015-05-26 20:21:23','2015-05-26 20:42:25',NULL,2,0),(13,'Realizamos las configuraciones de servidores de dominio, de hosting, de base de datos y seguridades.','2015-05-26 20:23:25','2015-05-26 20:42:50',NULL,2,0),(14,'Le enseñamos cómo crear contenido dinámico para su Sitio Web mediante un CMS (Content Management System)  Así podrá actualizar su información cuando sea necesario.','2015-05-26 20:26:33','2015-05-26 20:43:15',NULL,2,0),(15,'Le brindamos soporte técnico durante todo el ciclo de vida de su Sitio Web.','2015-05-26 20:28:47','2015-05-26 20:43:31',NULL,2,0),(16,'Negocios que aun no tienen presencia en Internet.','2015-05-26 20:31:37','2015-07-30 16:43:02',NULL,2,1),(17,'Negocios que aun no tiene presencia en Internet.','2015-05-26 20:31:52','2015-05-26 20:32:07','2015-05-26 20:32:07',2,1),(18,'Startups o nuevos emprendimientos.','2015-05-26 20:32:40','2015-05-26 20:32:40',NULL,2,1),(19,'Profesionales que desean tener un nuevo medio para publicar su Hoja de Vida y aumentar las posibilidades de encontrar empleo.','2015-05-26 20:33:30','2015-05-26 20:33:30',NULL,2,1),(20,'Profesionales y Organizaciones que quieran publicar trabajo científico o  investigativo.','2015-05-26 20:33:53','2015-05-26 20:33:53',NULL,2,1),(21,'Profesionales Independientes o freelancers.','2015-05-26 20:34:06','2015-05-26 20:34:06',NULL,2,1),(22,'Organizaciones y fundaciones','2015-05-26 20:34:21','2015-05-26 20:34:21',NULL,2,1),(23,'Calidad. Su Sitio Web se beneficiará de arquitectura de contenido, facilidad de uso y diseño gráfico de calidad.','2015-05-26 20:36:32','2015-05-26 20:44:04',NULL,2,2),(24,'Los visitantes y clientes de su Sitio Web, podrán ver e interactuar con su Sitio Web desde teléfonos inteligentes, ipads, tablets o pantallas más grandes. Podrán saber de usted y su negocio en cualquier momento o circunstancia.','2015-05-26 20:37:07','2015-05-26 20:44:39',NULL,2,2),(25,'Si tiene poco o ningún conocimiento técnico, no debe preocuparte por nada. Nosotros lo manejamos 100%. Su sitio estará funcional 24/7.\n \nNunca estará solo. Si se presenta algún inconveniente, si son necesarias actualizaciones del software base, o en algún aspecto concerniente a servidores, nosotros estamos pendientes de cubrir todos estos aspectos, manteniendo la operatividad de su Sitio Web al 100%.','2015-05-26 20:39:14','2015-05-26 20:45:34',NULL,2,2),(26,'Implantamos la infraestructura tecnológica (Web) desde la cual pueda crear sus campañas de email marketing y envío de boletines desde el Internet.','2015-05-26 21:14:16','2015-05-26 21:38:23',NULL,3,0),(27,'La infraestructura tecnológica para email marketing la podemos instalar en su propio servidor o en uno de nuestra propiedad. Los costos del servicio cambiarán dependiendo de esto y cada modalidad tiene sus propias ventajas.','2015-05-26 21:19:09','2015-05-26 21:39:39',NULL,3,0),(28,'Puede realizar sus campañas de forma autónoma. Una vez instalada la plataforma, dispondrá de herramientas que le permitirán ejecutarlas con total facilidad por su propia cuenta. También dispondrá de herramientas de monitoreo de las campañas con reportes gráficos (charts).','2015-05-26 21:24:54','2015-05-26 21:40:31',NULL,3,0),(29,'Si Usted lo prefiere, podemos realizar sus campañas de email marketing, incluyendo diseño gráfico y monitoreo.','2015-05-26 21:29:01','2015-05-26 21:40:49',NULL,3,0),(30,'Su negocio o empresa. Si usted ya tiene una base de datos de clientes, encontrará en este servicio una gran herramienta de apoyo a sus procesos de marketing y comunicación con clientes.','2015-05-26 21:36:09','2015-05-26 21:36:09',NULL,3,1),(31,'Será capaz de utilizar los beneficios del email marketing y de los boletines para hacer crecer su empresa o negocio. Con esta herramienta tendrá mayores probabilidades de ventas e incluso lograr fidelización de sus clientes ya existentes.','2015-05-26 21:46:18','2015-05-26 21:46:18',NULL,3,2),(32,'Tendrá a mano, a costos asequibles, herramientas fáciles de utilizar y fáciles de mantener para que sus campañas sean realizadas sin necesidad de un soporte técnico continuo.','2015-05-26 21:53:12','2015-05-26 21:53:12',NULL,3,2),(33,'Dispondrá de diseños de campañas de email con estándares de calidad que evitará que su negocio sea categorizado en listas negras como spammer.','2015-05-26 22:02:27','2015-05-26 22:02:27',NULL,3,2),(34,'Diagnóstico de la red física.\nAnalizamos el estado de la red a nivel físico, se hace una revisión del cableado chequeando el estado de conectores, patch cords, conectividad hacia switches y routers.','2015-10-19 15:44:04','2015-10-19 15:44:04',NULL,4,0),(35,'Optimizar la red. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona','2015-10-19 15:58:06','2015-10-19 15:58:06',NULL,4,2),(36,'Cálculos de caída de voltaje para determinar la capacidad de las acometidas eléctricas.','2015-10-19 16:38:55','2015-10-19 16:38:55',NULL,5,0),(37,'Los cálculos efectuados para la acometida eléctrica son exactos.','2015-10-19 16:42:40','2015-10-19 16:42:40',NULL,5,2);
/*!40000 ALTER TABLE `saleabledetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleables`
--

DROP TABLE IF EXISTS `saleables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT NULL,
  `detailed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_services_users_idx` (`user_id`),
  CONSTRAINT `fk_services_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleables`
--

LOCK TABLES `saleables` WRITE;
/*!40000 ALTER TABLE `saleables` DISABLE KEYS */;
INSERT INTO `saleables` VALUES (1,'Aplicaciones Web','<p>Las aplicaciones Web son útiles para cualquier negocio u organización en cualquier etapa y cualquier proceso. Este servicio se enfoca en planificar y crear aplicaciones web que se acoplarán perfectamente a sus necesidades. </p>','2015-05-26 16:00:39','2015-05-26 16:00:39',NULL,3,1,1,NULL),(2,'Presencia Web','<p>Cree su presencia en la Web, obtenga el mejor sitio y el mejor soporte para su emprendimiento! </p><p><span>En un mundo que gira al ritmo de la tecnología su negocio necesita estar en Internet. </span></p>','2015-05-26 20:14:08','2015-08-22 16:03:17',NULL,3,1,0,NULL),(3,'Herramientas de Email Marketing Y Newsletter','<p>Implementamos la infraestructura para que sus campañas sean creadas y enviadas a sus clientes fácilmente. Libérese de restricciones técnicas que no le permitían realizar sus campañas de email marketing y envío de Newsletters (boletines).</p>','2015-05-26 21:10:39','2015-08-22 16:03:17',NULL,3,1,0,NULL),(4,'Auditoría de Redes','<p>Realizamos un diagnóstico de las situación actual de las redes de datos en las empresas, determinando sus vulnerabilidades y demás situaciones que impiden un alto desempeño de los sistemas que conforman la red.</p><p>Entregamos una solución efectiva y eficiente que garantice el normal funcionamiento de la red con alto rendimiento.</p>','2015-10-19 15:36:13','2015-10-20 09:38:12',NULL,5,1,0,NULL),(5,'Diseño Eléctrico','<p>Diseñamos redes de distribución de energía eléctrica en plantas industriales o en poblaciones para uso domiciliario, elaboración de presupuestos, dirección, construcción y mantenimiento.</p><p><br/></p>','2015-10-19 16:37:01','2015-10-19 16:37:01',NULL,5,1,0,NULL);
/*!40000 ALTER TABLE `saleables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `detail` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `resume_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_skills_resumes1_idx` (`resume_id`),
  CONSTRAINT `fk_skills_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Programación y sus lenguajes','<ul><li>PHP</li><li>Javascript</li><li>CSS</li><li>HTML</li><li>JAVA</li><li>SWIFT (para iOS)</li></ul>','2015-08-27 20:05:13','2015-08-27 20:05:13',NULL,73,1),(2,'Web Development','<ul><li>Metodología Agil Scrum</li><li>Análisis de la solución</li><li>Diseño de arquitectura del software</li><li>Diseño de interfaces de usuario</li><ul><li>Maquetación </li><li>Interacción</li></ul><li>Implementación Front End y Back End </li></ul>','2015-08-27 20:14:42','2015-09-11 21:19:20',NULL,73,1),(3,'Mobile Development','<ul><li>Metodología Agil Scrum</li><li>Análisis de la solución</li><li>Diseño de arquitectura del software</li><li>Diseño de interfaces de usuario</li><ul><li>Maquetación </li><li>Interacción</li></ul><li>Implementación</li></ul>','2015-08-27 20:15:27','2015-09-11 21:20:46',NULL,73,1),(4,'Frameworks y Plataformas de desarrollo de aplicaciones','<ul><li>LARAVEL PHP Framework</li><li>Angular JavaScript Framework</li><li>SASS (Syntactically Awsome Style Sheets) para CSS</li><li>WordPress </li><li>Android</li></ul>','2015-09-01 20:26:05','2015-09-11 20:55:02',NULL,73,1),(5,'Integración de aplicaciones','<p>Integración de aplicaciones con APIS de terceros:</p><ul><li>Email Providers:</li><ul><li>Mandrill</li><li>Mailchimp</li><li>Mailgun</li><li>Sendgrid</li></ul><li>Storage Providers</li><ul><li>Amazon AWS S3 </li></ul><li>Social </li><ul><li>Linked In</li><li>Facebook</li><li>Twitter</li></ul><li>Etc</li></ul>','2015-09-01 20:35:46','2015-09-01 20:38:31',NULL,73,1),(6,'Diseño Web y Mobile','<ul><li>Arquitectura de información </li><li>Responsive Mobile First Design</li><li>Maquetación de Interfaz de usuario</li><li>Interacción y experiencia de usuario</li></ul>','2015-09-01 20:51:23','2015-09-01 20:52:56',NULL,73,1);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `targets`
--

DROP TABLE IF EXISTS `targets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `targets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `saleable_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `targets`
--

LOCK TABLES `targets` WRITE;
/*!40000 ALTER TABLE `targets` DISABLE KEYS */;
/*!40000 ALTER TABLE `targets` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonials`
--

LOCK TABLES `testimonials` WRITE;
/*!40000 ALTER TABLE `testimonials` DISABLE KEYS */;
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
  `ashome` tinyint(1) DEFAULT '0',
  `menualias` varchar(255) DEFAULT NULL,
  `url` varchar(512) DEFAULT NULL,
  `order` int(11) DEFAULT '0',
  PRIMARY KEY (`id`,`user_id`,`contenttype_id`),
  KEY `fk_usercontents_users_idx` (`user_id`),
  KEY `fk_usercontents_contenttypes1_idx` (`contenttype_id`),
  CONSTRAINT `fk_usercontents_contenttypes1` FOREIGN KEY (`contenttype_id`) REFERENCES `contenttypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usercontents_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercontents`
--

LOCK TABLES `usercontents` WRITE;
/*!40000 ALTER TABLE `usercontents` DISABLE KEYS */;
INSERT INTO `usercontents` VALUES (10,1,'2015-05-20 23:28:30','2015-09-01 15:19:38',3,1,0,'SERVICIOS','productos-y-servicios',2),(11,0,'2015-05-20 23:28:30','2015-10-02 16:28:45',3,2,0,'PORTAFOLIO','portafolio',NULL),(12,1,'2015-05-20 23:28:30','2015-07-30 16:55:47',3,4,0,'ACERCA DE','acercade',4),(13,1,'2015-05-20 23:28:30','2015-07-30 16:55:47',3,6,0,'CONTACTO','contacto',5),(14,1,'2015-05-20 23:28:30','2015-09-01 15:11:18',3,7,0,'RÉSUMÉ','user_resume',3),(15,1,'2015-06-10 23:57:57','2015-06-10 23:57:57',4,1,0,'PRODUCTOS Y SERVICIOS','productos-y-servicios',NULL),(16,1,'2015-06-10 23:57:57','2015-06-10 23:57:57',4,2,0,'PORTAFOLIO','portafolio',NULL),(17,1,'2015-06-10 23:57:57','2015-06-10 23:57:57',4,4,0,'HOME','acercade',NULL),(18,1,'2015-06-10 23:57:57','2015-06-10 23:57:57',4,6,0,'CONTACTO','contacto',NULL),(19,1,'2015-06-10 23:57:57','2015-06-10 23:57:57',4,7,0,'RÉSUMÉ','user_resume',NULL),(22,1,'2015-08-07 17:58:59',NULL,3,8,1,'HOME','home',1),(23,1,'2015-10-16 21:02:21','2015-10-16 21:07:09',5,1,0,'PRODUCTOS Y SERVICIOS','productos-y-servicios',2),(24,0,'2015-10-16 21:02:21','2015-10-16 21:07:09',5,2,0,'PORTAFOLIO','portafolio',5),(25,1,'2015-10-16 21:02:21','2015-10-16 21:07:09',5,4,0,'ACERCA DE','acercade',3),(26,0,'2015-10-16 21:02:21','2015-10-16 21:08:01',5,6,0,'CONTACTO','contacto',6),(27,0,'2015-10-16 21:02:21','2015-10-16 21:07:09',5,7,0,'RÉSUMÉ','resume',4),(28,1,'2015-10-16 21:02:21','2015-10-16 21:07:09',5,8,1,'HOME','home',1);
/*!40000 ALTER TABLE `usercontents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userresumesections`
--

DROP TABLE IF EXISTS `userresumesections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userresumesections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `resume_id` int(11) NOT NULL,
  `resumesection_id` int(11) NOT NULL,
  `alias` varchar(512) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userresumesections_users1_idx` (`user_id`),
  KEY `fk_userresumesections_resumes1_idx` (`resume_id`),
  KEY `fk_userresumesections_resumesections1_idx` (`resumesection_id`),
  CONSTRAINT `fk_userresumesections_resumes1` FOREIGN KEY (`resume_id`) REFERENCES `resumes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_userresumesections_resumesections1` FOREIGN KEY (`resumesection_id`) REFERENCES `resumesections` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_userresumesections_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userresumesections`
--

LOCK TABLES `userresumesections` WRITE;
/*!40000 ALTER TABLE `userresumesections` DISABLE KEYS */;
/*!40000 ALTER TABLE `userresumesections` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,2,'jandrade','$2y$10$czdp6wnFXjvniyfHu8hW2uz5nbB03evdlAIivCVnM72LhAvhSPl5.','jfandradea@gmail.com',0,'XfCwYuUrs2WrgASRauXQkXoeCLWjPT2zmhvbnLeQ31zBbCo8Dvkp24QTUXvi','2015-05-21 03:28:30','2015-10-02 21:29:28'),(4,2,'boris','$2y$10$brCoBcP/PxUl.owfg1QKyOkE78egj80b7Izl4.eQ.pjJy06pwMVG.','boris_90@hotmail.es',0,'O9AOjjaNBw2Q4IMadReZQU1hI5si0NXaWYPRhOdHSnXSUjs25ixY25xjvgMC','2015-06-11 03:57:57','2015-06-11 06:02:58'),(5,2,'randrade','$2y$10$d0SYVR3XRmFscmlZWLdwTuJEc0mU0.FB8kQcI/BeK1Q0CoAzfcC4e','randrade@iptelec.com',0,'bIMW6CYAylNpg0XJNDWuQsOy8zLDTv1ShT3rJ1Mp3YrfrHs2u22hn83MXjn5','2015-10-17 02:02:21','2015-10-21 17:56:47');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertypes`
--

LOCK TABLES `usertypes` WRITE;
/*!40000 ALTER TABLE `usertypes` DISABLE KEYS */;
INSERT INTO `usertypes` VALUES (1,'Guest',NULL,NULL),(2,'Subscriber',NULL,NULL),(3,'Administrator',NULL,NULL),(4,'Client',NULL,NULL);
/*!40000 ALTER TABLE `usertypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventages`
--

DROP TABLE IF EXISTS `ventages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `saleable_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventages`
--

LOCK TABLES `ventages` WRITE;
/*!40000 ALTER TABLE `ventages` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-21 22:38:16
