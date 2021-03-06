const windows = [
  {
    id: 0,
    url: "422091199",
    location: "London, UK",
    author: "Derek Lui",
  },
  {
    id: 1,
    url: "422078593",
    location: "Tangerang Selatan",
    author: "Kevin Arffandy",
  },
  {
    id: 2,
    url: "422078580",
    location: "Tangerang Selatan",
    author: "Kevin Arffandy",
  },
  {
    id: 3,
    url: "422076298",
    location: "Singapore",
    author: "Sylvie Kinn",
  },
  {
    id: 4,
    url: "422078525",
    location: "Montpellier, France",
    author: "Suzanne Worthington",
  },
  {
    id: 5,
    url: "422078573",
    location: "Monterrey, Mexico",
    author: "Nomadic Ambience",
  },
  {
    id: 6,
    url: "422078555",
    location: "Stockholm, Sweden",
    author: "Mathias Erikson",
  },
  {
    id: 7,
    url: "422078545",
    location: "Stockholm, Sweden",
    author: "Mathias Erikson",
  },
  {
    id: 8,
    url: "422078559",
    location: "New York, USA",
    author: "Nomadic Ambience",
  },
  {
    id: 9,
    url: "422078568",
    location: "Montreal, Canada",
    author: "Nomadic Ambience",
  },
  {
    id: 10,
    url: "422091206",
    location: "Cordoba, Argentina",
    author: "Florencia Gutierrez",
  },
  {
    id: 11,
    url: "422127701",
    location: "Chennai, India",
    author: "Sitara Hussain",
  },
  {
    id: 12,
    url: "422078536",
    location: "Bangkok, Thailand",
    author: "Thasorn Boonyanate",
  },
  {
    id: 13,
    url: "422078596",
    location: "London, UK",
    author: "Joseph Davies",
  },
  {
    id: 14,
    url: "423662778",
    location: "Bangalore, India",
    author: "Rexina Devraj",
  },
  {
    id: 15,
    url: "422655962",
    location: "La Baule-Escoublac, France",
    author: "Guillaume Baley",
  },
  {
    id: 16,
    url: "423663526",
    location: "Manchester, UK",
    author: "Dina Hadjipetrou",
  },
  {
    id: 17,
    url: "423662257",
    location: "Bangalore, India",
    author: "Saptarishi Das",
  },
  {
    id: 18,
    url: "422078118",
    location: "Medellin, Colombia",
    author: "Julien Renau",
  },
  {
    id: 19,
    url: "425392363",
    location: "Stockholm, Sweden",
    author: "Tilda Hedengren",
  },
  {
    id: 20,
    url: "425392301",
    location: "Singapore",
    author: "Kinzah Iqbal",
  },
  {
    id: 21,
    url: "425393228",
    location: "Barcelona, Spain",
    author: "Alejandro Masferrer",
  },
  {
    id: 22,
    url: "427950869",
    location: "Singapore",
    author: "Aleksey Marjanovic & Leslie Quincy",
  },
  {
    id: 23,
    url: "427950973",
    location: "Shanghai, China",
    author: "Dayanara Viojan",
  },
  {
    id: 24,
    url: "427951019",
    location: "Hyderabad, India",
    author: "Sravan Jayati",
  },
  {
    id: 25,
    url: "427951165",
    location: "Dubai, UAE",
    author: "Hijaz Moosa",
  },
  {
    id: 26,
    url: "427951383",
    location: "Gurgaon, India",
    author: "Sitara Menon",
  },
  {
    id: 27,
    url: "427951587",
    location: "Singapore",
    author: "Rachel Chew",
  },
  {
    id: 29,
    url: "427952643",
    location: "Toronto, Canada",
    author: "Andrea Sarbu",
  },
  {
    id: 30,
    url: "428706758",
    location: "Astoria, USA",
    author: "Scott Rubin",
  },
  {
    id: 31,
    url: "428706242",
    location: "Rochester NY, USA",
    author: "Justin Komisarof",
  },
  {
    id: 32,
    url: "429123045",
    location: "Bordeaux, France",
    author: "Pierre Arrasus",
  },
  {
    id: 33,
    url: "429122992",
    location: "Denver, USA",
    author: "Gabriel Castelo Branco",
  },
  {
    id: 34,
    url: "429122953",
    location: "Glanamman, Wales",
    author: "Belinda Ash",
  },
  {
    id: 35,
    url: "429204893",
    location: "Rowville, Australia",
    author: "Joey Hwang",
  },
  {
    id: 36,
    url: "431141527",
    location: "Singapore",
    author: "Liyana Mahirah",
  },
  {
    id: 37,
    url: "431141442",
    location: "Sherwood, USA",
    author: "Jennie Harrop",
  },
  {
    id: 38,
    url: "431141373",
    location: "VN Gaia, Portugal",
    author: "Isaac Lopes",
  },
  {
    id: 39,
    url: "431141355",
    location: "Long island, USA",
    author: "Fernando Mattei",
  },
  {
    id: 40,
    url: "431141321",
    location: "Glasgow, Scotland",
    author: "Julia Fisher",
  },
  {
    id: 41,
    url: "431141164",
    location: "London, UK",
    author: "Simon Cotts",
  },
  {
    id: 42,
    url: "431141079",
    location: "Copenhagen, Denmark",
    author: "Mikael Colville-Andersen",
  },
  {
    id: 43,
    url: "431141008",
    location: "Hamburg, Germany",
    author: "Christian Sommer",
  },
  {
    id: 44,
    url: "431140994",
    location: "Manchester, UK",
    author: "James Francis",
  },
  {
    id: 45,
    url: "431140935",
    location: "San Francisco, USA",
    author: "Arthur Kenzo",
  },
  {
    id: 46,
    url: "431140858",
    location: "Dundee, Scotland",
    author: "Russell Pepper",
  },
  {
    id: 47,
    url: "431170301",
    location: "Pampanga, Luzon, Philippines",
    author: "Sandy Tiu",
  },
  {
    id: 48,
    url: "431179730",
    location: "Villongo, Italy",
    author: "Simone Tengattini",
  },
  {
    id: 49,
    url: "432365635",
    location: "Bavaria, Germany",
    author: "Arnulf",
  },
  {
    id: 50,
    url: "432365702",
    location: "Hannover, Germany",
    author: "Claudia Lutz",
  },
  {
    id: 51,
    url: "432365721",
    location: "Helsinki, Finland",
    author: "Meghna Ranjit",
  },
  {
    id: 52,
    url: "433357952",
    location: "Parkstein, Germany",
    author: "Nicolas Götz",
  },
  {
    id: 53,
    url: "433357521",
    location: "Dietmannsried, Germany",
    author: "Elmar Hör",
  },
  {
    id: 54,
    url: "433468446",
    location: "Twickenham, UK",
    author: "Gyula Mester",
  },
  {
    id: 55,
    url: "433481074",
    location: "Twickenham, UK",
    author: "Gyula Mester",
  },
  {
    id: 56,
    url: "433517021",
    location: "Shanghai, China",
    author: "Neil Nand",
  },
  {
    id: 57,
    url: "432365468",
    location: "Bangalore, India",
    author: "Manasa Prithvi",
  },
  {
    id: 58,
    url: "431320236",
    location: "Munich, Germany",
    author: "Glockenbachviertel",
  },
  {
    id: 59,
    url: "434256984",
    location: "Jakarta, Indonesia",
    author: "David Beauchamp",
  },
  {
    id: 60,
    url: "434257172",
    location: "Obersteinabrunn, Austria",
    author: "Matthias Fuchs",
  },
  {
    id: 61,
    url: "434257261",
    location: "Shanghai, China",
    author: "Sebastian Correa",
  },
  {
    id: 62,
    url: "434572416",
    location: "Lüneburg, Germany",
    author: "Beate Schröder-Wettwer",
  },
  {
    id: 63,
    url: "434573709",
    location: "Paris, France",
    author: "Laora Tobelaim",
  },
  {
    id: 64,
    url: "435476187",
    location: "Doha, Qatar",
    author: "Ula Niekrasz",
  },
  {
    id: 65,
    url: "435476544",
    location: "Berlin, Germany",
    author: "P Moerke",
  },
  {
    id: 66,
    url: "435476804",
    location: "Hong Kong",
    author: "Josie Ng",
  },
  {
    id: 67,
    url: "435477051",
    location: "London, England",
    author: "James Sandham",
  },
  {
    id: 68,
    url: "435477468",
    location: "Sankt Augustin, Germany",
    author: "Hartmut",
  },
  {
    id: 69,
    url: "435477171",
    location: "Wangerooge, Germany",
    author: "Axel Heymann",
  },
  {
    id: 70,
    url: "435477244",
    location: "Haar, Germany",
    author: "Pest Brand",
  },
  {
    id: 71,
    url: "435970557",
    location: "London, UK",
    author: "Nicole & Miles",
  },
  {
    id: 72,
    url: "436652278",
    location: "São Paulo, Brazil",
    author: "Alexandre Kuma",
  },
  {
    id: 73,
    url: "436652217",
    location: "Okinawa, Japan",
    author: "Crystal Lee",
  },
  {
    id: 74,
    url: "436652575",
    location: "Brooklyn, NY, USA",
    author: "Mark Riley",
  },
  {
    id: 75,
    url: "436652547",
    location: "Wertheim, Germany",
    author: "Johannes Stahl",
  },
  {
    id: 76,
    url: "436654244",
    location: "Kyiv, Ukraine",
    author: "Hlib Honchar",
  },
  {
    id: 77,
    url: "437547925",
    location: "México City, Mexico",
    author: "Polen Hinojosa",
  },
  {
    id: 78,
    url: "437547919",
    location: "Paris, France",
    author: "Guillaume Baley",
  },
  {
    id: 79,
    url: "437547912",
    location: "Glasgow, Scotland",
    author: "Farzane",
  },
  {
    id: 80,
    url: "437548397",
    location: "Aeschiried, Switzerland",
    author: "Lina Blau",
  },
  {
    id: 81,
    url: "436651561",
    location: "Zushi, Japan",
    author: "Aditi & Marc",
  },
  {
    id: 82,
    url: "436651848",
    location: "Bavaria, Germany",
    author: "Christine Aigner",
  },
  {
    id: 83,
    url: "437549205",
    location: "Zurich, Switzerland",
    author: "Boutique Pamela",
  },
  {
    id: 84,
    url: "437550368",
    location: "Germany, Düsseldorf",
    author: "Klaus Mainz",
  },
  {
    id: 85,
    url: "437550345",
    location: "Berlin-Marzahn, Germany",
    author: "Beate Müller",
  },
];


export default windows;
