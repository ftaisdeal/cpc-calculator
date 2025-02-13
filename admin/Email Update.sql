-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 12, 2025 at 04:08 PM
-- Server version: 10.6.20-MariaDB-cll-lve
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taisbwvb_adventurecabaret`
--

-- --------------------------------------------------------

--
-- Table structure for table `email_update`
--

CREATE TABLE `email_update` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(16) NOT NULL,
  `ip_address` varchar(16) NOT NULL,
  `token` varchar(32) NOT NULL,
  `date_time` datetime NOT NULL DEFAULT current_timestamp(),
  `sent` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `email_update`
--

INSERT INTO `email_update` (`id`, `email`, `first_name`, `ip_address`, `token`, `date_time`, `sent`) VALUES
(1, 'firinn@adventurecabaret.com', 'Firinn', '', '4236f5476412a3a2e59b47ff9d3a154a', '2024-02-17 16:40:58', 0),
(2, 'emdashes@gmail.com', '', '', '593b109308eebf49104ffe4742ef1abe', '2024-02-17 18:11:44', 0),
(3, 'mckennawilliams33@gmail.com', '', '', '120084b2b8c10c17803dac47fd515c7d', '2024-02-18 23:44:52', 0),
(4, 'daniel@swiftusa.org', 'Daniel', '', 'c1043df92ce7509f043e441f9d5a0467', '2024-02-19 13:45:58', 0),
(5, 'tim@freightandsalvage.org', 'Tim', '', 'e191cf803ecb86b1e379f74de5069e3d', '2024-02-20 18:48:20', 0),
(6, 'judytodd@gmail.com', 'Judy', '', '849644506b790d02faa34e4d377fce63', '2024-02-20 18:49:48', 0),
(7, 'sanchali@joro.app', 'Sanchali', '', 'ecfa5310fd26be78a9c039d2385f5bbc', '2024-02-20 18:50:39', 0),
(8, 'Pearl.marill@gmail.com', 'Pearl', '', '8ebd92390c608beecf942622dbd5f817', '2024-02-20 18:51:16', 0),
(9, 'williamrogue.com@googlemail.com', 'William', '', '80cc1f4eb12022e53c56f6ba9ecccfcc', '2024-02-20 18:51:53', 0),
(16, 'geniyabriggs19@gmail.com', '', '', '1a78ab2a6e9109dc0151cf3a51d98ea7', '2024-09-19 10:26:13', 0),
(15, 'billhuffmax7260@gmail.com', '', '', '301a616c1723523cf8338e20b404e775', '2024-09-17 00:28:44', 0),
(14, 'augbrygabrielle@yahoo.com', '', '', '398ff9229c2c2bdd74aefb38d97c7c35', '2024-09-12 05:05:22', 0),
(17, 'djibodesire@yahoo.com', '', '', 'f69d62147ee38d9c1e89e9645fdf790e', '2024-09-22 06:45:19', 0),
(18, 'okokokk7777@yahoo.com', '', '', 'e55a12056a77d968faa96c320dedec46', '2024-09-25 20:48:06', 0),
(19, 'amanda.west6186@aol.com', '', '', '6defc79363ef643a898f4533ed4f0a06', '2024-10-01 16:03:02', 0),
(24, 'pysivelazb@gmail.com', '', '', '25668c418f87a1941690fbd797dec85f', '2024-10-26 16:16:58', 0),
(25, 'smcdanieli2003@gmail.com', '', '', '447b1bf66bc852c7ab09c8299a7bc6ca', '2024-10-26 16:31:18', 0),
(23, 'prosperbrayjn4478@gmail.com', '', '', '5b7a92ef3c1aa441814cf1cea29a4c15', '2024-10-19 00:53:24', 0),
(22, 'homosh81@yahoo.com', '', '', '1de137a366ba8c2f51bc787a07ec6923', '2024-10-13 13:15:36', 0),
(26, 'oayjydp5bdptpufa0@yahoo.com', '', '', '6a15dc5fe2f9b822fb08a14be82adbb6', '2024-10-30 22:15:47', 0),
(28, 'meribeste2003@gmail.com', '', '', '8b1a8212a7380f3f3a9678527cc8a366', '2024-11-08 01:26:37', 0),
(30, 'miklicdhaloch@yahoo.com', '', '', '22f66eb9d81c58f5ff10bc3233f86e8d', '2024-11-10 11:05:45', 0),
(31, 'shephemartinbl@gmail.com', '', '', '5fc9842e3d269fff9e5e272e5ac2ed39', '2024-11-11 05:01:38', 0),
(32, 'carroll.jg@gmail.com', 'John', '', 'c40138d2afb8fa8c348523f06d2fd98e', '2024-11-11 05:41:00', 0),
(33, 'katerincomptonwc@gmail.com', '', '', 'bc623985da75c3a1e473a7c45dd8724e', '2024-11-11 23:32:39', 0),
(34, 'aarenoc9570@gmail.com', '', '', 'ad904d35e6a9fd0d8bfc9be7925775a9', '2024-11-12 22:39:20', 0),
(35, 'tjgztywrpr0o6w62t@yahoo.com', '', '', '57101e8917c17355c715ba8ba0186dbc', '2024-11-13 20:05:51', 0),
(36, 'hfhjftuzhc@yahoo.com', '', '', 'b50b683947dfd64c431146df2c8511ca', '2024-11-14 17:34:24', 0),
(37, 'mtxnate59nt@yahoo.com', '', '', '8eddbb7dc1cd5bc8a1fcccda6f8ff615', '2024-11-15 14:33:40', 0),
(38, 'willifordalfini@yahoo.com', '', '', '477b6510a27c971989d76c60bf7dad57', '2024-11-16 10:55:53', 0),
(39, 'pmeinard8101@gmail.com', '', '', '6e8f20844d2d4d5213f71af97f4aa831', '2024-11-19 02:33:05', 0),
(40, 'dominadoor@gmail.com', '', '', 'dbc8d9d67795e45aec0fda040c7cfb77', '2024-11-20 05:41:36', 0),
(41, 'ixedyylvhurxumrta@yahoo.com', '', '', '88cff7632fe69c3b106c944624213468', '2024-11-23 23:15:26', 0),
(42, 'titaniyafosterzl1999@gmail.com', '', '', 'd203146c325158e4013107af18c04a25', '2024-11-24 20:16:37', 0),
(43, 'otdveokrlxolunoji@yahoo.com', '', '', '3794bd6326c260a6b9ca46a4ef1ffba4', '2024-11-25 18:10:16', 0),
(44, 'ncoxnd@gmail.com', '', '', 'e49ae72cd8fdba40f70329ecc343bb65', '2024-11-26 17:01:05', 0),
(45, 'rachaelrichman@gmail.com', '', '', '30d472923cd1cf4626db9374eb40cd5a', '2024-11-27 15:03:27', 0),
(46, 'qpnaqzml6jpz@yahoo.com', '', '', 'a95fb6a3c3426bf220dfee7a4b2f1189', '2024-11-28 12:12:03', 0),
(47, 'mikealexbruin@gmail.com', '', '', '8c98ac09c81ac5ab2b60a394e0715332', '2024-11-28 18:29:10', 0),
(48, 'bunz.ridlehoover@yahoo.com', '', '', '2d4380de6d9c90d502e8ae8c9b040b53', '2024-11-29 07:36:39', 0),
(49, 'g8hmpssp63eimnado@yahoo.com', '', '', '20405ca21c4e1e6d64584ec98ab4d83c', '2024-11-30 02:18:01', 0),
(50, 'zancnellaaza@yahoo.com', '', '', 'e841f525f6944067b071321d76afde0f', '2024-11-30 21:12:14', 0),
(53, 'mboobarra@yahoo.com', '', '', '72925badca300cabf82ebf1b79cb4706', '2024-12-03 01:17:42', 0),
(54, 'lllbnwidgqeerdyi@yahoo.com', '', '', 'ada160fe305290f9bc5fb4153f6710e3', '2024-12-04 10:29:48', 0),
(55, 'kaspirekkmlet@yahoo.com', '', '', '539363274a164cceae0d599e3c7dc509', '2024-12-05 04:54:10', 0),
(57, 'wjcjatoyae@yahoo.com', '', '', '17bdade5302571342db34281668019c9', '2024-12-06 19:59:16', 0),
(58, 'bfolo2ixcjl4f@yahoo.com', '', '', '929a68cc2c2ab94a644bd86c8c486871', '2024-12-08 07:12:52', 0),
(59, 'vl9hfrxv1da4@yahoo.com', '', '', '6683e9fabf22db68be5058b54a2ef98c', '2024-12-09 04:46:57', 0),
(60, 'wwwxbvfkft@yahoo.com', '', '', '49934686111a4f10c78161bf5d3feacd', '2024-12-10 02:57:50', 0),
(61, 'hxvxzyafqhkj6@yahoo.com', '', '', '5a9e9d29e5687332924a4ddcfebfff28', '2024-12-11 05:42:22', 0),
(62, 'big_yellaus@yahoo.com', '', '', '8350b44837eeeb88cde09bd578a42881', '2024-12-11 15:30:06', 0),
(63, 'basbaughlopezcamacho@yahoo.com', '', '', 'e56197dffee2f5fa62cdf9bb1e1541c1', '2024-12-12 09:14:26', 0),
(64, 'kerbyaser@gmail.com', '', '', '5beda712f425bb8e986259be64d859f5', '2024-12-14 10:19:58', 0),
(65, 'hdaianrdfdkmgtiiy@yahoo.com', '', '', 'dbf66ae497b9b6da1278fec933180065', '2024-12-16 04:23:30', 0),
(66, 'obanepozaro075@gmail.com', '', '', '5d42bfa3ebf36732594c16a743cecbde', '2024-12-18 15:52:43', 0),
(67, 'dokosiduk023@gmail.com', '', '', 'ef5983290451763cdda9d411fd6643ac', '2024-12-19 16:35:04', 1),
(68, 'omeriqimezi435@gmail.com', '', '', '5f1cbe0a98cce5d156b9172beaf8b056', '2024-12-20 15:42:05', 1),
(69, 'alvillarkotian@yahoo.com', '', '', 'e01931b07c580e3ab87ad3478ccb1c73', '2024-12-21 10:27:02', 1),
(70, 'fulsonnadsky@yahoo.com', '', '', '693fca7e50750f292140bf4783f00679', '2024-12-22 23:36:00', 1),
(71, 'cklsobrhy@yahoo.com', '', '', '76bce4c648f55eb9604b70675e580dd6', '2024-12-24 23:29:25', 1),
(72, 'xdv3w3z9wsnkv2gfl@yahoo.com', '', '', '376205b5a8bfa6d1c701376058457c79', '2024-12-25 18:56:07', 1),
(73, 'oxeberagecuq88@gmail.com', '', '', 'd5b2e069f21be5511e67f02df4b88048', '2024-12-26 16:22:52', 1),
(74, 'dopcrcr5pq9k@yahoo.com', '', '', '21d4278f8e55d6cf3b491ca2c026d4aa', '2024-12-27 16:22:43', 1),
(75, 'uwibeqacaqay97@gmail.com', '', '', '1bf8bdb0bfae88f54951293b97fd7b8f', '2024-12-29 08:43:14', 1),
(76, 'rkpsvhkemjomm@yahoo.com', '', '', '3d9ad054f742da46bfb574bf086b90dc', '2024-12-30 08:22:18', 1),
(78, 'galterwlpn@yahoo.com', '', '', '5936ca777b623be8f055ffd0791e6686', '2024-12-31 04:39:46', 1),
(79, 'glksjjgwyltj8mn@yahoo.com', '', '', 'cbc7e207df4b4fedd08db76465e9081f', '2024-12-31 22:39:00', 1),
(80, 'rlfdiadfpd@yahoo.com', '', '', '7c6507e77105ff7614ae15eac026af90', '2025-01-01 16:04:40', 1),
(81, 'omfohhwaumfa@yahoo.com', '', '', '66c6a35cc9756c11ce22e8841a787800', '2025-01-02 10:05:51', 1),
(82, 'tqsjubedjofaknlj@yahoo.com', '', '', 'fbcff95b733f8e88274ac8ce475386ea', '2025-01-03 06:41:29', 1),
(83, 'macottipatalinghug@yahoo.com', '', '', '30c4064f8021bc9eb7317694fa02a926', '2025-01-04 06:23:04', 1),
(84, 'siqukuwi483@gmail.com', '', '', 'c64135df159d1835cf3c3dbfdb67a852', '2025-01-05 07:35:28', 1),
(85, 'pamspeced@yahoo.com', 'Pam', '', '09ffc6fd1b89914ce5bdf298828731eb', '2025-01-05 23:52:51', 1),
(86, 'pmfogpkvlf@yahoo.com', '', '', '9792fcf7c02652e9ad8e4c1116840f8c', '2025-01-06 13:21:22', 1),
(87, 'modonedopiccinelli@yahoo.com', '', '', '14fd6fc2af2f62dc58d7274529c13bbf', '2025-01-07 16:18:34', 1),
(88, 'fboifqcsdapa@yahoo.com', '', '', 'fe9809f88451370afddb0d27f80ad43b', '2025-01-08 21:28:06', 1),
(89, 'kohihoracixe12@gmail.com', '', '', 'fdaa60d140c8067713c31ca70961e125', '2025-01-09 21:14:06', 1),
(90, 'mcgoegleras@yahoo.com', '', '', '81a1cd754102a65b04e7c40263b1349e', '2025-01-10 19:20:27', 1),
(91, 'lmecbmuod@yahoo.com', '', '', '15edad3bcba33a712606a06720650a1b', '2025-01-11 17:20:42', 1),
(92, 'himicikixelu05@gmail.com', '', '', 'f44430064d844c00adf98a624245bf77', '2025-01-12 19:11:12', 1),
(93, 'dan@dantynan.com', 'Dan', '', 'e01309b4b532172b62b19b28cb700b1e', '2025-01-13 12:00:00', 1),
(94, 'suhasni.pradeep@gmail.com', '', '', '41a8382c81ee4da11cbc66bbb4f04b04', '2025-01-13 12:00:00', 1),
(95, 'thamerg@gmail.com', '', '', '264bea4c645d30ac544f623d7bb7863a', '2025-01-13 12:00:00', 1),
(96, 'jobaesq@hotmail.com', '', '', '9a4e6952b2a6fdfb5581fca00affee1d', '2025-01-13 12:00:00', 1),
(97, 'catherinecheng2024@outlook.com', 'Catherine', '', '7a8def06341576901c7100a0f7fd9f7c', '2025-01-13 12:00:00', 1),
(98, 'kimgrobesf@gmail.com', '', '', '461f87c4a5c67ea958115a36e78abb6f', '2025-01-13 12:00:00', 1),
(99, 'ven00kat@gmail.com', '', '', '045a1706e7cb7daf0913e5590965f154', '2025-01-13 12:00:00', 1),
(100, 'bao.tumi@gmail.com', '', '', '6eb8317413c9279a982d3230730c4d98', '2025-01-13 12:00:00', 1),
(101, 'jenniferchao94102@gmail.com', '', '', '80fb53a57d064bb58e2d78a0064eaf32', '2025-01-13 12:00:00', 1),
(102, 'urhighnessbz@gmail.com', '', '', '2b8d66d5d1fe1f1ecbf1d74f21abd119', '2025-01-13 12:00:00', 1),
(103, 'trueme06@yahoo.com', '', '', '3c01a87a20347aa67d01c7383f78dfc7', '2025-01-13 12:00:00', 1),
(104, 'nedina9@gmail.com', '', '', 'd0afdca21a590c4f9dc2ff0a1622d3b3', '2025-01-13 12:00:00', 1),
(105, 'ortiz.destinee@yahoo.com', '', '', '69384659f79c63d4ee384cf79495ffe5', '2025-01-13 12:00:00', 1),
(106, 'wongm14@sfusd.edu', '', '', '8bb1198fae4131d3443e51eb119b8eb4', '2025-01-13 12:00:00', 1),
(107, 'myfongs@hotmail.com', '', '', '0b5535d4ddc0722a88eaf8f4f9718931', '2025-01-13 12:00:00', 1),
(108, 'idan192@gmail.com', '', '', 'b6294c6e117f210d91167c2b9154469c', '2025-01-13 12:00:00', 1),
(109, 'divyaraghavan89@gmail.com', '', '', '32eef08fd58410dc0d9183fbad781386', '2025-01-14 18:10:21', 1),
(110, 'ioboreal18verge37@gmail.com', '', '', '9c71b980d9775be69f5a77d3727fd8e8', '2025-01-15 22:31:01', 1),
(111, 'abraxas65legacy@gmail.com', '', '', '0d8dc106a3f7bb7b7b08f48f4b7b5316', '2025-01-17 03:04:29', 1),
(112, 'tmvugoqwa@yahoo.com', '', '', '95fe90f2d51d98fa177cc841411f79a4', '2025-01-18 06:37:59', 1),
(113, 'nirvanaumirage96@gmail.com', '', '', 'b5d465852f351c69f1f4547dcbf72f8d', '2025-01-19 03:47:15', 1),
(115, 'Judy9Vivienne6449@gmail.com', '', '', '9de8a4e484dc0b87cbcf017afab32f31', '2025-01-22 23:10:51', 1),
(116, 'zabarylotrdi@yahoo.com', '', '', '3745a6f27f19b1fbb3c1f008021f81a1', '2025-01-24 08:22:26', 1),
(117, 'paquin1201@gmail.com', 'Paula', '', '6be09f6d6f2f4a00c6f035b30292dbb3', '2025-01-25 22:34:26', 1),
(123, 'cvsbiz@gmail.com', '', '', 'sGRwbhY5HSsyWX3EK_wa_FmdOwJdMybE', '2025-02-01 12:45:56', 1),
(126, 'eclipseeybrinkia@gmail.com', '', '', 'PDEm5OwZWQKspvetGgXW9uNC3tnZmpnG', '2025-02-03 10:47:57', 1),
(131, 'sarahlena2008@gmail.com', '', '98.35.199.101', '3V3Kkhbit7ByhzkdyUyNX6une3q22wEF', '2025-02-09 13:11:49', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email_update`
--
ALTER TABLE `email_update`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE_EMAIL` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email_update`
--
ALTER TABLE `email_update`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
