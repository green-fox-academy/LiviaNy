CREATE TABLE questions (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  question varchar(255) NOT NULL
);

INSERT INTO questions (id, question) VALUES
(1, 'Who made bubblegum flavored brokkoli?'),
(2, 'What colour the firt orange had?'),
(3, 'Which one letter doesn`t appear in any U.S. state name?'),
(4, 'How many words Scotland has fro "snow"?'),
(5, 'How many calories a blue whale eat in one mouthful?'),
(6, 'The current American flag was designed by who?'),
(7, 'What was the "#" symbol originally called?'),
(8, 'What pet Theodore Roosevelt had?'),
(9, 'How long a griaffe tongue can be?'),
(10, 'How much the inventor of the microwave appliance received for his discovery?'),
(11, 'Who has more neck bones?'),
(12, 'Why Europeand were scared of eating tomatoes when they were introduced??');

CREATE TABLE answers (
  ID int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  question_id int(11) NOT NULL,
  answer varchar(255) NOT NULL,
  is_correct tinyint(1) NOT NULL,
);

INSERT INTO answers (id, question_id, answer, is_correct) VALUES
(1, 1, 'KFC', 0),
(2, 1, 'McDonalds', 1),
(3, 1, 'Gordon Ramsay', 0),
(4, 1, 'no one', 0),
(5, 2, 'Orange', 0),
(6, 2, 'Red', 0),
(7, 2, 'White', 0),
(8, 2, 'Green', 1),
(9, 3, 'X', 0),
(10, 3, 'Q', 1),
(11, 3, 'Z', 0),
(12, 3, 'V', 0),
(13, 4, '421', 1),
(14, 4, '0', 0),
(15, 4, '7', 0),
(16, 4, '103', 0),
(17, 5, 'Half million calories', 1),
(18, 5, '0 calories', 0),
(19, 5, '10 000 calories', 0),
(20, 5, 'One million calories', 0),
(21, 6, 'Dwight D. Eisenhower', 0),
(22, 6, 'The Queen', 0),
(23, 6, 'a school boy', 1),
(24, 6, 'John F. Kennedy', 0),
(25, 7, 'octothrope', 1),
(26, 7, 'pound', 0),
(27, 7, 'hashtag', 0),
(28, 7, 'criss cross', 0),
(29, 8, 'Tiger', 0),
(30, 8, 'Cat', 0),
(31, 8, 'Elephant', 0),
(32, 8, 'Hyena', 1),
(33, 9, '150cm', 0),
(34, 9, '10cm', 0),
(35, 9, '50cm', 1),
(36, 9, '1m', 0),
(37, 10, '2 $', 1),
(38, 10, '1 million $', 0),
(39, 10, '0 $', 0),
(40, 10, '1 billion $', 0),
(41, 11, 'Giraffe', 0),
(42, 11, 'Sloth', 1),
(43, 11, 'Elephant', 0),
(44, 11, 'Lama', 0),
(45, 12, 'It was green', 0),
(46, 12, 'They thought it`s a flower', 0),
(47, 12, 'They had no such a problem', 0),
(48, 12, 'They thought it`s poisoned', 1);

CREATE TABLE comments (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  question_id int(11) NOT NULL,
  comment varchar(255) NOT NULL
);

INSERT INTO comments (id, question_id, comment) VALUES
(1, 1, 'This interesting fact will have your taste buds crawling. Unsurprisingly, the attempt to get kids to eat healthier didn’t go over well with the child testers, who were “confused by the taste”.'),
(2, 2, 'The original oranges from Southeast Asia were a tangerine-pomelo hybrid, and they were actually green. In fact, oranges in warmer regions like Vietnam and Thailand still stay green through maturity.'),
(3, 3, 'You’ll find a Z (Arizona), a J (New Jersey), and even two X’s (New Mexico and Texas)—but not a single Q.'),
(4, 4, 'Yes—421! That’s too many fun facts about snow. Some examples: sneesl (to start raining or snowing); feefle (to swirl); flinkdrinkin (a light snow).'),
(5, 5, 'These random facts are mindblowing! Those 457,000 calories are more than 240 times the energy the whale uses to scoop those krill into its mouth.'),
(6, 6, 'It started as a school project for Bob Heft’s junior-year history class, and it only earned a B- in 1958. His design had 50 stars even though Alaska and Hawaii weren’t states yet. Heft figured the two would earn statehood soon and showed the government his design. After President Dwight D. Eisenhower called to say his design was approved, Heft’s teacher changed his grade to an A.'),
(7, 7, 'Its technical name is octothorpe. The “octo-” means “eight” to refer to its points, though reports disagree on where “-thorpe” came from. Some claim it was named after Olympian Jim Thorpe, while others argue it was just a nonsense suffix.'),
(8, 8, 'Its name was Bill and was a present from the Ethiopian emperor. Roosevelt was famous for his many pets, including a one-legged rooster, a badger, a pony, and a small bear.'),
(9, 9, 'Their dark bluish black color is probably to prevent sunburn.'),
(10, 10, 'Percy Spencer was working as a researcher for American Appliance Company (now Raytheon) when he noticed a radar set using electromagnetic waves melted the candy bar in his pocket. He had the idea to make a metal box using microwaves to heat food, but the company was the one to file the patent. He received a $2 bonus but never any royalties. '),
(11, 11, 'Despite physical length, there are more bones in the neck of a sloth than a giraffe. There are seven vertebrae in the neck of giraffes, and in most mammals, but there are ten in a sloth. Still, giraffes are among 23 of the world’s biggest living animals.'),
(12, 12, 'Scholars think Hernán Cortés brought the seeds in 1519 with the intent of the fruits being used ornamentally in gardens. By the 1700s, aristocrats started eating tomatoes, but they were convinced the fruits were poison because people would die after eating them. In reality, the acidity from the tomatoes brought out lead in their pewter plates, so they’d died of lead poisoning.');