export interface MeditationBenefit {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  backgroundImage: string;
  musicUrl: string;
  breathingPattern: {
    inhale: number;
    hold: number;
    exhale: number;
  };
  content: {
    intro: string;
    benefits: string[];
    instructions: string;
  };
}

export const meditationBenefits: MeditationBenefit[] = [
  {
    id: "filed",
    title: "田園",
    description: "田園の風景を感じながら、心を落ち着かせる",
    image:
      "/filed.avif",
    backgroundColor: "",
    backgroundImage:
      "/filed.avif",
    musicUrl: "/audio/ocean-waves.mp3",
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 6,
    },
    content: {
      intro:
        "静かな田園風景に身をゆだね、心身が落ち着いた瞑想、睡眠を促進",
      benefits: [
        "緑視率による副交感神経優位",
        "深い呼吸で頭をクリアに",
        "自然音が集中を支援",
        "季節変化への気づき"
      ],
      instructions:
        "背筋を伸ばして楽な姿勢で座り、呼吸に意識を向けましょう。ゆったりとしたリズムに身を任せ、深いリラックス状態へと導きます。",
    },
  },
  {
    id: "fire",
    title: "焚き火",
    description: "焚き火の温もりを感じながら、心をリセットする",
    image:
      "/fire.avif",
    backgroundColor: "",
    backgroundImage:
      "/fire.avif",
    musicUrl: "/audio/forest-sounds.mp3",
    breathingPattern: {
      inhale: 4,
      hold: 2,
      exhale: 4,
    },
    content: {
      intro:
        "焚き火のぬくもりと、ぱちぱちと弾ける音に身をゆだね、心の奥にある静けさを感じてみましょう。",
      benefits: [
        "1/f ゆらぎでα波アップ",
        "安心感と安定感を高める",
        "思考の整理を促す",
        "孤独感の軽減",
      ],
      instructions:
        "目を閉じて、焚き火の音を感じながら深く呼吸しましょう。吸って、止めて、吐いて。火のリズムに合わせて、心も整えていきましょう。",
    },
  },
  {
    id: "forest",
    title: "森林",
    description: "森林の静けさを感じながら、心を整える",
    image:
      "/forest.avif",
    backgroundColor: "from-green-900 via-emerald-800 to-teal-900",
    backgroundImage:
      "/forest.avif",
    musicUrl: "/audio/gentle-rain.mp3",
    breathingPattern: {
      inhale: 5,
      hold: 3,
      exhale: 5,
    },
    content: {
      intro:
        "森の静けさと木々の香りを想像しながら、自然の息づかいとともに深く呼吸してみましょう。",
      benefits: [
        "フィトンチッドで免疫アップ",
        "木漏れ日でコルチゾール低減",
        "鳥声・葉擦れ音で注意回復",
        "免疫力の向上（森林浴効果）",
      ],
      instructions:
        "目を閉じて、風が木々を揺らす音や鳥の声に耳を澄ませてください。呼吸のリズムに合わせて、森と一体になる感覚を味わいましょう。",
    },
  },
  {
    id: "ocean",
    title: "浜辺",
    description: "浜辺の波の音を感じながら、心を解放する",
    image:
      "/ocean.avif",
    backgroundColor: "",
    backgroundImage:
      "/ocean.avif",
    musicUrl: "/audio/night-ambience.mp3",
    breathingPattern: {
      inhale: 4,
      hold: 7,
      exhale: 8,
    },
    content: {
      intro:
        "打ち寄せる波のリズムに心を重ね、砂浜の穏やかさを感じながら深く呼吸しましょう。",
      benefits: [
        "波音で自律神経を整える",
        "心拍の安定",
        "集中力の向上",
        "自然との一体感の促進",
      ],
      instructions:
        "体の力を抜いて、ゆったりと呼吸します。波の音に意識を向けながら、吸う・止める・吐くのリズムを繰り返してみましょう。",
    },
  },
  {
    id: "star",
    title: "星空",
    description: "星空の美しさを感じながら、心を広げる",
    image:
      "/star.avif",
    backgroundColor: "from-cyan-900 via-blue-800 to-indigo-900",
    backgroundImage:
      "/star.avif",
    musicUrl: "/audio/mountain-breeze.mp3",
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 4,
    },
    content: {
      intro:
        "満天の星空の下で、日々の喧騒から離れ、静かな宇宙に心を広げていきましょう。",
      benefits: [
        "視野を広げる心の余裕",
        "孤独感の癒し",
        "創造力の活性化",
        "深い安心感",
      ],
      instructions:
        "深呼吸をしながら、星の瞬きを思い描いてください。呼吸とともに、思考が空に溶けていくような感覚を大切にしましょう。",
    },
  },
];
