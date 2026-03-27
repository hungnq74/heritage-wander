import type { HeritageNode } from "../types";

export const HUE_NODES: HeritageNode[] = [
  {
    id: "thuy-xuan-incense",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Làng Hương Thủy Xuân",
    nameEn: "Thuy Xuan Incense Village",
    ichDomain: "craftsmanship",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5634, 16.4420],
    coverImage:
      "https://images.unsplash.com/photo-1621360050720-4354737d2f93?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Lan",
      nameEn: "Ms. Nguyen Thi Lan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "artisan",
      roleEn: "Incense Maker",
    },
    knowledgeSummary:
      "Làng hương Thủy Xuân nằm ở phía Tây thành phố Huế, nổi tiếng với nghề làm hương trầm thủ công. Hương được làm từ bột trầm hương, quế, hồi, và các loại thảo mộc tự nhiên, phơi khô tự nhiên dưới nắng Huế. Những bó hương màu sắc rực rỡ tạo thành khung cảnh đặc trưng không lẫn với bất cứ nơi nào khác.",
    knowledgeSummaryEn:
      "Thuy Xuan incense village lies west of Hue city, renowned for handcrafted agarwood incense. Incense is made from agarwood powder, cinnamon, star anise, and natural herbs, air-dried under Hue's warm sun. The colorful bundles of drying incense create a scene found nowhere else.",
    elements: ["Bột trầm hương", "Quế", "Hồi", "Hương bài"],
    npcScript: [
      {
        order: 1,
        question: "Hương trầm Thủy Xuân khác gì hương thường?",
        answer:
          "Hương của chúng tôi không có hóa chất — 100% nguyên liệu tự nhiên. Trầm hương thật có mùi trầm ấm sâu, không hắc. Khi đốt, khói nhẹ và uốn lượn — đó là dấu hiệu chất lượng.",
      },
      {
        order: 2,
        question: "Công thức pha bột hương có bí mật không?",
        answer:
          "Có chứ! Tỉ lệ pha bột trầm, quế, hồi là bí quyết gia truyền 3 đời. Mỗi gia đình Thủy Xuân có tỉ lệ riêng — vì vậy mỗi nhà hương lại có mùi khác nhau một chút.",
      },
      {
        order: 3,
        question: "Làm một que hương mất bao lâu?",
        answer:
          "Từ khi pha bột đến khi đóng gói mất 3 ngày. Ngày 1 pha bột và quết lên que; ngày 2 phơi nắng; ngày 3 đóng gói. Nếu trời mưa thì kéo dài 5–7 ngày. Hương Thủy Xuân không sấy — phải phơi tự nhiên.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh giá phơi hương màu sắc rực rỡ dưới nắng",
      promptEn: "Photograph the colorful incense drying racks in the sun",
      referenceImages: [
        "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-huong-bo-huong-tre",
        name: "Bó hương tre sắc đỏ",
        nameEn: "Red Bamboo Incense Bundle",
        ichDomain: "craftsmanship",
        sourceNodeId: "thuy-xuan-incense",
        sourceNodeName: "Làng Hương Thủy Xuân",
        knowledgeHolderName: "Bà Hoàng Thị Lan",
        image: "https://picsum.photos/seed/huong-1/400/400",
        rarity: "Common",
        description: "Bó hương màu đỏ son phơi trên ruộng lúa, nét đẹp đặc trưng của làng hương Thủy Xuân mỗi sáng sớm.",
        descriptionEn: "Vivid red incense bundles drying in the rice fields, the defining morning sight of Thuy Xuan incense village.",
        dropRate: 0.6,
      },
      {
        id: "hue-huong-thuoc-bi-truyen",
        name: "Thuốc hương bí truyền",
        nameEn: "Secret Incense Blend",
        ichDomain: "craftsmanship",
        sourceNodeId: "thuy-xuan-incense",
        sourceNodeName: "Làng Hương Thủy Xuân",
        knowledgeHolderName: "Bà Hoàng Thị Lan",
        image: "https://picsum.photos/seed/huong-2/400/400",
        rarity: "Rare",
        description: "Hỗn hợp bột thảo mộc pha chế theo công thức gia truyền, tạo nên mùi hương đặc trưng của làng Thủy Xuân.",
        descriptionEn: "Herbal powder blend made from a family recipe, creating the distinctive scent synonymous with Thuy Xuan village.",
        dropRate: 0.28,
      },
      {
        id: "hue-huong-khuon-ep",
        name: "Khuôn ép hương",
        nameEn: "Incense Pressing Mold",
        ichDomain: "craftsmanship",
        sourceNodeId: "thuy-xuan-incense",
        sourceNodeName: "Làng Hương Thủy Xuân",
        knowledgeHolderName: "Bà Hoàng Thị Lan",
        image: "https://picsum.photos/seed/huong-3/400/400",
        rarity: "Rare",
        description: "Khuôn gỗ cũ dùng ép bột nhang vào que tre, tạo hình hương đều tay — công cụ không thể thiếu của nghề hương.",
        descriptionEn: "Old wooden mold used to press incense powder onto bamboo sticks for even shaping — an indispensable tool of the craft.",
        dropRate: 0.28,
      },
      {
        id: "hue-huong-hop-hoang-cung",
        name: "Hộp hương hoàng cung",
        nameEn: "Royal Palace Incense Box",
        ichDomain: "craftsmanship",
        sourceNodeId: "thuy-xuan-incense",
        sourceNodeName: "Làng Hương Thủy Xuân",
        knowledgeHolderName: "Bà Hoàng Thị Lan",
        image: "https://picsum.photos/seed/huong-4/400/400",
        rarity: "Legendary",
        description: "Hộp sơn son chứa hương trầm được dâng lên hoàng cung Nguyễn, công thức chỉ được truyền cho một người mỗi thế hệ.",
        descriptionEn: "Lacquered box of agarwood incense once offered to the Nguyen imperial court, whose formula is passed to only one person per generation.",
        dropRate: 0.04,
      },
    ],
  },
  {
    id: "hue-dai-noi",
    cityId: "hue",
    category: "tourist-landmark",
    name: "Đại Nội Huế",
    nameEn: "Hue Imperial Citadel",
    ichDomain: "traditional-knowledge",
    province: "thua-thien-hue",
    unescoStatus: "inscribed",
    coordinates: [107.5779, 16.4698],
    coverImage:
      "https://images.unsplash.com/photo-1559592442-8c1050a41f6e?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Trần Đức Anh Sơn",
      nameEn: "Mr. Tran Duc Anh Son",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "elder",
      roleEn: "Imperial Heritage Historian",
    },
    knowledgeSummary:
      "Đại Nội Huế — kinh đô của 13 triều vua nhà Nguyễn (1802–1945) — là quần thể kiến trúc cung đình lớn nhất Đông Nam Á còn sót lại. Được UNESCO công nhận năm 1993 cùng các lăng tẩm Huế, Đại Nội bao gồm Ngọ Môn, Điện Thái Hòa, Tử Cấm Thành và hàng trăm công trình hoàng gia.",
    knowledgeSummaryEn:
      "The Hue Imperial Citadel — capital of 13 Nguyen dynasty emperors (1802–1945) — is the largest surviving royal architectural complex in Southeast Asia. UNESCO-inscribed in 1993, it encompasses the Noon Gate, Thai Hoa Palace, the Forbidden Purple City, and hundreds of royal buildings.",
    elements: ["Ngọ Môn", "Điện Thái Hòa", "Tử Cấm Thành", "Hiện vật hoàng gia"],
    npcScript: [
      {
        order: 1,
        question: "Đại Nội được xây dựng như thế nào?",
        answer:
          "Vua Gia Long bắt đầu xây dựng năm 1805 trên tổng diện tích 520 héc-ta với ba vòng thành: Kinh Thành, Hoàng Thành và Tử Cấm Thành. Hàng chục nghìn nhân công và nghệ nhân từ khắp cả nước được điều về xây dựng suốt 30 năm.",
      },
      {
        order: 2,
        question: "Điện Thái Hòa có vai trò gì trong triều đình?",
        answer:
          "Điện Thái Hòa là nơi nhà vua thiết triều và tổ chức các lễ quan trọng nhất. Ngai vàng được đặt ở đây là biểu tượng quyền lực tối cao. Chỉ các quan đại thần mới được phép vào điện — dân thường tuyệt đối cấm.",
      },
      {
        order: 3,
        question: "Tại sao Đại Nội lại bị tàn phá nhiều?",
        answer:
          "Năm 1885, quân Pháp tấn công Huế và cướp phá kho báu hoàng gia. Năm 1968, trận Mậu Thân gây thiệt hại nặng nề. Hiện nay chỉ còn khoảng 130/148 công trình ban đầu. Công tác trùng tu đang được thực hiện liên tục từ 1993.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh Ngọ Môn nhìn từ phía sân Đại Nội",
      promptEn: "Photograph the Noon Gate from the Imperial Citadel courtyard",
      referenceImages: [
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-dai-noi-ngoi-hoang",
        name: "Ngói hoàng lưu ly",
        nameEn: "Imperial Yellow Glazed Tile",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-dai-noi",
        sourceNodeName: "Đại Nội Huế",
        knowledgeHolderName: "Ông Nguyễn Phước Hải Trung",
        image: "https://picsum.photos/seed/dai-noi-1/400/400",
        rarity: "Common",
        description: "Mảnh ngói lưu ly vàng từ mái điện Thái Hoà, màu vàng đặc quyền của hoàng gia triều Nguyễn.",
        descriptionEn: "Yellow glazed tile shard from the roof of Thai Hoa Palace, the exclusive imperial gold color of the Nguyen dynasty.",
        dropRate: 0.6,
      },
      {
        id: "hue-dai-noi-gach-thanh",
        name: "Gạch hoàng thành",
        nameEn: "Imperial City Brick",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-dai-noi",
        sourceNodeName: "Đại Nội Huế",
        knowledgeHolderName: "Ông Nguyễn Phước Hải Trung",
        image: "https://picsum.photos/seed/dai-noi-2/400/400",
        rarity: "Common",
        description: "Viên gạch từ tường hoàng thành, đúc tay từ đất sét Hải Lăng theo kỹ thuật nung đặc biệt giữ được 200 năm.",
        descriptionEn: "Brick from the imperial city wall, hand-formed from Hai Lang clay using a special firing technique that lasts 200 years.",
        dropRate: 0.55,
      },
      {
        id: "hue-dai-noi-sac-chi",
        name: "Sắc chỉ hoàng gia",
        nameEn: "Imperial Decree",
        ichDomain: "oral-tradition",
        sourceNodeId: "hue-dai-noi",
        sourceNodeName: "Đại Nội Huế",
        knowledgeHolderName: "Ông Nguyễn Phước Hải Trung",
        image: "https://picsum.photos/seed/dai-noi-3/400/400",
        rarity: "Epic",
        description: "Bản sao sắc chỉ hoàng gia viết trên lụa vàng, ghi chiếu lệnh của vua Gia Long ban đầu xây dựng kinh thành.",
        descriptionEn: "Replica of a royal decree written on gold silk, recording Emperor Gia Long's original edict to build the imperial citadel.",
        dropRate: 0.09,
      },
      {
        id: "hue-dai-noi-an-vang",
        name: "Ấn vàng triều Nguyễn",
        nameEn: "Nguyen Dynasty Gold Seal",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hue-dai-noi",
        sourceNodeName: "Đại Nội Huế",
        knowledgeHolderName: "Ông Nguyễn Phước Hải Trung",
        image: "https://picsum.photos/seed/dai-noi-4/400/400",
        rarity: "Legendary",
        description: "Ấn vàng Hoàng đế Chi Bảo — bảo vật quốc gia số một của triều Nguyễn, biểu tượng của quyền lực tối cao.",
        descriptionEn: "The Hoang De Chi Bao gold seal — the most prized national treasure of the Nguyen dynasty, symbol of supreme authority.",
        dropRate: 0.03,
      },
    ],
  },
  {
    id: "hue-lang-khai-dinh",
    cityId: "hue",
    category: "tourist-landmark",
    name: "Lăng Khải Định",
    nameEn: "Khai Dinh Mausoleum",
    ichDomain: "craftsmanship",
    province: "thua-thien-hue",
    unescoStatus: "inscribed",
    coordinates: [107.5961, 16.3995],
    coverImage:
      "https://images.unsplash.com/photo-1596701062351-be5f6a42a4a9?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Ông Lê Quang Thái",
      nameEn: "Mr. Le Quang Thai",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
      role: "artisan",
      roleEn: "Mosaic Craftsman",
    },
    knowledgeSummary:
      "Lăng Khải Định (1920–1931) là sự kết hợp độc đáo của kiến trúc Á Đông và phong cách Art Deco châu Âu. Ẩn Phong điện — nơi thờ tự trong lăng — được trang trí toàn bộ bằng khảm sành sứ và thủy tinh màu, tạo nên một tuyệt tác nghệ thuật trang trí không nơi nào sánh được.",
    knowledgeSummaryEn:
      "Khai Dinh Mausoleum (1920–1931) is a unique blend of Asian architecture and European Art Deco. The Thien Dinh Palace interior is entirely decorated with mosaic ceramics and colored glass, creating an unmatched decorative masterpiece.",
    elements: ["Khảm sành sứ", "Phong cách Art Deco", "Tượng vệ binh", "Điêu khắc rồng"],
    npcScript: [
      {
        order: 1,
        question: "Lăng Khải Định được xây bao lâu?",
        answer:
          "Mất 11 năm xây dựng (1920–1931), vua Khải Định không kịp thấy lăng hoàn thành vì ông mất năm 1925. Con trai là vua Bảo Đại tiếp tục hoàn thiện. Đây là lăng tẩm tốn kém nhất và mất nhiều thời gian nhất trong 7 lăng triều Nguyễn.",
      },
      {
        order: 2,
        question: "Kỹ thuật khảm sành sứ đặc biệt như thế nào?",
        answer:
          "Nghệ nhân dùng mảnh sành, sứ, thủy tinh màu vỡ từ đồ vật thông thường để ghép thành tranh tường hoành tráng. Toàn bộ nội thất Thiên Định cung được khảm bằng kỹ thuật này — hàng triệu mảnh ghép tạo thành cảnh rồng, hoa, mây mang ý nghĩa phong thủy.",
      },
      {
        order: 3,
        question: "Tượng vệ binh trước lăng có ý nghĩa gì?",
        answer:
          "Hai hàng tượng quan văn, quan võ, voi, ngựa đứng canh lăng là 'danh dự đội' bảo vệ nhà vua ở cõi vĩnh cửu. Điều thú vị là một số tượng lính mặc quân phục Pháp — phản ánh bối cảnh lịch sử Pháp thuộc khi lăng được xây.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh nội thất khảm sành sứ rực rỡ của Thiên Định cung",
      promptEn: "Photograph the dazzling mosaic interior of Thien Dinh Palace",
      referenceImages: [
        "https://images.unsplash.com/photo-1589308454676-353d26a79857?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-khai-dinh-manh-kham",
        name: "Mảnh khảm sứ mosaic",
        nameEn: "Porcelain Mosaic Shard",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-lang-khai-dinh",
        sourceNodeName: "Lăng Khải Định",
        knowledgeHolderName: "Ông Phan Văn Thành",
        image: "https://picsum.photos/seed/khai-dinh-1/400/400",
        rarity: "Rare",
        description: "Mảnh sứ ghép từ đồ gốm nhập từ Trung Quốc và Châu Âu, dùng trang trí toàn bộ nội thất lăng Khải Định.",
        descriptionEn: "Porcelain shard from ceramics imported from China and Europe, used to cover every surface inside Khai Dinh's mausoleum.",
        dropRate: 0.3,
      },
      {
        id: "hue-khai-dinh-tuong-ve-binh",
        name: "Tượng vệ binh xi-măng",
        nameEn: "Cement Guardian Statue",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-lang-khai-dinh",
        sourceNodeName: "Lăng Khải Định",
        knowledgeHolderName: "Ông Phan Văn Thành",
        image: "https://picsum.photos/seed/khai-dinh-2/400/400",
        rarity: "Common",
        description: "Tượng vệ binh xi-măng theo mẫu châu Âu canh giữ lăng — dấu ấn thẩm mỹ Đông–Tây pha trộn độc đáo.",
        descriptionEn: "European-style cement guardian statue at the mausoleum — a striking example of East–West aesthetic fusion.",
        dropRate: 0.55,
      },
      {
        id: "hue-khai-dinh-ban-thiet-ke",
        name: "Bản thiết kế lăng",
        nameEn: "Mausoleum Blueprint",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hue-lang-khai-dinh",
        sourceNodeName: "Lăng Khải Định",
        knowledgeHolderName: "Ông Phan Văn Thành",
        image: "https://picsum.photos/seed/khai-dinh-3/400/400",
        rarity: "Epic",
        description: "Bản vẽ kiến trúc gốc của lăng Khải Định, ghi rõ sự kết hợp giữa phong cách Gothic Pháp và kiến trúc cung đình Nguyễn.",
        descriptionEn: "Original architectural drawing of Khai Dinh Mausoleum, detailing the blend of French Gothic and Nguyen court architecture.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "hue-nha-nhac",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Nhã Nhạc Cung Đình Huế",
    nameEn: "Hue Royal Court Music",
    ichDomain: "performing-arts",
    province: "thua-thien-hue",
    unescoStatus: "inscribed",
    coordinates: [107.5810, 16.4680],
    coverImage:
      "https://images.unsplash.com/photo-1599592653287-21a166e927c6?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Nghệ nhân Nhân dân Trần Kích",
      nameEn: "National Artist Tran Kich",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      role: "performer",
      roleEn: "Master Court Musician",
    },
    knowledgeSummary:
      "Nhã Nhạc Cung Đình Huế — âm nhạc cung đình Việt Nam — là Di sản Văn hóa Phi vật thể Đại diện của Nhân loại UNESCO (2003). Được phát triển từ thế kỷ 13 và đạt đỉnh cao dưới triều Nguyễn, Nhã Nhạc bao gồm hàng chục thể loại nhạc cụ và vũ điệu phục vụ các nghi lễ hoàng gia từ tế trời đến đón tiếp sứ thần.",
    knowledgeSummaryEn:
      "Hue Royal Court Music (Nha Nhac) is a UNESCO Intangible Cultural Heritage of Humanity (2003). Developed since the 13th century and reaching its peak under the Nguyen dynasty, it encompasses dozens of instrument types and dances used in royal ceremonies from heaven worship to ambassador receptions.",
    elements: ["Đàn Nhị", "Trống cung đình", "Vũ điệu truyền thống", "Trang phục biểu diễn"],
    npcScript: [
      {
        order: 1,
        question: "Nhã Nhạc khác nhạc truyền thống thường như thế nào?",
        answer:
          "Nhã Nhạc là âm nhạc của triều đình — trang trọng, uy nghi và đúng mực. Mỗi lễ nghi đều có bản nhạc riêng: lễ tế Nam Giao dùng nhạc khác với lễ đón tiếp sứ thần. Nhạc không chỉ để nghe — nó là ngôn ngữ của quyền lực.",
      },
      {
        order: 2,
        question: "Có bao nhiêu loại nhạc cụ trong Nhã Nhạc?",
        answer:
          "Dàn nhạc Nhã Nhạc gồm hơn 20 loại nhạc cụ chia thành 8 nhóm âm thanh: kim (đồng), thạch (đá), ty (dây), trúc (ống), bào (bầu), thổ (đất), cách (da), mộc (gỗ). Chỉ Hàn Quốc và Nhật Bản còn duy trì hệ thống tương tự.",
      },
      {
        order: 3,
        question: "Làm thế nào để bảo tồn Nhã Nhạc hiện nay?",
        answer:
          "Nhà hát Duyệt Thị Đường trong Đại Nội là nơi biểu diễn Nhã Nhạc cho du khách. Trung tâm Bảo tồn Di tích Cố đô Huế đào tạo thế hệ trẻ. Nhưng thực sự chỉ còn vài chục nghệ nhân cao tuổi còn nắm đầy đủ tinh hoa Nhã Nhạc cổ.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh buổi biểu diễn Nhã Nhạc hoặc nhạc cụ cung đình",
      promptEn: "Photograph a Nha Nhac performance or royal court instruments",
      referenceImages: [
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-nha-nhac-dan-nhi",
        name: "Đàn nhị cung đình",
        nameEn: "Court Fiddle",
        ichDomain: "performing-arts",
        sourceNodeId: "hue-nha-nhac",
        sourceNodeName: "Nhã Nhạc Cung Đình Huế",
        knowledgeHolderName: "Nhạc sĩ Trần Kích",
        image: "https://picsum.photos/seed/nha-nhac-1/400/400",
        rarity: "Epic",
        description: "Đàn nhị dùng trong dàn nhã nhạc cung đình Nguyễn, tiếng đàn được ví như tiếng khóc của linh hồn cố đô.",
        descriptionEn: "A court fiddle used in the Nguyen imperial nhac orchestra, its sound likened to the weeping soul of the ancient capital.",
        dropRate: 0.1,
      },
      {
        id: "hue-nha-nhac-ban-nhac-ngu",
        name: "Bản nhạc Ngự",
        nameEn: "Imperial Musical Score",
        ichDomain: "performing-arts",
        sourceNodeId: "hue-nha-nhac",
        sourceNodeName: "Nhã Nhạc Cung Đình Huế",
        knowledgeHolderName: "Nhạc sĩ Trần Kích",
        image: "https://picsum.photos/seed/nha-nhac-2/400/400",
        rarity: "Legendary",
        description: "Tờ nhạc chép tay bài Ngự phong phúc, chỉ được tấu trong buổi thiết triều của vua Nguyễn — không ai còn chơi đầy đủ được.",
        descriptionEn: "Handwritten score of 'Ngu Phong Phuc', performed only at Nguyen royal audiences — no one can play it in its entirety anymore.",
        dropRate: 0.04,
      },
      {
        id: "hue-nha-nhac-phuc-trang",
        name: "Phục trang nhã nhạc",
        nameEn: "Court Music Costume",
        ichDomain: "performing-arts",
        sourceNodeId: "hue-nha-nhac",
        sourceNodeName: "Nhã Nhạc Cung Đình Huế",
        knowledgeHolderName: "Nhạc sĩ Trần Kích",
        image: "https://picsum.photos/seed/nha-nhac-3/400/400",
        rarity: "Rare",
        description: "Áo dài cung đình thêu chỉ vàng của nhạc công nhã nhạc, theo mẫu phục dựng từ tranh triều Nguyễn.",
        descriptionEn: "Gold-embroidered court ao dai worn by nhac musicians, recreated from Nguyen dynasty paintings.",
        dropRate: 0.28,
      },
    ],
  },
  {
    id: "hue-am-thuc",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Ẩm Thực Cung Đình Huế",
    nameEn: "Hue Royal Cuisine",
    ichDomain: "culinary",
    province: "thua-thien-hue",
    unescoStatus: "nominated",
    coordinates: [107.5900, 16.4640],
    coverImage:
      "https://images.unsplash.com/photo-1503767835115-9daea1e149e8?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Đầu bếp Hoàng Thị Kim Cúc",
      nameEn: "Chef Hoang Thi Kim Cuc",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
      role: "artisan",
      roleEn: "Royal Cuisine Master Chef",
    },
    knowledgeSummary:
      "Ẩm thực cung đình Huế được phát triển qua 9 đời vua Nguyễn, nổi tiếng về sự tinh tế, cầu kỳ và mang giá trị mỹ thuật cao. Các món ăn hoàng cung thường có màu sắc đẹp, trình bày như tác phẩm nghệ thuật và phải qua hàng chục công đoạn chế biến. Bún bò Huế, bánh bèo, bánh khoái là những đặc sản nổi tiếng nhất.",
    knowledgeSummaryEn:
      "Hue royal cuisine developed through 9 Nguyen emperors, renowned for its refinement, elaborateness, and aesthetic value. Imperial dishes are visually beautiful, presented like works of art, requiring dozens of preparation steps. Bun bo Hue, banh beo, and banh khoai are the most celebrated specialties.",
    elements: ["Bún bò Huế", "Bánh bèo", "Bánh khoái", "Mâm cỗ cung đình"],
    npcScript: [
      {
        order: 1,
        question: "Ẩm thực cung đình Huế đặc biệt ở điểm nào?",
        answer:
          "Vua Minh Mạng yêu cầu mỗi bữa ăn có 50 món khác nhau, không được lặp lại trong 10 ngày. Vì vậy các đầu bếp cung đình phải sáng tạo liên tục. Nhiều kỹ thuật nấu và cách trình bày từ đó lan rộng ra dân gian Huế.",
      },
      {
        order: 2,
        question: "Bún bò Huế khác bún bò miền Nam như thế nào?",
        answer:
          "Bún bò Huế có nước dùng đặc trưng vì dùng sả, mắm ruốc Huế và ớt bột — không phải nước trong mà có màu đỏ cam sóng sánh. Miếng thịt bò phải kho sả trước khi bỏ vào nồi. Một tô bún bò thật sự phải ăn từ 6–7 giờ sáng, nóng bỏng ngay tại chỗ.",
      },
      {
        order: 3,
        question: "Bánh bèo Huế có bao nhiêu loại?",
        answer:
          "Riêng 'nhóm bánh bèo' đã có hơn 10 loại: bánh bèo, bánh nậm, bánh lọc, bánh ít, bánh bột lọc trần... Mỗi loại có kỹ thuật khác nhau và ăn kèm với thứ khác nhau. Người Huế ăn bánh bèo như ăn snack — nhẹ nhàng nhưng không bao giờ chán.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh mâm bánh bèo hoặc tô bún bò đặc trưng Huế",
      promptEn: "Photograph a tray of banh beo or an authentic Hue beef noodle bowl",
      referenceImages: [
        "https://images.unsplash.com/photo-1503767835115-9daea1e149e8?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-am-thuc-chen-bun-bo",
        name: "Chén bún bò Huế",
        nameEn: "Hue Beef Noodle Bowl",
        ichDomain: "culinary",
        sourceNodeId: "hue-am-thuc",
        sourceNodeName: "Ẩm Thực Cung Đình Huế",
        knowledgeHolderName: "Bà Tôn Nữ Thị Hà",
        image: "https://picsum.photos/seed/am-thuc-hue-1/400/400",
        rarity: "Common",
        description: "Tô bún bò Huế đúng điệu với sả, ruốc tôm và chả cua — công thức khác hẳn bún bò nơi khác.",
        descriptionEn: "Authentic Hue beef noodle soup with lemongrass, shrimp paste, and crab cake — a recipe that stands apart from all other versions.",
        dropRate: 0.6,
      },
      {
        id: "hue-am-thuc-khay-banh",
        name: "Khay bánh cung đình",
        nameEn: "Royal Dessert Tray",
        ichDomain: "culinary",
        sourceNodeId: "hue-am-thuc",
        sourceNodeName: "Ẩm Thực Cung Đình Huế",
        knowledgeHolderName: "Bà Tôn Nữ Thị Hà",
        image: "https://picsum.photos/seed/am-thuc-hue-2/400/400",
        rarity: "Epic",
        description: "Khay bánh phục dựng gồm 12 loại bánh cung đình Nguyễn được phục vụ trong yến tiệc hoàng gia, mỗi chiếc bé như ngón tay.",
        descriptionEn: "Reconstructed tray of 12 Nguyen court pastries served at royal banquets, each piece no larger than a finger.",
        dropRate: 0.09,
      },
      {
        id: "hue-am-thuc-that-tran",
        name: "Công thức thất trân",
        nameEn: "Seven Delicacies Recipe",
        ichDomain: "culinary",
        sourceNodeId: "hue-am-thuc",
        sourceNodeName: "Ẩm Thực Cung Đình Huế",
        knowledgeHolderName: "Bà Tôn Nữ Thị Hà",
        image: "https://picsum.photos/seed/am-thuc-hue-3/400/400",
        rarity: "Endangered",
        description: "Công thức nấu bảy món quý hiếm từ bếp cung Nguyễn — gần như thất truyền, chỉ còn hai người biết đủ tất cả các bước.",
        descriptionEn: "Recipe for the seven rare delicacies from the Nguyen palace kitchen — nearly lost, with only two people still knowing all the steps.",
        dropRate: 0.03,
      },
    ],
  },
  {
    id: "hue-chua-thien-mu",
    cityId: "hue",
    category: "must-visit",
    name: "Chùa Thiên Mụ",
    nameEn: "Thien Mu Pagoda",
    ichDomain: "ritual",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5504, 16.4540],
    coverImage:
      "https://images.unsplash.com/photo-1621245033772-e14b71d6c8d7?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Thượng tọa Thích Hải Ấn",
      nameEn: "Venerable Thich Hai An",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      role: "ceremony-keeper",
      roleEn: "Pagoda Abbot",
    },
    knowledgeSummary:
      "Chùa Thiên Mụ xây năm 1601 trên đồi Hà Khê bên dòng sông Hương là ngôi chùa lâu đời nhất Huế và là biểu tượng tâm linh của thành phố. Tháp Phước Duyên 7 tầng cao 21 mét xây năm 1844 là công trình kiến trúc phật giáo nổi tiếng nhất Việt Nam, xuất hiện trên nhiều đồng tiền và tem bưu chính.",
    knowledgeSummaryEn:
      "Thien Mu Pagoda, built in 1601 on Ha Khe Hill along the Perfume River, is Hue's oldest and most iconic spiritual monument. The 21-meter 7-story Phuoc Duyen Tower, built in 1844, is Vietnam's most famous Buddhist architectural landmark, appearing on currency and postage stamps.",
    elements: ["Tháp Phước Duyên", "Chuông đồng 3 tấn", "Bước sân đình", "Xe Austin cổ"],
    npcScript: [
      {
        order: 1,
        question: "Chùa Thiên Mụ được xây dựng theo truyền thuyết nào?",
        answer:
          "Chúa Nguyễn Hoàng khi đến đây thấy một bà lão mặc áo đỏ ngồi trên đồi, bảo rằng sẽ có vị chúa đến xây chùa trấn giữ long mạch. Chúa lập tức cho xây chùa và đặt tên Thiên Mụ — Bà Trời. Đó là năm 1601.",
      },
      {
        order: 2,
        question: "Chuông đồng trong chùa to như thế nào?",
        answer:
          "Chuông đồng Thiên Mụ đúc năm 1710 nặng hơn 2 tấn, cao 2,5 mét. Tiếng chuông ngân vang có thể nghe từ xa 10 km trong đêm yên tĩnh. Người Huế xưa lấy tiếng chuông Thiên Mụ như đồng hồ báo hiệu khuya.",
      },
      {
        order: 3,
        question: "Chiếc xe Austin trong chùa có ý nghĩa gì?",
        answer:
          "Chiếc Austin năm 1963 là xe của Hòa thượng Thích Quảng Đức — người đã tự thiêu ở Sài Gòn để phản đối chính quyền Ngô Đình Diệm. Xe được đưa về chùa Thiên Mụ bảo quản như báu vật tâm linh và lịch sử.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh tháp Phước Duyên 7 tầng từ phía sân chùa",
      promptEn: "Photograph the 7-story Phuoc Duyen Tower from the pagoda courtyard",
      referenceImages: [
        "https://images.unsplash.com/photo-1621245033772-e14b71d6c8d7?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-thien-mu-chuong-dong",
        name: "Chuông đồng 1710",
        nameEn: "1710 Bronze Bell",
        ichDomain: "ritual",
        sourceNodeId: "hue-chua-thien-mu",
        sourceNodeName: "Chùa Thiên Mụ",
        knowledgeHolderName: "Đại đức Thích Hải Ấn",
        image: "https://picsum.photos/seed/thien-mu-1/400/400",
        rarity: "Legendary",
        description: "Chuông đồng đúc năm 1710 nặng 2 tấn, tiếng vang xa 10 km — được dân gian coi là tiếng nói của thần linh.",
        descriptionEn: "A 2-tonne bronze bell cast in 1710 whose sound carries 10 km — said by locals to be the voice of the divine.",
        dropRate: 0.04,
      },
      {
        id: "hue-thien-mu-thap-phuoc-duyen",
        name: "Tháp Phước Duyên thu nhỏ",
        nameEn: "Phuoc Duyen Tower Miniature",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-chua-thien-mu",
        sourceNodeName: "Chùa Thiên Mụ",
        knowledgeHolderName: "Đại đức Thích Hải Ấn",
        image: "https://picsum.photos/seed/thien-mu-2/400/400",
        rarity: "Rare",
        description: "Mô hình đất nung tháp Phước Duyên 7 tầng — biểu tượng nổi tiếng nhất của Huế, được đúc theo nguyên mẫu năm 1844.",
        descriptionEn: "Terracotta model of the 7-storey Phuoc Duyen tower — Hue's most iconic landmark, cast after the 1844 original.",
        dropRate: 0.28,
      },
      {
        id: "hue-thien-mu-den-bat-qua",
        name: "Đèn bát quái",
        nameEn: "Octagonal Lantern",
        ichDomain: "ritual",
        sourceNodeId: "hue-chua-thien-mu",
        sourceNodeName: "Chùa Thiên Mụ",
        knowledgeHolderName: "Đại đức Thích Hải Ấn",
        image: "https://picsum.photos/seed/thien-mu-3/400/400",
        rarity: "Common",
        description: "Đèn lồng bát giác sơn đỏ treo dọc hành lang chùa, mỗi mặt khắc một quẻ Kinh Dịch mang ý nghĩa cầu bình an.",
        descriptionEn: "Red octagonal lantern lining the temple corridor, each face engraved with an I Ching trigram for peace and protection.",
        dropRate: 0.6,
      },
    ],
  },
  {
    id: "hue-dong-ba",
    cityId: "hue",
    category: "must-visit",
    name: "Chợ Đông Ba",
    nameEn: "Dong Ba Market",
    ichDomain: "culinary",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5943, 16.4714],
    coverImage:
      "https://images.unsplash.com/photo-1563293815-99884570144d?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Phan Thị Hoa",
      nameEn: "Mrs. Phan Thi Hoa",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "artisan",
      roleEn: "Market Trader",
    },
    knowledgeSummary:
      "Chợ Đông Ba nằm bên bờ sông Hương là trung tâm thương mại lớn nhất Huế, xây từ thế kỷ 17 và tồn tại liên tục đến ngày nay. Nơi đây tập trung đặc sản Huế từ kẹo mè xửng, mè xửng, mứt Tết, đến tơ lụa, nón bài thơ và đồ thủ công mỹ nghệ truyền thống.",
    knowledgeSummaryEn:
      "Dong Ba Market on the banks of the Perfume River is Hue's largest commercial hub, built in the 17th century and operating continuously to this day. It concentrates Hue specialties from sesame candy and glazed sweets to silk, poetry hats, and traditional handicrafts.",
    elements: ["Kẹo mè xửng", "Nón bài thơ", "Tơ lụa Huế", "Mứt Tết truyền thống"],
    npcScript: [
      {
        order: 1,
        question: "Kẹo mè xửng Huế có gì đặc biệt?",
        answer:
          "Kẹo mè xửng chỉ có ở Huế — làm từ mè rang, đường đun nóng và không có phụ gia. Bí quyết là đun đường đến đúng nhiệt độ caramel hoàn hảo — non lửa thì mềm dính, già lửa thì cứng giòn. Nghề này ở Huế truyền đến 5–6 đời rồi.",
      },
      {
        order: 2,
        question: "Nón bài thơ Huế là gì?",
        answer:
          "Nón bài thơ là loại nón lá đặc biệt của Huế, khi soi ra ánh sáng thấy hình ảnh cảnh Huế và bài thơ được cài bên trong — hoàn toàn thủ công. Người làm phải cài từng lớp lá cọ mỏng theo đúng góc độ để khi soi mới thấy được hình ảnh.",
      },
      {
        order: 3,
        question: "Giờ nào tốt nhất để đến chợ Đông Ba?",
        answer:
          "5–7 giờ sáng là thời gian vàng — hàng tươi nhất, người bán vui vẻ nhất và giá chưa bị 'giá du lịch'. Lúc đó chợ có cả bún bò, bánh mì thịt nguội, bánh canh — bữa sáng ngon nhất Huế chỉ 20–30 nghìn đồng.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh gian hàng kẹo mè xửng hoặc nón bài thơ đầy màu sắc",
      promptEn: "Photograph a sesame candy stall or colorful poetry hats",
      referenceImages: [
        "https://images.unsplash.com/photo-1563293815-99884570144d?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-dong-ba-non-la-hue",
        name: "Nón lá Huế",
        nameEn: "Hue Conical Hat",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-dong-ba",
        sourceNodeName: "Chợ Đông Ba",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/dong-ba-1/400/400",
        rarity: "Common",
        description: "Nón lá Huế mỏng nhẹ với bài thơ lồng vào bên trong nhìn qua ánh nắng — nón bài thơ đặc trưng không nơi nào có.",
        descriptionEn: "Hue's delicate conical hat with a poem hidden inside, visible only when held up to the light — the iconic 'poem hat' found nowhere else.",
        dropRate: 0.6,
      },
      {
        id: "hue-dong-ba-to-lua",
        name: "Tơ lụa Huế",
        nameEn: "Hue Silk Fabric",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-dong-ba",
        sourceNodeName: "Chợ Đông Ba",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/dong-ba-2/400/400",
        rarity: "Rare",
        description: "Lụa Huế dệt bằng tơ tằm tự nhiên màu tím Huế đặc trưng — màu hoàng gia xưa chỉ dành cho phi tần và công chúa.",
        descriptionEn: "Hue silk woven from natural silkworm thread in the signature Hue purple — once a royal color reserved for concubines and princesses.",
        dropRate: 0.28,
      },
      {
        id: "hue-dong-ba-bai-choi",
        name: "Bài chòi Đông Ba",
        nameEn: "Bai Choi Game Card",
        ichDomain: "performing-arts",
        sourceNodeId: "hue-dong-ba",
        sourceNodeName: "Chợ Đông Ba",
        knowledgeHolderName: "Bà Nguyễn Thị Lụa",
        image: "https://picsum.photos/seed/dong-ba-3/400/400",
        rarity: "Rare",
        description: "Lá bài chòi vẽ tay với nhân vật dân gian, dùng trong trò chơi dân gian Bài Chòi được UNESCO công nhận năm 2017.",
        descriptionEn: "Hand-drawn bai choi card featuring folk characters, used in the traditional Bai Choi game recognized by UNESCO in 2017.",
        dropRate: 0.28,
      },
    ],
  },
  {
    id: "hue-lang-minh-mang",
    cityId: "hue",
    category: "tourist-landmark",
    name: "Lăng Minh Mạng",
    nameEn: "Minh Mang Mausoleum",
    ichDomain: "traditional-knowledge",
    province: "thua-thien-hue",
    unescoStatus: "inscribed",
    coordinates: [107.5574, 16.3905],
    coverImage:
      "https://images.unsplash.com/photo-1598970434722-544cc648601c?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Bà Lê Thị Xuân",
      nameEn: "Mrs. Le Thi Xuan",
      avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80",
      role: "elder",
      roleEn: "Heritage Guide",
    },
    knowledgeSummary:
      "Lăng Minh Mạng (1840–1843) là lăng tẩm hài hòa và hoàn mỹ nhất trong 7 lăng nhà Nguyễn. Quần thể gồm hơn 40 công trình kiến trúc trải rộng trên diện tích 18 héc-ta với 3 hồ, 2 ao, hệ thống cầu đình và vườn cảnh theo phong thủy hoàn hảo nhất. Được coi là đỉnh cao nghệ thuật kiến trúc Á Đông tại Việt Nam.",
    knowledgeSummaryEn:
      "Minh Mang Mausoleum (1840–1843) is the most harmonious and perfect among 7 Nguyen mausoleums. The complex includes over 40 structures spanning 18 hectares with 3 lakes, 2 ponds, bridge pavilions, and gardens following impeccable feng shui. Considered the pinnacle of East Asian architectural art in Vietnam.",
    elements: ["Đinh Minh Lâu", "Hồ Trung Minh", "Cầu Ba Nhịp", "Vườn thông cổ"],
    npcScript: [
      {
        order: 1,
        question: "Vì sao lăng Minh Mạng đẹp nhất?",
        answer:
          "Vua Minh Mạng là học giả uyên thâm Nho học, ông tự thiết kế lăng và yêu cầu mọi thứ phải đối xứng hoàn hảo. Từ cổng đến lăng phải đi qua 3 cầu, 3 sân, 3 điện — con số 3 biểu trưng cho trời, đất, người trong triết học Á Đông.",
      },
      {
        order: 2,
        question: "Lăng được bảo vệ bằng phong thủy như thế nào?",
        answer:
          "Phía trước là hồ Trung Minh như tấm gương phản chiếu, phía sau là núi Kim Phụng như rồng chầu, hai bên là đồi thấp như hổ phục. Đây là thế 'tứ linh trấn giữ' — phong thủy bậc nhất mà chỉ vua có thể chiếm.",
      },
      {
        order: 3,
        question: "Vườn thông cổ ở đây khác gì nơi khác?",
        answer:
          "Có hơn 200 cây thông Nhật Bản được trồng từ thế kỷ 19 vẫn còn sống đến nay. Thông ở đây không trồng thẳng hàng mà theo thế uốn lượn tự nhiên giống tranh thủy mặc. Buổi sáng sương mù quanh hồ, ngồi nghe gió thổi qua thông là trải nghiệm không bao giờ quên.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh hồ Trung Minh phản chiếu Đinh Minh Lâu trong sương sớm",
      promptEn: "Photograph Trung Minh Lake reflecting Dinh Minh Lau in the morning mist",
      referenceImages: [
        "https://images.unsplash.com/photo-1596701062351-be5f6a42a4a9?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "hue-minh-mang-binh-phong",
        name: "Bình phong đá",
        nameEn: "Stone Screen Wall",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-lang-minh-mang",
        sourceNodeName: "Lăng Minh Mạng",
        knowledgeHolderName: "Ông Lê Quang Chính",
        image: "https://picsum.photos/seed/minh-mang-1/400/400",
        rarity: "Common",
        description: "Bình phong đá khắc hoa văn long ly quy phượng chặn trước cổng lăng, theo quan niệm phong thuỷ chắn tà khí.",
        descriptionEn: "Stone screen wall carved with the four sacred creatures guarding the mausoleum entrance, blocking evil spirits per feng shui principles.",
        dropRate: 0.6,
      },
      {
        id: "hue-minh-mang-bia-da",
        name: "Bia đá Minh Mạng",
        nameEn: "Minh Mang Stone Stele",
        ichDomain: "oral-tradition",
        sourceNodeId: "hue-lang-minh-mang",
        sourceNodeName: "Lăng Minh Mạng",
        knowledgeHolderName: "Ông Lê Quang Chính",
        image: "https://picsum.photos/seed/minh-mang-2/400/400",
        rarity: "Rare",
        description: "Bản thác bản bia chữ Hán khắc toàn bộ chiếu chỉ và công tích của vua Minh Mạng, gồm hơn 4.000 chữ.",
        descriptionEn: "Rubbing of the Chinese-inscribed stele recording all of Emperor Minh Mang's edicts and achievements — over 4,000 characters.",
        dropRate: 0.28,
      },
      {
        id: "hue-minh-mang-do-an-kien-truc",
        name: "Đồ án kiến trúc hoàng lăng",
        nameEn: "Imperial Tomb Architectural Plan",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "hue-lang-minh-mang",
        sourceNodeName: "Lăng Minh Mạng",
        knowledgeHolderName: "Ông Lê Quang Chính",
        image: "https://picsum.photos/seed/minh-mang-3/400/400",
        rarity: "Epic",
        description: "Bản vẽ đồ án phục dựng tổng thể khu lăng Minh Mạng theo nguyên tắc âm dương ngũ hành của kiến trúc cung đình Nguyễn.",
        descriptionEn: "Reconstructed master plan of Minh Mang's mausoleum complex, designed according to the yin-yang five elements principles of Nguyen court architecture.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "hue-ca-hue",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Ca Huế trên sông Hương",
    nameEn: "Hue Singing on Perfume River",
    ichDomain: "performing-arts",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5905, 16.4675],
    coverImage: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Nghệ nhân ưu tú Thanh Tâm",
      nameEn: "Meritorious Artist Thanh Tam",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "performer",
      roleEn: "Ca Hue Singer",
    },
    knowledgeSummary: "Ca Huế là một loại hình âm nhạc cổ truyền của xứ Huế, được hình thành từ sự kết hợp giữa âm nhạc dân gian và âm nhạc cung đình. Diễn ra trên những con thuyền rồng trôi lững lờ trên sông Hương trong đêm trăng, Ca Huế mang đến một không gian thưởng thức nghệ thuật tao nhã và sâu lắng.",
    knowledgeSummaryEn: "Ca Hue is a traditional musical genre of Hue, formed from the fusion of folk and court music. Performed on dragon boats drifting along the Perfume River under the moonlight, Ca Hue offers an elegant and profound artistic experience.",
    elements: ["Đàn Nguyệt", "Đàn Tranh", "Phách tiền", "Thuyền rồng"],
    npcScript: [
      {
        order: 1,
        question: "Ca Huế khác gì so với Nhã nhạc cung đình?",
        answer: "Nhã nhạc mang tính lễ nghi, uy nghiêm của triều đình, còn Ca Huế gần gũi hơn, là sự giao thoa giữa bác học và dân gian. Ca Huế thường được hát trong không gian nhỏ, ấm cúng và mang tính tâm tình, tự sự cao."
      },
      {
        order: 2,
        question: "Tại sao lại phải nghe Ca Huế trên sông Hương vào ban đêm?",
        answer: "Không gian sông nước mênh mông, tiếng mái chèo khua nước hòa cùng tiếng đàn, tiếng hát trong đêm tĩnh lặng mới lột tả hết được cái 'hồn' của Ca Huế. Sự mờ ảo của ánh đèn hoa đăng trên sông cũng làm tăng thêm phần lãng mạn."
      }
    ],
    items: [
      {
        id: "hue-ca-hue-phach-tien",
        name: "Phách tiền cổ",
        nameEn: "Ancient Coin Clapper",
        ichDomain: "performing-arts",
        sourceNodeId: "hue-ca-hue",
        sourceNodeName: "Ca Huế trên sông Hương",
        knowledgeHolderName: "Nghệ nhân Thanh Tâm",
        image: "https://picsum.photos/seed/ca-hue-1/400/400",
        rarity: "Rare",
        description: "Nhạc cụ gõ độc đáo làm từ những đồng tiền cổ xâu lại, tạo ra âm thanh lảnh lót đặc trưng trong dàn nhạc Ca Huế.",
        descriptionEn: "A unique percussion instrument made of strung ancient coins, producing a distinctive jingling sound in Ca Hue ensembles.",
        dropRate: 0.25
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh buổi biểu diễn Ca Huế trên thuyền rồng",
      promptEn: "Photograph a Ca Hue performance on a dragon boat",
      referenceImages: ["https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hue-dieu-hue",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Nghề làm Diều Huế",
    nameEn: "Hue Kite Making",
    ichDomain: "craftsmanship",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5750, 16.4800],
    coverImage: "https://images.unsplash.com/photo-1517404212738-1976ff7a2164?auto=format&fit=crop&q=80&w=1200",
    tier: 3,
    knowledgeHolder: {
      name: "Nghệ nhân Nguyễn Văn Hoàng",
      nameEn: "Artisan Nguyen Van Hoang",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      role: "artisan",
      roleEn: "Master Kite Maker",
    },
    knowledgeSummary: "Diều Huế không chỉ là một món đồ chơi mà là một tác phẩm nghệ thuật tạo hình trên không trung. Với các hình dáng kỳ mĩ như Phượng Hoàng, Rồng, Bướm... diều Huế đòi hỏi kỹ thuật làm khung tre và vẽ màu cực kỳ tinh xảo để có thể bay lượn uyển chuyển.",
    knowledgeSummaryEn: "Hue Kites are not just toys but aerial artworks. Featuring magnificent shapes like Phoenixes, Dragons, and Butterflies, Hue kites require intricate bamboo framing and painting techniques to soar gracefully.",
    elements: ["Khung tre già", "Vải lụa", "Màu vẽ thủ công", "Dây cước"],
    npcScript: [
      {
        order: 1,
        question: "Điều gì làm nên sự đặc biệt của diều Huế?",
        answer: "Đó là sự mô phỏng sống động các loài linh vật và muông thú. Diều Huế không chỉ bay mà còn 'múa' trên không. Mỗi con diều là một câu chuyện, một ý nghĩa biểu tượng riêng."
      }
    ],
    items: [
      {
        id: "hue-dieu-hue-phung-hoang",
        name: "Diều Phượng Hoàng",
        nameEn: "Phoenix Kite",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-dieu-hue",
        sourceNodeName: "Nghề làm Diều Huế",
        knowledgeHolderName: "Nghệ nhân Nguyễn Văn Hoàng",
        image: "https://picsum.photos/seed/dieu-hue-1/400/400",
        rarity: "Epic",
        description: "Con diều hình phượng hoàng được vẽ tay tinh xảo, sải cánh rộng biểu tượng cho sự thanh cao và quý phái của xứ Cố đô.",
        descriptionEn: "An intricately hand-painted phoenix kite, its wide wingspan symbolizing the elegance and nobility of the ancient capital.",
        dropRate: 0.1
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh con diều Huế đang bay trên bầu trời Đại Nội",
      promptEn: "Photograph a Hue kite flying over the Imperial Citadel",
      referenceImages: ["https://images.unsplash.com/photo-1517404212738-1976ff7a2164?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hue-duc-dong",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Nghề đúc đồng Phường Đúc",
    nameEn: "Phuong Duc Bronze Casting",
    ichDomain: "craftsmanship",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5550, 16.4580],
    coverImage: "https://images.unsplash.com/photo-1495484845321-0fe9f443effe?auto=format&fit=crop&q=80&w=1200",
    tier: 3,
    knowledgeHolder: {
      name: "Nghệ nhân Nguyễn Văn Sính",
      nameEn: "Artisan Nguyen Van Sinh",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
      role: "artisan",
      roleEn: "Bronze Master",
    },
    knowledgeSummary: "Phường Đúc là làng nghề đúc đồng lâu đời, nơi tạo ra những tuyệt tác như Cửu Đỉnh, Cửu Vị Thần Công. Kỹ thuật pha trộn hợp kim và làm khuôn đất của nghệ nhân nơi đây là bí quyết độc nhất giúp các sản phẩm đồng có tiếng vang trong và vẻ đẹp trường tồn.",
    knowledgeSummaryEn: "Phuong Duc is an ancient bronze casting village, the birthplace of masterpieces like the Nine Dynastic Urns. The unique alloy blending and clay molding techniques here ensure resonant sound and enduring beauty.",
    elements: ["Đồng đỏ", "Khuôn đất sét", "Lò nung củi", "Sáp ong"],
    npcScript: [
      {
        order: 1,
        question: "Tác phẩm nổi tiếng nhất của làng nghề là gì?",
        answer: "Đó chính là Cửu Đỉnh đặt trước Hiển Lâm Các trong Đại Nội. Chín chiếc đỉnh đồng khổng lồ này chính là đỉnh cao của nghệ thuật đúc đồng thời Nguyễn, tượng trưng cho sự vững chãi của vương triều."
      }
    ],
    items: [
      {
        id: "hue-duc-dong-khuon-dat",
        name: "Khuôn đất sét cổ",
        nameEn: "Ancient Clay Mold",
        ichDomain: "craftsmanship",
        sourceNodeId: "hue-duc-dong",
        sourceNodeName: "Nghề đúc đồng Phường Đúc",
        knowledgeHolderName: "Nghệ nhân Nguyễn Văn Sính",
        image: "https://picsum.photos/seed/duc-dong-1/400/400",
        rarity: "Epic",
        description: "Phần khuôn đất sét được làm thủ công từ đất bùn và trấu, linh hồn của quy trình đúc đồng truyền thống.",
        descriptionEn: "A hand-made clay mold crafted from mud and rice husks, the heart of the traditional bronze casting process.",
        dropRate: 0.12
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh một tác phẩm đồng đang được hoàn thiện",
      promptEn: "Photograph a bronze work being finished",
      referenceImages: ["https://images.unsplash.com/photo-1495484845321-0fe9f443effe?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hue-dien-hon-chen",
    cityId: "hue",
    category: "intangible-heritage",
    name: "Lễ hội Điện Hòn Chén",
    nameEn: "Hon Chen Temple Festival",
    ichDomain: "ritual",
    province: "thua-thien-hue",
    unescoStatus: "unrecognized",
    coordinates: [107.5180, 16.4350],
    coverImage: "https://images.unsplash.com/photo-1591147139225-827b2ba60daf?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Hòa",
      nameEn: "Mrs. Nguyen Thi Hoa",
      avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80",
      role: "ceremony-keeper",
      roleEn: "Ritual Guardian",
    },
    knowledgeSummary: "Lễ hội Điện Hòn Chén (hay lễ vía Mẹ Thiên Y A Na) là một trong những lễ hội tín ngưỡng dân gian lớn nhất miền Trung. Lễ hội rực rỡ sắc màu với những đoàn thuyền rồng rước sắc phong trên sông Hương và các nghi thức hầu đồng trang trọng.",
    knowledgeSummaryEn: "Hon Chen Temple Festival (venerating Mother Thien Y A Na) is one of the largest folk religious festivals in Central Vietnam. It features vibrant dragon boat processions on the Perfume River and solemn mediumship rituals.",
    elements: ["Thuyền rồng rước sắc", "Hầu đồng", "Vàng mã", "Lễ vật tiến cúng"],
    npcScript: [
      {
        order: 1,
        question: "Ý nghĩa của lễ hội này là gì?",
        answer: "Đây là dịp để người dân thể hiện lòng biết ơn đối với Mẹ Thiên Y A Na — vị nữ thần bảo hộ vùng đất phương Nam, đồng thời cầu mong mưa thuận gió hòa, quốc thái dân an."
      }
    ],
    items: [
      {
        id: "hue-hon-chen-hoa-dang",
        name: "Hoa đăng sắc màu",
        nameEn: "Colorful Flower Lantern",
        ichDomain: "ritual",
        sourceNodeId: "hue-dien-hon-chen",
        sourceNodeName: "Lễ hội Điện Hòn Chén",
        knowledgeHolderName: "Bà Nguyễn Thị Hòa",
        image: "https://picsum.photos/seed/hon-chen-1/400/400",
        rarity: "Common",
        description: "Chiếc hoa đăng giấy rực rỡ được thả xuống sông Hương trong đêm lễ hội để gửi gắm những ước nguyện an lành.",
        descriptionEn: "A vibrant paper lantern released into the Perfume River during the festival night to convey wishes for peace.",
        dropRate: 0.5
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh đoàn rước thuyền rồng trên sông Hương",
      promptEn: "Photograph the dragon boat procession on the Perfume River",
      referenceImages: ["https://images.unsplash.com/photo-1591147139225-827b2ba60daf?auto=format&fit=crop&q=80&w=1200"]
    }
  },
];
