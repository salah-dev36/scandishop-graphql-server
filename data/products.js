const {
  shoeSize,
  clotheSize,
  colors,
  capacity,
  otherOption,
} = require("./model/attributeSet");

const { categories } = require("./categories");
const { setPrice } = require("./model/price");

const {
  airpodsDescription,
  airtagDescription,
  xboxDescription,
  watchDescription,
} = require("./items/descriptions");

const products = [
  {
    name: "AIR JORDAN 1 RETRO HIGH OG",
    id: "nike-air-jordan-1",
    inStock: true,
    gallery: [
      "https://cdn.flightclub.com/750/TEMPLATE/307016/1.jpg",
      "https://cdn.flightclub.com/750/TEMPLATE/307016/2.jpg",
      "https://cdn.flightclub.com/750/TEMPLATE/307016/3.jpg",
      "https://cdn.flightclub.com/750/TEMPLATE/307016/4.jpg",
    ],
    description:
      "<p>The Air Jordan 1 Retro High OG 'Chicago Lost & Found' brings back the famous 'Chicago' colorway with new storytelling elements. Featuring the OG high-cut shape, the leather upper features a white base with Varsity Red overlays and a black Swoosh and Wings logo. Cracked black leather on the padded collar gives it a vintage look, along with a pre-yellowed midsole. The packaging also tells the 'Lost & Found' story, with a damaged-looking box plastered with sale stickers showcasing a different colored lid. A receipt is also included, alluding to finding this vintage gem tucked away in an attic or storage space.</p>",
    category: categories.fashion,
    attributes: [shoeSize([41, 42, 43, 44])],
    prices: setPrice(282),
    brand: "Nike",
  },
  {
    name: "Nike Air Huarache Le",
    id: "huarache-x-stussy-le",
    inStock: true,
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
    ],
    description: "<p>Great sneakers for everyday use!</p>",
    category: categories.fashion,
    attributes: [shoeSize([40, 41, 42, 43])],
    prices: setPrice(120),
    brand: "Nike x Stussy",
  },
  {
    name: "Mens Gentleman Stainless Steel Dress Watch",
    id: "tissot-watch",
    inStock: true,
    gallery: [
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71wk+pmXh2L._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71s0PeB7iaL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71I2QsdaKUL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81OyeCSMm6L._AC_UX679_.jpg",
    ],
    description: watchDescription,
    category: categories.fashion,
    attributes: [],
    prices: setPrice(503),
    brand: "Tissot",
  },
  {
    name: "Jacket",
    id: "jacket-canada-goosee",
    inStock: true,
    gallery: [
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    ],
    description: "<p>Awesome winter jacket</p>",
    category: categories.fashion,
    attributes: [clotheSize(["S", "M", "L", "XL"])],
    prices: setPrice(430),
    brand: "Canada Goose",
  },
  {
    name: "Viper V380",
    id: "viper-v380",
    inStock: true,
    gallery: [
      "https://m.media-amazon.com/images/I/71BqvZYmO-L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81PXPiyHO3L._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/815VxBgTBQL._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/819fhHc7vPL._AC_SX425_.jpg",
    ],
    description: `<p>Patriot Viper Gaming’s V380 7.1 virtual surround sound gaming headset is engineered for better comfort and functionality all around with a 53mm neodymium drive, hinged over-sized ear cushions, protein-leather headband, and full spectrum RGB that’s customizable through the Viper Software to match your set up. Game stress-free without worrying about your teammates hearing background noise as the V380 features an omnidirectional, detachable, noise-cancelling microphone. Take in-game communication and sound cues to the next level with crystal clear audio and zero feedback. Convenient on-ear sound controls for easy audio control access anytime!</p>`,
    category: categories.electronics,
    attributes: [
      colors(["Green", "Cyan", "Blue", "Black", "White"]),
      otherOption("Wireless Headset"),
    ],
    prices: setPrice(90),
    brand: "Patriot Memory",
  },
  {
    name: "PlayStation 5",
    id: "ps-5",
    inStock: false,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    ],
    description:
      "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
    category: categories.electronics,
    attributes: [
      colors([
        "MidnightBlack",
        "CosmicRed",
        "NovaPink",
        "StarLighBlue",
        "White",
      ]),
      capacity(["256GB", "512GB"]),
    ],
    prices: setPrice(700),
    brand: "Sony",
  },
  {
    name: "Xbox Series S 512GB",
    id: "xbox-series-s",
    inStock: false,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
    ],
    description: xboxDescription,
    category: categories.electronics,
    attributes: [
      colors(["Black", "White", "ShockBlue"]),
      capacity(["256GB", "512GB"]),
    ],
    prices: setPrice(277),
    brand: "Microsoft",
  },
  {
    name: "iMac 2021",
    id: "apple-imac-2021",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ],
    description: "The new iMac!",
    category: categories.electronics,
    attributes: [
      capacity(["256GB", "512GB"]),
      otherOption("With USB 3 ports"),
      otherOption("Touch ID in keyboard"),
    ],
    prices: setPrice(1400),
    brand: "Apple",
  },
  {
    name: "iPhone 12 Pro",
    id: "apple-iphone-12-pro",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ],
    description: "This is iPhone 12. Nothing else to say.",
    category: categories.electronics,
    attributes: [
      capacity(["64GB","256GB"]),
      colors(["Pacific", "Graphite", "Silver", "Gold"]),
    ],
    prices: setPrice(830),
    brand: "Apple",
  },
  {
    name: "AirPods Pro",
    id: "apple-airpods-pro",
    inStock: false,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    ],
    description: airpodsDescription,
    category: categories.electronics,
    attributes: [],
    prices: setPrice(249),
    brand: "Apple",
  },
  {
    name: "AirTag",
    id: "apple-airtag",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ],
    description: airtagDescription,
    category: categories.electronics,
    attributes: [],
    prices: setPrice(100),
    brand: "Apple",
  },
];

module.exports = { products };
