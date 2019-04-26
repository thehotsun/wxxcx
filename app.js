//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userName: '',
    text: {
      文学诗歌: [
        {
          title: '正气歌',
          detail:
            '天地有正气，杂然赋流形。下则为河岳，上则为日星。於人曰浩然，沛乎塞苍冥。皇路当清夷，含和吐明庭。时穷节乃见，一一垂丹青。在齐太史简，在晋董狐笔。在秦张良椎，在汉苏武节。为严将军头，为嵇侍中血。为张睢阳齿，为颜常山舌。或为辽东帽，清操厉冰雪。或为出师表，鬼神泣壮烈。或为渡江楫，慷慨吞胡羯。或为击贼笏，逆竖头破裂。是气所磅礴，凛烈万古存。当其贯日月，生死安足论。地维赖以立，天柱赖以尊。三纲实系命，道义为之根。嗟予遘阳九，隶也实不力。楚囚缨其冠，传车送穷北。鼎镬甘如饴，求之不可得。阴房阗鬼火，春院闭天黑。牛骥同一皂，鸡栖凤凰食。一朝蒙雾露，分作沟中瘠。如此再寒暑，百疠自辟易。嗟哉沮洳场，为我安乐国。岂有他缪巧，阴阳不能贼。顾此耿耿在，仰视浮云白。悠悠我心悲，苍天曷有极。哲人日已远，典刑在夙昔。风檐展书读，古道照颜色。'
        },
        {
          title: '定风波',
          detail:
            '莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴'
        },
        {
          title: '将进酒',
          detail:
            '君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不复醒。 古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。'
        },
        {
          title: '梦游天姥吟留别',
          detail:
            '海客谈瀛洲，烟涛微茫信难求。 越人语天姥，云霞明灭或可睹。天姥连天向天横，势拔五岳掩赤城。天台四万八千丈，对此欲倒东南倾。我欲因之梦吴越，一夜飞度镜湖月。 湖月照我影，送我至剡溪。谢公宿处今尚在，渌水荡漾清猿啼。 脚著谢公屐，身登青云梯。半壁见海日，空中闻天鸡。 千岩万转路不定，迷花倚石忽已暝。熊咆龙吟殷岩泉，栗深林兮惊层巅。 云青青兮欲雨，水澹澹兮生烟。列缺霹雳，丘峦崩摧。洞天石扉，訇然中开。青冥浩荡不见底，日月照耀金银台。霓为衣兮风为马，云之君兮纷纷而来下。虎鼓瑟兮鸾回车，仙之人兮列如麻。忽魂悸以魄动，恍惊起而时之枕席，失向来之烟霞。世间行乐亦如此，古来万事东流水。别君去兮何时还？且放白鹿青崖间。须行即骑访名山。安能摧眉折腰事权贵，使我不得开心颜！'
        }
      ],
      '哲学片段（命题）': [
        {
          title: '神',
          detail:
            '接着他就论证说，人们对于神的性质是意见分歧的，例如有人认为他是有身体的，又有人认为他是没有身体的。我们既然对他没有任何的经验，所以我们就不能知道他的属性。神的存在并不是自明的，所以才需要证明。同时他还有一个比较混乱的论证，指出这样的证明乃是不可能的。其次，他就谈到了罪恶这一问题，并结论说：“那些积极肯定神存在的人，就不能避免陷于一种不虔敬。因为如果他们说神统御着万物，那末他们就把他当成是罪恶事物的创作者了；另一方面，如果他们说神仅只统御着某些事物或者不统御任何事物；那末他们就不得不把神弄成是心胸狭隘的或者是软弱无能的了，而这样做便显然是一种十足的不虔敬。'
        },
        { title: '' },
        { title: '' }
      ],
      知识: [
        {
          title: '世界语系分类',
          detail:
            '印欧语系是最大的语系，下分印度、伊朗、日耳曼、罗曼、斯拉夫、波罗的海等语族。\n印度语族包括梵语、印地语、巴利语、旁遮普语、信德语、孟加拉语等。\n伊朗语族包括波斯语、库尔德语、普什图语、帕米尔语等。\n日耳曼语族包括英语、德语、荷兰语、斯堪的纳维亚半岛(北欧)各主要语言。\n罗曼语族包括法语、意大利语、西班牙语、葡萄牙语和罗马尼亚语。\n斯拉夫语族有俄语、保加利亚语、波兰语。\n波罗的海语族包括拉脱维亚语和立陶宛语。\n汉藏语系下分汉语和藏缅、壮侗、苗瑶等语族，包括汉语、藏语、缅甸语、克伦语、壮语、苗语、瑶语等。\n阿尔泰语系下分突厥、蒙古、通古斯三个语族。\n突厥语族包括突厥诸语言以及俄罗斯境内的楚瓦什语，蒙古语族包括蒙古语等，通古斯语族包括埃文基语等。\n闪含语系又称亚非语系。下分闪语族和含语族。前者包括阿拉伯语、希伯来语(犹太人)等，后者包括古埃及语、豪萨语等。\n德拉维达语系印度南部的语言都属于这一语系，包括泰卢固语、泰米尔语、比哈尔语、马拉亚兰语等。\n高加索语系这一语系的语言分布在高加索一带，主要的语言有格鲁吉亚语、车臣语等。\n乌拉尔语系下分芬兰语族和乌戈尔语族。前者包括芬兰语、爱沙尼亚语等，后者包括匈牙利语、曼西语等。\n其他语系此外还有一些语系，如非洲的尼日尔—刚果语系、沙里—尼罗语系、科伊桑语系，美洲的爱斯基摩—阿留申语系以及一些印第安语系，大洋洲的马来波利尼西亚语系（南岛语系）和密克罗尼西亚语系。达罗毗图语系（印度半岛南部）、南亚语系（中南半岛南部）。需要指出的是，世界上有些语言，从谱系上看，不属于任何语系。'
        }
        // },
        // { title: '' },
        // {
        //   title: ''
        // }
      ],
      文明语录: [
        {
          title: '远古时代',
          detail:
            '［制陶］没有人把泥土弄湿了之后置之不管，好像砖就能神奇地自己造出来一样。——普鲁塔克［制陶］泥土在好匠人手里一定会很开心。——珍内特 费奇［畜牧］如果天堂没有狗，那我宁愿去狗死后去的地方。——维尔 罗格［畜牧］我喜欢猪，狗仰视人，猫蔑视人，只有猪是平视我们。——温斯顿 丘吉尔［采矿］还有谁比矿工的老婆更值得信任呢？——梅尔 特拉维斯［采矿］当你发现你在坑里了，就别再挖了。——维尔 罗格［航海］大船可以去远处探险，而小船不应该远离海岸。——本杰明 富兰克林［航海］不是在岸上让我感觉无味，而是海上生活更美好。——弗朗西斯 德雷克 爵士［占星］我不信星座，因为我们射手座生性多疑。——亚瑟 查理斯 克拉克［占星］不懂占星学的外科医生不是好医生。——希波克拉底｛希波克拉底，公元前段子手｝［灌溉］成千上万的人离了爱情也活下来了，但没人离了水还能活下来。—— W H 奥登 ［灌溉］有足够的韧性为土地造林或灌溉的人对国家的贡献不亚于一个征服者。——约翰汤姆森 爵士［书写］写作意味着分享，是人类本能的一种状态：分享想法，观点，意见。——保罗科尔赫 ［书写］写作很简单，你把不该写的词都划去就行。——马克吐温［弓箭］我向空中射了一箭，箭落在地上，我也不知道落在哪了。——亨利 沃兹沃［弓箭］当你射向目标的箭划在空中时，邪恶之力可能也会感到困惑吧。——乔治 卡林［石工］当每个人雕刻石材、竖起石柱、切开琉璃时，我们知道我们在建造一个比我们自己大的多的东西。——伍冰枝［石工］如果说一场残酷的战争会把一尊石像推翻，内讧则能把整个城池荡平。——威廉莎士比亚 ［青铜器］青铜器是反射外形的镜子，是反射心灵的酒。——埃斯库罗斯［青铜器］我想造出流放百世的经典，而青铜器就恰能千年不朽。——理查德 麦克唐纳［车轮］轮子有时候转的慢，但它也是在转。——洛恩 迈克尓斯［车轮］别总是重新造轮子，做个轮位对准就够了。——安东尼 D 安哥罗'
        },
        {
          title: '古典时代',
          detail:
            '［天体导航］我只要一艘船，和一颗为她掌舵的星。——约翰美斯菲尔德 ［天体导航］设定航线时应该对照天体，而不是来往船只的灯光。——奥马尔布拉德利 ［货币］财富不是来自占有，而是来自节制。——艾比克蒂塔［货币］钱，如果没有带给你快乐，至少让你舒服地悲伤。——海伦 格里 布朗［骑术］马背上的时光没有一分钟是浪费的。——温斯顿 丘吉尔［骑术］马上的人在精神和肉体上都更高大。——约翰 史坦倍克［铁器］主让我们失去铁，然后升高温度把我们中的一些人炼成钢。——玛丽 奥斯蒙 ［铁器］ 每个事物都有极限，比如铁是不能变成金子的。——马克吐温［造船术］我想不出什么情况能把一艘船弄沉了。。。现代造船技术已经克服了这点。——EJ 史密斯，泰坦尼克号船长［造船术］一个水手和永恒之间只有一块舢板的距离。——托马斯 吉本斯［数学］没有数学你什么都干不了。我们身边都是数学，我们身边都是数字。——夏昆塔拉戴维 ［数学］让我从头再学一遍的话，我会听柏拉图的，先学数学。——伽利略［建筑学］用心创造，用精神建造。——克里斯 贾米［建筑学］构成宇宙的四元素是火，水，石头和塑胶。——大卫 巴里［工程学］一个人的“魔术”只是另一个人的工程。——罗伯特 海莱茵［工程学］普通人认为，如果一个东西不会坏，就不用去修了。工程师认为，如果一个东西不会坏，说明功能还没加够。——斯科特亚当斯'
        },
        {
          title: '中古时代',
          detail:
            '［军事战术］战术就是对你所有的资源物尽其用。——梭尓 阿林斯基［军事战术］战略需要的是思考，战术需要的是观察。——马科斯 尤伟［学徒制］在一个没有大师诞生的领域，我们都是学徒。——海明威［学徒制］教徒弟没什么好方法，我就用两个工具：案例和唠叨。——雷蒙 斯尼奇［马镫］世界上没有比马镫更简单，但更能灾难性地影响世界的发明了。——林 怀特 ［马镫］在马镫和地面之间，我乞求了慈悲，我见证了慈悲。——威廉 卡姆登 ［机械学］我想世界是一台巨大的机器，机器没有多余的零件的，你知道，它们的零件数量总是刚刚好卡布里特｛参考电影《雨果》｝ ［机械学］不仅机器会垮掉，人也会。——格里高利 本福特［教育］教育的目的就是把你的心灵从空无变成开放。——马尔科姆 福布斯［教育］受过教育的一个表现，就是善待一个你所不接受的观点。——亚里士多德 ［军事工程］开火－建造－战斗。——美国16工程旅的座右铭 ［军事工程］战事中越多的科学介入，战地就越需要工程师，上个战争中我们的工兵远远不够。——蒙哥马利 ［城堡］路上有石头？我会把它们都捡起来，用来盖我的城堡。——尼莫 诺克斯 ［城堡］如果看到一座围绕迷雾的城堡，你一定要走过去，拥抱那个神奇的梦。——迈赫迈特穆莱特 伊丹'
        },
        {
          title: '文艺复兴时代',
          detail:
            '［制图］如果你的行动启迪别人做更多创想、得更多学识、做更多实践、成更多改变，那么你就是一个制图师。——约翰昆西 亚当斯 ［制图］不是所有游荡的人都迷路了。——J J R 托尔金 ［量产］人们可以定制任意颜色的Model T福特轿车，只要它是黑色的。——亨利 福特 ［量产］不能被标称、打包、量产的唯有真相和艺术。——麦迪 鲁  ［银行业］如果你欠银元，那是你的问题；如果你欠银行100万美元，那是银行的问题。——约翰保罗 盖蒂 ［银行业］有天我看到一个银行上写着“24小时存款”，但是我没这么多时间。——斯蒂文莱特 ［火药］火药的真正用处是把所有人都变得高大。——托马斯 卡莱尔［火药］人类是一种军事性动物，伴随火药繁荣起来，并且热衷游行。——菲力 巴莱［印刷术］一支笔不如一把剑更强，但一台印刷机也许比一个攻城器更重。几个字，就可以改变很多。——泰瑞普莱切 ［印刷术］火药之于战争，正如印刷术之于人心。——温德尔 菲尔普斯［方帆］很少有人能靠近自然界的每一样东西，但一个帆船可以做到这点。——阿兰 威尔 ［方帆］不是高耸的桅杆让船行走，而是看不见的风使船移动。——英国谚语［天文学］天文学驱使人们仰望星空，引导我们从这个世界去另一个世界。——柏拉图 ［天文学］当一个人不是天文学家时，天文学对他才更有趣。—— ［冶金］一开始赫菲斯托斯做了一把巨大的盾。。。他在盾上铸造了两座城市。——荷马 ［冶金］不要评判一个人，除非你站在他的铁匠铺里用他的锤子打铁。——雷克 莱尔顿 ［攻城战术］其次伐兵，其下攻城。——孙子 ［攻城战术］最浪漫的花开在攻城器扬起的烟雾里。——梅尔斯 卡梅伦'
        },
        {
          title: '工业时代',
          detail:
            '［工业化］我觉得人类在工业革命伊始犯了一个严重的错误，那就是跳过人手而依赖机械。人们需要用手来感受创意。——安德尔诺顿［工业化］暴力经济学的关键词就是：城市化、工业化、集中化、效率、数量、速度。——EF 舒马赫［科学原理］不能被检验的主张、无法证伪的断言是虚伪的无意义的，无论它们的价值是否带给我们灵感，或刺激我们的想象。——卡尔萨根 ［科学原理］如果事实与理论不符，改变事实。——爱因斯坦［弹道学］我们推测发生了什么，但不对此深究，直到弹道学验证了它。——约翰 哈森［弹道学］跪下祈祷吧，我也不知道对谁，有这么一个“弹道守护圣徒”吗？——亚当 沙维奇［军事科学］无论策略有多么优美，你还是得偶尔看看结果。——温斯顿 丘吉尔［军事科学］一个人，在想好要在战争中获取什么以及如何实施战争之前，都不应该发动战争，甚至是思考发动战争。——克劳塞维茨［蒸汽机］人类是否从蒸汽机带来的科学进步中获益，这还是个有争议的话题。——温斯顿丘吉尔 ［蒸汽机］比起蒸汽机欠科学来说，还是科学欠蒸汽机更多。——劳伦斯 亨德森［公共卫生］过去的200年中，没有任何一项公共健康领域的发明，比“马桶”的发明拯救了更多的人。——希尔维亚勃维尔［公共卫生］除了公共卫生、医药、教育、酿酒、公共秩序、修建道路、淡水系统、公共健康。。。之外，古罗马哪还留下了什么东西给我们呢？——格雷厄姆查普曼 ［经济学］经济学是一门不是很尊重人们愿望的学科。——赫鲁晓夫［经济学］我们普通人是走路或者坐火车来的，经济学家们不是，他们是从“架构”中过来的。——撒切尔夫人［膛线］用扳机说话声音更响。——克莱格 保罗［膛线］不要批评一个步枪手，除非穿着他的鞋子走一英里，这样他就赤脚了而你已经在射程之外了。——第二枪靶公司'
        },
        {
          title: '近代',
          detail:
            '［航空］一旦一个人尝试过飞行，他就会在地上走路时时常仰望天空，看着他曾去的地方并且渴望再次回到那儿。——列昂纳多达芬奇［航空］如果你从一个楼梯平台（landing）走出去，那是一个好的楼梯平台（landing）；但你如果第二天坐飞机的话，那么昨天的那个楼梯平台就是个绝好的楼梯平台。——查克叶格［可更换配件］为了让机器运转得流畅而可预测，它的配件一定要是标准的并且可替换的。——查尔斯爱森斯坦［可更换配件］我们中的很多人对待汽车比对待自己身体还要好，然而汽车有可以更换的配件。——BJ 帕摩 ［钢铁］最好的钢不总是最闪亮的。——［钢铁］世界上三样东西最hard，钢、钻石，和了解一个人自己。——本杰明 富兰克林［电力］如果不是电的发明，我们都得点着蜡烛看电视。——乔治 戈贝尔［电力］也许是本杰明 富兰克林发明的电，但是赚钱的却是发明电表的人。——艾尔 威尔逊［无线电］没有无线电，世界是聋的。——尔奈斯特 雅伯［无线电］广播是心灵（mind）的剧场，电视是无脑（mindless）的剧场。——史蒂芬 阿伦［化学］化学是物理学中脏的那部分。——彼得 勒斯［化学］化学家一般没有结巴。如果有的话，他一定会非常笨拙，因为他总有一天要说这样的词：methylethylamylophenylium（甲基乙基戊基苯酚）。——威廉克鲁斯［内燃机］现在的汽车没比我们小时候的样子进步多少，当你把它拆开，里面还是一个内燃机。——黛娜布鲁蒂尼［内燃机］我一直认为，内燃机代替马匹是人类历史上非常暗淡无光的里程碑。——温斯顿丘吉尔'
        },
        {
          title: '原子时代',
          detail:
            '［高级航空］喷气式飞机是非常经济和快捷，但是，我的老天，我们为此失去了多少乐趣、牺牲了多少闲情逸致，来进行效率的赛跑啊。——金吉罗杰斯 ［高级航空］如果上帝真想让人们飞起来，他应该让我们更容易到达机场。——乔治温特尔 ［火箭］火箭科学被神话了，和它真实的难度不成比例。——约翰 卡马克［火箭］当你发射火箭时，你并不是让它飞起来，某种意义上说你只是把它挂了起来。——迈克尔P 安德森 ［高级弹道学］未受教育的勇敢在受过教育的子弹面前毫无用处。——乔治 巴顿［高级弹道学］目标定为月亮，如果射偏了，你好歹可能还会打到颗星星。——克莱门特思通 ［协同作战］为了一件事去战斗总比没有目的地活着好。——乔治 巴顿［协同作战］战争中最重要的无法计算的因素就是人的意志。——里德尔 哈特［塑料］在物质的诗意等级里，塑料是最不光彩的，既没有橡胶的热情健谈，也没有金属的坚挺勇敢。——罗兰巴特 ［塑料］这世界没有什么是永恒的，可能塑料除外。——帕翠斯 ［计算机］人是会犯错，但真要把事情搞得稀巴烂还得靠计算机。——保罗 R 厄尔林奇［计算机］计算机好处是你让它做什么它做什么，坏处是你让它做什么它做什么。——泰德尼尔森 ［核裂变］如果你要搞核装备竞赛的话，最后你做的就是让石头跳起来。——温斯顿丘吉尔［核裂变］让原子自己静静。——E Y 海博格［合成材料］在这个文化里有太多种塑料了，以至于塑胶豹皮已经成了一种濒危的合成材料——莉莉汤姆林 ［合成材料］涤纶绝对不可饶恕。撒旦和上帝在这件事上达成了共识。——乔 希尔'
        },
        {
          title: '信息时代',
          detail:
            '［电信］华生，过来，我想见你。——亚历山大格雷汉姆 贝尔 ［电信］通信最大的一个问题就是幻觉被替代了。——萧伯纳［人造卫星］人造卫星是没有良知的。——爱德［人造卫星］现在天上有31颗卫星在地球上空环绕，不为别的，就为了告诉你便利店怎么走。——爱得伯内特［制导系统］千里之行，始于足下。——老子［制导系统］我喜欢在回家的路上看我妈和GPS吵架。——伊莎贝里 福尔曼［激光］上帝说：“要有光”，他想说的一定是完美的相干光。——查尔斯 汤斯［激光］我是激光的崇拜者，我觉得它们是未来之光。——科特尼 考克斯［复合物］似乎所有的物质都是由硬的固体小颗粒组成的。。。这一定和创世时智慧使者的意图有关。［复合物］很明显，科学在努力把天堂带到人间，但有些人却用它来建造地狱。——赫伯特胡佛［隐形］我想隐形是个有趣的能力，我想拥有它，只为了感受穿梭在世界但不被人看着的感觉。——凯文培根［隐形］在艺术和梦想中你在放弃中前行。在现实中你在维持平衡、东躲西藏中前行——帕蒂史密斯 ［机器人］机器人一直在我们身边，同时一直会是下一个bigthing。他是个刺激、令人注目的话题，很容易让人分心。——科林 安格尔［机器人］我还会回来的。——施瓦辛格于《终结者》［核聚变］我是维持聚变力量运转的一部分，来自9300万英里外。聚变已经被太阳实现得非常非常好了，而且是免费的。在地球的反应堆里，不是那么好。——乔伊罗姆［核聚变］夜晚当我们仰望星空时，我们看到的所有的闪耀都是因为远处的核聚变。——卡尔萨根 ［纳米技术］如果科技是变化的引擎，那么纳米技术就是人性未来的燃料。——娜塔沙维塔 摩尔［纳米技术］在纳米技术里，很多很多规则规则开始扭曲了，这产生了很多好处，也产生了很多坏处。——马特斯拜尔 ［未来科技］没有什么比得上一个创造未来的梦。——维克多 雨果［未来科技］尽管未来听上去很远，但它现在已经开始了。——麦蒂 史蒂芬尼克'
        }
      ]
    }
  }
})
