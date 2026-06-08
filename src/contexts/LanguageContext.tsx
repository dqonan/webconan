import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ID" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ID: {
    nav_philosophy: "Filosofi",
    nav_exhibition: "Pameran",
    nav_consultation: "Konsultasi",
    nav_store: "Toko",
    hero_digital_craftsmanship: "Digital Craftsmanship",
    hero_grow_together: "tumbuh bersama",
    hero_your_future: "masa depanmu",
    hero_desc:
      "Membentuk pengalaman digital yang beresonansi. Pendekatan kami menggabungkan estetika dengan teknik presisi, tidak menyisakan ruang untuk hal biasa.",
    hero_explore: "Jelajahi Produk",
    hero_consult: "Mulai Konsultasi",
    hero_scroll: "Scroll",
    phil_identity: "Identity",
    phil_title_1: "Obsesi terhadap",
    phil_title_2: "Kesempurnaan",
    phil_desc:
      "Setiap piksel diperhitungkan, setiap baris kode memiliki tujuan. Kami menolak hasil standar kecerdasan buatan (AI) secara umum atau templat massal. Ini adalah wujud nyata dari ketekunan dan sifat perfeksionis.",
    phil_principle_01: "Principle 01",
    phil_creativity: "Kreativitas Murni",
    phil_principle_02: "Principle 02",
    phil_precision: "Ketelitian",
    phil_capability: "Capability",
    phil_dev: "Pengembangan",
    phil_archive: "The Archive",
    phil_archive_title: "Wadah Karya & Imajinasi",
    phil_explore_archive: "Explore Archive",
    store_exhibition: "Exhibition",
    store_title_1: "Produk & Aset",
    store_title_2: "Eksklusif",
    store_view_all: "Lihat Keseluruhan Koleksi",
    store_new_release: "Rilis Terbaru",
    store_explore: "Mulai Eksplorasi",
    store_demo: "Demo Langsung",
    store_acquire: "Akuisisi",
    contact_consultation: "Consultation",
    contact_title_1: "Mari Ciptakan",
    contact_title_2: "Sesuatu yang",
    contact_title_3: "Spektakuler.",
    contact_desc:
      "Buka diskusi. Setiap karya dimulai dengan dialog yang bermakna. Silakan hubungi kami untuk inkuiri proyek, kolaborasi, maupun sekadar menyapa.",
    contact_direct_email: "Email Langsung",
    contact_studio_loc: "Lokasi Studio",
    contact_remote_only: "(Remote Global Khusus Undangan)",
    contact_form_name: "Identitas",
    contact_form_name_ph: "Nama Anda",
    contact_form_email: "Kontak Surel",
    contact_form_email_ph: "nama@perusahaan.com",
    contact_form_message: "Gagasan Singkat",
    contact_form_message_ph: "Ceritakan proyek Anda...",
    contact_form_submit: "Kirim Proposal Eksekutif",
    contact_form_upload: "Unggah Dokumen",
    contact_form_upload_ph:
      "Pilih file (TXT, MD, PDF, DOCX, JPG, PNG, ZIP, RAR)",
    contact_form_upload_selected: "File:",
    contact_form_success_title: "Proposal Terkirim",
    contact_form_success_desc:
      "Kami telah menerima pesan dan dokumen Anda. Tim kami akan segera meninjaunya dan menghubungi Anda kembali.",
    footer_copyright: "Hak Cipta Dilindungi.",
    footer_architect: "Arsitek Seni Digital.",
    skip_to_main: "Lewati ke konten utama",
    nav_archive: "Arsip",
    nav_reviews: "Ulasan",
    archive_section_title: "Arsip",
    archive_title_1: "Eksplorasi &",
    archive_title_2: "Jurnal Visual",
    archive_read: "Baca Selengkapnya",
    reviews_section_title: "Ulasan",
    reviews_title_1: "Suara dari",
    reviews_title_2: "Klien Kami",
    reviews_client: "Klien Eksekutif",
    contact_address_line1: "Desa Tanjungtani, Kecamatan Prambon,",
    contact_address_line2: "Kabupaten Nganjuk, Propinsi Jawa Timur.",
    contact_address_line3: "Kode Pos 64484.",
    contact_map_link: "Buka di Google Maps",

    // Sponsors
    sponsors_trusted_by: "DIDUKUNG & DIBERDAYAKAN OLEH",

    // Data store
    store_prod_1_title: "Logic Interface V1",
    store_prod_1_cat: "Aplikasi Web",
    store_prod_1_desc:
      "Sistem pengelolaan aset dengan balutan estetika brutalisme yang sangat fungsional.",
    store_prod_2_title: "Cinematic Frame Pack",
    store_prod_2_cat: "Aset UX/UI Desain",
    store_prod_2_desc:
      "Kumpulan komponen antarmuka presisi untuk kreator yang menganut standar ketelitian.",
    store_prod_3_title: "Creative Mastery",
    store_prod_3_cat: "Seri Edukasi",
    store_prod_3_desc:
      "Seri video mendalam mengenai alur kerja tata letak dengan standar spesifikasi mutlak.",
    store_prod_4_title: "NARRATA",
    store_prod_4_cat: "Aplikasi Web",
    store_prod_4_desc:
      "Aplikasi komprehensif eksklusif. Format data tersedia dalam paket terkompresi ZIP.",
    store_type_premium: "Premium",
    store_type_trial: "Uji Coba",

    // Data archive
    archive_item_1_title: "Minimalisme Web Arsitektur",
    archive_item_1_cat: "Artikel",
    archive_item_2_title: "Tipografi Masa Depan",
    archive_item_2_cat: "Eksplorasi",
    archive_item_3_title: "Ruang Interaktif",
    archive_item_3_cat: "Tata Letak Video",
    archive_item_4_title: "Seni Digital Craftsmanship",
    archive_item_4_cat: "Artikel",
    archive_item_4_content_title:
      "Tetap Produktif di Usia Senja: Ketika Pengalaman Hidup Bertemu Kecerdasan Buatan",
    archive_item_4_content_p1:
      "Di tengah laju perubahan teknologi yang begitu cepat, banyak orang menganggap usia senja sebagai akhir dari produktivitas. Dunia kerja dianggap semakin muda, semakin digital, dan semakin sulit diikuti oleh generasi yang tumbuh tanpa teknologi modern. Namun kenyataannya, perkembangan kecerdasan buatan (Artificial Intelligence/AI) justru membuka peluang baru bagi generasi senior untuk tetap relevan, produktif, dan bernilai secara ekonomi maupun sosial.",
    archive_item_4_content_p2:
      "Hari ini, produktivitas tidak lagi sepenuhnya ditentukan oleh usia, gelar akademik, atau kemampuan teknis tingkat tinggi. Yang semakin dibutuhkan adalah kemampuan beradaptasi, pengalaman membaca situasi, kreativitas mencari solusi, dan kemauan untuk terus belajar. Di sinilah banyak individu senior sebenarnya memiliki keunggulan yang tidak dimiliki generasi muda.",
    archive_item_4_content_h1:
      "Pengalaman Adalah Modal yang Tidak Bisa Digantikan Mesin",
    archive_item_4_content_p3:
      "Banyak orang sukses tidak lahir dari jalur akademis sempurna. Sebagian justru tumbuh dari kehidupan yang keras, bekerja sejak usia muda, jatuh bangun menghadapi pasar, dan belajar langsung dari pengalaman nyata. Mereka bertahan bukan karena teori yang rumit, melainkan karena ketekunan, keberanian mencoba, dan kemampuan membaca peluang.",
    archive_item_4_content_p4:
      "Dalam dunia modern, kualitas seperti ini dikenal sebagai grit—ketangguhan untuk terus bergerak meski keadaan berubah.",
    archive_item_4_content_p5:
      "Di usia senja, pengalaman panjang tersebut menjadi aset yang sangat berharga. Individu senior biasanya memiliki: \n• intuisi bisnis yang lebih matang, \n• kemampuan memahami karakter manusia, \n• kestabilan emosional, \n• dan perspektif jangka panjang yang sulit dipelajari secara instan.",
    archive_item_4_content_p6:
      "Masalahnya bukan pada kemampuan mereka, melainkan pada perubahan alat dan sistem kerja yang kini semakin digital. Di titik inilah AI mulai memainkan peran penting.",
    archive_item_4_content_h2:
      "AI Bukan Pengganti Manusia, Melainkan Penguat Kemampuan",
    archive_item_4_content_p7:
      "Banyak orang masih melihat AI sebagai teknologi rumit yang hanya cocok untuk programmer atau perusahaan besar. Padahal saat ini, AI sudah berkembang menjadi alat bantu yang sangat praktis dan mudah digunakan oleh siapa saja, termasuk generasi senior.",
    archive_item_4_content_p8:
      "Dengan bantuan AI, seseorang kini dapat: \n• membuat materi promosi, \n• menulis artikel, \n• menyusun proposal, \n• melakukan riset pasar, \n• mengelola jadwal, \n• membuat desain sederhana, \n• bahkan memproduksi video dan konten digital.",
    archive_item_4_content_p9:
      "Pekerjaan yang dahulu membutuhkan banyak tenaga kini dapat diselesaikan lebih cepat dan efisien. Seorang pensiunan misalnya, kini dapat membuka jasa konsultasi berbasis pengalaman hidupnya, lalu menggunakan AI untuk membantu menulis materi presentasi, membuat konten media sosial, atau menjawab kebutuhan administrasi. Seorang pelaku usaha kecil dapat memanfaatkan AI untuk membuat iklan digital tanpa harus menyewa tim kreatif mahal.",
    archive_item_4_content_p10:
      'Teknologi tidak lagi menjadi penghalang usia. Justru teknologi mulai menjadi "partner kerja" baru bagi mereka yang memiliki pengalaman tetapi terbatas tenaga fisik atau kemampuan teknis.',
    archive_item_4_content_h3: "Keunggulan Generasi Senior dalam Membaca Pasar",
    archive_item_4_content_p11:
      "Di era digital, banyak orang mampu menguasai teknologi, tetapi tidak semuanya mampu memahami manusia. Padahal pasar pada dasarnya adalah perilaku manusia. Generasi senior memiliki kelebihan dalam hal ini. Pengalaman puluhan tahun menghadapi perubahan ekonomi, pola konsumsi, dan dinamika sosial membuat mereka lebih peka membaca kebutuhan nyata masyarakat.",
    archive_item_4_content_p12:
      "Sering kali keputusan bisnis terbaik tidak lahir dari grafik atau algoritma semata, melainkan dari intuisi yang terbentuk melalui pengalaman panjang. AI dapat membantu mempercepat pekerjaan teknis, tetapi pengalaman manusialah yang menentukan arah keputusan. Kombinasi keduanya menciptakan kekuatan baru yang sangat potensial.",
    archive_item_4_content_h4: "Era Baru: Longevity Economy",
    archive_item_4_content_p13:
      "Dunia saat ini mulai memasuki era longevity economy, yaitu kondisi ketika populasi usia lanjut tetap aktif, sehat, produktif, dan menjadi kekuatan ekonomi baru. Fenomena ini terjadi hampir di seluruh dunia. Harapan hidup meningkat, kualitas kesehatan membaik, dan banyak individu senior masih memiliki semangat berkarya yang tinggi. Mereka tidak ingin hanya menjadi penonton di masa tua.",
    archive_item_4_content_p14:
      "Sebaliknya, mereka ingin: \n• tetap mandiri, \n• tetap berkarya, \n• tetap menghasilkan, \n• dan tetap memiliki makna sosial.\nAI memberi kesempatan besar untuk mewujudkan hal tersebut.",
    archive_item_4_content_p15:
      "Bahkan dalam banyak kasus, usia matang justru menjadi keunggulan. Ketika generasi muda unggul dalam kecepatan teknologi, generasi senior unggul dalam pengalaman, kedewasaan berpikir, dan kemampuan membangun relasi yang lebih stabil. Kolaborasi antara pengalaman manusia dan kecerdasan buatan inilah yang akan menjadi model produktivitas baru di masa depan.",
    archive_item_4_content_h5: "Masa Depan Tidak Hanya Milik Generasi Muda",
    archive_item_4_content_p16:
      "Kita sering terlalu fokus pada narasi bahwa masa depan adalah milik anak muda. Padahal masa depan juga milik mereka yang mampu beradaptasi. Usia senja bukan akhir dari kontribusi. Justru bagi banyak orang, masa ini dapat menjadi fase paling matang untuk menghasilkan karya yang bermakna, karena ditopang oleh pengalaman hidup yang panjang dan pemahaman yang lebih dalam tentang kehidupan.",
    archive_item_4_content_p17:
      "Teknologi AI tidak harus ditakuti. Ia dapat menjadi alat pemberdayaan yang memperpanjang relevansi, produktivitas, dan kemandirian seseorang.",
    archive_item_4_content_p18:
      "Pada akhirnya, produktivitas di usia senja bukan tentang bersaing dalam kecepatan dengan generasi muda. Produktivitas adalah tentang bagaimana pengalaman hidup, kreativitas, dan teknologi dapat berjalan bersama untuk terus menciptakan nilai. Dan di era AI seperti sekarang, kesempatan itu terbuka lebih luas daripada sebelumnya.",

    // Data reviews
    review_1_content:
      "Sebuah mahakarya absolut. Perhatian cermat terhadap detail dan tanpa kompromi pada kualitas telah meningkatkan citra digital kami ke standar kelas dunia. Benar-benar arsitek masa depan digital.",
    review_1_author: "Alexander Rothschild",
    review_1_role: "CEO, Quantum Tech",
    review_2_content:
      "Mereka tidak hanya membuat situs web; mereka merancang pengalaman digital yang beresonansi. Tingkat konversi kami berlipat ganda dalam hitungan minggu setelah peluncuran. Perfeksionisme terlihat jelas di setiap piksel.",
    review_2_author: "Isabella Sterling",
    review_2_role: "Direktur Kreatif, VANC",
    review_3_content:
      "Bekerja bersama mereka adalah sebuah pengalaman yang membuka mata. Tingkat inovasi, desain artistik, dan integritas struktural yang mereka bawa ke meja tidak tertandingi di industri ini.",
    review_3_author: "Jonathan Pierce",
    review_3_role: "Pendiri, Apex Real Estate",
  },
  EN: {
    nav_philosophy: "Philosophy",
    nav_exhibition: "Exhibition",
    nav_consultation: "Consultation",
    nav_store: "Store",
    hero_digital_craftsmanship: "Digital Craftsmanship",
    hero_grow_together: "grow together",
    hero_your_future: "your future",
    hero_desc:
      "Shaping digital experiences that resonate. Our approach merges aesthetics with precision engineering, leaving no room for the ordinary.",
    hero_explore: "Explore Products",
    hero_consult: "Start Consultation",
    hero_scroll: "Scroll",
    phil_identity: "Identity",
    phil_title_1: "Obsession with",
    phil_title_2: "Perfection",
    phil_desc:
      "Every pixel counts, every line of code has a purpose. We reject generic AI output or mass templates. This is the true manifestation of diligence and perfectionism.",
    phil_principle_01: "Principle 01",
    phil_creativity: "Pure Creativity",
    phil_principle_02: "Principle 02",
    phil_precision: "Precision",
    phil_capability: "Capability",
    phil_dev: "Development",
    phil_archive: "The Archive",
    phil_archive_title: "Vessel of Work & Imagination",
    phil_explore_archive: "Explore Archive",
    store_exhibition: "Exhibition",
    store_title_1: "Exclusive",
    store_title_2: "Products & Assets",
    store_view_all: "View Entire Collection",
    store_new_release: "New Release",
    store_explore: "Start Exploration",
    store_demo: "Live Demo",
    store_acquire: "Acquire",
    contact_consultation: "Consultation",
    contact_title_1: "Let's Create",
    contact_title_2: "Something",
    contact_title_3: "Spectacular.",
    contact_desc:
      "Open a discussion. Every masterpiece starts with a meaningful dialogue. Please contact us for project inquiries, collaborations, or just to say hello.",
    contact_direct_email: "Direct Email",
    contact_studio_loc: "Studio Location",
    contact_remote_only: "(Invite-Only Global Remote)",
    contact_form_name: "Identity",
    contact_form_name_ph: "Your Name",
    contact_form_email: "Email Contact",
    contact_form_email_ph: "name@company.com",
    contact_form_message: "Brief Idea",
    contact_form_message_ph: "Tell us about your project...",
    contact_form_submit: "Send Executive Proposal",
    contact_form_upload: "Upload Document",
    contact_form_upload_ph:
      "Choose file (TXT, MD, PDF, DOCX, JPG, PNG, ZIP, RAR)",
    contact_form_upload_selected: "File:",
    contact_form_success_title: "Proposal Submitted",
    contact_form_success_desc:
      "We have received your message and document. Our team will review it shortly and get back to you.",
    footer_copyright: "All Rights Reserved.",
    footer_architect: "Digital Art Architect.",
    skip_to_main: "Skip to main content",
    nav_archive: "Archive",
    nav_reviews: "Reviews",
    archive_section_title: "Archive",
    archive_title_1: "Exploration &",
    archive_title_2: "Visual Journal",
    archive_read: "Read More",
    reviews_section_title: "Reviews",
    reviews_title_1: "Voices from",
    reviews_title_2: "Our Clients",
    reviews_client: "Executive Client",
    contact_address_line1: "Tanjungtani Village, Prambon District,",
    contact_address_line2: "Nganjuk Regency, East Java Province.",
    contact_address_line3: "Postal Code 64484.",
    contact_map_link: "Open in Google Maps",

    // Sponsors
    sponsors_trusted_by: "ENDORSES & SUPPORTED BY",

    // Data store
    store_prod_1_title: "Logic Interface V1",
    store_prod_1_cat: "Web Application",
    store_prod_1_desc:
      "Asset management system wrapped in highly functional brutalist aesthetics.",
    store_prod_2_title: "Cinematic Frame Pack",
    store_prod_2_cat: "UX/UI Design Assets",
    store_prod_2_desc:
      "A collection of precision interface components for creators adhering to exacting standards.",
    store_prod_3_title: "Creative Mastery",
    store_prod_3_cat: "Educational Series",
    store_prod_3_desc:
      "In-depth video series on layout workflows with absolute specification standards.",
    store_prod_4_title: "NARRATA",
    store_prod_4_cat: "Web Application",
    store_prod_4_desc:
      "Exclusive comprehensive application. Data format is available in a ZIP compressed package.",
    store_type_premium: "Premium",
    store_type_trial: "Trial",

    // Data archive
    archive_item_1_title: "Minimalism in Web Architecture",
    archive_item_1_cat: "Article",
    archive_item_2_title: "The Typography of Tomorrow",
    archive_item_2_cat: "Exploration",
    archive_item_3_title: "Interactive Space",
    archive_item_3_cat: "Video Layout",
    archive_item_4_title: "The Digital Craftsmanship",
    archive_item_4_cat: "Article",
    archive_item_4_content_title:
      "Staying Productive in Old Age: When Life Experience Meets Artificial Intelligence",
    archive_item_4_content_p1:
      "Amidst the rapid pace of technological change, many consider old age to be the end of productivity. The working world is perceived as increasingly young, digital, and difficult for a generation that grew up without modern technology to keep up with. In reality, the development of Artificial Intelligence (AI) actually opens up new opportunities for the senior generation to remain relevant, productive, and economically and socially valuable.",
    archive_item_4_content_p2:
      "Today, productivity is no longer entirely determined by age, academic degrees, or high-level technical skills. What is increasingly needed is the ability to adapt, experience in reading situations, creativity in finding solutions, and the willingness to keep learning. This is where many senior individuals actually have an advantage that the younger generation does not.",
    archive_item_4_content_h1:
      "Experience is Capital That Cannot Be Replaced by Machines",
    archive_item_4_content_p3:
      "Many successful people are not born from a perfect academic path. Some actually grow from a hard life, working since a young age, experiencing ups and downs in the market, and learning directly from real experience. They survive not because of complex theories, but because of perseverance, the courage to try, and the ability to read opportunities.",
    archive_item_4_content_p4:
      "In the modern world, this quality is known as grit—the resilience to keep moving even when circumstances change.",
    archive_item_4_content_p5:
      "In old age, this long experience becomes a very valuable asset. Senior individuals typically have: \n• more mature business intuition, \n• the ability to understand human character, \n• emotional stability, \n• and a long-term perspective that is difficult to learn instantly.",
    archive_item_4_content_p6:
      "The problem is not their ability, but the changes in tools and work systems that are now increasingly digital. This is where AI begins to play an important role.",
    archive_item_4_content_h2:
      "AI is Not a Human Replacement, But a Capability Enhancer",
    archive_item_4_content_p7:
      "Many people still see AI as a complex technology suitable only for programmers or large companies. Even though today, AI has evolved into a very practical tool that is easy to use by anyone, including the senior generation.",
    archive_item_4_content_p8:
      "With the help of AI, someone can now: \n• create promotional materials, \n• write articles, \n• draft proposals, \n• conduct market research, \n• manage schedules, \n• create simple designs, \n• and even produce videos and digital content.",
    archive_item_4_content_p9:
      "Work that previously required a lot of manual labor can now be completed faster and more efficiently. A retiree, for example, can now open a consulting service based on their life experience, then use AI to help write presentation materials, create social media content, or answer administrative needs. A small business owner can use AI to create digital ads without having to hire an expensive creative team.",
    archive_item_4_content_p10:
      'Technology is no longer a barrier to age. Instead, technology is starting to become a new "working partner" for those who have experience but are limited in physical strength or technical skills.',
    archive_item_4_content_h3:
      "The Advantage of the Senior Generation in Reading the Market",
    archive_item_4_content_p11:
      "In the digital era, many people can master technology, but not everyone can understand humans. Even though the market is essentially human behavior. The senior generation has an advantage in this regard. Decades of experience dealing with economic changes, consumption patterns, and social dynamics make them more sensitive to reading the real needs of society.",
    archive_item_4_content_p12:
      "Often, the best business decisions do not come from graphs or algorithms alone, but from intuition formed through long experience. AI can help speed up technical work, but it is human experience that determines the direction of decisions. The combination of both creates a new, highly potential force.",
    archive_item_4_content_h4: "A New Era: The Longevity Economy",
    archive_item_4_content_p13:
      "The world today is beginning to enter the era of the longevity economy, a condition where the elderly population remains active, healthy, productive, and becomes a new economic force. This phenomenon occurs almost all over the world. Life expectancy increases, health quality improves, and many senior individuals still have a high spirit to work. They do not want to just be spectators in old age.",
    archive_item_4_content_p14:
      "Instead, they want to: \n• remain independent, \n• continue working, \n• keep producing, \n• and continue to have social meaning.\nAI provides a great opportunity to realize this.",
    archive_item_4_content_p15:
      "Even in many cases, mature age actually becomes an advantage. When the younger generation excels in technological speed, the senior generation excels in experience, maturity of thought, and the ability to build more stable relationships. Collaboration between human experience and artificial intelligence is what will become the new productivity model in the future.",
    archive_item_4_content_h5:
      "The Future Does Not Only Belong to the Younger Generation",
    archive_item_4_content_p16:
      "We are often too focused on the narrative that the future belongs to the young. Even though the future also belongs to those who are able to adapt. Old age is not the end of contribution. Exactly for many people, this period can be the most mature phase to produce meaningful work, because it is supported by long life experience and a deeper understanding of life.",
    archive_item_4_content_p17:
      "AI technology should not be feared. It can be a tool of empowerment that extends one's relevance, productivity, and independence.",
    archive_item_4_content_p18:
      "Ultimately, productivity in old age is not about competing in speed with the younger generation. Productivity is about how life experience, creativity, and technology can walk together to continue creating value. And in an AI era like today, that opportunity is more open than ever before.",

    // Data reviews
    review_1_content:
      "An absolute masterpiece. The meticulous attention to detail and zero compromise on quality has elevated our digital presence to a world-class standard. Truly an architect of the digital future.",
    review_1_author: "Alexander Rothschild",
    review_1_role: "CEO, Quantum Tech",
    review_2_content:
      "They don't just build websites; they craft digital experiences that resonate. Our conversion rates doubled within weeks of the new launch. The perfectionism is evident in every pixel.",
    review_2_author: "Isabella Sterling",
    review_2_role: "Creative Director, VANC",
    review_3_content:
      "Working with them was an eye-opener. The level of innovation, artistic design, and structural integrity they bring to the table is unmatched in the industry.",
    review_3_author: "Jonathan Pierce",
    review_3_role: "Founder, Apex Real Estate",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ID");

  const t = (key: string) => {
    return (
      translations[language][key as keyof (typeof translations)["ID"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
