
export interface Legend {
  id: string;
  name: {
    pt: string;
    zh: string;
  };
  summary: {
    pt: string;
    zh: string;
  };
  content: {
    pt: string;
    zh: string;
  };
  culturalBackground: {
    pt: string;
    zh: string;
  };
  imageUrl: string;
}

export interface StateData {
  id: string;
  name: string;
  legends: Legend[];
}

export const highlightedStates = ['Bahia', 'Amazonas', 'São Paulo', 'Minas Gerais', 'Maranhão'];

export const legendsData: Record<string, StateData> = {
  'Amazonas': {
    id: 'AM',
    name: 'Amazonas',
    legends: [
      {
        id: 'curupira',
        name: { pt: 'Curupira', zh: '库鲁皮拉' },
        summary: {
          pt: 'O guardião das florestas que tem os pés virados para trás.',
          zh: '森林的守护者，双脚向后长。'
        },
        content: {
          pt: 'O Curupira é um personagem do folclore brasileiro. É um demônio da floresta que protege a fauna e a flora. Ele possui cabelos vermelhos e pés virados para trás, o que engana os caçadores que tentam seguir suas pegadas.',
          zh: '库鲁皮拉是巴西民间传说的经典人物。他是森林的守护神，保护动植物。他有一头红发，最奇特的是双脚向后长，这让试图追踪他的猎人感到困惑，因为脚印总是指向相反的方向。'
        },
        culturalBackground: {
          pt: 'A lenda do Curupira tem origens indígenas e reflete a preocupação com a preservação ambiental e o respeito à natureza.',
          zh: '库鲁皮拉的传说源于原住民文化，反映了对环境保护的关注以及对自然的敬畏。'
        },
        imageUrl: 'https://picsum.photos/seed/curupira/800/600'
      },
      {
        id: 'iara',
        name: { pt: 'Iara', zh: '伊阿拉' },
        summary: {
          pt: 'A senhora das águas que encanta os homens com seu canto.',
          zh: '水之圣母，用歌声魅惑男人的美丽人鱼。'
        },
        content: {
          pt: 'Iara, também conhecida como "Mãe d\'Água", é uma sereia de beleza irresistível que vive nos rios da Amazônia. Ela atrai os homens para as profundezas dos rios com seu canto hipnotizante.',
          zh: '伊阿拉也被称为“水之母”，是一位居住在亚马逊河流中的绝世美人鱼。她拥有无法抗拒的美貌和催眠般的歌声，会将男子引入河底深处。'
        },
        culturalBackground: {
          pt: 'Representa o fascínio e os perigos dos grandes rios amazônicos, sendo uma fusão de mitos indígenas com a tradição das sereias europeias.',
          zh: '她象征着亚马逊大河的魅力与危险，是原住民神话与欧洲人鱼传说融合的产物。'
        },
        imageUrl: 'https://picsum.photos/seed/iara/800/600'
      }
    ]
  },
  'Bahia': {
    id: 'BA',
    name: 'Bahia',
    legends: [
      {
        id: 'cuca',
        name: { pt: 'Cuca', zh: '库卡' },
        summary: {
          pt: 'Uma bruxa velha com corpo de jacaré que rouba crianças desobedientes.',
          zh: '一位长着鳄鱼身体的老女巫，会抓走不听话的小孩。'
        },
        content: {
          pt: 'A Cuca é uma bruxa muito velha com aparência assustadora, frequentemente descrita como tendo pele de jacaré. Segundo a lenda, ela dorme apenas uma noite a cada sete anos e é usada para assustar crianças que não querem dormir.',
          zh: '库卡是一位外貌恐怖的老女巫，通常被描述为拥有鳄鱼皮般的身体。传说她每七年才睡一晚，父母常用来吓唬那些不按时睡觉或不听话的孩子。'
        },
        culturalBackground: {
          pt: 'Derivada da "Coca" ibérica, a Cuca se tornou um dos ícones mais famosos do folclore brasileiro, especialmente através da literatura de Monteiro Lobato.',
          zh: '源于伊比利亚半岛的“Coca”传说，库卡已成为巴西民间传说的重要符号，尤其是通过作家蒙特罗·洛巴托的作品广为人知。'
        },
        imageUrl: 'https://picsum.photos/seed/cuca/800/600'
      },
      {
        id: 'lobisomem',
        name: { pt: 'Lobisomem', zh: '狼人' },
        summary: {
          pt: 'Um homem que se transforma em lobo nas noites de lua cheia.',
          zh: '在满月之夜变身为狼的人。'
        },
        content: {
          pt: 'Diz a lenda que o oitavo filho homem de uma família de sete filhas, ao completar treze anos, transforma-se em lobisomem em noites de sexta-feira de lua cheia, correndo por sete cemitérios ou encruzilhadas.',
          zh: '传说如果一个家庭在连续生了七个女儿后生下第八个儿子，那么这个男孩在十三岁后的满月周五夜晚会变身为狼人，穿梭于七个墓地或十字路口。'
        },
        culturalBackground: {
          pt: 'A lenda do lobisomem é universal, mas no Brasil rural ganhou contornos específicos ligados ao catolicismo e à estrutura familiar.',
          zh: '狼人的传说是世界性的，但在巴西农村地区，它融入了特定宗教氛围和家庭结构的色彩。'
        },
        imageUrl: 'https://picsum.photos/seed/werewolf/800/600'
      }
    ]
  },
  'São Paulo': {
    id: 'SP',
    name: 'São Paulo',
    legends: [
      {
        id: 'saci',
        name: { pt: 'Saci-Pererê', zh: '萨希-贝雷雷' },
        summary: {
          pt: 'Um menino de uma perna só que usa um gorro vermelho e fuma cachimbo.',
          zh: '一个独腿的、戴着红帽子、抽着烟斗的调皮男孩。'
        },
        content: {
          pt: 'O Saci-Pererê é um dos personagens mais populares. É um menino negro de apenas uma perna, que usa um gorro vermelho que lhe dá poderes mágicos. Ele adora fazer travessuras, como esconder objetos e assustar cavalos.',
          zh: '萨希-贝雷雷是巴西最广为人知的民俗人物。他是一个独腿男孩，戴着一顶赋予他魔力的红帽子。他喜欢恶作剧，比如藏起家里的东西或者惊吓马匹。'
        },
        culturalBackground: {
          pt: 'Originalmente de origem guarani (indígena), a lenda incorporou elementos da cultura africana (a perda da perna nas lutas de escravos) e europeia.',
          zh: '最初源于瓜拉尼原住民，后来融入了非洲文化（传说是在奴隶斗争中失去了一条腿）和欧洲元素。'
        },
        imageUrl: 'https://picsum.photos/seed/saci/800/600'
      },
      {
        id: 'corpo-seco',
        name: { pt: 'Corpo-Seco', zh: '枯尸' },
        summary: {
          pt: 'Uma alma penada que foi rejeitada pelo céu e pelo inferno.',
          zh: '一个被天堂和地狱同时拒绝的游魂。'
        },
        content: {
          pt: 'O Corpo-Seco foi um homem extremamente cruel em vida. Após sua morte, a própria terra o rejeitou devido à sua maldade. Ele vaga pelo mundo como um cadáver ressecado, assustando as pessoas nas estradas.',
          zh: '“枯尸”生前是一个极其残忍的人。死后，由于他的邪恶，连大地都拒绝埋葬他的尸体。他以枯萎尸体的形态在世间游荡，在乡间小路上惊吓过往行人。'
        },
        culturalBackground: {
          pt: 'Muito comum no interior de São Paulo e Minas Gerais, esta lenda serve como um conto moral sobre as consequências da maldade extrema.',
          zh: '在圣保罗州和米纳斯吉拉斯州的内陆地区非常流行，这是一个关于极端邪恶后果的道德教诫故事。'
        },
        imageUrl: 'https://picsum.photos/seed/corpo-seco/800/600'
      }
    ]
  },
  'Minas Gerais': {
    id: 'MG',
    name: 'Minas Gerais',
    legends: [
      {
        id: 'mula-sem-cabeca',
        name: { pt: 'Mula-sem-cabeça', zh: '无头骡子' },
        summary: {
          pt: 'Uma mula que solta fogo pelo pescoço e corre assustando a todos.',
          zh: '一头颈部喷火的骡子，奔跑时惊吓所有人。'
        },
        content: {
          pt: 'A lenda diz que uma mulher que tem um relacionamento com um padre transforma-se em uma mula sem cabeça nas noites de quinta para sexta-feira. No lugar da cabeça, ela tem uma chama de fogo.',
          zh: '传说与牧师有情感关系的女性，会在周四深夜到周五凌晨变身为无头骡子。在原本长头的地方，燃烧着熊熊烈火。'
        },
        culturalBackground: {
          pt: 'Uma lenda de forte influência católica, usada antigamente para controlar os comportamentos morais e sociais das mulheres.',
          zh: '受天主教影响深远的传说，在过去常被用于规范女性的道德和社会行为。'
        },
        imageUrl: 'https://picsum.photos/seed/mule/800/600'
      },
      {
        id: 'boitata',
        name: { pt: 'Boitatá', zh: '波伊塔塔' },
        summary: {
          pt: 'Uma cobra de fogo que protege as matas contra incêndios.',
          zh: '一条保护森林免受火灾侵害的烈焰巨蛇。'
        },
        content: {
          pt: 'O Boitatá é uma cobra de fogo gigantesca com olhos enormes que brilham como faróis. Ela protege os campos e florestas contra aqueles que ateiam fogo criminoso na natureza.',
          zh: '波伊塔塔是一条巨大的火蛇，它的眼睛像灯塔一样闪闪发光。它是旷野和森林的保护者，会惩罚那些蓄意破坏自然和纵火的人。'
        },
        culturalBackground: {
          pt: 'De origem tupi-guarani, representa o fenômeno do "fogo-fátuo" e simboliza a proteção ecológica das terras brasileiras.',
          zh: '源于图皮-瓜拉尼原住民，代表了“狐火（磷火）”现象，象征着对巴西土地的生态保护。'
        },
        imageUrl: 'https://picsum.photos/seed/fire-snake/800/600'
      }
    ]
  },
  'Maranhão': {
    id: 'MA',
    name: 'Maranhão',
    legends: [
      {
        id: 'bumba-meu-boi',
        name: { pt: 'Bumba-meu-boi', zh: '奔巴我的牛' },
        summary: {
          pt: 'A história do boi ressuscitado que é celebrada em todo o Maranhão.',
          zh: '讲述被复活的神牛的故事，是马拉尼昂州最重要的节庆主题。'
        },
        content: {
          pt: 'A lenda narra a história de Pai Francisco, que mata o melhor boi da fazenda para satisfazer o desejo de sua mulher grávida, Catirina. O boi é depois ressuscitado com a ajuda de curandeiros, gerando uma grande festa.',
          zh: '故事讲述了黑人奴隶弗朗西斯科神父为了满足怀孕妻子卡提琳娜想吃牛舌的愿望，杀死了庄园里最好的牛。最后在巫医的帮助下，牛奇迹般地复活了，大家为此举行了盛大的庆典。'
        },
        culturalBackground: {
          pt: 'Esta é a base do maior festival cultural do Maranhão, unindo influências indígenas, africanas e europeias em uma rica tradição teatral e musical.',
          zh: '这是马拉尼昂州最大的文化节日“牛祭”的基础，融合了原住民、非洲和欧洲的影响，形成了丰富的戏剧和音乐传统。'
        },
        imageUrl: 'https://picsum.photos/seed/bumba/800/600'
      },
      {
        id: 'serpente-da-ilha',
        name: { pt: 'Serpente da Ilha', zh: '岛屿巨蛇' },
        summary: {
          pt: 'Uma serpente gigantesca que dorme sob a cidade de São Luís.',
          zh: '一条沉睡在圣路易斯市地底的巨大神蛇。'
        },
        content: {
          pt: 'Diz a lenda que uma serpente colossal vive nas galerias subterrâneas de São Luís. Ela cresce continuamente e, no dia em que sua cauda encontrar sua cabeça, a serpente acordará e destruirá a ilha.',
          zh: '传说在圣路易斯市的地下迷宫中生活着一条庞大无比的巨蛇。它一直在生长，当它的尾巴碰到自己的头的那一天，巨蛇就会醒来并摧毁整座岛屿。'
        },
        culturalBackground: {
          pt: 'A lenda faz parte do imaginário urbano de São Luís e reflete o mistério e a arquitetura colonial da cidade.',
          zh: '这一传说已成为圣路易斯城市记忆的一部分，反映了这座城市殖民地时期的神秘感。'
        },
        imageUrl: 'https://picsum.photos/seed/serpent/800/600'
      }
    ]
  }
};
