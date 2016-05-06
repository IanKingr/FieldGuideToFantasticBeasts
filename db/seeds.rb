# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#1
User.create(
  username: "VeteranHunter42",
  password: "2hunt2live"
)

#2
User.create(
  username: "TheGloriousSun",
  password: "praise2thesun"
)

#3
User.create(
  username: "ScaredAndRunning",
  password: "runnnnnnnnnnn!"
)

#4
User.create(
  username: "StalwartHeartx",
  password: "headstrongheartstrong"
)

#5
User.create(
  username: "MarvelousMage",
  password: "magicIsmagic"
)

#6
User.create(
  username: "whichisthepointyend",
  password: "new2thegig"
)

#7
User.create(
  username: "GuestUser",
  password: "beourGuest2theTest"
)

#8
User.create(
  username: "LagunaBlade",
  password: "boomboomboom"
)

#9
User.create(
  username: "CrystalMaiden",
  password: "beourGuest2theTest"
)

#10
User.create(
  username: "Rexxar2face",
  password: "faceistheplace"
)

#11
User.create(
  username: "JainaLetsItGo",
  password: "icewalled"
)

#12
User.create(
  username: "DevoutUther",
  password: "faithinthelight"
)

#13
User.create(
  username: "Malfurious",
  password: "imustprotectthewild"
)

#14
User.create(
  username: "GrimPatron9001",
  password: "everybodygetinhere"
)

#15
User.create(
  username: "GrimPatron1381",
  password: "everybodygetinhere2"
)

#16
User.create(
  username: "GrimPatron4512",
  password: "everybodygetinhere"
)

#17
User.create(
  username: "GrimPatron9341",
  password: "everybodygetinhere"
)

#18
User.create(
  username: "GrimPatron7427",
  password: "everybodygetinhere"
)

#19
User.create(
  username: "MadScholar",
  password: "2science4u"
)

#20
User.create(
  username: "PotionsMaster",
  password: "2science4u"
)

#21
User.create(
  username: "SaltySeaDog36",
  password: "love2boat"
)

#22
User.create(
  username: "BigFella82",
  password: "magic4life"
)

#1
Beast.create(
  author_id: 1,
name: "Mountain Troll",
  description: "A Troll is a magical creature of prodigious strength and immense stupidity. In fact, they are so stupid that they actually had a wizarding exam failing grade named after them. Trolls are grouped in the taxonomical genus Troglodytarum.

  Mountain Trolls are a larger breed of troll, and generally reaching a height of about twelve feet and weighing over a tonne. Troll whiskers have magical properties, and are sometimes used as wand cores. Their feet have two toes, both with giant toenails.

  They are dangerously violent and incredibly aggressive, engaging in unpredictable behaviour, comparable to giants. They are also incredibly low in intelligence, to which giants seem to have more of.",
  avg_height: 150,
  avg_weight: 1160,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462177972/mountain_troll_ohvn37.png")

Review.create(
  user_id: 1,
  beast_id: 1,
  rating: 3,
  description: "A hardy and tough brute, luckily they are easily outsmarted."
)

Review.create(
  user_id: 6,
  beast_id: 1,
  rating: 5,
  description: "The WORST! My blade only glanced off his hide - I mind have well been hitting it with a spoon!"
)

Review.create(
  user_id: 14,
  beast_id: 1,
  rating: 2,
  description: "One troll is no match for me and the boys! Everybody get in here!"
)

Review.create(
  user_id: 15,
  beast_id: 1,
  rating: 2,
  description: "One troll is no match for me and the boys! Everybody get in here!"
)

Review.create(
  user_id: 16,
  beast_id: 1,
  rating: 2,
  description: "One troll is no match for me and the boys! Everybody get in here!"
)

Review.create(
  user_id: 17,
  beast_id: 1,
  rating: 2,
  description: "One troll is no match for me and the boys! Everybody get in here!"
)

Review.create(
  user_id: 18,
  beast_id: 1,
  rating: 2,
  description: "One troll is no match for me and the boys! Everybody get in here!"
)

#2
Beast.create(
  author_id: 1,
name: "Sphinx",
  description: "In sacred isolation, a sphinx guards the secrets and treasures of the gods. As it calmly regards each new party that comes before it, the bones of supplicants and quest seekers that failed to pass its tests lie scattered around its lair. Its great wings sweep along its flanks, its tawny leonine body rippling with muscle and possessed of forepaws powerful enough to tear a humanoid in half.

  Sphinxes test the worth of those who seek the treasures of the gods, whether forgotten secrets or mighty spells, artifacts or magical gateways. Creatures that choose to face a sphinx's test are bound to that test unto death, and only those worthy will survive it. The rest the sphinx destroys.",
  avg_height: 89,
  avg_weight: 1350,
  affinity_id: 3)

Review.create(
  user_id: 12,
  beast_id: 2,
  rating: 4,
  description: "A thinker, a schemer, not one to trifle with."
)

Review.create(
  user_id: 19,
  beast_id: 2,
  rating: 1,
  description: "Such a fascinating creature! Easy to deal with if you are keen of intellect! Beware the claws if not!"
)



Review.create(
  user_id: 8,
  beast_id: 2,
  rating: 1,
  description: "Note to future riders, do not eat beforehand..."
)

#3
Beast.create(
  author_id: 1,
name: "Gnoll",
  description: "A lean, muscular 7 foot tall Gnoll can be an imposing sight. Despite their musculature they move rather quickly, easily outpacing most other races. Gnolls also outpace most other races in how quickly they mature. A Gnoll matures by the age of 5 and lives to be about 30.

  Gnolls have reflective eyes that are typically bright green or yellow. They also have a thick coat of fur, which is generally light brown or dark brown. Certain clans may posses a single-colored coat or a spotted or striped coat. Some Gnolls possess crestlike manes of hair going from their head down their spine which rise up they become frightened or angry.

  Adding to other races distrust about Gnolls, occasionally a Gnoll's demonic ancestry will result in peculiar physical traits. This might be manifested in the claws of Gnoll Claw Fighters or in abnormal eye or coat colors.",
  avg_height: 80,
  avg_weight: 240,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/gnoll2_hnbvra.jpg")

Review.create(
  user_id: 1,
  beast_id: 3,
  rating: 3,
  description: "A lone gnoll. Not a problem. A pack. Problem."
)

Review.create(
  user_id: 2,
  beast_id: 3,
  rating: 3,
  description: "Creatures of darkness cannot stand before the light, praise the sun!"
)

#4
Beast.create(
  author_id: 1,
name: "Kobold",
  description: "Kobolds are dinosaur-like reptilian humanoids that are extremely dexterous and clever trapmakers.

  Males are about three inches taller and 5 kilograms heavier than most females. Their hides are typically a rust-brown or reddish black color, with ivory-colored horns. Their heads are described as dog-like, but in recent editions they are illustrated as looking more like crocodiles. Their eyes glow red, and they can see accurately even in lightless conditions up to 60 feet away. Kobolds are described as smelling like a cross between damp dogs and stagnant water.

  Unlike dragons, kobolds are cold-blooded. The scales covering their bodies are like that of an iguana or other large lizard. The scales that cover their tails are very fine, so that they resemble the naked tails of rats. Kobolds lose and gain new teeth throughout their lives, often saving and making necklaces from them. Kobolds favor raggedy-looking red or orange clothing made from leather or the silk of giant spiders. They never wear shoes, but they are fond of jewelry and other ornamentation.

  Kobolds shed their skin about once a season, in patches, over the course of a week. They keep themselves well-groomed, regularly polishing their horns, claws, and teeth.",
  avg_height: 45,
  avg_weight: 42,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573995/kobold_ydtymw.jpg")

Review.create(
  user_id: 19,
  beast_id: 4,
  rating: 3,
  description: "Entry #34: Cultural note. They do not like to be called lizards. Not one bit."
)

#5
Beast.create(
  author_id: 1,
name: "Goblin",
  description: "Goblins are a race of small and numerous goblinoids common throughout the land, often living in underground caverns near the surface known as lairs. Goblins, like other goblinoids, have a commonly short temper and are best avoided even in the best of circumstances. They have flat faces, broad noses, pointed ears, and small, sharp fangs. Their foreheads slope back, and their eyes vary in color from red to yellow. Their skin color ranges from yellow through any shade of orange to a deep red; usually all members of the same tribe share the same colored skin, though they also come in shades of green.

  Goblins do not get along well with most other races and are particularly suspicious of other goblinoids. Goblins have a somewhat ambivalent relationship with orcs and half-orcs, who they've worked with on occasion, but the only true allies of the goblin race are worgs, who often act as mounts and fighting companions for goblins. Goblins have a particularly adverse relationship with both Tel-quessir and dwarves.",
  avg_height: 48,
  avg_weight: 58,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/Goblins2_vspr9w.jpg"
  )

Review.create(
  user_id: 19,
  beast_id: 5,
  rating: 2,
  description: "Entry #6: Future note, bartering with Goblins should be done in a public location and without much coin on hand. Ancillary reminder, acquire new pants."
)

#6
Beast.create(
  author_id: 1,
name: "Hippocampus",
  description: "The Hippocampus is a beast with the head and forequarters of a horse, and the tail and hindquarters of a giant fish, making it somewhat similar in appearance to an over-sized seahorse.

  Hippocampus lay large, semi-transparent eggs through which the young hippocampus, known as a Tadfoal, can be seen. Hippocampus is derived from the words \"hippos\" means \"horse\" and \"kampos\" means \"sea monster\"",
  avg_length: 72,
  avg_weight: 1400,
  affinity_id: 2,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574568/Breaching_Hippocamp2_rn8nye.jpg")

Review.create(
  user_id: 21,
  beast_id: 6,
  rating: 1,
  description: "Harmless mares. Make one heck of a racket during migrations."
)

#7
Beast.create(
  author_id: 1,
name: "Waterdog",
  description: "Affectionately called \"waterpups\" by locals, these playful creatures live near large bodies of water and subsist mostly on fish and kelp. Their fur is thickly coated with oils in order to reduce drag when diving.",
  avg_height: 40,
  avg_weight: 80,
  affinity_id: 2)

#8
Beast.create(
  author_id: 1,
name: "Kraken",
  description: "The Kraken is a large, ocean-dwelling magical beast. It is akin to a squid the size of a house measuring over 60 feet tall and wide. Its body is similar to that of a squid, with a ring of tentacles surrounding a mouth connected to a conical central body. Two of its 10 tentacles are longer than the rest, and bear deadly barbs. The kraken has very large eyes, and fins protrude from the upper part of its elongated central body.

  Krakens are highly destructive and evil creatures. With their strong tentacles and massive strength, they can pull an entire ship down into the ocean. They have often completely wiped tropical islands of all life, and deep beneath the ocean, they have cavernous lairs where they keep human slaves to feed and tend them. Krakens were supposedly once the rulers of the sea, but eventually the forces of good drove them back, though legends say they will one day rise again. Krakens attack predominantly with their tentacles. They can both constrict opponents, and bring them into the reaches of the creature's huge jaws. In addition, Krakens can also release an enormous cloud of jet-black ink, and can even cast spells. It also regenerates severed limbs.

  Krakens cannot speak the languages of surface dwelling races, but might speak Aquan, or a language of their own similar to that of whales.",
  avg_height: 720,
  affinity_id: 2,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573957/kraken_pyegbg.jpg")

Review.create(
  user_id: 21,
  beast_id: 8,
  rating: 5,
  description: "Gazing down at the slightly muddy water, I saw it. A squirming mass of interwoven tentacles resembling enormous snakes, immensely thick and long and tapering at their free ends to the size of a man's thumb. It was a foul sight, an obscene growth from the dark places of the world, where incessant hunger is the driving force. At one place, down near the bulge of the hull, appeared a staring gorgon face with great lidless eyes and a huge parrot beak that moved slightly, opening and shutting as though it had just crunched and swallowed a meal of warm flesh."
)

Review.create(
  user_id: 1,
  beast_id: 8,
  rating: 5,
  description: "There can be nothing more frightening in a gigantic monster of many tentacles than intelligence."
)

Review.create(
  user_id: 4,
  beast_id: 8,
  rating: 5,
  description: "What a Kraken grasps it does not lose, be it a longship or leviathan."
)


#9
Beast.create(
  author_id: 1,
name: "Roc",
  description: "At first sight, a roc's silhouette looks much like any other bird of prey. As it descends, however, its unearthly size becomes terrifyingly clear. In flight, a roc's wingspan spreads two hundred feet or more. At rest, perched upon the mountain peaks that are its home, this monstrous bird rivals the oldest dragons in size.

  Sky Titans - In the ancient days when giants battled
  dragons for control of the world, Annam, the father of
  the giant gods, created the rocs so that his worshipers
  might challenge the dragons' dominance of the air.
  When the war ended, the rocs were freed from giant
  domination and spread throughout the world.

  Though cloud giants and storm giants sometimes
  tame these great birds, roxs treat even giants as
  potential prey. They fly great distances in search of food,
  soaring high above the clouds to reach their favored
  hunting grounds. A roc seldom hunts swift or small
  creatures, and it ignores towns and forests where prey
  can easily take cover. When it locates a large and slowmoving
  target such as a giant, a whale, or an elephant, a
  roc dives down to snatch its prey in its massive talons.

  Remote and Alone - Rocs are solitary creatures
  that can live for centuries. They lair in nests made
  from trees, tents, broken ships, and the remains of
  caravans they carry off, placing these massive tangles in
  mountain clefts out of the reach of lesser creatures.
  Sometimes a roc's nest contains treasures from the
  caravans or ships they raid, but these creatures are
  heedless of such baubles. More rarely, a nest holds eggs
  that are taller than a human, produced by the rocs'
  infrequent mating.",
  avg_length: 360,
  avg_weight: 8000,
  affinity_id: 1)

Review.create(
  user_id: 4,
  beast_id: 9,
  rating: 5,
  description: "It was for all the world like an eagle, but one indeed of enormous size; so big in fact that its quills were twelve paces long and thick in proportion. And it is so strong that it will seize an elephant in its talons and carry him high into the air and drop him so that he is smashed to pieces; having so killed him, the bird swoops down on him and eats him at leisure."
)

Review.create(
  user_id: 11,
  beast_id: 9,
  rating: 5,
  description: "As if a mountain was hovering in the air above us, ready to crash down in an avalanche of feathers."
)

#10
Beast.create(
  author_id: 1,
name: "Pegasus",
  description: "The pegasus is a magnificent winged horse that inhabit valleys and bordering forests. At first glance, they resemble mere horses with large bird-like wings. Despite this, they have other avian features as well, their lower legs are feathered instead of furred and their manes and tails are also of feathers.

  Along with their bird-like physical attributes, pegasi also build nests and mate for life. Unlike birds, they give birth to live young which will mature at the same rate as a horse and have somewhat similar habits.

  Pegasi are highly prized as swift and reliable steeds, being faster and less temperamental than griffons, hippogriffs, and wyverns. However, pegasi are wild and shy creatures that are not easily tamed. A pegasus must be persuaded to serve a good-aligned creature as a mount, but when it does so, it forges a lifelong bond with its new companion.",
  avg_height: 69,
  avg_weight: 1500,
  avg_length: 240,
  affinity_id: 3)

Review.create(
  user_id: 9,
  beast_id: 10,
  rating: 5,
  description: "While U'ndere was having dinner on the foredeck, a wild pegasus appeared from nowhere, stampeded over his enchiladas, and flew off again, leaving cheesy hoof prints all across the deck. \"What was that for?\" we hadn't the foggiest."
)


Review.create(
  user_id: 5,
  beast_id: 10,
  rating: 5,
  description: "Perhaps it is a human thing, to look upon such beauty and fail to encompass it."
)

#11
Beast.create(
  author_id: 1,
name: "Red Dragon",
  description: "The most covetous of the true dragons, red dragons
  tirelessly seek to increase their treasure hoards. They
  are exceptionally vain, even for dragons, and their
  conceit is reflected in their proud bearing and their
  disdain for other creatures.

  The odor of sulfur and pumice surrounds a red
  dragon, whose swept-back horns and spinal frill define
  its silhouette. Its beaked snout vents smoke at all times,
  and its eyes dance with flame when it is angry. Its wings
  are the longest of any chromatic dragon, and have a
  blue-black tint along the trailing edge that resembles
  metal burned blue by fire.

  The scales of a red dragon wyrmling are a bright
  glossy scarlet, turning a dull, deeper red and becoming
  as thick and strong as metal as the dragon ages. Its
  pupils also fade as it ages, and the oldest red dragons
  have eyes that resemble molten lava orbs.

  Mountain Masters - Red dragons are found in mountainous
  terrain, badlands, and any other locale where they can
  perch high and survey their domain. Their preference
  for mountains brings them into conflict with the hilldwelling
  copper dragons from time to time.

  Arrogant Tyrants - Red dragons fly into destructive
  rages and act on impulse when angered. They are so
  ferocious and vengeful that they are regarded as the
  archetypical evil dragon by many cultures.

  Obsessive Collectors - Red dragons value wealth above all else, and their treasure hoards are legendary. They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a
  glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority. A red dragon knows the value and provenance of
  every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon
  goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.",
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573777/reddragon_gtle3j.jpg")

Review.create(
  user_id: 8,
  beast_id: 11,
  rating: 5,
  description: "Red dragons smell of smoke and sulfur. The air around them sometimes shimmers, as though viewed through a heat mirage."
)

Review.create(
  user_id: 1,
  beast_id: 11,
  rating: 5,
  description: "Red dragons never forgive even the smallest slights. They kill over territorial intrusion, over the tiniest theft from their hoard, over an insult, or because they want to."
)


#12
Beast.create(
  author_id: 1,
name: "Silver Dragon",
  description: "Silver dragons are the second most powerful of the metallic dragons, and are true friends to all. The silver dragon enjoys the company of humans and elves so much that it will often take the form of a human or elf and live among them for the majority of its life. It should be noted that silvers, like all dragons, believe themselves the most superior creatures in the world. However, apart from the ability to fly, which they enjoy greatly, they tend to prefer the physical forms of humanoids for everyday life.

  Unlike the gold or bronze dragon, the silver dragon does not usually go out of its way to bring justice on the world. Silver dragons are more interested in protecting the humans or elves it has come to care for than in looking for evil. Like most metallic dragons, silvers do not enjoy combat, and are averse to killing. If forced to fight, however, they are as deadly as any other dragon.

  A silver wyrmling’s scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until the individual scales are scarcely visible. the pupils of the oldest silver dragons resemble orbs of molten mercury

  They are very intelligent, more so than most humans, extremely powerful, breathtakingly beautiful, and have lifespans rumored to stretch thousands of years.

  Dragons may live for millennia, while humans only live a few decades. This vast difference in time leads to inherent psychological differences concerning time. Dragons tend to think things through for years at a time, using their razor-sharp intellects to hone a plan to perfection, solve incalculable puzzles, or other such things. Silver dragons, however, note that humans are able to accomplish much in their short life spans because of their ambitious drive for success. When a silver dragon can combine its own long-term perspective with a quick and ambitious attitude, the benefit is undeniable.",
  avg_length: 258,
  avg_weight: 1280000,
  affinity_id: 4)

Review.create(
  user_id: 9,
  beast_id: 12,
  rating: 3,
  description: "Never have I seen a more beautiful creature!"
)


#13
Beast.create(
  author_id: 1,
name: "Bronze Dragon",
  description: "Bronze dragons are the third most powerful of the metallic dragons.  Bronze dragons truly enjoy observing and interacting with smaller creatures, most especially humans. They will often go out of their way to help them, such as rescuing humans from a shipwreck or a dangerous foe. They also seem to seek justice as best they can, and cannot abide to see any creature being treated with cruelty of any sort. The older the dragon, the more pronounced that this passion for justice becomes.

  Physically, the bronze dragon is quite fierce in appearance, despite its good nature. While most of its body is a reflective copper color, the wings are often tipped with green. The eyes of a Bronze Dragon begin with a green iris and as they age the eye slowly becomes a solid green with no distinct iris. The dragon has three main large horns protruding from each cheek, pointing back towards the tail. It also has a couple more smaller horns. The tips of these points are black and very sharp, and are often used for grooming. The tongue is purple-gray, long and pointed, and not forked. A large frill runs down the upper part of its neck. They smell like sea-spray.

  Given its exceptional abilities as a swimmer, the entrance to a bronze dragon's lair is quite naturally underwater, and often disguised with seaweed and coral. The bulk of the lair is above water level, however, consisting of multiple tunnels and large chambers, some as much as a thousand feet above sea level. They prefer to make their lairs in an island volcano, if possible.

  While bronze dragons are often fascinated with battles, especially fighting to defeat evil, they have strong moral compunctions against killing living beings unless absolutely necessary. They will often join good-aligned armies to fight the forces of evil, either in human form or their own. In battle, their weapon of choice is to breathe repulsion gas, which is so putrid that it forces absolutely everything away. They also like to relocate a foe to a remote location where it can do no harm when possible. When forced to kill, the bronze dragon is a deadly combatant, roasting enemies with bursts of lightning or ripping them open with its clawed forelegs.",
    avg_length: 120,
    avg_weight: 160000,
    affinity_id: 2,
    image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/bronze-dragon2_nwucvd.jpg")

#14
Beast.create(
  author_id: 1,
name: "Gold Dragon",
  description: "Gold dragons are the most powerful of the metallic dragons, and the most dedicated to defeating evil. Their sense of justice is as defining a feature as any other.

  Physically, gold dragons are quite spectacular. Several large horns tipped with umber shoot sideways from their cheeks, and two very prominent horns point backwards along their heads. The most obvious feature is probably the tentacle whiskers that sprout from the top and bottom of the gold dragon's jaw, giving the appearance of a beard of sorts. Their wings, like those of brass and copper dragons, connect to the body all the way to the tip of the tail. From below, the overall shape resembles that of a brass dragon, but the different coloring and dramatic difference in size enables easy differentiation. When in flight, the gold dragon's wings ripple, giving the appearance of swimming rather than flying. They smell of saffron and incense.

  Combat-wise, gold dragons prefer to talk rather than to fight. They will never engage in combat if they believe it is unnecessary. Once they believe it is necessary, however, they are amazingly powerful opponents. Their ability to breathe fire rivals that of the eldest red dragons, and they will pour their entire being into a battle against evil. Gold dragons dislike killing, but they do not hesitate to do so if it is necessary in order to defeat an evil foe.",
  avg_length: 264,
  avg_weight: 1280000,
  affinity_id: 3,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574192/golddragon_pydrot.jpg")

#15
Beast.create(
  author_id: 1,
name: "Basilisk",
  description: "Travelers sometimes find objects that look like pieces of remarkably lifelike stone carvings of wildlife. Missing parts appear to have been bitten off. Seasoned explorers regard such relics as warnings, knowing that the basilisk that created them is likely to be nearby.

  Adaptable Predators - Basilisks thrive in arid, temperate, or tropical climates. They lair in caves or other sheltered sites. Most often, basilisks are encountered underground.

  A basilisk born and raised in captivity can be domesticated and trained. Such a trained basilisk knows how to avoid meeting the eyes of those its master wishes to protect from its gaze, but it makes a daunting guardian beast. Because of this use, basilisk eggs are highly prized.

  Gaze of Stone - Basilisks are ponderous for hunting
  creatures, but they needn't chase prey. Meeting a basilisk's supernatural gaze can be enough to affect a rapid transformation, transforming a victim into porous stone. Basilisks, with their strong jaws, are able to
  consume the stone. The stone returns to organic form in the basilisk's gullet.

  Some alchemists are said to know how to process the basilisk's gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.",
  avg_length: 140,
  avg_weight: 430,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/basilisk2_prnd8m.jpg")

#16
Beast.create(
  author_id: 1,
name: "Worg",
  description: "The worgs may look like ordinary wolves, but these ferocious beasts tower over their smaller counterparts, and a single one is powerful enough overrun a group of armed civilians if they're not careful. Worgs can be found hunting solitary or in pairs, but special care must be taken as packs of 6-11 have been encountered.

  Though physically powerful, worgs also work together in pairs or in a pack to bring down large game, while lone worgs usually chase down creatures smaller than themselves. Both often use hit-and-run tactics to exhaust their quarry. A pack usually circles a larger opponent: Each wolf attacks in turn, biting and retreating, until the creature is exhausted, at which point the pack moves in for the kill. If they get impatient or heavily outnumber the opponent, worgs attempt to pin it.",
  avg_height: 38,
  avg_length: 60,
  avg_weight: 300,
  affinity_id: 4,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573120/worgpackfinal_unhicm.jpg")

Review.create(
  user_id: 19,
  beast_id: 16,
  rating: 4,
  description: "Entry #12: Attempts to domesticate were not well received."
)

#17
Beast.create(
  author_id: 1,
name: "Cockatrice",
  description: "Said to be born when a chicken lays an egg, but the egg is nurtured by a frog, the cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn
  flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs- things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger.

  A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.",
  avg_height: 38,
  avg_length: 60,
  avg_weight: 300,
  affinity_id: 3,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/cockatrice3_ugcue0.jpg")

#18
Beast.create(
  author_id: 1,
name: "Peryton",
  description: "The peryton combines the wings of a giant eagle (5 feet tall with a 25 foot wingspan) with the head and body of a powerful stag. Its body is covered in dark green plumage which is impervious to weapons that are not magically enchanted. Its stag head is blue-black with pale orange eyes and glossy obsidian antlers. Interestingly, the peryton casts the shadow of a human rather than its own shadow most of the time.

  Perytons are roost atop high cliffs in dense forest. They create nests of 4 or so individuals which are completely independent of any other nests, and nests are never located closer together than few miles of one another except under special circumstances, such as a particularly prominent hunting ground.

  Though they may look like deer, perytons are very different from their earth bond relatives, and hunt any creatures smaller than themselves.",
  avg_height: 60,
  avg_weight: 1100,
  affinity_id: 4,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573828/peryton_htlprh.jpg")

Review.create(
  user_id: 20,
  beast_id: 18,
  rating: 5,
  description: "Its strangest trait is that, when the sun strikes it, instead of casting a shadow of its own body, it casts the shadow of a man. From this, some conclude that the Perytons are the spirits of wayfarers who have died far from their homes and from the care of their gods."
)

#19
Beast.create(
  author_id: 1,
name: "Owlbear",
  description: "Scholars have long debated the origins of the owlbear. The most common theory is that a demented wizard created the first specimen by crossing a giant owl with a bear. However, venerable elves claim to have known these creatures for thousands of years, and some fey insist that owlbears have always existed in the Feywild.

  Brown to black feathers cover the thick, shaggy coat of its bear-like body, and the limpid pupils of its great round eyes stare furiously from its beaked owlish head. A full-grown male can stand as tall as 8 feet and weigh up to 1,500 pounds. Adventurers who have survived encounters with the creature often speak of the bestial madness they glimpsed in its red-rimmed eyes.

  The owlbear’s reputation for ferocity, aggression, stubbornness, and sheer ill temper makes it one of the most feared predators of the wild. There is little, if anything, that a hungry owlbear fears, and these creatures are often hungry. Even monsters that outmatch an owlbear in size and strength avoid tangling with it, for this creature cares nothing about a foe’s superior strength as it attacks without provocation.",
  avg_height: 88,
  avg_weight: 1400,
  affinity_id: 4,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462573926/owlbear2_fkynpr.jpg")


Review.create(
  user_id: 19,
  beast_id: 19,
  rating: 4,
  description: "Entry #49: While fresh Owlbear feathers make the best quills, I will strongly consider alternative means of acquiring such penning implements."
)

Review.create(
  user_id: 10,
  beast_id: 19,
  rating: 4,
  description: "A beast of immense power and keen insight. If you should see one, hope it doesn't see you."
)

#20
Beast.create(
  author_id: 1,
name: "Bulette",
  description: "A bulette is a massive predator that terrorizes any lands it inhabits. Also called a “land shark,” it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.

  A bulette attacks anything it regards as edible, choosing the easiest or closest prey first. The only creatures it refuses to eat are elves (and it dislikes the taste of dwarves). When burrowing underground, a landshark relies on its tremorsense ability to detect prey. When it senses something edible (that is, senses movement), it breaks to the surface, crest first, and begins its attack.

  Some sages believe the bulette is the result of a mad wizard’s experiments at crossbreeding snapping turtles and armadillos, with infusions of demon ichor. Bulettes have been thought to be extinct at different times, but after years without a sighting, the creatures inevitably reappear. Because their young are almost never seen, some sages suspect that bulettes maintain secret nesting grounds from which adults strike out into the world.",
  avg_height: 120,
  avg_weight: 2100,
  affinity_id: 3,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574568/bulette3_m0dtyw.jpg")


Review.create(
  user_id: 20,
  beast_id: 20,
  rating: 5,
  description: "Their humors are extremely useful. Would be willing to pay handsomely for fresh vials of it!"
)

#21
Beast.create(
  author_id: 1,
name: "Griffon",
  description: "Griffons are ferocious avian carnivores with the muscular bodies of lions and the head, forelegs, and wings of eagles. When they attack, griffons are as swift and deadly as eagles, even as they strike with a lion's might and grace.

  Griffons hunt in small prides, flying high over plains and forests near their rocky cliff-side aeries. Herd animals and horses are the prey they
  crave above all others, though they also hunt and kill hippogriffs. When it spots horses, a griffon screeches to alert its pride mates, which descend quickly toward their prey.

  Those riding or herding horses dread the griffon's piercing cry, preparing themselves for the bloody fight that inevitably follows. A griffon ignores a horse's rider when possible, and a rider that abandons its mount, or a herder that releases one or two horses, can escape unharmed while the griffon targets its chosen prey. Riders who attempt to protect their horses attract the full fury of an attacking griffon.
  ",
  avg_height: 76,
  avg_weight: 500,
  affinity_id: 3,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574145/griffin3_ixkwmp.jpg")


#22
Beast.create(
  author_id: 1,
name: "Couatl",
  description: "Couatls are benevolent serpentine beings of great
  intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.

  Divine Caretaker - Couatls were created as guardians and caretakers by a benevolent god not
  worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still
  watch over ancient power, await fulfillment of prophecy,
  or safeguard the heirs of creatures they once guided
  and protected. Regardless of a couatl's task, it prefers to
  remain hidden, revealing itself only as a last resort.

  Truth Tellers - A couatl can't lie, but it can withhold
  information, answer questions vaguely, or allow
  others to jump to the wrong conclusions if doing so is
  necessary to protect something, to keep promises, or to
  hide the secret of its existence.

  Ancient and Few - A couatl can live for ages without
  sustenance, even surviving without air, but these
  creatures can die of disease or the passage of time. A
  couatl can sense its end up to a century beforehand, but
  it has no insight into the manner of its demise.
  If a couatl has already accomplished what it set out
  to do, it accepts its fate. However, if its imminent death
  endangers the completion of its goals, it actively seeks
  out another couatl with which to produce offspring. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.",
  avg_length: 144,
  avg_weight: 1800,
  affinity_id: 4,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462355490/fea3c330780e39e372c5414b83671321_ehzru5.jpg"
  )

#23
Beast.create(
  author_id: 1,
name: "Centaur",
  description: "Reclusive wanderers and omen-readers of the wild,
  centaurs avoid conflict but fight fiercely when pressed.
  They roam the vast wilderness, keeping far from
  borders, laws, and the company of other creatures.

  Wilderness Nomads - Centaur tribes range across
  lands with mild to hot climates, where a centaur
  requires only light furs or oiled skins to deal with
  inclement weather. They are hunter-gatherers and rarely
  build shelters or even use tents.

  Centaur migrations span continents and take decades
  to repeat, so that a centaur tribe might not retread
  the same path for generations. These long-ranging
  patterns can lead to conflict when centaurs encounter
  settlements of other creatures built along their
  traditional routes.

  Reluctant Settlers - A centaur that can't keep pace
  with the rest of its tribe is left behind. Some such
  centaurs vanish into the wilderness and are never
  seen again. Those that can bear the loss of their tribe
  might take up residence among other races. Frontier
  settlements value the nature knowledge of their centaur
  residents. Many such communities owe their survival to
  the insight and acumen of a centaur.

  Despite their reclusive nature, centaurs trade with
  elves and with the caravans of other benevolent
  humanoids they meet during their wanderings. A trader
  might save the life of a wounded or an elderly centaur
  unfit for long travel, escorting it to a settlement where it
  can peacefully live out the rest of its days.",
  avg_length: 81,
  avg_weight: 1400,
  affinity_id: 3,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/centaur3_qozfzw.jpg")

Review.create(
  user_id: 1,
  beast_id: 23,
  rating: 3,
  description: "Knew a string of centaurs when I ranged in the fields of Pelennor. Strong folk, and fast. Just don't ask them for a ride."
)

Review.create(
  user_id: 6,
  beast_id: 23,
  rating: 5,
  description: "I asked one for a ride..."
)

#24
Beast.create(
  author_id: 1,
name: "Pseudodragon",
  description: "The elusive pseudodragon dwells in the quiet places of
  the world, making its home in the hollows of trees and
  small caves. With its red-brown scales, horns, and a
  maw filled with sharp teeth, a pseudodragon resembles
  a tiny red dragon but its disposition is playful.

  Quiet and Defensive - Pseudodragons have little
  interest in other creatures, and they avoid them
  whenever possible. If it is attacked, a pseudodragon
  fights back using the poisonous stinger at the tip of its
  tail, one jab of which can put a creature into a catatonic
  state that can last for hours.

  Draconic Familiars - Mages often seek out
  pseudodragons, whose agreeable disposition, telepathic
  ability, and resistance to magic make them superior
  familiars. Pseudodragons are selective when it comes
  to choosing companions, but they can sometimes
  be won o~er with gifts of food or treasure. When
  a pseudodragon finds an agreeable companion, it
  bonds with that person as long as it is treated fairly.
  A pseudodr.agon puts up with no ill treatment, and
  it abandons a manipulative or abusive companion
  without warning.

  Language of Emotion - Pseudodragons can't speak,
  but they communicate using a limited form of telepathy
  that allows them to share basic ideas such as hunger,
  curiosity, or affection. When it bonds with a companion,
  a pseudodragon can communicate what it sees and
  hears even over long distances.

  A pseudodragon often vocalizes animal noises. A
  rasping purr indicates pleasure, while a hiss means
  unpleasant surprise. A bird-like chirping represents
  desire, and a growl always means anger or discontent.",
  avg_length: 15,
  avg_weight: 7,
  affinity_id: 4)


Review.create(
  user_id: 20,
  beast_id: 26,
  rating: 5,
  description: "If anyone should happen to acquire a scale, tooth, or other clipping from one, please do contact me! I have needs for it."
)

#25
Beast.create(
  author_id: 1,
name: "Aarakocra",
  description: "Aarakocra range the Howling Gyre, an endless storm
  of mighty winds and lashing rains that surrounds the
  tranquil realm of Aaqa in the Elemental Plane of Air.
  Making aerial patrols, these birdlike humanoids guard
  the windy borders of their home against invaders from
  the Elemental Plane of Earth, such as gargoyles, their
  sworn enemies.

  Enemies of Elemental Evil - In service to the Wind
  Dukes of Aaqa, aarakocra scout the planes in search
  of temples of Elemental Evil. They spy on malign
  elemental creatures and then either take the fight to
  those creatures or report back to the Wind Dukes.

  On the Material Plane, aarakocra create aeries atop
  the highest mountains, especially peaks near portals
  to the Elemental Plane of Air. From such heights,
  aarakocra watch for signs of elemental incursions,
  as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the windunburdened
  and ever moving- yet they watch over a
  region for years if that's what it takes to guard against
  the incursions of Elemental Evil.

  Aarakocra have no concept of political borders or
  property ownership, and the value of gems, gold, and
  other precious materials means little to aarakocra. In
  their eyes, a creature should use what is necessary and
  then cast what is left on the wind for others to use.",
  avg_length: 144,
  avg_weight: 1800,
  affinity_id: 1,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574568/aarakocra2_bhfzsd.jpg")

#26
Beast.create(
  author_id: 1,
name: "Dragon Turtle",
  description: "Dragon turtles are among the most fearsome creatures
  of the oceans. As large and voracious as the oldest of its land-based dragon kin, a dragon turtle strikes with its
  deadly jaws, steaming breath, and crushing tail.
  A dragon turtle's rough shell is the same dark green
  color as the deep water where this monster dwells.
  Silver highlights lining the shell resemble light
  dancing on open water, and a surfacing dragon turtle
  is sometimes mistaken for the reflection of the sun or
  moon on the waves.

  Like true dragons, dragon turtles collect treasure, first by sinking ships and then by sifting through the wreckage for coins and other
  precious items. A dragon turtle swallows treasure for
  transport, then regurgitates it when it reaches its lair.
  Dragon turtles dwell in caves hidden in coral reefs
  or beneath the seafloor, or along rugged stretches
  of coastline. If a choice cave is already inhabited, a
  dragon turtle attacks its current residents in an attempt
  to take over.

  A dragon turtle is smart enough to be bribed, and pirates sailing seas patrolled by these creatures quickly learn to offer them treasure
  in exchange for safe passage. Clever sahuagin sometimes ally with dragon turtles, enticing them with treasure to use their blistering breath weapons in sahuagin raids against ships and coastal settlements.",
  avg_height: 120,
  avg_weight: 2100,
  affinity_id: 2,
  image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574569/dragon-turtle2_utfece.jpg")

Review.create(
  user_id: 21,
  beast_id: 26,
  rating: 5,
  description: "Won't forget the day. The beast rose form the depths, striking our bow and throwing our craft into a spiral. The skiff, still attached to the ship's plating, was likewise carried around at dizzying speed. I could feel us whirling. I was experiencing that accompanying nausea that follows such continuous spinning motions. We were in dread, in the last stages of sheer horror, our blood frozen in our veins, our nerves numb, drenched in cold sweat as if from the throes of dying! And what a noise around our frail vessel! What roars echoing from the bowels of sea-borne horror! What crashes from the ship splinters breaking against sharp claws, where the hardest objects are smashed, where strong bows and wood are worn down and worked into \"a shaggy fur,\" as sailors express it! I was lucky to survive the day."
)


#27
Beast.create(
  author_id: 1,
name: "Hippogriff",
  description: "A beast whose magical origins are lost to history, a
  hippogriff possesses the wings and forelimbs of an
  eagle, the hindquarters of a horse, and a head that
  combines the features of both animals.

  Reclusive and omnivorous, hippogriffs mate for life
  and seldom venture more than a few miles from their
  nest. When defending its mate or its young, a hippogriff
  fights to the death. Hippogriffs don't lay eggs but give
  birth to live young.

  Dragons, griffons, and wyverns have a taste for
  hippogriff meat and frequently prey on these creatures.

  A hippogriff raised in captivity can be
  trained to be a faithful companion and mount. Of all the
  creatures that can serve as flying mounts, hippogriffs
  are among the easiest to train and the most loyal once
  trained properly.",
    avg_height: 84,
    avg_weight: 1000,
    affinity_id: 3,
    image_url: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462574103/hippogriff2_o0jvuw.jpg")


Review.create(
  user_id: 22,
  beast_id: 27,
  rating: 3,
  description: "Easily offended, hippogriffs are. Don't never insult one, 'cause it might be the last thing yeh do"
)

Review.create(
  user_id: 3,
  beast_id: 27,
  rating: 4,
  description: "Those talons on their front legs were half a foot long and deadly looking!"
)

Review.create(
  user_id: 3,
  beast_id: 27,
  rating: 3,
  description: "Once you get over the first shock of seeing something that is half horse and half bird, you start to appreciate the hippogriff's gleaming coats, changing smoothly from feather to hair."
)

Review.create(
  user_id: 4,
  beast_id: 27,
  rating: 3,
  description: "Yeh always wait fer the hippogriff ter make the firs' move. Eye contact should be maintained at all times, without a single blink."
)


#28
Beast.create(
  author_id: 1,
name: "Unicorn",
  description: "Unicorns dwell in enchanted forests. Unrelated to the horses it resembles, a unicorn is a celestial creature that wanders sylvan realms, its white form glimmering like starlight.

  A unicorn's brow sports a single spiraling horn
  of ivory whose magical touch can heal the sick and
  the injured. Its ears catch the words and whispers
  of the creatures that share its domain, and it knows
  the tongues of elves and sylvan folk. Unicorns allow
  good-hearted creatures to enter their woods to hunt or
  gather food, but they hold evil ever at bay. Foul-hearted
  creatures seldom leave a unicorn's domain alive.

  Good deities placed unicorns on
  the Material Plane to ward away evil and preserve and
  protect sacred places. Most unicorns protect a bounded
  realm such as an enchanted forest. However, the gods
  sometimes send a unicorn to guard sacred artifacts or
  protect specific creatures. When the forces of darkness
  strike against an individual the gods wish to protect,
  they might send that individual to a unicorn's forest,
  where evil creatures pursue at their peril.
  Unicorns most often serve deities of the forest and
  woodlands, including the gods of benevolent fey.

  In a unicorn's forest, a sense of calm pervades. From
  wolves and foxes to birds, squirrels, and tiny insects,
  the creatures of a unicorn's domain seem quite tame.
  Pixies, sprites, satyrs, dryads, and other normally
  mercurial fey loyally serve a unicorn when they
  dwell within its woods. Under a unicorn's protection,
  creatures feel safe from the threat of encroaching
  civilization and the insidious spread of evil.
  A unicorn roams its domain constantly, moving ever
  so carefully so as not to disturb other denizens. A
  creature might catch a passing glimpse of the unicorn
  then suddenly see nothing but the wild woods",
  avg_height: 72,
  avg_length: 96,
  avg_weight: 1200,
  affinity_id: 4)

Review.create(
  user_id: 1,
  beast_id: 28,
  rating: 1,
  description: "When a unicorn is slain, men have destroyed again the image of beauty that they seek."
)

Review.create(
  user_id: 12,
  beast_id: 28,
  rating: 2,
  description: "The legendary creature, startling white, approached. The legs, so delicately shaped, balanced a body wrought of finest ivory. And as he moved, his coat shone like reflected moonlight. High on his forehead rose the magic horn, the sign of his uniqueness: a tower held upright by his alert, yet gentle, timid gait."
)

Review.create(
user_id: 13,
beast_id: 28,
rating: 2,
description: "It is their nature to live alone in one place: usually a forest where there is a pool clear enough for them to see themselves-for they are a little vain, knowing themselves to be the most beautiful creatures in all the world, and magic besides."
)

Review.create(
  user_id: 6,
  beast_id: 28,
  rating: 2,
  description: "I thought unicorns were more... Fluffy"
)



# componentDidMount --> fetchCurrentUser
#
# check if user is logged in with componentWillMount(occurs before render and before DidMount)
#
#
# ajax cookies still send the cookies stored on your computer locally. So basically we need to fetchCurrentUser and return a user to the store. If nothing gets returned, then we aren't logged in. If something gets returned, then we are logged in.
#
# can still use session[:session_token] in Rails
#
# User.fetchCurrentUser at the top of the first page.
#
# In Sessions Controller
#
# show
#   token = session[:session_token]
#     @user = User.find_by({session_token: token})
#     if @user
#       response = {loggen_in: true, username: @user.username}
#       render json: response
#     else
#       render json: {logged_in: false}
#     end
