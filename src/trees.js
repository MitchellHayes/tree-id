const trees = {
  whiteOak: {
    imageUrl: "/assets/trees/whiteOak.jpg",
    commonName: "White Oak",
    scientificName: "Quercus alba",
    facts:
      "White oak trees are unique because they grow both male and female flowers. The male flowers range between two and four inches long and are green or yellowish in color, while the female flower appears slightly red in color. Acorns are actually fruit from the fertilized female flower.",
  },
  baldCypress: {
    imageUrl: "/assets/trees/baldCypress.jpg",
    commonName: "Bald Cypress",
    scientificName: "Taxodium distichum",
    facts:
      "The wood of the bald cypress is valued for its durability and resistance to water. Historically, it has been used for building boats, docks, and even in the construction of New Orleans' famous French Quarter.",
  },
  ginkgo: {
    imageUrl: "/assets/trees/ginkgo.jpg",
    commonName: "Ginkgo",
    scientificName: "Ginkgo biloba",
    facts:
      "Ginkgo trees are incredibly resilient. After the atomic bomb was dropped on Hiroshima in 1945, several ginkgo trees were among the few living things to survive near the blast's epicenter. These trees are still alive today and serve as a symbol of hope and resilience.",
  },
  easternWhitePine: {
    imageUrl: "/assets/trees/easternWhitePine.jpg",
    commonName: "Eastern White Pine",
    scientificName: "Pinus strobus",
    facts:
      "The tree played a significant role in the American Revolution. Its straight and tall trunks were highly valued for ship masts. The British Crown claimed many of these trees for the Royal Navy, marking them with the King's Broad Arrow, which led to disputes and contributed to growing colonial unrest.",
  },
  pitchPine: {
    imageUrl: "/assets/trees/pitchPine.jpg",
    commonName: "Pitch Pine",
    scientificName: "Pinus rigida",
    facts:
      "In some areas, the Pitch Pine is under threat due to factors like fire suppression, development, and pests. Without regular fires, other tree species can outcompete Pitch Pines. Conservation efforts, including controlled burns, are used to maintain and restore Pitch Pine habitats.",
  },
  longleafPine: {
    imageUrl: "/assets/trees/longleafPine.jpg",
    commonName: "Longleaf Pine",
    scientificName: "Pinus palustris",
    facts:
      "One of the most unique features of the Longleaf Pine is its grass stage. After germination, the seedling spends several years looking like a tuft of grass, with its long needles growing directly from the ground. This stage can last for up to a decade, during which the tree is building a strong root system and waiting for the right conditions (often a fire) to start vertical growth.",
  },
  loblollyPine: {
    imageUrl: "/assets/trees/loblollyPine.jpg",
    commonName: "Loblolly Pine",
    scientificName: "Pinus taeda",
    facts:
      "Loblolly Pines have become a focal point in climate change research. Scientists study the tree's growth rings to understand past climate conditions. Additionally, because they grow quickly and sequester large amounts of carbon, there's interest in using Loblolly Pine plantations as a strategy for carbon offset.",
  },
  redPine: {
    imageUrl: "/assets/trees/redPine.jpg",
    commonName: "Red Pine",
    scientificName: "Pinus resinosa",
    facts:
      "Red Pine wood is straight-grained and moderately hard, making it valuable for construction purposes. It's often used for building poles, lumber, and pulpwood. The tree's fast growth and adaptability to a range of soil conditions also make it a popular choice for reforestation and timber plantations.",
  },
  austrianPine: {
    imageUrl: "/assets/trees/austrianPine.jpg",
    commonName: "Austrian Pine",
    scientificName: "Pinus nigra",
    facts:
      "The bark of the Austrian Pine is one of its distinguishing features. In younger trees, the bark is smooth and gray, but as the tree matures, it becomes flaky and takes on a dark, almost black appearance, leading to its other common name, Black Pine.",
  },
  jackPine: {
    imageUrl: "/assets/trees/jackPine.jpg",
    commonName: "Jack Pine",
    scientificName: "Pinus banksiana",
    facts:
      "The Jack Pine forests are crucial habitats for several species. One of the most notable is the endangered Kirtland's Warbler, which nests almost exclusively in young Jack Pine stands. Conservation efforts for this bird have included controlled burns to stimulate the growth of the specific Jack Pine habitats it requires.",
  },
  scotsPine: {
    imageUrl: "/assets/trees/scotsPine.jpg",
    commonName: "Scots Pine",
    scientificName: "Pinus sylvestris",
    facts:
      "The Scots Pine is a popular choice for bonsai, the Japanese art of growing miniature trees. Its natural rugged appearance and ability to thrive in various conditions make it a favorite among bonsai enthusiasts.",
  },
  ponderosaPine: {
    imageUrl: "/assets/trees/ponderosaPine.jpg",
    commonName: "Ponderosa Pine",
    scientificName: "Pinus ponderosa",
    facts:
      "One of the most recognizable features of mature Ponderosa Pines is their bark. It has a unique yellow-orange to reddish-brown color and forms large plates with black crevices, often described as looking like jigsaw puzzle pieces. Additionally, on a warm day, some say the bark has a faint vanilla or butterscotch scent!",
  },
  slashPine: {
    imageUrl: "/assets/trees/slashPine.jpg",
    commonName: "Slash Pine",
    scientificName: "Pinus elliottii",
    facts:
      "During the Apollo 14 mission in 1971, astronaut Stuart Roosa carried seeds from several tree species, including the Slash Pine, as part of a NASA experiment. These seeds orbited the moon and were later planted back on Earth. They became known as Moon Trees, and the Slash Pine Moon Trees were planted in various locations, including Florida and Mississippi.",
  },
  shortleafPine: {
    imageUrl: "/assets/trees/shortleafPine.jpg",
    commonName: "Shortleaf Pine",
    scientificName: "Pinus echinata",
    facts:
      "Over the past century, the range and population of Shortleaf Pine have declined significantly due to factors like logging, land conversion, and fire suppression. Efforts are being made to restore this species, recognizing its ecological importance and historical significance.",
  },
  tamarack: {
    imageUrl: "/assets/trees/tamarack.jpg",
    commonName: "Tamarack (Eastern Larch)",
    scientificName: "Larix laricina",
    facts:
      "The name Tamarack is derived from the Algonquian word akemantak, which means wood used for snowshoes. This reflects the tree's importance in traditional cultures and its utility in crafting.",
  },
  europeanLarch: {
    imageUrl: "/assets/trees/europeanLarch.jpg",
    commonName: "European Larch",
    scientificName: "Larix decidua",
    facts:
      "Due to its unique appearance, especially its autumnal coloration, the European Larch is sometimes planted as an ornamental tree in parks and gardens outside its native range.",
  },
  balsamFire_fraserFir: {
    imageUrl: "/assets/trees/balsamFir_fraserFir.jpg",
    commonName: "Balsam Fir or Fraser Fir",
    scientificName: "Abies balsamea or Abies fraseri",
    facts:
      "In many respects, Fraser fir and balsam fir are quite similar, although the geographic ranges of the two species do not overlap. Some scientists even suggest that because of the many similarities, the two species were once a single species which has since evolved into the present-day forms.",
  },
  norwaySpruce: {
    imageUrl: "/assets/trees/norwaySpruce.jpg",
    commonName: "Norway Spruce",
    scientificName: "Picea abies",
    facts:
      "The wood of the Norway Spruce is highly prized for making musical instruments, especially violins. The famous Stradivarius violins, known for their exceptional sound quality, were made using Norway Spruce.",
  },
  coloradoBlueSpruce: {
    imageUrl: "/assets/trees/coloradoBlueSpruce.jpg",
    commonName: "Colorado Blue Spruce",
    scientificName: "Picea pungens",
    facts:
      "Native American tribes historically used the resin from the Colorado Blue Spruce for medicinal purposes. It was applied as an antiseptic for wounds and also used to treat respiratory ailments.",
  },
  blackSpruce: {
    imageUrl: "/assets/trees/blackSpruce.jpg",
    commonName: "Black Spruce",
    scientificName: "Picea mariana",
    facts:
      "In certain harsh environments, like the northern limits of its range or in alpine regions, Black Spruce can grow as krummholz (German for crooked wood). In these conditions, the trees take on a stunted, shrub-like appearance due to the extreme cold and wind.",
  },
  redSpruce: {
    imageUrl: "/assets/trees/redSpruce.jpg",
    commonName: "Red Spruce",
    scientificName: "Picea rubens",
    facts:
      "The Red Spruce is particularly sensitive to acid rain. In the 20th century, many Red Spruce forests in the northeastern U.S. showed significant decline, which was linked to the effects of acid rain. As such, the health of Red Spruce forests can serve as an indicator of environmental quality and the impacts of pollution.",
  },
  whiteSpruce: {
    imageUrl: "/assets/trees/whiteSpruce.jpg",
    commonName: "White Spruce",
    scientificName: "Picea glauca",
    facts:
      "White Spruce can thrive in a range of environmental conditions, from boggy wetlands to dry rocky outcrops. It's also one of the few trees that can grow in the harsh conditions of the Arctic treeline, showcasing its adaptability.",
  },
  easternHemlock: {
    imageUrl: "/assets/trees/easternHemlock.jpg",
    commonName: "Eastern Hemlock",
    scientificName: "Tsuga canadensis",
    facts:
      "The dense shade provided by Eastern Hemlock canopies creates a unique microclimate beneath them. These cooler, moist conditions under hemlocks support a variety of plants and animals that might not thrive under other tree species.",
  },
  douglasfir: {
    imageUrl: "/assets/trees/douglasfir.jpg",
    commonName: "Douglas Fir",
    scientificName: "Pseudotsuga menziesii",
    facts:
      "Despite its name, the Douglas Fir is not a true fir. It belongs to the genus Pseudotsuga, which means false hemlock. Its unique cones, with distinctive three-pronged bracts, set it apart from true firs.",
  },
  easternArborvitae: {
    imageUrl: "/assets/trees/easternArborvitae.jpg",
    commonName: "Eastern Arborvitae (Northern Whitecedar)",
    scientificName: "Thuja occidentalis",
    facts:
      "The name Arborvitae is Latin for Tree of Life, which reflects the tree's life-sustaining properties recognized by Native Americans and early European settlers.",
  },
  atlanticWhitecedar: {
    imageUrl: "/assets/trees/atlanticWhitecedar.jpg",
    commonName: "Atlantic Whitecedar",
    scientificName: "Chamaecyparis thyoides",
    facts:
      "In some areas, particularly in the New Jersey Pine Barrens, stands of Atlantic Whitecedar that have been killed by fire or other disturbances are referred to as ghost forests due to the pale, bleached appearance of the dead trees. These ghost forests can remain standing for many years due to the wood's resistance to decay.",
  },
  easternRedcedar: {
    imageUrl: "/assets/trees/easternRedcedar.jpg",
    commonName: "Eastern Redcedar",
    scientificName: "Juniperus virginiana",
    facts:
      "Despite its name, the Eastern Redcedar is not a true cedar. It's actually a juniper. The aromatic wood and scale-like leaves might resemble cedars, but botanically, it's more closely related to junipers.",
  },
  northernCatalpa: {
    imageUrl: "/assets/trees/northernCatalpa.jpg",
    commonName: "Northern Catalpa",
    scientificName: "Catalpa speciosa",
    facts:
      "The Northern Catalpa is known for its large, heart-shaped leaves and showy, orchid-like flowers. It's often planted as an ornamental tree because of its striking appearance. The tree produces long, slender seed pods, often referred to as 'cigar' or 'bean' pods, which can be up to 20 inches long.",
  },
  floweringDogwood: {
    imageUrl: "/assets/trees/floweringDogwood.jpg",
    commonName: "Flowering Dogwood",
    scientificName: "Cornus florida",
    facts:
      "The Flowering Dogwood is renowned for its beautiful spring display of white or pink bracts that resemble petals. While many believe these are the tree's flowers, the actual flowers are small and clustered in the center of these bracts. The tree also produces bright red berries in the fall, which are a favorite for many bird species. In addition to its ornamental beauty, the Flowering Dogwood has hard wood that has been used for making tools and various other items.",
  },
  stripedMaple: {
    imageUrl: "/assets/trees/stripedMaple.jpg",
    commonName: "Striped Maple",
    scientificName: "Acer pensylvanicum",
    facts:
      "The Striped Maple, also known as Moosewood or Goosefoot Maple, gets its name from the distinctive greenish-white vertical stripes that adorn its bark. This small deciduous tree or large shrub is unique in that its leaves are large and almost triangular, resembling a goose's foot. It's often found in the understory of forests, thriving in shaded environments. The Striped Maple's tender twigs and leaves are a favored food for deer and moose, hence the nickname Moosewood.",
  },
  redMaple: {
    imageUrl: "/assets/trees/redMaple.jpg",
    commonName: "Red Maple",
    scientificName: "Acer rubrum",
    facts:
      "The Red Maple is one of the first trees to flower in the spring, often blooming before the leaves appear. This early bloom provides a vital nectar source for bees and other pollinators emerging from winter.",
  },
  silverMaple: {
    imageUrl: "/assets/trees/silverMaple.jpg",
    commonName: "Silver Maple",
    scientificName: "Acer saccharinum",
    facts:
      "The wood of the Silver Maple is less brittle than that of other maples. This flexibility has led to its use in products that require some give, like tool handles and even clothespins.",
  },
  norwayMaple: {
    imageUrl: "/assets/trees/norwayMaple.jpg",
    commonName: "Norway Maple",
    scientificName: "Acer platanoides",
    facts:
      "The Norway Maple is native to eastern and central Europe and western Asia, but has been widely planted and naturalized elsewhere, including North America. It's known for its broad, dense canopy that provides ample shade. One of its notable features is the milky sap that appears when a leaf stem is broken. While it's a popular street tree, in some areas it's considered invasive due to its ability to outcompete native species.",
  },
  sugarMaple: {
    imageUrl: "/assets/trees/sugarMaple.jpg",
    commonName: "Sugar Maple",
    scientificName: "Acer saccharum",
    facts:
      "The Sugar Maple is best known for its sap, which is the primary source for making maple syrup. This tree showcases a brilliant display of autumn colors, ranging from bright yellows to deep reds. It's also the state tree for several U.S. states, including New York and Vermont. The wood of the Sugar Maple is dense and strong, often used for furniture and flooring.",
  },
  blackMaple: {
    imageUrl: "/assets/trees/blackMaple.jpg",
    commonName: "Black Maple",
    scientificName: "Acer nigrum",
    facts:
      "The Black Maple is closely related to the Sugar Maple and is sometimes considered a subspecies of it. Like the Sugar Maple, the Black Maple's sap can also be used to produce maple syrup. The tree gets its name from its dark, furrowed bark. Its leaves are distinct, with deep lobes and a drooping appearance, setting it apart from the more common Sugar Maple. The Black Maple's foliage turns a brilliant yellow in the fall, adding to its ornamental appeal.",
  },
  horsechestnut: {
    imageUrl: "/assets/trees/horsechestnut.jpg",
    commonName: "Horsechestnut",
    scientificName: "Aesculus hippocastanum",
    facts:
      "The Horsechestnut is renowned for its impressive spring display of white, candle-like flower clusters. The tree produces large, spiky green fruit capsules that contain shiny brown seeds, commonly known as 'conkers' or 'buckeyes'. These seeds have been traditionally used in a children's game called 'conkers' in the UK. Despite their appealing look, the seeds are toxic if ingested. The Horsechestnut's name is believed to come from the horseshoe-shaped scars left on twigs after the leaves fall, as well as the practice of using the tree's seeds to treat respiratory issues in horses.",
  },
  ohioBuckeye: {
    imageUrl: "/assets/trees/ohioBuckeye.jpg",
    commonName: "Ohio Buckeye",
    scientificName: "Aesculus glabra",
    facts:
      "The Ohio Buckeye is the state tree of Ohio and has given the state its nickname, 'The Buckeye State'. Its name comes from its shiny brown seeds, which resemble the eye of a deer or 'buck's eye'. Native Americans once used the tree's crushed seeds and twigs to stun fish, making them easier to catch. However, it's worth noting that the seeds are toxic and should not be consumed.",
  },
  yellowBuckeye: {
    imageUrl: "/assets/trees/yellowBuckeye.jpg",
    commonName: "Yellow Buckeye",
    scientificName: "Aesculus flava",
    facts:
      "The Yellow Buckeye has a surprising defense mechanism. When under stress, such as during a drought, the tree can release chemicals into the soil to inhibit the growth of nearby competing plants, ensuring it gets more resources. It's a natural way of saying, This is my space!",
  },
  boxelder: {
    imageUrl: "/assets/trees/boxelder.jpg",
    commonName: "Boxelder (Ashleaf Maple)",
    scientificName: "Acer negundo",
    facts:
      "Unlike many trees that have both male and female flowers on the same tree, Boxelders are typically dioecious, meaning individual trees are either male or female, this is relatively rare among maples. The tree is also known for the Boxelder bug, a common insect that feeds on its seeds and sap but can sometimes become a nuisance when it invades homes in large numbers.",
  },
  blueAsh: {
    imageUrl: "/assets/trees/blueAsh.jpg",
    commonName: "Blue Ash",
    scientificName: "Fraxinus quadrangulata",
    facts:
      "The Blue Ash is distinct among ashes for its four-angled (square) twigs and its unique ability to produce a blue dye. When the inner bark is crushed and mixed with water, it forms a blue solution, which historically was used for dyeing cloth. The tree gets its name from this characteristic. Native to the Midwest and parts of the U.S. South, the Blue Ash is also known for its durability and resistance to the Emerald Ash Borer, a pest that has devastated many ash populations.",
  },
  greenAsh: {
    imageUrl: "/assets/trees/greenAsh.jpg",
    commonName: "Green Ash",
    scientificName: "Fraxinus pennsylvanica",
    facts:
      "Green Ash is a highly adaptable tree, often found in a variety of habitats from wetlands to uplands. It's known for its compound leaves and slightly hairy leaf undersides. The tree has been widely planted as a street and park tree because of its tolerance to urban conditions. However, it's currently under threat from the invasive emerald ash borer, which has devastated many ash populations.",
  },

  whiteAsh: {
    imageUrl: "/assets/trees/whiteAsh.jpg",
    commonName: "White Ash",
    scientificName: "Fraxinus americana",
    facts:
      "Unlike many trees that have fixed genders throughout their lifespan, White Ash can occasionally change its gender. A tree that has been producing male flowers for years might suddenly produce female flowers, or vice versa. This rare ability can be a survival strategy, allowing the tree to produce seeds even if there aren't many other ash trees nearby.",
  },
  yellowPoplar_tulipPoplar_tuliptree: {
    imageUrl: "/assets/trees/yellowPoplar_tulipPoplar_tuliptree.jpg",
    commonName: "Yellow Poplar / Tulip Poplar / Tuliptree",
    scientificName: "Liriodendron tulipifera",
    facts:
      "The Tuliptree, often called the Tulip Poplar or Yellow Poplar, is neither a poplar nor related to tulips, but its flowers bear a striking resemblance to tulip flowers. It's one of the tallest eastern hardwood trees, often reaching heights of 90 to 150 feet. The tree's leaves are unique, with a distinctive tulip shape. The wood of the Tuliptree is versatile and has been used for various purposes, from furniture to boat building.",
  },
  sassafras: {
    imageUrl: "/assets/trees/sassafras.jpg",
    commonName: "Sassafras",
    scientificName: "Sassafras albidum",
    facts:
      "Sassafras is notable for its uniquely shaped leaves, with some trees bearing three different leaf shapes. The tree's roots and bark have a distinct aromatic scent and were historically used to flavor beverages, including the original root beer. Sassafras also has a rich history in traditional medicine, with various parts of the tree used for different remedies. In the fall, its leaves turn a range of brilliant colors, from deep orange to scarlet and purple.",
  },
  waterOak: {
    imageUrl: "/assets/trees/waterOak.jpg",
    commonName: "Water Oak",
    scientificName: "Quercus nigra",
    facts:
      "The acorns of the Water Oak are a favorite among wildlife. They're smaller than the acorns of many other oak species, making them an easy snack for a variety of animals. Birds, deer, squirrels, and even wild turkeys are known to feast on them.",
  },
  sweetgum: {
    imageUrl: "/assets/trees/sweetgum.jpg",
    commonName: "Sweetgum",
    scientificName: "Liquidambar styraciflua",
    facts:
      "The Sweetgum is easily recognizable by its star-shaped leaves and spiky round fruit, often referred to as 'gumballs' or 'space bugs'. In the fall, its leaves display a vibrant array of colors, ranging from yellow and orange to deep red and purple. The tree gets its name from the aromatic resin or 'gum' that exudes from cuts in the bark, which has been used for various purposes, including medicinal remedies and chewing gum by Native Americans. The Sweetgum is also a valuable timber tree, known for its fine-grained wood.",
  },
  whitePoplar: {
    imageUrl: "/assets/trees/whitePoplar.jpg",
    commonName: "White Poplar",
    scientificName: "Populus alba",
    facts:
      "In ancient times, the White Poplar was associated with the goddess Hera in Greek mythology. According to legend, the first White Poplar tree sprang from the transformed nymph Leuce, who was loved by Hades.",
  },
  americanSycamore: {
    imageUrl: "/assets/trees/americanSycamore.jpg",
    commonName: "American Sycamore",
    scientificName: "Platanus occidentalis",
    facts:
      "The American Sycamore is one of the largest hardwood trees in the eastern U.S., often recognized by its mottled, exfoliating bark. The bark peels away in patches, revealing a camouflage pattern of white, gray, and brown underneath. This tree is often found along riverbanks and can tolerate wet soils. Its large, broad leaves turn a golden color in the fall. The spherical seed balls, which hang from the tree in clusters, are another distinctive feature.",
  },
  londonPlanetree: {
    imageUrl: "/assets/trees/londonPlanetree.jpg",
    commonName: "London Planetree",
    scientificName: "Platanus × acerifolia",
    facts:
      "The London Planetree is a hybrid, resulting from a cross between the American Sycamore and the Oriental Planetree. It's a popular urban tree due to its resilience to pollution and compacted soil. Like the American Sycamore, it has distinctive exfoliating bark, but it often has a more pronounced and rugged appearance. The tree was extensively planted in London in the 19th century, which is how it got its common name.",
  },
};

export default trees;
