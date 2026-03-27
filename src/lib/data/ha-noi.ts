import type { HeritageNode } from "../types";

export const HA_NOI_NODES: HeritageNode[] = [
  {
    id: "bat-trang-ceramics",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Làng Gốm Bát Tràng",
    nameEn: "Bat Trang Ceramics Village",
    ichDomain: "craftsmanship",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.9148, 20.9733],
    coverImage:
      "https://images.unsplash.com/photo-1578913171703-97ae19e7315d?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Ông Lê Xuân Phổ",
      nameEn: "Mr. Le Xuan Pho",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      role: "artisan",
      roleEn: "Master Ceramicist",
    },
    knowledgeSummary:
      "Làng gốm Bát Tràng chỉ cách 13km từ Hà Nội là kho tàng 700 năm nghề gốm. Kỹ thuật men rạn Bát Tràng — lớp men nứt vỡ có kiểm soát tạo hoa văn bản đồ — là di sản đặc hữu không nơi nào trên thế giới có cách tạo men giống vậy. Gốm Bát Tràng xuất khẩu sang Nhật Bản từ thế kỷ 15.",
    knowledgeSummaryEn:
      "Bat Trang ceramics village just 13km from Hanoi holds 700 years of heritage. Bat Trang's crackle-glaze technique — controlled glaze fracture creating map patterns — is an endemic heritage with no parallel glazing method anywhere in the world. Bat Trang ceramics were exported to Japan from the 15th century.",
    elements: ["Đất sét trắng sông Hồng", "Men rạn cổ", "Lò nung 1300°C", "Kỹ thuật vẽ lam"],
    npcScript: [
      {
        order: 1,
        question: "Men rạn Bát Tràng được tạo ra như thế nào?",
        answer:
          "Men rạn không phải là lỗi — đó là kỹ thuật có chủ đích. Chúng tôi pha men với tỉ lệ đặc biệt để khi nguội, men co lại nhanh hơn đất sét — tạo ra những vết nứt nhỏ tạo hoa văn. Kiểm soát kích thước vết rạn phụ thuộc vào độ dày men và tốc độ làm nguội.",
      },
      {
        order: 2,
        question: "Bát Tràng có từ khi nào?",
        answer:
          "Bát Tràng xuất hiện từ thế kỷ 14–15, khi Vua Lý Công Uẩn dời đô về Thăng Long. Gốm Bát Tràng được dùng trong cung đình Lê và xuất khẩu sang Nhật Bản theo tàu buôn Đông Ấn. Hiện nay còn tìm thấy gốm Bát Tràng ở Nhật trong các bảo tàng Tokyo.",
      },
      {
        order: 3,
        question: "Vẽ lam là gì và tại sao quan trọng?",
        answer:
          "Vẽ lam là kỹ thuật vẽ bằng màu cobalt oxide dưới men trước khi nung — màu xanh chỉ hiện ra sau khi nung 1300°C. Người thợ phải 'nhìn thấy' màu xanh cuối cùng khi còn đang vẽ màu xám — khả năng hình dung đó học cả đời.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh vết men rạn trên gốm dưới ánh sáng tự nhiên",
      promptEn: "Photograph the crackle-glaze pattern on ceramics in natural light",
      referenceImages: [
        "https://images.unsplash.com/photo-1544974226-532448373b9e?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "bat-trang-ceramics-bat-men-ran",
        name: "Bát men rạn Bát Tràng",
        nameEn: "Bat Trang Crackle Glaze Bowl",
        ichDomain: "craftsmanship",
        sourceNodeId: "bat-trang-ceramics",
        sourceNodeName: "Làng Gốm Bát Tràng",
        knowledgeHolderName: "Nghệ nhân Lê Văn Cam",
        image: "https://picsum.photos/seed/bat-trang-1/400/400",
        rarity: "Common",
        description: "Chiếc bát men trắng rạn đặc trưng của Bát Tràng — vết nứt mảnh trên men tạo hoa văn ngẫu nhiên, mỗi chiếc một kiểu.",
        descriptionEn: "Characteristic Bat Trang white crackle glaze bowl — the fine cracks on the glaze create random patterns, making each piece unique.",
        dropRate: 0.55,
      },
      {
        id: "bat-trang-ceramics-binh-lam",
        name: "Bình vẽ lam",
        nameEn: "Blue on White Vase",
        ichDomain: "craftsmanship",
        sourceNodeId: "bat-trang-ceramics",
        sourceNodeName: "Làng Gốm Bát Tràng",
        knowledgeHolderName: "Nghệ nhân Lê Văn Cam",
        image: "https://picsum.photos/seed/bat-trang-2/400/400",
        rarity: "Rare",
        description: "Bình gốm vẽ lam trắng theo phong cách cổ điển Bát Tràng, tiếp nối truyền thống xuất khẩu sang Nhật, Triều Tiên từ thế kỷ 15.",
        descriptionEn: "Blue on white vase in classic Bat Trang style, continuing the tradition of export to Japan and Korea since the 15th century.",
        dropRate: 0.28,
      },
      {
        id: "bat-trang-ceramics-khuon-gom",
        name: "Khuôn gốm cổ",
        nameEn: "Antique Pottery Mold",
        ichDomain: "craftsmanship",
        sourceNodeId: "bat-trang-ceramics",
        sourceNodeName: "Làng Gốm Bát Tràng",
        knowledgeHolderName: "Nghệ nhân Lê Văn Cam",
        image: "https://picsum.photos/seed/bat-trang-3/400/400",
        rarity: "Epic",
        description: "Khuôn đất nung dùng tạo hình bát cổ thế kỷ 17, truyền lại từ đời cha ông trong một gia đình Bát Tràng qua 12 thế hệ.",
        descriptionEn: "Terracotta mold for shaping 17th-century style bowls, passed down within one Bat Trang family across 12 generations.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "ha-noi-hoan-kiem",
    cityId: "ha-noi",
    category: "tourist-landmark",
    name: "Hồ Hoàn Kiếm & Đền Ngọc Sơn",
    nameEn: "Hoan Kiem Lake & Ngoc Son Temple",
    ichDomain: "ritual",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.8522, 21.0285],
    coverImage:
      "https://images.unsplash.com/photo-1599708153386-62bf0f968994?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Phạm Ngọc Hùng",
      nameEn: "Mr. Pham Ngoc Hung",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "storyteller",
      roleEn: "Lake Legend Keeper",
    },
    knowledgeSummary:
      "Hồ Hoàn Kiếm gắn liền với truyền thuyết vua Lê Lợi trả kiếm thần cho Rùa Vàng sau khi đánh đuổi giặc Minh. Đền Ngọc Sơn trên đảo nhỏ giữa hồ thờ Văn Xương, Lã Tổ và Trần Hưng Đạo — những biểu tượng văn chương, y thuật và quân sự của Việt Nam. Hồ là trái tim văn hoá và tinh thần của Hà Nội.",
    knowledgeSummaryEn:
      "Hoan Kiem Lake is tied to the legend of King Le Loi returning the magic sword to the Golden Turtle after expelling the Ming invaders. Ngoc Son Temple on a small island venerates Van Xuong, Lu To, and Tran Hung Dao — symbols of Vietnamese literature, medicine and military prowess. The lake is the cultural and spiritual heart of Hanoi.",
    elements: ["Truyền thuyết Rùa Vàng", "Tháp Bút", "Cầu Thê Húc", "Đền Ngọc Sơn"],
    npcScript: [
      {
        order: 1,
        question: "Truyền thuyết Hoàn Kiếm kể câu chuyện gì?",
        answer:
          "Năm 1428, sau khi đánh đuổi giặc Minh, vua Lê Lợi đang thuyền trên hồ thì Rùa Vàng nổi lên đòi lại kiếm thần Thuận Thiên — vũ khí thần kỳ đã giúp ông chiến thắng. Nhà vua trả kiếm và đặt tên hồ là Hoàn Kiếm. Đây là biểu tượng cho sự chính nghĩa: vũ khí chỉ mượn để bảo vệ dân tộc, không phải để thống trị.",
      },
      {
        order: 2,
        question: "Tháp Bút trên cầu Thê Húc có ý nghĩa gì?",
        answer:
          "Tháp Bút do văn nhân Nguyễn Văn Siêu xây năm 1865, khắc chữ 'Tả Thanh Thiên' — viết lên trời xanh. Đây là biểu tượng của khát vọng học vấn người Hà Nội — viết không chỉ trên giấy mà phải viết lên thiên hà. Cầu Thê Húc màu đỏ có nghĩa là 'nơi đón ánh mặt trời buổi sáng'.",
      },
      {
        order: 3,
        question: "Rùa hồ Hoàn Kiếm thực sự tồn tại không?",
        answer:
          "Có! Loài Rùa Hoàn Kiếm (Rafetus swinhoei) thực sự sống trong hồ — là một trong những loài rùa quý hiếm nhất thế giới. Con rùa cuối cùng ở Hà Nội đã mất vào năm 2016, để lại Hồ Hoàn Kiếm không còn rùa. Hiện nay Việt Nam và Trung Quốc đang nỗ lực bảo tồn loài này.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh cầu Thê Húc đỏ và Đền Ngọc Sơn từ bờ hồ",
      promptEn: "Photograph the red The Huc bridge and Ngoc Son Temple from the lakeside",
      referenceImages: [
        "https://images.unsplash.com/photo-1555981444-eb646c1f1ca4?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-hk-kiem-than",
        name: "Kiếm thần Thuận Thiên",
        nameEn: "Divine Sword Thuan Thien",
        ichDomain: "oral-tradition",
        sourceNodeId: "ha-noi-hoan-kiem",
        sourceNodeName: "Hồ Hoàn Kiếm & Đền Ngọc Sơn",
        knowledgeHolderName: "Ông Lê Đình Hùng",
        image: "https://picsum.photos/seed/hoan-kiem-1/400/400",
        rarity: "Legendary",
        description: "Thanh kiếm thần mà vua Lê Lợi nhận từ Kim Quy rùa thần để đánh đuổi quân Minh — trả lại hồ sau khi thống nhất đất nước.",
        descriptionEn: "The divine sword received from the Golden Turtle by King Le Loi to repel the Ming invaders — returned to the lake after the country was unified.",
        dropRate: 0.03,
      },
      {
        id: "ha-noi-hk-rua-hoank-iem",
        name: "Rùa Hoàn Kiếm tiêu bản",
        nameEn: "Hoan Kiem Turtle Specimen",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "ha-noi-hoan-kiem",
        sourceNodeName: "Hồ Hoàn Kiếm & Đền Ngọc Sơn",
        knowledgeHolderName: "Ông Lê Đình Hùng",
        image: "https://picsum.photos/seed/hoan-kiem-2/400/400",
        rarity: "Endangered",
        description: "Tiêu bản con rùa Rafetus swinhoei cuối cùng của hồ Hoàn Kiếm, mất năm 2016 — loài rùa giờ tuyệt chủng trên toàn cầu.",
        descriptionEn: "Specimen of the last Rafetus swinhoei turtle of Hoan Kiem Lake, lost in 2016 — a species now globally extinct.",
        dropRate: 0.02,
      },
      {
        id: "ha-noi-hk-ban-do-ho",
        name: "Bản đồ hồ Gươm cổ",
        nameEn: "Ancient Lake Map",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "ha-noi-hoan-kiem",
        sourceNodeName: "Hồ Hoàn Kiếm & Đền Ngọc Sơn",
        knowledgeHolderName: "Ông Lê Đình Hùng",
        image: "https://picsum.photos/seed/hoan-kiem-3/400/400",
        rarity: "Rare",
        description: "Bản đồ hồ Hoàn Kiếm thế kỷ 19 cho thấy hồ từng rộng gấp 3 lần hiện nay — phần lớn bị lấp để xây đường phố Pháp thuộc.",
        descriptionEn: "19th-century map of Hoan Kiem Lake showing it was once 3 times larger — most of it filled in during French colonial street construction.",
        dropRate: 0.28,
      },
    ],
  },
  {
    id: "ha-noi-van-mieu",
    cityId: "ha-noi",
    category: "tourist-landmark",
    name: "Văn Miếu - Quốc Tử Giám",
    nameEn: "Temple of Literature",
    ichDomain: "traditional-knowledge",
    province: "ha-noi",
    unescoStatus: "nominated",
    coordinates: [105.8355, 21.0275],
    coverImage:
      "https://images.unsplash.com/photo-1563298199-6e3e1cb1ba21?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "GS. Nguyễn Vinh Phúc",
      nameEn: "Prof. Nguyen Vinh Phuc",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
      role: "elder",
      roleEn: "Confucian Scholar",
    },
    knowledgeSummary:
      "Văn Miếu – Quốc Tử Giám xây năm 1070 là trường đại học đầu tiên của Việt Nam, thờ Khổng Tử và đào tạo nhân tài cho triều đình. 82 tấm bia đá khắc tên 1.307 tiến sĩ qua các khoa thi từ 1442 đến 1779 là kho tư liệu lịch sử vô giá. Là biểu tượng của truyền thống hiếu học của người Việt.",
    knowledgeSummaryEn:
      "Van Mieu – Quoc Tu Giam, built in 1070, was Vietnam's first university, honoring Confucius and training the royal court. 82 stone stelae inscribed with 1,307 doctoral graduates from 1442 to 1779 form an invaluable historical archive. It symbolizes the Vietnamese tradition of academic pursuit.",
    elements: ["82 bia tiến sĩ", "Khuê Văn Các", "Giếng Thiên Quang", "Điện Đại Thành"],
    npcScript: [
      {
        order: 1,
        question: "Văn Miếu dạy những gì?",
        answer:
          "Quốc Tử Giám là trường đào tạo quan lại hoàng gia — học Tứ Thư, Ngũ Kinh, lịch sử và văn chương Hán Nôm. Học sinh phải thi qua nhiều kỳ thi từ huyện, tỉnh lên tới cấp quốc gia. Đỗ Tiến Sĩ được khắc tên trên bia đá — vinh danh tột đỉnh trong xã hội phong kiến.",
      },
      {
        order: 2,
        question: "Khuê Văn Các có ý nghĩa gì?",
        answer:
          "Khuê Văn Các là đài thờ sao Khuê — ngôi sao chủ của văn chương trong tín ngưỡng Á Đông. Xây năm 1805, mái tám mặt tượng trưng cho bát quái, 28 cây cột xung quanh là 28 chòm sao. Hình ảnh Khuê Văn Các trở thành biểu tượng của Thủ đô Hà Nội trên huy hiệu thành phố.",
      },
      {
        order: 3,
        question: "Tại sao sinh viên hay sờ đầu rùa đội bia?",
        answer:
          "Mỗi tấm bia tiến sĩ đặt trên lưng rùa đá — rùa là biểu tượng trí tuệ và trường thọ. Sinh viên sờ đầu rùa trước khi thi với hy vọng được rùa 'truyền' may mắn. Đây là tín ngưỡng dân gian hiện đại, không có trong truyền thống cổ — nhưng đã trở thành 'nghi lễ' không thể thiếu với sinh viên Hà Nội.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh Khuê Văn Các hoặc bia tiến sĩ trên lưng rùa đá",
      promptEn: "Photograph the Khue Van Cac pavilion or the doctoral stelae on stone turtle backs",
      referenceImages: [
        "https://images.unsplash.com/photo-1509030464152-c335989bf88d?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-van-mieu-bia-tien-si",
        name: "Bia tiến sĩ miniature",
        nameEn: "Scholar Stele Miniature",
        ichDomain: "oral-tradition",
        sourceNodeId: "ha-noi-van-mieu",
        sourceNodeName: "Văn Miếu - Quốc Tử Giám",
        knowledgeHolderName: "Bà Nguyễn Kim Oanh",
        image: "https://picsum.photos/seed/van-mieu-1/400/400",
        rarity: "Rare",
        description: "Mô hình đá nhỏ của bia tiến sĩ khắc tên trạng nguyên triều Lê, đặt trên lưng rùa đá — biểu tượng học vấn và trường thọ.",
        descriptionEn: "Small stone replica of a doctoral stele inscribed with Le dynasty scholar names, resting on a stone turtle — symbol of learning and longevity.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-van-mieu-but-long",
        name: "Bút lông cổ",
        nameEn: "Antique Calligraphy Brush",
        ichDomain: "oral-tradition",
        sourceNodeId: "ha-noi-van-mieu",
        sourceNodeName: "Văn Miếu - Quốc Tử Giám",
        knowledgeHolderName: "Bà Nguyễn Kim Oanh",
        image: "https://picsum.photos/seed/van-mieu-2/400/400",
        rarity: "Common",
        description: "Bút lông mực tàu theo truyền thống, dùng trong kỳ thi Hương và thi Hội của Việt Nam xưa — tượng trưng cho con đường khoa cử.",
        descriptionEn: "Traditional ink calligraphy brush used in Vietnam's regional and national civil examinations — symbol of the scholarly path.",
        dropRate: 0.6,
      },
      {
        id: "ha-noi-van-mieu-muc-tau",
        name: "Mực tàu thần kỳ",
        nameEn: "Legendary Ink Stone",
        ichDomain: "oral-tradition",
        sourceNodeId: "ha-noi-van-mieu",
        sourceNodeName: "Văn Miếu - Quốc Tử Giám",
        knowledgeHolderName: "Bà Nguyễn Kim Oanh",
        image: "https://picsum.photos/seed/van-mieu-3/400/400",
        rarity: "Epic",
        description: "Thỏi mực tàu tốt nhất do nghệ nhân cung đình Nguyễn chế tác, được cho là giúp người dùng viết chữ đẹp và đỗ đạt.",
        descriptionEn: "The finest ink stick crafted by Nguyen court artisans, said to help its user write beautifully and pass every examination.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "ha-noi-mua-roi-nuoc",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Múa Rối Nước",
    nameEn: "Water Puppet Theatre",
    ichDomain: "performing-arts",
    province: "ha-noi",
    unescoStatus: "inscribed",
    coordinates: [105.8520, 21.0330],
    coverImage:
      "https://images.unsplash.com/photo-1528697203043-733dafdaa316?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Nghệ nhân Nguyễn Thế Nghĩa",
      nameEn: "Master Artist Nguyen The Nghia",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      role: "performer",
      roleEn: "Water Puppet Master",
    },
    knowledgeSummary:
      "Múa rối nước là nghệ thuật biểu diễn độc đáo của đồng bằng Bắc Bộ, xuất hiện từ thế kỷ 11. Con rối gỗ sơn son chạy trên mặt nước nhờ hệ thống cần tre bí ẩn dưới lòng hồ, điều khiển bởi nghệ nhân ẩn sau màn nước. Nhà hát Múa Rối Nước Thăng Long là nơi biểu diễn nổi tiếng nhất.",
    knowledgeSummaryEn:
      "Water puppetry is a unique performing art of the Red River Delta, originating in the 11th century. Lacquered wooden puppets move on the water's surface through a secret bamboo rod system hidden below, operated by hidden masters behind a water curtain. Thang Long Water Puppet Theatre is the most famous venue.",
    elements: ["Con rối gỗ sơn son", "Cần điều khiển tre", "Sân khấu nước", "Nhạc truyền thống"],
    npcScript: [
      {
        order: 1,
        question: "Cơ chế điều khiển con rối dưới nước như thế nào?",
        answer:
          "Đó là bí mật nghề nghiệp được giữ kín hàng thế kỷ — nghệ nhân mới được truyền dạy khi đã theo nghề ít nhất 5 năm. Có thể nói là kết hợp cần tre, dây thừng và cơ cấu khớp nối cho phép điều khiển nhiều chiều. Một con rối đơn giản cần 2–3 nghệ nhân phối hợp.",
      },
      {
        order: 2,
        question: "Con rối được làm từ gỗ gì?",
        answer:
          "Gỗ sung — loại gỗ nhẹ, không co nứt khi ngâm nước lâu ngày. Con rối được chạm khắc thủ công rồi sơn nhiều lớp sơn chống nước theo kỹ thuật sơn mài truyền thống. Một con rối chất lượng cao mất 3–4 tháng để chế tác.",
      },
      {
        order: 3,
        question: "Chủ đề các tiết mục múa rối nước là gì?",
        answer:
          "Chủ yếu là chủ đề nông thôn: cày ruộng, câu cá, chèo thuyền, lễ hội làng. Nổi tiếng nhất là tích Rồng phun lửa và tích Tứ linh (Long, Lân, Quy, Phụng). Tiết mục Trống Đồng kết hợp âm nhạc dân gian và rối nước là tiết mục được khán giả quốc tế yêu thích nhất.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh con rối nước đang biểu diễn trên sân khấu nước",
      promptEn: "Photograph water puppets performing on the water stage",
      referenceImages: [
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-roi-nuoc-con-roi",
        name: "Con rối gỗ điều khiển",
        nameEn: "Water Puppet Figure",
        ichDomain: "performing-arts",
        sourceNodeId: "ha-noi-mua-roi-nuoc",
        sourceNodeName: "Múa Rối Nước",
        knowledgeHolderName: "Nghệ nhân Phan Thanh Liêm",
        image: "https://picsum.photos/seed/roi-nuoc-1/400/400",
        rarity: "Rare",
        description: "Con rối gỗ sung sơn nhiều lớp, điều khiển bằng cần tre ngầm dưới nước — bí quyết điều khiển không ai được biết ngoài phường rối.",
        descriptionEn: "Multi-lacquered fig wood puppet controlled by a submerged bamboo rod — the control mechanism is kept secret outside the puppet troupe.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-roi-nuoc-trong-chau",
        name: "Trống chầu",
        nameEn: "Beating Drum",
        ichDomain: "performing-arts",
        sourceNodeId: "ha-noi-mua-roi-nuoc",
        sourceNodeName: "Múa Rối Nước",
        knowledgeHolderName: "Nghệ nhân Phan Thanh Liêm",
        image: "https://picsum.photos/seed/roi-nuoc-2/400/400",
        rarity: "Common",
        description: "Trống da trâu nhỏ dùng điểm nhịp cho buổi diễn rối nước — tiếng trống thay lời báo hiệu nhân vật sắp xuất hiện.",
        descriptionEn: "Small buffalo-hide drum used to beat rhythm for water puppet shows — each beat signals the approach of a new character.",
        dropRate: 0.6,
      },
      {
        id: "ha-noi-roi-nuoc-kich-ban",
        name: "Kịch bản múa rối cổ",
        nameEn: "Ancient Puppet Performance Script",
        ichDomain: "performing-arts",
        sourceNodeId: "ha-noi-mua-roi-nuoc",
        sourceNodeName: "Múa Rối Nước",
        knowledgeHolderName: "Nghệ nhân Phan Thanh Liêm",
        image: "https://picsum.photos/seed/roi-nuoc-3/400/400",
        rarity: "Epic",
        description: "Tờ kịch bản chép tay tích 'Lê Lợi hoàn kiếm' từ thế kỷ 15, truyền qua 20 đời trong phường rối nước làng Đào Thục.",
        descriptionEn: "Handwritten script of the 'Le Loi Returns the Sword' scene from the 15th century, passed down 20 generations in Dao Thuc water puppet village.",
        dropRate: 0.09,
      },
    ],
  },
  {
    id: "ha-noi-pho-co-36-phuong",
    cityId: "ha-noi",
    category: "tourist-landmark",
    name: "Phố Cổ 36 Phố Phường",
    nameEn: "Hanoi Old Quarter",
    ichDomain: "traditional-knowledge",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.8490, 21.0340],
    coverImage:
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Kim Liên",
      nameEn: "Mrs. Nguyen Thi Kim Lien",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "storyteller",
      roleEn: "Old Quarter Guide",
    },
    knowledgeSummary:
      "Phố Cổ Hà Nội với 36 phố phường mỗi phố chuyên một nghề là di sản đô thị nghìn năm. Từ phố Hàng Bạc (bạc), Hàng Đồng (đồng), Hàng Gai (gai lanh) đến Hàng Ngang, Hàng Đào — mỗi tên phố là tên nghề. Kiến trúc nhà ống truyền thống, ẩm thực đường phố và văn hóa thương mại tạo nên bản sắc đặc trưng.",
    knowledgeSummaryEn:
      "Hanoi's Old Quarter with 36 guilded streets — each specialized in a trade — is a millennium-old urban heritage. From Hang Bac (silver), Hang Dong (bronze), Hang Gai (hemp) to Hang Ngang, Hang Dao — each street name is a trade name. Tube house architecture, street food, and commercial culture define its unique character.",
    elements: ["Nhà ống truyền thống", "Bia Hơi Hà Nội", "Phở Hà Nội", "Chả Cá Lã Vọng"],
    npcScript: [
      {
        order: 1,
        question: "36 phố phường có từ khi nào?",
        answer:
          "Hệ thống phố nghề hình thành từ thế kỷ 13–15 khi Thăng Long là kinh đô Đại Việt. Mỗi nghề từ các làng ven Hà Nội kéo về thủ đô, tụ lại theo từng phố để tiện giao thương. Tên phố 'Hàng' đặt trước tên hàng hóa — cách đặt tên độc đáo không thấy ở đô thị nào khác Đông Nam Á.",
      },
      {
        order: 2,
        question: "Phở Hà Nội khác phở miền Nam như thế nào?",
        answer:
          "Phở Hà Nội có nước dùng trong, ngọt thanh từ xương bò và hành nướng — không dùng nhiều gia vị như hồi, đinh hương. Ăn với giá đỗ sống, chanh, ớt tươi — không có tương đen tương đỏ như miền Nam. Người Hà Nội tin rằng phở miền Nam 'pha tạp' mất đi sự tinh tế của phở gốc.",
      },
      {
        order: 3,
        question: "Bia hơi Hà Nội là gì?",
        answer:
          "Bia hơi Hà Nội là bia tươi không bảo quản, nấu hàng ngày và hết trong ngày. Giá cực rẻ — khoảng 5.000–10.000 đồng/cốc. Người Hà Nội ngồi vỉa hè trên ghế nhựa thấp uống bia hơi là hình ảnh văn hóa đặc trưng, không thể thấy ở thành phố nào khác Việt Nam.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh con phố cổ với nhà ống và biển hiệu truyền thống",
      promptEn: "Photograph a narrow Old Quarter street with tube houses and traditional signboards",
      referenceImages: [
        "https://images.unsplash.com/photo-1563293815-99884570144d?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-pho-co-pho-ha-noi",
        name: "Tô phở Hà Nội",
        nameEn: "Hanoi Pho Bowl",
        ichDomain: "culinary",
        sourceNodeId: "ha-noi-pho-co-36-phuong",
        sourceNodeName: "Phố Cổ 36 Phố Phường",
        knowledgeHolderName: "Ông Nguyễn Phú Cường",
        image: "https://picsum.photos/seed/pho-co-hn-1/400/400",
        rarity: "Common",
        description: "Tô phở bò Hà Nội đúng điệu — nước dùng trong, thịt tái, không rau giá, không tương — thanh tịnh và chuẩn vị Bắc.",
        descriptionEn: "An authentic Hanoi beef pho bowl — clear broth, rare beef, no sprouts or hoisin — pure and classically Northern.",
        dropRate: 0.6,
      },
      {
        id: "ha-noi-pho-co-bien-hieu",
        name: "Biển hiệu phố cũ",
        nameEn: "Old Street Sign",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "ha-noi-pho-co-36-phuong",
        sourceNodeName: "Phố Cổ 36 Phố Phường",
        knowledgeHolderName: "Ông Nguyễn Phú Cường",
        image: "https://picsum.photos/seed/pho-co-hn-2/400/400",
        rarity: "Rare",
        description: "Biển hiệu gỗ sơn chữ Hán Nôm từ phố Hàng Đồng thế kỷ 19, ghi tên cửa hàng đồ đồng lâu đời nhất Hà Nội.",
        descriptionEn: "19th-century wooden sign in Han-Nom script from Hang Dong street, bearing the name of Hanoi's oldest copperware shop.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-pho-co-bia-hoi",
        name: "Cốc bia hơi",
        nameEn: "Draft Beer Glass",
        ichDomain: "culinary",
        sourceNodeId: "ha-noi-pho-co-36-phuong",
        sourceNodeName: "Phố Cổ 36 Phố Phường",
        knowledgeHolderName: "Ông Nguyễn Phú Cường",
        image: "https://picsum.photos/seed/pho-co-hn-3/400/400",
        rarity: "Common",
        description: "Cốc bia hơi nhựa mỏng màu xanh ngồi trên ghế nhựa vỉa hè Hà Nội — biểu tượng văn hoá vỉa hè không thể thiếu.",
        descriptionEn: "Thin plastic blue beer glass drunk on a Hanoi pavement stool — an irreplaceable icon of Hanoi's sidewalk culture.",
        dropRate: 0.6,
      },
    ],
  },
  {
    id: "ha-noi-lang-nghề-lua-van-phuc",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Làng Lụa Vạn Phúc",
    nameEn: "Van Phuc Silk Weaving Village",
    ichDomain: "craftsmanship",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.7742, 20.9729],
    coverImage:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Tuyết",
      nameEn: "Mrs. Nguyen Thi Tuyet",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
      role: "artisan",
      roleEn: "Silk Weaving Master",
    },
    knowledgeSummary:
      "Làng lụa Vạn Phúc (Hà Đông) có lịch sử hơn 1.000 năm, nổi tiếng với lụa the La và lụa vân — hai loại vải lụa quý giá nhất của Hà Nội xưa. Lụa Vạn Phúc từng được dùng may áo tứ thân, áo dài cung đình và xuất khẩu sang thị trường châu Âu và Trung Đông.",
    knowledgeSummaryEn:
      "Van Phuc (Ha Dong) silk village has over 1,000 years of history, famous for La silk and Van silk — the two most prestigious silk types of old Hanoi. Van Phuc silk was used to sew traditional four-panel dress, royal ao dai, and was exported to European and Middle Eastern markets.",
    elements: ["Lụa the La", "Khung dệt truyền thống", "Tơ tằm Hà Đông", "Hoa văn vân mây"],
    npcScript: [
      {
        order: 1,
        question: "Lụa vân Vạn Phúc đặc biệt ở điểm nào?",
        answer:
          "Lụa vân có hoa văn mây nổi trên mặt vải — được tạo ra bằng kỹ thuật dệt đặc biệt, khi nhìn ở góc độ khác nhau hoa văn thay đổi như ảo giác. Một mét lụa vân đòi hỏi kỹ thuật cao gấp 10 lần lụa thường và mất cả ngày để dệt.",
      },
      {
        order: 2,
        question: "Lụa Vạn Phúc được dùng trong hoàng cung như thế nào?",
        answer:
          "Lụa Vạn Phúc là nguyên liệu chính cho áo tứ thân và áo dài của phụ nữ triều đình Nguyễn. Màu tím than và xanh lam đặc trưng của Vạn Phúc là màu hoàng gia — chỉ các bà hoàng và mệnh phụ được mặc. Ngoài ra lụa còn dùng làm tán, lọng, đồ trang trí cung điện.",
      },
      {
        order: 3,
        question: "Nghề dệt lụa Vạn Phúc hiện nay ra sao?",
        answer:
          "Làng có khoảng 800 hộ, hơn 60% vẫn còn giữ nghề dệt. Thị trường du lịch là nguồn thu chính — khách đến xem và mua lụa trực tiếp. Thách thức lớn nhất là lụa công nghiệp từ Trung Quốc giá rẻ hơn nhiều nên người mua khó phân biệt hàng thật.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh khung dệt lụa cổ đang hoạt động hoặc vải lụa màu sắc rực rỡ",
      promptEn: "Photograph an antique working loom or vibrant colorful silk fabric",
      referenceImages: [
        "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-van-phuc-lua-the-la",
        name: "Lụa the La Vạn Phúc",
        nameEn: "Van Phuc Silk Fabric",
        ichDomain: "craftsmanship",
        sourceNodeId: "ha-noi-lang-nghề-lua-van-phuc",
        sourceNodeName: "Làng Lụa Vạn Phúc",
        knowledgeHolderName: "Nghệ nhân Nguyễn Thị Tâm",
        image: "https://picsum.photos/seed/van-phuc-1/400/400",
        rarity: "Rare",
        description: "Mảnh lụa the La Vạn Phúc mỏng như sương, nổi tiếng từ thời Pháp thuộc là 'lụa tốt nhất Đông Dương'.",
        descriptionEn: "A piece of Van Phuc's signature mist-thin silk, famous since the French colonial era as 'the finest silk in Indochina'.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-van-phuc-lua-van",
        name: "Tấm lụa vân",
        nameEn: "Brocade Silk Panel",
        ichDomain: "craftsmanship",
        sourceNodeId: "ha-noi-lang-nghề-lua-van-phuc",
        sourceNodeName: "Làng Lụa Vạn Phúc",
        knowledgeHolderName: "Nghệ nhân Nguyễn Thị Tâm",
        image: "https://picsum.photos/seed/van-phuc-2/400/400",
        rarity: "Epic",
        description: "Tấm lụa vân dệt hoa văn rồng phượng nổi trên nền, chỉ được dệt bằng khung cửi cổ tay tốn 3 ngày mỗi mét.",
        descriptionEn: "Brocade panel woven with raised dragon-phoenix patterns, made only on a hand loom that takes 3 days to produce one meter.",
        dropRate: 0.09,
      },
      {
        id: "ha-noi-van-phuc-cong-thuc-nhuom",
        name: "Công thức nhuộm tơ",
        nameEn: "Silk Dyeing Formula",
        ichDomain: "craftsmanship",
        sourceNodeId: "ha-noi-lang-nghề-lua-van-phuc",
        sourceNodeName: "Làng Lụa Vạn Phúc",
        knowledgeHolderName: "Nghệ nhân Nguyễn Thị Tâm",
        image: "https://picsum.photos/seed/van-phuc-3/400/400",
        rarity: "Rare",
        description: "Công thức nhuộm tơ bằng thực vật gồm cây lá chàm, vỏ cây sồi và củ nghệ — đã dùng hơn 700 năm không thay đổi.",
        descriptionEn: "Plant-based silk dye formula using indigo leaves, oak bark, and turmeric root — unchanged for over 700 years.",
        dropRate: 0.25,
      },
    ],
  },
  {
    id: "ha-noi-thap-rua",
    cityId: "ha-noi",
    category: "must-visit",
    name: "Tháp Rùa & Cầu Thê Húc",
    nameEn: "Turtle Tower & The Huc Bridge",
    ichDomain: "traditional-knowledge",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.8526, 21.0280],
    coverImage:
      "https://images.unsplash.com/photo-1599708153386-62bf0f968994?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Nhà thơ Vũ Quần Phương",
      nameEn: "Poet Vu Quan Phuong",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      role: "storyteller",
      roleEn: "Poet & Literary Historian",
    },
    knowledgeSummary:
      "Tháp Rùa đứng giữa hồ Hoàn Kiếm là biểu tượng lãng mạn nhất của Hà Nội, được xây vào cuối thế kỷ 19. Cầu Thê Húc màu đỏ son dẫn vào đảo Ngọc Sơn là một trong những cầu đẹp nhất Đông Nam Á — mỗi sớm mai là điểm hẹn của người Hà Nội tập thể dục và câu cá.",
    knowledgeSummaryEn:
      "Turtle Tower standing in the middle of Hoan Kiem Lake is Hanoi's most romantic symbol, built in the late 19th century. The vermillion-red The Huc Bridge leading to Ngoc Son Island is one of Southeast Asia's most beautiful bridges — every morning it is a gathering point for Hanoians exercising and fishing.",
    elements: ["Tháp Rùa cuối thế kỷ 19", "Cầu Thê Húc màu đỏ", "Đảo Ngọc Sơn", "Buổi sáng hồ Gươm"],
    npcScript: [
      {
        order: 1,
        question: "Tháp Rùa được xây vì mục đích gì?",
        answer:
          "Tháp xây năm 1886 bởi Bá hộ Kim — một thương gia người Việt theo Pháp — với ý định dùng làm nơi thờ. Nhưng người Hà Nội không chấp nhận bởi cảm thấy 'không hợp phong thủy hồ'. Tháp bỏ trống nhiều năm rồi được tích hợp vào không gian hồ như biểu tượng thành phố.",
      },
      {
        order: 2,
        question: "Tại sao cầu Thê Húc màu đỏ?",
        answer:
          "Đỏ son là màu của hỷ sự và phúc lành trong văn hóa Á Đông. 'Thê Húc' nghĩa là 'nơi đón ánh mặt trời buổi sáng' — buổi sáng ánh nắng đầu tiên chiếu qua cầu đỏ xuống mặt hồ xanh tạo nên khung cảnh đẹp nhất ngày mới. Người Hà Nội tin rằng đi qua cầu buổi sáng sớm mang may mắn.",
      },
      {
        order: 3,
        question: "Người Hà Nội dùng hồ Hoàn Kiếm như thế nào hàng ngày?",
        answer:
          "Sáng sớm 5–7 giờ là thời gian của người già tập thể dục, nhảy aerobic, đánh cầu lông. Trưa là không gian nghỉ ngơi của dân văn phòng. Tối là điểm hẹn của đôi lứa và gia đình. Cuối tuần đi bộ quanh hồ là truyền thống của người Hà Nội — phố đi bộ đêm thứ 6 và thứ 7 là lễ hội tự phát của cả thành phố.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh Tháp Rùa in bóng xuống mặt hồ lúc bình minh hoặc hoàng hôn",
      promptEn: "Photograph Turtle Tower reflecting on the lake surface at dawn or dusk",
      referenceImages: [
        "https://images.unsplash.com/photo-1599708153386-62bf0f968994?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-thap-rua-bong-thap",
        name: "Bóng tháp rùa lúc bình minh",
        nameEn: "Turtle Tower Dawn Reflection",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "ha-noi-thap-rua",
        sourceNodeName: "Tháp Rùa & Cầu Thê Húc",
        knowledgeHolderName: "Bà Phạm Thị Thu Hà",
        image: "https://picsum.photos/seed/thap-rua-1/400/400",
        rarity: "Rare",
        description: "Ảnh phản chiếu Tháp Rùa trên mặt hồ lúc bình minh — khoảnh khắc đẹp nhất Hà Nội chỉ xuất hiện 10 phút mỗi ngày khi không có sóng gió.",
        descriptionEn: "The reflection of Turtle Tower on the lake at dawn — Hanoi's most beautiful moment, visible for only 10 minutes each day when the water is still.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-thap-rua-la-sen",
        name: "Lá sen hồ Gươm",
        nameEn: "Hoan Kiem Lotus Leaf",
        ichDomain: "traditional-knowledge",
        sourceNodeId: "ha-noi-thap-rua",
        sourceNodeName: "Tháp Rùa & Cầu Thê Húc",
        knowledgeHolderName: "Bà Phạm Thị Thu Hà",
        image: "https://picsum.photos/seed/thap-rua-2/400/400",
        rarity: "Common",
        description: "Lá sen tròn xanh mọc trên hồ Hoàn Kiếm — người Hà Nội dùng gói cốm làng Vòng và ủ trà sen từ xưa đến nay.",
        descriptionEn: "Round green lotus leaf grown on Hoan Kiem Lake — used by Hanoians to wrap sticky rice cakes and brew lotus tea for centuries.",
        dropRate: 0.6,
      },
    ],
  },
  {
    id: "ha-noi-ca-phe-trung",
    cityId: "ha-noi",
    category: "must-visit",
    name: "Cà Phê Trứng Hà Nội",
    nameEn: "Hanoi Egg Coffee",
    ichDomain: "culinary",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.8510, 21.0340],
    coverImage:
      "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Nguyễn Việt",
      nameEn: "Mr. Nguyen Viet",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "artisan",
      roleEn: "Egg Coffee Inventor's Descendant",
    },
    knowledgeSummary:
      "Cà phê trứng Hà Nội (Cà Phê Giảng) là đặc sản sáng tạo từ những năm 1946 khi sữa khan hiếm, nghệ nhân Nguyễn Văn Giang dùng lòng đỏ trứng đánh bông thay thế. Ly cà phê đen đậm đặc với lớp kem trứng đánh bông vàng béo ngậy bên trên trở thành một hiện tượng ẩm thực toàn cầu.",
    knowledgeSummaryEn:
      "Hanoi egg coffee (Ca Phe Giang) was invented around 1946 when milk was scarce — artisan Nguyen Van Giang used whipped egg yolk as a substitute. A cup of strong black coffee topped with a golden, creamy whipped egg layer became a global culinary phenomenon.",
    elements: ["Lòng đỏ trứng gà", "Cà phê phin đặc", "Sữa đặc pha trứng", "Phin truyền thống"],
    npcScript: [
      {
        order: 1,
        question: "Cà phê trứng được tạo ra như thế nào?",
        answer:
          "Ông Nguyễn Văn Giang, bartender khách sạn Metropole năm 1946, nghĩ ra khi sữa khan hiếm sau chiến tranh. Ông đánh lòng đỏ trứng với đường và sữa đặc cho đến khi bông mịn như kem rồi đổ lên cà phê đen. Công thức gia truyền được giữ bí mật 70 năm, con cháu tiếp tục mở quán Giang trên Hàng Gai.",
      },
      {
        order: 2,
        question: "Cách uống cà phê trứng đúng cách?",
        answer:
          "Không khuấy! Uống từng ngụm để cảm nhận vị đắng đậm của cà phê trước rồi tan dần vào lớp kem trứng béo ngọt. Nhiều người dùng muỗng múc kem ăn riêng. Tốt nhất là uống lúc còn nóng trong 5 phút đầu — sau đó kem sẽ đặc lại và vị sẽ khác.",
      },
      {
        order: 3,
        question: "Cà phê trứng nổi tiếng quốc tế như thế nào?",
        answer:
          "CNN, New York Times đã nhiều lần chọn cà phê trứng là một trong những đồ uống độc đáo nhất thế giới. Hàng trăm quán cafe ở Tokyo, New York, Paris đã thử sao chép nhưng không ai ra đúng vị vì thiếu phin truyền thống và cà phê robusta Việt Nam đặc biệt.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh ly cà phê trứng với lớp kem vàng bông bên trên",
      promptEn: "Photograph the egg coffee cup with its golden whipped cream layer on top",
      referenceImages: [
        "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?auto=format&fit=crop&q=80&w=800",
      ],
    },
    items: [
      {
        id: "ha-noi-ca-phe-chen",
        name: "Chén cà phê trứng",
        nameEn: "Egg Coffee Cup",
        ichDomain: "culinary",
        sourceNodeId: "ha-noi-ca-phe-trung",
        sourceNodeName: "Cà Phê Trứng Hà Nội",
        knowledgeHolderName: "Ông Nguyễn Văn Giang",
        image: "https://picsum.photos/seed/ca-phe-trung-1/400/400",
        rarity: "Common",
        description: "Tách cà phê nhỏ với lớp kem trứng đánh bông phủ trên mặt — thức uống do ông Nguyễn Giang sáng chế năm 1946 tại Hà Nội.",
        descriptionEn: "Small cup of coffee topped with a whipped egg yolk cream — the drink invented by Nguyen Giang in Hanoi in 1946.",
        dropRate: 0.6,
      },
      {
        id: "ha-noi-ca-phe-am-pha",
        name: "Ấm pha trứng bí truyền",
        nameEn: "Secret Egg Whisk Pot",
        ichDomain: "culinary",
        sourceNodeId: "ha-noi-ca-phe-trung",
        sourceNodeName: "Cà Phê Trứng Hà Nội",
        knowledgeHolderName: "Ông Nguyễn Văn Giang",
        image: "https://picsum.photos/seed/ca-phe-trung-2/400/400",
        rarity: "Rare",
        description: "Ấm đồng nhỏ chứa nước nóng dùng để ủ ấm tách cà phê trứng trong khi pha — bí quyết giữ nhiệt tạo lớp foam mịn hoàn hảo.",
        descriptionEn: "Small copper pot filled with hot water to keep the egg coffee cup warm while brewing — the secret to maintaining the temperature for a perfect foam.",
        dropRate: 0.28,
      },
      {
        id: "ha-noi-ca-phe-cong-thuc",
        name: "Công thức Giải Khâm",
        nameEn: "Original Giang Cafe Recipe",
        ichDomain: "culinary",
        sourceNodeId: "ha-noi-ca-phe-trung",
        sourceNodeName: "Cà Phê Trứng Hà Nội",
        knowledgeHolderName: "Ông Nguyễn Văn Giang",
        image: "https://picsum.photos/seed/ca-phe-trung-3/400/400",
        rarity: "Legendary",
        description: "Tỷ lệ lòng đỏ trứng, sữa đặc, cà phê phin và bí kíp đánh foam — chỉ con cháu ông Giang biết công thức đầy đủ.",
        descriptionEn: "The exact ratio of egg yolk, condensed milk, drip coffee, and the foaming secret — known only to the Giang family descendants.",
        dropRate: 0.04,
      },
    ],
  },
  {
    id: "hanoi-ca-tru",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Ca Trù Thăng Long",
    nameEn: "Thang Long Ca Tru Singing",
    ichDomain: "performing-arts",
    province: "ha-noi",
    unescoStatus: "inscribed",
    coordinates: [105.8480, 21.0350],
    coverImage: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200",
    tier: 3,
    knowledgeHolder: {
      name: "NSƯT Bạch Vân",
      nameEn: "Meritorious Artist Bach Van",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      role: "performer",
      roleEn: "Ca Tru Singer",
    },
    knowledgeSummary: "Ca trù là một loại hình nghệ thuật biểu diễn có từ thế kỷ 15, kết hợp giữa âm nhạc và thơ ca. Một dàn nhạc Ca trù cơ bản gồm 3 người: ca nương gõ phách, kép đàn chơi đàn đáy và quan viên đánh trống chầu. Ca trù đòi hỏi kỹ thuật hát bằng hơi bụng và nảy hạt cực kỳ khó.",
    knowledgeSummaryEn: "Ca tru is a performing art dating back to the 15th century, combining music and poetry. A basic Ca tru ensemble consists of three people: a female singer playing clappers, a male lute player, and a drummer. Ca tru requires extremely difficult belly-breathing and 'grainy' singing techniques.",
    elements: ["Đàn Đáy", "Phách tre", "Trống chầu", "Thơ chữ Hán - Nôm"],
    npcScript: [
      {
        order: 1,
        question: "Tại sao Ca trù lại được đưa vào danh sách di sản cần bảo vệ khẩn cấp?",
        answer: "Vì đây là một bộ môn nghệ thuật bác học cực kỳ khó học. Số lượng nghệ nhân nắm giữ kỹ thuật hát và chơi đàn đáy đúng chuẩn không còn nhiều, và giới trẻ hiện nay cũng ít mặn mà với dòng nhạc kén người nghe này."
      }
    ],
    items: [
      {
        id: "hanoi-ca-tru-phach-tre",
        name: "Phách tre nghệ nhân",
        nameEn: "Artisan Bamboo Clapper",
        ichDomain: "performing-arts",
        sourceNodeId: "hanoi-ca-tru",
        sourceNodeName: "Ca Trù Thăng Long",
        knowledgeHolderName: "NSƯT Bạch Vân",
        image: "https://picsum.photos/seed/ca-tru-1/400/400",
        rarity: "Epic",
        description: "Bộ phách làm từ tre già, được chính ca nương sử dụng để giữ nhịp cho những bài hát Ca trù kinh điển.",
        descriptionEn: "A clapper set made from aged bamboo, used by the singer to keep the rhythm for classic Ca tru songs.",
        dropRate: 0.1
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh ca nương đang hát và gõ phách",
      promptEn: "Photograph a Ca Tru singer performing with clappers",
      referenceImages: ["https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hanoi-to-he",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Nghề nặn Tò he Xuân La",
    nameEn: "Xuan La To He Craft",
    ichDomain: "craftsmanship",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.9500, 20.8500],
    coverImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "Nghệ nhân Đặng Văn Hậu",
      nameEn: "Artisan Dang Van Hau",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      role: "artisan",
      roleEn: "Master To He Maker",
    },
    knowledgeSummary: "Tò he là loại đồ chơi dân gian truyền thống của trẻ em Việt Nam, được làm từ bột gạo nhuộm màu tự nhiên. Nghệ nhân chỉ với những nguyên liệu đơn giản và đôi bàn tay khéo léo có thể nặn ra đủ thứ hình thù từ con giống đến các nhân vật lịch sử, thần thoại.",
    knowledgeSummaryEn: "To He is a traditional folk toy for Vietnamese children, made from naturally colored rice dough. Using simple materials and skillful hands, artisans can create any shape from animals to historical and mythical figures.",
    elements: ["Bột gạo tẻ", "Bột gạo nếp", "Màu tự nhiên từ thực vật", "Que tre"],
    npcScript: [
      {
        order: 1,
        question: "Tò he có ăn được không?",
        answer: "Bản chất Tò he là đồ chơi nhưng có thể ăn được vì làm từ bột gạo và màu thực vật. Tuy nhiên, hiện nay người ta thường chú trọng vào tính nghệ thuật và trang trí nhiều hơn là để ăn."
      }
    ],
    items: [
      {
        id: "hanoi-to-he-con-gion",
        name: "Bộ Tò he 12 con giáp",
        nameEn: "12 Zodiac To He Set",
        ichDomain: "craftsmanship",
        sourceNodeId: "hanoi-to-he",
        sourceNodeName: "Nghề nặn Tò he Xuân La",
        knowledgeHolderName: "Nghệ nhân Đặng Văn Hậu",
        image: "https://picsum.photos/seed/to-he-1/400/400",
        rarity: "Rare",
        description: "Mười hai con giáp được nặn sống động từ bột gạo màu, món quà kỷ niệm đầy sắc màu của tuổi thơ Hà Nội.",
        descriptionEn: "Twelve zodiac animals vividly sculpted from colored rice dough, a colorful souvenir of Hanoi childhood.",
        dropRate: 0.15
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh đôi bàn tay nghệ nhân đang nặn Tò he",
      promptEn: "Photograph the artisan's hands sculpting To He",
      referenceImages: ["https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hanoi-hat-xam",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Hát Xẩm Hà Nội",
    nameEn: "Hanoi Xam Singing",
    ichDomain: "performing-arts",
    province: "ha-noi",
    unescoStatus: "nominated",
    coordinates: [105.8500, 21.0300],
    coverImage: "https://images.unsplash.com/photo-1444131470476-32439365516a?auto=format&fit=crop&q=80&w=1200",
    tier: 2,
    knowledgeHolder: {
      name: "NSND Xuân Hoạch",
      nameEn: "People's Artist Xuan Hoach",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "performer",
      roleEn: "Xam Master",
    },
    knowledgeSummary: "Hát Xẩm là loại hình âm nhạc dân gian của những người khiếm thị, thường được biểu diễn ở các chợ hoặc bến xe, bến tàu thời xưa. Xẩm Hà Nội mang âm hưởng phố thị với những bài ca nói về đạo đức lối sống, thời thế hoặc đơn giản là kể chuyện đời.",
    knowledgeSummaryEn: "Xam singing is a folk music genre of blind people, traditionally performed at markets, bus stations, or train docks. Hanoi Xam carries an urban vibe with songs about ethics, lifestyle, social issues, or simple life stories.",
    elements: ["Đàn nhị", "Sênh sứa", "Trống mảnh", "Áo nâu sòng"],
    npcScript: [
      {
        order: 1,
        question: "Hát Xẩm có gì khác với các loại hình dân ca khác?",
        answer: "Xẩm có phong cách tự do, phóng khoáng và mang tính kể chuyện rất cao. Đặc biệt, nhạc cụ chơi Xẩm thường là những thứ dễ di chuyển để phù hợp với đặc thù của những người hát rong."
      }
    ],
    items: [
      {
        id: "hanoi-hat-xam-senh-sua",
        name: "Sênh sứa gỗ trắc",
        nameEn: "Rosewood Clappers",
        ichDomain: "performing-arts",
        sourceNodeId: "hanoi-hat-xam",
        sourceNodeName: "Hát Xẩm Hà Nội",
        knowledgeHolderName: "NSND Xuân Hoạch",
        image: "https://picsum.photos/seed/hat-xam-1/400/400",
        rarity: "Rare",
        description: "Cặp sênh sứa làm từ gỗ quý, vật dụng gắn liền với những nghệ nhân hát Xẩm rong trên phố phường Hà Nội.",
        descriptionEn: "A pair of clappers made from precious wood, a familiar item for wandering Xam singers in Hanoi's streets.",
        dropRate: 0.2
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh nhóm nhạc Xẩm đang biểu diễn bên vỉa hè phố cổ",
      promptEn: "Photograph a Xam group performing on an Old Quarter sidewalk",
      referenceImages: ["https://images.unsplash.com/photo-1444131470476-32439365516a?auto=format&fit=crop&q=80&w=1200"]
    }
  },
  {
    id: "hanoi-com-lang-vong",
    cityId: "ha-noi",
    category: "intangible-heritage",
    name: "Cốm Làng Vòng",
    nameEn: "Vong Village Green Rice",
    ichDomain: "culinary",
    province: "ha-noi",
    unescoStatus: "unrecognized",
    coordinates: [105.7830, 21.0360],
    coverImage: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1200",
    tier: 1,
    knowledgeHolder: {
      name: "Bà Nguyễn Thị Nhượng",
      nameEn: "Mrs. Nguyen Thi Nhuong",
      avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80",
      role: "artisan",
      roleEn: "Green Rice Specialist",
    },
    knowledgeSummary: "Cốm Làng Vòng là đặc sản ẩm thực thanh tao bậc nhất của mùa thu Hà Nội. Những hạt nếp non được thu hoạch, rang, giã và sàng sảy công phu để tạo ra những hạt cốm xanh mướt, dẻo và thơm nồng mùi lúa mới, gói trong lá sen thơm ngát.",
    knowledgeSummaryEn: "Vong Village Green Rice is one of Hanoi's most elegant autumn culinary specialties. Young glutinous rice is harvested, roasted, pounded, and winnowed meticulously to create soft, fragrant green grains, wrapped in scented lotus leaves.",
    elements: ["Lúa nếp non", "Lá sen", "Rơm vàng", "Cối giã thủ công"],
    npcScript: [
      {
        order: 1,
        question: "Cốm ăn với gì là ngon nhất?",
        answer: "Cốm ăn ngon nhất khi được nhâm nhi cùng những quả chuối tiêu chín cuốc hoặc hồng đỏ. Sự kết hợp giữa vị ngọt thanh của cốm và vị béo của chuối tạo nên hương vị mùa thu không thể quên."
      }
    ],
    items: [
      {
        id: "hanoi-com-goi-la-sen",
        name: "Gói Cốm lá sen",
        nameEn: "Lotus-wrapped Green Rice",
        ichDomain: "culinary",
        sourceNodeId: "hanoi-com-lang-vong",
        sourceNodeName: "Cốm Làng Vòng",
        knowledgeHolderName: "Bà Nguyễn Thị Nhượng",
        image: "https://picsum.photos/seed/com-vong-1/400/400",
        rarity: "Common",
        description: "Món quà mùa thu Hà Nội gói trong lá sen xanh, buộc bằng cọng rơm vàng óng, giữ trọn hương vị nếp non.",
        descriptionEn: "Hanoi's autumn gift wrapped in green lotus leaves and tied with golden straw, preserving the flavor of young rice.",
        dropRate: 0.4
      }
    ],
    photoChallenge: {
      prompt: "Chụp ảnh gói cốm bên cạnh bát nước trà sen bốc khói",
      promptEn: "Photograph a package of green rice next to a steaming cup of lotus tea",
      referenceImages: ["https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1200"]
    }
  },
];
