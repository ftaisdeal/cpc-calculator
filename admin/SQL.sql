-- Table structure for table `referrers`
CREATE TABLE `referrers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `source` varchar(36) NOT NULL,
  `referrer` varchar(255) DEFAULT NULL,
  `ip_address` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
