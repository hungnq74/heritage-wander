import type { HeritageNode } from "../types";

export const DA_LAT_NODES: HeritageNode[] = [
  {
    id: "kho-gong-dalat",
    name: "Cồng Chiêng K'Ho Tây Nguyên",
    nameEn: "K'Ho Gong Culture of the Central Highlands",
    ichDomain: "performing-arts",
    province: "lam-dong",
    unescoStatus: "inscribed",
    ethnicGroup: "K'Ho",
    coordinates: [108.3742, 11.7762],
    coverImage: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    tier: 1,
    knowledgeHolder: {
      name: "Ông Ka Brêh",
      nameEn: "Mr. Ka Breh",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
      role: "ceremony-keeper",
      roleEn: "Gong Ceremony Keeper",
    },
    knowledgeSummary:
      "Du khách Đà Lạt chụp ảnh quán cà phê đẹp và vườn hoa cải. Chỉ 15km từ trung tâm, các buôn K'Ho vẫn tổ chức lễ cồng chiêng theo lịch nông nghiệp — mừng lúa mới, cầu mưa, đưa tiễn người mất. UNESCO công nhận Không gian văn hóa Cồng chiêng năm 2008. Thổ cẩm K'Ho — hoàn toàn khác thổ cẩm H'Mông — đang dần biến mất khi phụ nữ trẻ không còn học dệt.",
    knowledgeSummaryEn:
      "Da Lat tourists photograph beautiful cafés and flower fields. Just 15km from the center, K'Ho villages still hold gong ceremonies tied to the agricultural calendar — celebrating new rice harvest, praying for rain, sending off the dead. UNESCO inscribed the Space of Gong Culture in 2008. K'Ho brocade — entirely different from H'Mong brocade — is fading as young women no longer learn to weave.",
    elements: ["Cồng chiêng đồng", "Lịch lễ hội mùa vụ", "Thổ cẩm K'Ho", "Rượu cần", "Trống da trâu"],
    videoUrl: undefined,
    npcScript: [
      {
        order: 1,
        question: "Một bộ cồng chiêng gồm bao nhiêu chiếc?",
        answer:
          "Bộ cồng chiêng K'Ho đủ gồm 6 chiếc — mỗi chiếc một âm khác nhau tạo thành bộ âm thanh hoàn chỉnh. Cồng được đúc từ đồng pha bạc, mỗi chiếc có chủ nhân riêng trong buôn. Khi cần lễ, từng người mang cồng của mình đến — buôn nào đủ 6 chiếc thì mới tổ chức được lễ đầy đủ.",
      },
      {
        order: 2,
        question: "Cồng chiêng được dùng trong dịp nào?",
        answer:
          "Lịch lễ cồng chiêng theo mùa vụ lúa rẫy: tháng 1 cầu mưa, tháng 5 mừng lúa mọc, tháng 10 lễ thu hoạch, tháng 12 tiễn linh hồn người mất về với rừng. Ngoài ra còn lễ đặt tên, lễ cưới, lễ kết nghĩa giữa hai buôn. Cồng chiêng không đánh trong nhà — phải ra không gian mở để âm thanh 'bay' được.",
      },
      {
        order: 3,
        question: "Ai được phép đánh cồng chiêng?",
        answer:
          "Ngày xưa chỉ đàn ông mới đánh cồng; phụ nữ đánh chiêng nhỏ. Bây giờ quy định mềm hơn, nhưng người đánh phải học đúng kỹ thuật — không phải đánh cho to mà là đánh đúng nhịp và biết 'lắng nghe' chiếc cồng cạnh mình. Cồng chiêng là âm nhạc tập thể — không có người chỉ huy, mỗi người phải tự biết vị trí của mình.",
      },
    ],
    photoChallenge: {
      prompt: "Chụp ảnh lễ cồng chiêng trong không gian nhà dài K'Ho",
      promptEn: "Photograph a gong ceremony in the K'Ho longhouse setting",
      referenceImages: [
        "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&q=70",
      ],
    },
    items: [
      {
        id: "kgdl-001",
        name: "Bản ghi âm cộng hưởng cồng",
        nameEn: "Tuned Gong Resonance Record",
        ichDomain: "performing-arts",
        sourceNodeId: "kho-gong-dalat",
        sourceNodeName: "Cồng Chiêng K'Ho Tây Nguyên",
        knowledgeHolderName: "Ông Ka Brêh",
        image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80",
        rarity: "Common",
        description: "Bảng ghi tần số cộng hưởng từng chiếc cồng trong bộ 6 — tài liệu hiệu chỉnh bộ cồng truyền thống.",
        descriptionEn: "Resonance frequency record for each of the 6 gongs in a set — traditional tuning document.",
        dropRate: 0.6,
      },
      {
        id: "kgdl-002",
        name: "Bản đồ lễ hội mùa vụ",
        nameEn: "Harvest Ceremony Calendar Map",
        ichDomain: "performing-arts",
        sourceNodeId: "kho-gong-dalat",
        sourceNodeName: "Cồng Chiêng K'Ho Tây Nguyên",
        knowledgeHolderName: "Ông Ka Brêh",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
        rarity: "Rare",
        description: "Bản vẽ lịch lễ hội cồng chiêng theo chu kỳ mùa vụ của buôn K'Ho — 12 tháng, 7 lễ lớn.",
        descriptionEn: "Drawn calendar of K'Ho village gong ceremonies across the agricultural cycle — 12 months, 7 major ceremonies.",
        dropRate: 0.28,
      },
      {
        id: "kgdl-003",
        name: "Tấm thổ cẩm K'Ho",
        nameEn: "K'Ho Textile Panel",
        ichDomain: "performing-arts",
        sourceNodeId: "kho-gong-dalat",
        sourceNodeName: "Cồng Chiêng K'Ho Tây Nguyên",
        knowledgeHolderName: "Ông Ka Brêh",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        rarity: "Epic",
        description: "Tấm thổ cẩm K'Ho dệt tay với hoa văn rừng Tây Nguyên — hoàn toàn khác thổ cẩm H'Mông về màu và họa tiết.",
        descriptionEn: "Hand-woven K'Ho textile panel with Central Highland forest motifs — entirely different from H'Mong brocade in color and pattern.",
        dropRate: 0.08,
      },
      {
        id: "kgdl-004",
        name: "Bản dập môi cồng thiêng",
        nameEn: "Sacred Gong Lip Rubbing",
        ichDomain: "performing-arts",
        sourceNodeId: "kho-gong-dalat",
        sourceNodeName: "Cồng Chiêng K'Ho Tây Nguyên",
        knowledgeHolderName: "Ông Ka Brêh",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        rarity: "Legendary",
        description: "Bản dập hoa văn khắc trên môi cồng cổ 200 năm — ký hiệu nhận dạng chiếc cồng thiêng của buôn.",
        descriptionEn: "Rubbing of the engraved pattern on the lip of a 200-year-old sacred gong — identification mark of the village's holy gong.",
        dropRate: 0.02,
      },
    ],
  },
];
