const gt3Cars = [
    {
        id: "mercedes-amg-gt3",
        name: "Mercedes-AMG GT3",
        manufacturer: "Mercedes-AMG",
        engine: "6.2L Naturally Aspirated V8 (M159)",
        hp: "550 HP",
        weight: "1,285 kg",
        topSpeed: "285 km/h",
        years: "2016 - Present",
        championships: "GT World Challenge Europe, Intercontinental GT Challenge",
        victories: "Spa 24 Hours (2022), Nürburgring 24 Hours (2016), Bathurst 12 Hour",
        image: "https://sportscar365.com/wp-content/uploads/2023/01/PI_Mercedes_AMG_31_07_2022_24hSpa_01-rotated.jpg?w=600&q=70",
        fact: "The legendary M159 engine is loved for its thunderous, mechanical roar that echoes across endurance tracks worldwide."
    },
    {
        id: "bmw-m4-gt3",
        name: "BMW M4 GT3",
        manufacturer: "BMW",
        engine: "3.0L Twin-Turbo Straight-6 (P58)",
        hp: "590 HP",
        weight: "1,290 kg",
        topSpeed: "290 km/h",
        years: "2022 - Present",
        championships: "IMSA GTD Pro (2023), GT World Challenge",
        victories: "Spa 24 Hours (2023), Indianapolis 8 Hour",
        image: "https://mediapool.bmwgroup.com/cache/P9/202504/P90593895/P90593895-oschersleben-ger-1-2-april-2025-dtm-adac-motorsport-schubert-motorsport-11-bmw-m4-gt3-evo-marco-witt-600px.jpg?w=600&q=70",
        fact: "Built to replace the massive M6 GT3, the M4 GT3 offers vastly superior drivability and tire management."
    },
    {
        id: "porsche-911-gt3r-992",
        name: "Porsche 911 GT3 R (992)",
        manufacturer: "Porsche",
        engine: "4.2L Naturally Aspirated Flat-6",
        hp: "565 HP",
        weight: "1,250 kg",
        topSpeed: "290 km/h",
        years: "2023 - Present",
        championships: "IMSA GTD, GT World Challenge",
        victories: "Nürburgring 24 Hours, Spa 24 Hours, Bathurst 12 Hour",
        image: "https://showroom-assets.tradingpaints.gg/pics/695221_34221A613B.jpg?w=600&q=70",
        fact: "The engine is tilted backwards by 5.5 degrees to optimize the rear diffuser aerodynamic performance."
    },
    {
        id: "audi-r8-lms-gt3",
        name: "Audi R8 LMS GT3 EVO II",
        manufacturer: "Audi Sport",
        engine: "5.2L Naturally Aspirated V10",
        hp: "585 HP",
        weight: "1,235 kg",
        topSpeed: "280 km/h",
        years: "2015 - Present",
        championships: "GT World Challenge Europe, ADAC GT Masters",
        victories: "Nürburgring 24 Hours (Multiple), Spa 24 Hours",
        image: "https://www.gotothegrid.com/storage/ads/5KX3dLiLXFbvSI9K2rqIIX1daHTuneyOSNmceHPP-800.webp?w=600&q=70",
        fact: "Shares over 50% of its components, including the V10 engine block, directly with the road-going Audi R8."
    },
    {
        id: "ferrari-296-gt3",
        name: "Ferrari 296 GT3",
        manufacturer: "Ferrari",
        engine: "3.0L Twin-Turbo 120° V6",
        hp: "600 HP",
        weight: "1,250 kg",
        topSpeed: "295 km/h",
        years: "2023 - Present",
        championships: "IMSA GTD, GT World Challenge",
        victories: "Nürburgring 24 Hours (2023)",
        image: "https://www.italpassion.fr/wp-content/uploads/2026/01/296-GT3-EVO.jpg?w=600&q=70",
        fact: "Features a hot-V configuration where turbochargers are placed inside the V, lowering the center of gravity."
    },
    {
        id: "lamborghini-huracan-gt3-evo2",
        name: "Lamborghini Huracán GT3 EVO2",
        manufacturer: "Lamborghini",
        engine: "5.2L Naturally Aspirated V10",
        hp: "580 HP",
        weight: "1,230 kg",
        topSpeed: "285 km/h",
        years: "2023 - Present",
        championships: "IMSA GTD, GT World Challenge Asia",
        victories: "Rolex 24 at Daytona (GTD Wins), Sebring 12 Hours",
        image: "https://showroom-assets.tradingpaints.gg/pics/683967_2.jpg?w=600&q=70",
        fact: "Features a snorkel intake system directly connected to the roof scoop, feeding the screaming V10 engine."
    },
    {
        id: "mclaren-720s-gt3",
        name: "McLaren 720S GT3",
        manufacturer: "McLaren",
        engine: "4.0L Twin-Turbo V8 (M840T)",
        hp: "550 HP",
        weight: "1,250 kg",
        topSpeed: "290 km/h",
        years: "2019 - Present",
        championships: "British GT Championship, GTWC Europe",
        victories: "Gulf 12 Hours, British GT overall wins",
        image: "https://sportscar365.com/wp-content/uploads/2023/12/2024-Pfaff-Motorsports_driveway-McLaren-720S-GT3_Lenssen-Photo-_LP65255.jpg?w=600&q=70",
        fact: "Constructed on a carbon fiber MonoCage II-S chassis, making it one of the stiffest and lightest GT3 platforms."
    },
    {
        id: "ford-mustang-gt3",
        name: "Ford Mustang GT3",
        manufacturer: "Ford",
        engine: "5.4L Naturally Aspirated V8 (Coyote)",
        hp: "540 HP",
        weight: "1,260 kg",
        topSpeed: "280 km/h",
        years: "2024 - Present",
        championships: "IMSA GTD Pro, FIA WEC LMGT3",
        victories: "Le Mans LMGT3 Podium (2024)",
        image: "https://www.gt-world-challenge-america.com//timthumb.php?w=600&src=%2Fimages%2FDollahite-01+1_WindshieldBanner.jpg",
        fact: "Developed in partnership with Multimatic and M-Sport, featuring a custom rear-mounted transaxle gearbox."
    },
    {
        id: "corvette-z06-gt3r",
        name: "Corvette Z06 GT3.R",
        manufacturer: "Chevrolet",
        engine: "5.5L Naturally Aspirated Flat-Plane Crank V8",
        hp: "520 HP",
        weight: "1,250 kg",
        topSpeed: "285 km/h",
        years: "2024 - Present",
        championships: "IMSA GTD, FIA WEC",
        victories: "IMSA GTD wins, WEC LMGT3 Podiums",
        image: "https://www.gt-world-challenge-america.com//timthumb.php?w=600&src=%2Fimages%2FSRO_SEB_2024_4235__FL.JPG",
        fact: "Its screaming flat-plane V8 is directly derived from the road-going Corvette Z06, redlining at 8,600 RPM."
    },
    {
        id: "aston-martin-vantage-gt3",
        name: "Aston Martin Vantage GT3",
        manufacturer: "Aston Martin",
        engine: "4.0L Twin-Turbo V8",
        hp: "535 HP",
        weight: "1,250 kg",
        topSpeed: "290 km/h",
        years: "2019 - Present",
        championships: "FIA WEC LMGTE Pro, IMSA GTD",
        victories: "Spa 24 Hours (2024), Le Mans Class Victory",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jWpx1OdeCSVOUj0-_MHpgKts0kTpejUF5sjKfioDgeXUktmEXd-6A5o&s=10?w=600&q=70",
        fact: "Extensively redesigned for 2024 with a massive nose grille to optimize airflow and radiator cooling."
    }
];

const prototypeCars = [
    {
        id: "porsche-919",
        name: "Porsche 919 Hybrid",
        manufacturer: "Porsche",
        engine: "2.0L Turbo V4 + Front Axle Electric Motor",
        hp: "900+ HP (Combined)",
        weight: "875 kg",
        topSpeed: "345 km/h",
        years: "2014 - 2017",
        championships: "FIA WEC Manufacturers' Championship (2015, 2016, 2017)",
        victories: "24 Hours of Le Mans (2015, 2016, 2017)",
        image: "https://media.evo.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1571410826/evo/2019/10/Porsche%20919%20Hybrid%20drive%20.jpg?w=600&q=70",
        fact: "The un-restricted '919 Evo' version broke the Spa-Francorchamps lap record, beating a Formula 1 car."
    },
    {
        id: "toyota-gr010",
        name: "Toyota GR010 Hybrid",
        manufacturer: "Toyota Gazoo Racing",
        engine: "3.5L Twin-Turbo V6 + Front Axle Electric Motor",
        hp: "680 HP (Combined)",
        weight: "1,040 kg",
        topSpeed: "330 km/h",
        years: "2021 - Present",
        championships: "FIA WEC Hypercar Drivers/Manufacturers titles (2021, 2022, 2023)",
        victories: "24 Hours of Le Mans (2021, 2022)",
        image: "https://www.racecar-engineering.com/wp-content/uploads/2021/01/4926-scaled-e1678299561266.jpg?w=600&q=70",
        fact: "Built to the WEC Hypercar (LMH) regulations, featuring a sophisticated brake-by-wire system."
    },
    {
        id: "toyota-ts050",
        name: "Toyota TS050 Hybrid",
        manufacturer: "Toyota Gazoo Racing",
        engine: "2.4L Twin-Turbo V6 + Dual Motor KERS",
        hp: "1,000 HP (Combined)",
        weight: "878 kg",
        topSpeed: "340 km/h",
        years: "2016 - 2020",
        championships: "FIA WEC Champions (2018-2019, 2019-2020)",
        victories: "24 Hours of Le Mans (2018, 2019, 2020)",
        image: "https://www.autohebdo.fr/wp-content/uploads/2021/06/wec-silverstone-eot-toyota-masse-2019.jpg?w=600&q=70",
        fact: "Holds the ultimate Le Mans qualifying record with Kamui Kobayashi's breathtaking 3:14.791 lap."
    },
    {
        id: "audi-r18",
        name: "Audi R18 e-tron quattro",
        manufacturer: "Audi Sport",
        engine: "4.0L Turbodiesel V6 + Flywheel Energy Storage",
        hp: "740 HP (Combined)",
        weight: "915 kg",
        topSpeed: "330 km/h",
        years: "2012 - 2016",
        championships: "FIA WEC Champions (2012, 2013)",
        victories: "24 Hours of Le Mans (2012, 2013, 2014)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GkbMQNzkUcQFRJAFdRp3RSFoVpRVgkOj6QeSlGT1E-QU1HrF-e0Nj_s&s=10?w=600&q=70",
        fact: "The first hybrid prototype to win Le Mans, utilizing a high-speed flywheel system instead of standard batteries."
    },
    {
        id: "peugeot-908",
        name: "Peugeot 908 HDi FAP",
        manufacturer: "Peugeot",
        engine: "5.5L Twin-Turbo V12 Diesel",
        hp: "730 HP",
        weight: "930 kg",
        topSpeed: "345 km/h",
        years: "2007 - 2010",
        championships: "Le Mans Series Champions (2007)",
        victories: "24 Hours of Le Mans (2009)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Peugeot_908_Nr1_Spa_2010.JPG?w=600&q=70",
        fact: "Fitted with particulate filters (FAP), its V12 diesel produced a staggering 1,200 Nm of torque."
    },
    {
        id: "ferrari-499p",
        name: "Ferrari 499P",
        manufacturer: "Ferrari",
        engine: "3.0L Twin-Turbo 120° V6 + Front Electric Motor",
        hp: "680 HP (Combined)",
        weight: "1,030 kg",
        topSpeed: "340 km/h",
        years: "2023 - Present",
        championships: "FIA WEC Contender",
        victories: "24 Hours of Le Mans (2023, 2024)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKZ3V3XCtrm0bJQvGGpaKAW0EwB1eqdy4TVzYviKPQW6cB0Bhc4q9ddE&s=10?w=600&q=70",
        fact: "Ferrari's return to the top class of Le Mans after 50 years resulted in an immediate, historic win in 2023."
    },
    {
        id: "cadillac-v-series-r",
        name: "Cadillac V-Series.R",
        manufacturer: "Cadillac Racing",
        engine: "5.5L Naturally Aspirated V8 + Spec Hybrid",
        hp: "670 HP (Combined)",
        weight: "1,030 kg",
        topSpeed: "330 km/h",
        years: "2023 - Present",
        championships: "IMSA GTP Champion (2023)",
        victories: "Sebring 12 Hours (2023), IMSA Championship",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvABMOlATftW85PrZFq_4EisrnbO1VP3ywVV6it8l0bkc2LH0VOZKa9Pyy&s=10?w=600&q=70",
        fact: "Loved by fans for its roaring, un-muffled American cross-plane V8 exhaust note in a grid dominated by turbos."
    },
    {
        id: "bmw-m-hybrid-v8",
        name: "BMW M Hybrid V8",
        manufacturer: "BMW",
        engine: "4.0L Twin-Turbo V8 + Spec Hybrid",
        hp: "670 HP (Combined)",
        weight: "1,030 kg",
        topSpeed: "330 km/h",
        years: "2023 - Present",
        championships: "IMSA GTP, FIA WEC Hypercar",
        victories: "6 Hours of Watkins Glen (2023)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgfjmJh33Lb-ic0iR0NSDVfUZy-0HJyFpdytpav2QW7l3RgI0Is1ujNQ&s=10?w=600&q=70",
        fact: "Features visual design elements from BMW M road cars, such as the dynamic kidney grille and Hofmeister kink."
    },
    {
        id: "alpine-a424",
        name: "Alpine A424",
        manufacturer: "Alpine",
        engine: "3.4L Single-Turbo V6 + Spec Hybrid",
        hp: "670 HP (Combined)",
        weight: "1,030 kg",
        topSpeed: "330 km/h",
        years: "2024 - Present",
        championships: "FIA WEC Hypercar",
        victories: "WEC Podiums (2024)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfQJjoqkeMG13gVmKhRvHiBaFCI2vZB-g2tffc8yWnwtx4xukpFbVynH_&s=10?w=600&q=70",
        fact: "Utilizes an aerodynamic chassis built by ORECA combined with a unique Mecachrome-derived V6 turbo engine."
    },
    {
        id: "porsche-963",
        name: "Porsche 963",
        manufacturer: "Porsche",
        engine: "4.6L Twin-Turbo V8 + Spec Hybrid",
        hp: "670 HP (Combined)",
        weight: "1,030 kg",
        topSpeed: "335 km/h",
        years: "2023 - Present",
        championships: "IMSA GTP, FIA WEC Hypercar",
        victories: "Rolex 24 at Daytona (2024), 1812 km of Qatar (2024)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3iIYA8jlbwgWz8-PSot-IE-1cyPk-_r5VzoMkn0tKg&s=10?w=600&q=70",
        fact: "The engine block is a direct development of the unit from the legendary Porsche 918 Spyder hypercar."
    }
];

const raceWinners = [
    {
        event: "24 Hours of Le Mans",
        year: "2024",
        car: "Ferrari 499P",
        team: "Ferrari AF Corse",
        significance: "Defending the historic 2023 centenary win, Ferrari clinches back-to-back victories under treacherous wet weather conditions.",
        highlights: "Thrilling battle with Toyota and Porsche. Fuel strategies and tire choices in variable rain decided the race in the final hours."
    },
    {
        event: "Rolex 24 at Daytona",
        year: "2024",
        car: "Porsche 963",
        team: "Porsche Penske Motorsport",
        significance: "Porsche's 19th overall victory at Daytona, marking Penske's first overall win at the Florida classic since 1969.",
        highlights: "A historic head-to-head sprint in the final hour between Porsche Penske and Cadillac Racing, decided by just 2.1 seconds."
    },
    {
        event: "24 Hours Nürburgring",
        year: "2023",
        car: "Ferrari 296 GT3",
        team: "Frikadelli Racing Team",
        significance: "First victory for a non-German car manufacturer since 2002 at the legendary Nordschleife 'Green Hell'.",
        highlights: "Covered a record-breaking 162 laps of the 25.378 km circuit, resisting relentless pressure from the German factory teams."
    },
    {
        event: "24 Hours of Spa",
        year: "2024",
        car: "Aston Martin Vantage GT3",
        team: "Comtoyou Racing",
        significance: "Aston Martin's first overall victory at the Spa 24 Hours in the modern GT3 era, celebrating the event's centenary.",
        highlights: "Dramatic ending under mixed weather, taking the lead in the final hours after a pitlane entry incident blocked the rival Ferrari."
    },
    {
        event: "12 Hours of Sebring",
        year: "2023",
        car: "Cadillac V-Series.R",
        team: "Action Express Racing",
        significance: "The inaugural GTP hybrid era victory at the bumpy, grueling former airfield circuit of Sebring.",
        highlights: "Chaos in the final class battles. Relentless pacing and survivability allowed Cadillac to capture the overall podium."
    },
    {
        event: "Petit Le Mans",
        year: "2023",
        car: "Acura ARX-06",
        team: "Meyer Shank Racing",
        significance: "A dramatic championship-deciding 10-hour finale at Road Atlanta to conclude the first IMSA GTP hybrid season.",
        highlights: "High-speed multi-class crashes and multiple safety cars kept the field tightly packed, resulting in a dramatic sprint to the line."
    }
];

const manufacturerDetails = {
    "Porsche": {
        title: "Porsche Motorsport",
        heritage: "With over 30,000 race victories, Porsche is the most successful manufacturer in motorsport history. From iconic 917s to modern 911 GT3 Rs and 963 Hypercars.",
        stats: "19 Le Mans overall wins, 18 Daytona 24h wins, 8 WEC championships",
        icon: "🛡️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRi5QbboLF7jc6ARFprETdAxSS7gJZUDuQmcLN1fBQ4XtLTZKQcfeqdP8&s=10?w=600&q=70"
    },
    "Ferrari": {
        title: "Ferrari Competizioni GT",
        heritage: "Ferrari represents the soul of racing. Following a 50-year hiatus from top-class endurance racing, Ferrari returned with the 499P to dominate Le Mans in 2023 and 2024.",
        stats: "11 Le Mans overall wins, 29 WEC GT class titles",
        icon: "🐎",
        image: "https://cdn.ferrari.com/cms/dws/media/img/resize/6470285a40c6810026987044?w=600&q=70"
    },
    "BMW": {
        title: "BMW M Motorsport",
        heritage: "BMW has a long-standing heritage in touring and endurance racing. From the historic V12 LMR to the modern twin-turbo M4 GT3 and M Hybrid V8 prototype.",
        stats: "1 Le Mans overall win, 25 Spa 24 Hours victories (record holder)",
        icon: "🏁",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqtjrwQcHHBeIH7xBmyVM85aQo7eXu4kvyWxh5QlbEtpd8Lw9DyjxCXA&s=10?w=600&q=70"
    },
    "Mercedes-AMG": {
        title: "Mercedes-AMG Motorsport",
        heritage: "AMG represents raw V8 horsepower and precision German engineering. They have dominated customer GT3 racing with their AMG GT3 platforms worldwide.",
        stats: "Multiple GTWC Europe titles, Nürburgring 24h & Spa 24h overall wins",
        icon: "🌟",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapMPmVLyv9EdDi89FAOg1o316mmKm6GvgKLt8tb5hYHG1G-cmGVNQeGJS&s=10?w=600&q=70"
    },
    "Audi Sport": {
        title: "Audi Sport Customer Racing",
        heritage: "Audi redefined Le Mans with TDI diesel and hybrid technology. Their R8 LMS GT3 is one of the most successful customer racing cars ever constructed.",
        stats: "13 Le Mans overall victories (2nd all-time), 6 Nürburgring 24h wins",
        icon: "⭕",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BlZRAQAp0CQtUwIn9xS90fvLt8qp4w-VHRMPM9U5G6NQZkZ5jiSMhF4&s=10?w=600&q=70"
    },
    "Toyota GR": {
        title: "Toyota Gazoo Racing",
        heritage: "Toyota dominated the LMP1 hybrid era and pioneered the LMH Hypercar transition. Their GR010 and TS050 represent top-tier hybrid efficiency.",
        stats: "5 consecutive Le Mans overall wins (2018-2022), 6 WEC titles",
        icon: "🔴",
        image: "https://preview.redd.it/toyota-gt3-rain-spa-weather-race-photos-v0-ml4wrsyppw681.jpg?width=640&crop=smart&auto=webp&s=6a7295498ab2a68e8a64a644ffbb929401af81af?w=600&q=70"
    },
    "Cadillac Racing": {
        title: "Cadillac Racing",
        heritage: "Cadillac has built a reputation for high-horsepower naturally aspirated performance in North American endurance racing, now tackling the global WEC stage.",
        stats: "4 IMSA championships, 5 Sebring 12 Hours wins, Daytona 24h overall victories",
        icon: "🛡️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA073jMbo54PcwG5rFv-SryfVRdFuGwqpBhXtadmqofmbDexyyRAK0NOA&s=10?w=600&q=70"
    },
    "Lamborghini": {
        title: "Lamborghini Squadra Corse",
        heritage: "Squadra Corse brings Italian passion and design to GT3 and Hypercar racing. Known for screaming naturally aspirated V10 platforms.",
        stats: "3 consecutive IMSA Daytona 24h GTD wins, multiple GTWC championships",
        icon: "🐂",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSJ8Xvwgd_5zNXadugDv2uwqTsCwx9tKVta_UwI1wfJjpoBZMZSq_Mo24&s=10?w=600&q=70"
    },
    "McLaren": {
        title: "McLaren Motorsport",
        heritage: "From the historic F1 GTR that won Le Mans overall on its debut in 1995, to modern carbon-chassis 720S GT3 Evo client cars.",
        stats: "1 Le Mans overall victory, Triple Crown of Motorsport winner",
        icon: "🟠",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CKAa1elnnU96FlaidY2Y6L9g4dr3qPfVmD9azgPW--ZnL__w9tlE-o0&s=10?w=600&q=70"
    },
    "Aston Martin": {
        title: "Aston Martin Racing",
        heritage: "Aston Martin represents British luxury combined with fierce racing heritage. Famous for their WEC GTE Pro factory titles and Vantage platforms.",
        stats: "1 Le Mans overall win (1959), multiple GTE class wins, 2024 Spa 24 Hours win",
        icon: "🦅",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQREJfkGcoObJrE_NQVFnQdax1QN6M5-HWtrzMIzki3AjwtJdmpqD9fs&s=10?w=600&q=70"
    }
};

const championshipDetails = [
    {
        name: "FIA WEC",
        fullName: "FIA World Endurance Championship",
        desc: "The premier global sports car racing championship. Features the legendary 24 Hours of Le Mans, visiting iconic tracks like Spa and Fuji.",
        icon: "🌍"
    },
    {
        name: "IMSA",
        fullName: "WeatherTech SportsCar Championship",
        desc: "The pinnacle of North American sports car racing, home to classics like Daytona 24h, Sebring 12h, and Petit Le Mans.",
        icon: "🇺🇸"
    },
    {
        name: "GT World Challenge",
        fullName: "Fanatec GT World Challenge",
        desc: "The ultimate global GT3-only championship. Promoted by SRO, featuring sprint and endurance cups across Europe, America, Asia, and Australia.",
        icon: "🏆"
    },
    {
        name: "ELMS",
        fullName: "European Le Mans Series",
        desc: "A highly competitive European continental series providing the direct stepping stone to the WEC and Le Mans for prototypes and GTs.",
        icon: "🇪🇺"
    },
    {
        name: "ALMS",
        fullName: "Asian Le Mans Series",
        desc: "High-octane winter championship held in Asia and the Middle East, offering direct automatic entry invitations to the 24 Hours of Le Mans.",
        icon: "🌏"
    },
    {
        name: "IGTC",
        fullName: "Intercontinental GT Challenge",
        desc: "The global tour of GT3 endurance racing, connecting major individual GT3 classics like Bathurst 12h, Spa 24h, and Indy 8 Hour.",
        icon: "💫"
    }
];

const galleryImages = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BlZRAQAp0CQtUwIn9xS90fvLt8qp4w-VHRMPM9U5G6NQZkZ5jiSMhF4&s=10?w=400&q=70", category: "prototype", title: "Audi R18" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapMPmVLyv9EdDi89FAOg1o316mmKm6GvgKLt8tb5hYHG1G-cmGVNQeGJS&s=10?w=400&q=70", category: "gt3", title: "Mercedes-AMG GT3" },
    { src: "https://www.racecar-engineering.com/wp-content/uploads/2021/01/4926-scaled-e1678299561266.jpg?w=400&q=70", category: "prototype", title: "Toyota GR010" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh18Ip6y455LdsnkQMFCtDEtEQkjuf92oVWfCI7MC16g&s=10?w=400&q=70", category: "gt3", title: "Porsche 911 GT3 R" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvABMOlATftW85PrZFq_4EisrnbO1VP3ywVV6it8l0bkc2LH0VOZKa9Pyy&s=10?w=400&q=70", category: "gt3", title: "Cadillac V-Series.R" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3iIYA8jlbwgWz8-PSot-IE-1cyPk-_r5VzoMkn0tKg&s=10?w=400&q=70", category: "prototype", title: "Porsche 963" },
    { src: "https://www.racecar-engineering.com/wp-content/uploads/2021/01/4926-scaled-e1678299561266.jpg?w=400&q=70", category: "classic", title: "Toyota TS050 Hybrid" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jWpx1OdeCSVOUj0-_MHpgKts0kTpejUF5sjKfioDgeXUktmEXd-6A5o&s=10?w=400&q=70", category: "prototype", title: "Aston Martin Vantage GT3" },
    { src: "https://media.evo.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1571410826/evo/2019/10/Porsche%20919%20Hybrid%20drive%20.jpg?w=400&q=70", category: "gt3", title: "Porsche 919 Hybrid" }
];

const funFacts = [
    {
        front: "Downforce Cap",
        back: "At 240 km/h, the Porsche 919 Hybrid generated so much aerodynamic downforce that it could theoretically drive upside down on the ceiling of a tunnel."
    },
    {
        front: "Brake Temperatures",
        back: "Under heavy braking at the end of Mulsanne Straight at Le Mans, carbon fiber brake discs reach temperatures exceeding 1,000°C, glowing bright orange."
    },
    {
        front: "Driver Weight Loss",
        back: "During a triple stint (around 3 hours) in high cockpit heat, an endurance racing driver can lose up to 3 kilograms of body weight in sweat."
    },
    {
        front: "Le Mans Distance",
        back: "The winning car at the 24 Hours of Le Mans regularly covers over 5,300 kilometers—nearly the exact distance of driving from Madrid to New York, all in 24 hours."
    }
];

window.gt3Cars = gt3Cars;
window.prototypeCars = prototypeCars;
window.raceWinners = raceWinners;
window.manufacturerDetails = manufacturerDetails;
window.championshipDetails = championshipDetails;
window.galleryImages = galleryImages;
window.funFacts = funFacts;