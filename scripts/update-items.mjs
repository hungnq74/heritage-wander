/**
 * Updates the items arrays in all heritage data files.
 * Uses bracket-counting to find exact start/end of each items block.
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "../src/lib/data");

// ─── New items blueprints ───────────────────────────────────────────────────

const ITEMS = {
  // ── HO CHI MINH CITY ──────────────────────────────────────────────────────
  "hcmc-chua-giac-lam": `[
      {
        id: "hcmc-giac-lam-tuong-la-han",
        name: "Tượng La Hán cổ",
        nameEn: "Ancient Arhat Statue",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-giac-lam",
        sourceNodeName: "Chùa Giác Lâm",
        knowledgeHolderName: "Đại đức Thích Minh Tâm",
        image: "https://picsum.photos/seed/giac-lam-1/400/400",
        rarity: "Rare",
        description: "Một trong 18 bức tượng La Hán bằng gỗ mít cổ, được chạm khắc tinh xảo từ thế kỷ 18.",
        descriptionEn: "One of 18 ancient jackwood Arhat statues intricately carved in the 18th century.",
        dropRate: 0.3,
      },
      {
        id: "hcmc-giac-lam-den-long",
        name: "Đèn lồng chùa cổ",
        nameEn: "Antique Temple Lantern",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-giac-lam",
        sourceNodeName: "Chùa Giác Lâm",
        knowledgeHolderName: "Đại đức Thích Minh Tâm",
        image: "https://picsum.photos/seed/giac-lam-2/400/400",
        rarity: "Common",
        description: "Đèn lồng đỏ truyền thống thắp sáng chánh điện chùa Giác Lâm suốt hơn hai thế kỷ.",
        descriptionEn: "Traditional red lanterns illuminating Giac Lam's main hall for over two centuries.",
        dropRate: 0.55,
      },
      {
        id: "hcmc-giac-lam-hoanh-phi",
        name: "Hoành phi chữ Hán",
        nameEn: "Chinese Calligraphy Panel",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-chua-giac-lam",
        sourceNodeName: "Chùa Giác Lâm",
        knowledgeHolderName: "Đại đức Thích Minh Tâm",
        image: "https://picsum.photos/seed/giac-lam-3/400/400",
        rarity: "Epic",
        description: "Hoành phi bằng gỗ sơn son thếp vàng khắc chữ Hán, là bảo vật văn hoá của chùa Giác Lâm.",
        descriptionEn: "Gold-leafed lacquered wood panel inscribed with classical Chinese characters.",
        dropRate: 0.1,
      },
      {
        id: "hcmc-giac-lam-chuong-dong",
        name: "Chuông đồng 1744",
        nameEn: "Founding Bronze Bell",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-giac-lam",
        sourceNodeName: "Chùa Giác Lâm",
        knowledgeHolderName: "Đại đức Thích Minh Tâm",
        image: "https://picsum.photos/seed/giac-lam-4/400/400",
        rarity: "Legendary",
        description: "Chiếc chuông đồng đúc năm 1744, âm thanh vẫn vang vọng mỗi sáng sớm và chiều tà như hơn 280 năm trước.",
        descriptionEn: "The bronze bell cast in 1744, whose resonant tone still rings each dawn and dusk as it did 280 years ago.",
        dropRate: 0.04,
      },
    ]`,

  "hcmc-lang-ong-ba-chieu": `[
      {
        id: "hcmc-lang-ong-dia-huong",
        name: "Đĩa hương cúng",
        nameEn: "Ritual Incense Plate",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-lang-ong-ba-chieu",
        sourceNodeName: "Lăng Ông Bà Chiểu",
        knowledgeHolderName: "Ông Nguyễn Văn Đức",
        image: "https://picsum.photos/seed/lang-ong-1/400/400",
        rarity: "Common",
        description: "Đĩa sứ dùng đặt nhang trầm trong các buổi lễ cúng Tả Quân Lê Văn Duyệt.",
        descriptionEn: "Porcelain plate used to hold agarwood incense during ritual offerings to Marshal Le Van Duyet.",
        dropRate: 0.55,
      },
      {
        id: "hcmc-lang-ong-huong-an",
        name: "Hương án đỏ",
        nameEn: "Red Offering Altar",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-lang-ong-ba-chieu",
        sourceNodeName: "Lăng Ông Bà Chiểu",
        knowledgeHolderName: "Ông Nguyễn Văn Đức",
        image: "https://picsum.photos/seed/lang-ong-2/400/400",
        rarity: "Rare",
        description: "Hương án gỗ sơn son chạm rồng phượng, trung tâm của nghi lễ cúng tế hằng năm.",
        descriptionEn: "Dragon-carved lacquered wooden altar, centerpiece of the annual offering ceremony.",
        dropRate: 0.28,
      },
      {
        id: "hcmc-lang-ong-sac-phong",
        name: "Biển sắc phong",
        nameEn: "Imperial Decree Plaque",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-lang-ong-ba-chieu",
        sourceNodeName: "Lăng Ông Bà Chiểu",
        knowledgeHolderName: "Ông Nguyễn Văn Đức",
        image: "https://picsum.photos/seed/lang-ong-3/400/400",
        rarity: "Epic",
        description: "Bản khắc sắc phong của vua Minh Mạng phong tặng Lê Văn Duyệt tước vị cao nhất sau khi ông mất.",
        descriptionEn: "Inscribed copy of Emperor Minh Mang's posthumous imperial decree conferring the highest rank on Le Van Duyet.",
        dropRate: 0.09,
      },
    ]`,

  "hcmc-chua-ngoc-hoang": `[
      {
        id: "hcmc-ngoc-hoang-rua-phong-sinh",
        name: "Rùa phóng sinh",
        nameEn: "Release Turtle",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-ngoc-hoang",
        sourceNodeName: "Chùa Ngọc Hoàng",
        knowledgeHolderName: "Bà Trần Thị Mai",
        image: "https://picsum.photos/seed/ngoc-hoang-1/400/400",
        rarity: "Common",
        description: "Rùa nhỏ được phóng sinh trong hồ chùa, biểu tượng của lòng từ bi và cầu phúc.",
        descriptionEn: "A small turtle released into the temple pond, symbolizing compassion and blessing.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-ngoc-hoang-tuong-dat-nung",
        name: "Tượng Ngọc Hoàng đất nung",
        nameEn: "Jade Emperor Terracotta Figurine",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-ngoc-hoang",
        sourceNodeName: "Chùa Ngọc Hoàng",
        knowledgeHolderName: "Bà Trần Thị Mai",
        image: "https://picsum.photos/seed/ngoc-hoang-2/400/400",
        rarity: "Rare",
        description: "Tượng Ngọc Hoàng bằng đất nung màu nâu đỏ, được làm theo lối thủ công truyền thống từ thế kỷ 19.",
        descriptionEn: "Terracotta Jade Emperor figurine in russet clay, handcrafted in the traditional style of the 19th century.",
        dropRate: 0.3,
      },
      {
        id: "hcmc-ngoc-hoang-tro-nhang",
        name: "Tro nhang may mắn",
        nameEn: "Lucky Incense Ash",
        ichDomain: "ritual",
        sourceNodeId: "hcmc-chua-ngoc-hoang",
        sourceNodeName: "Chùa Ngọc Hoàng",
        knowledgeHolderName: "Bà Trần Thị Mai",
        image: "https://picsum.photos/seed/ngoc-hoang-3/400/400",
        rarity: "Common",
        description: "Một nhúm tro nhang từ lò hương trước điện Ngọc Hoàng, được tín đồ mang về cầu tài lộc.",
        descriptionEn: "A pinch of ash from the incense burner before the Jade Emperor altar, carried home for good fortune.",
        dropRate: 0.6,
      },
    ]`,

  "hcmc-dinh-minh-huong": `[
      {
        id: "hcmc-minh-huong-son-mai",
        name: "Sơn mài Trung Hoa",
        nameEn: "Chinese Lacquerware",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-dinh-minh-huong",
        sourceNodeName: "Đình Minh Hương Gia Thạnh",
        knowledgeHolderName: "Ông Lâm Văn Bình",
        image: "https://picsum.photos/seed/minh-huong-1/400/400",
        rarity: "Epic",
        description: "Bức tranh sơn mài khắc họa thương thuyền Minh Hương vượt biển, lưu giữ ký ức cộng đồng người Hoa đến Sài Gòn.",
        descriptionEn: "Lacquer painting depicting the Minh Huong trading vessels crossing the sea, preserving the memory of the Chinese community's arrival in Saigon.",
        dropRate: 0.1,
      },
      {
        id: "hcmc-minh-huong-nhang-tram",
        name: "Nhang trầm Minh Hương",
        nameEn: "Minh Huong Agarwood Incense",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-dinh-minh-huong",
        sourceNodeName: "Đình Minh Hương Gia Thạnh",
        knowledgeHolderName: "Ông Lâm Văn Bình",
        image: "https://picsum.photos/seed/minh-huong-2/400/400",
        rarity: "Rare",
        description: "Nhang trầm hương làm theo công thức gia truyền của người Minh Hương, kết hợp kỹ thuật pha chế Hoa–Việt độc đáo.",
        descriptionEn: "Agarwood incense crafted following the Minh Huong hereditary formula, uniquely blending Chinese and Vietnamese techniques.",
        dropRate: 0.28,
      },
      {
        id: "hcmc-minh-huong-gia-pha",
        name: "Tấm khắc gia phả",
        nameEn: "Genealogy Inscription Tablet",
        ichDomain: "oral-tradition",
        sourceNodeId: "hcmc-dinh-minh-huong",
        sourceNodeName: "Đình Minh Hương Gia Thạnh",
        knowledgeHolderName: "Ông Lâm Văn Bình",
        image: "https://picsum.photos/seed/minh-huong-3/400/400",
        rarity: "Legendary",
        description: "Phiến gỗ khắc tên các dòng họ Minh Hương từ thế kỷ 17, bằng chứng duy nhất còn lại về nguồn gốc cộng đồng.",
        descriptionEn: "Wooden tablet inscribed with Minh Huong clan names from the 17th century, the sole surviving evidence of the community's origins.",
        dropRate: 0.04,
      },
      {
        id: "hcmc-minh-huong-hop-go",
        name: "Hộp gỗ chạm rồng phượng",
        nameEn: "Dragon-Phoenix Carved Box",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-dinh-minh-huong",
        sourceNodeName: "Đình Minh Hương Gia Thạnh",
        knowledgeHolderName: "Ông Lâm Văn Bình",
        image: "https://picsum.photos/seed/minh-huong-4/400/400",
        rarity: "Rare",
        description: "Hộp gỗ trắc chạm nổi hoa văn rồng phượng, dùng đựng đồ tế lễ trong đình Minh Hương Gia Thạnh.",
        descriptionEn: "Rosewood box with raised dragon-phoenix motifs, used to hold ritual offerings at Minh Huong Gia Thanh communal house.",
        dropRate: 0.25,
      },
    ]`,

  "hcmc-hat-boi": `[
      {
        id: "hcmc-hat-boi-mat-na",
        name: "Mặt nạ hí kịch",
        nameEn: "Opera Mask",
        ichDomain: "performing-arts",
        sourceNodeId: "hcmc-hat-boi",
        sourceNodeName: "Hát Bội Sài Gòn",
        knowledgeHolderName: "NSND Bạch Tuyết",
        image: "https://picsum.photos/seed/hat-boi-1/400/400",
        rarity: "Rare",
        description: "Mặt nạ sơn bột vẽ tay theo mẫu kép độc, biểu tượng nhân vật phản diện trong hát bội truyền thống.",
        descriptionEn: "Hand-painted powder mask in the style of a villain character, iconic in traditional tuong opera.",
        dropRate: 0.28,
      },
      {
        id: "hcmc-hat-boi-phuc-trang",
        name: "Phục trang tướng quân",
        nameEn: "General's Costume",
        ichDomain: "performing-arts",
        sourceNodeId: "hcmc-hat-boi",
        sourceNodeName: "Hát Bội Sài Gòn",
        knowledgeHolderName: "NSND Bạch Tuyết",
        image: "https://picsum.photos/seed/hat-boi-2/400/400",
        rarity: "Common",
        description: "Áo giáp và khăn đầu rau của nhân vật tướng quân, thêu chỉ vàng theo lối truyền thống Hát Bội.",
        descriptionEn: "Armor robe and headpiece of a general character, embroidered in gold thread in the traditional Hat Boi style.",
        dropRate: 0.55,
      },
      {
        id: "hcmc-hat-boi-kich-ban",
        name: "Kịch bản Hán Nôm",
        nameEn: "Classical Han-Nom Script",
        ichDomain: "oral-tradition",
        sourceNodeId: "hcmc-hat-boi",
        sourceNodeName: "Hát Bội Sài Gòn",
        knowledgeHolderName: "NSND Bạch Tuyết",
        image: "https://picsum.photos/seed/hat-boi-3/400/400",
        rarity: "Legendary",
        description: "Bản kịch chép tay bằng chữ Hán Nôm từ thế kỷ 19, hiện chỉ còn vài nghệ nhân cao tuổi đọc được.",
        descriptionEn: "A 19th-century handwritten Han-Nom script, now readable only by a handful of elderly artisans.",
        dropRate: 0.04,
      },
      {
        id: "hcmc-hat-boi-day-dao-thuong",
        name: "Dây đào thương",
        nameEn: "Character Silk Ribbon",
        ichDomain: "performing-arts",
        sourceNodeId: "hcmc-hat-boi",
        sourceNodeName: "Hát Bội Sài Gòn",
        knowledgeHolderName: "NSND Bạch Tuyết",
        image: "https://picsum.photos/seed/hat-boi-4/400/400",
        rarity: "Rare",
        description: "Dải lụa đỏ buộc eo nhân vật đào thương trong hát bội, mang ý nghĩa tượng trưng cho số phận bi thương.",
        descriptionEn: "Red silk ribbon tied at the waist of the tragic heroine in hat boi, symbolizing a sorrowful fate.",
        dropRate: 0.28,
      },
    ]`,

  "hcmc-ben-thanh": `[
      {
        id: "hcmc-ben-thanh-dong-tien-cu",
        name: "Đồng tiền chợ cũ",
        nameEn: "Old Market Coin",
        ichDomain: "culinary",
        sourceNodeId: "hcmc-ben-thanh",
        sourceNodeName: "Chợ Bến Thành",
        knowledgeHolderName: "Bà Nguyễn Thị Hoa",
        image: "https://picsum.photos/seed/ben-thanh-1/400/400",
        rarity: "Common",
        description: "Đồng xu Đông Dương từ thời Pháp thuộc, kỷ niệm từ khi chợ Bến Thành mới xây năm 1914.",
        descriptionEn: "Indochine coin from the French colonial era, a memento from when Ben Thanh Market was first built in 1914.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-ben-thanh-thuc-don-xua",
        name: "Tờ thực đơn xưa",
        nameEn: "Vintage Menu Card",
        ichDomain: "culinary",
        sourceNodeId: "hcmc-ben-thanh",
        sourceNodeName: "Chợ Bến Thành",
        knowledgeHolderName: "Bà Nguyễn Thị Hoa",
        image: "https://picsum.photos/seed/ben-thanh-2/400/400",
        rarity: "Common",
        description: "Tờ thực đơn viết tay của gian hàng ăn uống trong chợ những năm 1960, ghi món ăn Sài Gòn cổ điển.",
        descriptionEn: "Handwritten menu card from a 1960s food stall inside the market, listing classic Saigon dishes.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-ben-thanh-bien-hieu",
        name: "Biển hiệu hàng đặc sản",
        nameEn: "Specialty Vendor Sign",
        ichDomain: "culinary",
        sourceNodeId: "hcmc-ben-thanh",
        sourceNodeName: "Chợ Bến Thành",
        knowledgeHolderName: "Bà Nguyễn Thị Hoa",
        image: "https://picsum.photos/seed/ben-thanh-3/400/400",
        rarity: "Rare",
        description: "Biển gỗ sơn tay của gian hàng đặc sản lâu đời nhất chợ Bến Thành, truyền qua 4 đời gia đình.",
        descriptionEn: "Hand-painted wooden sign from Ben Thanh's oldest specialty stall, passed down through 4 generations.",
        dropRate: 0.28,
      },
    ]`,

  "hcmc-dinh-doc-lap": `[
      {
        id: "hcmc-dinh-doc-lap-ban-do",
        name: "Bản đồ tác chiến tầng hầm",
        nameEn: "Bunker War Room Map",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hcmc-dinh-doc-lap",
        sourceNodeName: "Dinh Độc Lập",
        knowledgeHolderName: "Ông Trần Quốc Hùng",
        image: "https://picsum.photos/seed/dinh-doc-lap-1/400/400",
        rarity: "Rare",
        description: "Bản đồ quân sự treo trong phòng tác chiến tầng hầm Dinh Độc Lập, ghi lại vị trí các mặt trận năm 1975.",
        descriptionEn: "Military map hung in the bunker war room of the Reunification Palace, marking front positions in 1975.",
        dropRate: 0.28,
      },
      {
        id: "hcmc-dinh-doc-lap-dien-thoai",
        name: "Máy điện thoại viên thông",
        nameEn: "Bunker Telephone",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hcmc-dinh-doc-lap",
        sourceNodeName: "Dinh Độc Lập",
        knowledgeHolderName: "Ông Trần Quốc Hùng",
        image: "https://picsum.photos/seed/dinh-doc-lap-2/400/400",
        rarity: "Common",
        description: "Máy điện thoại quân sự màu đen từ tầng hầm bí mật, kết nối trực tiếp với các đơn vị chiến trường.",
        descriptionEn: "Black military telephone from the secret basement, directly connected to field combat units.",
        dropRate: 0.55,
      },
      {
        id: "hcmc-dinh-doc-lap-huy-hieu",
        name: "Huy hiệu tổng thống",
        nameEn: "Presidential Badge",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hcmc-dinh-doc-lap",
        sourceNodeName: "Dinh Độc Lập",
        knowledgeHolderName: "Ông Trần Quốc Hùng",
        image: "https://picsum.photos/seed/dinh-doc-lap-3/400/400",
        rarity: "Epic",
        description: "Huy hiệu chức vụ mang huy hiệu Quốc gia Việt Nam Cộng Hoà, đúc bạc và vàng, dùng trong các nghi lễ quốc gia.",
        descriptionEn: "Official badge bearing the Republic of Vietnam emblem, cast in silver and gold, used in state ceremonies.",
        dropRate: 0.09,
      },
    ]`,

  "hcmc-bao-tang-chung-tich": `[
      {
        id: "hcmc-bao-tang-anh-phong-su",
        name: "Ảnh tư liệu phóng sự",
        nameEn: "War Documentary Photo",
        ichDomain: "oral-tradition",
        sourceNodeId: "hcmc-bao-tang-chung-tich",
        sourceNodeName: "Bảo tàng Chứng tích Chiến tranh",
        knowledgeHolderName: "Ông Phạm Văn Lộc",
        image: "https://picsum.photos/seed/bao-tang-1/400/400",
        rarity: "Rare",
        description: "Bản in ảnh đen trắng từ kho lưu trữ bảo tàng, ghi lại khoảnh khắc lịch sử trong chiến tranh Việt Nam.",
        descriptionEn: "Black-and-white archival print from the museum collection, capturing a historic moment of the Vietnam War.",
        dropRate: 0.3,
      },
      {
        id: "hcmc-bao-tang-huy-hieu-quan-doi",
        name: "Huy hiệu quân đội",
        nameEn: "Military Pin",
        ichDomain: "oral-tradition",
        sourceNodeId: "hcmc-bao-tang-chung-tich",
        sourceNodeName: "Bảo tàng Chứng tích Chiến tranh",
        knowledgeHolderName: "Ông Phạm Văn Lộc",
        image: "https://picsum.photos/seed/bao-tang-2/400/400",
        rarity: "Common",
        description: "Huy hiệu đơn vị quân sự từ thời chiến tranh, một trong hàng nghìn hiện vật tại bảo tàng.",
        descriptionEn: "Military unit pin from the wartime period, one of thousands of artifacts in the museum collection.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-bao-tang-to-bao",
        name: "Tờ báo chiến trường",
        nameEn: "War-Era Newspaper",
        ichDomain: "oral-tradition",
        sourceNodeId: "hcmc-bao-tang-chung-tich",
        sourceNodeName: "Bảo tàng Chứng tích Chiến tranh",
        knowledgeHolderName: "Ông Phạm Văn Lộc",
        image: "https://picsum.photos/seed/bao-tang-3/400/400",
        rarity: "Common",
        description: "Số báo in trên chiến trường năm 1968, được phát tới binh lính Mỹ trong chiến dịch Tết Mậu Thân.",
        descriptionEn: "A newspaper printed in the field in 1968, distributed to American soldiers during the Tet Offensive.",
        dropRate: 0.55,
      },
    ]`,

  "hcmc-nha-hat-thanh-pho": `[
      {
        id: "hcmc-nha-hat-ve-hat-cu",
        name: "Vé hát cổ",
        nameEn: "Vintage Theater Ticket",
        ichDomain: "performing-arts",
        sourceNodeId: "hcmc-nha-hat-thanh-pho",
        sourceNodeName: "Nhà hát Thành phố",
        knowledgeHolderName: "Bà Lê Thị Hương",
        image: "https://picsum.photos/seed/nha-hat-1/400/400",
        rarity: "Rare",
        description: "Vé xem hát thủ công từ những năm 1920, khi nhà hát vẫn phục vụ tầng lớp thượng lưu Sài Gòn thuộc địa.",
        descriptionEn: "Handcrafted theater ticket from the 1920s, when the opera house still served colonial Saigon's upper class.",
        dropRate: 0.28,
      },
      {
        id: "hcmc-nha-hat-chuong-trinh",
        name: "Chương trình diễn",
        nameEn: "Performance Program",
        ichDomain: "performing-arts",
        sourceNodeId: "hcmc-nha-hat-thanh-pho",
        sourceNodeName: "Nhà hát Thành phố",
        knowledgeHolderName: "Bà Lê Thị Hương",
        image: "https://picsum.photos/seed/nha-hat-2/400/400",
        rarity: "Common",
        description: "Tờ chương trình in hai thứ tiếng Việt–Pháp của một buổi biểu diễn opera tại nhà hát đầu thế kỷ 20.",
        descriptionEn: "Bilingual Vietnamese–French performance program from an early 20th-century opera at the theater.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-nha-hat-phu-dieu",
        name: "Phù điêu cửa vòm",
        nameEn: "Arch Frieze Fragment",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-nha-hat-thanh-pho",
        sourceNodeName: "Nhà hát Thành phố",
        knowledgeHolderName: "Bà Lê Thị Hương",
        image: "https://picsum.photos/seed/nha-hat-3/400/400",
        rarity: "Epic",
        description: "Mảnh thạch cao chạm nổi hoa lá trên vòm cửa nhà hát, làm theo phong cách Tân Baroque Pháp năm 1900.",
        descriptionEn: "Plaster relief fragment carved with floral motifs on the theater's archways, in the 1900 French Neo-Baroque style.",
        dropRate: 0.09,
      },
    ]`,

  "hcmc-banh-trang-cu-chi": `[
      {
        id: "hcmc-banh-trang-khuon-tre",
        name: "Khuôn tre đan",
        nameEn: "Woven Bamboo Drying Frame",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-banh-trang-cu-chi",
        sourceNodeName: "Nghề làm bánh tráng Củ Chi",
        knowledgeHolderName: "Bà Nguyễn Thị Lan",
        image: "https://picsum.photos/seed/banh-trang-1/400/400",
        rarity: "Rare",
        description: "Khuôn tròn đan bằng tre già, dùng để phơi bánh tráng dưới nắng Củ Chi; mỗi cái được đan thủ công mất gần một ngày.",
        descriptionEn: "Circular frame woven from mature bamboo, used to sun-dry rice paper in Cu Chi; each frame takes nearly a day to hand-weave.",
        dropRate: 0.3,
      },
      {
        id: "hcmc-banh-trang-san-pham",
        name: "Bánh tráng phơi sương",
        nameEn: "Dew-Dried Rice Paper",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-banh-trang-cu-chi",
        sourceNodeName: "Nghề làm bánh tráng Củ Chi",
        knowledgeHolderName: "Bà Nguyễn Thị Lan",
        image: "https://picsum.photos/seed/banh-trang-2/400/400",
        rarity: "Common",
        description: "Tấm bánh tráng mỏng như giấy, được phơi sương một đêm để có độ dẻo đặc trưng chỉ có ở Củ Chi.",
        descriptionEn: "Paper-thin rice paper left under the dew overnight to achieve the signature suppleness unique to Cu Chi.",
        dropRate: 0.6,
      },
      {
        id: "hcmc-banh-trang-cong-thuc",
        name: "Công thức bí truyền Củ Chi",
        nameEn: "Cu Chi Secret Recipe",
        ichDomain: "culinary",
        sourceNodeId: "hcmc-banh-trang-cu-chi",
        sourceNodeName: "Nghề làm bánh tráng Củ Chi",
        knowledgeHolderName: "Bà Nguyễn Thị Lan",
        image: "https://picsum.photos/seed/banh-trang-3/400/400",
        rarity: "Endangered",
        description: "Tỷ lệ pha bột gạo, nước và muối truyền khẩu qua nhiều thế hệ — không ai ghi xuống, chỉ học qua đôi tay người thầy.",
        descriptionEn: "The ancestral rice-flour, water, and salt ratio passed down orally through generations — never written, only learned through a master's hands.",
        dropRate: 0.03,
      },
      {
        id: "hcmc-banh-trang-que-tre",
        name: "Que tre đan khuôn",
        nameEn: "Bamboo Weaving Rod",
        ichDomain: "craftsmanship",
        sourceNodeId: "hcmc-banh-trang-cu-chi",
        sourceNodeName: "Nghề làm bánh tráng Củ Chi",
        knowledgeHolderName: "Bà Nguyễn Thị Lan",
        image: "https://picsum.photos/seed/banh-trang-4/400/400",
        rarity: "Rare",
        description: "Thanh tre vót mỏng dùng đan khuôn phơi bánh tráng, kích cỡ và độ dẻo chuẩn xác theo bí quyết riêng của từng nhà.",
        descriptionEn: "Thinly shaved bamboo rod for weaving drying frames, each household's precise thickness and flexibility a closely guarded secret.",
        dropRate: 0.28,
      },
    ]`,
};

// ─── Utility: replace items block in a file ────────────────────────────────

function replaceItemsBlock(content, nodeId, newItemsBlock) {
  // Find "items: [" after the node's id: "nodeId"
  const nodePattern = new RegExp(`(id:\\s*"${nodeId}"[\\s\\S]*?items:\\s*)\\[`, "m");
  const match = content.match(nodePattern);
  if (!match) {
    console.warn(`  ⚠️  Node "${nodeId}" not found`);
    return content;
  }

  const matchStart = match.index + match[0].length - 1; // position of opening [
  // Count brackets to find matching ]
  let depth = 0;
  let i = matchStart;
  while (i < content.length) {
    if (content[i] === "[") depth++;
    else if (content[i] === "]") {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }
  const matchEnd = i + 1; // exclusive, includes the ]

  const before = content.slice(0, matchStart);
  const after = content.slice(matchEnd);
  return before + newItemsBlock + after;
}

// ─── Process each file ──────────────────────────────────────────────────────

const files = {
  "ho-chi-minh-city.ts": [
    "hcmc-chua-giac-lam",
    "hcmc-lang-ong-ba-chieu",
    "hcmc-chua-ngoc-hoang",
    "hcmc-dinh-minh-huong",
    "hcmc-hat-boi",
    "hcmc-ben-thanh",
    "hcmc-dinh-doc-lap",
    "hcmc-bao-tang-chung-tich",
    "hcmc-nha-hat-thanh-pho",
    "hcmc-banh-trang-cu-chi",
  ],
};

for (const [filename, nodeIds] of Object.entries(files)) {
  const filePath = join(dataDir, filename);
  let content = readFileSync(filePath, "utf-8");

  for (const nodeId of nodeIds) {
    if (ITEMS[nodeId]) {
      console.log(`  Updating items for ${nodeId}...`);
      content = replaceItemsBlock(content, nodeId, ITEMS[nodeId]);
    }
  }

  writeFileSync(filePath, content, "utf-8");
  console.log(`✓ Updated ${filename}`);
}

console.log("\nDone!");
