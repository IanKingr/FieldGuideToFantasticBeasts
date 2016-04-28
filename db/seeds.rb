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
  description: "Native to Greece, the Hippocampus is a beast with the head and forequarters of a horse, and the tail and hindquarters of a giant fish, making it somewhat similar in appearance to an over-sized seahorse. Although it is generally found in the Mediterranean, a blue roan specimen was caught by Merpeople off the coast of Scotland in 1949 and domesticated.

  Hippocampus lay large, semi-transparent eggs through which the young hippocampus, known as a Tadfoal, can be seen. Hippocampus is derived from the words \"hippos\" means \"horse\" and \"kampos\" means \"sea monster\"",
  avg_length: 72,
  avg_weight: 1400,
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
