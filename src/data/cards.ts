/** 韦特系 78 张塔罗的原创中文学习资料；解读采用象征、位置与主题组合。 */
export type Arcana = 'major' | 'minor';
export type Suit = 'wands' | 'cups' | 'swords' | 'pentacles';
export type CardOrientation = 'upright' | 'reversed';
export type Orientation = CardOrientation;
export type ReadingTopic = 'general' | 'love' | 'career' | 'growth';
export interface CardMeaning {
  summary: string;
  love: string;
  career: string;
  advice: string;
}
export interface Card {
  id: string;
  number: number;
  numberLabel: string;
  arcana: Arcana;
  suit?: Suit;
  suitName: string;
  rank?: string;
  name: string;
  nameEn: string;
  symbol: string;
  element?: string;
  summary: string;
  uprightKeywords: string[];
  reversedKeywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  reversedLoveMeaning: string;
  reversedCareerMeaning: string;
  reflection: string;
  keywords: Record<CardOrientation, string[]>;
  meaning: Record<CardOrientation, CardMeaning>;
  symbolism: string;
  image?: string;
}
export type TarotCard = Card;

export const tarotCards: Card[] = [
  {
    "id": "the-fool",
    "number": 0,
    "arcana": "major",
    "nameEn": "The Fool",
    "keywords": {
      "upright": [
        "天真",
        "启程",
        "自由",
        "信任"
      ],
      "reversed": [
        "鲁莽",
        "逃避",
        "准备不足",
        "冒险失控"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "新的旅程从一份好奇开始。保持开放，先迈出第一步。",
        "love": "在关系中带来轻盈、心动和重新开始的机会。",
        "career": "适合试验新方向，相信直觉并学习新技能。",
        "advice": "给未知留一点空间，同时为自己留一条退路。"
      },
      "reversed": {
        "summary": "过度冲动可能让你忽略现实的代价。先确认边界与安全。",
        "love": "关系缺少承诺或有人没有准备好承担责任。",
        "career": "计划不足、反复跳槽或高估资源会带来损失。",
        "advice": "给未知留一点空间，同时为自己留一条退路。"
      }
    },
    "symbolism": "愚人站在悬崖边，象征纯真与对未知的信任。",
    "image": "/images/cards/the-fool.svg",
    "numberLabel": "0",
    "suitName": "大阿尔卡纳",
    "symbol": "✦",
    "reflection": "你愿意为哪一个新的开始迈出第一步？",
    "name": "愚人",
    "summary": "新的旅程从一份好奇开始。保持开放，先迈出第一步。",
    "uprightKeywords": [
      "天真",
      "启程",
      "自由",
      "信任"
    ],
    "reversedKeywords": [
      "鲁莽",
      "逃避",
      "准备不足",
      "冒险失控"
    ],
    "uprightMeaning": "新的旅程从一份好奇开始。保持开放，先迈出第一步。",
    "reversedMeaning": "过度冲动可能让你忽略现实的代价。先确认边界与安全。",
    "loveMeaning": "在关系中带来轻盈、心动和重新开始的机会。",
    "careerMeaning": "适合试验新方向，相信直觉并学习新技能。",
    "reversedLoveMeaning": "关系缺少承诺或有人没有准备好承担责任。",
    "reversedCareerMeaning": "计划不足、反复跳槽或高估资源会带来损失。"
  },
  {
    "id": "the-magician",
    "number": 1,
    "arcana": "major",
    "nameEn": "The Magician",
    "keywords": {
      "upright": [
        "意志",
        "资源",
        "表达",
        "显化"
      ],
      "reversed": [
        "操控",
        "分散",
        "空谈",
        "机会错失"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你手里已经有足够的工具，关键是把意念转成行动。",
        "love": "主动沟通会点燃吸引力；关系适合表达心意。",
        "career": "善用技能、工具和人脉，尽快做出可验证的成果。",
        "advice": "把注意力收回到一件能完成的事。"
      },
      "reversed": {
        "summary": "能量分散或被漂亮承诺牵着走，成果因此延迟。",
        "love": "话术多于行动，或一方试图控制另一方。",
        "career": "项目缺少执行、重点频繁变化，需重建优先级。",
        "advice": "把注意力收回到一件能完成的事。"
      }
    },
    "symbolism": "四元素器物齐备，象征意识可以调动现实资源。",
    "image": "/images/cards/the-magician.svg",
    "numberLabel": "Ⅰ",
    "suitName": "大阿尔卡纳",
    "symbol": "✧",
    "reflection": "你已经拥有哪种尚未真正使用的资源？",
    "name": "魔术师",
    "summary": "你手里已经有足够的工具，关键是把意念转成行动。",
    "uprightKeywords": [
      "意志",
      "资源",
      "表达",
      "显化"
    ],
    "reversedKeywords": [
      "操控",
      "分散",
      "空谈",
      "机会错失"
    ],
    "uprightMeaning": "你手里已经有足够的工具，关键是把意念转成行动。",
    "reversedMeaning": "能量分散或被漂亮承诺牵着走，成果因此延迟。",
    "loveMeaning": "主动沟通会点燃吸引力；关系适合表达心意。",
    "careerMeaning": "善用技能、工具和人脉，尽快做出可验证的成果。",
    "reversedLoveMeaning": "话术多于行动，或一方试图控制另一方。",
    "reversedCareerMeaning": "项目缺少执行、重点频繁变化，需重建优先级。"
  },
  {
    "id": "the-high-priestess",
    "number": 2,
    "arcana": "major",
    "nameEn": "The High Priestess",
    "keywords": {
      "upright": [
        "直觉",
        "内在",
        "静默",
        "神秘"
      ],
      "reversed": [
        "压抑直觉",
        "秘密泄露",
        "被动等待",
        "混乱"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "答案已经在你的感受里，先安静观察，再决定是否行动。",
        "love": "关系需要耐心、边界和深层倾听；不必急着定义。",
        "career": "记录梦境与直觉，给信息自然浮现的时间。",
        "advice": "留白也是一种选择，先听见自己的声音。"
      },
      "reversed": {
        "summary": "你可能忽略明显的内在警报，或被未说出口的事牵动。",
        "love": "暧昧、隐瞒或情绪封闭使真相难以浮现。",
        "career": "信息不透明，适合调查而不是仓促承诺。",
        "advice": "留白也是一种选择，先听见自己的声音。"
      }
    },
    "symbolism": "黑白柱与帷幕象征二元之间的门槛和未揭示的知识。",
    "image": "/images/cards/the-high-priestess.svg",
    "numberLabel": "Ⅱ",
    "suitName": "大阿尔卡纳",
    "symbol": "☾",
    "reflection": "你内心很轻、却反复出现的声音是什么？",
    "name": "女祭司",
    "summary": "答案已经在你的感受里，先安静观察，再决定是否行动。",
    "uprightKeywords": [
      "直觉",
      "内在",
      "静默",
      "神秘"
    ],
    "reversedKeywords": [
      "压抑直觉",
      "秘密泄露",
      "被动等待",
      "混乱"
    ],
    "uprightMeaning": "答案已经在你的感受里，先安静观察，再决定是否行动。",
    "reversedMeaning": "你可能忽略明显的内在警报，或被未说出口的事牵动。",
    "loveMeaning": "关系需要耐心、边界和深层倾听；不必急着定义。",
    "careerMeaning": "记录梦境与直觉，给信息自然浮现的时间。",
    "reversedLoveMeaning": "暧昧、隐瞒或情绪封闭使真相难以浮现。",
    "reversedCareerMeaning": "信息不透明，适合调查而不是仓促承诺。"
  },
  {
    "id": "the-empress",
    "number": 3,
    "arcana": "major",
    "nameEn": "The Empress",
    "keywords": {
      "upright": [
        "滋养",
        "丰盛",
        "创造",
        "感官"
      ],
      "reversed": [
        "依赖",
        "过度保护",
        "停滞",
        "匮乏感"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "照顾自己和正在成长的事物，丰盛会从持续投入中出现。",
        "love": "关系温柔丰沛，适合表达爱、建立家与共同生活。",
        "career": "让创意落地，改善环境并照顾身体节律。",
        "advice": "先让自己被滋养，再去滋养他人。"
      },
      "reversed": {
        "summary": "付出过量、缺少自我照顾，或把价值感寄托于外界。",
        "love": "情感过度依赖、占有或忽视彼此真实需求。",
        "career": "资源分配失衡，项目需要重新获得养分。",
        "advice": "先让自己被滋养，再去滋养他人。"
      }
    },
    "symbolism": "谷物、花园与母性形象象征生命力和自然的丰收。",
    "image": "/images/cards/the-empress.svg",
    "numberLabel": "Ⅲ",
    "suitName": "大阿尔卡纳",
    "symbol": "❋",
    "reflection": "什么让你感到被滋养，什么正在消耗你？",
    "name": "皇后",
    "summary": "照顾自己和正在成长的事物，丰盛会从持续投入中出现。",
    "uprightKeywords": [
      "滋养",
      "丰盛",
      "创造",
      "感官"
    ],
    "reversedKeywords": [
      "依赖",
      "过度保护",
      "停滞",
      "匮乏感"
    ],
    "uprightMeaning": "照顾自己和正在成长的事物，丰盛会从持续投入中出现。",
    "reversedMeaning": "付出过量、缺少自我照顾，或把价值感寄托于外界。",
    "loveMeaning": "关系温柔丰沛，适合表达爱、建立家与共同生活。",
    "careerMeaning": "让创意落地，改善环境并照顾身体节律。",
    "reversedLoveMeaning": "情感过度依赖、占有或忽视彼此真实需求。",
    "reversedCareerMeaning": "资源分配失衡，项目需要重新获得养分。"
  },
  {
    "id": "the-emperor",
    "number": 4,
    "arcana": "major",
    "nameEn": "The Emperor",
    "keywords": {
      "upright": [
        "结构",
        "权威",
        "边界",
        "责任"
      ],
      "reversed": [
        "控制",
        "僵化",
        "暴政",
        "害怕失序"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "建立清晰规则与可靠结构，你就能把愿景变成长期成果。",
        "love": "关系需要稳定承诺和清楚边界，也要保留温度。",
        "career": "制定计划、预算与责任分工，承担该承担的决定。",
        "advice": "坚定不等于封闭，规则应服务于生命。"
      },
      "reversed": {
        "summary": "权力变成控制，或者因为固执而拒绝调整。",
        "love": "冷漠、支配或一方把关系当成管理。",
        "career": "官僚、僵化和争权会拖慢进度。",
        "advice": "坚定不等于封闭，规则应服务于生命。"
      }
    },
    "symbolism": "石座、山脉与盔甲表现秩序、力量和守护责任。",
    "image": "/images/cards/the-emperor.svg",
    "numberLabel": "Ⅳ",
    "suitName": "大阿尔卡纳",
    "symbol": "♜",
    "reflection": "怎样的边界能让你更安心，也更自由？",
    "name": "皇帝",
    "summary": "建立清晰规则与可靠结构，你就能把愿景变成长期成果。",
    "uprightKeywords": [
      "结构",
      "权威",
      "边界",
      "责任"
    ],
    "reversedKeywords": [
      "控制",
      "僵化",
      "暴政",
      "害怕失序"
    ],
    "uprightMeaning": "建立清晰规则与可靠结构，你就能把愿景变成长期成果。",
    "reversedMeaning": "权力变成控制，或者因为固执而拒绝调整。",
    "loveMeaning": "关系需要稳定承诺和清楚边界，也要保留温度。",
    "careerMeaning": "制定计划、预算与责任分工，承担该承担的决定。",
    "reversedLoveMeaning": "冷漠、支配或一方把关系当成管理。",
    "reversedCareerMeaning": "官僚、僵化和争权会拖慢进度。"
  },
  {
    "id": "the-hierophant",
    "number": 5,
    "arcana": "major",
    "nameEn": "The Hierophant",
    "keywords": {
      "upright": [
        "传统",
        "学习",
        "信念",
        "导师"
      ],
      "reversed": [
        "教条",
        "盲从",
        "形式主义",
        "反叛压力"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "向成熟的传统或导师学习，找到能支撑你的价值体系。",
        "love": "共同信念和正式承诺能让关系稳定成长。",
        "career": "寻找靠谱老师、课程与群体，按方法积累基本功。",
        "advice": "吸收传统，也保留自己的判断。"
      },
      "reversed": {
        "summary": "规则变成束缚，你需要重新审视谁定义了“应该”。",
        "love": "外界标准干预关系，或承诺只是为了满足他人期待。",
        "career": "不合适的制度、证书或群体让你失去自主性。",
        "advice": "吸收传统，也保留自己的判断。"
      }
    },
    "symbolism": "两位侍者与三重冠象征传承、仪式和群体智慧。",
    "image": "/images/cards/the-hierophant.svg",
    "numberLabel": "Ⅴ",
    "suitName": "大阿尔卡纳",
    "symbol": "✥",
    "reflection": "你遵循的信念，是自己选择的还是他人交给你的？",
    "name": "教皇",
    "summary": "向成熟的传统或导师学习，找到能支撑你的价值体系。",
    "uprightKeywords": [
      "传统",
      "学习",
      "信念",
      "导师"
    ],
    "reversedKeywords": [
      "教条",
      "盲从",
      "形式主义",
      "反叛压力"
    ],
    "uprightMeaning": "向成熟的传统或导师学习，找到能支撑你的价值体系。",
    "reversedMeaning": "规则变成束缚，你需要重新审视谁定义了“应该”。",
    "loveMeaning": "共同信念和正式承诺能让关系稳定成长。",
    "careerMeaning": "寻找靠谱老师、课程与群体，按方法积累基本功。",
    "reversedLoveMeaning": "外界标准干预关系，或承诺只是为了满足他人期待。",
    "reversedCareerMeaning": "不合适的制度、证书或群体让你失去自主性。"
  },
  {
    "id": "the-lovers",
    "number": 6,
    "arcana": "major",
    "nameEn": "The Lovers",
    "keywords": {
      "upright": [
        "选择",
        "联结",
        "价值",
        "相遇"
      ],
      "reversed": [
        "失衡",
        "逃避选择",
        "不一致",
        "诱惑"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "重要选择要求你让行动与内心价值保持一致。",
        "love": "真诚吸引、深度联结与共同选择，是关系的核心。",
        "career": "说出真实优先级，并承担选择的后果。",
        "advice": "选择让你更完整的人与路。"
      },
      "reversed": {
        "summary": "欲望和价值冲突，或关系中缺少坦诚。",
        "love": "沟通断裂、三角关系或无法承诺。",
        "career": "合作目标不一致，需重新谈清原则。",
        "advice": "选择让你更完整的人与路。"
      }
    },
    "symbolism": "相向而立的两人象征相遇，天使象征更高层次的诚实与联结。",
    "image": "/images/cards/the-lovers.svg",
    "numberLabel": "Ⅵ",
    "suitName": "大阿尔卡纳",
    "symbol": "♡",
    "reflection": "你的选择是否与真正重视的价值一致？",
    "name": "恋人",
    "summary": "重要选择要求你让行动与内心价值保持一致。",
    "uprightKeywords": [
      "选择",
      "联结",
      "价值",
      "相遇"
    ],
    "reversedKeywords": [
      "失衡",
      "逃避选择",
      "不一致",
      "诱惑"
    ],
    "uprightMeaning": "重要选择要求你让行动与内心价值保持一致。",
    "reversedMeaning": "欲望和价值冲突，或关系中缺少坦诚。",
    "loveMeaning": "真诚吸引、深度联结与共同选择，是关系的核心。",
    "careerMeaning": "说出真实优先级，并承担选择的后果。",
    "reversedLoveMeaning": "沟通断裂、三角关系或无法承诺。",
    "reversedCareerMeaning": "合作目标不一致，需重新谈清原则。"
  },
  {
    "id": "the-chariot",
    "number": 7,
    "arcana": "major",
    "nameEn": "The Chariot",
    "keywords": {
      "upright": [
        "意志",
        "推进",
        "胜利",
        "自律"
      ],
      "reversed": [
        "失控",
        "内耗",
        "方向混乱",
        "强行推进"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "集中意志、驾驭冲突，你可以把局面推向想要的方向。",
        "love": "关系会被共同目标推动，但控制欲会制造摩擦。",
        "career": "设定明确里程碑，保持节奏并亲自掌舵。",
        "advice": "速度要由方向来决定。"
      },
      "reversed": {
        "summary": "目标太多或情绪互相拉扯，前进变成消耗。",
        "love": "争执升级、冷热不定或谁也不愿让步。",
        "career": "团队方向不一，需暂停校准而不是猛踩油门。",
        "advice": "速度要由方向来决定。"
      }
    },
    "symbolism": "两匹方向相反的狮身兽象征被意志统合的对立力量。",
    "image": "/images/cards/the-chariot.svg",
    "numberLabel": "Ⅶ",
    "suitName": "大阿尔卡纳",
    "symbol": "♞",
    "reflection": "你的力量是否都在朝向同一个目标？",
    "name": "战车",
    "summary": "集中意志、驾驭冲突，你可以把局面推向想要的方向。",
    "uprightKeywords": [
      "意志",
      "推进",
      "胜利",
      "自律"
    ],
    "reversedKeywords": [
      "失控",
      "内耗",
      "方向混乱",
      "强行推进"
    ],
    "uprightMeaning": "集中意志、驾驭冲突，你可以把局面推向想要的方向。",
    "reversedMeaning": "目标太多或情绪互相拉扯，前进变成消耗。",
    "loveMeaning": "关系会被共同目标推动，但控制欲会制造摩擦。",
    "careerMeaning": "设定明确里程碑，保持节奏并亲自掌舵。",
    "reversedLoveMeaning": "争执升级、冷热不定或谁也不愿让步。",
    "reversedCareerMeaning": "团队方向不一，需暂停校准而不是猛踩油门。"
  },
  {
    "id": "strength",
    "number": 8,
    "arcana": "major",
    "nameEn": "Strength",
    "keywords": {
      "upright": [
        "勇气",
        "耐心",
        "温柔",
        "内在力量"
      ],
      "reversed": [
        "自我怀疑",
        "压抑",
        "失控",
        "脆弱伪装"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "真正的力量来自温柔、耐心和对本能的理解。",
        "love": "以尊重和耐心相处，柔软会修复关系中的紧张。",
        "career": "慢下来，照顾身体，用稳定练习建立信心。",
        "advice": "不必证明自己强大，允许自己有感受。"
      },
      "reversed": {
        "summary": "你可能用压抑或硬撑代替真实的勇气。",
        "love": "情绪爆发、嫉妒或不安全感正在夺走信任。",
        "career": "疲惫与恐惧让你难以持续，需要先恢复。",
        "advice": "不必证明自己强大，允许自己有感受。"
      }
    },
    "symbolism": "女子驯服狮子，象征意识与本能在信任中合作。",
    "image": "/images/cards/strength.svg",
    "numberLabel": "Ⅷ",
    "suitName": "大阿尔卡纳",
    "symbol": "∞",
    "reflection": "你可以怎样温柔地对待自己的恐惧？",
    "name": "力量",
    "summary": "真正的力量来自温柔、耐心和对本能的理解。",
    "uprightKeywords": [
      "勇气",
      "耐心",
      "温柔",
      "内在力量"
    ],
    "reversedKeywords": [
      "自我怀疑",
      "压抑",
      "失控",
      "脆弱伪装"
    ],
    "uprightMeaning": "真正的力量来自温柔、耐心和对本能的理解。",
    "reversedMeaning": "你可能用压抑或硬撑代替真实的勇气。",
    "loveMeaning": "以尊重和耐心相处，柔软会修复关系中的紧张。",
    "careerMeaning": "慢下来，照顾身体，用稳定练习建立信心。",
    "reversedLoveMeaning": "情绪爆发、嫉妒或不安全感正在夺走信任。",
    "reversedCareerMeaning": "疲惫与恐惧让你难以持续，需要先恢复。"
  },
  {
    "id": "the-hermit",
    "number": 9,
    "arcana": "major",
    "nameEn": "The Hermit",
    "keywords": {
      "upright": [
        "独处",
        "寻找",
        "洞见",
        "内省"
      ],
      "reversed": [
        "孤立",
        "封闭",
        "逃避",
        "迷失"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "暂时退一步，独自寻找真正的问题与答案。",
        "love": "关系需要空间与诚实的自我探索。",
        "career": "做研究、复盘和长期规划，不必急于公开结论。",
        "advice": "安静不是离开，而是听见方向。"
      },
      "reversed": {
        "summary": "独处变成隔绝，或你用思考逃避现实接触。",
        "love": "冷处理、失联或一方拒绝分享内心。",
        "career": "缺少反馈导致停滞，适合寻求一位可靠顾问。",
        "advice": "安静不是离开，而是听见方向。"
      }
    },
    "symbolism": "提灯照亮脚下道路，象征经验为自己与他人指路。",
    "image": "/images/cards/the-hermit.svg",
    "numberLabel": "Ⅸ",
    "suitName": "大阿尔卡纳",
    "symbol": "✶",
    "reflection": "如果暂时放下外界评价，你会听见什么？",
    "name": "隐者",
    "summary": "暂时退一步，独自寻找真正的问题与答案。",
    "uprightKeywords": [
      "独处",
      "寻找",
      "洞见",
      "内省"
    ],
    "reversedKeywords": [
      "孤立",
      "封闭",
      "逃避",
      "迷失"
    ],
    "uprightMeaning": "暂时退一步，独自寻找真正的问题与答案。",
    "reversedMeaning": "独处变成隔绝，或你用思考逃避现实接触。",
    "loveMeaning": "关系需要空间与诚实的自我探索。",
    "careerMeaning": "做研究、复盘和长期规划，不必急于公开结论。",
    "reversedLoveMeaning": "冷处理、失联或一方拒绝分享内心。",
    "reversedCareerMeaning": "缺少反馈导致停滞，适合寻求一位可靠顾问。"
  },
  {
    "id": "wheel-of-fortune",
    "number": 10,
    "arcana": "major",
    "nameEn": "Wheel of Fortune",
    "keywords": {
      "upright": [
        "转机",
        "周期",
        "机缘",
        "变化"
      ],
      "reversed": [
        "失控",
        "延误",
        "重复模式",
        "抗拒变化"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "周期正在转动，意外机会可能改变局面。",
        "love": "关系进入新阶段，顺势调整会带来成长。",
        "career": "抓住窗口期，同时为波动准备弹性方案。",
        "advice": "变化来时，带着觉察一起转身。"
      },
      "reversed": {
        "summary": "你在重复旧模式，或把一切归咎于运气。",
        "love": "忽冷忽热、外界变化打乱计划，稳定感下降。",
        "career": "时机未到或外部条件反复，先保留选择。",
        "advice": "变化来时，带着觉察一起转身。"
      }
    },
    "symbolism": "轮上的四象征与升降位置表现生命循环与无常。",
    "image": "/images/cards/wheel-of-fortune.svg",
    "numberLabel": "Ⅹ",
    "suitName": "大阿尔卡纳",
    "symbol": "☸",
    "reflection": "你正在重复哪一种熟悉的模式？",
    "name": "命运之轮",
    "summary": "周期正在转动，意外机会可能改变局面。",
    "uprightKeywords": [
      "转机",
      "周期",
      "机缘",
      "变化"
    ],
    "reversedKeywords": [
      "失控",
      "延误",
      "重复模式",
      "抗拒变化"
    ],
    "uprightMeaning": "周期正在转动，意外机会可能改变局面。",
    "reversedMeaning": "你在重复旧模式，或把一切归咎于运气。",
    "loveMeaning": "关系进入新阶段，顺势调整会带来成长。",
    "careerMeaning": "抓住窗口期，同时为波动准备弹性方案。",
    "reversedLoveMeaning": "忽冷忽热、外界变化打乱计划，稳定感下降。",
    "reversedCareerMeaning": "时机未到或外部条件反复，先保留选择。"
  },
  {
    "id": "justice",
    "number": 11,
    "arcana": "major",
    "nameEn": "Justice",
    "keywords": {
      "upright": [
        "公平",
        "真相",
        "责任",
        "因果"
      ],
      "reversed": [
        "偏见",
        "逃避",
        "失衡",
        "法律纠纷"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "诚实面对事实并承担责任，清楚的判断会带来平衡。",
        "love": "坦诚、公平和对等付出是关系的基础。",
        "career": "核对合同、数据与承诺，按事实做决定。",
        "advice": "让事实先说话，再让情绪找到位置。"
      },
      "reversed": {
        "summary": "信息不完整、偏见或不愿承认后果。",
        "love": "冷酷评判、旧账未清或信任破裂。",
        "career": "流程争议、责任推诿或文书问题需要处理。",
        "advice": "让事实先说话，再让情绪找到位置。"
      }
    },
    "symbolism": "剑与天秤象征清晰判断和行动后果。",
    "image": "/images/cards/justice.svg",
    "numberLabel": "Ⅺ",
    "suitName": "大阿尔卡纳",
    "symbol": "⚖",
    "reflection": "如果诚实面对事实，你需要承担什么？",
    "name": "正义",
    "summary": "诚实面对事实并承担责任，清楚的判断会带来平衡。",
    "uprightKeywords": [
      "公平",
      "真相",
      "责任",
      "因果"
    ],
    "reversedKeywords": [
      "偏见",
      "逃避",
      "失衡",
      "法律纠纷"
    ],
    "uprightMeaning": "诚实面对事实并承担责任，清楚的判断会带来平衡。",
    "reversedMeaning": "信息不完整、偏见或不愿承认后果。",
    "loveMeaning": "坦诚、公平和对等付出是关系的基础。",
    "careerMeaning": "核对合同、数据与承诺，按事实做决定。",
    "reversedLoveMeaning": "冷酷评判、旧账未清或信任破裂。",
    "reversedCareerMeaning": "流程争议、责任推诿或文书问题需要处理。"
  },
  {
    "id": "the-hanged-man",
    "number": 12,
    "arcana": "major",
    "nameEn": "The Hanged Man",
    "keywords": {
      "upright": [
        "暂停",
        "换位",
        "放下",
        "觉察"
      ],
      "reversed": [
        "拖延",
        "牺牲过度",
        "执着",
        "受困"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "暂缓推进，换一个角度会看见新的答案。",
        "love": "关系需要放下旧期待，给彼此空间重新理解。",
        "career": "暂停无效行动，重新评估真正值得投入的事。",
        "advice": "放下抓紧的东西，视野才会打开。"
      },
      "reversed": {
        "summary": "你被动等待或不断牺牲，却没有真正改变视角。",
        "love": "一方长期付出、停滞或把受苦当作爱。",
        "career": "项目卡住是因为方法需要改变，不是努力不够。",
        "advice": "放下抓紧的东西，视野才会打开。"
      }
    },
    "symbolism": "倒悬的姿态象征主动暂停和从不同角度看世界。",
    "image": "/images/cards/the-hanged-man.svg",
    "numberLabel": "Ⅻ",
    "suitName": "大阿尔卡纳",
    "symbol": "◇",
    "reflection": "换一个角度看，什么东西可以被放下？",
    "name": "倒吊人",
    "summary": "暂缓推进，换一个角度会看见新的答案。",
    "uprightKeywords": [
      "暂停",
      "换位",
      "放下",
      "觉察"
    ],
    "reversedKeywords": [
      "拖延",
      "牺牲过度",
      "执着",
      "受困"
    ],
    "uprightMeaning": "暂缓推进，换一个角度会看见新的答案。",
    "reversedMeaning": "你被动等待或不断牺牲，却没有真正改变视角。",
    "loveMeaning": "关系需要放下旧期待，给彼此空间重新理解。",
    "careerMeaning": "暂停无效行动，重新评估真正值得投入的事。",
    "reversedLoveMeaning": "一方长期付出、停滞或把受苦当作爱。",
    "reversedCareerMeaning": "项目卡住是因为方法需要改变，不是努力不够。"
  },
  {
    "id": "death",
    "number": 13,
    "arcana": "major",
    "nameEn": "Death",
    "keywords": {
      "upright": [
        "结束",
        "转化",
        "告别",
        "重生"
      ],
      "reversed": [
        "抗拒结束",
        "停滞",
        "执念",
        "迟迟不放"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一个阶段正在结束，为更真实的生活腾出空间。",
        "love": "关系可能经历深刻转变，旧相处方式需要结束。",
        "career": "清理、断舍离并为新身份留出位置。",
        "advice": "结束不是惩罚，是更新的入口。"
      },
      "reversed": {
        "summary": "拒绝告别使旧模式延长，转化因而变得更痛苦。",
        "love": "拖着已结束的关系、恐惧改变或反复复合。",
        "career": "旧项目或岗位已失去生命力，应重新配置资源。",
        "advice": "结束不是惩罚，是更新的入口。"
      }
    },
    "symbolism": "白玫瑰旗与骑士象征不可避免的转化和新生。",
    "image": "/images/cards/death.svg",
    "numberLabel": "ⅩⅢ",
    "suitName": "大阿尔卡纳",
    "symbol": "❈",
    "reflection": "为了迎接新阶段，你需要告别什么？",
    "name": "死神",
    "summary": "一个阶段正在结束，为更真实的生活腾出空间。",
    "uprightKeywords": [
      "结束",
      "转化",
      "告别",
      "重生"
    ],
    "reversedKeywords": [
      "抗拒结束",
      "停滞",
      "执念",
      "迟迟不放"
    ],
    "uprightMeaning": "一个阶段正在结束，为更真实的生活腾出空间。",
    "reversedMeaning": "拒绝告别使旧模式延长，转化因而变得更痛苦。",
    "loveMeaning": "关系可能经历深刻转变，旧相处方式需要结束。",
    "careerMeaning": "清理、断舍离并为新身份留出位置。",
    "reversedLoveMeaning": "拖着已结束的关系、恐惧改变或反复复合。",
    "reversedCareerMeaning": "旧项目或岗位已失去生命力，应重新配置资源。"
  },
  {
    "id": "temperance",
    "number": 14,
    "arcana": "major",
    "nameEn": "Temperance",
    "keywords": {
      "upright": [
        "平衡",
        "调和",
        "疗愈",
        "节奏"
      ],
      "reversed": [
        "失衡",
        "过度",
        "急躁",
        "极端"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "把不同部分调和起来，稳定而持续的节奏会带来疗愈。",
        "love": "耐心沟通、互相调节，关系会逐渐恢复流动。",
        "career": "组合资源、微调习惯，以小步持续替代猛冲。",
        "advice": "让改变成为可持续的日常。"
      },
      "reversed": {
        "summary": "过度投入或情绪极端，生活的容器已经溢出。",
        "love": "步调失配、冲动和反复拉扯。",
        "career": "协作断裂、时间安排不现实，需重新校准。",
        "advice": "让改变成为可持续的日常。"
      }
    },
    "symbolism": "天使调和两杯水，象征中道、循环和炼金式整合。",
    "image": "/images/cards/temperance.svg",
    "numberLabel": "ⅩⅣ",
    "suitName": "大阿尔卡纳",
    "symbol": "◈",
    "reflection": "你可以怎样让改变成为可持续的日常？",
    "name": "节制",
    "summary": "把不同部分调和起来，稳定而持续的节奏会带来疗愈。",
    "uprightKeywords": [
      "平衡",
      "调和",
      "疗愈",
      "节奏"
    ],
    "reversedKeywords": [
      "失衡",
      "过度",
      "急躁",
      "极端"
    ],
    "uprightMeaning": "把不同部分调和起来，稳定而持续的节奏会带来疗愈。",
    "reversedMeaning": "过度投入或情绪极端，生活的容器已经溢出。",
    "loveMeaning": "耐心沟通、互相调节，关系会逐渐恢复流动。",
    "careerMeaning": "组合资源、微调习惯，以小步持续替代猛冲。",
    "reversedLoveMeaning": "步调失配、冲动和反复拉扯。",
    "reversedCareerMeaning": "协作断裂、时间安排不现实，需重新校准。"
  },
  {
    "id": "the-devil",
    "number": 15,
    "arcana": "major",
    "nameEn": "The Devil",
    "keywords": {
      "upright": [
        "欲望",
        "束缚",
        "依附",
        "物质"
      ],
      "reversed": [
        "解脱",
        "觉察",
        "戒断",
        "重新选择"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "看清让你上瘾或受困的东西，你就拥有重新选择的自由。",
        "love": "强烈吸引和欲望存在，但要警惕占有与不平等。",
        "career": "诚实盘点金钱、习惯和权力关系，拆掉最小的一环。",
        "advice": "欲望可以被理解，也可以被重新安排。"
      },
      "reversed": {
        "summary": "束缚正在松动，你开始看清依赖与恐惧的来源。自由需要诚实觉察与可持续的改变。",
        "love": "开始松开控制与不健康依赖，或反复在离开与回到旧模式之间摇摆。",
        "career": "重新设置工作边界、退出消耗性合作，或开始处理不健康的利益关系。",
        "advice": "欲望可以被理解，也可以被重新安排。"
      }
    },
    "symbolism": "锁链看似可解，提醒人们束缚常由无觉察维持。",
    "image": "/images/cards/the-devil.svg",
    "numberLabel": "ⅩⅤ",
    "suitName": "大阿尔卡纳",
    "symbol": "♑",
    "reflection": "哪些看似无法摆脱的束缚，实际上仍有选择？",
    "name": "恶魔",
    "summary": "看清让你上瘾或受困的东西，你就拥有重新选择的自由。",
    "uprightKeywords": [
      "欲望",
      "束缚",
      "依附",
      "物质"
    ],
    "reversedKeywords": [
      "解脱",
      "觉察",
      "戒断",
      "重新选择"
    ],
    "uprightMeaning": "看清让你上瘾或受困的东西，你就拥有重新选择的自由。",
    "reversedMeaning": "束缚正在松动，你开始看清依赖与恐惧的来源。自由需要诚实觉察与可持续的改变。",
    "loveMeaning": "强烈吸引和欲望存在，但要警惕占有与不平等。",
    "careerMeaning": "诚实盘点金钱、习惯和权力关系，拆掉最小的一环。",
    "reversedLoveMeaning": "开始松开控制与不健康依赖，或反复在离开与回到旧模式之间摇摆。",
    "reversedCareerMeaning": "重新设置工作边界、退出消耗性合作，或开始处理不健康的利益关系。"
  },
  {
    "id": "the-tower",
    "number": 16,
    "arcana": "major",
    "nameEn": "The Tower",
    "keywords": {
      "upright": [
        "突变",
        "真相",
        "瓦解",
        "释放"
      ],
      "reversed": [
        "灾后重建",
        "抗拒",
        "延迟崩塌",
        "恐慌"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "不稳固的结构被打破，真相终于获得空间。",
        "love": "突发冲突会揭露关系真相，诚实是重建起点。",
        "career": "先确保安全，再清理废墟，建立更真实的基础。",
        "advice": "让不真实的墙倒下，重新选择要建什么。"
      },
      "reversed": {
        "summary": "你在回避必要的改变，危机因此反复累积。",
        "love": "争吵、分离或突然发现长期隐瞒。",
        "career": "计划、系统或职位突然变动，保留应急方案。",
        "advice": "让不真实的墙倒下，重新选择要建什么。"
      }
    },
    "symbolism": "闪电击中高塔象征瞬间洞见与虚假结构的崩塌。",
    "image": "/images/cards/the-tower.svg",
    "numberLabel": "ⅩⅥ",
    "suitName": "大阿尔卡纳",
    "symbol": "ϟ",
    "reflection": "哪一座不再真实的结构需要重新建立？",
    "name": "高塔",
    "summary": "不稳固的结构被打破，真相终于获得空间。",
    "uprightKeywords": [
      "突变",
      "真相",
      "瓦解",
      "释放"
    ],
    "reversedKeywords": [
      "灾后重建",
      "抗拒",
      "延迟崩塌",
      "恐慌"
    ],
    "uprightMeaning": "不稳固的结构被打破，真相终于获得空间。",
    "reversedMeaning": "你在回避必要的改变，危机因此反复累积。",
    "loveMeaning": "突发冲突会揭露关系真相，诚实是重建起点。",
    "careerMeaning": "先确保安全，再清理废墟，建立更真实的基础。",
    "reversedLoveMeaning": "争吵、分离或突然发现长期隐瞒。",
    "reversedCareerMeaning": "计划、系统或职位突然变动，保留应急方案。"
  },
  {
    "id": "the-star",
    "number": 17,
    "arcana": "major",
    "nameEn": "The Star",
    "keywords": {
      "upright": [
        "希望",
        "疗愈",
        "灵感",
        "信任"
      ],
      "reversed": [
        "失望",
        "怀疑",
        "耗竭",
        "失去方向"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "经历动荡后，温柔而真实的希望正在回来。",
        "love": "真诚、包容和共同愿景为关系带来疗愈。",
        "career": "公开愿景、持续创作，让微小的恢复累积成力量。",
        "advice": "把希望当成每天可执行的动作。"
      },
      "reversed": {
        "summary": "过度理想化或暂时看不见自己的光，需要休息。",
        "love": "失望感、疏离或对未来缺乏信心。",
        "career": "反馈慢但方向正确，避免因焦虑频繁改弦更张。",
        "advice": "把希望当成每天可执行的动作。"
      }
    },
    "symbolism": "裸身向水中倾注的形象象征真诚、净化与星光指引。",
    "image": "/images/cards/the-star.svg",
    "numberLabel": "ⅩⅦ",
    "suitName": "大阿尔卡纳",
    "symbol": "✶",
    "reflection": "什么小行动能让希望在今天变得具体？",
    "name": "星星",
    "summary": "经历动荡后，温柔而真实的希望正在回来。",
    "uprightKeywords": [
      "希望",
      "疗愈",
      "灵感",
      "信任"
    ],
    "reversedKeywords": [
      "失望",
      "怀疑",
      "耗竭",
      "失去方向"
    ],
    "uprightMeaning": "经历动荡后，温柔而真实的希望正在回来。",
    "reversedMeaning": "过度理想化或暂时看不见自己的光，需要休息。",
    "loveMeaning": "真诚、包容和共同愿景为关系带来疗愈。",
    "careerMeaning": "公开愿景、持续创作，让微小的恢复累积成力量。",
    "reversedLoveMeaning": "失望感、疏离或对未来缺乏信心。",
    "reversedCareerMeaning": "反馈慢但方向正确，避免因焦虑频繁改弦更张。"
  },
  {
    "id": "the-moon",
    "number": 18,
    "arcana": "major",
    "nameEn": "The Moon",
    "keywords": {
      "upright": [
        "梦境",
        "潜意识",
        "迷雾",
        "直觉"
      ],
      "reversed": [
        "真相浮现",
        "恐惧消散",
        "误会澄清",
        "逃避现实"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "信息尚不完整，先辨认恐惧与直觉，不要急着下定论。",
        "love": "暧昧、敏感和潜台词很强，适合温柔地询问。",
        "career": "记录感受、核对信息，给自己安全的睡眠与节律。",
        "advice": "穿过迷雾需要耐心与事实。"
      },
      "reversed": {
        "summary": "误会开始澄清，但仍需核实事实并面对被压抑的情绪。",
        "love": "猜疑、欺瞒或情绪投射制造不安。",
        "career": "谣言、误判或隐性问题影响决策，暂缓承诺。",
        "advice": "穿过迷雾需要耐心与事实。"
      }
    },
    "symbolism": "月光、狼犬与小径象征潜意识、恐惧和未知旅程。",
    "image": "/images/cards/the-moon.svg",
    "numberLabel": "ⅩⅧ",
    "suitName": "大阿尔卡纳",
    "symbol": "☾",
    "reflection": "你可以怎样区分事实、恐惧和直觉？",
    "name": "月亮",
    "summary": "信息尚不完整，先辨认恐惧与直觉，不要急着下定论。",
    "uprightKeywords": [
      "梦境",
      "潜意识",
      "迷雾",
      "直觉"
    ],
    "reversedKeywords": [
      "真相浮现",
      "恐惧消散",
      "误会澄清",
      "逃避现实"
    ],
    "uprightMeaning": "信息尚不完整，先辨认恐惧与直觉，不要急着下定论。",
    "reversedMeaning": "误会开始澄清，但仍需核实事实并面对被压抑的情绪。",
    "loveMeaning": "暧昧、敏感和潜台词很强，适合温柔地询问。",
    "careerMeaning": "记录感受、核对信息，给自己安全的睡眠与节律。",
    "reversedLoveMeaning": "猜疑、欺瞒或情绪投射制造不安。",
    "reversedCareerMeaning": "谣言、误判或隐性问题影响决策，暂缓承诺。"
  },
  {
    "id": "the-sun",
    "number": 19,
    "arcana": "major",
    "nameEn": "The Sun",
    "keywords": {
      "upright": [
        "喜悦",
        "清晰",
        "成功",
        "生命力"
      ],
      "reversed": [
        "延迟",
        "过度自信",
        "倦怠",
        "快乐被遮挡"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "坦率地发光，清晰和活力会让成果被看见。",
        "love": "温暖、坦诚、玩心与共同庆祝让关系更亲密。",
        "career": "展示成果、庆祝进步，让身体参与到快乐中。",
        "advice": "允许自己享受已经获得的光。"
      },
      "reversed": {
        "summary": "你暂时看不见好消息，或把乐观变成了逞强。",
        "love": "冷淡、骄傲或一方需要被看见却没有被回应。",
        "career": "曝光不足、节奏过快或过度承诺需要调整。",
        "advice": "允许自己享受已经获得的光。"
      }
    },
    "symbolism": "向日葵、白马与孩童象征纯真、成长和公开的喜悦。",
    "image": "/images/cards/the-sun.svg",
    "numberLabel": "ⅩⅨ",
    "suitName": "大阿尔卡纳",
    "symbol": "☼",
    "reflection": "你允许自己享受已经获得的快乐吗？",
    "name": "太阳",
    "summary": "坦率地发光，清晰和活力会让成果被看见。",
    "uprightKeywords": [
      "喜悦",
      "清晰",
      "成功",
      "生命力"
    ],
    "reversedKeywords": [
      "延迟",
      "过度自信",
      "倦怠",
      "快乐被遮挡"
    ],
    "uprightMeaning": "坦率地发光，清晰和活力会让成果被看见。",
    "reversedMeaning": "你暂时看不见好消息，或把乐观变成了逞强。",
    "loveMeaning": "温暖、坦诚、玩心与共同庆祝让关系更亲密。",
    "careerMeaning": "展示成果、庆祝进步，让身体参与到快乐中。",
    "reversedLoveMeaning": "冷淡、骄傲或一方需要被看见却没有被回应。",
    "reversedCareerMeaning": "曝光不足、节奏过快或过度承诺需要调整。"
  },
  {
    "id": "judgement",
    "number": 20,
    "arcana": "major",
    "nameEn": "Judgement",
    "keywords": {
      "upright": [
        "觉醒",
        "召唤",
        "复盘",
        "宽恕"
      ],
      "reversed": [
        "自我否定",
        "逃避召唤",
        "苛责",
        "迟疑"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "回望过去并作出清醒回应，你正在进入新的阶段。",
        "love": "关系适合坦诚复盘与重新承诺，旧伤可以被看见。",
        "career": "总结经验，回应内心召唤，正式做出决定。",
        "advice": "用今天的觉察回应昨天的自己。"
      },
      "reversed": {
        "summary": "你不肯原谅自己，或一再逃避真正想做的事。",
        "love": "沉溺旧账、拒绝改变或害怕被评判。",
        "career": "复盘不完整、错失反馈，需要重新提交或沟通。",
        "advice": "用今天的觉察回应昨天的自己。"
      }
    },
    "symbolism": "号角唤醒亡者象征召唤、复苏和对过去的整合。",
    "image": "/images/cards/judgement.svg",
    "numberLabel": "ⅩⅩ",
    "suitName": "大阿尔卡纳",
    "symbol": "✺",
    "reflection": "过去的经验正在邀请你作出什么回应？",
    "name": "审判",
    "summary": "回望过去并作出清醒回应，你正在进入新的阶段。",
    "uprightKeywords": [
      "觉醒",
      "召唤",
      "复盘",
      "宽恕"
    ],
    "reversedKeywords": [
      "自我否定",
      "逃避召唤",
      "苛责",
      "迟疑"
    ],
    "uprightMeaning": "回望过去并作出清醒回应，你正在进入新的阶段。",
    "reversedMeaning": "你不肯原谅自己，或一再逃避真正想做的事。",
    "loveMeaning": "关系适合坦诚复盘与重新承诺，旧伤可以被看见。",
    "careerMeaning": "总结经验，回应内心召唤，正式做出决定。",
    "reversedLoveMeaning": "沉溺旧账、拒绝改变或害怕被评判。",
    "reversedCareerMeaning": "复盘不完整、错失反馈，需要重新提交或沟通。"
  },
  {
    "id": "the-world",
    "number": 21,
    "arcana": "major",
    "nameEn": "The World",
    "keywords": {
      "upright": [
        "完成",
        "整合",
        "圆满",
        "远行"
      ],
      "reversed": [
        "未完",
        "循环",
        "收尾拖延",
        "害怕结束"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一个重要周期接近圆满，庆祝并准备进入新的世界。",
        "love": "共同经历带来成熟与完整，关系适合升级或庆祝。",
        "career": "完成交付、整理成果、让经验流动到更大的舞台。",
        "advice": "圆满来自整合，而不是永远增加。"
      },
      "reversed": {
        "summary": "还有关键收尾没完成，或因为害怕结束而停留在门口。",
        "love": "关系悬而未决、异地阻隔或无法真正告别。",
        "career": "最后一环、手续或边界问题拖住完成。",
        "advice": "圆满来自整合，而不是永远增加。"
      }
    },
    "symbolism": "花环与四方守护象征周期完成、四元素整合和世界舞台。",
    "image": "/images/cards/the-world.svg",
    "numberLabel": "ⅩⅪ",
    "suitName": "大阿尔卡纳",
    "symbol": "◎",
    "reflection": "你还需要完成哪一个收尾，才能开始下一程？",
    "name": "世界",
    "summary": "一个重要周期接近圆满，庆祝并准备进入新的世界。",
    "uprightKeywords": [
      "完成",
      "整合",
      "圆满",
      "远行"
    ],
    "reversedKeywords": [
      "未完",
      "循环",
      "收尾拖延",
      "害怕结束"
    ],
    "uprightMeaning": "一个重要周期接近圆满，庆祝并准备进入新的世界。",
    "reversedMeaning": "还有关键收尾没完成，或因为害怕结束而停留在门口。",
    "loveMeaning": "共同经历带来成熟与完整，关系适合升级或庆祝。",
    "careerMeaning": "完成交付、整理成果、让经验流动到更大的舞台。",
    "reversedLoveMeaning": "关系悬而未决、异地阻隔或无法真正告别。",
    "reversedCareerMeaning": "最后一环、手续或边界问题拖住完成。"
  },
  {
    "id": "wands-1",
    "number": 1,
    "arcana": "minor",
    "suit": "wands",
    "rank": "ace",
    "nameEn": "Ace of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "灵感",
        "生命力",
        "开创",
        "热情"
      ],
      "reversed": [
        "熄火",
        "拖延",
        "缺乏动力",
        "时机未到"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "新的创意与生命力已经出现。热情值得被认真对待，用一个具体行动让火花落地。",
        "love": "新鲜吸引、主动表达与重新点燃激情。",
        "career": "启动项目、尝试创业与发表新创意。",
        "advice": "在热情仍鲜活时，完成一个最小可行的尝试。"
      },
      "reversed": {
        "summary": "热情暂时受阻；可能是资源不足，也可能是你在追逐并不属于自己的目标。",
        "love": "心动难以持续、步调不一或只有热度没有投入。",
        "career": "项目开头不顺、目标不清或行动缺少资源。",
        "advice": "在热情仍鲜活时，完成一个最小可行的尝试。"
      }
    },
    "symbolism": "云中伸出的手握着发芽的权杖，象征尚未成形却充满生命力的机会。",
    "image": "/images/cards/wands-1.svg",
    "reflection": "哪件事让你一想到就想立刻行动？",
    "suitName": "权杖",
    "numberLabel": "A",
    "symbol": "♧",
    "name": "权杖王牌",
    "summary": "新的创意与生命力已经出现。热情值得被认真对待，用一个具体行动让火花落地。",
    "uprightKeywords": [
      "灵感",
      "生命力",
      "开创",
      "热情"
    ],
    "reversedKeywords": [
      "熄火",
      "拖延",
      "缺乏动力",
      "时机未到"
    ],
    "uprightMeaning": "新的创意与生命力已经出现。热情值得被认真对待，用一个具体行动让火花落地。",
    "reversedMeaning": "热情暂时受阻；可能是资源不足，也可能是你在追逐并不属于自己的目标。",
    "loveMeaning": "新鲜吸引、主动表达与重新点燃激情。",
    "careerMeaning": "启动项目、尝试创业与发表新创意。",
    "reversedLoveMeaning": "心动难以持续、步调不一或只有热度没有投入。",
    "reversedCareerMeaning": "项目开头不顺、目标不清或行动缺少资源。"
  },
  {
    "id": "wands-2",
    "number": 2,
    "arcana": "minor",
    "suit": "wands",
    "rank": "two",
    "nameEn": "Two of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "规划",
        "视野",
        "选择",
        "未来"
      ],
      "reversed": [
        "害怕未知",
        "计划不足",
        "狭隘",
        "犹豫"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你已经拥有一定基础，正在选择下一步要去哪里。把远景和现实条件同时放在桌上。",
        "love": "讨论共同未来、异地安排或关系下一阶段。",
        "career": "规划扩张、研究市场或考虑出行与合作。",
        "advice": "把远景写成两个可比较的方案，再做一次小规模验证。"
      },
      "reversed": {
        "summary": "迟迟不愿走出熟悉范围，或计划过多而没有验证。",
        "love": "未来目标不同，承诺停留在想象。",
        "career": "错失窗口期，计划需要重新核实。",
        "advice": "把远景写成两个可比较的方案，再做一次小规模验证。"
      }
    },
    "symbolism": "人物手持地球站在城墙上，象征已有基础与向外探索的视野。",
    "image": "/images/cards/wands-2.svg",
    "reflection": "你是在准备出发，还是用准备延迟出发？",
    "suitName": "权杖",
    "numberLabel": "2",
    "symbol": "♧",
    "name": "权杖二",
    "summary": "你已经拥有一定基础，正在选择下一步要去哪里。把远景和现实条件同时放在桌上。",
    "uprightKeywords": [
      "规划",
      "视野",
      "选择",
      "未来"
    ],
    "reversedKeywords": [
      "害怕未知",
      "计划不足",
      "狭隘",
      "犹豫"
    ],
    "uprightMeaning": "你已经拥有一定基础，正在选择下一步要去哪里。把远景和现实条件同时放在桌上。",
    "reversedMeaning": "迟迟不愿走出熟悉范围，或计划过多而没有验证。",
    "loveMeaning": "讨论共同未来、异地安排或关系下一阶段。",
    "careerMeaning": "规划扩张、研究市场或考虑出行与合作。",
    "reversedLoveMeaning": "未来目标不同，承诺停留在想象。",
    "reversedCareerMeaning": "错失窗口期，计划需要重新核实。"
  },
  {
    "id": "wands-3",
    "number": 3,
    "arcana": "minor",
    "suit": "wands",
    "rank": "three",
    "nameEn": "Three of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "远景",
        "扩展",
        "等待回报",
        "合作"
      ],
      "reversed": [
        "延误",
        "失望",
        "视野受限",
        "准备不周"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "第一步已经走出去，接下来是等待回应与扩大视野。用长期眼光观察正在到来的结果。",
        "love": "关系开始面向更长远的共同生活，也可能涉及距离。",
        "career": "业务拓展、跨区域合作与早期投资开始得到回应。",
        "advice": "保持联络并检查进度，让等待变成有准备的观察。"
      },
      "reversed": {
        "summary": "回报比预想慢，或外部合作与物流出现阻碍。",
        "love": "异地沟通受阻，对未来缺少一致安排。",
        "career": "计划延期、合作失衡或高估扩张速度。",
        "advice": "保持联络并检查进度，让等待变成有准备的观察。"
      }
    },
    "symbolism": "人物望向海面船只，象征已投入的努力走向更大的世界。",
    "image": "/images/cards/wands-3.svg",
    "reflection": "哪些结果需要耐心，哪些进度需要你主动跟进？",
    "suitName": "权杖",
    "numberLabel": "3",
    "symbol": "♧",
    "name": "权杖三",
    "summary": "第一步已经走出去，接下来是等待回应与扩大视野。用长期眼光观察正在到来的结果。",
    "uprightKeywords": [
      "远景",
      "扩展",
      "等待回报",
      "合作"
    ],
    "reversedKeywords": [
      "延误",
      "失望",
      "视野受限",
      "准备不周"
    ],
    "uprightMeaning": "第一步已经走出去，接下来是等待回应与扩大视野。用长期眼光观察正在到来的结果。",
    "reversedMeaning": "回报比预想慢，或外部合作与物流出现阻碍。",
    "loveMeaning": "关系开始面向更长远的共同生活，也可能涉及距离。",
    "careerMeaning": "业务拓展、跨区域合作与早期投资开始得到回应。",
    "reversedLoveMeaning": "异地沟通受阻，对未来缺少一致安排。",
    "reversedCareerMeaning": "计划延期、合作失衡或高估扩张速度。"
  },
  {
    "id": "wands-4",
    "number": 4,
    "arcana": "minor",
    "suit": "wands",
    "rank": "four",
    "nameEn": "Four of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "归属",
        "庆祝",
        "安定",
        "里程碑"
      ],
      "reversed": [
        "不安",
        "家庭摩擦",
        "庆祝延迟",
        "基础不稳"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一个值得庆祝的阶段来到。安全感来自共同建立的家、群体与稳定基础。",
        "love": "关系适合庆祝、同居、见家人或建立共同空间。",
        "career": "团队达到里程碑，适合庆功与巩固制度。",
        "advice": "认真庆祝已完成的事，再为下一阶段整理基础。"
      },
      "reversed": {
        "summary": "表面的安稳下仍有未处理的摩擦，或你暂时难以找到归属。",
        "love": "家庭意见、生活安排或关系定位产生分歧。",
        "career": "交付或庆祝延期，团队基础需要修补。",
        "advice": "认真庆祝已完成的事，再为下一阶段整理基础。"
      }
    },
    "symbolism": "四根权杖支撑花环，城堡与庆祝人群象征欢迎、安全与共同成果。",
    "image": "/images/cards/wands-4.svg",
    "reflection": "什么样的环境让你感到可以安心做自己？",
    "suitName": "权杖",
    "numberLabel": "4",
    "symbol": "♧",
    "name": "权杖四",
    "summary": "一个值得庆祝的阶段来到。安全感来自共同建立的家、群体与稳定基础。",
    "uprightKeywords": [
      "归属",
      "庆祝",
      "安定",
      "里程碑"
    ],
    "reversedKeywords": [
      "不安",
      "家庭摩擦",
      "庆祝延迟",
      "基础不稳"
    ],
    "uprightMeaning": "一个值得庆祝的阶段来到。安全感来自共同建立的家、群体与稳定基础。",
    "reversedMeaning": "表面的安稳下仍有未处理的摩擦，或你暂时难以找到归属。",
    "loveMeaning": "关系适合庆祝、同居、见家人或建立共同空间。",
    "careerMeaning": "团队达到里程碑，适合庆功与巩固制度。",
    "reversedLoveMeaning": "家庭意见、生活安排或关系定位产生分歧。",
    "reversedCareerMeaning": "交付或庆祝延期，团队基础需要修补。"
  },
  {
    "id": "wands-5",
    "number": 5,
    "arcana": "minor",
    "suit": "wands",
    "rank": "five",
    "nameEn": "Five of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "竞争",
        "磨合",
        "不同意见",
        "挑战"
      ],
      "reversed": [
        "内耗",
        "回避冲突",
        "恶性竞争",
        "争执升级"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "不同立场正发生碰撞。分歧不必成为敌意，它也能让想法经受检验。",
        "love": "意见不合、争取关注，需要学会公平争论。",
        "career": "团队磨合、市场竞争与头脑风暴都在加速学习。",
        "advice": "先说清你们在争什么，再约定讨论的边界。"
      },
      "reversed": {
        "summary": "竞争失去规则，或你为了维持表面和平而压下真正的问题。",
        "love": "争执重复升级，或有话不说形成暗战。",
        "career": "责任不清、抢功或无效会议消耗资源。",
        "advice": "先说清你们在争什么，再约定讨论的边界。"
      }
    },
    "symbolism": "五个人各举权杖而方向不一，象征竞争与尚未协调的力量。",
    "image": "/images/cards/wands-5.svg",
    "reflection": "争论背后，你真正想被理解的需求是什么？",
    "suitName": "权杖",
    "numberLabel": "5",
    "symbol": "♧",
    "name": "权杖五",
    "summary": "不同立场正发生碰撞。分歧不必成为敌意，它也能让想法经受检验。",
    "uprightKeywords": [
      "竞争",
      "磨合",
      "不同意见",
      "挑战"
    ],
    "reversedKeywords": [
      "内耗",
      "回避冲突",
      "恶性竞争",
      "争执升级"
    ],
    "uprightMeaning": "不同立场正发生碰撞。分歧不必成为敌意，它也能让想法经受检验。",
    "reversedMeaning": "竞争失去规则，或你为了维持表面和平而压下真正的问题。",
    "loveMeaning": "意见不合、争取关注，需要学会公平争论。",
    "careerMeaning": "团队磨合、市场竞争与头脑风暴都在加速学习。",
    "reversedLoveMeaning": "争执重复升级，或有话不说形成暗战。",
    "reversedCareerMeaning": "责任不清、抢功或无效会议消耗资源。"
  },
  {
    "id": "wands-6",
    "number": 6,
    "arcana": "minor",
    "suit": "wands",
    "rank": "six",
    "nameEn": "Six of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "认可",
        "胜利",
        "信心",
        "领导"
      ],
      "reversed": [
        "骄傲",
        "失去支持",
        "成果延迟",
        "外部认可依赖"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "努力获得看见，适合接住认可并继续承担责任。你的成功也离不开同行者。",
        "love": "公开表达承诺、欣赏伴侣与共同庆祝。",
        "career": "项目成功、晋升、获奖或带领团队达成目标。",
        "advice": "接住赞赏，并明确下一步如何分享成果。"
      },
      "reversed": {
        "summary": "认可没有按预期到来，或你把价值过度寄托于掌声。",
        "love": "面子、优越感或被忽视的感受影响亲密。",
        "career": "声誉压力、成果被低估或领导失去支持。",
        "advice": "接住赞赏，并明确下一步如何分享成果。"
      }
    },
    "symbolism": "骑士戴着桂冠在人群中前行，象征公开认可与领导责任。",
    "image": "/images/cards/wands-6.svg",
    "reflection": "除去他人的评价，你会如何衡量自己的进步？",
    "suitName": "权杖",
    "numberLabel": "6",
    "symbol": "♧",
    "name": "权杖六",
    "summary": "努力获得看见，适合接住认可并继续承担责任。你的成功也离不开同行者。",
    "uprightKeywords": [
      "认可",
      "胜利",
      "信心",
      "领导"
    ],
    "reversedKeywords": [
      "骄傲",
      "失去支持",
      "成果延迟",
      "外部认可依赖"
    ],
    "uprightMeaning": "努力获得看见，适合接住认可并继续承担责任。你的成功也离不开同行者。",
    "reversedMeaning": "认可没有按预期到来，或你把价值过度寄托于掌声。",
    "loveMeaning": "公开表达承诺、欣赏伴侣与共同庆祝。",
    "careerMeaning": "项目成功、晋升、获奖或带领团队达成目标。",
    "reversedLoveMeaning": "面子、优越感或被忽视的感受影响亲密。",
    "reversedCareerMeaning": "声誉压力、成果被低估或领导失去支持。"
  },
  {
    "id": "wands-7",
    "number": 7,
    "arcana": "minor",
    "suit": "wands",
    "rank": "seven",
    "nameEn": "Seven of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "坚持",
        "立场",
        "防守",
        "勇敢"
      ],
      "reversed": [
        "压倒",
        "疲惫",
        "退让",
        "过度防御"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你需要守住一个重要立场。优势在于清楚自己为何坚持，而不是回应所有质疑。",
        "love": "维护关系边界，面对外界意见仍能共同站稳。",
        "career": "竞争中守住优势，明确产品、观点与工作边界。",
        "advice": "挑选最重要的边界，用清楚而简短的语言表达。"
      },
      "reversed": {
        "summary": "外界压力使你疲惫，也可能是你把普通反馈都视作威胁。",
        "love": "不断防御、争胜或因为压力而退缩。",
        "career": "长期对抗让人耗竭，需重新选择真正值得守护的战线。",
        "advice": "挑选最重要的边界，用清楚而简短的语言表达。"
      }
    },
    "symbolism": "高地上的人物抵挡六根权杖，象征优势位置和维护立场的考验。",
    "image": "/images/cards/wands-7.svg",
    "reflection": "哪条边界值得坚持，哪场争论可以放下？",
    "suitName": "权杖",
    "numberLabel": "7",
    "symbol": "♧",
    "name": "权杖七",
    "summary": "你需要守住一个重要立场。优势在于清楚自己为何坚持，而不是回应所有质疑。",
    "uprightKeywords": [
      "坚持",
      "立场",
      "防守",
      "勇敢"
    ],
    "reversedKeywords": [
      "压倒",
      "疲惫",
      "退让",
      "过度防御"
    ],
    "uprightMeaning": "你需要守住一个重要立场。优势在于清楚自己为何坚持，而不是回应所有质疑。",
    "reversedMeaning": "外界压力使你疲惫，也可能是你把普通反馈都视作威胁。",
    "loveMeaning": "维护关系边界，面对外界意见仍能共同站稳。",
    "careerMeaning": "竞争中守住优势，明确产品、观点与工作边界。",
    "reversedLoveMeaning": "不断防御、争胜或因为压力而退缩。",
    "reversedCareerMeaning": "长期对抗让人耗竭，需重新选择真正值得守护的战线。"
  },
  {
    "id": "wands-8",
    "number": 8,
    "arcana": "minor",
    "suit": "wands",
    "rank": "eight",
    "nameEn": "Eight of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "快速进展",
        "消息",
        "流动",
        "时机"
      ],
      "reversed": [
        "延迟",
        "仓促",
        "沟通混乱",
        "失去节奏"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "消息与行动突然加速。保持清晰回应，你可能很快看到事情向前推进。",
        "love": "快速升温、主动联系、旅行或重要消息到来。",
        "career": "项目进入冲刺、快速协作与高频反馈阶段。",
        "advice": "优先处理时效性强的事，给每次回复一个明确结论。"
      },
      "reversed": {
        "summary": "沟通延迟或速度超过了承受能力，快并不代表有效。",
        "love": "讯息误会、忽冷忽热或进展过快。",
        "career": "进度堵塞、回复拖延或过多任务挤在一起。",
        "advice": "优先处理时效性强的事，给每次回复一个明确结论。"
      }
    },
    "symbolism": "八根权杖飞越天空，象征无需再犹豫的流动与快速抵达。",
    "image": "/images/cards/wands-8.svg",
    "reflection": "速度加快时，你最需要守住哪一个重点？",
    "suitName": "权杖",
    "numberLabel": "8",
    "symbol": "♧",
    "name": "权杖八",
    "summary": "消息与行动突然加速。保持清晰回应，你可能很快看到事情向前推进。",
    "uprightKeywords": [
      "快速进展",
      "消息",
      "流动",
      "时机"
    ],
    "reversedKeywords": [
      "延迟",
      "仓促",
      "沟通混乱",
      "失去节奏"
    ],
    "uprightMeaning": "消息与行动突然加速。保持清晰回应，你可能很快看到事情向前推进。",
    "reversedMeaning": "沟通延迟或速度超过了承受能力，快并不代表有效。",
    "loveMeaning": "快速升温、主动联系、旅行或重要消息到来。",
    "careerMeaning": "项目进入冲刺、快速协作与高频反馈阶段。",
    "reversedLoveMeaning": "讯息误会、忽冷忽热或进展过快。",
    "reversedCareerMeaning": "进度堵塞、回复拖延或过多任务挤在一起。"
  },
  {
    "id": "wands-9",
    "number": 9,
    "arcana": "minor",
    "suit": "wands",
    "rank": "nine",
    "nameEn": "Nine of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "韧性",
        "戒备",
        "最后考验",
        "界限"
      ],
      "reversed": [
        "耗竭",
        "多疑",
        "放弃",
        "旧伤反复"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你已经走了很远，疲惫之中仍有继续的韧性。保护自己，但不必把所有人拒于门外。",
        "love": "关系需要修复信任，尊重彼此敏感的边界。",
        "career": "接近终点，经验与预备方案能帮你完成最后一程。",
        "advice": "确认剩余任务与可用支援，给自己一个实际的休息计划。"
      },
      "reversed": {
        "summary": "过去的受伤正在放大警戒，也可能是长期硬撑让你失去判断。",
        "love": "反复测试、猜疑或封闭让亲密更难建立。",
        "career": "过劳、防御性管理或不愿寻求支援。",
        "advice": "确认剩余任务与可用支援，给自己一个实际的休息计划。"
      }
    },
    "symbolism": "负伤人物守着权杖围栏，象征历经考验的韧性与警觉。",
    "image": "/images/cards/wands-9.svg",
    "reflection": "你现在需要继续坚持，还是先让伤口被照顾？",
    "suitName": "权杖",
    "numberLabel": "9",
    "symbol": "♧",
    "name": "权杖九",
    "summary": "你已经走了很远，疲惫之中仍有继续的韧性。保护自己，但不必把所有人拒于门外。",
    "uprightKeywords": [
      "韧性",
      "戒备",
      "最后考验",
      "界限"
    ],
    "reversedKeywords": [
      "耗竭",
      "多疑",
      "放弃",
      "旧伤反复"
    ],
    "uprightMeaning": "你已经走了很远，疲惫之中仍有继续的韧性。保护自己，但不必把所有人拒于门外。",
    "reversedMeaning": "过去的受伤正在放大警戒，也可能是长期硬撑让你失去判断。",
    "loveMeaning": "关系需要修复信任，尊重彼此敏感的边界。",
    "careerMeaning": "接近终点，经验与预备方案能帮你完成最后一程。",
    "reversedLoveMeaning": "反复测试、猜疑或封闭让亲密更难建立。",
    "reversedCareerMeaning": "过劳、防御性管理或不愿寻求支援。"
  },
  {
    "id": "wands-10",
    "number": 10,
    "arcana": "minor",
    "suit": "wands",
    "rank": "ten",
    "nameEn": "Ten of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "重担",
        "责任",
        "过劳",
        "收尾"
      ],
      "reversed": [
        "卸下负担",
        "失衡",
        "逃责",
        "极限"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "责任已经过重，即使接近完成也不必独自扛下全部。成果需要合理的分担。",
        "love": "照顾、家务与承诺变成压力，需要重新分工。",
        "career": "项目临近交付但资源不足，适合委派与精简范围。",
        "advice": "列出可以拒绝、委派和延后的三件事。"
      },
      "reversed": {
        "summary": "你正在卸下重担，或已经因为长期过载而无法再维持旧方式。",
        "love": "压力导致疏离，或一方逃避共同责任。",
        "career": "崩溃、延期或不合理工作量需要被正式处理。",
        "advice": "列出可以拒绝、委派和延后的三件事。"
      }
    },
    "symbolism": "人物抱着十根权杖艰难前行，象征成功伴随的重担与视线受阻。",
    "image": "/images/cards/wands-10.svg",
    "reflection": "你承担的责任中，哪些其实不属于你？",
    "suitName": "权杖",
    "numberLabel": "10",
    "symbol": "♧",
    "name": "权杖十",
    "summary": "责任已经过重，即使接近完成也不必独自扛下全部。成果需要合理的分担。",
    "uprightKeywords": [
      "重担",
      "责任",
      "过劳",
      "收尾"
    ],
    "reversedKeywords": [
      "卸下负担",
      "失衡",
      "逃责",
      "极限"
    ],
    "uprightMeaning": "责任已经过重，即使接近完成也不必独自扛下全部。成果需要合理的分担。",
    "reversedMeaning": "你正在卸下重担，或已经因为长期过载而无法再维持旧方式。",
    "loveMeaning": "照顾、家务与承诺变成压力，需要重新分工。",
    "careerMeaning": "项目临近交付但资源不足，适合委派与精简范围。",
    "reversedLoveMeaning": "压力导致疏离，或一方逃避共同责任。",
    "reversedCareerMeaning": "崩溃、延期或不合理工作量需要被正式处理。"
  },
  {
    "id": "wands-11",
    "number": 11,
    "arcana": "minor",
    "suit": "wands",
    "rank": "page",
    "nameEn": "Page of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "探索",
        "创意消息",
        "勇气",
        "学习"
      ],
      "reversed": [
        "缺乏经验",
        "三分钟热度",
        "坏消息",
        "空想"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一份新鲜兴趣或消息唤起探索欲。允许自己从学生的位置开始，热情会在实践中成长。",
        "love": "轻松试探、主动讯息与充满好奇的吸引。",
        "career": "新项目消息、学习机会与创作实验出现。",
        "advice": "用一个短期练习检验兴趣，而不是立即押上全部。"
      },
      "reversed": {
        "summary": "创意很多但难以持续，或因经验不足而轻易承诺。",
        "love": "言而无信、心意不定或只停留在聊天。",
        "career": "计划草率、技能不足或消息尚未证实。",
        "advice": "用一个短期练习检验兴趣，而不是立即押上全部。"
      }
    },
    "symbolism": "侍者在荒地观看发芽权杖，象征尚待培养的火元素潜能。",
    "image": "/images/cards/wands-11.svg",
    "reflection": "什么新兴趣值得你给它两周认真的练习？",
    "suitName": "权杖",
    "numberLabel": "P",
    "symbol": "♧",
    "name": "权杖侍者",
    "summary": "一份新鲜兴趣或消息唤起探索欲。允许自己从学生的位置开始，热情会在实践中成长。",
    "uprightKeywords": [
      "探索",
      "创意消息",
      "勇气",
      "学习"
    ],
    "reversedKeywords": [
      "缺乏经验",
      "三分钟热度",
      "坏消息",
      "空想"
    ],
    "uprightMeaning": "一份新鲜兴趣或消息唤起探索欲。允许自己从学生的位置开始，热情会在实践中成长。",
    "reversedMeaning": "创意很多但难以持续，或因经验不足而轻易承诺。",
    "loveMeaning": "轻松试探、主动讯息与充满好奇的吸引。",
    "careerMeaning": "新项目消息、学习机会与创作实验出现。",
    "reversedLoveMeaning": "言而无信、心意不定或只停留在聊天。",
    "reversedCareerMeaning": "计划草率、技能不足或消息尚未证实。"
  },
  {
    "id": "wands-12",
    "number": 12,
    "arcana": "minor",
    "suit": "wands",
    "rank": "knight",
    "nameEn": "Knight of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "冒险",
        "热情",
        "快速行动",
        "魅力"
      ],
      "reversed": [
        "鲁莽",
        "反复",
        "急躁",
        "方向缺失"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "强烈热情推动你出发。大胆行动会打开局面，但持续力与方向同样重要。",
        "love": "热烈追求、浪漫冒险与强烈吸引。",
        "career": "快速推进、出差与开拓新领域。",
        "advice": "出发前确认目标、预算与停止条件。"
      },
      "reversed": {
        "summary": "行动太急、耐心不足，或不断追逐新刺激而难以收尾。",
        "love": "承诺过快、忽冷忽热或逃避稳定。",
        "career": "仓促决策、频繁跳转或与人冲突。",
        "advice": "出发前确认目标、预算与停止条件。"
      }
    },
    "symbolism": "跃动的马与沙漠骑士象征迅速燃烧、勇敢探索的火。",
    "image": "/images/cards/wands-12.svg",
    "reflection": "你正在奔向真正想要的东西，还是只是想离开原地？",
    "suitName": "权杖",
    "numberLabel": "N",
    "symbol": "♧",
    "name": "权杖骑士",
    "summary": "强烈热情推动你出发。大胆行动会打开局面，但持续力与方向同样重要。",
    "uprightKeywords": [
      "冒险",
      "热情",
      "快速行动",
      "魅力"
    ],
    "reversedKeywords": [
      "鲁莽",
      "反复",
      "急躁",
      "方向缺失"
    ],
    "uprightMeaning": "强烈热情推动你出发。大胆行动会打开局面，但持续力与方向同样重要。",
    "reversedMeaning": "行动太急、耐心不足，或不断追逐新刺激而难以收尾。",
    "loveMeaning": "热烈追求、浪漫冒险与强烈吸引。",
    "careerMeaning": "快速推进、出差与开拓新领域。",
    "reversedLoveMeaning": "承诺过快、忽冷忽热或逃避稳定。",
    "reversedCareerMeaning": "仓促决策、频繁跳转或与人冲突。"
  },
  {
    "id": "wands-13",
    "number": 13,
    "arcana": "minor",
    "suit": "wands",
    "rank": "queen",
    "nameEn": "Queen of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "自信",
        "温暖",
        "魅力",
        "独立"
      ],
      "reversed": [
        "嫉妒",
        "焦虑",
        "控制",
        "信心受挫"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "温暖与自信可以同时存在。你有能力吸引支持，也能以自己的热情鼓励他人。",
        "love": "独立、有吸引力且乐于表达爱。",
        "career": "创作、组织、人际协作与公开表达顺势成长。",
        "advice": "用自然的方式表达需要，保留自己的生活与兴趣。"
      },
      "reversed": {
        "summary": "你可能因比较而失去信心，或试图通过控制确保自己被重视。",
        "love": "嫉妒、竞争或担心失去关注。",
        "career": "情绪影响领导，或过度迎合损耗能量。",
        "advice": "用自然的方式表达需要，保留自己的生活与兴趣。"
      }
    },
    "symbolism": "向日葵、黑猫和狮纹王座象征温暖、直觉与自信。",
    "image": "/images/cards/wands-13.svg",
    "reflection": "当你不必讨好任何人时，你会怎样表达自己？",
    "suitName": "权杖",
    "numberLabel": "Q",
    "symbol": "♧",
    "name": "权杖王后",
    "summary": "温暖与自信可以同时存在。你有能力吸引支持，也能以自己的热情鼓励他人。",
    "uprightKeywords": [
      "自信",
      "温暖",
      "魅力",
      "独立"
    ],
    "reversedKeywords": [
      "嫉妒",
      "焦虑",
      "控制",
      "信心受挫"
    ],
    "uprightMeaning": "温暖与自信可以同时存在。你有能力吸引支持，也能以自己的热情鼓励他人。",
    "reversedMeaning": "你可能因比较而失去信心，或试图通过控制确保自己被重视。",
    "loveMeaning": "独立、有吸引力且乐于表达爱。",
    "careerMeaning": "创作、组织、人际协作与公开表达顺势成长。",
    "reversedLoveMeaning": "嫉妒、竞争或担心失去关注。",
    "reversedCareerMeaning": "情绪影响领导，或过度迎合损耗能量。"
  },
  {
    "id": "wands-14",
    "number": 14,
    "arcana": "minor",
    "suit": "wands",
    "rank": "king",
    "nameEn": "King of Wands",
    "element": "火",
    "keywords": {
      "upright": [
        "愿景",
        "领导",
        "创业",
        "担当"
      ],
      "reversed": [
        "专断",
        "急功近利",
        "霸道",
        "失去耐心"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "用清晰愿景凝聚行动，同时给他人发挥的空间。成熟的热情会带来长期影响。",
        "love": "主动承担、热情守护并规划共同未来。",
        "career": "适合战略决策、创业与带领团队开拓。",
        "advice": "说清方向，听取反馈，再用责任支撑承诺。"
      },
      "reversed": {
        "summary": "野心压过现实或同理心，领导可能变成命令与急躁。",
        "love": "支配、忽略感受或只有目标没有陪伴。",
        "career": "决策过快、权力集中或对团队要求过高。",
        "advice": "说清方向，听取反馈，再用责任支撑承诺。"
      }
    },
    "symbolism": "蜥蜴与狮子的王座象征掌握火元素、能够创造并领导的力量。",
    "image": "/images/cards/wands-14.svg",
    "reflection": "你的愿景如何让身边的人也获得成长？",
    "suitName": "权杖",
    "numberLabel": "K",
    "symbol": "♧",
    "name": "权杖国王",
    "summary": "用清晰愿景凝聚行动，同时给他人发挥的空间。成熟的热情会带来长期影响。",
    "uprightKeywords": [
      "愿景",
      "领导",
      "创业",
      "担当"
    ],
    "reversedKeywords": [
      "专断",
      "急功近利",
      "霸道",
      "失去耐心"
    ],
    "uprightMeaning": "用清晰愿景凝聚行动，同时给他人发挥的空间。成熟的热情会带来长期影响。",
    "reversedMeaning": "野心压过现实或同理心，领导可能变成命令与急躁。",
    "loveMeaning": "主动承担、热情守护并规划共同未来。",
    "careerMeaning": "适合战略决策、创业与带领团队开拓。",
    "reversedLoveMeaning": "支配、忽略感受或只有目标没有陪伴。",
    "reversedCareerMeaning": "决策过快、权力集中或对团队要求过高。"
  },
  {
    "id": "cups-1",
    "number": 1,
    "arcana": "minor",
    "suit": "cups",
    "rank": "ace",
    "nameEn": "Ace of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "情感新生",
        "接纳",
        "直觉",
        "爱"
      ],
      "reversed": [
        "情绪封闭",
        "失望",
        "压抑",
        "付出过度"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "心的容器正在打开。新的感受、创作或关系需要被温柔接住。",
        "love": "真诚心动、新关系与情感表达。",
        "career": "富有感受力的创作、照顾与合作开启。",
        "advice": "给真实感受一个安全出口，不急着判断它。"
      },
      "reversed": {
        "summary": "情感被压住，或不断付出却没有留出接收和恢复的空间。",
        "love": "难以敞开心、失落或没有得到回应。",
        "career": "情绪消耗、创作阻塞或不被理解。",
        "advice": "给真实感受一个安全出口，不急着判断它。"
      }
    },
    "symbolism": "手托溢水圣杯与鸽子象征情感、直觉和爱的源头。",
    "image": "/images/cards/cups-1.svg",
    "reflection": "最近有什么感受值得被你认真接住？",
    "suitName": "圣杯",
    "numberLabel": "A",
    "symbol": "♡",
    "name": "圣杯王牌",
    "summary": "心的容器正在打开。新的感受、创作或关系需要被温柔接住。",
    "uprightKeywords": [
      "情感新生",
      "接纳",
      "直觉",
      "爱"
    ],
    "reversedKeywords": [
      "情绪封闭",
      "失望",
      "压抑",
      "付出过度"
    ],
    "uprightMeaning": "心的容器正在打开。新的感受、创作或关系需要被温柔接住。",
    "reversedMeaning": "情感被压住，或不断付出却没有留出接收和恢复的空间。",
    "loveMeaning": "真诚心动、新关系与情感表达。",
    "careerMeaning": "富有感受力的创作、照顾与合作开启。",
    "reversedLoveMeaning": "难以敞开心、失落或没有得到回应。",
    "reversedCareerMeaning": "情绪消耗、创作阻塞或不被理解。"
  },
  {
    "id": "cups-2",
    "number": 2,
    "arcana": "minor",
    "suit": "cups",
    "rank": "two",
    "nameEn": "Two of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "互相回应",
        "联结",
        "伙伴",
        "和谐"
      ],
      "reversed": [
        "失衡",
        "疏离",
        "误会",
        "价值不合"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "平等而真诚的交流正在建立联结。关系的力量来自双方都能被看见。",
        "love": "互有好感、和解、承诺与互相尊重。",
        "career": "一对一合作、谈判与伙伴关系有良好基础。",
        "advice": "说出期待，也邀请对方说出自己的需要。"
      },
      "reversed": {
        "summary": "回应不对等、沟通断裂或共同价值需要重新确认。",
        "love": "付出失衡、分离或未说清的误会。",
        "career": "合作原则不一致或信任受损。",
        "advice": "说出期待，也邀请对方说出自己的需要。"
      }
    },
    "symbolism": "两人举杯相对，赫尔墨斯杖象征互相回应与合作。",
    "image": "/images/cards/cups-2.svg",
    "reflection": "你们之间有哪些需要已经得到明确回应？",
    "suitName": "圣杯",
    "numberLabel": "2",
    "symbol": "♡",
    "name": "圣杯二",
    "summary": "平等而真诚的交流正在建立联结。关系的力量来自双方都能被看见。",
    "uprightKeywords": [
      "互相回应",
      "联结",
      "伙伴",
      "和谐"
    ],
    "reversedKeywords": [
      "失衡",
      "疏离",
      "误会",
      "价值不合"
    ],
    "uprightMeaning": "平等而真诚的交流正在建立联结。关系的力量来自双方都能被看见。",
    "reversedMeaning": "回应不对等、沟通断裂或共同价值需要重新确认。",
    "loveMeaning": "互有好感、和解、承诺与互相尊重。",
    "careerMeaning": "一对一合作、谈判与伙伴关系有良好基础。",
    "reversedLoveMeaning": "付出失衡、分离或未说清的误会。",
    "reversedCareerMeaning": "合作原则不一致或信任受损。"
  },
  {
    "id": "cups-3",
    "number": 3,
    "arcana": "minor",
    "suit": "cups",
    "rank": "three",
    "nameEn": "Three of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "友谊",
        "庆祝",
        "社群",
        "共享"
      ],
      "reversed": [
        "过度享乐",
        "圈层压力",
        "疏远",
        "第三方干扰"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "支持来自朋友与群体，共享喜悦会让情感得到滋养。允许自己加入庆祝。",
        "love": "共同社交、朋友支持与愉快约会。",
        "career": "团队协作、社区支持与阶段成果值得庆祝。",
        "advice": "联系让你安心的人，也照顾自己的社交容量。"
      },
      "reversed": {
        "summary": "社交过量或群体关系失衡，也要注意旁人的意见是否影响你的选择。",
        "love": "第三方干扰、边界模糊或流言影响关系。",
        "career": "小圈子、八卦或协作中不平等的情绪劳动。",
        "advice": "联系让你安心的人，也照顾自己的社交容量。"
      }
    },
    "symbolism": "三位女子举杯起舞，象征友谊、丰收与共同庆祝。",
    "image": "/images/cards/cups-3.svg",
    "reflection": "谁是你可以分享喜悦，也可以分享脆弱的人？",
    "suitName": "圣杯",
    "numberLabel": "3",
    "symbol": "♡",
    "name": "圣杯三",
    "summary": "支持来自朋友与群体，共享喜悦会让情感得到滋养。允许自己加入庆祝。",
    "uprightKeywords": [
      "友谊",
      "庆祝",
      "社群",
      "共享"
    ],
    "reversedKeywords": [
      "过度享乐",
      "圈层压力",
      "疏远",
      "第三方干扰"
    ],
    "uprightMeaning": "支持来自朋友与群体，共享喜悦会让情感得到滋养。允许自己加入庆祝。",
    "reversedMeaning": "社交过量或群体关系失衡，也要注意旁人的意见是否影响你的选择。",
    "loveMeaning": "共同社交、朋友支持与愉快约会。",
    "careerMeaning": "团队协作、社区支持与阶段成果值得庆祝。",
    "reversedLoveMeaning": "第三方干扰、边界模糊或流言影响关系。",
    "reversedCareerMeaning": "小圈子、八卦或协作中不平等的情绪劳动。"
  },
  {
    "id": "cups-4",
    "number": 4,
    "arcana": "minor",
    "suit": "cups",
    "rank": "four",
    "nameEn": "Four of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "沉思",
        "倦怠",
        "重新评估",
        "内省"
      ],
      "reversed": [
        "重新开放",
        "错失机会",
        "恢复兴趣",
        "焦躁"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你可能暂时失去兴趣，需要辨认是疲惫还是价值不合。新的邀请就在眼前，但不必勉强接受。",
        "love": "关系进入平淡期，适合重新发现彼此需求。",
        "career": "重复工作带来倦怠，适合评估动机与机会。",
        "advice": "先休息，再区分真正不想要和暂时没有力气。"
      },
      "reversed": {
        "summary": "你开始愿意重新回应生活，也可能因为焦躁而接受了并不合适的机会。",
        "love": "冷淡逐渐消退，或因不满而冲动寻找新鲜感。",
        "career": "错过邀请、情绪化拒绝或重新恢复参与。",
        "advice": "先休息，再区分真正不想要和暂时没有力气。"
      }
    },
    "symbolism": "树下沉思的人没有看向递来的圣杯，象征内省与未察觉的机会。",
    "image": "/images/cards/cups-4.svg",
    "reflection": "你真正需要的是新的机会，还是足够的休息？",
    "suitName": "圣杯",
    "numberLabel": "4",
    "symbol": "♡",
    "name": "圣杯四",
    "summary": "你可能暂时失去兴趣，需要辨认是疲惫还是价值不合。新的邀请就在眼前，但不必勉强接受。",
    "uprightKeywords": [
      "沉思",
      "倦怠",
      "重新评估",
      "内省"
    ],
    "reversedKeywords": [
      "重新开放",
      "错失机会",
      "恢复兴趣",
      "焦躁"
    ],
    "uprightMeaning": "你可能暂时失去兴趣，需要辨认是疲惫还是价值不合。新的邀请就在眼前，但不必勉强接受。",
    "reversedMeaning": "你开始愿意重新回应生活，也可能因为焦躁而接受了并不合适的机会。",
    "loveMeaning": "关系进入平淡期，适合重新发现彼此需求。",
    "careerMeaning": "重复工作带来倦怠，适合评估动机与机会。",
    "reversedLoveMeaning": "冷淡逐渐消退，或因不满而冲动寻找新鲜感。",
    "reversedCareerMeaning": "错过邀请、情绪化拒绝或重新恢复参与。"
  },
  {
    "id": "cups-5",
    "number": 5,
    "arcana": "minor",
    "suit": "cups",
    "rank": "five",
    "nameEn": "Five of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "失落",
        "悲伤",
        "遗憾",
        "接受"
      ],
      "reversed": [
        "复原",
        "宽恕",
        "放不下",
        "重拾希望"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "允许自己为失去而难过，也记得仍有支持没有离开。接受事实是重新出发的起点。",
        "love": "失望、分离或旧伤需要被承认。",
        "career": "损失、结果不如预期，需要诚实复盘。",
        "advice": "为失去留出哀悼时间，再看一眼仍可使用的资源。"
      },
      "reversed": {
        "summary": "你正开始修复和原谅，也可能仍反复停留在后悔里。",
        "love": "逐渐和解、走出失恋或仍困在过去。",
        "career": "恢复信心、重新尝试或不愿承认失败。",
        "advice": "为失去留出哀悼时间，再看一眼仍可使用的资源。"
      }
    },
    "symbolism": "黑衣人物看着倒下的三杯，身后两杯与桥象征仍在的支持和前路。",
    "image": "/images/cards/cups-5.svg",
    "reflection": "失去之外，你还拥有什么可以依靠？",
    "suitName": "圣杯",
    "numberLabel": "5",
    "symbol": "♡",
    "name": "圣杯五",
    "summary": "允许自己为失去而难过，也记得仍有支持没有离开。接受事实是重新出发的起点。",
    "uprightKeywords": [
      "失落",
      "悲伤",
      "遗憾",
      "接受"
    ],
    "reversedKeywords": [
      "复原",
      "宽恕",
      "放不下",
      "重拾希望"
    ],
    "uprightMeaning": "允许自己为失去而难过，也记得仍有支持没有离开。接受事实是重新出发的起点。",
    "reversedMeaning": "你正开始修复和原谅，也可能仍反复停留在后悔里。",
    "loveMeaning": "失望、分离或旧伤需要被承认。",
    "careerMeaning": "损失、结果不如预期，需要诚实复盘。",
    "reversedLoveMeaning": "逐渐和解、走出失恋或仍困在过去。",
    "reversedCareerMeaning": "恢复信心、重新尝试或不愿承认失败。"
  },
  {
    "id": "cups-6",
    "number": 6,
    "arcana": "minor",
    "suit": "cups",
    "rank": "six",
    "nameEn": "Six of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "回忆",
        "温柔",
        "童真",
        "赠予"
      ],
      "reversed": [
        "怀旧过度",
        "成长",
        "旧模式",
        "童年课题"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "过去的温柔可以成为今天的支持。简单的善意与熟悉感提醒你真实的情感需求。",
        "love": "旧人重逢、熟悉安心或温柔相处。",
        "career": "旧经验、熟悉伙伴与善意协作带来帮助。",
        "advice": "带走过去有价值的部分，把选择留给现在的自己。"
      },
      "reversed": {
        "summary": "旧关系或童年模式让你难以前进，回忆需要被理解而不是复制。",
        "love": "沉溺旧情、关系幼稚或过去妨碍现在。",
        "career": "依赖旧方法、抗拒成长或不愿学习新技能。",
        "advice": "带走过去有价值的部分，把选择留给现在的自己。"
      }
    },
    "symbolism": "孩童赠送装花的圣杯，象征纯真、记忆与无条件的善意。",
    "image": "/images/cards/cups-6.svg",
    "reflection": "你想找回的，是某个人还是曾经的一种感受？",
    "suitName": "圣杯",
    "numberLabel": "6",
    "symbol": "♡",
    "name": "圣杯六",
    "summary": "过去的温柔可以成为今天的支持。简单的善意与熟悉感提醒你真实的情感需求。",
    "uprightKeywords": [
      "回忆",
      "温柔",
      "童真",
      "赠予"
    ],
    "reversedKeywords": [
      "怀旧过度",
      "成长",
      "旧模式",
      "童年课题"
    ],
    "uprightMeaning": "过去的温柔可以成为今天的支持。简单的善意与熟悉感提醒你真实的情感需求。",
    "reversedMeaning": "旧关系或童年模式让你难以前进，回忆需要被理解而不是复制。",
    "loveMeaning": "旧人重逢、熟悉安心或温柔相处。",
    "careerMeaning": "旧经验、熟悉伙伴与善意协作带来帮助。",
    "reversedLoveMeaning": "沉溺旧情、关系幼稚或过去妨碍现在。",
    "reversedCareerMeaning": "依赖旧方法、抗拒成长或不愿学习新技能。"
  },
  {
    "id": "cups-7",
    "number": 7,
    "arcana": "minor",
    "suit": "cups",
    "rank": "seven",
    "nameEn": "Seven of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "幻想",
        "选择",
        "诱惑",
        "可能性"
      ],
      "reversed": [
        "清醒",
        "选择困难",
        "落地",
        "幻灭"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "可能性很多，但不必每一个都追逐。辨认真正的渴望与想象中的光环。",
        "love": "理想化、多个选项或对关系的投射。",
        "career": "点子与机会繁多，适合评估成本与可行性。",
        "advice": "只保留三个选项，逐一核对现实证据。"
      },
      "reversed": {
        "summary": "你逐渐看清现实，或因为害怕选错而仍无法行动。",
        "love": "认清事实、减少幻想或对承诺仍然犹豫。",
        "career": "筛选方向、停止空想或因选择过多而停滞。",
        "advice": "只保留三个选项，逐一核对现实证据。"
      }
    },
    "symbolism": "云中的七只圣杯装着不同诱惑，象征梦想、恐惧与选择。",
    "image": "/images/cards/cups-7.svg",
    "reflection": "你选中的未来，是否也包含它真实的代价？",
    "suitName": "圣杯",
    "numberLabel": "7",
    "symbol": "♡",
    "name": "圣杯七",
    "summary": "可能性很多，但不必每一个都追逐。辨认真正的渴望与想象中的光环。",
    "uprightKeywords": [
      "幻想",
      "选择",
      "诱惑",
      "可能性"
    ],
    "reversedKeywords": [
      "清醒",
      "选择困难",
      "落地",
      "幻灭"
    ],
    "uprightMeaning": "可能性很多，但不必每一个都追逐。辨认真正的渴望与想象中的光环。",
    "reversedMeaning": "你逐渐看清现实，或因为害怕选错而仍无法行动。",
    "loveMeaning": "理想化、多个选项或对关系的投射。",
    "careerMeaning": "点子与机会繁多，适合评估成本与可行性。",
    "reversedLoveMeaning": "认清事实、减少幻想或对承诺仍然犹豫。",
    "reversedCareerMeaning": "筛选方向、停止空想或因选择过多而停滞。"
  },
  {
    "id": "cups-8",
    "number": 8,
    "arcana": "minor",
    "suit": "cups",
    "rank": "eight",
    "nameEn": "Eight of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "离开",
        "寻找",
        "觉醒",
        "深层需求"
      ],
      "reversed": [
        "害怕告别",
        "停留",
        "返回",
        "重新投入"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "看似完整的局面已无法满足你，离开是为了寻找更真实的意义。",
        "love": "离开消耗关系，或需要独处重新理解需求。",
        "career": "转向更有意义的工作，不再只追逐外部成果。",
        "advice": "把离开的原因和留下的条件都写清楚。"
      },
      "reversed": {
        "summary": "你在离开和留下之间摇摆，先确认是否已经尽力沟通与调整。",
        "love": "反复复合、害怕孤独或尚未准备告别。",
        "career": "因安全感而停留，或离职冲动尚未经过评估。",
        "advice": "把离开的原因和留下的条件都写清楚。"
      }
    },
    "symbolism": "夜色中人物远离八只圣杯，象征放下已知而寻找更深的满足。",
    "image": "/images/cards/cups-8.svg",
    "reflection": "什么外表完整的东西，已经无法滋养你？",
    "suitName": "圣杯",
    "numberLabel": "8",
    "symbol": "♡",
    "name": "圣杯八",
    "summary": "看似完整的局面已无法满足你，离开是为了寻找更真实的意义。",
    "uprightKeywords": [
      "离开",
      "寻找",
      "觉醒",
      "深层需求"
    ],
    "reversedKeywords": [
      "害怕告别",
      "停留",
      "返回",
      "重新投入"
    ],
    "uprightMeaning": "看似完整的局面已无法满足你，离开是为了寻找更真实的意义。",
    "reversedMeaning": "你在离开和留下之间摇摆，先确认是否已经尽力沟通与调整。",
    "loveMeaning": "离开消耗关系，或需要独处重新理解需求。",
    "careerMeaning": "转向更有意义的工作，不再只追逐外部成果。",
    "reversedLoveMeaning": "反复复合、害怕孤独或尚未准备告别。",
    "reversedCareerMeaning": "因安全感而停留，或离职冲动尚未经过评估。"
  },
  {
    "id": "cups-9",
    "number": 9,
    "arcana": "minor",
    "suit": "cups",
    "rank": "nine",
    "nameEn": "Nine of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "满足",
        "愿望实现",
        "享受",
        "感恩"
      ],
      "reversed": [
        "空虚",
        "过度享乐",
        "愿望延迟",
        "自满"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "愿望与生活获得一定满足，可以安心享受已经拥有的幸福。",
        "love": "关系愉悦、彼此欣赏，也保留独立的快乐。",
        "career": "阶段目标达成，适合庆祝与调整下一步。",
        "advice": "认真享受成果，并问自己什么让这种满足持续。"
      },
      "reversed": {
        "summary": "表面拥有很多，内心却未被满足；注意过度享乐和外部证明。",
        "love": "只顾自己、情感空虚或期待过高。",
        "career": "自满、结果不如预期或把成功当成唯一价值。",
        "advice": "认真享受成果，并问自己什么让这种满足持续。"
      }
    },
    "symbolism": "人物坐在九杯前，象征获得满足以及如何安放欲望。",
    "image": "/images/cards/cups-9.svg",
    "reflection": "你现在的满足来自真实需要，还是他人的标准？",
    "suitName": "圣杯",
    "numberLabel": "9",
    "symbol": "♡",
    "name": "圣杯九",
    "summary": "愿望与生活获得一定满足，可以安心享受已经拥有的幸福。",
    "uprightKeywords": [
      "满足",
      "愿望实现",
      "享受",
      "感恩"
    ],
    "reversedKeywords": [
      "空虚",
      "过度享乐",
      "愿望延迟",
      "自满"
    ],
    "uprightMeaning": "愿望与生活获得一定满足，可以安心享受已经拥有的幸福。",
    "reversedMeaning": "表面拥有很多，内心却未被满足；注意过度享乐和外部证明。",
    "loveMeaning": "关系愉悦、彼此欣赏，也保留独立的快乐。",
    "careerMeaning": "阶段目标达成，适合庆祝与调整下一步。",
    "reversedLoveMeaning": "只顾自己、情感空虚或期待过高。",
    "reversedCareerMeaning": "自满、结果不如预期或把成功当成唯一价值。"
  },
  {
    "id": "cups-10",
    "number": 10,
    "arcana": "minor",
    "suit": "cups",
    "rank": "ten",
    "nameEn": "Ten of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "家庭",
        "和谐",
        "共同幸福",
        "归属"
      ],
      "reversed": [
        "失和",
        "理想化",
        "价值分歧",
        "表面圆满"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "共同生活与情感归属带来幸福，成熟的关系能容纳每个人的真实需要。",
        "love": "长期承诺、家庭支持与共同愿景。",
        "career": "和谐团队、工作与生活平衡，成果惠及群体。",
        "advice": "把理想生活拆成可以共同经营的日常动作。"
      },
      "reversed": {
        "summary": "理想家庭形象与现实有距离，诚实讨论比维持表面圆满更重要。",
        "love": "家庭冲突、价值不合或幸福表象下的疏离。",
        "career": "团队价值分歧或工作压力侵蚀生活。",
        "advice": "把理想生活拆成可以共同经营的日常动作。"
      }
    },
    "symbolism": "彩虹下的十杯与一家人象征情感圆满、归属和共同愿景。",
    "image": "/images/cards/cups-10.svg",
    "reflection": "你们的幸福愿景里，是否也有每个人真实的声音？",
    "suitName": "圣杯",
    "numberLabel": "10",
    "symbol": "♡",
    "name": "圣杯十",
    "summary": "共同生活与情感归属带来幸福，成熟的关系能容纳每个人的真实需要。",
    "uprightKeywords": [
      "家庭",
      "和谐",
      "共同幸福",
      "归属"
    ],
    "reversedKeywords": [
      "失和",
      "理想化",
      "价值分歧",
      "表面圆满"
    ],
    "uprightMeaning": "共同生活与情感归属带来幸福，成熟的关系能容纳每个人的真实需要。",
    "reversedMeaning": "理想家庭形象与现实有距离，诚实讨论比维持表面圆满更重要。",
    "loveMeaning": "长期承诺、家庭支持与共同愿景。",
    "careerMeaning": "和谐团队、工作与生活平衡，成果惠及群体。",
    "reversedLoveMeaning": "家庭冲突、价值不合或幸福表象下的疏离。",
    "reversedCareerMeaning": "团队价值分歧或工作压力侵蚀生活。"
  },
  {
    "id": "cups-11",
    "number": 11,
    "arcana": "minor",
    "suit": "cups",
    "rank": "page",
    "nameEn": "Page of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "温柔消息",
        "想象力",
        "心动",
        "好奇"
      ],
      "reversed": [
        "敏感",
        "幼稚",
        "表达受阻",
        "不切实际"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "温柔消息或新鲜感受来到。好奇地听见内心，创作与真诚表达会打开可能。",
        "love": "害羞心动、道歉、试探性邀约。",
        "career": "创意灵感、艺术学习与富有同理心的协作。",
        "advice": "用简单直接的话表达感受，不要求一次说完。"
      },
      "reversed": {
        "summary": "感受很丰富却难以成熟表达，也要辨认幻想与现实。",
        "love": "情绪不成熟、理想化或不敢说出需要。",
        "career": "情绪化、逃避反馈或点子缺少落实。",
        "advice": "用简单直接的话表达感受，不要求一次说完。"
      }
    },
    "symbolism": "圣杯中的鱼象征意料之外的直觉与想象力讯息。",
    "image": "/images/cards/cups-11.svg",
    "reflection": "哪一种感受正以很轻的声音邀请你倾听？",
    "suitName": "圣杯",
    "numberLabel": "P",
    "symbol": "♡",
    "name": "圣杯侍者",
    "summary": "温柔消息或新鲜感受来到。好奇地听见内心，创作与真诚表达会打开可能。",
    "uprightKeywords": [
      "温柔消息",
      "想象力",
      "心动",
      "好奇"
    ],
    "reversedKeywords": [
      "敏感",
      "幼稚",
      "表达受阻",
      "不切实际"
    ],
    "uprightMeaning": "温柔消息或新鲜感受来到。好奇地听见内心，创作与真诚表达会打开可能。",
    "reversedMeaning": "感受很丰富却难以成熟表达，也要辨认幻想与现实。",
    "loveMeaning": "害羞心动、道歉、试探性邀约。",
    "careerMeaning": "创意灵感、艺术学习与富有同理心的协作。",
    "reversedLoveMeaning": "情绪不成熟、理想化或不敢说出需要。",
    "reversedCareerMeaning": "情绪化、逃避反馈或点子缺少落实。"
  },
  {
    "id": "cups-12",
    "number": 12,
    "arcana": "minor",
    "suit": "cups",
    "rank": "knight",
    "nameEn": "Knight of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "浪漫",
        "追求",
        "理想",
        "邀请"
      ],
      "reversed": [
        "不切实际",
        "失约",
        "情绪反复",
        "幻灭"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "温柔与理想推动行动。表达心意很重要，也要让承诺获得现实支撑。",
        "love": "浪漫邀约、主动示爱与深情交流。",
        "career": "艺术项目、富有感染力的提案与合作邀请。",
        "advice": "把动人的想法写成清楚的时间与行动安排。"
      },
      "reversed": {
        "summary": "美好话语缺少行动，或情绪变化让承诺难以持续。",
        "love": "过度理想化、暧昧不定或承诺落空。",
        "career": "计划缺少可行性、反复改动或感性压过事实。",
        "advice": "把动人的想法写成清楚的时间与行动安排。"
      }
    },
    "symbolism": "骑士平稳持杯前行，象征带着情感与理想主动接近世界。",
    "image": "/images/cards/cups-12.svg",
    "reflection": "一句承诺需要什么行动，才会让你感到可靠？",
    "suitName": "圣杯",
    "numberLabel": "N",
    "symbol": "♡",
    "name": "圣杯骑士",
    "summary": "温柔与理想推动行动。表达心意很重要，也要让承诺获得现实支撑。",
    "uprightKeywords": [
      "浪漫",
      "追求",
      "理想",
      "邀请"
    ],
    "reversedKeywords": [
      "不切实际",
      "失约",
      "情绪反复",
      "幻灭"
    ],
    "uprightMeaning": "温柔与理想推动行动。表达心意很重要，也要让承诺获得现实支撑。",
    "reversedMeaning": "美好话语缺少行动，或情绪变化让承诺难以持续。",
    "loveMeaning": "浪漫邀约、主动示爱与深情交流。",
    "careerMeaning": "艺术项目、富有感染力的提案与合作邀请。",
    "reversedLoveMeaning": "过度理想化、暧昧不定或承诺落空。",
    "reversedCareerMeaning": "计划缺少可行性、反复改动或感性压过事实。"
  },
  {
    "id": "cups-13",
    "number": 13,
    "arcana": "minor",
    "suit": "cups",
    "rank": "queen",
    "nameEn": "Queen of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "同理心",
        "直觉",
        "滋养",
        "情绪成熟"
      ],
      "reversed": [
        "依赖",
        "情绪淹没",
        "边界不清",
        "过度照顾"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "深度倾听与温柔直觉能理解未被说出的需求。照顾他人时也要保留自己的容器。",
        "love": "深情、理解与安全的情感支持。",
        "career": "咨询、创作与需要同理心的工作得到支持。",
        "advice": "先确认自己的感受，再决定能够提供多少支持。"
      },
      "reversed": {
        "summary": "吸收过多情绪或不断照顾他人，使你难以分辨自己的感受。",
        "love": "过度依赖、委屈自己或情绪勒索。",
        "career": "情绪劳动过量、边界模糊或倦怠。",
        "advice": "先确认自己的感受，再决定能够提供多少支持。"
      }
    },
    "symbolism": "临水王后凝视有盖圣杯，象征内在深度、直觉与有边界的情感。",
    "image": "/images/cards/cups-13.svg",
    "reflection": "你照顾别人时，谁在照顾你？",
    "suitName": "圣杯",
    "numberLabel": "Q",
    "symbol": "♡",
    "name": "圣杯王后",
    "summary": "深度倾听与温柔直觉能理解未被说出的需求。照顾他人时也要保留自己的容器。",
    "uprightKeywords": [
      "同理心",
      "直觉",
      "滋养",
      "情绪成熟"
    ],
    "reversedKeywords": [
      "依赖",
      "情绪淹没",
      "边界不清",
      "过度照顾"
    ],
    "uprightMeaning": "深度倾听与温柔直觉能理解未被说出的需求。照顾他人时也要保留自己的容器。",
    "reversedMeaning": "吸收过多情绪或不断照顾他人，使你难以分辨自己的感受。",
    "loveMeaning": "深情、理解与安全的情感支持。",
    "careerMeaning": "咨询、创作与需要同理心的工作得到支持。",
    "reversedLoveMeaning": "过度依赖、委屈自己或情绪勒索。",
    "reversedCareerMeaning": "情绪劳动过量、边界模糊或倦怠。"
  },
  {
    "id": "cups-14",
    "number": 14,
    "arcana": "minor",
    "suit": "cups",
    "rank": "king",
    "nameEn": "King of Cups",
    "element": "水",
    "keywords": {
      "upright": [
        "情绪稳定",
        "包容",
        "成熟",
        "外交"
      ],
      "reversed": [
        "压抑",
        "操纵",
        "冷淡",
        "情绪失控"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "成熟不是没有情绪，而是能容纳感受并稳稳行动。你可以在复杂关系中保持同理与边界。",
        "love": "可靠、体贴与稳定承诺。",
        "career": "协调、谈判与领导需要成熟的情绪管理。",
        "advice": "把感受说清楚，用稳定行动支持你的关心。"
      },
      "reversed": {
        "summary": "情感被压抑或用来操控，平静的外表下可能有未处理的波动。",
        "love": "难以表达、冷处理或以情绪控制彼此。",
        "career": "逃避冲突、操控团队情绪或缺少透明表达。",
        "advice": "把感受说清楚，用稳定行动支持你的关心。"
      }
    },
    "symbolism": "王座位于波动海面，象征与情绪共处而不被情绪淹没。",
    "image": "/images/cards/cups-14.svg",
    "reflection": "你能否同时表达感受，也承担表达之后的责任？",
    "suitName": "圣杯",
    "numberLabel": "K",
    "symbol": "♡",
    "name": "圣杯国王",
    "summary": "成熟不是没有情绪，而是能容纳感受并稳稳行动。你可以在复杂关系中保持同理与边界。",
    "uprightKeywords": [
      "情绪稳定",
      "包容",
      "成熟",
      "外交"
    ],
    "reversedKeywords": [
      "压抑",
      "操纵",
      "冷淡",
      "情绪失控"
    ],
    "uprightMeaning": "成熟不是没有情绪，而是能容纳感受并稳稳行动。你可以在复杂关系中保持同理与边界。",
    "reversedMeaning": "情感被压抑或用来操控，平静的外表下可能有未处理的波动。",
    "loveMeaning": "可靠、体贴与稳定承诺。",
    "careerMeaning": "协调、谈判与领导需要成熟的情绪管理。",
    "reversedLoveMeaning": "难以表达、冷处理或以情绪控制彼此。",
    "reversedCareerMeaning": "逃避冲突、操控团队情绪或缺少透明表达。"
  },
  {
    "id": "swords-1",
    "number": 1,
    "arcana": "minor",
    "suit": "swords",
    "rank": "ace",
    "nameEn": "Ace of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "真相",
        "突破",
        "清晰",
        "决断"
      ],
      "reversed": [
        "混乱",
        "误判",
        "沟通受阻",
        "伤人言语"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "关键事实或洞见让局面变得清楚。用诚实而准确的语言切开混乱。",
        "love": "坦诚对话、明确关系与厘清误会。",
        "career": "研究突破、明确策略、合同与决策。",
        "advice": "列出已知事实与尚待核实的部分，再作决定。"
      },
      "reversed": {
        "summary": "信息不全或判断太快，清晰需要更多核对而非更大音量。",
        "love": "言语伤害、误解或把对错放在感受之前。",
        "career": "方案漏洞、事实错误或沟通失效。",
        "advice": "列出已知事实与尚待核实的部分，再作决定。"
      }
    },
    "symbolism": "云中之手持剑戴冠，象征思想突破与清晰判断。",
    "image": "/images/cards/swords-1.svg",
    "reflection": "你最需要说清楚的事实是什么？",
    "suitName": "宝剑",
    "numberLabel": "A",
    "symbol": "†",
    "name": "宝剑王牌",
    "summary": "关键事实或洞见让局面变得清楚。用诚实而准确的语言切开混乱。",
    "uprightKeywords": [
      "真相",
      "突破",
      "清晰",
      "决断"
    ],
    "reversedKeywords": [
      "混乱",
      "误判",
      "沟通受阻",
      "伤人言语"
    ],
    "uprightMeaning": "关键事实或洞见让局面变得清楚。用诚实而准确的语言切开混乱。",
    "reversedMeaning": "信息不全或判断太快，清晰需要更多核对而非更大音量。",
    "loveMeaning": "坦诚对话、明确关系与厘清误会。",
    "careerMeaning": "研究突破、明确策略、合同与决策。",
    "reversedLoveMeaning": "言语伤害、误解或把对错放在感受之前。",
    "reversedCareerMeaning": "方案漏洞、事实错误或沟通失效。"
  },
  {
    "id": "swords-2",
    "number": 2,
    "arcana": "minor",
    "suit": "swords",
    "rank": "two",
    "nameEn": "Two of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "僵局",
        "权衡",
        "保护",
        "暂停"
      ],
      "reversed": [
        "信息过载",
        "逃避",
        "被迫选择",
        "立场松动"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "两个选项都让你犹豫，先承认自己缺少什么信息。暂停可以帮助你听见真正的立场。",
        "love": "双方都在保护自己，沟通停在表面。",
        "career": "需要权衡利弊，暂缓不可逆决定。",
        "advice": "摘下象征性的眼罩，问出你一直不愿问的问题。"
      },
      "reversed": {
        "summary": "继续回避让压力增加，或过多意见使你难以听见自己。",
        "love": "沉默被打破，或积累的分歧要求作决定。",
        "career": "被迫选边、过度分析或忽视重要事实。",
        "advice": "摘下象征性的眼罩，问出你一直不愿问的问题。"
      }
    },
    "symbolism": "蒙眼人物交叉双剑，象征防御、僵局与被隔开的感受。",
    "image": "/images/cards/swords-2.svg",
    "reflection": "你不做选择，是因为缺少事实还是害怕结果？",
    "suitName": "宝剑",
    "numberLabel": "2",
    "symbol": "†",
    "name": "宝剑二",
    "summary": "两个选项都让你犹豫，先承认自己缺少什么信息。暂停可以帮助你听见真正的立场。",
    "uprightKeywords": [
      "僵局",
      "权衡",
      "保护",
      "暂停"
    ],
    "reversedKeywords": [
      "信息过载",
      "逃避",
      "被迫选择",
      "立场松动"
    ],
    "uprightMeaning": "两个选项都让你犹豫，先承认自己缺少什么信息。暂停可以帮助你听见真正的立场。",
    "reversedMeaning": "继续回避让压力增加，或过多意见使你难以听见自己。",
    "loveMeaning": "双方都在保护自己，沟通停在表面。",
    "careerMeaning": "需要权衡利弊，暂缓不可逆决定。",
    "reversedLoveMeaning": "沉默被打破，或积累的分歧要求作决定。",
    "reversedCareerMeaning": "被迫选边、过度分析或忽视重要事实。"
  },
  {
    "id": "swords-3",
    "number": 3,
    "arcana": "minor",
    "suit": "swords",
    "rank": "three",
    "nameEn": "Three of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "心痛",
        "真相",
        "分离",
        "哀伤"
      ],
      "reversed": [
        "疗愈",
        "释放",
        "旧伤",
        "压抑悲伤"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "真相可能令人受伤，但把痛苦承认出来能让修复开始。请给自己适当的时间。",
        "love": "失望、分手或伤人的沟通需要被认真处理。",
        "career": "批评、挫折或合作破裂带来清醒。",
        "advice": "将伤痛说给可信的人听，暂缓带着强烈情绪作决定。"
      },
      "reversed": {
        "summary": "你正在慢慢释放伤痛，也可能因压抑而让旧伤反复。",
        "love": "走向和解、接受结束或旧痛尚未消化。",
        "career": "逐渐修复信心，避免让一次失败定义全部。",
        "advice": "将伤痛说给可信的人听，暂缓带着强烈情绪作决定。"
      }
    },
    "symbolism": "三剑穿心与雨云象征理性真相带来的情绪痛苦。",
    "image": "/images/cards/swords-3.svg",
    "reflection": "你需要承认哪一份悲伤，才能开始修复？",
    "suitName": "宝剑",
    "numberLabel": "3",
    "symbol": "†",
    "name": "宝剑三",
    "summary": "真相可能令人受伤，但把痛苦承认出来能让修复开始。请给自己适当的时间。",
    "uprightKeywords": [
      "心痛",
      "真相",
      "分离",
      "哀伤"
    ],
    "reversedKeywords": [
      "疗愈",
      "释放",
      "旧伤",
      "压抑悲伤"
    ],
    "uprightMeaning": "真相可能令人受伤，但把痛苦承认出来能让修复开始。请给自己适当的时间。",
    "reversedMeaning": "你正在慢慢释放伤痛，也可能因压抑而让旧伤反复。",
    "loveMeaning": "失望、分手或伤人的沟通需要被认真处理。",
    "careerMeaning": "批评、挫折或合作破裂带来清醒。",
    "reversedLoveMeaning": "走向和解、接受结束或旧痛尚未消化。",
    "reversedCareerMeaning": "逐渐修复信心，避免让一次失败定义全部。"
  },
  {
    "id": "swords-4",
    "number": 4,
    "arcana": "minor",
    "suit": "swords",
    "rank": "four",
    "nameEn": "Four of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "休息",
        "恢复",
        "静心",
        "暂退"
      ],
      "reversed": [
        "过劳",
        "焦躁",
        "恢复行动",
        "无法放松"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "停止消耗，给思想和身体真正的休息。暂退是恢复判断力的过程。",
        "love": "关系需要空间，平静后再沟通。",
        "career": "暂停项目、休假与安静复盘有助恢复。",
        "advice": "安排一段没有任务和解释义务的休息时间。"
      },
      "reversed": {
        "summary": "你可能在恢复行动，也可能长期无法休息、继续逼迫自己。",
        "love": "冷处理持续过久，或双方都难以放松。",
        "career": "过劳影响判断，重启前需要确认精力。",
        "advice": "安排一段没有任务和解释义务的休息时间。"
      }
    },
    "symbolism": "静卧人物与悬剑象征停战、冥想和恢复。",
    "image": "/images/cards/swords-4.svg",
    "reflection": "你允许自己在没有完成全部任务时休息吗？",
    "suitName": "宝剑",
    "numberLabel": "4",
    "symbol": "†",
    "name": "宝剑四",
    "summary": "停止消耗，给思想和身体真正的休息。暂退是恢复判断力的过程。",
    "uprightKeywords": [
      "休息",
      "恢复",
      "静心",
      "暂退"
    ],
    "reversedKeywords": [
      "过劳",
      "焦躁",
      "恢复行动",
      "无法放松"
    ],
    "uprightMeaning": "停止消耗，给思想和身体真正的休息。暂退是恢复判断力的过程。",
    "reversedMeaning": "你可能在恢复行动，也可能长期无法休息、继续逼迫自己。",
    "loveMeaning": "关系需要空间，平静后再沟通。",
    "careerMeaning": "暂停项目、休假与安静复盘有助恢复。",
    "reversedLoveMeaning": "冷处理持续过久，或双方都难以放松。",
    "reversedCareerMeaning": "过劳影响判断，重启前需要确认精力。"
  },
  {
    "id": "swords-5",
    "number": 5,
    "arcana": "minor",
    "suit": "swords",
    "rank": "five",
    "nameEn": "Five of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "冲突",
        "代价",
        "输赢",
        "孤立"
      ],
      "reversed": [
        "和解",
        "悔意",
        "余怨",
        "停止争斗"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "赢得争论也可能失去信任。请看清这场竞争真正让谁获益、又付出了什么。",
        "love": "争胜、伤人话语或不平等权力破坏亲密。",
        "career": "办公室政治、利益冲突与代价很高的竞争。",
        "advice": "放下不值得的胜负，修复你真正想保留的关系。"
      },
      "reversed": {
        "summary": "冲突可以结束，但残余伤害还需处理；道歉需要伴随改变。",
        "love": "愿意和解，或仍在反复清算旧账。",
        "career": "争端缓和、重建合作或被未处理余怨拖住。",
        "advice": "放下不值得的胜负，修复你真正想保留的关系。"
      }
    },
    "symbolism": "持剑者看着离去的人，象征胜利背后的孤立与伦理代价。",
    "image": "/images/cards/swords-5.svg",
    "reflection": "如果你赢了这场争论，会失去什么？",
    "suitName": "宝剑",
    "numberLabel": "5",
    "symbol": "†",
    "name": "宝剑五",
    "summary": "赢得争论也可能失去信任。请看清这场竞争真正让谁获益、又付出了什么。",
    "uprightKeywords": [
      "冲突",
      "代价",
      "输赢",
      "孤立"
    ],
    "reversedKeywords": [
      "和解",
      "悔意",
      "余怨",
      "停止争斗"
    ],
    "uprightMeaning": "赢得争论也可能失去信任。请看清这场竞争真正让谁获益、又付出了什么。",
    "reversedMeaning": "冲突可以结束，但残余伤害还需处理；道歉需要伴随改变。",
    "loveMeaning": "争胜、伤人话语或不平等权力破坏亲密。",
    "careerMeaning": "办公室政治、利益冲突与代价很高的竞争。",
    "reversedLoveMeaning": "愿意和解，或仍在反复清算旧账。",
    "reversedCareerMeaning": "争端缓和、重建合作或被未处理余怨拖住。"
  },
  {
    "id": "swords-6",
    "number": 6,
    "arcana": "minor",
    "suit": "swords",
    "rank": "six",
    "nameEn": "Six of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "过渡",
        "离开",
        "疗愈",
        "理性前行"
      ],
      "reversed": [
        "无法脱离",
        "行程受阻",
        "旧包袱",
        "抗拒改变"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "带着经验离开混乱，过渡不一定轻松，但方向正在变得平稳。",
        "love": "从冲突走向平静，也可能选择有意识地分开。",
        "career": "转岗、迁移、调整策略与恢复秩序。",
        "advice": "确认下一站和可用支援，允许自己带着不完整出发。"
      },
      "reversed": {
        "summary": "过去的问题跟着你，或现实条件让离开暂时受阻。",
        "love": "旧问题未解、反复返回或距离安排受阻。",
        "career": "流程延误、迁移成本或旧系统拖住改变。",
        "advice": "确认下一站和可用支援，允许自己带着不完整出发。"
      }
    },
    "symbolism": "小船载人驶向平静水域，象征携带经历走入新的阶段。",
    "image": "/images/cards/swords-6.svg",
    "reflection": "为了走向平静，你需要带走什么、留下什么？",
    "suitName": "宝剑",
    "numberLabel": "6",
    "symbol": "†",
    "name": "宝剑六",
    "summary": "带着经验离开混乱，过渡不一定轻松，但方向正在变得平稳。",
    "uprightKeywords": [
      "过渡",
      "离开",
      "疗愈",
      "理性前行"
    ],
    "reversedKeywords": [
      "无法脱离",
      "行程受阻",
      "旧包袱",
      "抗拒改变"
    ],
    "uprightMeaning": "带着经验离开混乱，过渡不一定轻松，但方向正在变得平稳。",
    "reversedMeaning": "过去的问题跟着你，或现实条件让离开暂时受阻。",
    "loveMeaning": "从冲突走向平静，也可能选择有意识地分开。",
    "careerMeaning": "转岗、迁移、调整策略与恢复秩序。",
    "reversedLoveMeaning": "旧问题未解、反复返回或距离安排受阻。",
    "reversedCareerMeaning": "流程延误、迁移成本或旧系统拖住改变。"
  },
  {
    "id": "swords-7",
    "number": 7,
    "arcana": "minor",
    "suit": "swords",
    "rank": "seven",
    "nameEn": "Seven of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "策略",
        "隐私",
        "独立",
        "避开冲突"
      ],
      "reversed": [
        "真相暴露",
        "自我欺骗",
        "招认",
        "不诚实"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "迂回方法可能比正面冲突有效，但要诚实检查手段与后果。保留隐私不等于欺瞒。",
        "love": "保持距离、难以坦诚或有人隐瞒意图。",
        "career": "独立工作、策略调整与信息保护。",
        "advice": "把不能公开的原因说给自己听，检查它是否站得住脚。"
      },
      "reversed": {
        "summary": "隐瞒开始失效，或你需要承认一直在回避的事实。",
        "love": "秘密浮现，适合修复透明度或重新设定边界。",
        "career": "漏洞、失信、偷工减料或需要说明责任。",
        "advice": "把不能公开的原因说给自己听，检查它是否站得住脚。"
      }
    },
    "symbolism": "人物带走五剑并回头，象征策略、逃避与不完整的得失。",
    "image": "/images/cards/swords-7.svg",
    "reflection": "你在保护边界，还是在逃避诚实？",
    "suitName": "宝剑",
    "numberLabel": "7",
    "symbol": "†",
    "name": "宝剑七",
    "summary": "迂回方法可能比正面冲突有效，但要诚实检查手段与后果。保留隐私不等于欺瞒。",
    "uprightKeywords": [
      "策略",
      "隐私",
      "独立",
      "避开冲突"
    ],
    "reversedKeywords": [
      "真相暴露",
      "自我欺骗",
      "招认",
      "不诚实"
    ],
    "uprightMeaning": "迂回方法可能比正面冲突有效，但要诚实检查手段与后果。保留隐私不等于欺瞒。",
    "reversedMeaning": "隐瞒开始失效，或你需要承认一直在回避的事实。",
    "loveMeaning": "保持距离、难以坦诚或有人隐瞒意图。",
    "careerMeaning": "独立工作、策略调整与信息保护。",
    "reversedLoveMeaning": "秘密浮现，适合修复透明度或重新设定边界。",
    "reversedCareerMeaning": "漏洞、失信、偷工减料或需要说明责任。"
  },
  {
    "id": "swords-8",
    "number": 8,
    "arcana": "minor",
    "suit": "swords",
    "rank": "eight",
    "nameEn": "Eight of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "受困",
        "限制",
        "恐惧",
        "无力感"
      ],
      "reversed": [
        "解套",
        "自主",
        "看清限制",
        "自我困住"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "局面似乎没有选择，但部分限制来自恐惧与惯性。先寻找一个你能够控制的行动。",
        "love": "害怕失去、无法表达或关系中感到受限。",
        "career": "规则、焦虑或能力怀疑使行动受阻。",
        "advice": "把真实限制和假设分开，迈出一个安全的小步。"
      },
      "reversed": {
        "summary": "你开始看见出路，也要避免因自责而再次困住自己。",
        "love": "逐渐建立边界，或发现限制并非全来自对方。",
        "career": "恢复主动权、寻求支持并拆解问题。",
        "advice": "把真实限制和假设分开，迈出一个安全的小步。"
      }
    },
    "symbolism": "被蒙眼束缚的人站在剑阵中，象征主观恐惧与尚未看见的出口。",
    "image": "/images/cards/swords-8.svg",
    "reflection": "哪一个“我不能”其实还没有被验证？",
    "suitName": "宝剑",
    "numberLabel": "8",
    "symbol": "†",
    "name": "宝剑八",
    "summary": "局面似乎没有选择，但部分限制来自恐惧与惯性。先寻找一个你能够控制的行动。",
    "uprightKeywords": [
      "受困",
      "限制",
      "恐惧",
      "无力感"
    ],
    "reversedKeywords": [
      "解套",
      "自主",
      "看清限制",
      "自我困住"
    ],
    "uprightMeaning": "局面似乎没有选择，但部分限制来自恐惧与惯性。先寻找一个你能够控制的行动。",
    "reversedMeaning": "你开始看见出路，也要避免因自责而再次困住自己。",
    "loveMeaning": "害怕失去、无法表达或关系中感到受限。",
    "careerMeaning": "规则、焦虑或能力怀疑使行动受阻。",
    "reversedLoveMeaning": "逐渐建立边界，或发现限制并非全来自对方。",
    "reversedCareerMeaning": "恢复主动权、寻求支持并拆解问题。"
  },
  {
    "id": "swords-9",
    "number": 9,
    "arcana": "minor",
    "suit": "swords",
    "rank": "nine",
    "nameEn": "Nine of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "焦虑",
        "内疚",
        "失眠",
        "反复担忧"
      ],
      "reversed": [
        "寻求帮助",
        "恢复",
        "绝望",
        "隐藏压力"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "担忧在脑中放大，独自反复思考未必能带来答案。把恐惧转成可以核实与处理的部分。",
        "love": "猜疑、内疚或害怕失去影响信任。",
        "career": "工作压力、过度自责与对失败的预想。",
        "advice": "告诉可信的人你正在担心什么，给睡眠与身体留出空间。"
      },
      "reversed": {
        "summary": "压力开始被看见并缓解，也可能仍因不愿求助而越积越深。",
        "love": "愿意坦诚求助，或把焦虑藏起来独自承受。",
        "career": "恢复需要支持，宜减轻负荷并核实事实。",
        "advice": "告诉可信的人你正在担心什么，给睡眠与身体留出空间。"
      }
    },
    "symbolism": "床上掩面的人与九剑象征夜间被放大的忧惧和心理负荷。",
    "image": "/images/cards/swords-9.svg",
    "reflection": "担忧里有哪些是事实，哪些只是最坏的预演？",
    "suitName": "宝剑",
    "numberLabel": "9",
    "symbol": "†",
    "name": "宝剑九",
    "summary": "担忧在脑中放大，独自反复思考未必能带来答案。把恐惧转成可以核实与处理的部分。",
    "uprightKeywords": [
      "焦虑",
      "内疚",
      "失眠",
      "反复担忧"
    ],
    "reversedKeywords": [
      "寻求帮助",
      "恢复",
      "绝望",
      "隐藏压力"
    ],
    "uprightMeaning": "担忧在脑中放大，独自反复思考未必能带来答案。把恐惧转成可以核实与处理的部分。",
    "reversedMeaning": "压力开始被看见并缓解，也可能仍因不愿求助而越积越深。",
    "loveMeaning": "猜疑、内疚或害怕失去影响信任。",
    "careerMeaning": "工作压力、过度自责与对失败的预想。",
    "reversedLoveMeaning": "愿意坦诚求助，或把焦虑藏起来独自承受。",
    "reversedCareerMeaning": "恢复需要支持，宜减轻负荷并核实事实。"
  },
  {
    "id": "swords-10",
    "number": 10,
    "arcana": "minor",
    "suit": "swords",
    "rank": "ten",
    "nameEn": "Ten of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "结束",
        "触底",
        "接受",
        "旧局终止"
      ],
      "reversed": [
        "复原",
        "抗拒结束",
        "延长痛苦",
        "重启"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一个困难周期已走到尽头。接受结束可以让你停止重复伤害，并看见新的起点。",
        "love": "关系走到临界点，旧模式无法继续维持。",
        "career": "项目失败、合作终止或旧策略完全失效。",
        "advice": "先结束造成伤害的循环，再处理下一步。"
      },
      "reversed": {
        "summary": "恢复开始出现，但不愿承认结束可能让痛苦延长。",
        "love": "渐渐走出伤害，或继续拖着已结束的关系。",
        "career": "重建、寻找新方案，避免不断复活旧问题。",
        "advice": "先结束造成伤害的循环，再处理下一步。"
      }
    },
    "symbolism": "十剑与远方曙光象征彻底终止之后仍存在的新一天。",
    "image": "/images/cards/swords-10.svg",
    "reflection": "什么已经结束，却仍在占用你的生活？",
    "suitName": "宝剑",
    "numberLabel": "10",
    "symbol": "†",
    "name": "宝剑十",
    "summary": "一个困难周期已走到尽头。接受结束可以让你停止重复伤害，并看见新的起点。",
    "uprightKeywords": [
      "结束",
      "触底",
      "接受",
      "旧局终止"
    ],
    "reversedKeywords": [
      "复原",
      "抗拒结束",
      "延长痛苦",
      "重启"
    ],
    "uprightMeaning": "一个困难周期已走到尽头。接受结束可以让你停止重复伤害，并看见新的起点。",
    "reversedMeaning": "恢复开始出现，但不愿承认结束可能让痛苦延长。",
    "loveMeaning": "关系走到临界点，旧模式无法继续维持。",
    "careerMeaning": "项目失败、合作终止或旧策略完全失效。",
    "reversedLoveMeaning": "渐渐走出伤害，或继续拖着已结束的关系。",
    "reversedCareerMeaning": "重建、寻找新方案，避免不断复活旧问题。"
  },
  {
    "id": "swords-11",
    "number": 11,
    "arcana": "minor",
    "suit": "swords",
    "rank": "page",
    "nameEn": "Page of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "好奇",
        "观察",
        "学习",
        "消息"
      ],
      "reversed": [
        "流言",
        "草率表达",
        "过度警觉",
        "缺少实践"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "保持好奇并核实信息，新的知识会帮助你作出清楚判断。表达可以直接，也应考虑影响。",
        "love": "试探沟通、了解彼此与保持思想交流。",
        "career": "研究、写作、学习与调查带来新线索。",
        "advice": "先提一个好问题，再核实一条重要信息。"
      },
      "reversed": {
        "summary": "消息未经证实、言语太快或观察变成过度猜疑。",
        "love": "查探、争辩或用语言防御情感。",
        "career": "流言、资料错误或只有理论没有验证。",
        "advice": "先提一个好问题，再核实一条重要信息。"
      }
    },
    "symbolism": "迎风持剑的侍者象征敏锐观察、求知与未经磨炼的言语。",
    "image": "/images/cards/swords-11.svg",
    "reflection": "你需要进一步了解什么，才能停止猜测？",
    "suitName": "宝剑",
    "numberLabel": "P",
    "symbol": "†",
    "name": "宝剑侍者",
    "summary": "保持好奇并核实信息，新的知识会帮助你作出清楚判断。表达可以直接，也应考虑影响。",
    "uprightKeywords": [
      "好奇",
      "观察",
      "学习",
      "消息"
    ],
    "reversedKeywords": [
      "流言",
      "草率表达",
      "过度警觉",
      "缺少实践"
    ],
    "uprightMeaning": "保持好奇并核实信息，新的知识会帮助你作出清楚判断。表达可以直接，也应考虑影响。",
    "reversedMeaning": "消息未经证实、言语太快或观察变成过度猜疑。",
    "loveMeaning": "试探沟通、了解彼此与保持思想交流。",
    "careerMeaning": "研究、写作、学习与调查带来新线索。",
    "reversedLoveMeaning": "查探、争辩或用语言防御情感。",
    "reversedCareerMeaning": "流言、资料错误或只有理论没有验证。"
  },
  {
    "id": "swords-12",
    "number": 12,
    "arcana": "minor",
    "suit": "swords",
    "rank": "knight",
    "nameEn": "Knight of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "果断",
        "速度",
        "理念",
        "直进"
      ],
      "reversed": [
        "鲁莽",
        "好斗",
        "偏执",
        "思考不足"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "清楚的目标让行动迅速推进。勇于表达观点，同时确认事实与现实承受能力。",
        "love": "直接表达、快速推进，但需倾听对方节奏。",
        "career": "紧急执行、挑战旧规则与快速解决问题。",
        "advice": "在冲刺前停一分钟，确认事实、方向和影响。"
      },
      "reversed": {
        "summary": "过度自信或争强好胜让判断失去弹性，速度可能制造新问题。",
        "love": "争吵、压迫感或急于得到结论。",
        "career": "决策仓促、沟通激烈或忽视风险。",
        "advice": "在冲刺前停一分钟，确认事实、方向和影响。"
      }
    },
    "symbolism": "骑士迎风疾驰，象征被思想驱动的速度与单一目标。",
    "image": "/images/cards/swords-12.svg",
    "reflection": "你的坚定是否仍容得下新的事实？",
    "suitName": "宝剑",
    "numberLabel": "N",
    "symbol": "†",
    "name": "宝剑骑士",
    "summary": "清楚的目标让行动迅速推进。勇于表达观点，同时确认事实与现实承受能力。",
    "uprightKeywords": [
      "果断",
      "速度",
      "理念",
      "直进"
    ],
    "reversedKeywords": [
      "鲁莽",
      "好斗",
      "偏执",
      "思考不足"
    ],
    "uprightMeaning": "清楚的目标让行动迅速推进。勇于表达观点，同时确认事实与现实承受能力。",
    "reversedMeaning": "过度自信或争强好胜让判断失去弹性，速度可能制造新问题。",
    "loveMeaning": "直接表达、快速推进，但需倾听对方节奏。",
    "careerMeaning": "紧急执行、挑战旧规则与快速解决问题。",
    "reversedLoveMeaning": "争吵、压迫感或急于得到结论。",
    "reversedCareerMeaning": "决策仓促、沟通激烈或忽视风险。"
  },
  {
    "id": "swords-13",
    "number": 13,
    "arcana": "minor",
    "suit": "swords",
    "rank": "queen",
    "nameEn": "Queen of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "清醒",
        "独立",
        "界限",
        "诚实"
      ],
      "reversed": [
        "苛刻",
        "孤立",
        "怨怼",
        "冷漠"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "经验让你看得清楚。以诚实和明确边界保护自己，也让事实留有温度。",
        "love": "成熟沟通、尊重空间与直接表达需要。",
        "career": "分析、审校、顾问与清楚决策。",
        "advice": "说清事实和边界，也说出你希望保留的关系。"
      },
      "reversed": {
        "summary": "过去的伤可能让判断过于苛刻，独立不必等于拒绝接近。",
        "love": "冷言冷语、挑剔或旧伤阻碍信任。",
        "career": "批评过度、低估情绪影响或团队疏远。",
        "advice": "说清事实和边界，也说出你希望保留的关系。"
      }
    },
    "symbolism": "直立宝剑与伸出的手象征清晰判断和仍然开放的交流。",
    "image": "/images/cards/swords-13.svg",
    "reflection": "你能否用诚实表达界限，也允许自己被理解？",
    "suitName": "宝剑",
    "numberLabel": "Q",
    "symbol": "†",
    "name": "宝剑王后",
    "summary": "经验让你看得清楚。以诚实和明确边界保护自己，也让事实留有温度。",
    "uprightKeywords": [
      "清醒",
      "独立",
      "界限",
      "诚实"
    ],
    "reversedKeywords": [
      "苛刻",
      "孤立",
      "怨怼",
      "冷漠"
    ],
    "uprightMeaning": "经验让你看得清楚。以诚实和明确边界保护自己，也让事实留有温度。",
    "reversedMeaning": "过去的伤可能让判断过于苛刻，独立不必等于拒绝接近。",
    "loveMeaning": "成熟沟通、尊重空间与直接表达需要。",
    "careerMeaning": "分析、审校、顾问与清楚决策。",
    "reversedLoveMeaning": "冷言冷语、挑剔或旧伤阻碍信任。",
    "reversedCareerMeaning": "批评过度、低估情绪影响或团队疏远。"
  },
  {
    "id": "swords-14",
    "number": 14,
    "arcana": "minor",
    "suit": "swords",
    "rank": "king",
    "nameEn": "King of Swords",
    "element": "风",
    "keywords": {
      "upright": [
        "理性",
        "规则",
        "专业",
        "判断"
      ],
      "reversed": [
        "专断",
        "操纵",
        "冷酷",
        "滥权"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "用证据、规则与专业作出决定。成熟判断需要公平，也需要看见人的实际处境。",
        "love": "清楚承诺与理性沟通，重视对等尊重。",
        "career": "法律、管理、规划与专业评估适合登场。",
        "advice": "在作决定前，听取与自己立场不同的事实。"
      },
      "reversed": {
        "summary": "理性被用来压制他人，或你过度依赖规则而忽略现实。",
        "love": "情感疏离、控制或把观点当作唯一真相。",
        "career": "滥用权力、僵化流程或片面的专业意见。",
        "advice": "在作决定前，听取与自己立场不同的事实。"
      }
    },
    "symbolism": "正面持剑的国王象征专业权威、思想秩序与公平责任。",
    "image": "/images/cards/swords-14.svg",
    "reflection": "你的判断如何同时照顾事实、公平与人？",
    "suitName": "宝剑",
    "numberLabel": "K",
    "symbol": "†",
    "name": "宝剑国王",
    "summary": "用证据、规则与专业作出决定。成熟判断需要公平，也需要看见人的实际处境。",
    "uprightKeywords": [
      "理性",
      "规则",
      "专业",
      "判断"
    ],
    "reversedKeywords": [
      "专断",
      "操纵",
      "冷酷",
      "滥权"
    ],
    "uprightMeaning": "用证据、规则与专业作出决定。成熟判断需要公平，也需要看见人的实际处境。",
    "reversedMeaning": "理性被用来压制他人，或你过度依赖规则而忽略现实。",
    "loveMeaning": "清楚承诺与理性沟通，重视对等尊重。",
    "careerMeaning": "法律、管理、规划与专业评估适合登场。",
    "reversedLoveMeaning": "情感疏离、控制或把观点当作唯一真相。",
    "reversedCareerMeaning": "滥用权力、僵化流程或片面的专业意见。"
  },
  {
    "id": "pentacles-1",
    "number": 1,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "ace",
    "nameEn": "Ace of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "机会",
        "资源",
        "种子",
        "现实起点"
      ],
      "reversed": [
        "机会错失",
        "资源不足",
        "计划空泛",
        "延迟"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "一个可触摸的机会出现。耐心投入时间与资源，它会成长为稳定成果。",
        "love": "可靠的新关系、共同生活的实际起点。",
        "career": "工作邀请、资金、学习与长期项目的起步。",
        "advice": "明确投入、时间和回报预期，先种下第一步。"
      },
      "reversed": {
        "summary": "机会缺少条件，或尚未把想法落实为实际安排。",
        "love": "缺少现实投入，承诺难以落地。",
        "career": "资金不足、预算失误或机会需要进一步核实。",
        "advice": "明确投入、时间和回报预期，先种下第一步。"
      }
    },
    "symbolism": "云中之手托起星币，花园小径象征可培育的现实机会。",
    "image": "/images/cards/pentacles-1.svg",
    "reflection": "眼前哪个小机会值得长期照料？",
    "suitName": "星币",
    "numberLabel": "A",
    "symbol": "✥",
    "name": "星币王牌",
    "summary": "一个可触摸的机会出现。耐心投入时间与资源，它会成长为稳定成果。",
    "uprightKeywords": [
      "机会",
      "资源",
      "种子",
      "现实起点"
    ],
    "reversedKeywords": [
      "机会错失",
      "资源不足",
      "计划空泛",
      "延迟"
    ],
    "uprightMeaning": "一个可触摸的机会出现。耐心投入时间与资源，它会成长为稳定成果。",
    "reversedMeaning": "机会缺少条件，或尚未把想法落实为实际安排。",
    "loveMeaning": "可靠的新关系、共同生活的实际起点。",
    "careerMeaning": "工作邀请、资金、学习与长期项目的起步。",
    "reversedLoveMeaning": "缺少现实投入，承诺难以落地。",
    "reversedCareerMeaning": "资金不足、预算失误或机会需要进一步核实。"
  },
  {
    "id": "pentacles-2",
    "number": 2,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "two",
    "nameEn": "Two of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "协调",
        "弹性",
        "时间管理",
        "平衡"
      ],
      "reversed": [
        "超载",
        "失序",
        "财务波动",
        "无法兼顾"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "你正在协调多个责任，灵活安排比追求完美更有用。保持流动，也看清自己的容量。",
        "love": "在关系、工作与个人生活间分配时间。",
        "career": "多任务、现金流与排期需要灵活管理。",
        "advice": "选择一个优先级，给时间与资金留下缓冲。"
      },
      "reversed": {
        "summary": "太多任务或财务波动使平衡难以维持，需要明确取舍。",
        "love": "忽视关系、失约或双方优先级不一致。",
        "career": "预算混乱、任务过载或交付失控。",
        "advice": "选择一个优先级，给时间与资金留下缓冲。"
      }
    },
    "symbolism": "人物以无限符号连接两枚星币，海浪象征现实中的持续波动。",
    "image": "/images/cards/pentacles-2.svg",
    "reflection": "你可以减少哪件事，让生活重新有余地？",
    "suitName": "星币",
    "numberLabel": "2",
    "symbol": "✥",
    "name": "星币二",
    "summary": "你正在协调多个责任，灵活安排比追求完美更有用。保持流动，也看清自己的容量。",
    "uprightKeywords": [
      "协调",
      "弹性",
      "时间管理",
      "平衡"
    ],
    "reversedKeywords": [
      "超载",
      "失序",
      "财务波动",
      "无法兼顾"
    ],
    "uprightMeaning": "你正在协调多个责任，灵活安排比追求完美更有用。保持流动，也看清自己的容量。",
    "reversedMeaning": "太多任务或财务波动使平衡难以维持，需要明确取舍。",
    "loveMeaning": "在关系、工作与个人生活间分配时间。",
    "careerMeaning": "多任务、现金流与排期需要灵活管理。",
    "reversedLoveMeaning": "忽视关系、失约或双方优先级不一致。",
    "reversedCareerMeaning": "预算混乱、任务过载或交付失控。"
  },
  {
    "id": "pentacles-3",
    "number": 3,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "three",
    "nameEn": "Three of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "协作",
        "技艺",
        "专业",
        "共同建设"
      ],
      "reversed": [
        "分工不清",
        "质量问题",
        "缺少认可",
        "合作受阻"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "不同技能在共同目标下发挥作用。认真倾听专业意见，成果会在合作中变得可靠。",
        "love": "共同经营生活，愿意学习如何配合。",
        "career": "团队协作、技能学习、评审与高质量交付。",
        "advice": "说清目标、质量标准和每个人的职责。"
      },
      "reversed": {
        "summary": "缺少协作、标准不一致或贡献没有得到尊重。",
        "love": "投入不对等、彼此挑剔或不愿共同解决问题。",
        "career": "责任不明、沟通不足或专业意见被忽视。",
        "advice": "说清目标、质量标准和每个人的职责。"
      }
    },
    "symbolism": "工匠与两人讨论建筑，象征技能、协作和共同创造。",
    "image": "/images/cards/pentacles-3.svg",
    "reflection": "你们是否说清了各自擅长什么、需要什么？",
    "suitName": "星币",
    "numberLabel": "3",
    "symbol": "✥",
    "name": "星币三",
    "summary": "不同技能在共同目标下发挥作用。认真倾听专业意见，成果会在合作中变得可靠。",
    "uprightKeywords": [
      "协作",
      "技艺",
      "专业",
      "共同建设"
    ],
    "reversedKeywords": [
      "分工不清",
      "质量问题",
      "缺少认可",
      "合作受阻"
    ],
    "uprightMeaning": "不同技能在共同目标下发挥作用。认真倾听专业意见，成果会在合作中变得可靠。",
    "reversedMeaning": "缺少协作、标准不一致或贡献没有得到尊重。",
    "loveMeaning": "共同经营生活，愿意学习如何配合。",
    "careerMeaning": "团队协作、技能学习、评审与高质量交付。",
    "reversedLoveMeaning": "投入不对等、彼此挑剔或不愿共同解决问题。",
    "reversedCareerMeaning": "责任不明、沟通不足或专业意见被忽视。"
  },
  {
    "id": "pentacles-4",
    "number": 4,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "four",
    "nameEn": "Four of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "安全",
        "储蓄",
        "界限",
        "守成"
      ],
      "reversed": [
        "释放",
        "贪执",
        "财务不稳",
        "控制"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "保护资源有其价值，但安全感不应完全来自抓紧。判断哪些需要守住，哪些可以流动。",
        "love": "重视稳定，但需避免占有与过度保护。",
        "career": "储蓄、预算与风险控制有助建立基础。",
        "advice": "建立足够的安全缓冲，再允许一部分资源自由流动。"
      },
      "reversed": {
        "summary": "你开始愿意放松控制，也可能因害怕匮乏而抓得更紧。",
        "love": "控制、金钱分歧或终于愿意分享。",
        "career": "资源僵化、吝于投入或支出失去边界。",
        "advice": "建立足够的安全缓冲，再允许一部分资源自由流动。"
      }
    },
    "symbolism": "人物紧抱星币并踩住两枚，象征保护资源与被资源困住的两面性。",
    "image": "/images/cards/pentacles-4.svg",
    "reflection": "你是在保护安全，还是害怕失去而无法生活？",
    "suitName": "星币",
    "numberLabel": "4",
    "symbol": "✥",
    "name": "星币四",
    "summary": "保护资源有其价值，但安全感不应完全来自抓紧。判断哪些需要守住，哪些可以流动。",
    "uprightKeywords": [
      "安全",
      "储蓄",
      "界限",
      "守成"
    ],
    "reversedKeywords": [
      "释放",
      "贪执",
      "财务不稳",
      "控制"
    ],
    "uprightMeaning": "保护资源有其价值，但安全感不应完全来自抓紧。判断哪些需要守住，哪些可以流动。",
    "reversedMeaning": "你开始愿意放松控制，也可能因害怕匮乏而抓得更紧。",
    "loveMeaning": "重视稳定，但需避免占有与过度保护。",
    "careerMeaning": "储蓄、预算与风险控制有助建立基础。",
    "reversedLoveMeaning": "控制、金钱分歧或终于愿意分享。",
    "reversedCareerMeaning": "资源僵化、吝于投入或支出失去边界。"
  },
  {
    "id": "pentacles-5",
    "number": 5,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "five",
    "nameEn": "Five of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "匮乏",
        "困难",
        "被排除",
        "求助"
      ],
      "reversed": [
        "改善",
        "得到支持",
        "拒绝帮助",
        "持续困顿"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "现实困难与孤立感需要被正视。支持可能就在附近，不必因为羞耻而独自承受。",
        "love": "困难考验关系，需要实际支持和坦诚需求。",
        "career": "资金紧张、失业压力或资源缺口。",
        "advice": "列出可以联系的人与资源，先解决最紧急的实际需要。"
      },
      "reversed": {
        "summary": "帮助和改善开始出现，也要注意自己是否仍拒绝接纳。",
        "love": "疏离逐渐缓解，或双方都因匮乏感而封闭。",
        "career": "逐渐恢复、找到援助或缺少长期安排。",
        "advice": "列出可以联系的人与资源，先解决最紧急的实际需要。"
      }
    },
    "symbolism": "雪地中的人物经过亮着彩窗的建筑，象征匮乏与尚未接纳的支持。",
    "image": "/images/cards/pentacles-5.svg",
    "reflection": "你可以向谁提出一个明确而具体的求助？",
    "suitName": "星币",
    "numberLabel": "5",
    "symbol": "✥",
    "name": "星币五",
    "summary": "现实困难与孤立感需要被正视。支持可能就在附近，不必因为羞耻而独自承受。",
    "uprightKeywords": [
      "匮乏",
      "困难",
      "被排除",
      "求助"
    ],
    "reversedKeywords": [
      "改善",
      "得到支持",
      "拒绝帮助",
      "持续困顿"
    ],
    "uprightMeaning": "现实困难与孤立感需要被正视。支持可能就在附近，不必因为羞耻而独自承受。",
    "reversedMeaning": "帮助和改善开始出现，也要注意自己是否仍拒绝接纳。",
    "loveMeaning": "困难考验关系，需要实际支持和坦诚需求。",
    "careerMeaning": "资金紧张、失业压力或资源缺口。",
    "reversedLoveMeaning": "疏离逐渐缓解，或双方都因匮乏感而封闭。",
    "reversedCareerMeaning": "逐渐恢复、找到援助或缺少长期安排。"
  },
  {
    "id": "pentacles-6",
    "number": 6,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "six",
    "nameEn": "Six of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "给予",
        "接受",
        "公平",
        "资源交换"
      ],
      "reversed": [
        "不平等",
        "债务",
        "附带条件",
        "依赖"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "资源可以通过分享与接受形成良性循环。对等不一定是数量相同，而是彼此都被尊重。",
        "love": "互相支持、慷慨与公平付出。",
        "career": "资助、合作分配、合理薪酬与回馈。",
        "advice": "确认帮助的条件，也确认自己可以诚实表达需要。"
      },
      "reversed": {
        "summary": "帮助带有控制，或付出与接受长期失衡。",
        "love": "一方掌握资源权力，关系失去对等。",
        "career": "债务、薪酬不公或援助附带不合理条件。",
        "advice": "确认帮助的条件，也确认自己可以诚实表达需要。"
      }
    },
    "symbolism": "人物拿着天秤分配钱币，象征给予、接受与资源权力。",
    "image": "/images/cards/pentacles-6.svg",
    "reflection": "你们的交换是否让双方都有尊严和选择？",
    "suitName": "星币",
    "numberLabel": "6",
    "symbol": "✥",
    "name": "星币六",
    "summary": "资源可以通过分享与接受形成良性循环。对等不一定是数量相同，而是彼此都被尊重。",
    "uprightKeywords": [
      "给予",
      "接受",
      "公平",
      "资源交换"
    ],
    "reversedKeywords": [
      "不平等",
      "债务",
      "附带条件",
      "依赖"
    ],
    "uprightMeaning": "资源可以通过分享与接受形成良性循环。对等不一定是数量相同，而是彼此都被尊重。",
    "reversedMeaning": "帮助带有控制，或付出与接受长期失衡。",
    "loveMeaning": "互相支持、慷慨与公平付出。",
    "careerMeaning": "资助、合作分配、合理薪酬与回馈。",
    "reversedLoveMeaning": "一方掌握资源权力，关系失去对等。",
    "reversedCareerMeaning": "债务、薪酬不公或援助附带不合理条件。"
  },
  {
    "id": "pentacles-7",
    "number": 7,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "seven",
    "nameEn": "Seven of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "耐心",
        "评估",
        "积累",
        "等待收成"
      ],
      "reversed": [
        "投入无效",
        "焦躁",
        "拖延",
        "缺少回报"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "努力需要时间，阶段性停下来检查投入与回报。耐心不是无条件继续，而是有意识地等待。",
        "love": "关系稳步成长，需要讨论长期投入与期待。",
        "career": "长期项目、学习与投资进入评估阶段。",
        "advice": "设定一个复盘日期，用事实决定继续、调整或结束。"
      },
      "reversed": {
        "summary": "投入与回报不匹配，或因为焦虑而频繁打断长期积累。",
        "love": "付出没有回应、缺少耐心或方向不同。",
        "career": "低效投入、预算失衡或迟迟不愿止损。",
        "advice": "设定一个复盘日期，用事实决定继续、调整或结束。"
      }
    },
    "symbolism": "人物倚着工具看着作物，象征劳动之后的等待与成果评估。",
    "image": "/images/cards/pentacles-7.svg",
    "reflection": "继续投入的理由是什么，什么时候需要重新评估？",
    "suitName": "星币",
    "numberLabel": "7",
    "symbol": "✥",
    "name": "星币七",
    "summary": "努力需要时间，阶段性停下来检查投入与回报。耐心不是无条件继续，而是有意识地等待。",
    "uprightKeywords": [
      "耐心",
      "评估",
      "积累",
      "等待收成"
    ],
    "reversedKeywords": [
      "投入无效",
      "焦躁",
      "拖延",
      "缺少回报"
    ],
    "uprightMeaning": "努力需要时间，阶段性停下来检查投入与回报。耐心不是无条件继续，而是有意识地等待。",
    "reversedMeaning": "投入与回报不匹配，或因为焦虑而频繁打断长期积累。",
    "loveMeaning": "关系稳步成长，需要讨论长期投入与期待。",
    "careerMeaning": "长期项目、学习与投资进入评估阶段。",
    "reversedLoveMeaning": "付出没有回应、缺少耐心或方向不同。",
    "reversedCareerMeaning": "低效投入、预算失衡或迟迟不愿止损。"
  },
  {
    "id": "pentacles-8",
    "number": 8,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "eight",
    "nameEn": "Eight of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "练习",
        "专注",
        "技艺",
        "勤奋"
      ],
      "reversed": [
        "倦怠",
        "敷衍",
        "完美主义",
        "方向错误"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "技能来自专注练习。持续做小而正确的事，成果会比一次性的灵感更可靠。",
        "love": "通过日常投入经营关系，学习理解彼此。",
        "career": "技能训练、深度工作与专业成长。",
        "advice": "选择一个具体技能，用反馈驱动下一轮练习。"
      },
      "reversed": {
        "summary": "重复变成倦怠，或完美主义阻碍交付；也要确认努力方向值得。",
        "love": "工作挤占亲密、敷衍或投入只是形式。",
        "career": "质量不足、过劳或练习缺少有效反馈。",
        "advice": "选择一个具体技能，用反馈驱动下一轮练习。"
      }
    },
    "symbolism": "工匠逐一雕刻星币，象征专注、熟练与长期积累。",
    "image": "/images/cards/pentacles-8.svg",
    "reflection": "你今天可以练习什么，让明天的自己更有把握？",
    "suitName": "星币",
    "numberLabel": "8",
    "symbol": "✥",
    "name": "星币八",
    "summary": "技能来自专注练习。持续做小而正确的事，成果会比一次性的灵感更可靠。",
    "uprightKeywords": [
      "练习",
      "专注",
      "技艺",
      "勤奋"
    ],
    "reversedKeywords": [
      "倦怠",
      "敷衍",
      "完美主义",
      "方向错误"
    ],
    "uprightMeaning": "技能来自专注练习。持续做小而正确的事，成果会比一次性的灵感更可靠。",
    "reversedMeaning": "重复变成倦怠，或完美主义阻碍交付；也要确认努力方向值得。",
    "loveMeaning": "通过日常投入经营关系，学习理解彼此。",
    "careerMeaning": "技能训练、深度工作与专业成长。",
    "reversedLoveMeaning": "工作挤占亲密、敷衍或投入只是形式。",
    "reversedCareerMeaning": "质量不足、过劳或练习缺少有效反馈。"
  },
  {
    "id": "pentacles-9",
    "number": 9,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "nine",
    "nameEn": "Nine of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "独立",
        "丰盛",
        "自律",
        "享受成果"
      ],
      "reversed": [
        "过度工作",
        "依赖",
        "虚荣",
        "成果受损"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "独立与自律带来值得享受的生活。你可以为自己的成果感到满足，也继续守护选择自由。",
        "love": "尊重独立、成熟吸引与高质量相处。",
        "career": "专业成果、财务独立与稳定品质。",
        "advice": "享受已经取得的成果，确认它仍服务于你想要的生活。"
      },
      "reversed": {
        "summary": "外表富足却缺少自由，或为了证明价值而一直不敢休息。",
        "love": "依赖资源、比较条件或难以分享生活。",
        "career": "过度工作、消费证明身份或依赖他人认可。",
        "advice": "享受已经取得的成果，确认它仍服务于你想要的生活。"
      }
    },
    "symbolism": "花园中的人物与驯鸟象征独立、自律和精心培育的丰盛。",
    "image": "/images/cards/pentacles-9.svg",
    "reflection": "你的成果是否也给你带来了自由？",
    "suitName": "星币",
    "numberLabel": "9",
    "symbol": "✥",
    "name": "星币九",
    "summary": "独立与自律带来值得享受的生活。你可以为自己的成果感到满足，也继续守护选择自由。",
    "uprightKeywords": [
      "独立",
      "丰盛",
      "自律",
      "享受成果"
    ],
    "reversedKeywords": [
      "过度工作",
      "依赖",
      "虚荣",
      "成果受损"
    ],
    "uprightMeaning": "独立与自律带来值得享受的生活。你可以为自己的成果感到满足，也继续守护选择自由。",
    "reversedMeaning": "外表富足却缺少自由，或为了证明价值而一直不敢休息。",
    "loveMeaning": "尊重独立、成熟吸引与高质量相处。",
    "careerMeaning": "专业成果、财务独立与稳定品质。",
    "reversedLoveMeaning": "依赖资源、比较条件或难以分享生活。",
    "reversedCareerMeaning": "过度工作、消费证明身份或依赖他人认可。"
  },
  {
    "id": "pentacles-10",
    "number": 10,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "ten",
    "nameEn": "Ten of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "传承",
        "家庭资源",
        "长期稳定",
        "共同财富"
      ],
      "reversed": [
        "家族冲突",
        "财务不稳",
        "旧制度",
        "价值分歧"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "长期成果与群体支持形成稳固基础。留意如何让资源、经验与责任健康传承。",
        "love": "长期承诺、家庭支持与共同生活规划。",
        "career": "稳定事业、长期资产、组织建设与经验传承。",
        "advice": "清楚约定资源、责任和边界，让长期稳定有可持续的基础。"
      },
      "reversed": {
        "summary": "家庭、资产或制度出现分歧，稳定需要重新谈清价值与边界。",
        "love": "家族干预、金钱争议或传统期待压迫关系。",
        "career": "制度老化、资产风险或代际观点冲突。",
        "advice": "清楚约定资源、责任和边界，让长期稳定有可持续的基础。"
      }
    },
    "symbolism": "长者、家庭与建筑象征跨代资源、共同成果和传承。",
    "image": "/images/cards/pentacles-10.svg",
    "reflection": "你想留下的，是资源还是一种更好的生活方式？",
    "suitName": "星币",
    "numberLabel": "10",
    "symbol": "✥",
    "name": "星币十",
    "summary": "长期成果与群体支持形成稳固基础。留意如何让资源、经验与责任健康传承。",
    "uprightKeywords": [
      "传承",
      "家庭资源",
      "长期稳定",
      "共同财富"
    ],
    "reversedKeywords": [
      "家族冲突",
      "财务不稳",
      "旧制度",
      "价值分歧"
    ],
    "uprightMeaning": "长期成果与群体支持形成稳固基础。留意如何让资源、经验与责任健康传承。",
    "reversedMeaning": "家庭、资产或制度出现分歧，稳定需要重新谈清价值与边界。",
    "loveMeaning": "长期承诺、家庭支持与共同生活规划。",
    "careerMeaning": "稳定事业、长期资产、组织建设与经验传承。",
    "reversedLoveMeaning": "家族干预、金钱争议或传统期待压迫关系。",
    "reversedCareerMeaning": "制度老化、资产风险或代际观点冲突。"
  },
  {
    "id": "pentacles-11",
    "number": 11,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "page",
    "nameEn": "Page of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "学习",
        "实际消息",
        "机会",
        "起步"
      ],
      "reversed": [
        "拖延",
        "贪玩",
        "缺少计划",
        "机会未落实"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "认真学习并关注现实条件，新机会会在耐心中变得可用。起点虽小，也值得好好照料。",
        "love": "缓慢而可靠的靠近，愿意认真了解彼此。",
        "career": "学习、入职、考试准备与项目起步。",
        "advice": "制定一周的练习与投入计划，记录真实进展。"
      },
      "reversed": {
        "summary": "好计划停留在纸面，或缺少持续学习与必要投入。",
        "love": "行动太少、缺少承诺或现实安排未落实。",
        "career": "散漫、拖延、预算不足或缺少基础技能。",
        "advice": "制定一周的练习与投入计划，记录真实进展。"
      }
    },
    "symbolism": "侍者专注端详星币，象征学习、耐心与现实机会的初步掌握。",
    "image": "/images/cards/pentacles-11.svg",
    "reflection": "哪个小步骤可以把愿望变成实际进展？",
    "suitName": "星币",
    "numberLabel": "P",
    "symbol": "✥",
    "name": "星币侍者",
    "summary": "认真学习并关注现实条件，新机会会在耐心中变得可用。起点虽小，也值得好好照料。",
    "uprightKeywords": [
      "学习",
      "实际消息",
      "机会",
      "起步"
    ],
    "reversedKeywords": [
      "拖延",
      "贪玩",
      "缺少计划",
      "机会未落实"
    ],
    "uprightMeaning": "认真学习并关注现实条件，新机会会在耐心中变得可用。起点虽小，也值得好好照料。",
    "reversedMeaning": "好计划停留在纸面，或缺少持续学习与必要投入。",
    "loveMeaning": "缓慢而可靠的靠近，愿意认真了解彼此。",
    "careerMeaning": "学习、入职、考试准备与项目起步。",
    "reversedLoveMeaning": "行动太少、缺少承诺或现实安排未落实。",
    "reversedCareerMeaning": "散漫、拖延、预算不足或缺少基础技能。"
  },
  {
    "id": "pentacles-12",
    "number": 12,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "knight",
    "nameEn": "Knight of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "可靠",
        "勤勉",
        "耐心",
        "责任"
      ],
      "reversed": [
        "停滞",
        "固执",
        "倦怠",
        "过度保守"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "稳步推进比急于求成更可靠。认真完成日常承诺，长期成果会随之建立。",
        "love": "可靠陪伴、稳定承诺与实际照顾。",
        "career": "长期执行、流程维护与稳健管理。",
        "advice": "守住节奏，同时安排一次小幅度改进。"
      },
      "reversed": {
        "summary": "谨慎变成不动，或重复劳动让你失去弹性与热情。",
        "love": "关系缺少变化、过分保守或只有责任没有情感。",
        "career": "效率低、拒绝创新或工作变成机械坚持。",
        "advice": "守住节奏，同时安排一次小幅度改进。"
      }
    },
    "symbolism": "静止的马与耕地象征耐心、踏实与对现实责任的持续投入。",
    "image": "/images/cards/pentacles-12.svg",
    "reflection": "你的坚持如何同时保有弹性与生命力？",
    "suitName": "星币",
    "numberLabel": "N",
    "symbol": "✥",
    "name": "星币骑士",
    "summary": "稳步推进比急于求成更可靠。认真完成日常承诺，长期成果会随之建立。",
    "uprightKeywords": [
      "可靠",
      "勤勉",
      "耐心",
      "责任"
    ],
    "reversedKeywords": [
      "停滞",
      "固执",
      "倦怠",
      "过度保守"
    ],
    "uprightMeaning": "稳步推进比急于求成更可靠。认真完成日常承诺，长期成果会随之建立。",
    "reversedMeaning": "谨慎变成不动，或重复劳动让你失去弹性与热情。",
    "loveMeaning": "可靠陪伴、稳定承诺与实际照顾。",
    "careerMeaning": "长期执行、流程维护与稳健管理。",
    "reversedLoveMeaning": "关系缺少变化、过分保守或只有责任没有情感。",
    "reversedCareerMeaning": "效率低、拒绝创新或工作变成机械坚持。"
  },
  {
    "id": "pentacles-13",
    "number": 13,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "queen",
    "nameEn": "Queen of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "务实",
        "滋养",
        "舒适",
        "资源管理"
      ],
      "reversed": [
        "过度承担",
        "失衡",
        "依赖",
        "自我忽视"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "用实际行动照顾生活，也让资源服务于身心舒适。成熟滋养包括对自己的照顾。",
        "love": "温暖可靠、经营家庭与实际支持。",
        "career": "财务管理、稳定工作与改善生活环境。",
        "advice": "把自己的休息和需要，也写进资源安排里。"
      },
      "reversed": {
        "summary": "过度照料别人或担忧现实，让你忽视自己的需要。",
        "love": "照顾变成义务、资源依赖或被琐事耗尽。",
        "career": "工作生活失衡、过度承担或财务焦虑。",
        "advice": "把自己的休息和需要，也写进资源安排里。"
      }
    },
    "symbolism": "花园中王后托着星币，兔子象征生命力、滋养与务实丰盛。",
    "image": "/images/cards/pentacles-13.svg",
    "reflection": "你的生活安排里，是否也有你自己的位置？",
    "suitName": "星币",
    "numberLabel": "Q",
    "symbol": "✥",
    "name": "星币王后",
    "summary": "用实际行动照顾生活，也让资源服务于身心舒适。成熟滋养包括对自己的照顾。",
    "uprightKeywords": [
      "务实",
      "滋养",
      "舒适",
      "资源管理"
    ],
    "reversedKeywords": [
      "过度承担",
      "失衡",
      "依赖",
      "自我忽视"
    ],
    "uprightMeaning": "用实际行动照顾生活，也让资源服务于身心舒适。成熟滋养包括对自己的照顾。",
    "reversedMeaning": "过度照料别人或担忧现实，让你忽视自己的需要。",
    "loveMeaning": "温暖可靠、经营家庭与实际支持。",
    "careerMeaning": "财务管理、稳定工作与改善生活环境。",
    "reversedLoveMeaning": "照顾变成义务、资源依赖或被琐事耗尽。",
    "reversedCareerMeaning": "工作生活失衡、过度承担或财务焦虑。"
  },
  {
    "id": "pentacles-14",
    "number": 14,
    "arcana": "minor",
    "suit": "pentacles",
    "rank": "king",
    "nameEn": "King of Pentacles",
    "element": "土",
    "keywords": {
      "upright": [
        "稳定",
        "丰盛",
        "管理",
        "长期担当"
      ],
      "reversed": [
        "物质至上",
        "固执",
        "贪婪",
        "管理失衡"
      ]
    },
    "meaning": {
      "upright": {
        "summary": "长期经验让资源得到稳健管理。成果值得享受，也需要责任、公平和持续维护。",
        "love": "可靠承诺、实际照顾与长远规划。",
        "career": "经营、财务管理与长期战略获得成熟支持。",
        "advice": "让资源成为支持选择的工具，而不是评价人的唯一标准。"
      },
      "reversed": {
        "summary": "安全感只剩物质证明，或固执与贪婪使资源失去健康流动。",
        "love": "以金钱控制关系、缺少情感表达或过度重视条件。",
        "career": "僵化管理、资源滥用或忽略风险与人的需要。",
        "advice": "让资源成为支持选择的工具，而不是评价人的唯一标准。"
      }
    },
    "symbolism": "葡萄藤、城堡与牛纹王座象征丰盛、稳固和对土地资源的掌握。",
    "image": "/images/cards/pentacles-14.svg",
    "reflection": "你的成功如何让自己和他人的生活更稳妥？",
    "suitName": "星币",
    "numberLabel": "K",
    "symbol": "✥",
    "name": "星币国王",
    "summary": "长期经验让资源得到稳健管理。成果值得享受，也需要责任、公平和持续维护。",
    "uprightKeywords": [
      "稳定",
      "丰盛",
      "管理",
      "长期担当"
    ],
    "reversedKeywords": [
      "物质至上",
      "固执",
      "贪婪",
      "管理失衡"
    ],
    "uprightMeaning": "长期经验让资源得到稳健管理。成果值得享受，也需要责任、公平和持续维护。",
    "reversedMeaning": "安全感只剩物质证明，或固执与贪婪使资源失去健康流动。",
    "loveMeaning": "可靠承诺、实际照顾与长远规划。",
    "careerMeaning": "经营、财务管理与长期战略获得成熟支持。",
    "reversedLoveMeaning": "以金钱控制关系、缺少情感表达或过度重视条件。",
    "reversedCareerMeaning": "僵化管理、资源滥用或忽略风险与人的需要。"
  }
];
export const cardsById: Record<string, Card> = Object.fromEntries(tarotCards.map(card => [card.id, card]));
export function getCard(id: string): Card {
  const card = cardsById[id];
  if (!card) throw new Error(`未知塔罗牌：${id}`);
  return card;
}
