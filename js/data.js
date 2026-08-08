// ============================================================
// 微信读书 — 模拟数据 (示例数据，后续可替换为真实 API 数据)
// ============================================================

const WEREAD_DATA = {
  // ---- 用户信息 ----
  user: {
    name: "读书人",
    avatar: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4da.png",
    vid: 583802764,
    joinDate: "2021-03-15"
  },

  // ---- 阅读统计 (对应 /readdata/detail 的回包) ----
  readData: {
    overall: {
      totalReadTime: 576000,       // 秒 → 160小时
      readDays: 320,
      dayAverageReadTime: 1800,    // 秒 → 30分钟
      readStat: [
        { stat: "读过", counts: "86本" },
        { stat: "读完", counts: "42本" },
        { stat: "阅读", counts: "320天" },
        { stat: "笔记", counts: "1280条" }
      ],
      readRate: 78,
      wrReadTime: 449280,         // 文字阅读秒数
      wrListenTime: 126720,       // 听书秒数
      registTime: 1615766400      // 2021-03-15
    },
    annually: {
      totalReadTime: 288000,      // 80小时
      readDays: 186,
      dayAverageReadTime: 1548,
      readTimes: {
        // 按月分桶 (1-12月) — 秒数
        "1735660800": 21600,  // 1月 6h
        "1738339200": 28800,  // 2月 8h
        "1740931200": 18000,  // 3月 5h
        "1743609600": 32400,  // 4月 9h
        "1746201600": 25200,  // 5月 7h
        "1748793600": 36000,  // 6月 10h
        "1751472000": 43200,  // 7月 12h
        "1754150400": 39600,  // 8月 11h
        "1756828800": 21600,  // 9月 6h
        "1759417600": 14400,  // 10月 4h
        "1762105600": 18000,  // 11月 5h
        "1764700800": 10800   // 12月 3h
      },
      readLongest: [
        { book: { bookId: "3300045871", title: "三体", author: "刘慈欣", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png" }, readTime: 43200 },
        { book: { bookId: "25462482", title: "活着", author: "余华", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png" }, readTime: 28800 },
        { book: { bookId: "3300022611", title: "百年孤独", author: "加西亚·马尔克斯", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png" }, readTime: 25200 },
        { book: { bookId: "25461213", title: "围城", author: "钱钟书", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png" }, readTime: 21600 },
        { book: { bookId: "3300041451", title: "白夜行", author: "东野圭吾", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d7.png" }, readTime: 18000 }
      ],
      preferCategory: [
        { categoryTitle: "小说文学", val: 100, readingTime: 86400, readingCount: 18 },
        { categoryTitle: "历史", val: 72, readingTime: 62208, readingCount: 8 },
        { categoryTitle: "哲学宗教", val: 58, readingTime: 50112, readingCount: 6 },
        { categoryTitle: "社科", val: 45, readingTime: 38880, readingCount: 5 },
        { categoryTitle: "科幻", val: 40, readingTime: 34560, readingCount: 4 },
        { categoryTitle: "传记", val: 30, readingTime: 25920, readingCount: 3 },
        { categoryTitle: "心理学", val: 25, readingTime: 21600, readingCount: 3 },
        { categoryTitle: "艺术", val: 15, readingTime: 12960, readingCount: 2 }
      ],
      preferTimeWord: "偏好夜间阅读",
      preferTime: [
        1800, 1200, 900, 600, 300, 200,     // 6-11点
        1800, 2400, 2100, 1800, 1500, 1200, // 12-17点
        3600, 5400, 6300, 7200, 5400, 3600, // 18-23点
        2700, 2100                            // 0-1点 (按 6点开始的数组顺序，共24个值)
      ],
      preferAuthor: [
        { name: "刘慈欣", count: 5, readTime: "15小时30分钟" },
        { name: "余华", count: 4, readTime: "12小时0分钟" },
        { name: "东野圭吾", count: 6, readTime: "10小时45分钟" },
        { name: "钱钟书", count: 2, readTime: "6小时0分钟" },
        { name: "马尔克斯", count: 3, readTime: "7小时0分钟" }
      ],
      preferPublisher: [
        { name: "重庆出版社", count: 8 },
        { name: "人民文学出版社", count: 6 },
        { name: "上海译文出版社", count: 5 },
        { name: "南海出版公司", count: 4 }
      ]
    },
    monthly: {
      totalReadTime: 39600,  // 11小时
      readDays: 22,
      dayAverageReadTime: 1800,
      compare: 0.15,
      readTimes: {
        "1754150400": 3600,
        "1754236800": 5400,
        "1754323200": 1800,
        "1754409600": 2700,
        "1754496000": 3600,
        "1754582400": 7200,
        "1754668800": 4500,
        "1754755200": 3600,
        "1754841600": 1800,
        "1754928000": 2700,
        "1755014400": 5400,
        "1755100800": 3600,
        "1755187200": 2700,
        "1755273600": 1800,
        "1755360000": 3600,
        "1755446400": 2700,
        "1755532800": 5400,
        "1755619200": 3600,
        "1755705600": 1800,
        "1755792000": 2700,
        "1755878400": 3600,
        "1755964800": 2700
      }
    }
  },

  // ---- 书架 (对应 /shelf/sync 的回包) ----
  shelf: {
    bookCount: 86,
    books: [
      { bookId: "3300045871", title: "三体", author: "刘慈欣", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png", category: "科幻", readUpdateTime: 1755619200, finishReading: 1, secret: 0, isTop: 1 },
      { bookId: "25462482", title: "活着", author: "余华", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png", category: "小说文学", readUpdateTime: 1755446400, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300022611", title: "百年孤独", author: "加西亚·马尔克斯", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png", category: "小说文学", readUpdateTime: 1755273600, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25461213", title: "围城", author: "钱钟书", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png", category: "小说文学", readUpdateTime: 1755100800, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300041451", title: "白夜行", author: "东野圭吾", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d7.png", category: "小说文学", readUpdateTime: 1754928000, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25462587", title: "平凡的世界", author: "路遥", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png", category: "小说文学", readUpdateTime: 1754755200, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300008871", title: "人类简史", author: "尤瓦尔·赫拉利", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4da.png", category: "历史", readUpdateTime: 1754582400, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25462345", title: "万历十五年", author: "黄仁宇", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d4.png", category: "历史", readUpdateTime: 1754409600, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300033471", title: "苏菲的世界", author: "乔斯坦·贾德", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d3.png", category: "哲学宗教", readUpdateTime: 1754236800, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "25461287", title: "思考，快与慢", author: "丹尼尔·卡尼曼", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png", category: "心理学", readUpdateTime: 1754064000, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "3300047581", title: "球状闪电", author: "刘慈欣", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png", category: "科幻", readUpdateTime: 1753891200, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25462190", title: "边城", author: "沈从文", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png", category: "小说文学", readUpdateTime: 1753718400, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300019871", title: "沉默的大多数", author: "王小波", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png", category: "社科", readUpdateTime: 1753545600, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25461156", title: "霍乱时期的爱情", author: "马尔克斯", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d7.png", category: "小说文学", readUpdateTime: 1753372800, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "3300028871", title: "局外人", author: "加缪", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png", category: "小说文学", readUpdateTime: 1753200000, finishReading: 1, secret: 1, isTop: 0 },
      { bookId: "25460987", title: "设计心理学", author: "唐纳德·诺曼", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4da.png", category: "艺术", readUpdateTime: 1753027200, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "3300045671", title: "小王子", author: "圣埃克苏佩里", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png", category: "小说文学", readUpdateTime: 1752854400, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25461567", title: "了不起的盖茨比", author: "菲茨杰拉德", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png", category: "小说文学", readUpdateTime: 1752681600, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300041871", title: "嫌疑人X的献身", author: "东野圭吾", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png", category: "小说文学", readUpdateTime: 1752508800, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "25461987", title: "曾国藩传", author: "张宏杰", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d7.png", category: "传记", readUpdateTime: 1752336000, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "3300034571", title: "枪炮、病菌与钢铁", author: "贾雷德·戴蒙德", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png", category: "历史", readUpdateTime: 1752163200, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "25461789", title: "月亮与六便士", author: "毛姆", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png", category: "小说文学", readUpdateTime: 1751990400, finishReading: 1, secret: 0, isTop: 0 },
      { bookId: "3300023451", title: "理想国", author: "柏拉图", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png", category: "哲学宗教", readUpdateTime: 1751817600, finishReading: 0, secret: 0, isTop: 0 },
      { bookId: "25461345", title: "国富论", author: "亚当·斯密", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png", category: "社科", readUpdateTime: 1751644800, finishReading: 0, secret: 0, isTop: 0 }
    ],
    albums: [
      { albumInfo: { albumId: "12345678", name: "三体宇宙（广播剧）", authorName: "喜马拉雅", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f508.png", trackCount: 180, finishStatus: "已完结", finish: 1 }, albumInfoExtra: { secret: 0, isTop: 0 } },
      { albumInfo: { albumId: "23456789", name: "人类简史（有声书）", authorName: "中信出版社", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f3a7.png", trackCount: 42, finishStatus: "已完结", finish: 1 }, albumInfoExtra: { secret: 0, isTop: 0 } }
    ],
    mp: { name: "文章收藏" }
  },

  // ---- 笔记概览 (对应 /user/notebooks 的回包) ----
  notebooks: {
    totalBookCount: 28,
    totalNoteCount: 1280,
    books: [
      {
        bookId: "3300045871",
        book: { title: "三体", author: "刘慈欣", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d6.png" },
        reviewCount: 15,
        noteCount: 42,
        bookmarkCount: 8,
        readingProgress: 100,
        markedStatus: 1
      },
      {
        bookId: "25462482",
        book: { title: "活着", author: "余华", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d5.png" },
        reviewCount: 8,
        noteCount: 36,
        bookmarkCount: 5,
        readingProgress: 100,
        markedStatus: 1
      },
      {
        bookId: "3300022611",
        book: { title: "百年孤独", author: "加西亚·马尔克斯", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d8.png" },
        reviewCount: 12,
        noteCount: 28,
        bookmarkCount: 3,
        readingProgress: 100,
        markedStatus: 1
      },
      {
        bookId: "25461213",
        book: { title: "围城", author: "钱钟书", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d9.png" },
        reviewCount: 10,
        noteCount: 22,
        bookmarkCount: 2,
        readingProgress: 100,
        markedStatus: 1
      },
      {
        bookId: "3300041451",
        book: { title: "白夜行", author: "东野圭吾", cover: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f4d7.png" },
        reviewCount: 6,
        noteCount: 18,
        bookmarkCount: 4,
        readingProgress: 100,
        markedStatus: 1
      }
    ]
  },

  // ---- 笔记内容详情 (对应 /book/bookmarklist 和 /review/list/mine) ----
  noteDetails: {
    "3300045871": {
      book: { title: "三体", author: "刘慈欣" },
      bookmarks: [
        { chapterUid: 1, chapterTitle: "第一章 科学边界", markText: "你的无畏来源于无知。", createTime: 1755619200, range: "900-2004" },
        { chapterUid: 1, chapterTitle: "第一章 科学边界", markText: "我们都是阴沟里的虫子，但我还是想仰望星空。", createTime: 1755532800, range: "3000-3200" },
        { chapterUid: 5, chapterTitle: "第五章 宇宙闪烁", markText: "弱小和无知不是生存的障碍，傲慢才是。", createTime: 1755446400, range: "500-680" },
        { chapterUid: 12, chapterTitle: "第十二章 黑暗森林", markText: "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。", createTime: 1755360000, range: "1200-1400" },
        { chapterUid: 12, chapterTitle: "第十二章 黑暗森林", markText: "给岁月以文明，而不是给文明以岁月。", createTime: 1755273600, range: "2400-2600" },
        { chapterUid: 18, chapterTitle: "第十八章 死神永生", markText: "没有永恒的敌人或朋友，只有永恒的利益。", createTime: 1755100800, range: "800-1000" }
      ],
      reviews: [
        { content: "这段黑暗森林法则的描写，让我重新思考了宇宙文明的本质。也许文明之间的沉默不是冷漠，而是自我保护的生存智慧。", createTime: 1755360000, chapterName: "第十二章 黑暗森林", star: 5 },
        { content: "刘慈欣对人性的洞察和宏大的宇宙观结合得天衣无缝，这不仅仅是一部科幻小说，更是一部哲学思辨之作。", createTime: 1755100800, chapterName: "", star: 5 }
      ]
    },
    "25462482": {
      book: { title: "活着", author: "余华" },
      bookmarks: [
        { chapterUid: 1, chapterTitle: "第一章", markText: "人是为了活着本身而活着，而不是为了活着之外的任何事物而活着。", createTime: 1754582400, range: "200-400" },
        { chapterUid: 3, chapterTitle: "第三章", markText: "没有什么比时间更具有说服力了，因为时间无需通知我们就可以改变一切。", createTime: 1754496000, range: "1500-1700" },
        { chapterUid: 5, chapterTitle: "第五章", markText: "你千万别糊涂，死人都还想活过来，你一个大活人怎么能去死呢？", createTime: 1754409600, range: "900-1100" },
        { chapterUid: 8, chapterTitle: "第八章", markText: "以笑的方式哭，在死亡的伴随下活着。", createTime: 1754323200, range: "300-450" }
      ],
      reviews: [
        { content: "余华用最朴素的语言写出了最震撼人心的故事。福贵的一生，是中国几代人苦难的缩影。", createTime: 1754323200, chapterName: "", star: 5 }
      ]
    },
    "3300022611": {
      book: { title: "百年孤独", author: "加西亚·马尔克斯" },
      bookmarks: [
        { chapterUid: 1, chapterTitle: "第一章", markText: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。", createTime: 1753891200, range: "100-300" },
        { chapterUid: 3, chapterTitle: "第三章", markText: "过去都是假的，回忆是一条没有归途的路。", createTime: 1753718400, range: "500-700" },
        { chapterUid: 7, chapterTitle: "第七章", markText: "只有水和泥土，这世上的美好才得以存在。", createTime: 1753545600, range: "800-1000" },
        { chapterUid: 15, chapterTitle: "第十五章", markText: "生命中曾经有过的所有灿烂，终究都需要用寂寞来偿还。", createTime: 1753372800, range: "1200-1400" }
      ],
      reviews: [
        { content: "马尔克斯的魔幻现实主义，让孤独成为了一种宿命。布恩迪亚家族的七代轮回，是对整个拉丁美洲历史的隐喻。", createTime: 1753372800, chapterName: "", star: 5 },
        { content: "开头那句话是文学史上最伟大的开篇之一，时间在回忆中流转，命运在孤独中轮回。", createTime: 1753891200, chapterName: "第一章", star: 5 }
      ]
    },
    "25461213": {
      book: { title: "围城", author: "钱钟书" },
      bookmarks: [
        { chapterUid: 1, chapterTitle: "第一章", markText: "城外的人想进去，城里的人想出来。", createTime: 1752854400, range: "200-400" },
        { chapterUid: 3, chapterTitle: "第三章", markText: "婚姻是一座围城，城外的人想进去，城里的人想出来。", createTime: 1752681600, range: "500-700" },
        { chapterUid: 5, chapterTitle: "第五章", markText: "不受教育的人，因为不识字，上人的当；受教育的人，因为识了字，上印刷品的当。", createTime: 1752508800, range: "300-500" }
      ],
      reviews: [
        { content: "钱钟书的讽刺与幽默，至今读来依然犀利。围城不只是一座城，更是一种人生困境的隐喻。", createTime: 1752508800, chapterName: "", star: 4 }
      ]
    },
    "3300041451": {
      book: { title: "白夜行", author: "东野圭吾" },
      bookmarks: [
        { chapterUid: 1, chapterTitle: "第一章", markText: "我的天空里没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳。", createTime: 1751990400, range: "100-300" },
        { chapterUid: 5, chapterTitle: "第五章", markText: "世上有两样东西不可直视，一是太阳，二是人心。", createTime: 1751817600, range: "500-700" },
        { chapterUid: 10, chapterTitle: "第十章", markText: "枪鱼会情不自禁地寻求阴暗，而那阴暗的心，是绝望的别名。", createTime: 1751644800, range: "800-1000" }
      ],
      reviews: [
        { content: "东野圭吾最黑暗也最深情的作品。亮司和雪穗，相互依存又相互毁灭，如同一株双生花。", createTime: 1751644800, chapterName: "", star: 5 }
      ]
    }
  },

  // ---- 热门划线 (对应 /book/bestbookmarks) ----
  bestBookmarks: {
    "3300045871": [
      { markText: "弱小和无知不是生存的障碍，傲慢才是。", totalCount: 12800 },
      { markText: "我们都是阴沟里的虫子，但我还是想仰望星空。", totalCount: 9600 },
      { markText: "给岁月以文明，而不是给文明以岁月。", totalCount: 8200 },
      { markText: "宇宙就是一座黑暗森林，每个文明都是带枪的猎人。", totalCount: 7500 },
      { markText: "你的无畏来源于无知。", totalCount: 6300 }
    ]
  }
};

// ---- 工具函数 ----
function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return hours + "小时" + (minutes > 0 ? minutes + "分钟" : "");
  return minutes + "分钟";
}

function formatTimestamp(ts) {
  if (!ts) return "";
  const d = new Date(ts * 1000);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function getMonthLabel(ts) {
  const d = new Date(ts * 1000);
  return (d.getMonth() + 1) + "月";
}
