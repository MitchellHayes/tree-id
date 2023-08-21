const questionsBank = [
  {
    id: "6A",
    questions: [
      {
        text: "The tree bears cones and has leaves that are needle-like.",
        next: "7D",
      },
      {
        text: "The tree bears cones that are sometimes berry-like, have leaves that hug the twig, and are scale-like or awl-shaped.",
        next: "16B",
      },
      {
        text: "The tree has leaves that are flat and thin.",
        next: "7A",
      },
    ],
  },
  {
    id: "7A",
    questions: [
      {
        text: "The leaves are simple (one blade attached to a stalk or petiole.)",
        next: "7B",
      },
      {
        text: "The leaves are compound (more than one blade attached to a single stalk or petiole.)",
        next: "7C",
      },
      {
        text: "The leaves are uniquely fan-shaped and mostly attached in cluseters to short spur-like branches",
        next: "ginkgo",
      },
    ],
  },
  {
    id: "7B",
    questions: [
      {
        text: "The leaves are opposite (2 leaves that are directly across from each other on the same twig.)",
        next: "18A",
      },
      {
        text: "The leaves alternate (staggered, not oppsite eachother on the twig.)",
        next: "24B",
      },
    ],
  },
  {
    id: "7C",
    questions: [
      {
        text: "The leaves are opposite (2 leaves that are directly across from each other on the same twig.)",
        next: "20D",
      },
      {
        text: "The leaves alternate (staggered, not oppsite eachother on the twig.)",
        next: "58B",
      },
    ],
  },
  {
    id: "7D",
    questions: [
      {
        text: "The trees are evergreen with needles arranged in clusters of 2-5? These are pine trees.",
        next: "8A",
      },
      {
        text: "The trees are deciduous, with needles arranged in clusters of many on short, spur-like branches? These are larches.",
        next: "12A",
      },
      {
        text: "The trees are evergreen with needles arranged singly.",
        next: "12B",
      },
      {
        text: "The trees are deciduous, with singly attached needles of uneven length flattened along the twig, with a gree or brown wrinkled ball-like cone 1 inch in diameter",
        next: "baldCypress",
      },
    ],
  },
  {
    id: "8A",
    questions: [
      {
        text: "The needles are clustered in groups of 5 and the cones are long with thin scales.",
        next: "easternWhitePine",
      },
      {
        text: "The needles are clustered in groups of 2 or 3, and the cone scales are thick, often tipped with spines.",
        next: "8B",
      },
    ],
  },
  {
    id: "8B",
    questions: [
      {
        text: "The needles are clustered in groups of 3.",
        next: "8C",
      },
      {
        text: "The needles are clustered in groups of 2.",
        next: "10A",
      },
      {
        text: "The needles are clustered in groups of 2 and 3 on the same tree.",
        next: "10D",
      },
    ],
  },
  {
    id: "8C",
    questions: [
      {
        text: "The needles are 3-5 inches long, somewhat twisted, often sprouting in tufts from the trunk with cones 2-3.5 inches long.",
        next: "pitchPine",
      },
      {
        text: "The needles are 8-18 inches long, with cones 6-10 inches long.",
        next: "longleafPine",
      },
      {
        text: "The needles are 6-9 inches long, whith cones 3-6 inches long.",
        next: "loblollyPine",
      },
    ],
  },
  {
    id: "10A",
    questions: [
      {
        text: "The needles are mostly 3-6 inches long",
        next: "10B",
      },
      {
        text: "The needles are mostly 1/4-4 inches long",
        next: "10C",
      },
    ],
  },
  {
    id: "10B",
    questions: [
      {
        text: "The needles are 4-6 inches long, flexible, but break cleanly when folded; the bud and bark of the trunk is reddish-brown.",
        next: "redPine",
      },
      {
        text: "The needles are 3-6 inches long, stout and stiff; the bark of the trunk is gray-brown with black furrows and silvery buds.",
        next: "austrianPine",
      },
    ],
  },
  {
    id: "10C",
    questions: [
      {
        text: "The needles are mostly 3/4-1.5 inches long, yellow-green and widely spred in bunches.",
        next: "jackPine",
      },
      {
        text: "The needles are 1.5-4 inches long, blue-green to yellow-green, and twisted and if the tree is older the bark on the upper trunk is orange-red",
        next: "scotsPine",
      },
    ],
  },
  {
    id: "10D",
    questions: [
      {
        text: "The needles are 5-10 inches long, and the cones are 3-6 inches long.",
        next: "ponderosaPine",
      },
      {
        text: "The needles are 7-10 inches long, amd the cones are 5-6 inches long",
        next: "slashPine",
      },
      {
        text: "The needles are 3-5 inches long, amd the cones are 1.5-2.5 inches long",
        next: "shortleafPine",
      },
    ],
  },
  {
    id: "12A",
    questions: [
      {
        text: "The cones are less than 3/4 inches long with few scales and the small branches are stiff and not drooping.",
        next: "tamarack",
      },
      {
        text: "The cones are greater than 3/4 inches long with many scales and the small branches hang low.",
        next: "europeanLarch",
      },
    ],
  },
  {
    id: "12B",
    questions: [
      {
        text: "The needles are fairly easy to roll between your fingers.",
        next: "14A",
      },
      {
        text: "The needles are difficult to roll between your fingers.",
        next: "12C",
      },
    ],
  },
  {
    id: "12C",
    questions: [
      {
        text: "The needles have 2 white or silvery stripes on their undersides.",
        next: "12d",
      },
      {
        text: "The needles are green on both sides and flattened along the twigs. The cones are 1 inch in diameter and looked like a wrinkled ball. The needles and fine twigs are deciduous.",
        next: "baldCypress",
      },
    ],
  },
  {
    id: "12D",
    questions: [
      {
        text: "The cones hang down.",
        next: "16A",
      },
      {
        text: "The cones are upright on top of branches, they are over 1.5 inches long with deciduous svales, and the twigs are fairly smooth where needles have fallen off.",
        next: "balsamFir_fraserFir",
      },
    ],
  },
  {
    id: "14A",
    questions: [
      {
        text: "The mature cones are generally over 2 inches long, with cone scale edges wavy or wedge-shaped.",
        next: "14B",
      },
      {
        text: "The mature cones are generally under 2 inches long, with cone scale edges rounded.",
        next: "14C",
      },
    ],
  },
  {
    id: "14B",
    questions: [
      {
        text: "The needles are not prickly-tipped, the cones are 4-8 inches long and the branches droop up to several feet on older trees.",
        next: "norwaySpruce",
      },
      {
        text: "The needle tips are very sharp and pointed, the cones are 2-4 inches long, and the branches do not droop.",
        next: "coloradoBlueSpruce",
      },
    ],
  },
  {
    id: "14C",
    questions: [
      {
        text: "The needles are 1/4-1/2 inche long, dull blue-green, the twigs have fine hairs, and the cones are about 1 inch long and will remain on the tree for several years.",
        next: "blackSpruce",
      },
      {
        text: "The needles are about 1/2 inch long, dark yellow-green and shiny, the twigs have fire hairs, and the cones are 1.25-2 inches long and will shed annually.",
        next: "redSpruce",
      },
      {
        text: "The needles are about 1/2 inch long, blue-green to silvery-wite, the twigs are hairless, and the cones are 1-2.5 inches long with flexible scales and will shed annually.",
        next: "whiteSpruce",
      },
    ],
  },
  {
    id: "16A",
    questions: [
      {
        text: "The twigs are rough where needles have fallen off, and the cones are less than 1 inch.",
        next: "easternHemlock",
      },
      {
        text: "The needles are of equal length, the cones are 3-4 inches long with  a three-pointed bract sticking out of each scale.",
        next: "douglasfir",
      },
    ],
  },
  {
    id: "16B",
    questions: [
      {
        text: "The leaves are yellow-green, flattened and scale-like on outer twigs, foliage is arranged in flat, fan-like sprays. The fruit is a small, bell-shaped, woody cone.",
        next: "easternArborvitae",
      },
      {
        text: "The leaves are dark blue-green, the foliage is not arranged in flattened sprays: the fruit is asmall and brownish-purple, berry-like cone.",
        next: "atlanticWhitecedar",
      },
      {
        text: "The leaves are dark green, blue-green, or purple-green, awl-shaped and scale-like on the same plant, the foliage is not arranged in flattened sprays; the fruit is blue and berry-like.",
        next: "easternRedcedar",
      },
    ],
  },
  {
    id: "18A",
    questions: [
      {
        text: "The leaves have 3-5 lobes (projections) in palmate arrangement (like fingers on a hand.)",
        next: "18B",
      },
      {
        text: "The leaves look heart-shaped with a long, tapering tip and smooth outer edges and blades (the flat part of the leaf) that are 8-15 inches long.",
        next: "northernCatalpa",
      },
      {
        text: "The leaves are have smooth untoothed edges with blades less than 8 inches long, and veins that curve to follow the leaf edge.",
        next: "floweringDogwood",
      },
    ],
  },
  {
    id: "18B",
    questions: [
      {
        text: "The leaves have toothed edges with sharp V-shaped sinuses (indentions.)",
        next: "18C",
      },
      {
        text: "The leaves have smooth edges, or few teeth (notches on the outer edge of the leaf) with rounded sinsuses.",
        next: "20B",
      },
    ],
  },
  {
    id: "18C",
    questions: [
      {
        text: "The flowers appear with or after the leaves in spring, the samaras (winged fruits) mature in late summer. The leaves are 3-lobed and sharply toothed. The bark is marked by broad vertical white stripes.",
        next: "stripedMaple",
      },
      {
        text: "The appear before the leaves in the spring, and the samaras mature and drop in late spring. The bark is not marked with broad vertical white stripes.",
        next: "20A",
      },
    ],
  },
  {
    id: "20A",
    questions: [
      {
        text: "The leaves are about 4 inches across, mostly 3-lobed (some 5). The samaras are about 1/4 inch long.",
        next: "redMaple",
      },
      {
        text: "The leaves are about 6 inches across, deeply 5-lobed. The samaras are about 2 inches long.",
        next: "silverMaple",
      },
    ],
  },
  {
    id: "20B",
    questions: [
      {
        text: "The petioles (the leaf stalk that connects the blade the twig) don't show milky sap when broken. The buds are brown to dark brown, slender, and pointed; the underside of the leaf is downy or paler than the top.",
        next: "20C",
      },
      {
        text: "The perioles do show milkey sap when broken (may not show if very dry or in autumn). The buds are green or red, stout and blunt, the leaf underside is not downy or paler than the top.",
        next: "norwayMaple",
      },
    ],
  },
  {
    id: "20C",
    questions: [
      {
        text: "The leaves are mostly 5-lobed and usually not downy on the underside with red-brown twigs.",
        next: "sugarMaple",
      },
      {
        text: "The leaves are mostly 3-lobed, drooping, and downy on the underside with orange-brown twigs",
        next: "blackMaple",
      },
    ],
  },
  {
    id: "20D",
    questions: [
      {
        text: "The leaves are palmately compound (blades that are aranged like findgers on a hand.)",
        next: "20E",
      },
      {
        text: "The leaves are pinnately compound (blades arranged like the vanes of a feather.)",
        next: "22B",
      },
    ],
  },
  {
    id: "20E",
    questions: [
      {
        text: "There leaf or leaflet usually has 7 blades characteristic of broadleaf tree, with buds that are normall gummy.",
        next: "horsechestnut",
      },
      {
        text: "The leaf or leaflet usually has 5 blades with bud that are not normally gummy.",
        next: "22A",
      },
    ],
  },
  {
    id: "22A",
    questions: [
      {
        text: "The twigs have a strong, unpleasant odor when crushed and the outside of the fruit is prickly.",
        next: "ohioBuckeye",
      },
      {
        text: "The twigs do not have a strong, unpleasant odor when crushed and the outside of the fruit is not prickly.",
        next: "yellowBuckeye",
      },
    ],
  },
  {
    id: "22B",
    questions: [
      {
        text: "There are mostly 3-5 blades that are lobed or coarsely toothed, with twigs green to purplish-green.",
        next: "boxelder",
      },
      {
        text: "There are mostly 5-13 blades with smooth or toothed edges.",
        next: "22C",
      },
    ],
  },
  {
    id: "22C",
    questions: [
      {
        text: "The young twigs are rounded.",
        next: "24A",
      },
      {
        text: "The young twigs are four sided or squarish in shape.",
        next: "blueAsh",
      },
    ],
  },
  {
    id: "24A",
    questions: [
      {
        text: "The leaf scars (the mark left where the leaf was previously attached) are nearly straight across the top, and the leaves have a yellow color in the fall.",
        next: "greenAsh",
      },
      {
        text: "The leaf scars are deeply notches at the top or U-shapes. The leaf underside is often whitish, and the leaves have a bronze or purple color in the fall.",
        next: "whiteAsh",
      },
    ],
  },
  {
    id: "24B",
    questions: [
      {
        text: "The leaves are fan-shaped with veins fanning out from the leaf base and 1 or 2 notches forming lobes along the margin (the edge of the leaf) most of these leaves are attached to short, spur-like branches.",
        next: "ginkgo",
      },
      {
        text: "The leaves are not fan-shaped.",
        next: "24C",
      },
    ],
  },
  {
    id: "24C",
    questions: [
      {
        text: "The leaves are flattened across the top, with 2 lobes on either side of the midrib (the primary rib or central vein.)",
        next: "yellowPoplar_tulipPoplar_tuliptree",
      },
      {
        text: "The leaves have a mitten-shape or are 3-lobed all on the same small tree or shrub.",
        next: "sassafras",
      },
      {
        text: "The leaves are toothed, lobed, and unlobed on the same tree with a fleshy fruit.",
        next: "28E",
      },
      {
        text: "The leaves and fruit do not fit any of the above descriptions.",
        next: "24D",
      },
    ],
  },
  {
    id: "24D",
    questions: [
      {
        text: "Most of the leaves are lobed (sometimes lobed and non-lobed leaves appear on the same tree.)",
        next: "26A",
      },
      {
        text: "The leaves are not lobed.",
        next: "34C",
      },
    ],
  },
  {
    id: "26A",
    questions: [
      {
        text: "When lobed the leaves are distinctly pinnately lobed (like the vanes of a feather.)",
        next: "28A",
      },
      {
        text: "When lobed the leaves are palmately lobed (like the fingers on the palm of a hand.)",
        next: "26B",
      },
      {
        text: "The leaves are slightly lobed or non-lobed, rounded, variable in size and shape and 1-4 inches long. The fruit is an acorn",
        next: "waterOak",
      },
    ],
  },
  {
    id: "26B",
    questions: [
      {
        text: "The leaves are star-shaped, with 5-7 lobes and finely toothed margins.",
        next: "sweetgum",
      },
      {
        text: "The leaves are not star-shaped, with 3-5 lobes",
        next: "26C",
      },
    ],
  },
  {
    id: "26C",
    questions: [
      {
        text: "The leaves are at least 4-10 inches wide, the petiole base is hollow, covering the side buds. The bark of the upper trunk and branches are smooth or peeling off in large sections.",
        next: "26D",
      },
      {
        text: "The leaves are not star-shaped, with 3-5 lobes",
        next: "whitePoplar",
      },
    ],
  },
  {
    id: "26D",
    questions: [
      {
        text: "Most of the seed balls grow singly.",
        next: "americanSycamore",
      },
      {
        text: "Most of the seed balls grow in pairs.",
        next: "londonPlanetree",
      },
    ],
  },
  {
    id: "28A",
    questions: [
      {
        text: "The twigs have slender, tapered thorns.",
        next: "28B",
      },
      {
        text: "The twigs do not have slender, tapered thorns.",
        next: "28C",
      },
    ],
  },

  // ... more groups of questions
];

export default questionsBank;
