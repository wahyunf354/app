/**
 * module data berisi data dari tanaman-tanaman obat berserta khasiatnya
 *
 * Untuk schema data sebadai berikut
 * {
 *    id: int,
 *    nama: String,
 *    namaLatin: String,
 *    desc: String,
 *    imgUrl: String,
 *    habitat: String,
 *    caraBudidaya: String,
 *    namaDaerah: [ String ],
 *    bagianYangMenjadiObat: [ String ],
 *    ujiKlinik: String,
 *    khasiat: String,
 *    komposisi: String,
 *    ramuan: [ String ],
 *    caraPemakaian: String,
 *    lamaPengobatan: String
 * }
 */
var tanamans = [
  {
    id: 1,
    nama: "Alang-Alang",
    namaLatin: "Imperata cylindrical (L.) Beauv.var.mayor",
    imgUrl: "alang-alang.jpg",
    desc:
      "Alang-alang (Imperata cylindrical (L.) Beauv.var.mayor ), Perawakan: herba, rumput, merayap, tinggi 30-180 cm. Batang: rimpang, merayap di bawah tanah, batang tegak membentuk satu perbungaan, padat, pada bukunya berambut jarang. Daun: tunggal, pangkal saling menutup, helaian; berbentuk pita, ujung runcing tajam, tegak, kasar, berambut jarang, ukuran 12-80 cm. x 35-18 cm. Bunga: susunan majemuk bulir majemuk, agak menguncup, panjang 6-28 cm, setiap cabang memiliki 2 bulir, cabang 2,5-5 cm, tangkai bunga 1-3 mm, gluma 1; ujung bersilia, 3-6 urat, Lemma 1 (sekam); bulat telur melebar, silia pendek 1,5-2,5 mm. Lemma 2 (sekam); memanjang, runcing 0,5-2,5 mm. Palea (sekam); 0,75-2 mm. Benang sari: kepala sari 2,5-3,5 mm, putih kekuningan atau ungu. Putik: kepala putik berbentuk bulu ayam. Buah: tipe padi. Biji: berbentuk jorong, panjang 1 mm lebih. Waktu berbunga : Januari – Desember. Daerah distribusi, Habitat dan Budidaya: Di Jawa tumbuh pada ketinggian sampai dengan 2700 m dpl, pada daerah-daerah terbuka atau setengah tertutup; rawa-rawa; pada tanah dengan aerasi yang baik; pada daerah-daerah yang habis dibuka; di tepi sungai; ekstensif pada hutan sekunder; daerah bekas terbakar; sebagai gulma di perladangan; taman dan perkebunan. Tumbuhan ini dapat mempengaruhi tanaman kultivasi lain, karena kebutuhan natrium yang relatif tinggi.",
    habitat:
      "Berkembang biak dengan sendirinya. Setiap saat rimpang dipanen dari tumbuhan yang telah matang. Rimpang yang baik berwarna pucat, berasa manis dan sejuk. Alang-alang dapat menyebabkan penurunan pH tanah. Besarnya penurunan pH dan ham-batan terhadap proses nitrifikasi menunjukkan adanya korelasi positif dengan pertumbuhan alang-alang. Bagian yang digunakan untuk obat medis adalah akarnya. Kenyataannya, akarnya dapat digunakan untuk menurunkan temperatur, melancarkan urin, menghentikan pendarahan, dan sebagai obat untuk pendarahan pada hidung, memuntahkan darah, gonorea (kencing nanah), hepatitis, infeksi ginjal. Penelitian menemukan bahwa alang-alang mengandung 19 mannitol, glukosa, asam malic, asam sitrat, coixol, arundoin, silindrin, fernerol, simiarenol, anemonin, esin, alkali, saponin, taninin, dan polifenol.",
    caraBudidaya:
      "Perbanyakan dengan rimpang atau akar tinggal. Tanaman ini sangat mudah tumbuh dan terdapat dimanamana disekitar kita. Merupakan tumbuhan liar dan menjurus sebagai gulma. Tumbuh liar di pinggir jalan, di 21 ladang dan di hutan. Tumbuhan ini termasuk terna menahun, tinggi dapat mencapai 180 cm. Batang padat, buku berambut jarang. Daun berbentuk pita, berwarna hijau, permukaan daun kasar. Perbungaan berupa bulir, warna putih, bunga yang terletak di bagian atas adalah bunga sempurna dan yang terletak di bawah adalah bunga mandul. Bunga mudah diterbangkan oleh angin.",
    namaDaerah: [
      "Naleueng lakoe (Aceh)",
      "Jih (Gayo)",
      "Alalang, Hilalang, Ilalang (Minang kabau)",
      "Lioh (Lampung)",
      "Halalang, Tingen, Padang, Tingan, Puang, Buhang, Belalang, Bolalang (Dayak)",
      "Eurih (Sunda)",
      "Alang-alang kambengan (Jawa)",
      "Kebut, Lalang (Madura)",
      "Ambengan, Lalang (BaIi)",
      "Kii, Rii (FIores)",
      "Padengo, Padanga (Gorontalo)",
      "Deya (Bugis)",
      "Erer, Muis, Wen (Seram)",
      "Weli, Welia, Wed (Ambon)",
      "Rih, Ri (Batak)",
      "Oo (Nias)",
    ],
    bagianYangMenjadiObat: ["Akar", "rimpang (daun)", "bunga"],
    ujiKlinik:
      "Dekokta akar alang-alang dengan dosis 250-300 g, 2 kali pagi dan sore dapat menyembuhkan 27 kasus dari 30 penderita nefritis akut. Pada nefritis kronis, herba alangalang dapat mengurangi edema dan menurunkan tekanan darah. Dekokta herba 250 g dalam bentuk tunggal maupun dikombinasikan dengan rimpang dan daun Nelumbo nucifera dan daun Agrimonia pilosa dapat mengobati epistaksis (mimisan), hemoptisis (batuk darah), hematuri (kencing darah), menorrhagia, dan perdarahan gastrointestinal bagian atas. Di samping itu dilaporkan juga bahwa dekokta akar alang-alang dapat efektif untuk pengobatan hepatitis viral akut pada 28 kasus; biasanya digunakan bersama-sama dengan Plantago asiatica, Glechoma longituba dan tunas Artemisia capillaris. Toksisitas: Pada pemakaian sesuai aturan, praktis tidak toksik. Efek yang tidak dfinginkan: Pusing, mual, adanya peningkatan rasa ingin buang air besar, kadang-kadang terjadi pada penggunaan klinik. Teknologi Farmasi: Selulosa daun alang-alang mempunyai daya serap terhadap air yang relatif cukup baik dalam pembuatan tablet secara cetak langsung.",
    khasiat:
      "Rimpang: pelembut kulit; peluruh air seni, pembersih darah, penambah nafsu makan, penghenti perdarahan. di samping itu dapat digunakan pula dalam upaya pengobatan penyakit kelamin (kencing nanah, kencing darah, raja singa), penyakit ginjal, luka, demam, tekanan darah tinggi dan penyakit syaraf. Semua bagian tumbuhan digunakan sebagai pakan hewan,bahan kertas,dan untuk pengobatan kurap.",
    komposisi:
      "Akar: metabolit yang telah ditemukan pada akar alangalang terdiri dari arundoin, fernenol, isoarborinol, silindrin, simiarenol, kampesterol, stigmasterol, ßsitosterol, skopoletin, skopolin, p-hidroksibenzaladehida, katekol, asam klorogenat, asam isoklorogenat, asam pkumarat, asam neoklorogenat, asam asetat, asam oksalat, asam d-malat, asam sitrat, potassium (0,75% dari berat kering), sejumlah besar kalsium dan 5- hidroksitriptamin. Dari hasil penelitian lain terhadap akar dan daun ditemukan 5 macam turunan flavonoid yaitu turunan 3′,4′,7-trihidroksi flavon, 2′,3′-dihidroksi kalkon dan 6-hidroksi flavanol. Suatu turunan flavonoid yang kemungkinan termasuk golongan flavon, flavonol tersubstitusi pada 3-0H, flavanon atau isoflavon terdapat pada fraksi ekstrak yang larut dalam etilasetat akar alang-alang. Pada fraksi ekstrak yang larut dalam air akar alang-alang ditemukan golongan senyawa flavon tanpa gugus OH bebas, flavon, flavonol tersubstitusi pada 3- 0H, flavanon, atau isoflavon.",
    ramuan: [
      "Rimpang Alang-alang 6 gram Daun sendok segar 6 gram Daun Andong segar 2 helai Air 110 ml.",
    ],
    caraPemakaian:
      "Diminum 2 kali sehari, pagi dan sore, tiap kali minum 100 ml. (untuk infus). Untuk pipisan diminum 2 kali sehari, pagi dan sore, tiap kali minum 1/4 cangkir. Untuk pil diminum 3 kali sehari 9 pil. LAMA PENGOBATAN Diulang sampai sembuh.",
    lamaPengobatan: "Sampai Sembuh",
  },
  {
    id: 2,
    nama: "Alpokat",
    namaLatin: "Persea gratissima Gaerin",
    imgUrl: "alpokat.jpg",
    desc:
      "Pohon, tinggi dapat mencapai 10 meter, batang berkayu, dan bercabang-cabang. daun tunggal berbentuk bulat telur dan berwarna hijau. Perbungaan berbentuk malai, tumbuh di ujung ranting. Buah buni bentuk bulat telur, bentuk pita atau bentuk bulat. Warna buah hijau sampai ungu. Daging buah jika sudah masak berwarna kuning atau kkuning kehijauan. Akar termasuk akar tunggang 11 HABITAT Tumbuh pada daerah berikilim panas pada dataran rendah sampai ketinggian 1200 m dpl ",
    habitat: null,
    caraBudidaya: null,
    namaDaerah: ["Apukat", "Advocaat", "Alpokat", "Apuket"],
    bagianYangMenjadiObat: ["Daun"],
    ujiKlinik: null,
    khasiat: "Diuretik; Anti bakteri Nama simplesia: Perseae Folium",
    komposisi: null,
    ramuan: [
      "Batu ginjal : Daun avokat segar 7 helai; Air 110 ml, Dibuat infus atau diseduh, Diminum sehari 2 kali; pagi dan sore, tiap kali minum 100 ml ",
      "Sakit perut dan Disentri : Daun avokat segar 5 g; Rimpang temu kunci segar 5 g; Rimpang kunyit segar 6 g; Rasuk angin 1/2 g; Daun pegagan segar 6 g; Air 115 ml, Dibuat infus atau diseduh, Diminum 1 kali sehari 100 ml.",
    ],
    caraPemakaian: null,
    lamaPengobatan: null,
  },
  {
    id: 3,
    nama: "Belimbing Wuluh",
    namaLatin: "Averrhoa bilimbi L",
    imgUrl: "blimbing-wuluh.jpg",
    desc:
      "Tumbuhan berbatang keras, tinggi mencapi 11 meter, daun bersirip genap. Batang tidak bercabang. Bunga berbentuk bintang, berwarna merah muda sampai ungu. Buah beruang 5, bergantung pada batang atau dahan. Buah berair dan berasa asam. ",
    habitat:
      "Tumbuh liar atau dibudidayakan di pekarangan yang cukup memperoleh sinar matahari.  ",
    caraBudidaya: null,
    namaDaerah: [
      "Belimbing wuluh",
      "Belimbing buloh",
      "Belimbing asam",
      "Belimbing tunjuk",
      "Balimbeng",
    ],
    bagianYangMenjadiObat: ["Daun", "Bunga", "Buah"],
    ujiKlinik: null,
    khasiat: "Antipiretik, Ekspektoran ",
    komposisi: null,
    ramuan: [
      "Sakit tenggorokan; Sariawan: Bunga belimbing wuluh segar 1 genggam; Buah adas manis secukupnya; Air 1/4 cangkir; Gula batu secukupnya, Dipipis, Diminum sehari 2 kali; pagi dan sore; tiap kali diminum 1 sampai 2 sendok makan.",
      "Kencing manis: Daun belimbing wuluh segar 20 g; Air secukupnya, Dipipis, Diminum 2 kali sehari; pagi dan sore; tiap kali minum 1/4 cangkir.",
    ],
    caraPemakaian: null,
    lamaPengobatan: null,
  },
  {
    id: 4,
    nama: "Bawang Putih",
    namaLatin: "Allium sativum Linn",
    imgUrl: "bawang-putih.jpg",
    desc:
      "Tumbuhan berumpun yang bersiung-siung, tiap siung terbungkus dengan kulit tipis. Daunnya berbentuk pita dan berakar serabut. Bunganya berwarna putih.",
    habitat: "Ditanam di daerah pegunungan yang cukup mendapat sinar matahari.",
    caraBudidaya: null,
    namaDaerah: [
      "Bawang bodas",
      "Bawang handal",
      "Bawang Basikong",
      "Bawang puteh",
      "Bawang putek",
    ],
    bagianYangMenjadiObat: ["umbi lapis"],
    ujiKlinik: null,
    khasiat: "Obat cacing, Tekanan darah tinggi ",
    komposisi: null,
    ramuan: [
      "Obat Cacing: Bawang putih 2 g; Rimpang temugiring 4 g; Air matang 2 sendok makan, Dipipis, Diminum 1 kali sehari 1 sendok makan; diulang selama 4 hari.",
      "Tekanan darah tinggi:  Induk umbi bawang putih 2 buah; Daun seledri segar 75 g; Air matang secukupnya, Dipipis, Diminum sehari 2 kali; 1/4 cangkir.",
      "Asma; Bronkhitis; Selesma: Bawang putih 5 g; Kayu mesoyi 1 g; Herba patikan kebo 2 g; Adas 1 g; Kapulaga 3 g; Air 110, Ditumbuk kemudian tambahkan air; diperas kemudian disaring; dididihkan, Diminum 2 kali sehari; tiap kali 100 ml; diulang sampai sembuh; untuk pemeliharaan cukup 2 hari sekali 100 ml.",
    ],
    caraPemakaian: null,
    lamaPengobatan: null,
  },
  {
    id: 5,
    nama: "Bawang Merah",
    namaLatin: "Allium cepa L",
    khasiat: "Batuk, Kencing Manis, Demam",
    imgUrl: "bawangMerah.jpg",
    ramuan: [
      "Batuk: Umbi bawang merah 4 g; Daun poko 4 g; Daun sembung 3 g; Daun pegagan 4 g; Buah adas 2 g; Air 125 ml, Dipipis, dibuat pil atau direbus, Diminum sehari 1 kali, pagi hari 100 ml, dipipis diminum 1 kali sehari 1/4 cangkir, pil, diminum 3 kali sehari 9 pil. ",
      "Kencing manis: Umbi bawang merah (dirajang) 4 g; Buah buncis (dirajang) 15 g; Daun salam (dirajang) 120 ml, Direbus, Diminum 1 kali sehari 100 ml. ",
      "Demam: Umbi bawang merah (potong tipis) secukupnya; Minyak kelapa secukupnya; Minyak kayu putih secukupnya, Diremas-remas, Minyak tersebut dioleskan pada perut yang kembung, seluruh badan, kaki, dan tangan pada anak yang demam.",
    ],
  },
  {
    id: 6,
    nama: "Daun Sirih",
    namaLatin: "Piperbetie L.",
    khasiat:
      "Kaki Bengkak, Keputihan, Malaria, Mulut Bau, Nyeri Sendi, Mimisan(Pendarahan Hidung), Radang Mulut, Batuk",
    imgUrl: "daunSirih.jpg",
    ramuan: [
      "Kaki bengkak: Daun sirih 2 helai; Cabai jawa 3 buah; Lempuyang emprit 1 rimpang; Beras sedikit; Air sedikit; Arak secukupnya, Ramuan dihaluskan dengan bantuan sedikit air; kemudian ditambah arak secukupnya, Digosokkan pada kaki yang bengkak sebelum tidur.",
      "Keputihan: Daun sirih 2 helai; Daun Jambu biji 5 helai; Air 210 ml, Dibuat infus, Dicebokkan 2 kali sehari. ",
      "Malaria: Daun sirih segar 20 helai; Daun sembung 20 helai; Daun asam 1 genggam; Daun beluntas 20 helai; Kulit kayu pulai 3 jari tangan; Air 2 panci, Dididihkan, Uapnya digunakan untuk mandi ukub(mandi uap). ",
      "Napas/mulut bau: Daun sirih 3 g; Air 110 ml, Dibuat infus, Untuk berkumur 2 kali sehari; tiap kali pakai 50 ml. ",
      "Nyeri sendi: Buah sirih 5 butir; Lempuyang emprit 1 rimpang; Ragi secukupnya, Dihaluskan ditambahan arak, Digosokkan pada tempat yang nyeri. ",
      "Pendarahan hidung(mimisan): Daun sirih, Diremas dan digulung, Dimasukkan ke dalam hidung. ",
      "Radang mulut: Daun sirih 2 helai; Air 110 ml, Dibuat infus, Untuk berkumur 2 kali sehari; tiap kali pakai 100 ml",
      "Batuk: Daun sirih 2 g; Buah kapulaga 1 g; air 110 ml, Dibuat infus atau diseduh, Diminum 1 kali sehari 100 ml.",
    ],
  },
  {
    id: 7,
    nama: "Jeruk Nipis",
    namaLatin: "Citrus aurantifolia (christm)suringle",
    khasiat: "Batuk, Demam, Nyeri Tenggorokan, Nyeri Haid",
    imgUrl: "jerukNipis.jpg",
    ramuan: [
      "Batuk: Jeruk nipis(peras)1 buah; Kecap/madu sama banyak dengan perasan jeruk nipis, Dicampur hingga rata, Diminum sehari 2 kali; pagi dan sore; tiap kali minum 1 ramuan.",
      "Demam: Daun jeruk nipis segar 5 helai; daun sembung segar 3 helai; Daun prasman segar 5 helai; Air 115 ml, Diseduh atau dipipis, Diminum 1 hari sekali 100 ml; apabila dipipis diminum 1 hari sekali 1/4 cangkir; diulang selama 4 hari. ",
      "Nyeri tenggorokan: Jeruk nipis 1 iris; Kapur sirih sedikit, Jeruk nipis diolesi kapur sirih kemudian dipanaskan di atas api kecil lalu peras, Diminum 2 kali sehari 1 ramuan; diulangi selama 3 hari. ",
      "Nyeri haid: Jeruk nipis 1 buah; Kapur sirih 2 jari; minyak kayu putih secukupnya, Peras buah jeruk nipis; kemudian tambahkan kapur sirih dan minyak kayu putih kemudian diaduk sampai tercampur, Dioleskan pada perut.",
    ],
  },
  {
    id: 8,
    nama: "Jambu Biji",
    namaLatin: "Psidium guajava",
    khasiat: "Disentri, Mencret",
    imgUrl: "jambu.jpg",
    ramuan: [
      "Disentri: Daun jambu biji 6 g; Kayu secang 1 g; Rasuk angin 1 g; Daun patikan cina 5 g; daun pegagan 7 g; Kayu ules 2 buah; Bawang merah 1 umbi; Air 120 ml, Dibuat infus, Diminum 2 kali sehari; pagi dan sore; tiap kali minum 100 ml; diulang selama 4 hari. ",
      "Mencret: Daun jambu biji muda 9 helai; Kunyit 1 jari; Biji kedawung (disangrai)4 butir; Rasuk angin 4 g; Air 110 ml, Dibuat infus, Diminum 2 kali sehari; pagi dan sore; tiap kali minum 100 ml; diulang selama 4 hari.",
    ],
  },
  {
    id: 9,
    nama: "Kuyit",
    namaLatin: "Curcuma domestica",
    imgUrl: "kuyit.png",
    khasiat: "Luka, Kurap, Mencret, Nyeri Haid, Sakit Perut",
    ramuan: [
      "Luka dan kurap : Rimpang kunyit 1 jari; Daun asam 1 genggam; Air sedikit, Dipipis, Tempelkan pada luka dan diganti setiap 3 jam. ",
      "Mencret : Rimpang kunyit 1/2 jari; Rasuk angin 1/2 sendok teh; Ketumbar 3 biji; Buah kayu ules 1 biji; daun trawas 1 helai, Campuran ditumbuk; ditambah air 115 ml dan dididihkan; kemudian disaring, Diminum pagi dan sore; tiap kali minum 100 ml. ",
      "Nyeri haid : Rimpang kunyit 1 jari; Ketumbar 7 butir; Cengkih 1 butir; Asam kawak; Biji pala, Campuran ditumbuk; ditambah air 110 ml; dan dididihkan; kemudian disaring, Diminum 1 kali sehari 100 ml. ",
      "Sakit perut : Kunyit dibakar 1 jari; Kulit batang pulosari 1 jari; Ketumbar 7 biji; Seluruh tanaman patikan cina 1 genggam; Air 1 cangkir, Campuran ditumbuk; ditambah air dan dididihkan sampai diperoleh secangkir; disaring, Bayi umur 5-7 bulan; 1 sendok teh/jam; Anak umur 1-2 tahun; diminum 2 kali sehari; 2 sendok makan; Dewasa; sehari minum 3 kali; 1/2 cangkir.",
    ],
  },
  {
    id: 10,
    nama: "Kumis Kucing",
    imgUrl: "kumisKucing.png",
    namaLatin: "Orthosiphon stamineus Benth",
    khasiat: "Susah Kencing, Batu Ginjal, Kencing Manis, Sakit Pinggang",
    ramuan: [
      "Susah kencing : Daun kumis kucing segar 1/4 genggam; Air 1 gelas, Direbus hingga memperoleh cairan 1/2 gelas, Diminum setiap hari 2 kali dan tiap kali minum 1/2 gelas. ",
      "Batu ginjal : Herba kumis kucing 6 g; Herba meniran 7 pohon; Air 110 ml, Dibuat infus, Diminum 2 kali sehari; tiap kali minum 100 ml.",
      "Kencing manis : Daun kumis kucing 20 helai; Daun sambiloto 20 helai; Air 110 ml, Dibuat infus, Diminum 1 kali sehari; 100 ml. ",
      "Sakit pinggang : Daun kumis kucing segar 1 genggam; Kulit batang pepaya seluas 4 cm2; Air 110 ml, Dibuat infus, Diminum 1 kali sehari 100 ml.",
    ],
  },
  {
    id: 11,
    nama: "Kemangi",
    namaLatin: "Ocimum basilicum L",
    imgUrl: "kemangi.png",
    khasiat: "Perut KemBung",
    ramuan: [
      "Perut kembung : Daun kemangi secukupnya, Dicuci bersih, Dimakan sebagai lalapan.",
    ],
  },
  {
    id: 12,
    nama: "Kayu Manis",
    namaLatin: "Cynamomum aromaticum Nees",
    imgUrl: "kayuManis.jpg",
    khasiat: "Mencret",
    ramuan: [
      "Mencret : Kayu manis(Padang)3 g; Buah kayu ules 2 g; Rasuk angin 2 g; Rimpang kencur segar 8 g; Ketumbar 3 g; Jintan hitam 2 g; Mungsi 2 g; Rimpang lempuyang 10 g; Pulosari 2 g; Buah adas 2 g; Biji kedaung 4 butir; Air sedikit, Dipipis hingga menjadi pasta, Ditapalkan di seluruh bagian perut; dan pakailah gurita. ",
    ],
  },
  {
    id: 13,
    nama: "Lidah Buaya",
    namaLatin: "Aloe vera Linn",
    imgUrl: "lidahBuaya.jpg",
    khasiat:
      "Luka terbakar dan tersiram air panas (yang ringan), Penyubur rambut",
    ramuan: [
      "Penyubur rambut: Daun lidah buaya segar secukupnya dibelah, diambil bagian dalam yang rupanya seperti agar-agar, digosokkan ke kulit kepala sesudah mandi sore, kemudian dibungkus dengan kain, keesokan harinya rambut dicuci. Dipakai setiap hari selama 3 bulan untuk mencapai hasil yang memuaskan.",
      "Luka terbakar dan tersiram air panas (yang ringan): Daun dicuci bersih, ambil bagian dalamnya, tempelkan pada bagian tubuh yang terkena api/air panas. c. Bisul: Daun dilumatkan ditambah sedikit garam, tempelkan pada bisulnya.",
    ],
  },
];

export default tanamans;
