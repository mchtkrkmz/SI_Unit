/**
 * 7 Temel SI Birimi + Türetilmiş Birimler
 * Eğlenceli bilgiler ve komik detaylarla!
 */

// ========== 7 TEMEL SI BİRİMİ ==========
const SI_BASE_UNITS = [
    {
        id: 'metre',
        symbol: 'm',
        name: 'Metre',
        quantity: 'Uzunluk',
        icon: '📏',
        color: '#4299e1',
        category: 'base',
        description: 'Uzunluk ölçü birimi - Her şeyin ne kadar uzun olduğunu söyler!',
        usage: 'Boyumuz, odamızın genişliği, futbol sahasının uzunluğu, Ay\'a olan mesafe... Hepsi metre ile ölçülür!',
        examples: [
            { emoji: '🐜', text: 'Karınca: 3 mm' },
            { emoji: '🦒', text: 'Zürafa: 5 m' },
            { emoji: '🗼', text: 'Eyfel: 330 m' }
        ],
        funFact: '🤣 Eğer tüm DNA\'nı düz bir çizgi halinde uzatsaydın, Dünya ile Güneş arasında 600 kez gidip gelebilirdin! Ama merak etme, DNA\'n vücudunda güvenli bir şekilde sarılı duruyor.',
        derivedFrom: 'Işık hızı kullanılarak tanımlanır',
        questions: [
            { q: 'Boyumuz hangi birimle ölçülür?', answers: ['Metre', 'Kilogram', 'Saniye', 'Kelvin'], correct: 0, image: '🧍' },
            { q: 'Bir basketbol potası yerden kaç metre yüksekliktedir?', answers: ['2 m', '3.05 m', '5 m', '10 m'], correct: 1, image: '🏀' },
            { q: '1 kilometre kaç metredir?', answers: ['10 m', '100 m', '1000 m', '10000 m'], correct: 2, image: '🛤️' },
            { q: 'Hangisi en uzundur?', answers: ['Kalem', 'Araba', 'Mavi balina', 'Bisiklet'], correct: 2, image: '🐋' },
            { q: 'Bir adım yaklaşık kaç santimetredir?', answers: ['10 cm', '30 cm', '70 cm', '150 cm'], correct: 2, image: '👣' }
        ]
    },
    {
        id: 'kilogram',
        symbol: 'kg',
        name: 'Kilogram',
        quantity: 'Kütle',
        icon: '⚖️',
        color: '#48bb78',
        category: 'base',
        description: 'Kütle ölçü birimi - Bir şeyin ne kadar "madde" içerdiğini söyler!',
        usage: 'Market alışverişinden uzay araçlarına kadar her şeyin ağırlığını ölçeriz. Astronotlar uzayda bile aynı kütleye sahiptir, sadece hafif hissederler!',
        examples: [
            { emoji: '🍎', text: 'Elma: 200 g' },
            { emoji: '🐕', text: 'Köpek: 15 kg' },
            { emoji: '🐘', text: 'Fil: 5000 kg' }
        ],
        funFact: '🤣 Bir bulut yaklaşık 500.000 kg ağırlığında! Evet, o kadar pamuk şekeri ağırlığında su havada süzülüyor. Bulutlar uçabiliyor çünkü su damlacıkları çok küçük ve hava onları taşıyor!',
        derivedFrom: 'Planck sabiti kullanılarak tanımlanır',
        questions: [
            { q: 'Vücut ağırlığı hangi birimle ölçülür?', answers: ['Metre', 'Kilogram', 'Saniye', 'Volt'], correct: 1, image: '⚖️' },
            { q: 'Bir fil yaklaşık kaç tondur?', answers: ['0.5 ton', '2 ton', '5 ton', '20 ton'], correct: 2, image: '🐘' },
            { q: '1 ton kaç kilogramdır?', answers: ['10 kg', '100 kg', '1000 kg', '10000 kg'], correct: 2, image: '🏋️' },
            { q: 'Uzayda astronotun kütlesi ne olur?', answers: ['Sıfır olur', 'Aynı kalır', 'Yarıya düşer', 'İki katına çıkar'], correct: 1, image: '👨‍🚀' },
            { q: 'Hangisi en hafiftir?', answers: ['Tavşan', 'Kedi', 'Fare', 'Köpek'], correct: 2, image: '🐭' }
        ]
    },
    {
        id: 'saniye',
        symbol: 's',
        name: 'Saniye',
        quantity: 'Zaman',
        icon: '⏱️',
        color: '#ed8936',
        category: 'base',
        description: 'Zaman ölçü birimi - Evrendeki en gizemli ölçü!',
        usage: 'Kalbiniz dakikada 60-100 kez atar, Usain Bolt 100 metreyi 9.58 saniyede koşar, ışık bir saniyede Dünya\'yı 7.5 kez dolaşır!',
        examples: [
            { emoji: '💓', text: 'Kalp atışı: 1 s' },
            { emoji: '⚡', text: 'Göz kırpma: 0.3 s' },
            { emoji: '🌍', text: '1 yıl: 31M s' }
        ],
        funFact: '🤣 Eğer 1 milyar saniye yaşarsan, 31.7 yaşında olursun! Ve bir sinek 0.001 saniyede kanat çırpar - bu yüzden onları yakalamak bu kadar zor!',
        derivedFrom: 'Sezyum atomunun titreşimi ile tanımlanır',
        questions: [
            { q: '1 dakika kaç saniyedir?', answers: ['30 s', '60 s', '100 s', '120 s'], correct: 1, image: '⏰' },
            { q: 'Usain Bolt 100 metreyi kaç saniyede koştu?', answers: ['5.58 s', '9.58 s', '12.58 s', '15.58 s'], correct: 1, image: '🏃' },
            { q: 'Işık 1 saniyede kaç km yol alır?', answers: ['1000 km', '30000 km', '300000 km', '3M km'], correct: 2, image: '💡' },
            { q: '1 gün kaç saniyedir?', answers: ['3600 s', '36000 s', '86400 s', '100000 s'], correct: 2, image: '🌅' },
            { q: 'Hangisi en kısadır?', answers: ['Göz kırpma', 'Hapşırma', 'Nefes alma', 'Yürüyüş adımı'], correct: 0, image: '👁️' }
        ]
    },
    {
        id: 'amper',
        symbol: 'A',
        name: 'Amper',
        quantity: 'Elektrik Akımı',
        icon: '⚡',
        color: '#f6e05e',
        category: 'base',
        description: 'Elektrik akımı birimi - Elektronların dans akışı!',
        usage: 'Telefonunu şarj etmek 1-2 amper, bir yıldırım 30.000 amper! Evdeki prizler 16 amper taşıyabilir.',
        examples: [
            { emoji: '📱', text: 'Telefon: 2 A' },
            { emoji: '💡', text: 'LED: 0.02 A' },
            { emoji: '⚡', text: 'Yıldırım: 30kA' }
        ],
        funFact: '🤣 Elektrikli yılan balığı 1 amper akım üretebilir - bu bir timsahı bayıltmaya yeter! Ama merak etme, evdeki prizin yılan balığı yok... umarız.',
        derivedFrom: 'Elektron akışı ile tanımlanır',
        questions: [
            { q: 'Elektrik akımı birimi nedir?', answers: ['Volt', 'Watt', 'Amper', 'Ohm'], correct: 2, image: '⚡' },
            { q: 'Bir yıldırım kaç amper olabilir?', answers: ['10 A', '100 A', '1000 A', '30000 A'], correct: 3, image: '🌩️' },
            { q: 'Amperin sembolü nedir?', answers: ['Am', 'A', 'Ap', 'a'], correct: 1, image: '🔤' },
            { q: 'Telefonunu şarj ederken kaç amper akar?', answers: ['0.001 A', '0.1 A', '1-2 A', '100 A'], correct: 2, image: '🔌' },
            { q: 'Amper kimin adından gelir?', answers: ['Einstein', 'Newton', 'Ampère', 'Edison'], correct: 2, image: '👨‍🔬' }
        ]
    },
    {
        id: 'kelvin',
        symbol: 'K',
        name: 'Kelvin',
        quantity: 'Sıcaklık',
        icon: '🌡️',
        color: '#fc8181',
        category: 'base',
        description: 'Mutlak sıcaklık birimi - Sıfırın altı yok!',
        usage: 'Mutlak sıfır (0 K) evrende mümkün olan en düşük sıcaklık: -273.15°C. Güneşin yüzeyi 5778 K!',
        examples: [
            { emoji: '🥶', text: 'Mutlak sıfır: 0 K' },
            { emoji: '🧊', text: 'Buz: 273 K' },
            { emoji: '☀️', text: 'Güneş: 5778 K' }
        ],
        funFact: '🤣 Evrendeki en soğuk yer laboratuvarlarda! Bilim insanları maddeyi 0.000000001 K\'e kadar soğuttular - bu uzaydan bile soğuk! Evren ortalama 2.7 K.',
        derivedFrom: 'Boltzmann sabiti ile tanımlanır',
        questions: [
            { q: 'Mutlak sıfır kaç Kelvindir?', answers: ['-273 K', '0 K', '100 K', '273 K'], correct: 1, image: '❄️' },
            { q: 'Suyun kaynama noktası kaç Kelvindir?', answers: ['100 K', '273 K', '373 K', '473 K'], correct: 2, image: '♨️' },
            { q: 'Güneşin yüzey sıcaklığı yaklaşık kaç K?', answers: ['1000 K', '3000 K', '5800 K', '10000 K'], correct: 2, image: '☀️' },
            { q: 'Kelvin ile Celsius arasındaki fark nedir?', answers: ['100', '273', '373', '0'], correct: 1, image: '🔢' },
            { q: 'Uzayın ortalama sıcaklığı kaç K?', answers: ['0 K', '2.7 K', '100 K', '273 K'], correct: 1, image: '🌌' }
        ]
    },
    {
        id: 'mol',
        symbol: 'mol',
        name: 'Mol',
        quantity: 'Madde Miktarı',
        icon: '🧪',
        color: '#9f7aea',
        category: 'base',
        description: 'Parçacık sayma birimi - Kimyacıların en sevdiği sayı!',
        usage: '1 molda tam 602,214,076,000,000,000,000,000 parçacık var! Bu sayıya Avogadro sayısı denir.',
        examples: [
            { emoji: '💧', text: '18g su = 1 mol' },
            { emoji: '🎈', text: '22.4L gaz = 1 mol' },
            { emoji: '🔬', text: '6×10²³ parçacık' }
        ],
        funFact: '🤣 1 mol pirinç tanesi Dünya\'yı 1 km kalınlığında kaplayabilir! Veya 1 mol kum tanesi tüm Sahra Çölü\'nü 1 metre derinliğinde doldurur!',
        derivedFrom: 'Avogadro sabiti ile tanımlanır',
        questions: [
            { q: '1 molda kaç parçacık var?', answers: ['1 milyon', '1 milyar', '6×10²³', '10¹⁰⁰'], correct: 2, image: '🔢' },
            { q: 'Avogadro sayısı neyle ilgili?', answers: ['Uzunluk', 'Mol', 'Sıcaklık', 'Işık'], correct: 1, image: '👨‍🔬' },
            { q: '1 mol su kaç gramdır?', answers: ['1 g', '10 g', '18 g', '100 g'], correct: 2, image: '💧' },
            { q: 'Mol hangi bilimde çok kullanılır?', answers: ['Fizik', 'Biyoloji', 'Kimya', 'Coğrafya'], correct: 2, image: '🧪' },
            { q: 'Mol sembolü nedir?', answers: ['m', 'M', 'mol', 'Mo'], correct: 2, image: '🔤' }
        ]
    },
    {
        id: 'kandela',
        symbol: 'cd',
        name: 'Kandela',
        quantity: 'Işık Şiddeti',
        icon: '💡',
        color: '#ed64a6',
        category: 'base',
        description: 'Işık şiddeti birimi - Parlaklığın ölçüsü!',
        usage: 'Bir mum 1 kandela, LED fener 1000 kandela, deniz feneri 1 milyon kandela kadar olabilir!',
        examples: [
            { emoji: '🕯️', text: 'Mum: 1 cd' },
            { emoji: '📱', text: 'Ekran: 300 cd' },
            { emoji: '🔦', text: 'Fener: 1000 cd' }
        ],
        funFact: '🤣 Ateş böceği yaklaşık 0.001 kandela ışık üretir ama %100 verimli! Ampuller enerjinin %90\'ını ısı olarak kaybeder. Ateş böcekleri bizden daha zeki!',
        derivedFrom: 'Işık frekansı ile tanımlanır',
        questions: [
            { q: 'Işık şiddeti birimi nedir?', answers: ['Lümen', 'Kandela', 'Watt', 'Lux'], correct: 1, image: '💡' },
            { q: 'Bir mum kaç kandeladır?', answers: ['0.1 cd', '1 cd', '10 cd', '100 cd'], correct: 1, image: '🕯️' },
            { q: 'Kandela kelimesi ne anlama gelir?', answers: ['Işık', 'Mum', 'Parlak', 'Güneş'], correct: 1, image: '📖' },
            { q: 'Kandela sembolü nedir?', answers: ['K', 'cd', 'Ca', 'kd'], correct: 1, image: '🔤' },
            { q: 'Hangisi en parlaktır?', answers: ['Mum', 'Ampul', 'Güneş', 'Ay'], correct: 2, image: '✨' }
        ]
    }
];

// ========== TÜRETİLMİŞ BİRİMLER ==========
const SI_DERIVED_UNITS = [
    {
        id: 'newton',
        symbol: 'N',
        name: 'Newton',
        quantity: 'Kuvvet',
        icon: '🏋️',
        color: '#e53e3e',
        category: 'derived',
        formula: 'kg·m/s²',
        description: 'Kuvvet birimi - İtme ve çekmenin ölçüsü!',
        usage: 'Bir elmayı kaldırmak için 1 Newton, bir arabayı itmek için 1000 Newton gerekir!',
        examples: [
            { emoji: '🍎', text: 'Elma ağırlığı: 1 N' },
            { emoji: '🚗', text: 'Araba itmek: 1000 N' },
            { emoji: '🚀', text: 'Roket: 35M N' }
        ],
        funFact: '🤣 Newton\'un kafasına elma düşmesi efsane olabilir ama yerçekimi gerçek! Ve evet, 1 Newton tam olarak bir elmanın ağırlığı - tesadüf mü?',
        questions: [
            { q: 'Newton neyi ölçer?', answers: ['Kütle', 'Kuvvet', 'Enerji', 'Güç'], correct: 1, image: '💪' },
            { q: 'Newton formülü nedir?', answers: ['kg/m', 'kg·m/s²', 'm/s', 'kg·m'], correct: 1, image: '📐' },
            { q: 'Bir elma kaç Newton?', answers: ['0.1 N', '1 N', '10 N', '100 N'], correct: 1, image: '🍎' },
            { q: 'Newton kimin adından gelir?', answers: ['Edison', 'Einstein', 'Newton', 'Tesla'], correct: 2, image: '👨‍🔬' },
            { q: 'Yerçekimi kuvveti hangi birimle ölçülür?', answers: ['Joule', 'Watt', 'Newton', 'Pascal'], correct: 2, image: '🌍' }
        ]
    },
    {
        id: 'pascal',
        symbol: 'Pa',
        name: 'Pascal',
        quantity: 'Basınç',
        icon: '🎈',
        color: '#38b2ac',
        category: 'derived',
        formula: 'N/m² = kg/(m·s²)',
        description: 'Basınç birimi - Sıkıştırmanın gücü!',
        usage: 'Atmosfer basıncı 101,325 Pa. Araba lastikleri 200,000-300,000 Pa basınçla şişirilir!',
        examples: [
            { emoji: '🎈', text: 'Balon: 10 Pa' },
            { emoji: '🌬️', text: 'Atmosfer: 101325 Pa' },
            { emoji: '🌊', text: 'Okyanus dibi: 100MPa' }
        ],
        funFact: '🤣 Topuklu ayakkabı yere fil\'den daha fazla basınç uygular! Bir kadın stiletto ile metrekareye 3 milyon Pascal basınç yapabilir. Filler çok daha nazik!',
        questions: [
            { q: 'Basınç birimi nedir?', answers: ['Newton', 'Pascal', 'Joule', 'Watt'], correct: 1, image: '🎈' },
            { q: 'Atmosfer basıncı yaklaşık kaç Pa?', answers: ['100 Pa', '1000 Pa', '100000 Pa', '1000000 Pa'], correct: 2, image: '🌬️' },
            { q: 'Pascal formülü nedir?', answers: ['N/m', 'N/m²', 'N·m', 'N·m²'], correct: 1, image: '📐' },
            { q: 'Hangisi en yüksek basınç?', answers: ['Balon içi', 'Atmosfer', 'Okyanus dibi', 'Dağ tepesi'], correct: 2, image: '🌊' },
            { q: 'Vakum basıncı kaçtır?', answers: ['-1 Pa', '0 Pa', '1 Pa', '100 Pa'], correct: 1, image: '🕳️' }
        ]
    },
    {
        id: 'joule',
        symbol: 'J',
        name: 'Joule',
        quantity: 'Enerji / İş',
        icon: '🔥',
        color: '#f6ad55',
        category: 'derived',
        formula: 'N·m = kg·m²/s²',
        description: 'Enerji birimi - İş yapma kapasitesi!',
        usage: 'Bir kalorilik yiyecek 4184 Joule enerji verir. Bir elma 340,000 Joule enerji içerir!',
        examples: [
            { emoji: '🏃', text: 'Zıplama: 1000 J' },
            { emoji: '🍕', text: 'Pizza dilimi: 1MJ' },
            { emoji: '💣', text: 'TNT (kg): 4.2MJ' }
        ],
        funFact: '🤣 Bir burger yaklaşık 2 milyon Joule enerji içerir - bu enerjiyle 20 km yürüyebilirsin! Ya da 5 saat TV izleyebilirsin. Seçim senin!',
        questions: [
            { q: 'Enerji birimi nedir?', answers: ['Watt', 'Joule', 'Newton', 'Pascal'], correct: 1, image: '⚡' },
            { q: '1 kalori kaç Joule\'dür?', answers: ['1 J', '4.2 J', '100 J', '4184 J'], correct: 3, image: '🔥' },
            { q: 'Joule sembolü nedir?', answers: ['Jo', 'J', 'Ju', 'JL'], correct: 1, image: '🔤' },
            { q: 'Joule formülü nedir?', answers: ['N/m', 'N·m', 'N·m²', 'N/m²'], correct: 1, image: '📐' },
            { q: 'Hangisinde enerji ölçülür?', answers: ['Hız', 'Basınç', 'Yiyecek kalorisi', 'Uzunluk'], correct: 2, image: '🍎' }
        ]
    },
    {
        id: 'watt',
        symbol: 'W',
        name: 'Watt',
        quantity: 'Güç',
        icon: '⚡',
        color: '#ecc94b',
        category: 'derived',
        formula: 'J/s = kg·m²/s³',
        description: 'Güç birimi - Enerji harcama hızı!',
        usage: 'Bir insan 100 Watt güç üretir, araba 100,000 Watt, güneş Dünya\'ya 170 trilyon Watt gönderir!',
        examples: [
            { emoji: '💡', text: 'LED ampul: 10 W' },
            { emoji: '🖥️', text: 'Bilgisayar: 300 W' },
            { emoji: '🚗', text: 'Araba: 100000 W' }
        ],
        funFact: '🤣 Bir insan bisiklet sürerken 400 Watt güç üretebilir - ama sadece Prof. çok kısa süreliğine! Profesyonel bisikletçiler 2000 Watt yapabilir!',
        questions: [
            { q: 'Güç birimi nedir?', answers: ['Joule', 'Watt', 'Volt', 'Amper'], correct: 1, image: '🔌' },
            { q: 'Watt formülü nedir?', answers: ['J/s', 'J·s', 'J/m', 'J·m'], correct: 0, image: '📐' },
            { q: 'Bir insan yaklaşık kaç Watt üretir?', answers: ['1 W', '10 W', '100 W', '1000 W'], correct: 2, image: '🧍' },
            { q: 'Watt kimin adından gelir?', answers: ['Edison', 'Watt', 'Tesla', 'Faraday'], correct: 1, image: '👨‍🔬' },
            { q: '1 beygir gücü kaç Watt?', answers: ['100 W', '500 W', '746 W', '1000 W'], correct: 2, image: '🐎' }
        ]
    },
    {
        id: 'hertz',
        symbol: 'Hz',
        name: 'Hertz',
        quantity: 'Frekans / Titreşim',
        icon: '〰️',
        color: '#9f7aea',
        category: 'derived',
        formula: '1/s',
        description: 'Frekans/Titreşim birimi - Tekrarların hızı!',
        usage: 'İnsan sesleri 20-20,000 Hz, köpekler 40,000 Hz\'e kadar duyar, yarasalar 100,000 Hz kullanır!',
        examples: [
            { emoji: '💓', text: 'Kalp:1-2 Hz' },
            { emoji: '🎵', text: 'Müzik La: 440 Hz' },
            { emoji: '📱', text: 'WiFi: 5GHz' }
        ],
        funFact: '🤣 Wifi 5 milyar Hz\'de çalışır! Sineğin kanat çırpması 200 Hz, arının 130 Hz - bu yüzden vızıldama sesleri farklı. Sinekler daha sinir bozucu!',
        questions: [
            { q: 'Frekans/titreşim birimi nedir?', answers: ['Watt', 'Volt', 'Hertz', 'Ohm'], correct: 2, image: '📻' },
            { q: 'İnsanlar kaç Hz\'e kadar duyar?', answers: ['100 Hz', '1000 Hz', '20000 Hz', '100000 Hz'], correct: 2, image: '👂' },
            { q: 'Hertz formülü nedir?', answers: ['1/s', 's', 'm/s', 'm·s'], correct: 0, image: '📐' },
            { q: 'Kalp dakikada 60 atarsa kaç Hz?', answers: ['0.5 Hz', '1 Hz', '60 Hz', '600 Hz'], correct: 1, image: '💓' },
            { q: '1 GHz kaç Hz?', answers: ['1000 Hz', '1M Hz', '1 milyar Hz', '1 trilyon Hz'], correct: 2, image: '🔢' }
        ]
    },
    {
        id: 'volt',
        symbol: 'V',
        name: 'Volt',
        quantity: 'Elektrik Potansiyeli',
        icon: '🔋',
        color: '#4fd1c5',
        category: 'derived',
        formula: 'W/A = kg·m²/(A·s³)',
        description: 'Elektrik gerilimi - Elektronları iten güç!',
        usage: 'Pil 1.5V, telefon şarjı 5V, ev prizi 220V, yıldırım 1 milyar V!',
        examples: [
            { emoji: '🔋', text: 'Pil: 1.5 V' },
            { emoji: '🔌', text: 'Priz: 220 V' },
            { emoji: '⚡', text: 'Yıldırım: 1GV' }
        ],
        funFact: '🤣 Elektrikli yılan balığı 860 volt üretebilir - bu bir timsahı bayıltır! Ama merak etme, bu balık sadece Amazon\'da yaşıyor... ve evsel akvaryumlarda değil!',
        questions: [
            { q: 'Elektrik gerilimi birimi nedir?', answers: ['Amper', 'Volt', 'Watt', 'Ohm'], correct: 1, image: '🔋' },
            { q: 'Ev prizleri kaç Volt?', answers: ['12 V', '110 V', '220 V', '500 V'], correct: 2, image: '🔌' },
            { q: 'Bir pil kaç Volt?', answers: ['0.5 V', '1.5 V', '5 V', '12 V'], correct: 1, image: '🔋' },
            { q: 'Volt kimin adından gelir?', answers: ['Edison', 'Volta', 'Tesla', 'Faraday'], correct: 1, image: '👨‍🔬' },
            { q: 'USB şarj kaç Volt?', answers: ['1.5 V', '3 V', '5 V', '12 V'], correct: 2, image: '📱' }
        ]
    },
    {
        id: 'ohm',
        symbol: 'Ω',
        name: 'Ohm',
        quantity: 'Elektrik Direnci',
        icon: '⛔',
        color: '#fc8181',
        category: 'derived',
        formula: 'V/A',
        description: 'Elektrik direnci - Akıma karşı direnç!',
        usage: 'Bakır tel 0.01Ω, insan vücudu 1000-100000Ω, kauçuk 10¹³Ω (çok yüksek)!',
        examples: [
            { emoji: '🔌', text: 'Tel: 0.01Ω' },
            { emoji: '🧍', text: 'Vücut: 10kΩ' },
            { emoji: '🧤', text: 'Plastik: ∞ Ω' }
        ],
        funFact: '🤣 Islak derinin direnci kuru derinin 1/10\'u! Bu yüzden banyoda elektrikle ilgili dikkatli olmalısın. Kuru ol, güvende ol!',
        questions: [
            { q: 'Elektrik direnci birimi nedir?', answers: ['Volt', 'Amper', 'Ohm', 'Watt'], correct: 2, image: '🚧' },
            { q: 'Ohm sembolü nedir?', answers: ['O', 'Ω', 'Oh', 'Ωm'], correct: 1, image: '🔤' },
            { q: 'Ohm yasası nedir?', answers: ['V = I·R', 'P = I·V', 'E = mc²', 'F = ma'], correct: 0, image: '📐' },
            { q: 'Hangisinin direnci en yüksek?', answers: ['Bakır', 'Demir', 'Plastik', 'Su'], correct: 2, image: '🔌' },
            { q: 'Islak deri direnci ne olur?', answers: ['Artar', 'Azalır', 'Aynı kalır', 'Sıfır olur'], correct: 1, image: '💧' }
        ]
    },
    {
        id: 'metre-kare',
        symbol: 'm²',
        name: 'Metrekare',
        quantity: 'Alan',
        icon: '⬜',
        color: '#68d391',
        category: 'derived',
        formula: 'm × m',
        description: 'Alan birimi - Yüzeyin büyüklüğü!',
        usage: 'Futbol sahası 7,140 m², Türkiye 783,356 km², Rusya 17,098,242 km²!',
        examples: [
            { emoji: '📄', text: 'A4 kağıt: 0.06 m²' },
            { emoji: '🏠', text: 'Oda: 20 m²' },
            { emoji: '⚽', text: 'Futbol sahası: 7140 m²' }
        ],
        funFact: '🤣 Akciğerlerinin iç yüzeyi düzleştirilse 70 m² olur - küçük bir daire kadar! Bağırsaklar 250 m² - bir tenis kortu büyüklüğünde!',
        questions: [
            { q: 'Alan birimi nedir?', answers: ['Metre', 'Metrekare', 'Metreküp', 'Kilometre'], correct: 1, image: '📐' },
            { q: 'Futbol sahası yaklaşık kaç m²?', answers: ['100 m²', '1000 m²', '7000 m²', '70000 m²'], correct: 2, image: '⚽' },
            { q: '1 km² kaç m²?', answers: ['1000 m²', '10000 m²', '100000 m²', '1000000 m²'], correct: 3, image: '🗺️' },
            { q: 'Alan nasıl hesaplanır?', answers: ['Uzunluk + Genişlik', 'Uzunluk × Genişlik', 'Uzunluk - Genişlik', 'Uzunluk ÷ Genişlik'], correct: 1, image: '📏' },
            { q: 'Akciğer iç yüzeyi kaç m²?', answers: ['1 m²', '7 m²', '70 m²', '700 m²'], correct: 2, image: '🫁' }
        ]
    },
    {
        id: 'metre-kup',
        symbol: 'm³',
        name: 'Metreküp',
        quantity: 'Hacim',
        icon: '📦',
        color: '#b794f4',
        category: 'derived',
        formula: 'm × m × m',
        description: 'Hacim birimi - İçine ne kadar sığar!',
        usage: 'Bir litre su 0.001 m³, bir oda 50 m³, Olimpik havuz 2500 m³!',
        examples: [
            { emoji: '💧', text: '1 litre: 0.001 m³' },
            { emoji: '🏠', text: 'Oda: 50 m³' },
            { emoji: '🏊', text: 'Havuz: 2500 m³' }
        ],
        funFact: '🤣 Bir mavi balina 100 m³ su ile ağzını doldurabilir - bu 40 banyo küveti kadar! Ve günde 4 ton krill yer. O küçük karidesler için kötü haber!',
        questions: [
            { q: 'Hacim birimi nedir?', answers: ['Metrekare', 'Metreküp', 'Litre', 'Galon'], correct: 1, image: '📦' },
            { q: '1 m³ kaç litredir?', answers: ['10 L', '100 L', '1000 L', '10000 L'], correct: 2, image: '💧' },
            { q: 'Olimpik havuz kaç m³?', answers: ['250 m³', '500 m³', '2500 m³', '25000 m³'], correct: 2, image: '🏊' },
            { q: 'Hacim nasıl hesaplanır?', answers: ['U+G+Y', 'U×G', 'U×G×Y', 'U/G×Y'], correct: 2, image: '📏' },
            { q: '1 cm³ kaç mL?', answers: ['0.1 mL', '1 mL', '10 mL', '100 mL'], correct: 1, image: '💉' }
        ]
    },
    {
        id: 'hiz',
        symbol: 'm/s',
        name: 'Hız',
        quantity: 'Hız',
        icon: '💨',
        color: '#f687b3',
        category: 'derived',
        formula: 'm/s veya km/h',
        description: 'Hız birimi - Ne kadar hızlı hareket ediyorsun!',
        usage: 'Yürüme 1.4 m/s, Usain Bolt 10.44 m/s, ışık 300,000,000 m/s!',
        examples: [
            { emoji: '🚶', text: 'Yürüme: 1.4 m/s' },
            { emoji: '🚗', text: 'Araba: 33 m/s' },
            { emoji: '💡', text: 'Işık: 300000 km/s' }
        ],
        funFact: '🤣 Dünya Güneş\'in etrafında 30 km/s hızla dönüyor - saatte 108,000 km! Oturduğun yerde bile uzayda süper hızlı uçuyorsun!',
        questions: [
            { q: 'Hız birimi nedir?', answers: ['m', 's', 'm/s', 'm·s'], correct: 2, image: '🏎️' },
            { q: 'Işık hızı yaklaşık kaç km/s?', answers: ['1000 km/s', '30000 km/s', '300000 km/s', '3M km/s'], correct: 2, image: '💡' },
            { q: '36 km/h kaç m/s?', answers: ['10 m/s', '36 m/s', '100 m/s', '360 m/s'], correct: 0, image: '🔢' },
            { q: 'Ses hızı havada yaklaşık kaç m/s?', answers: ['34 m/s', '340 m/s', '3400 m/s', '34000 m/s'], correct: 1, image: '🔊' },
            { q: 'Hangisi en hızlı?', answers: ['Çita', 'Şahin', 'Işık', 'Roket'], correct: 2, image: '🏁' }
        ]
    },
    {
        id: 'ivme',
        symbol: 'm/s²',
        name: 'İvme',
        quantity: 'İvme / Hızlanma',
        icon: '📈',
        color: '#fc8181',
        category: 'derived',
        formula: 'm/s²',
        description: 'İvme birimi - Hızlanma veya yavaşlama oranı!',
        usage: 'Yerçekimi ivmesi 9.81 m/s², Formül 1 araba 15 m/s² hızlanır, roketler 30-40 m/s²!',
        examples: [
            { emoji: '🌍', text: 'Yerçekimi: 9.81 m/s²' },
            { emoji: '🏎️', text: 'F1: 15 m/s²' },
            { emoji: '🚀', text: 'Roket: 30 m/s²' }
        ],
        funFact: '🤣 Lunapark hız trenlerinde 5g (49 m/s²) ivme yaşarsın - pilotlar için bile zor! Aksırırken gözlerin 10g ivme yapıyor - bu yüzden aksırırken gözler kapanır!',
        questions: [
            { q: 'İvme birimi nedir?', answers: ['m/s', 'm/s²', 'm²/s', 'm·s²'], correct: 1, image: '🚀' },
            { q: 'Yerçekimi ivmesi kaç m/s²?', answers: ['1 m/s²', '9.81 m/s²', '100 m/s²', '981 m/s²'], correct: 1, image: '🌍' },
            { q: '1g kaç m/s² dir?', answers: ['1 m/s²', '9.81 m/s²', '10 m/s²', '100 m/s²'], correct: 1, image: '🎢' },
            { q: 'İvme neyi ölçer?', answers: ['Hız', 'Hız değişimi', 'Mesafe', 'Zaman'], correct: 1, image: '📐' },
            { q: 'Ay\'da yerçekimi ivmesi ne kadar?', answers: ['Aynı', '1/6 kadar', 'Yok', '2 kat'], correct: 1, image: '🌙' }
        ]
    },
    {
        id: 'yogunluk',
        symbol: 'kg/m³',
        name: 'Yoğunluk',
        quantity: 'Yoğunluk',
        icon: '🎲',
        color: '#a78bfa',
        category: 'derived',
        formula: 'kg/m³',
        description: 'Yoğunluk birimi - Ne kadar sıkışık!',
        usage: 'Hava 1.2 kg/m³, su 1000 kg/m³, altın 19,300 kg/m³, osiridyum (en yoğun) 22,590 kg/m³!',
        examples: [
            { emoji: '🎈', text: 'Hava: 1.2 kg/m³' },
            { emoji: '💧', text: 'Su: 1000 kg/m³' },
            { emoji: '🥇', text: 'Altın: 19300 kg/m³' }
        ],
        funFact: '🤣 Bir nötron yıldızının bir çay kaşığı 5 milyar ton ağırlığında! Bu dünyadaki tüm arabaların ağırlığından fazla - tek bir çay kaşığında!',
        questions: [
            { q: 'Yoğunluk birimi nedir?', answers: ['kg/m', 'kg/m²', 'kg/m³', 'kg·m'], correct: 2, image: '🧱' },
            { q: 'Suyun yoğunluğu kaç kg/m³?', answers: ['1 kg/m³', '100 kg/m³', '1000 kg/m³', '10000 kg/m³'], correct: 2, image: '💧' },
            { q: 'Hangisi suda yüzer?', answers: ['Altın', 'Tahta', 'Demir', 'Bakır'], correct: 1, image: '🌊' },
            { q: 'En yoğun doğal element hangisi?', answers: ['Altın', 'Kurşun', 'Osmiyum', 'Demir'], correct: 2, image: '⚗️' },
            { q: 'Buz suda neden yüzer?', answers: ['Hafif', 'Yoğunluğu düşük', 'Sıcak', 'Katı'], correct: 1, image: '🧊' }
        ]
    },
    {
        id: 'nem',
        symbol: '%RH',
        name: 'Bağıl Nem',
        quantity: 'Bağıl Nem',
        icon: '💦',
        color: '#63b3ed',
        category: 'derived',
        formula: 'Yüzde (%)',
        description: 'Nem ölçüsü - Havadaki su buharı miktarı!',
        usage: 'Çöl %10, konforlu ev %40-60, tropikal orman %80-100 nem!',
        examples: [
            { emoji: '🏜️', text: 'Çöl: %10 RH' },
            { emoji: '🏠', text: 'Ev: %50 RH' },
            { emoji: '🌴', text: 'Orman: %90 RH' }
        ],
        funFact: '🤣 Saçların neme göre uzar ve kısalır! Bazı eski hygrometerler (nem ölçer) insan saçı kullanırdı. Saçın doğal nem sensörü!',
        questions: [
            { q: 'Nem nasıl ölçülür?', answers: ['Metre', 'Derece', 'Yüzde', 'Pascal'], correct: 2, image: '💧' },
            { q: 'Konforlu ev nemi kaçtır?', answers: ['%10-20', '%40-60', '%80-100', '%100+'], correct: 1, image: '🏠' },
            { q: '%100 nem ne demek?', answers: ['Tamamen kuru', 'Yağmur yağıyor', 'Doygun hava', 'Sıfır su'], correct: 2, image: '☁️' },
            { q: 'Çöllerde nem yaklaşık kaçtır?', answers: ['%5-20', '%50-60', '%70-80', '%90-100'], correct: 0, image: '🏜️' },
            { q: 'Yüksek nem sıcağı nasıl hissettirir?', answers: ['Daha soğuk', 'Daha sıcak', 'Aynı', 'Fark yok'], correct: 1, image: '🥵' }
        ]
    },
    {
        id: 'vakum',
        symbol: 'Pa',
        name: 'Vakum',
        quantity: 'Vakum / Boşluk',
        icon: '🌌',
        color: '#1a202c',
        category: 'derived',
        formula: 'Pa (düşük basınç)',
        description: 'Vakum - Havanın olmadığı boşluk!',
        usage: 'Elektrik süpürgesi %20 vakum, uzay yaklaşık 0 Pa - mükemmel vakum!',
        examples: [
            { emoji: '🔌', text: 'Süpürge: 20 kPa' },
            { emoji: '💡', text: 'Ampul: 0.1 Pa' },
            { emoji: '🌌', text: 'Uzay: ≈0 Pa' }
        ],
        funFact: '🤣 Uzayda bağıramazsın çünkü ses dalgaları yayılacak hava yok! Uzayda kimse çığlığını duymaz - bu korku filmlerindeki en büyük yalan!',
        questions: [
            { q: 'Vakum ne demek?', answers: ['Yüksek basınç', 'Düşük basınç', 'Normal basınç', 'Sıfır basınç'], correct: 3, image: '🕳️' },
            { q: 'Uzayda basınç nedir?', answers: ['Atmosfer', 'Yarı atmosfer', 'Neredeyse sıfır', 'Çok yüksek'], correct: 2, image: '🌌' },
            { q: 'Vakumda ses gider mi?', answers: ['Evet, hızlı', 'Evet, yavaş', 'Hayır, gitmez', 'Bazen'], correct: 2, image: '🔊' },
            { q: 'Elektrik süpürgesi nasıl çalışır?', answers: ['Üfleyerek', 'Vakum yaparak', 'Elektrikle', 'Isıtarak'], correct: 1, image: '🧹' },
            { q: 'Mükemmel vakum mümkün mü?', answers: ['Evet, kolay', 'Evet, zor', 'Hayır, imkansız', 'Sadece uzayda'], correct: 2, image: '🔬' }
        ]
    },
    {
        id: 'coulomb',
        symbol: 'C',
        name: 'Coulomb',
        quantity: 'Elektrik Yükü',
        icon: '⚛️',
        color: '#faf089',
        category: 'derived',
        formula: 'A·s',
        description: 'Elektrik yükü birimi - Elektronların toplamı!',
        usage: '1 Coulomb = 6.24×10¹⁸ elektron! Yıldırım 15-350 Coulomb taşır!',
        examples: [
            { emoji: '⚡', text: '1 elektron: 1.6×10⁻¹⁹ C' },
            { emoji: '🔋', text: 'AA pil: 5000 C' },
            { emoji: '🌩️', text: 'Yıldırım: 15-350 C' }
        ],
        funFact: '🤣 Vücudunda her an 10²⁸ elektron var! Statik elektrik oluşturduğunda sadece birkaç mikro-Coulomb transfer olur ama çarpması yeter!',
        questions: [
            { q: 'Elektrik yükü birimi nedir?', answers: ['Volt', 'Amper', 'Coulomb', 'Watt'], correct: 2, image: '🔋' },
            { q: 'Coulomb formülü nedir?', answers: ['V·A', 'A·s', 'W/A', 'J/C'], correct: 1, image: '📐' },
            { q: '1 Coulomb kaç elektron?', answers: ['1000', '1 milyon', '6×10¹⁸', '6×10²³'], correct: 2, image: '⚛️' },
            { q: 'Yıldırım kaç Coulomb?', answers: ['1 C', '15-350 C', '1000 C', '1M C'], correct: 1, image: '⚡' },
            { q: 'Coulomb kimin adından gelir?', answers: ['Edison', 'Coulomb', 'Tesla', 'Faraday'], correct: 1, image: '👨‍🔬' }
        ]
    },
    {
        id: 'lumen',
        symbol: 'lm',
        name: 'Lümen',
        quantity: 'Işık Akısı',
        icon: '✨',
        color: '#fbd38d',
        category: 'derived',
        formula: 'cd·sr',
        description: 'Işık akısı birimi - Toplam ışık miktarı!',
        usage: 'Mum 12 lümen, LED ampul 800 lümen, stadyum projektörü 100,000 lümen!',
        examples: [
            { emoji: '🕯️', text: 'Mum: 12 lm' },
            { emoji: '💡', text: 'LED: 800 lm' },
            { emoji: '🏟️', text: 'Projektör: 100k lm' }
        ],
        funFact: '🤣 Güneş 3.8×10²⁶ lümen üretiyor - her saniye Dünya\'nın 1 yıllık elektrik tüketiminin 3 milyon katı enerji! Işık faturası olmasa güzel.',
        questions: [
            { q: 'Işık akısı birimi nedir?', answers: ['Kandela', 'Lümen', 'Lüks', 'Watt'], correct: 1, image: '✨' },
            { q: 'LED ampul kaç lümen?', answers: ['12 lm', '100 lm', '800 lm', '10000 lm'], correct: 2, image: '💡' },
            { q: 'Lümen ve kandela farkı nedir?', answers: ['Aynı şey', 'Lümen toplam ışık', 'Kandela toplam', 'Fark yok'], correct: 1, image: '🔆' },
            { q: 'Hangi ampul daha parlak?', answers: ['40W akkor', '10W LED', 'İkisi eşit', 'Bilinemez'], correct: 1, image: '💡' },
            { q: 'Mum kaç lümen?', answers: ['1 lm', '12 lm', '100 lm', '1000 lm'], correct: 1, image: '🕯️' }
        ]
    },
    // ===== YENİ TÜRETİLMİŞ BİRİMLER =====
    {
        id: 'tork',
        symbol: 'N·m',
        name: 'Tork',
        quantity: 'Dönme Momenti',
        icon: '🔧',
        color: '#805ad5',
        category: 'derived',
        formula: 'N·m = kg·m²/s²',
        description: 'Tork - Döndürme kuvveti!',
        usage: 'Kapı kolunu çevirirken, somun sıkarken, araba direksiyonunda tork kullanırız. Bir araba motoru 200-500 N·m tork üretir!',
        examples: [
            { emoji: '🚪', text: 'Kapı kolu: 5 N·m' },
            { emoji: '🔩', text: 'Somun sıkma: 100 N·m' },
            { emoji: '🚗', text: 'Araba motoru: 300 N·m' }
        ],
        funFact: '🤣 Tork ve enerji (Joule) aynı birime sahip (N·m) ama farklı şeyler! Tork bir döndürme kuvveti, enerji ise iş yapma kapasitesi. Fizikçiler bunu çok önemser!',
        questions: [
            { q: 'Tork birimi nedir?', answers: ['N', 'N·m', 'N/m', 'N·m²'], correct: 1, image: '🔧' },
            { q: 'Tork neyi ölçer?', answers: ['Hız', 'Ağırlık', 'Döndürme kuvveti', 'Uzunluk'], correct: 2, image: '🔄' },
            { q: 'Araba motoru kaç N·m tork üretir?', answers: ['10 N·m', '50 N·m', '200-500 N·m', '10000 N·m'], correct: 2, image: '🚗' },
            { q: 'Tork = Kuvvet × ?', answers: ['Zaman', 'Hız', 'Kol uzunluğu', 'Kütle'], correct: 2, image: '📐' },
            { q: 'Tork ve Joule aynı birime sahip mi?', answers: ['Hayır', 'Evet', 'Bazen', 'Bilinmez'], correct: 1, image: '🤔' }
        ]
    },
    {
        id: 'acisal-hiz',
        symbol: 'rad/s',
        name: 'Açısal Hız',
        quantity: 'Açısal Hız',
        icon: '🌀',
        color: '#d53f8c',
        category: 'derived',
        formula: 'rad/s',
        description: 'Açısal hız - Ne kadar hızlı dönüyorsun!',
        usage: 'Dünya kendi etrafında 7.3×10⁻⁵ rad/s hızla döner. Bir CD 52 rad/s, F1 lastikleri 200 rad/s döner!',
        examples: [
            { emoji: '🌍', text: 'Dünya: 7.3×10⁻⁵ rad/s' },
            { emoji: '💿', text: 'CD: 52 rad/s' },
            { emoji: '🏎️', text: 'F1 tekerlek: 200 rad/s' }
        ],
        funFact: '🤣 Radyan boyutsuz bir birimdir! 1 tam tur = 2π radyan ≈ 6.28 radyan. Matematik ve fizik burada el ele!',
        questions: [
            { q: 'Açısal hız birimi nedir?', answers: ['m/s', 'rad/s', 'deg/s', 'rpm'], correct: 1, image: '🌀' },
            { q: '1 tam tur kaç radyan?', answers: ['1 rad', 'π rad', '2π rad', '4π rad'], correct: 2, image: '🔄' },
            { q: 'Açısal hız formülü nedir?', answers: ['açı × zaman', 'açı / zaman', 'açı + zaman', 'açı - zaman'], correct: 1, image: '📐' },
            { q: 'Radyan boyutlu mu?', answers: ['Evet', 'Hayır, boyutsuz', 'Bazen', 'Metre cinsinden'], correct: 1, image: '🔢' },
            { q: 'Dünya kaç saatte bir tur döner?', answers: ['1 saat', '12 saat', '24 saat', '365 gün'], correct: 2, image: '🌍' }
        ]
    },
    {
        id: 'acisal-ivme',
        symbol: 'rad/s²',
        name: 'Açısal İvme',
        quantity: 'Açısal İvme',
        icon: '🔃',
        color: '#e53e3e',
        category: 'derived',
        formula: 'rad/s²',
        description: 'Açısal ivme - Dönüş hızının değişimi!',
        usage: 'Bir arabanın tekerlekleri hızlanırken açısal ivme kazanır. Fidget spinner fırlatıldığında yüksek açısal ivme yaşar!',
        examples: [
            { emoji: '🎡', text: 'Dönme dolap: 0.1 rad/s²' },
            { emoji: '🚗', text: 'Tekerlek: 5 rad/s²' },
            { emoji: '🌪️', text: 'Kasırga: 10 rad/s²' }
        ],
        funFact: '🤣 Buz pateni yapanlar kollarını topladıklarında açısal momentum korunduğu için açısal hızları artar! Newton fiziği dans pistinde!',
        questions: [
            { q: 'Açısal ivme birimi nedir?', answers: ['rad/s', 'rad/s²', 'm/s²', 'rad·s'], correct: 1, image: '🔃' },
            { q: 'Açısal ivme neyi ölçer?', answers: ['Dönüş hızı', 'Dönüş hızının değişimi', 'Açı', 'Yarıçap'], correct: 1, image: '📐' },
            { q: 'Açısal ivme = ?', answers: ['ω/t', 'ω×t', 'ω+t', 'ω-t'], correct: 0, image: '🔢' },
            { q: 'Patenci kollarını toplarsa ne olur?', answers: ['Yavaşlar', 'Hızlanır', 'Aynı kalır', 'Durur'], correct: 1, image: '⛸️' },
            { q: 'Açısal ivme vektör mü?', answers: ['Hayır', 'Evet', 'Bazen', 'Skaler'], correct: 1, image: '➡️' }
        ]
    },
    {
        id: 'momentum',
        symbol: 'kg·m/s',
        name: 'Momentum',
        quantity: 'Doğrusal Momentum',
        icon: '🎱',
        color: '#2b6cb0',
        category: 'derived',
        formula: 'kg·m/s',
        description: 'Momentum - Hareketin gücü!',
        usage: 'Bir kamyon yavaş gitse bile yüksek kütlesi nedeniyle büyük momentuma sahip! Momentum = kütle × hız',
        examples: [
            { emoji: '⚽', text: 'Futbol topu: 5 kg·m/s' },
            { emoji: '🚗', text: 'Araba: 30000 kg·m/s' },
            { emoji: '🚀', text: 'Roket: 10⁹ kg·m/s' }
        ],
        funFact: '🤣 Momentum korunur! Bilardo masasında toplar birbirine çarptığında toplam momentum aynı kalır. Bu yüzden bilardo fiziğin en güzel gösterisidir!',
        questions: [
            { q: 'Momentum formülü nedir?', answers: ['m+v', 'm×v', 'm/v', 'm-v'], correct: 1, image: '🎱' },
            { q: 'Momentum birimi nedir?', answers: ['kg/s', 'kg·m/s', 'kg·m', 'kg/m'], correct: 1, image: '📐' },
            { q: 'Momentum korunur mu?', answers: ['Hayır', 'Evet', 'Bazen', 'Hiçbir zaman'], correct: 1, image: '⚖️' },
            { q: 'Hangisinin momentumu daha büyük?', answers: ['Hızlı bisiklet', 'Yavaş kamyon', 'Eşit', 'Hesaplanamaz'], correct: 1, image: '🚛' },
            { q: 'p = m × v formülünde p ne?', answers: ['Basınç', 'Güç', 'Momentum', 'Potansiyel'], correct: 2, image: '🔤' }
        ]
    },
    {
        id: 'acisal-momentum',
        symbol: 'kg·m²/s',
        name: 'Açısal Momentum',
        quantity: 'Açısal Momentum',
        icon: '🎯',
        color: '#9f7aea',
        category: 'derived',
        formula: 'kg·m²/s',
        description: 'Açısal momentum - Dönmenin gücü!',
        usage: 'Dünya\'nın açısal momentumu çok büyük! Bu yüzden dönüşü milyarlarca yıldır devam ediyor!',
        examples: [
            { emoji: '🌍', text: 'Dünya: 7×10³³ kg·m²/s' },
            { emoji: '⛸️', text: 'Patenci: 10 kg·m²/s' },
            { emoji: '🎡', text: 'Tekerlek: 100 kg·m²/s' }
        ],
        funFact: '🤣 Açısal momentum korunur! Patenciler kollarını açtığında yavaşlar, kapattığında hızlanır - ama toplam açısal momentum hep aynı!',
        questions: [
            { q: 'Açısal momentum birimi nedir?', answers: ['kg·m/s', 'kg·m²/s', 'kg/m²/s', 'kg·m·s'], correct: 1, image: '🎯' },
            { q: 'L = I × ω formülünde L ne?', answers: ['Uzunluk', 'Lümen', 'Açısal momentum', 'Işık'], correct: 2, image: '📐' },
            { q: 'Açısal momentum korunur mu?', answers: ['Hayır', 'Evet', 'Bazen', 'Asla'], correct: 1, image: '⚖️' },
            { q: 'Dünya neden hep dönüyor?', answers: ['Güneş çeker', 'Açısal momentum', 'Rüzgar', 'Yerçekimi'], correct: 1, image: '🌍' },
            { q: 'I sembolü neyi temsil eder?', answers: ['Akım', 'Eylemsizlik momenti', 'Impuls', 'Işık'], correct: 1, image: '🔤' }
        ]
    },
    {
        id: 'viskozite',
        symbol: 'Pa·s',
        name: 'Dinamik Viskozite',
        quantity: 'Viskozite',
        icon: '🍯',
        color: '#dd6b20',
        category: 'derived',
        formula: 'Pa·s = kg/(m·s)',
        description: 'Viskozite - Akışkanın yapışkanlığı!',
        usage: 'Su 0.001 Pa·s, bal 2-10 Pa·s, katran 10⁸ Pa·s! Viskozite ne kadar yüksekse akış o kadar zor.',
        examples: [
            { emoji: '💧', text: 'Su: 0.001 Pa·s' },
            { emoji: '🍯', text: 'Bal: 2-10 Pa·s' },
            { emoji: '🛢️', text: 'Motor yağı: 0.2 Pa·s' }
        ],
        funFact: '🤣 Cam aslında çok yavaş akan bir sıvıdır! Viskozitesi 10¹² Pa·s - bu yüzden eski kiliselerdeki camlar alttan daha kalın görünür (aslında bu efsane tam doğru değil ama güzel bir hikaye)!',
        questions: [
            { q: 'Viskozite birimi nedir?', answers: ['Pa', 'Pa·s', 'Pa/s', 'Pa·s²'], correct: 1, image: '🍯' },
            { q: 'Hangisinin viskozitesi en yüksek?', answers: ['Su', 'Süt', 'Bal', 'Benzin'], correct: 2, image: '🥛' },
            { q: 'Viskozite neyi ölçer?', answers: ['Basınç', 'Yapışkanlık', 'Yoğunluk', 'Sıcaklık'], correct: 1, image: '📐' },
            { q: 'Sıcaklık artınca viskozite?', answers: ['Artar', 'Azalır', 'Aynı kalır', 'Sıfır olur'], correct: 1, image: '🌡️' },
            { q: 'Motor yağı numarası neyi gösterir?', answers: ['Renk', 'Viskozite', 'Hacim', 'Ağırlık'], correct: 1, image: '🛢️' }
        ]
    },
    {
        id: 'kinematik-viskozite',
        symbol: 'm²/s',
        name: 'Kinematik Viskozite',
        quantity: 'Kinematik Viskozite',
        icon: '💧',
        color: '#3182ce',
        category: 'derived',
        formula: 'm²/s',
        description: 'Kinematik viskozite - Yoğunluğa göre viskozite!',
        usage: 'Kinematik viskozite = dinamik viskozite / yoğunluk. Su için yaklaşık 10⁻⁶ m²/s.',
        examples: [
            { emoji: '💧', text: 'Su: 10⁻⁶ m²/s' },
            { emoji: '🛢️', text: 'Yağ: 10⁻⁵ m²/s' },
            { emoji: '🌬️', text: 'Hava: 1.5×10⁻⁵ m²/s' }
        ],
        funFact: '🤣 Hava ve su için kinematik viskozite neredeyse aynı! Bu yüzden su tankında yapılan testler hava tünelinde de geçerli olabilir.',
        questions: [
            { q: 'Kinematik viskozite birimi?', answers: ['Pa·s', 'm²/s', 'kg/s', 'N/m²'], correct: 1, image: '💧' },
            { q: 'ν = μ / ρ formülünde ν ne?', answers: ['Hız', 'Frekans', 'Kinematik viskozite', 'Hacim'], correct: 2, image: '📐' },
            { q: 'Kinematik viskozite = ?', answers: ['η×ρ', 'η/ρ', 'η+ρ', 'η-ρ'], correct: 1, image: '🔢' },
            { q: 'Stokes birimi neyle ilgili?', answers: ['Basınç', 'Kinematik viskozite', 'Kuvvet', 'Enerji'], correct: 1, image: '📖' },
            { q: '1 Stokes kaç m²/s?', answers: ['1', '0.1', '0.01', '0.0001'], correct: 3, image: '🔢' }
        ]
    },
    {
        id: 'isi-akisi',
        symbol: 'W/m²',
        name: 'Isı Akısı',
        quantity: 'Isı Akısı',
        icon: '🔥',
        color: '#c53030',
        category: 'derived',
        formula: 'W/m² = kg/s³',
        description: 'Isı akısı - Birim alandan geçen ısı gücü!',
        usage: 'Güneş Dünya\'ya 1361 W/m² ısı akısı gönderir. Buna güneş sabiti denir!',
        examples: [
            { emoji: '☀️', text: 'Güneş sabiti: 1361 W/m²' },
            { emoji: '🔥', text: 'Soba: 5000 W/m²' },
            { emoji: '🧊', text: 'Buzdolabı: -50 W/m²' }
        ],
        funFact: '🤣 Güneş sabiti aslında sabit değil! %0.1 kadar değişir. Ama biz hâlâ "sabit" diyoruz - fizikçilerin mizah anlayışı!',
        questions: [
            { q: 'Isı akısı birimi nedir?', answers: ['W', 'W/m', 'W/m²', 'W·m²'], correct: 2, image: '🔥' },
            { q: 'Güneş sabiti kaç W/m²?', answers: ['100', '500', '1000', '1361'], correct: 3, image: '☀️' },
            { q: 'Isı akısı = ?', answers: ['Güç + alan', 'Güç × alan', 'Güç / alan', 'Güç - alan'], correct: 2, image: '📐' },
            { q: 'Isı akısı vektör mü?', answers: ['Hayır', 'Evet', 'Bazen', 'Skaler'], correct: 1, image: '➡️' },
            { q: 'Negatif ısı akısı ne demek?', answers: ['Imkansız', 'Isı kaybı', 'Çok sıcak', 'Hata'], correct: 1, image: '🧊' }
        ]
    },
    {
        id: 'isil-iletkenlik',
        symbol: 'W/(m·K)',
        name: 'Isıl İletkenlik',
        quantity: 'Isıl İletkenlik',
        icon: '🌡️',
        color: '#e53e3e',
        category: 'derived',
        formula: 'W/(m·K)',
        description: 'Isıl iletkenlik - Maddenin ısıyı ne kadar iyi ilettiği!',
        usage: 'Bakır 400 W/(m·K), cam 1 W/(m·K), köpük 0.03 W/(m·K). Metaller ısıyı çok iyi iletir!',
        examples: [
            { emoji: '🥄', text: 'Bakır: 400 W/(m·K)' },
            { emoji: '🪟', text: 'Cam: 1 W/(m·K)' },
            { emoji: '🧱', text: 'Tuğla: 0.7 W/(m·K)' }
        ],
        funFact: '🤣 Elmas ısıl iletkenliği en yüksek katı maddedir: 2000 W/(m·K)! Bu yüzden elmas soğuk hissettirir - ısını hemen çeker!',
        questions: [
            { q: 'Isıl iletkenlik birimi?', answers: ['W/K', 'W/(m·K)', 'W·m/K', 'K/W'], correct: 1, image: '🌡️' },
            { q: 'Hangisi ısıyı en iyi iletir?', answers: ['Tahta', 'Cam', 'Bakır', 'Plastik'], correct: 2, image: '🥄' },
            { q: 'Yalıtım malzemesi seçerken?', answers: ['Yüksek k', 'Düşük k', 'k önemli değil', 'Sadece renk'], correct: 1, image: '🏠' },
            { q: 'Elmas neden soğuk hissettirir?', answers: ['Gerçekten soğuk', 'Yüksek ısıl iletkenlik', 'Düşük yoğunluk', 'Parlak'], correct: 1, image: '💎' },
            { q: 'k sembolü neyi temsil eder?', answers: ['Kelvin', 'Isıl iletkenlik', 'Kinetik', 'Sabit'], correct: 1, image: '🔤' }
        ]
    },
    {
        id: 'ozgul-isi',
        symbol: 'J/(kg·K)',
        name: 'Özgül Isı',
        quantity: 'Özgül Isı Kapasitesi',
        icon: '♨️',
        color: '#d69e2e',
        category: 'derived',
        formula: 'J/(kg·K)',
        description: 'Özgül ısı - 1 kg maddeyi 1 K ısıtmak için gereken enerji!',
        usage: 'Suyun özgül ısısı çok yüksek: 4186 J/(kg·K). Bu yüzden deniz kıyıları daha ılıman!',
        examples: [
            { emoji: '💧', text: 'Su: 4186 J/(kg·K)' },
            { emoji: '🪨', text: 'Demir: 450 J/(kg·K)' },
            { emoji: '🌬️', text: 'Hava: 1005 J/(kg·K)' }
        ],
        funFact: '🤣 Su yeryüzündeki en önemli termostat! Yüksek özgül ısısı sayesinde okyanuslar iklimi dengeler. Su olmasa gece -100°C, gündüz +100°C olurdu!',
        questions: [
            { q: 'Özgül ısı birimi nedir?', answers: ['J/K', 'J/(kg·K)', 'J·kg/K', 'K/J'], correct: 1, image: '♨️' },
            { q: 'Suyun özgül ısısı yaklaşık?', answers: ['100 J/(kg·K)', '1000 J/(kg·K)', '4186 J/(kg·K)', '10000 J/(kg·K)'], correct: 2, image: '💧' },
            { q: 'Hangisi daha yavaş ısınır?', answers: ['Metal', 'Su', 'Hava', 'Kum'], correct: 1, image: '🏖️' },
            { q: 'Q = m × c × ΔT formülünde c?', answers: ['Sıcaklık', 'Kütle', 'Özgül ısı', 'Enerji'], correct: 2, image: '📐' },
            { q: 'Deniz kıyıları neden ılıman?', answers: ['Güneş', 'Rüzgar', 'Suyun özgül ısısı', 'Kum'], correct: 2, image: '🏖️' }
        ]
    },
    {
        id: 'mutlak-nem',
        symbol: 'kg/m³',
        name: 'Mutlak Nem',
        quantity: 'Mutlak Nem',
        icon: '☁️',
        color: '#4299e1',
        category: 'derived',
        formula: 'kg/m³ veya g/m³',
        description: 'Mutlak nem - Havadaki su buharının gerçek miktarı!',
        usage: 'Tropikal bölgelerde 25 g/m³, çöllerde 2 g/m³ mutlak nem olabilir.',
        examples: [
            { emoji: '🏜️', text: 'Çöl: 2 g/m³' },
            { emoji: '🏠', text: 'Ev: 10 g/m³' },
            { emoji: '🌴', text: 'Tropik: 25 g/m³' }
        ],
        funFact: '🤣 Sıcak hava daha fazla su buharı taşıyabilir! Bu yüzden tropik bölgelerde hem sıcak hem nemli, kutuplarda soğuk ve kuru.',
        questions: [
            { q: 'Mutlak nem birimi?', answers: ['%', 'g/m³', 'Pa', 'K'], correct: 1, image: '☁️' },
            { q: 'Mutlak ve bağıl nem farkı?', answers: ['Aynı', 'Mutlak gerçek miktar', 'Bağıl gerçek', 'Fark yok'], correct: 1, image: '💧' },
            { q: 'Sıcak hava daha fazla nem taşır mı?', answers: ['Hayır', 'Evet', 'Aynı', 'Daha az'], correct: 1, image: '🌡️' },
            { q: 'Tropikal bölgede mutlak nem?', answers: ['Düşük', 'Yüksek', 'Sıfır', 'Orta'], correct: 1, image: '🌴' },
            { q: 'Nem yoğunluğu = ?', answers: ['Su kütlesi / hava', 'Hava / su', 'İkisi eşit', 'Ölçülemez'], correct: 0, image: '📐' }
        ]
    },
    {
        id: 'elastisite',
        symbol: 'Pa',
        name: 'Young Modülü',
        quantity: 'Elastik Modül',
        icon: '🔩',
        color: '#718096',
        category: 'derived',
        formula: 'Pa = N/m²',
        description: 'Young modülü - Malzemenin sertliği!',
        usage: 'Çelik 200 GPa, kauçuk 0.01 GPa. Young modülü yüksekse malzeme sert!',
        examples: [
            { emoji: '🔩', text: 'Çelik: 200 GPa' },
            { emoji: '💎', text: 'Elmas: 1000 GPa' },
            { emoji: '🎈', text: 'Kauçuk: 0.01 GPa' }
        ],
        funFact: '🤣 Elmasın Young modülü en yüksek! 1000 GPa. Ama elmas kırılgan - sert olmak dayanıklı olmak değil!',
        questions: [
            { q: 'Young modülü birimi?', answers: ['N', 'Pa', 'J', 'W'], correct: 1, image: '🔩' },
            { q: 'Hangisinin Young modülü en yüksek?', answers: ['Kauçuk', 'Cam', 'Çelik', 'Elmas'], correct: 3, image: '💎' },
            { q: 'E = σ / ε formülünde E?', answers: ['Enerji', 'Young modülü', 'Elektronvolt', 'Elektrik'], correct: 1, image: '📐' },
            { q: 'Sert malzeme = ?', answers: ['Düşük E', 'Yüksek E', 'E=0', 'E önemli değil'], correct: 1, image: '🔧' },
            { q: 'Gerilme / şekil değiştirme = ?', answers: ['Basınç', 'Young modülü', 'Viskozite', 'Yoğunluk'], correct: 1, image: '📊' }
        ]
    },
    {
        id: 'debi',
        symbol: 'm³/s',
        name: 'Hacimsel Debi',
        quantity: 'Akış Debisi',
        icon: '🚿',
        color: '#38a169',
        category: 'derived',
        formula: 'm³/s veya L/s',
        description: 'Debi - Birim zamanda akan hacim!',
        usage: 'Ev musluğu 0.1 L/s, Amazon nehri 200,000 m³/s debiyle akar!',
        examples: [
            { emoji: '🚿', text: 'Duş: 0.1 L/s' },
            { emoji: '🏞️', text: 'Nehir: 1000 m³/s' },
            { emoji: '🌊', text: 'Amazon: 200000 m³/s' }
        ],
        funFact: '🤣 Amazon nehri saniyede 200,000 m³ su taşır! Bu tüm Avrupa\'nın su ihtiyacının 10 katı. Tabiat harikası!',
        questions: [
            { q: 'Hacimsel debi birimi?', answers: ['m/s', 'm²/s', 'm³/s', 'm³'], correct: 2, image: '🚿' },
            { q: 'Debi = ?', answers: ['Hacim × zaman', 'Hacim / zaman', 'Hacim + zaman', 'Alan × hız'], correct: 1, image: '📐' },
            { q: 'Q = A × v formülünde Q?', answers: ['Isı', 'Yük', 'Debi', 'Kalite'], correct: 2, image: '🔤' },
            { q: 'Amazon debisi yaklaşık?', answers: ['100 m³/s', '1000 m³/s', '200000 m³/s', '1M m³/s'], correct: 2, image: '🌊' },
            { q: 'Kütlesel debi birimi?', answers: ['m³/s', 'kg/s', 'L/min', 'N/s'], correct: 1, image: '⚖️' }
        ]
    },
    {
        id: 'gerilme',
        symbol: 'Pa',
        name: 'Gerilme',
        quantity: 'Mekanik Gerilme',
        icon: '📏',
        color: '#744210',
        category: 'derived',
        formula: 'Pa = N/m²',
        description: 'Gerilme - Birim alana düşen kuvvet!',
        usage: 'Gerilme türleri: çekme, basma ve kesme. Köprüler ve binalar gerilmelere göre tasarlanır.',
        examples: [
            { emoji: '🌉', text: 'Köprü kablosu: 500 MPa' },
            { emoji: '🔩', text: 'Civata: 300 MPa' },
            { emoji: '🏗️', text: 'Beton: 30 MPa' }
        ],
        funFact: '🤣 Örümcek ağı çeliğen 5 kat daha güçlü (şekil değiştirmeye göre)! Doğa en iyi mühendis.',
        questions: [
            { q: 'Gerilme birimi?', answers: ['N', 'Pa', 'N·m', 'J'], correct: 1, image: '📏' },
            { q: 'σ = F / A formülünde σ?', answers: ['Sigma', 'Gerilme', 'Toplam', 'Hepsi'], correct: 1, image: '📐' },
            { q: 'Kesme gerilmesi τ nedir?', answers: ['Çekme', 'Basma', 'Teğet kuvvet/alan', 'Hacim'], correct: 2, image: '✂️' },
            { q: 'Çeliğin akma gerilmesi yaklaşık?', answers: ['10 MPa', '100 MPa', '250 MPa', '1000 MPa'], correct: 2, image: '🔩' },
            { q: 'Gerilme = Basınç mı?', answers: ['Hayır', 'Evet', 'Bazen', 'Aynı birim, farklı kavram'], correct: 3, image: '🤔' }
        ]
    }
];

// Tüm birimleri birleştir
const ALL_UNITS = [...SI_BASE_UNITS, ...SI_DERIVED_UNITS];

// Kategoriye göre filtrele
const getUnitsByCategory = (category) => ALL_UNITS.filter(u => u.category === category);

// Genel Quiz Soruları (genişletilmiş)
const GENERAL_QUIZ = [
    { q: 'Kaç tane temel SI birimi vardır?', answers: ['5', '6', '7', '8'], correct: 2 },
    { q: 'Kuvvet birimi hangisidir?', answers: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1 },
    { q: 'Basınç birimi hangisidir?', answers: ['Newton', 'Pascal', 'Bar', 'Joule'], correct: 1 },
    { q: 'Enerji birimi hangisidir?', answers: ['Watt', 'Newton', 'Joule', 'Volt'], correct: 2 },
    { q: 'Güç birimi hangisidir?', answers: ['Joule', 'Watt', 'Volt', 'Amper'], correct: 1 },
    { q: 'Frekans birimi hangisidir?', answers: ['Saniye', 'Hertz', 'Ohm', 'Farad'], correct: 1 },
    { q: 'F = m × a hangi yasadır?', answers: ['Newton 1', 'Newton 2', 'Ohm', 'Joule'], correct: 1 },
    { q: 'V = I × R hangi yasadır?', answers: ['Newton', 'Coulomb', 'Ohm', 'Faraday'], correct: 2 },
    { q: 'Yerçekimi ivmesi kaç m/s²?', answers: ['1', '9.81', '100', '1000'], correct: 1 },
    { q: 'Işık hızı yaklaşık kaç km/s?', answers: ['1000', '30000', '300000', '3000000'], correct: 2 },
    { q: 'Vakumda ses iletilir mi?', answers: ['Evet', 'Hayır', 'Bazen', 'Yavaşça'], correct: 1 },
    { q: '1 kalori kaç Joule\'dür?', answers: ['1', '4.2', '100', '4184'], correct: 3 },
    { q: 'Suyun yoğunluğu kaç kg/m³?', answers: ['1', '100', '1000', '10000'], correct: 2 },
    { q: 'Mutlak sıfır kaç Kelvin?', answers: ['-273', '0', '100', '273'], correct: 1 },
    { q: 'Avogadro sayısı hangi birimle ilgili?', answers: ['Metre', 'Mol', 'Kelvin', 'Amper'], correct: 1 }
];

window.SI_BASE_UNITS = SI_BASE_UNITS;
window.SI_DERIVED_UNITS = SI_DERIVED_UNITS;
window.ALL_UNITS = ALL_UNITS;
window.GENERAL_QUIZ = GENERAL_QUIZ;
window.getUnitsByCategory = getUnitsByCategory;

// Eski uyumluluk için
window.SI_UNITS = SI_BASE_UNITS;
