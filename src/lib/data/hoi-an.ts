import type { HeritageNode } from "../types";

export const HOI_AN_NODES: HeritageNode[] = [
  {
    id: "thanh-ha-pottery",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Gốm Thanh Hà",
    nameEn: "Thanh Ha Pottery Village",
    ichDomain: "craftsmanship",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.2891, 15.8798],
    coverImage:
      "https://images.unsplash.com/photo-1578913171703-97ae19e7315d?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Thanh",
      nameEn: "Ms. Nguyen Thi Thanh",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
      role: "artisan",
      roleEn: "Potter",
    },
    knowledgeSummary:
      "Trong khi du khách đổ về phố cổ Hội An chụp đèn lồng, làng gốm Thanh Hà chỉ cách 2km lại nằm im lặng bên sông Thu Bồn. Làng gốm 500 năm tuổi này ra đời trước khi người Hoa đến lập phố cổ — đất sét sông Thu Bồn và kỹ thuật bàn xoay chân tạo nên màu đỏ đặc trưng không nơi nào có.",
    knowledgeSummaryEn:
      "While tourists crowd Hoi An Ancient Town for lantern photos, Thanh Ha pottery village sits quietly 2km away on the Thu Bon river. This 500-year-old village predates the Chinese merchant quarter — Thu Bon river clay and foot-wheel technique create a distinctive red that exists nowhere else.",
    elements: ["Đất sét sông Thu Bồn", "Bàn xoay chân", "Lò nung củi", "Men tự nhiên"],
    npcScript: [
      {
        order: 1,
        question: "Thanh Hà có trước phố cổ Hội An không?",
        answer:
          "Có! Làng gốm Thanh Hà xuất hiện từ thế kỷ 15 — trước khi thương nhân Nhật Bản và Trung Quốc đến lập phố thương mại. Gốm Thanh Hà là một trong những nguồn cung chính cho thương cảng Hội An thế kỷ 16–18.",
      },
      {
        order: 2,
        question: "Bàn xoay chân khác bàn xoay tay thế nào?",
        answer:
          "Bàn xoay chân cho phép hai tay hoàn toàn tự do để tạo hình đất sét — tốc độ và độ đều hơn nhiều. Kỹ thuật này rất hiếm ở Việt Nam; hầu hết nơi khác dùng bàn xoay tay hoặc bàn xoay điện.",
      },
      {
        order: 3,
        question: "Phố cổ Hội An và Thanh Hà liên kết thế nào?",
        answer:
          "Những chiếc chum sành Thanh Hà từng chứa đầy nước mắm được chở bằng thuyền ra thương cảng Hội An để bán cho tàu Nhật, tàu Hà Lan. Bây giờ khách du lịch chỉ biết phố cổ — ít ai biết rằng nền kinh tế phố cổ được xây trên lưng người thợ gốm này.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh thợ gốm đang dùng bàn xoay chân bên sông Thu Bồn",
      promptEn: "Photograph a potter using the foot-wheel beside the Thu Bon river",
      referenceImages: [
        "https://images.unsplash.com/photo-1578913171703-97ae19e7315d?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-gom-chum-gom",
        name: "Chum gốm Thanh Hà",
        nameEn: "Thanh Ha Pottery Jar",
        ichDomain: "craftsmanship",
        sourceNodeId: "thanh-ha-pottery",
        sourceNodeName: "Gốm Thanh Hà",
        knowledgeHolderName: "Bà Nguyễn Thị Thu Thủy",
        image: "https://picsum.photos/seed/gom-thanh-ha-1/400/400",
        rarity: "Common",
        description: "Chum đất nung nhỏ làm bằng đất sét Vu Gia theo kỹ thuật nặn tay truyền thống 500 năm của làng Thanh Hà.",
        descriptionEn: "Small terracotta jar made from Vu Gia clay using the 500-year-old hand-coiling technique of Thanh Ha village.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-gom-dat-set",
        name: "Đất sét Vu Gia",
        nameEn: "Vu Gia Clay",
        ichDomain: "craftsmanship",
        sourceNodeId: "thanh-ha-pottery",
        sourceNodeName: "Gốm Thanh Hà",
        knowledgeHolderName: "Bà Nguyễn Thị Thu Thủy",
        image: "https://picsum.photos/seed/gom-thanh-ha-2/400/400",
        rarity: "Rare",
        description: "Cục đất sét lấy từ sông Vu Gia — nguyên liệu duy nhất tạo ra màu nâu đỏ và độ bền đặc trưng của gốm Thanh Hà.",
        descriptionEn: "Clay harvested from the Vu Gia River — the sole ingredient that gives Thanh Ha pottery its distinctive red-brown color and durability.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-gom-con-thu",
        name: "Con thú gốm mini",
        nameEn: "Miniature Clay Animal",
        ichDomain: "craftsmanship",
        sourceNodeId: "thanh-ha-pottery",
        sourceNodeName: "Gốm Thanh Hà",
        knowledgeHolderName: "Bà Nguyễn Thị Thu Thủy",
        image: "https://picsum.photos/seed/gom-thanh-ha-3/400/400",
        rarity: "Common",
        description: "Con vật nhỏ bằng đất nung nặn tay, là quà lưu niệm đặc trưng làng Thanh Hà từ thế kỷ 16.",
        descriptionEn: "Small hand-modeled terracotta animal, the signature souvenir of Thanh Ha village since the 16th century.",
        dropRate: 0.55,
      },
    ],
  },
  {
    id: "kim-bong-carpentry",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Làng Mộc Kim Bồng",
    nameEn: "Kim Bong Carpentry Village",
    ichDomain: "craftsmanship",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.3274, 15.8766],
    coverImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Ông Nguyễn Văn Tiến",
      nameEn: "Mr. Nguyen Van Tien",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      role: "artisan",
      roleEn: "Master Carpenter",
    },
    knowledgeSummary:
      "Làng mộc Kim Bồng là làng nghề truyền thống hơn 400 năm tuổi tại Hội An, chuyên chạm khắc gỗ tinh xảo phục vụ kiến trúc đình chùa và nội thất cung đình nhà Nguyễn. Kỹ thuật đục đẽo tay truyền từ đời này sang đời khác.",
    knowledgeSummaryEn:
      "Kim Bong carpentry village is a traditional craft village over 400 years old in Hoi An, specializing in intricate wood carving for communal house architecture and Nguyen dynasty interiors. Hand-carving techniques are passed down through generations.",
    elements: ["Gỗ mít", "Đục chạm", "Bào tay", "Sơn mài"],
    npcScript: [
      {
        order: 1,
        question: "Ông học nghề từ khi nào?",
        answer:
          "Tôi học nghề từ năm 12 tuổi, theo cha học đục chạm. Hồi đó mỗi ngày đục đến tay chai cứng mà vẫn chưa được cha khen — ông bảo phải 5 năm mới gọi là 'biết nghề'.",
      },
      {
        order: 2,
        question: "Bí quyết chạm khắc đẹp là gì?",
        answer:
          "Quan trọng nhất là 'đọc thớ gỗ' — mỗi loại gỗ có hướng thớ riêng. Đục xuôi thớ thì nhẹ tay, đục ngược thớ sẽ vỡ. Gỗ mít Kim Bồng đặc biệt — không mối mọt, giữ nét chạm hàng trăm năm.",
      },
      {
        order: 3,
        question: "Nghề mộc Kim Bồng có điều gì đặc biệt nhất?",
        answer:
          "Chúng tôi không chỉ làm đồ gỗ — chúng tôi làm 'ký ức'. Mỗi mảnh chạm khắc là câu chuyện của một gia đình, một ngôi làng. Khi bạn chạm vào tác phẩm Kim Bồng, bạn đang chạm vào 400 năm lịch sử Hội An.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh một người thợ đang đục chạm gỗ",
      promptEn: "Photograph a craftsman carving wood",
      referenceImages: [
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "kim-bong-carpentry-duc-cham",
        name: "Đục chạm cổ",
        nameEn: "Antique Wood Chisel",
        ichDomain: "craftsmanship",
        sourceNodeId: "kim-bong-carpentry",
        sourceNodeName: "Làng Mộc Kim Bồng",
        knowledgeHolderName: "Nghệ nhân Huỳnh Văn Ba",
        image: "https://picsum.photos/seed/kim-bong-1/400/400",
        rarity: "Rare",
        description: "Bộ đục thủ công được đúc và mài theo phương pháp truyền thống của làng mộc Kim Bồng hơn 400 năm.",
        descriptionEn: "Hand-forged and hand-sharpened chisel set following the 400-year-old traditional method of Kim Bong carpentry village.",
        dropRate: 0.28,
      },
      {
        id: "kim-bong-carpentry-hoa-van-rong",
        name: "Hoa văn rồng chạm gỗ",
        nameEn: "Dragon Wood Carving",
        ichDomain: "craftsmanship",
        sourceNodeId: "kim-bong-carpentry",
        sourceNodeName: "Làng Mộc Kim Bồng",
        knowledgeHolderName: "Nghệ nhân Huỳnh Văn Ba",
        image: "https://picsum.photos/seed/kim-bong-2/400/400",
        rarity: "Epic",
        description: "Bức chạm rồng trên gỗ mít từ một ngôi nhà cổ Hội An, minh chứng cho tay nghề tinh xảo của thợ Kim Bồng thế kỷ 17.",
        descriptionEn: "Dragon carving on jackwood from a Hoi An ancient house, testament to the exquisite craft of 17th-century Kim Bong artisans.",
        dropRate: 0.1,
      },
      {
        id: "kim-bong-carpentry-moc-ban",
        name: "Mộc bản tứ linh",
        nameEn: "Four Sacred Creatures Woodblock",
        ichDomain: "craftsmanship",
        sourceNodeId: "kim-bong-carpentry",
        sourceNodeName: "Làng Mộc Kim Bồng",
        knowledgeHolderName: "Nghệ nhân Huỳnh Văn Ba",
        image: "https://picsum.photos/seed/kim-bong-3/400/400",
        rarity: "Legendary",
        description: "Mộc bản chạm tứ linh (long, lân, quy, phụng) dùng in hoa văn lên cột nhà cổ — kỹ thuật nay chỉ còn 3 nghệ nhân biết.",
        descriptionEn: "Woodblock carved with the four sacred creatures (dragon, qilin, turtle, phoenix) for stamping onto ancient house pillars — only 3 artisans still know the technique.",
        dropRate: 0.04,
      },
    ],
  },
  {
    id: "hoi-an-pho-co",
    cityId: "hoi-an",
    category: "tourist-landmark",
    name: "Phố Cổ Hội An",
    nameEn: "Hoi An Ancient Town",
    ichDomain: "traditional-knowledge",
    province: "quang-nam",
    unescoStatus: "inscribed",
    coordinates: [108.3273, 15.8801],
    coverImage:
      "https://images.unsplash.com/photo-1555620263-73d02633039d?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Nguyễn Chí Trung",
      nameEn: "Mr. Nguyen Chi Trung",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "elder",
      roleEn: "Heritage Expert",
    },
    knowledgeSummary:
      "Phố Cổ Hội An là thương cảng quốc tế phồn thịnh từ thế kỷ 15–19, nơi thương nhân Nhật, Hoa, Bồ Đào Nha và Hà Lan giao thương. Kiến trúc phố cổ là sự pha trộn độc đáo của Việt, Nhật, Hoa và châu Âu còn nguyên vẹn. Được UNESCO công nhận là Di sản Thế giới năm 1999.",
    knowledgeSummaryEn:
      "Hoi An Ancient Town was an international trading port from the 15th–19th centuries, where Japanese, Chinese, Portuguese and Dutch merchants traded. The architecture is a unique blend of Vietnamese, Japanese, Chinese and European styles, remarkably preserved. UNESCO World Heritage Site since 1999.",
    elements: ["Hội quán người Hoa", "Đèn lồng Hội An", "Nhà cổ", "Cầu Nhật Bản"],
    npcScript: [
      {
        order: 1,
        question: "Vì sao Hội An giữ được kiến trúc cổ?",
        answer:
          "Hội An may mắn không bị chiến tranh tàn phá nặng như nhiều thành phố khác. Ngoài ra, người dân địa phương có ý thức bảo tồn cao — họ không phá nhà cổ để xây mới vì biết giá trị di sản. UNESCO hỗ trợ trùng tu từ những năm 1990.",
      },
      {
        order: 2,
        question: "Đèn lồng Hội An có từ khi nào?",
        answer:
          "Đèn lồng vải được làm tại Hội An từ thế kỷ 17 khi thương nhân Hoa và Nhật mang nghề làm đèn đến. Mỗi gia đình có màu sắc và hoa văn riêng. Đêm Rằm thả đèn hoa đăng trên sông Hoài là lễ hội được giữ liên tục từ thế kỷ 17 đến nay.",
      },
      {
        order: 3,
        question: "Cầu Nhật Bản được xây từ thế kỷ nào?",
        answer:
          "Cầu Nhật Bản (Chùa Cầu) xây năm 1593 bởi cộng đồng thương nhân Nhật Bản, là công trình kiến trúc duy nhất ở Đông Nam Á do người Nhật xây còn nguyên vẹn. Thiết kế có chùa nhỏ ở giữa cầu — biểu tượng hòa hợp giữa các cộng đồng thương nhân.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh phố đèn lồng Hội An lúc hoàng hôn hoặc ban đêm",
      promptEn: "Photograph Hoi An lantern street at dusk or nighttime",
      referenceImages: [
        "https://images.unsplash.com/photo-1555620263-73d02633039d?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-pho-co-den-long",
        name: "Đèn lồng Hội An",
        nameEn: "Hoi An Lantern",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-pho-co",
        sourceNodeName: "Phố Cổ Hội An",
        knowledgeHolderName: "Bà Trương Thị Minh",
        image: "https://picsum.photos/seed/pho-co-1/400/400",
        rarity: "Common",
        description: "Đèn lồng vải màu đỏ hoặc vàng tự làm tại phố cổ, thắp sáng Hội An mỗi đêm 14 âm lịch không điện.",
        descriptionEn: "Handmade red or yellow silk lantern from the old town, illuminating Hoi An every lunar 14th night without electricity.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-pho-co-phu-dieu",
        name: "Phù điêu Hội Quán",
        nameEn: "Assembly Hall Relief",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-pho-co",
        sourceNodeName: "Phố Cổ Hội An",
        knowledgeHolderName: "Bà Trương Thị Minh",
        image: "https://picsum.photos/seed/pho-co-2/400/400",
        rarity: "Rare",
        description: "Thác bản phù điêu tường Hội Quán Phúc Kiến, ghi lại tích truyện về người Hoa đầu tiên đến Hội An thế kỷ 17.",
        descriptionEn: "Rubbing of a Fujian Assembly Hall wall relief, depicting the story of the first Chinese settlers arriving in Hoi An in the 17th century.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-pho-co-chia-khoa",
        name: "Chìa khóa nhà cổ",
        nameEn: "Ancient House Key",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hoi-an-pho-co",
        sourceNodeName: "Phố Cổ Hội An",
        knowledgeHolderName: "Bà Trương Thị Minh",
        image: "https://picsum.photos/seed/pho-co-3/400/400",
        rarity: "Epic",
        description: "Chìa khóa gỗ cổ dùng mở cửa nhà cổ Hội An — kiểu khóa tre và gỗ độc đáo chỉ còn tìm thấy ở đây.",
        descriptionEn: "Ancient wooden key for an old Hoi An house — a unique bamboo-and-wood lock mechanism found nowhere else.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "hoi-an-cau-nhat-ban",
    cityId: "hoi-an",
    category: "tourist-landmark",
    name: "Chùa Cầu (Cầu Nhật Bản)",
    nameEn: "Japanese Covered Bridge",
    ichDomain: "traditional-knowledge",
    province: "quang-nam",
    unescoStatus: "inscribed",
    coordinates: [108.3248, 15.8797],
    coverImage:
      "https://images.unsplash.com/photo-1621245033772-e14b71d6c8d7?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Trần Thị Thu Hằng",
      nameEn: "Mrs. Tran Thi Thu Hang",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "storyteller",
      roleEn: "Local Guide",
    },
    knowledgeSummary:
      "Chùa Cầu xây năm 1593 bởi thương nhân Nhật Bản là công trình kiến trúc biểu tượng của Hội An và là cây cầu duy nhất ở Đông Nam Á có chùa thờ ở giữa. Thiết kế kết hợp kiến trúc Nhật, Hoa và Việt, được in trên tờ bạc 20.000 đồng Việt Nam.",
    knowledgeSummaryEn:
      "Built in 1593 by Japanese merchants, the Japanese Covered Bridge is Hoi An's architectural icon and the only bridge in Southeast Asia with a shrine built into it. Combining Japanese, Chinese and Vietnamese architectural elements, it appears on Vietnam's 20,000 dong banknote.",
    elements: ["Kiến trúc Nhật-Hoa-Việt", "Tượng chó và khỉ", "Bài vị thờ Bắc Đế", "Bia đá cổ"],
    npcScript: [
      {
        order: 1,
        question: "Tại sao cầu lại có chùa ở giữa?",
        answer:
          "Thương nhân Nhật xây chùa trên cầu để thờ Bắc Đế Trấn Vũ — vị thần bảo hộ người đi biển. Họ tin rằng có thần linh trấn giữ thì tàu thuyền qua lại sẽ bình an. Đây là tín ngưỡng phong thủy kết hợp Thần đạo Nhật và Đạo giáo Trung Hoa.",
      },
      {
        order: 2,
        question: "Tượng chó và khỉ hai đầu cầu có ý nghĩa gì?",
        answer:
          "Truyền thuyết kể rằng việc xây cầu bắt đầu vào năm Thân (khỉ) và hoàn thành năm Tuất (chó). Vì vậy hai đầu cầu đặt tượng chó và khỉ như 'nhân chứng' lịch sử. Đây là giải thích phổ biến nhất, dù một số học giả có ý kiến khác.",
      },
      {
        order: 3,
        question: "Cầu được trùng tu bao nhiêu lần?",
        answer:
          "Cầu đã trùng tu 7 lần kể từ khi xây, lần gần nhất là 2022–2024. Mỗi lần trùng tu đều giữ nguyên kiến trúc gốc thế kỷ 18 nhưng thay thế vật liệu hư hỏng. Công trình này chứng kiến hơn 430 năm lịch sử Hội An.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh toàn cảnh Chùa Cầu từ bờ sông hoặc mặt tiền cây cầu",
      promptEn: "Photograph the full bridge from the riverbank or the bridge facade",
      referenceImages: [
        "https://images.unsplash.com/photo-1621245033772-e14b71d6c8d7?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-cau-nhat-ban-tien-20k",
        name: "Tờ tiền 20.000đ",
        nameEn: "20,000 VND Banknote",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hoi-an-cau-nhat-ban",
        sourceNodeName: "Chùa Cầu (Cầu Nhật Bản)",
        knowledgeHolderName: "Ông Lê Hữu Hoàng",
        image: "https://picsum.photos/seed/chua-cau-1/400/400",
        rarity: "Common",
        description: "Tờ tiền 20.000 đồng in hình Cầu Nhật Bản — du khách hay mang đến chụp ảnh đúng góc với cây cầu thật.",
        descriptionEn: "The 20,000 VND banknote printed with the Japanese Covered Bridge — tourists bring it to photograph matching the real bridge at the same angle.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-cau-nhat-ban-tuong-linh-cau",
        name: "Tượng linh cẩu",
        nameEn: "Dog Guardian Statue",
        ichDomain: "ritual",
        sourceNodeId: "hoi-an-cau-nhat-ban",
        sourceNodeName: "Chùa Cầu (Cầu Nhật Bản)",
        knowledgeHolderName: "Ông Lê Hữu Hoàng",
        image: "https://picsum.photos/seed/chua-cau-2/400/400",
        rarity: "Rare",
        description: "Tượng đôi chó đá canh ở đầu cầu — biểu tượng năm con chó bắt đầu xây cầu và năm con khỉ hoàn thành theo truyền thuyết Nhật.",
        descriptionEn: "Stone dog statue pair guarding the bridge entrance — marking the year the dog's construction began and the monkey's completion, per Japanese legend.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-cau-nhat-ban-bua",
        name: "Bùa may mắn cầu cổ",
        nameEn: "Bridge Blessing Charm",
        ichDomain: "ritual",
        sourceNodeId: "hoi-an-cau-nhat-ban",
        sourceNodeName: "Chùa Cầu (Cầu Nhật Bản)",
        knowledgeHolderName: "Ông Lê Hữu Hoàng",
        image: "https://picsum.photos/seed/chua-cau-3/400/400",
        rarity: "Epic",
        description: "Bùa giấy đỏ treo trong chùa cầu, được các thương nhân Nhật ban đầu đặt để bảo vệ tàu thuyền vượt biển.",
        descriptionEn: "Red paper amulet hung inside the covered bridge temple, originally placed by Japanese merchants to protect their ocean-crossing vessels.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "hoi-an-lang-lua-ma-chau",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Làng Lụa Mã Châu",
    nameEn: "Ma Chau Silk Weaving Village",
    ichDomain: "craftsmanship",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.3481, 15.8940],
    coverImage:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Bà Lê Thị Mỹ Hạnh",
      nameEn: "Mrs. Le Thi My Hanh",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      role: "artisan",
      roleEn: "Master Silk Weaver",
    },
    knowledgeSummary:
      "Làng lụa Mã Châu cách Hội An 5km là nơi duy trì nghề dệt lụa tơ tằm thủ công hơn 500 năm. Tơ tằm thu từ các hộ nuôi tằm địa phương được dệt thành lụa trên khung dệt gỗ cổ. Lụa Mã Châu có độ mềm mịn đặc biệt và màu sắc rực rỡ được nhuộm từ cây cỏ tự nhiên.",
    knowledgeSummaryEn:
      "Ma Chau silk weaving village, 5km from Hoi An, maintains hand-weaving on traditional wooden looms for over 500 years. Silk thread from local silkworm farmers is woven on antique wooden frames. Ma Chau silk has exceptional softness and vibrant colors dyed from natural plants.",
    elements: ["Khung dệt gỗ cổ", "Tơ tằm tự nhiên", "Thuốc nhuộm thảo mộc", "Hoa văn truyền thống"],
    npcScript: [
      {
        order: 1,
        question: "Lụa Mã Châu được dệt như thế nào?",
        answer:
          "Từ kén tằm, chúng tôi kéo sợi tơ dài hàng km rồi mắc lên khung dệt gỗ có từ thế kỷ 18. Một người thợ thành thạo dệt được khoảng 1m vải mỗi ngày — chậm nhưng mỗi sợi đều có hồn. Máy dệt công nghiệp nhanh hơn 100 lần nhưng không bao giờ có được cái chạm tay ấm áp đó.",
      },
      {
        order: 2,
        question: "Màu sắc lụa Mã Châu được tạo ra thế nào?",
        answer:
          "Chúng tôi nhuộm bằng cây cỏ tự nhiên: củ nâu cho màu nâu đỏ, lá chàm cho màu xanh, cây dành dành cho màu vàng. Màu tự nhiên không phai như hóa chất — lụa 20 năm vẫn giữ màu, chỉ dịu đi chứ không bạc.",
      },
      {
        order: 3,
        question: "Nghề dệt lụa có nguy cơ mất không?",
        answer:
          "Rất nguy cơ. Trước có hàng trăm hộ dệt, nay chỉ còn vài chục hộ kiên trì. Lụa công nghiệp rẻ hơn 10 lần nên khó cạnh tranh. Chúng tôi sống được nhờ khách du lịch đến tham quan và mua lụa về làm kỷ niệm.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh khung dệt lụa gỗ cổ đang vận hành hoặc cuộn tơ màu sắc",
      promptEn: "Photograph an antique wooden loom in operation or colorful silk thread spools",
      referenceImages: [
        "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-lua-cuon-to",
        name: "Cuộn tơ sống",
        nameEn: "Raw Silk Thread",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-lua-ma-chau",
        sourceNodeName: "Làng Lụa Mã Châu",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/lua-ma-chau-1/400/400",
        rarity: "Common",
        description: "Cuộn tơ tằm sống màu vàng kem trước khi dệt — mỗi kén tằm nhả ra 900m sợi tơ mỏng như tóc người.",
        descriptionEn: "Cream-colored raw silk thread before weaving — each silkworm cocoon unspools 900m of thread as fine as human hair.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-lua-ken-tam",
        name: "Kén tằm vàng",
        nameEn: "Golden Silkworm Cocoon",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-lua-ma-chau",
        sourceNodeName: "Làng Lụa Mã Châu",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/lua-ma-chau-2/400/400",
        rarity: "Rare",
        description: "Kén tằm khô màu vàng óng từ giống tằm đặc biệt của Mã Châu, tạo ra loại lụa mịn nhất miền Trung Việt Nam.",
        descriptionEn: "Dried golden cocoon from Ma Chau's special silkworm breed, producing the finest silk in Central Vietnam.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-lua-manh-lua",
        name: "Mảnh lụa Mã Châu",
        nameEn: "Ma Chau Silk Fabric",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-lua-ma-chau",
        sourceNodeName: "Làng Lụa Mã Châu",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/lua-ma-chau-3/400/400",
        rarity: "Epic",
        description: "Mảnh lụa mỏng như cánh chuồn chuồn, dệt bằng kỹ thuật nhuộm thiên nhiên với hoa hòe và cây chàm từ làng Mã Châu.",
        descriptionEn: "Dragonfly-wing-thin silk woven using the natural dye technique with sophora flowers and indigo from Ma Chau village.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "hoi-an-cao-lau",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Cao Lầu Hội An",
    nameEn: "Hoi An Cao Lau Noodles",
    ichDomain: "culinary",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.3280, 15.8795],
    coverImage:
      "https://images.unsplash.com/photo-1503767835115-9daea1e149e8?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Sương",
      nameEn: "Mrs. Nguyen Thi Suong",
      avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80",
      role: "artisan",
      roleEn: "Cao Lau Noodle Master",
    },
    knowledgeSummary:
      "Cao Lầu là món mì đặc sản độc nhất vô nhị của Hội An — không nơi nào khác có thể làm được đúng vị vì sợi mì phải làm từ nước giếng Bá Lễ trong lòng phố cổ và tro củi từ đảo Cù Lao Chàm. Hỗn hợp văn hóa Nhật-Hoa-Việt trong một tô mì.",
    knowledgeSummaryEn:
      "Cao Lau is Hoi An's uniquely unreplicable noodle dish — no other place can make it authentically because the noodles must use water from the Ba Le Well inside the ancient town and ash from Cham Island wood. A Japanese-Chinese-Vietnamese cultural blend in one bowl.",
    elements: ["Nước giếng Bá Lễ", "Tro củi Cù Lao Chàm", "Sợi mì vàng dày", "Bánh đa giòn"],
    npcScript: [
      {
        order: 1,
        question: "Tại sao Cao Lầu chỉ có ở Hội An?",
        answer:
          "Bí quyết là nước giếng Bá Lễ — giếng cổ Chăm-Pa trong phố cổ có độ khoáng và pH đặc biệt làm sợi mì dai và vàng. Nếu dùng nước giếng khác hoặc nước máy, sợi mì sẽ khác hoàn toàn. Nhiều nhà hàng ở Đà Nẵng, Sài Gòn thử làm Cao Lầu nhưng không ai ra đúng vị.",
      },
      {
        order: 2,
        question: "Cao Lầu đến từ văn hóa nào?",
        answer:
          "Sợi mì dày và cách ăn khô ảnh hưởng từ mì Udon Nhật Bản — có cộng đồng thương nhân Nhật ở đây từ thế kỷ 16. Nước tương và thịt xá xíu từ ẩm thực Hoa. Rau sống địa phương và bánh đa giòn là phần Việt. Một tô Cao Lầu kể câu chuyện của cả thương cảng đa văn hóa.",
      },
      {
        order: 3,
        question: "Ăn Cao Lầu ở đâu ngon nhất?",
        answer:
          "Hàng bà Trâm trong chợ Hội An từ sáng sớm là ngon và đúng vị nhất — bà làm từ 4 giờ sáng mỗi ngày suốt 40 năm. Ăn lúc 7 giờ sáng khi sợi mì còn nóng và bánh đa còn giòn, ngồi ghế thấp trên vỉa hè — đó mới là Cao Lầu thật sự.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh tô Cao Lầu với topping đầy đủ trên bàn gỗ cổ",
      promptEn: "Photograph a bowl of Cao Lau with full toppings on an antique wooden table",
      referenceImages: [
        "https://images.unsplash.com/photo-1503767835115-9daea1e149e8?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-cao-lau-soi-mi",
        name: "Sợi mì Cao Lầu",
        nameEn: "Cao Lau Noodle",
        ichDomain: "culinary",
        sourceNodeId: "hoi-an-cao-lau",
        sourceNodeName: "Cao Lầu Hội An",
        knowledgeHolderName: "Bà Trương Thị Hồng",
        image: "https://picsum.photos/seed/cao-lau-1/400/400",
        rarity: "Common",
        description: "Sợi mì Cao Lầu màu vàng nghệ đặc trưng, chỉ làm được bằng nước giếng cổ Bá Lễ — không thể nhân rộng ra nơi khác.",
        descriptionEn: "Turmeric-yellow Cao Lau noodle that can only be made with water from the ancient Ba Le well — impossible to replicate elsewhere.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-cao-lau-tro-nuoc",
        name: "Tro nước giếng Bá Lễ",
        nameEn: "Ba Le Well Ash Water",
        ichDomain: "culinary",
        sourceNodeId: "hoi-an-cao-lau",
        sourceNodeName: "Cao Lầu Hội An",
        knowledgeHolderName: "Bà Trương Thị Hồng",
        image: "https://picsum.photos/seed/cao-lau-2/400/400",
        rarity: "Rare",
        description: "Hỗn hợp nước tro từ cây tre và nước giếng Bá Lễ — bí quyết tạo độ dai và hương vị độc đáo của sợi Cao Lầu.",
        descriptionEn: "Mixture of bamboo ash and Ba Le well water — the secret behind the distinctive chewiness and flavor of Cao Lau noodles.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-cao-lau-cong-thuc",
        name: "Công thức cao lầu bí truyền",
        nameEn: "Secret Cao Lau Recipe",
        ichDomain: "culinary",
        sourceNodeId: "hoi-an-cao-lau",
        sourceNodeName: "Cao Lầu Hội An",
        knowledgeHolderName: "Bà Trương Thị Hồng",
        image: "https://picsum.photos/seed/cao-lau-3/400/400",
        rarity: "Legendary",
        description: "Tỷ lệ ngâm bột, pha tro, và thời gian hấp — truyền khẩu chỉ trong một dòng họ duy nhất làm Cao Lầu gốc ở Hội An.",
        descriptionEn: "The soaking ratio, ash blend, and steaming time — passed orally within the single family that makes authentic original Cao Lau in Hoi An.",
        dropRate: 0.04,
      },
    ],
  },
  {
    id: "hoi-an-lang-den-long",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Nghề Làm Đèn Lồng",
    nameEn: "Lantern Making Craft",
    ichDomain: "craftsmanship",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.3262, 15.8808],
    coverImage:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Huỳnh Văn Ba",
      nameEn: "Mr. Huynh Van Ba",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
      role: "artisan",
      roleEn: "Lantern Maker",
    },
    knowledgeSummary:
      "Nghề làm đèn lồng tại Hội An là di sản thủ công gắn liền với bản sắc đô thị. Đèn lồng truyền thống làm từ khung tre và vải lụa hoặc giấy, được sơn bằng tay với hoa văn đặc trưng. Đêm rằm hàng tháng, hàng nghìn đèn lồng thắp sáng phố cổ trong lễ hội đèn lồng huyền ảo.",
    knowledgeSummaryEn:
      "Lantern making in Hoi An is a craft heritage inseparable from the city's identity. Traditional lanterns are made from bamboo frames and silk or paper, hand-painted with distinctive motifs. On monthly full moon nights, thousands of lanterns illuminate the ancient town in a magical lantern festival.",
    elements: ["Khung tre", "Lụa nhuộm", "Sơn tay truyền thống", "Nến và bóng đèn"],
    npcScript: [
      {
        order: 1,
        question: "Một chiếc đèn lồng mất bao lâu để làm?",
        answer:
          "Đèn đơn giản thì 30 phút. Đèn phức tạp có hoa văn thêu tay thì 2–3 ngày. Khó nhất là làm khung tre — phải uốn tre ướt vào đúng hình dạng rồi để khô, nếu sai một chút thì toàn bộ đèn bị méo.",
      },
      {
        order: 2,
        question: "Mỗi màu đèn lồng có ý nghĩa gì?",
        answer:
          "Đỏ là may mắn và hỷ sự, vàng là phồn thịnh, xanh là bình an, tím là tâm linh. Ngày xưa mỗi dòng họ người Hoa ở phố cổ có màu đèn riêng để nhận ra nhà nhau — truyền thống này mất dần khi cộng đồng hòa lẫn.",
      },
      {
        order: 3,
        question: "Lễ hội đèn lồng rằm tháng Giêng đặc biệt thế nào?",
        answer:
          "Đêm rằm tháng Giêng (Tết Nguyên Tiêu) là đêm đặc biệt nhất — tất cả đèn điện tắt, chỉ còn đèn lồng và nến. Hàng nghìn người thả đèn hoa đăng trên sông Hoài. Khoảng 5–10 giờ tối là khoảng thời gian Hội An đẹp nhất trong năm.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh những dây đèn lồng màu sắc rực rỡ trên phố cổ về đêm",
      promptEn: "Photograph rows of colorful lanterns along the ancient town streets at night",
      referenceImages: [
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-lang-den-long-khung-tre",
        name: "Khung đèn tre",
        nameEn: "Bamboo Lantern Frame",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-den-long",
        sourceNodeName: "Nghề Làm Đèn Lồng",
        knowledgeHolderName: "Bà Lê Thị Hồng Nhung",
        image: "https://picsum.photos/seed/den-long-1/400/400",
        rarity: "Common",
        description: "Khung đèn lồng đan từ tre ngâm, vừa bền vừa đủ dẻo để uốn thành mọi hình dạng — nền tảng của mọi chiếc đèn Hội An.",
        descriptionEn: "Lantern frame woven from soaked bamboo — strong yet flexible enough to bend into any shape, the foundation of every Hoi An lantern.",
        dropRate: 0.6,
      },
      {
        id: "hoi-an-lang-den-long-lua-do",
        name: "Lụa đèn lồng màu đỏ",
        nameEn: "Red Silk Lantern Fabric",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-den-long",
        sourceNodeName: "Nghề Làm Đèn Lồng",
        knowledgeHolderName: "Bà Lê Thị Hồng Nhung",
        image: "https://picsum.photos/seed/den-long-2/400/400",
        rarity: "Rare",
        description: "Lụa đỏ phủ khung đèn, nhuộm bằng hoa lựu tự nhiên — màu đỏ không bao giờ phai dưới mưa Hội An.",
        descriptionEn: "Red silk covering the lantern frame, dyed naturally with pomegranate flowers — a red that never fades in Hoi An's rain.",
        dropRate: 0.28,
      },
      {
        id: "hoi-an-lang-den-long-keo",
        name: "Kéo thủ công đèn lồng",
        nameEn: "Lantern Craft Scissors",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-lang-den-long",
        sourceNodeName: "Nghề Làm Đèn Lồng",
        knowledgeHolderName: "Bà Lê Thị Hồng Nhung",
        image: "https://picsum.photos/seed/den-long-3/400/400",
        rarity: "Common",
        description: "Kéo thủ công bén mỏng dùng cắt vải lụa theo mẫu hoa văn — công cụ bất ly thân của thợ đèn lồng Hội An.",
        descriptionEn: "Sharp craft scissors for cutting silk to pattern — the inseparable tool of every Hoi An lantern maker.",
        dropRate: 0.55,
      },
    ],
  },
  {
    id: "hoi-an-my-son",
    cityId: "hoi-an",
    category: "tourist-landmark",
    name: "Thánh Địa Mỹ Sơn",
    nameEn: "My Son Hindu Sanctuary",
    ichDomain: "ritual",
    province: "quang-nam",
    unescoStatus: "inscribed",
    coordinates: [108.1254, 15.7634],
    coverImage:
      "https://images.unsplash.com/photo-1598970434722-544cc648601c?auto=format&fit=crop&q=80&w=1200",
    tier: 3,
    knowledgeHolder: {
      name: "Ông Trà Tấn Tuấn Anh",
      nameEn: "Mr. Tra Tan Tuan Anh",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      role: "ceremony-keeper",
      roleEn: "Cham Heritage Researcher",
    },
    knowledgeSummary:
      "Thánh Địa Mỹ Sơn là quần thể đền tháp Chăm-Pa xây từ thế kỷ 4 đến thế kỷ 13, thờ thần Shiva Hindu. Đây là trung tâm tín ngưỡng và chính trị của vương quốc Chăm-Pa — nền văn minh biển đã tồn tại 1.000 năm trên dải đất miền Trung Việt Nam. Được UNESCO công nhận năm 1999.",
    knowledgeSummaryEn:
      "My Son Sanctuary is a complex of Cham-Pa towers built from the 4th–13th centuries, dedicated to the Hindu god Shiva. This was the religious and political center of the Champa Kingdom — a maritime civilization that flourished for 1,000 years on Vietnam's central coast. UNESCO-listed in 1999.",
    elements: ["Tháp Chăm gạch đỏ", "Phù điêu thần Shiva", "Bình Yoni", "Bia đá chữ Chăm"],
    npcScript: [
      {
        order: 1,
        question: "Người Chăm xây tháp bằng kỹ thuật gì mà bền vậy?",
        answer:
          "Đó là bí ẩn lớn nhất của Mỹ Sơn. Gạch Chăm không dùng vữa — các viên gạch khít với nhau đến mức lưỡi dao không lọt qua được. Một số giả thuyết cho rằng họ nung gạch tại chỗ sau khi xếp xong, nhưng chưa ai chứng minh được. Kỹ thuật này thất truyền hoàn toàn khi Chăm-Pa suy tàn.",
      },
      {
        order: 2,
        question: "Vương quốc Chăm-Pa là ai?",
        answer:
          "Chăm-Pa là vương quốc Hindu hùng mạnh từ thế kỷ 2 đến thế kỷ 17, cai trị toàn bộ vùng ven biển miền Trung Việt Nam. Họ là thủy thủ và thương nhân biển tài ba, buôn bán với Ấn Độ, Ả Rập và Trung Hoa. Người Chăm hiện đại ở Ninh Thuận, Bình Thuận là hậu duệ trực tiếp.",
      },
      {
        order: 3,
        question: "Mỹ Sơn bị tàn phá như thế nào?",
        answer:
          "Bom Mỹ năm 1969 phá hủy gần một nửa quần thể. Nhóm tháp B được bảo tồn tốt nhất. Các tháp còn lại đang được khảo cổ và tu bổ với sự hỗ trợ của Ý, Pháp, và Nhật Bản. Mỗi năm phát lộ thêm nền móng tháp cổ chưa từng biết.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh tháp Chăm gạch đỏ giữa rừng cây và ánh sáng tự nhiên",
      promptEn: "Photograph the red brick Cham tower amid forest trees in natural light",
      referenceImages: [
        "https://images.unsplash.com/photo-1598970434722-544cc648601c?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hoi-an-my-son-gach-cham",
        name: "Gạch Chăm cổ",
        nameEn: "Ancient Cham Brick",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoi-an-my-son",
        sourceNodeName: "Thánh Địa Mỹ Sơn",
        knowledgeHolderName: "GS. Ngô Văn Doanh",
        image: "https://picsum.photos/seed/my-son-1/400/400",
        rarity: "Rare",
        description: "Mảnh gạch Chăm đỏ từ thế kỷ 4–14, được nung theo kỹ thuật bí ẩn vẫn chưa được khoa học hiện đại giải mã hoàn toàn.",
        descriptionEn: "Red Cham brick shard from the 4th–14th centuries, fired using a mysterious technique modern science has yet to fully decode.",
        dropRate: 0.3,
      },
      {
        id: "hoi-an-my-son-tuong-shiva",
        name: "Tượng Shiva Chăm",
        nameEn: "Cham Shiva Figurine",
        ichDomain: "ritual",
        sourceNodeId: "hoi-an-my-son",
        sourceNodeName: "Thánh Địa Mỹ Sơn",
        knowledgeHolderName: "GS. Ngô Văn Doanh",
        image: "https://picsum.photos/seed/my-son-2/400/400",
        rarity: "Epic",
        description: "Tượng Shiva đất nung phục chế theo mẫu nguyên gốc tìm thấy tại thánh địa Mỹ Sơn — vị thần tối cao trong tín ngưỡng Chăm Pa.",
        descriptionEn: "Replica terracotta Shiva figurine based on originals found at My Son Sanctuary — the supreme deity in Cham Pa belief.",
        dropRate: 0.1,
      },
      {
        id: "hoi-an-my-son-van-bia",
        name: "Bản dập văn bia Chăm",
        nameEn: "Cham Inscription Rubbing",
        ichDomain: "oral-tradition",
        sourceNodeId: "hoi-an-my-son",
        sourceNodeName: "Thánh Địa Mỹ Sơn",
        knowledgeHolderName: "GS. Ngô Văn Doanh",
        image: "https://picsum.photos/seed/my-son-3/400/400",
        rarity: "Legendary",
        description: "Bản thác bản chữ Phạn Chăm cổ khắc trên bia đá Mỹ Sơn — chỉ vài học giả thế giới đủ năng lực đọc hiểu toàn bộ.",
        descriptionEn: "Rubbing of ancient Cham Sanskrit inscriptions on a My Son stone stele — only a handful of scholars worldwide can fully interpret them.",
        dropRate: 0.04,
      },
    ],
  },
  {
    id: "hoian-bai-choi",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Nghệ thuật Bài Chòi Hội An",
    nameEn: "Hoi An Bai Choi Art",
    ichDomain: "performing-arts",
    province: "quang-nam",
    unescoStatus: "inscribed",
    coordinates: [108.3275, 15.8805],
    coverImage: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "NSƯT Lương Đáng",
      nameEn: "Meritorious Artist Luong Dang",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "performer",
      roleEn: "Bai Choi Master",
    },
    knowledgeSummary: "Bài chòi là một loại hình nghệ thuật dân gian đặc sắc kết hợp giữa âm nhạc, thơ ca, diễn xướng và trò chơi dân gian. Hình ảnh những chiếc chòi tre cao vút và tiếng hát đối đáp dí dỏm của các 'anh Hiệu', 'chị Hiệu' đã trở thành một phần linh hồn của các đêm hội phố cổ Hội An.",
    knowledgeSummaryEn: "Bai Choi is a unique folk art combining music, poetry, performance, and folk games. The sight of high bamboo huts and the witty responsive singing of 'masters of ceremonies' has become a soul part of Hoi An ancient town festival nights.",
    elements: ["Chòi tre", "Thẻ bài gỗ", "Đàn nhị", "San lạc"],
    npcScript: [
      {
        order: 1,
        question: "Làm thế nào để bắt đầu chơi Bài Chòi?",
        answer: "Rất đơn giản! Bạn mua một vài thẻ bài gỗ, ngồi trên chòi tre và lắng nghe anh Hiệu hát. Khi anh Hiệu xướng đúng tên thẻ bài bạn đang giữ, bạn gõ mõ báo hiệu. Người có đủ 3 thẻ bài được xướng tên trước sẽ là người chiến thắng."
      }
    ],
    items: [
      {
        id: "hoian-bai-choi-the-go",
        name: "Thẻ bài gỗ cổ",
        nameEn: "Ancient Wooden Playing Card",
        ichDomain: "performing-arts",
        sourceNodeId: "hoian-bai-choi",
        sourceNodeName: "Nghệ thuật Bài Chòi Hội An",
        knowledgeHolderName: "NSƯT Lương Đáng",
        image: "https://picsum.photos/seed/bai-choi-1/400/400",
        rarity: "Rare",
        description: "Thẻ bài làm từ gỗ mít, khắc tên các quân bài bằng chữ Nôm và hình vẽ dân gian sinh động.",
        descriptionEn: "A playing card made of jackwood, inscribed with card names in Nom script and vivid folk illustrations.",
        dropRate: 0.2
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh buổi biểu diễn Bài Chòi với các chòi tre ven sông",
      promptEn: "Photograph a Bai Choi performance with bamboo huts by the river",
      referenceImages: ["https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hoian-yen-sao",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Khai thác Yến sào Cù Lao Chàm",
    nameEn: "Cham Island Bird's Nest Harvesting",
    ichDomain: "traditional-knowledge",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.5000, 15.9300],
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
    tier: 3,
    knowledgeHolder: {
      name: "Ông Trần Văn Xuân",
      nameEn: "Mr. Tran Van Xuan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "artisan",
      roleEn: "Nest Harvester",
    },
    knowledgeSummary: "Nghề khai thác yến sào tại Cù Lao Chàm có lịch sử hàng trăm năm. Những người thợ yến phải có lòng dũng cảm và kỹ năng leo trèo điêu luyện trên những vách đá dựng đứng giữa biển khơi để thu hoạch những tổ yến quý giá, được mệnh danh là 'vàng trắng' của biển cả.",
    knowledgeSummaryEn: "Bird's nest harvesting in Cham Island has a history of hundreds of years. Harvesters must possess courage and skillful climbing abilities on vertical sea cliffs to harvest precious nests, known as the 'white gold' of the sea.",
    elements: ["Thang tre", "Sào tre", "Dây thừng", "Hang đá tự nhiên"],
    npcScript: [
      {
        order: 1,
        question: "Tại sao yến sào Cù Lao Chàm lại quý đến vậy?",
        answer: "Yến sào ở đây được khai thác hoàn toàn tự nhiên từ các hang động ngoài đảo. Do điều kiện khí hậu và nguồn thức ăn đặc trưng, tổ yến Cù Lao Chàm có hàm lượng dinh dưỡng cao và mùi vị thơm ngon đặc biệt hơn hẳn yến nuôi trong nhà."
      }
    ],
    items: [
      {
        id: "hoian-yen-sao-to-yen-huyet",
        name: "Tổ Yến Huyết",
        nameEn: "Blood Bird's Nest",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hoian-yen-sao",
        sourceNodeName: "Khai thác Yến sào Cù Lao Chàm",
        knowledgeHolderName: "Ông Trần Văn Xuân",
        image: "https://picsum.photos/seed/yen-sao-1/400/400",
        rarity: "Legendary",
        description: "Loại tổ yến cực kỳ quý hiếm có màu đỏ tự nhiên, được khai thác từ những hang đá sâu và hiểm trở nhất.",
        descriptionEn: "An extremely rare type of bird's nest with a natural red color, harvested from the deepest and most treacherous sea caves.",
        dropRate: 0.05
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh đội thợ khai thác yến đang leo vách đá hang yến",
      promptEn: "Photograph a team of harvesters climbing sea cave cliffs",
      referenceImages: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hoian-tre-dua",
    cityId: "hoi-an",
    category: "intangible-heritage",
    name: "Nghề làm nhà tre dừa Cẩm Thanh",
    nameEn: "Cam Thanh Bamboo and Coconut Craft",
    ichDomain: "craftsmanship",
    province: "quang-nam",
    unescoStatus: "unrecognized",
    coordinates: [108.3580, 15.8750],
    coverImage: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Nghệ nhân Võ Tấn Tân",
      nameEn: "Artisan Vo Tan Tan",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
      role: "artisan",
      roleEn: "Bamboo Master",
    },
    knowledgeSummary: "Làng Cẩm Thanh nổi tiếng với những cánh rừng dừa nước bạt ngàn và nghề làm nhà bằng tre, lá dừa nước. Những ngôi nhà này không chỉ mát mẻ, gần gũi với thiên nhiên mà còn có khả năng chống chọi tốt với gió bão, thể hiện sự thích nghi tuyệt vời của người dân vùng cửa sông.",
    knowledgeSummaryEn: "Cam Thanh village is famous for its vast water coconut forests and the craft of building houses from bamboo and coconut leaves. These houses are not only cool and close to nature but also resilient against storms, showing the great adaptation of estuarine dwellers.",
    elements: ["Lá dừa nước", "Thân tre già", "Dây mây", "Mái lợp thủ công"],
    npcScript: [
      {
        order: 1,
        question: "Một ngôi nhà tre dừa có thể sử dụng trong bao lâu?",
        answer: "Nếu được làm từ tre ngâm kỹ và lợp lá dừa nước đúng kỹ thuật, một ngôi nhà có thể tồn tại từ 15 đến 20 năm. Mái lá dừa nước rất bền và có khả năng cách nhiệt tuyệt vời."
      }
    ],
    items: [
      {
        id: "hoian-tre-dua-ghe-tre",
        name: "Ghế tre thủ công",
        nameEn: "Handcrafted Bamboo Chair",
        ichDomain: "craftsmanship",
        sourceNodeId: "hoian-tre-dua",
        sourceNodeName: "Nghề làm nhà tre dừa Cẩm Thanh",
        knowledgeHolderName: "Nghệ nhân Võ Tấn Tân",
        image: "https://picsum.photos/seed/tre-dua-1/400/400",
        rarity: "Common",
        description: "Chiếc ghế tre nhỏ xinh được làm từ những thanh tre già chọn lọc, xử lý tinh xảo để chống mối mọt.",
        descriptionEn: "A charming small bamboo chair made from selected aged bamboo, exquisitely treated for durability.",
        dropRate: 0.35
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh ngôi nhà mái lá dừa nước bên cạnh rừng dừa",
      promptEn: "Photograph a coconut-leaf-roofed house next to the coconut forest",
      referenceImages: ["https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1200"]
    }
  },
];
