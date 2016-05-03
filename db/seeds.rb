# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "GuestUser",
  password: "beourGuest2theTest"
)

Beast.create(
  author_id: 1,
  name: "Mountain Troll",
  description: "A Troll is a magical creature of prodigious strength and immense stupidity. In fact, they are so stupid that they actually had a wizarding exam failing grade named after them. Trolls are grouped in the taxonomical genus Troglodytarum.

  Mountain Trolls are a larger breed of troll, and generally reaching a height of about twelve feet and weighing over a tonne. Troll whiskers have magical properties, and are sometimes used as wand cores. Their feet have two toes, both with giant toenails.

  They are dangerously violent and incredibly aggressive, engaging in unpredictable behaviour, comparable to giants. They are also incredibly low in intelligence, to which giants seem to have more of.",
  avg_height: 150,
  avg_weight: 1160,
  affinity_id: 1)

Beast.create(
  author_id: 1,
  name: "Griffin",
  description: "The Griffin originated in Greece. It has the front legs, wings and head of a giant eagle, and the body, hind legs, and tail of a lion. The main diet of the Griffin is raw meat. Griffins are known as fierce creatures, however, despite this, skilled Wizards have been able to befriend them. Griffins are often used by wizards as guards of treasure, like Sphinxes.",
  avg_height: 89,
  avg_weight: 500,
  affinity_id: 3)

Beast.create(
  author_id: 1,
  name: "Gnoll",
  description: "A lean, muscular 7 foot tall Gnoll can be an imposing sight. Despite their musculature they move rather quickly, easily outpacing most other races. Gnolls also outpace most other races in how quickly they mature. A Gnoll matures by the age of 5 and lives to be about 30.

  Gnolls have reflective eyes that are typically bright green or yellow. They also have a thick coat of fur, which is generally light brown or dark brown. Certain clans may posses a single-colored coat or a spotted or striped coat. Some Gnolls possess crestlike manes of hair going from their head down their spine which rise up they become frightened or angry.

  Adding to other races distrust about Gnolls, occasionally a Gnoll's demonic ancestry will result in peculiar physical traits. This might be manifested in the claws of Gnoll Claw Fighters or in abnormal eye or coat colors.",
  avg_height: 80,
  avg_weight: 240,
  affinity_id: 1)

Beast.create(
  author_id: 1,
  name: "Kobold",
  description: "Kobolds are dinosaur-like reptilian humanoids that are extremely dexterous and clever trapmakers.

  Males are about three inches taller and 5 kilograms heavier than most females. Their hides are typically a rust-brown or reddish black color, with ivory-colored horns. Their heads are described as dog-like, but in recent editions they are illustrated as looking more like crocodiles. Their eyes glow red, and they can see accurately even in lightless conditions up to 60 feet away. Kobolds are described as smelling like a cross between damp dogs and stagnant water.

  Unlike dragons, kobolds are cold-blooded. The scales covering their bodies are like that of an iguana or other large lizard. The scales that cover their tails are very fine, so that they resemble the naked tails of rats. Kobolds lose and gain new teeth throughout their lives, often saving and making necklaces from them. Kobolds favor raggedy-looking red or orange clothing made from leather or the silk of giant spiders. They never wear shoes, but they are fond of jewelry and other ornamentation.

  Kobolds shed their skin about once a season, in patches, over the course of a week. They keep themselves well-groomed, regularly polishing their horns, claws, and teeth.",
  avg_height: 45,
  avg_weight: 42,
  affinity_id: 1)


Beast.create(
  author_id: 1,
  name: "Goblin",
  description: "Goblins are a race of small and numerous goblinoids common throughout the land, often living in underground caverns near the surface known as lairs. Goblins, like other goblinoids, have a commonly short temper and are best avoided even in the best of circumstances. They have flat faces, broad noses, pointed ears, and small, sharp fangs. Their foreheads slope back, and their eyes vary in color from red to yellow. Their skin color ranges from yellow through any shade of orange to a deep red; usually all members of the same tribe share the same colored skin, though they also come in shades of green.

  Goblins do not get along well with most other races and are particularly suspicious of other goblinoids. Goblins have a somewhat ambivalent relationship with orcs and half-orcs, who they've worked with on occasion, but the only true allies of the goblin race are worgs, who often act as mounts and fighting companions for goblins. Goblins have a particularly adverse relationship with both Tel-quessir and dwarves.",
  avg_height: 48,
  avg_weight: 58,
  affinity_id: 1)

Beast.create(
  author_id: 1,
  name: "Hippocampus",
  description: "The Hippocampus is a beast with the head and forequarters of a horse, and the tail and hindquarters of a giant fish, making it somewhat similar in appearance to an over-sized seahorse.

  Hippocampus lay large, semi-transparent eggs through which the young hippocampus, known as a Tadfoal, can be seen. Hippocampus is derived from the words \"hippos\" means \"horse\" and \"kampos\" means \"sea monster\"",
  avg_length: 72,
  avg_weight: 1400,
  affinity_id: 2)

Beast.create(
  author_id: 1,
  name: "Waterdog",
  description: "Affectionately called "waterpups" by locals, these playful creatures live near large bodies of water and subsist mostly on fish and kelp. Their fur is thickly coated with oils in order to reduce drag when diving.",
  avg_height: 40,
  avg_weight: 80,
  affinity_id: 2)

Beast.create(
  author_id: 1,
  name: "Kracken",
  description: "The Kracken is a large, ocean-dwelling magical beast. It is akin to a squid the size of a house measuring over 60 feet tall and wide. Its body is similar to that of a squid, with a ring of tentacles surrounding a mouth connected to a conical central body. Two of its 10 tentacles are longer than the rest, and bear deadly barbs. The kraken has very large eyes, and fins protrude from the upper part of its elongated central body.

  Krakens are highly destructive and evil creatures. With their strong tentacles and massive strength, they can pull an entire ship down into the ocean. They have often completely wiped tropical islands of all life, and deep beneath the ocean, they have cavernous lairs where they keep human slaves to feed and tend them. Krakens were supposedly once the rulers of the sea, but eventually the forces of good drove them back, though legends say they will one day rise again. Krakens attack predominantly with their tentacles. They can both constrict opponents, and bring them into the reaches of the creature's huge jaws. In addition, Krakens can also release an enormous cloud of jet-black ink, and can even cast spells. It also regenerates severed limbs.

  Krakens cannot speak the languages of surface dwelling races, but might speak Aquan, or a language of their own similar to that of whales.",
  avg_height: 720,
  affinity_id: 2)

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
affinity_id: 1)


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


Beast.create(
  author_id: 1,
  name: "Bronze Dragon",
  description: "Bronze dragons are the third most powerful of the metallic dragons.  Bronze dragons truly enjoy observing and interacting with smaller creatures, most especially humans. They will often go out of their way to help them, such as rescuing humans from a shipwreck or a dangerous foe. They also seem to seek justice as best they can, and cannot abide to see any creature being treated with cruelty of any sort. The older the dragon, the more pronounced that this passion for justice becomes.

Physically, the bronze dragon is quite fierce in appearance, despite its good nature. While most of its body is a reflective copper color, the wings are often tipped with green. The eyes of a Bronze Dragon begin with a green iris and as they age the eye slowly becomes a solid green with no distinct iris. The dragon has three main large horns protruding from each cheek, pointing back towards the tail. It also has a couple more smaller horns. The tips of these points are black and very sharp, and are often used for grooming. The tongue is purple-gray, long and pointed, and not forked. A large frill runs down the upper part of its neck. They smell like sea-spray.

Given its exceptional abilities as a swimmer, the entrance to a bronze dragon's lair is quite naturally underwater, and often disguised with seaweed and coral. The bulk of the lair is above water level, however, consisting of multiple tunnels and large chambers, some as much as a thousand feet above sea level. They prefer to make their lairs in an island volcano, if possible.

While bronze dragons are often fascinated with battles, especially fighting to defeat evil, they have strong moral compunctions against killing living beings unless absolutely necessary. They will often join good-aligned armies to fight the forces of evil, either in human form or their own. In battle, their weapon of choice is to breathe repulsion gas, which is so putrid that it forces absolutely everything away. They also like to relocate a foe to a remote location where it can do no harm when possible. When forced to kill, the bronze dragon is a deadly combatant, roasting enemies with bursts of lightning or ripping them open with its clawed forelegs.",
    avg_length: 120,
    avg_weight: 160000,
    affinity_id: 2)


Beast.create(
  author_id: 1,
  name: "Gold Dragon",
  description: "Gold dragons are the most powerful of the metallic dragons, and the most dedicated to defeating evil. Their sense of justice is as defining a feature as any other.

  Physically, gold dragons are quite spectacular. Several large horns tipped with umber shoot sideways from their cheeks, and two very prominent horns point backwards along their heads. The most obvious feature is probably the tentacle whiskers that sprout from the top and bottom of the gold dragon's jaw, giving the appearance of a beard of sorts. Their wings, like those of brass and copper dragons, connect to the body all the way to the tip of the tail. From below, the overall shape resembles that of a brass dragon, but the different coloring and dramatic difference in size enables easy differentiation. When in flight, the gold dragon's wings ripple, giving the appearance of swimming rather than flying. They smell of saffron and incense.

Combat-wise, gold dragons prefer to talk rather than to fight. They will never engage in combat if they believe it is unnecessary. Once they believe it is necessary, however, they are amazingly powerful opponents. Their ability to breathe fire rivals that of the eldest red dragons, and they will pour their entire being into a battle against evil. Gold dragons dislike killing, but they do not hesitate to do so if it is necessary in order to defeat an evil foe.",
    avg_length: 264,
    avg_weight: 1280000,
    affinity_id: 3)


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
  affinity_id: 1)

Beast.create(
  author_id: 1,
  name: "Worg",
  description: "The worgs may look like ordinary wolves, but these ferocious beasts tower over their smaller counterparts, and a single one is powerful enough overrun a group of armed civilians if they're not careful. Worgs can be found hunting solitary or in pairs, but special care must be taken as packs of 6-11 have been encountered.

  Though physically powerful, worgs also work together in pairs or in a pack to bring down large game, while lone worgs usually chase down creatures smaller than themselves. Both often use hit-and-run tactics to exhaust their quarry. A pack usually circles a larger opponent: Each wolf attacks in turn, biting and retreating, until the creature is exhausted, at which point the pack moves in for the kill. If they get impatient or heavily outnumber the opponent, worgs attempt to pin it.",
  avg_height: 38,
  avg_length: 60,
  avg_weight: 300,
  affinity_id: 4)

Beast.create(
  author_id: 1,
  name: "Cockatrice",
  description: "Said to be born when a chicken lays an egg, but the egg is nurtured by a frog, the cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn
  flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs- things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger.

  A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.",
  avg_height: 38,
  avg_length: 60,
  avg_weight: 300,
  affinity_id: 3)

Beast.create(
  author_id: 1,
  name: "Peryton",
  description: "The peryton combines the wings of a giant eagle (5 feet tall with a 25 foot wingspan) with the head and body of a powerful stag. Its body is covered in dark green plumage which is impervious to weapons that are not magically enchanted. Its stag head is blue-black with pale orange eyes and glossy obsidian antlers. Interestingly, the peryton casts the shadow of a human rather than its own shadow most of the time.

  Perytons are roost atop high cliffs in dense forest. They create nests of 4 or so individuals which are completely independent of any other nests, and nests are never located closer together than few miles of one another except under special circumstances, such as a particularly prominent hunting ground.

  Though they may look like deer, perytons are very different from their earth bond relatives, and hunt any creatures smaller than themselves.",
  avg_height: 60,
  avg_weight: 1100,
  affinity_id: 4)

Beast.create(
  author_id: 1,
  name: "Owlbear",
  description: "Scholars have long debated the origins of the owlbear. The most common theory is that a demented wizard created the first specimen by crossing a giant owl with a bear. However, venerable elves claim to have known these creatures for thousands of years, and some fey insist that owlbears have always existed in the Feywild.

  Brown to black feathers cover the thick, shaggy coat of its bear-like body, and the limpid pupils of its great round eyes stare furiously from its beaked owlish head. A full-grown male can stand as tall as 8 feet and weigh up to 1,500 pounds. Adventurers who have survived encounters with the creature often speak of the bestial madness they glimpsed in its red-rimmed eyes.

  The owlbear’s reputation for ferocity, aggression, stubbornness, and sheer ill temper makes it one of the most feared predators of the wild. There is little, if anything, that a hungry owlbear fears, and these creatures are often hungry. Even monsters that outmatch an owlbear in size and strength avoid tangling with it, for this creature cares nothing about a foe’s superior strength as it attacks without provocation.",
  avg_height: 88,
  avg_weight: 1400,
  affinity_id: 4)

Beast.create(
  author_id: 1,
  name: "Bulette",
  description: "A bulette is a massive predator that terrorizes any lands it inhabits. Also called a “land shark,” it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.

  A bulette attacks anything it regards as edible, choosing the easiest or closest prey first. The only creatures it refuses to eat are elves (and it dislikes the taste of dwarves). When burrowing underground, a landshark relies on its tremorsense ability to detect prey. When it senses something edible (that is, senses movement), it breaks to the surface, crest first, and begins its attack.

  Some sages believe the bulette is the result of a mad wizard’s experiments at crossbreeding snapping turtles and armadillos, with infusions of demon ichor. Bulettes have been thought to be extinct at different times, but after years without a sighting, the creatures inevitably reappear. Because their young are almost never seen, some sages suspect that bulettes maintain secret nesting grounds from which adults strike out into the world.",
  avg_height: 120,
  avg_weight: 2100,
  affinity_id: 3)



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
  affinity_id: 3)



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
  affinity_id: 4)

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
  affinity_id: 3)

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
  affinity_id: 1)

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
  affinity_id: 2)

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
    affinity_id: 3)

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
