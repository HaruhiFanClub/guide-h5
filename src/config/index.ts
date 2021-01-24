import { Introduction, Question, TGroup } from '@/types'
import avatarLeft from '@/assets/imgs/avatarLeft.webp' // 聊天左侧头像
import avatarRight from '@/assets/imgs/avatarRight.webp' // 聊天右侧头像
import dys from '@/assets/imgs/logo/电研社.jpg'
// import gtjsb from '@/assets/imgs/logo/共同建设部.jpg'
import hyxlb from '@/assets/imgs/logo/后援协力部.jpg'
import hhb from '@/assets/imgs/logo/绘画部.jpg'
// import hdb from '@/assets/imgs/logo/活动部.jpg'
import pmsjb from '@/assets/imgs/logo/平面设计部.jpg'
import rbzb from '@/assets/imgs/logo/日本支部.jpg'
import sjjrb from '@/assets/imgs/logo/世界加热部.jpg'
import spb from '@/assets/imgs/logo/视频部.jpg'
import wcb from '@/assets/imgs/logo/文创部.jpg'
import yyb from '@/assets/imgs/logo/音乐部.jpg'
import yxzz from '@/assets/imgs/logo/游戏制作交流群.jpg'

// 首屏导语
export const INTRODUCTION_CONFIG: Introduction = {
  title: 'SOS团',
  list: [
    {
      align: 'left',
      avatar: avatarLeft,
      name: '凉宫春日',
      text: 'SOS团的预备团员，对，说的就是你，呆头呆脑的家伙。咳，为了了解你如何才能更好地效力于SOS团，我们决定对你进行一项测试，测试的结果不作为最终的……喂，阿虚，不作为最终的选择结果我们为什么还要测试？'
    },
    {
      align: 'right',
      avatar: avatarRight,
      name: '阿虚',
      text: '这应该是我的台词吧！'
    },
    {
      align: 'left',
      avatar: avatarLeft,
      name: '凉宫春日',
      text: '总之，我们有各种各样的部门，每个部门都有自己的有趣之处，加入部门吧！ '
    },
    {
      align: 'left',
      avatar: avatarLeft,
      name: '凉宫春日',
      text: '事先说明一下，如果你测试过程中不认真的话，就罚你在圣诞节上替阿虚扮演驯鹿！'
    },
    {
      align: 'right',
      avatar: avatarRight,
      name: '阿虚',
      text: '那么请务必马马虎虎地对待这件事！'
    }
  ]
}

// 问卷最终的得分结果
export const FACTOR_CONFIG: { [key: string]: number } = {
  视频力: 0,
  视频力plus: 0,
  音乐力: 0,
  文创力: 0,
  文创力plus: 0,
  绘画力: 0,
  开发力: 0,
  设计力: 0,
  学习性: 0,
  捐助: 0,
  日语翻译能力: 0,
  游戏制作: 0,
  活动制作: 0,
  时间: 0,
  开拓性: 0,
  热闹度: 0
}

// 群列表
export const GROUP_LIST: TGroup[] = [
  {
    top: true,
    name: '文创部　',
    logo: wcb,
    qq: 885779771,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=5mihUKD',
    factor: ['文创力plus'],
    comment: '你是否相信文字的力量？文创部是应援团最为多元、包容的部门，有着良好的讨论环境与丰富的特别活动。凉学研究、硬讲讲堂、故事接龙……总有一项适合你！',
    introduction: '应援团最为多元、包容的部门，欢迎文字创作爱好者们加入！',
    desc: '你是否相信文字的力量，你是否对文字抱有兴趣？文字有无穷的力量与无尽的趣味，如果你相信这一点，那么文创部欢迎你。本群旨在为所有爱好文字创作的SOS团成员们打造一个良好的讨论氛围，提供一个鼓励自由创作的平台，开放一个参与群活动的窗口。',
    parts: [
      '你是否相信文字的力量，你是否对文字抱有兴趣？文字有无穷的力量与无尽的趣味，如果你相信这一点，那么文创部欢迎你。',
      '文创部，全称“文字创作交流群”，是应援团最有活力的团体之一。本群旨在为所有爱好文字创作的SOS团成员们打造一个良好的讨论氛围，提供一个鼓励自由创作的平台，开放一个参与群活动的窗口。我们以满满的热忱希望你能在这里获得安放心底的归属感。',
      '你是否苦于创作过程中无处交流，优秀的作品得不到认可？在文创部你可以得到全体成员给予的建议与评论，一如凉宫春日所言：“共同进步，不落下任何一人。”渊（bian）博（tai）的群友们会给你带来意外惊喜。在这里待着，就像身处一所双一流大学的什锦学学士授业点一样（非虚假宣传），“说实话，在这个群，哪怕不说话，只要看聊天记录都能学习到很多东西”。文创部作为应援团下属的第二大人才集中地，其成员有机会接触应援团近乎全部的企划。群里还有诸如文字接龙，答题活动，一日晨博等趣味活动。总之抓住机会勇敢地展示耀眼的自己吧！'
    ]
  },
  {
    top: true, // 满足规则置顶
    name: '视频部　', // 群名
    logo: spb,
    qq: 1095916269, // 群号
    joinLink: 'https://jq.qq.com/?_wv=1027&k=524SNzU', // 加群链接
    factor: ['视频力plus'], // 推荐规则
    comment: '鼠标键盘下的一个个光影，是我们的创作之梦。在这里，可以自由交流视频制作技巧，如果你是初学者，这里还有一套贴心的学习企划供你成长~', // 推荐语
    introduction: '鼠标键盘下的一个个光影，是我们的创作之梦。', // 简介
    desc: '视频部即“视频制作交流群”，是应援团下属的组织。这里有萌新也有大佬，同时举办着专门的视频制作学习企划，只要你对制作视频感兴趣，都可以加入进来哦~', // 介绍（页面四）
    parts: [ // 分段描述（页面五）
      '视频部即“视频制作交流群”，是应援团下属的组织。这里有萌新也有大佬，同时举办着专门的视频制作学习企划，只要你对制作视频感兴趣，都可以加入进来哦~',
      '不知道怎么入门视频制作？来视频部吧！不知道怎么提升自己的视频制作技术？来视频部吧！想让自己的作品被更多人品鉴？来视频部吧！除了视频制作的话题，视频部还有很多好玩的地方哦~不仅日常的话题也可以在这里聊，还会有你画我猜、答题活动等好玩的群活动~',
      '视频制作不易，但制作成功的成就感是巨大的，欢迎加入视频部，让我们共同成就吧！'
    ]
  },
  // {
  //   name: '共同建设部',
  //   logo: gtjsb,
  //   qq: 885408892,
  //   joinLink: 'https://jq.qq.com/?_wv=1027&k=5TE4Qqe',
  //   factor: ['学习性', '开拓性'],
  //   comment: '完全零门槛的建设部门！在这里，你可以学习、立项、提出意见，用我们的共同建设，创造圈子的未来。',
  //   introduction: '用我们的共同建设，创造圈子的未来。',
  //   desc: '共同建设部是应援团规模最大的部门，秉持着“所有团员都可以为爱好做些什么”的理念而成立，具有零基础的加入门槛。共建部是执行“孵化计划“的核心场所，分为“学习”、“企划“、”素材“、”意见“、”扶持“等几个模块。目前，孵化计划的大部分功能已使用网站进行支持。',
  //   parts: [
  //     '共同建设部是应援团规模最大的部门，秉持着“所有团员都可以为爱好做些什么”的理念而成立，具有零基础的加入门槛。共建部是执行“孵化计划“的核心场所，分为“学习”、“企划“、”素材“、”意见“、”扶持“等几个模块。目前，孵化计划的大部分功能已使用网站进行支持。',
  //     '“学习“是孵化计划最重要的模块，我们联系应援团各方向富有经验之人，为许多技能方向制定了从零开始的学习计划。哪怕是零基础，在孵化计划中学习也可以获得流畅的学习体验。各个学习方向都配有一些指导者，用来引导大家的学习、解决大家的问题。同时，学习还可以赚取积分，兑换各种奖励。孵化计划中的所有学习方向都非常实用，可以投入应援团的各种企划或在现实生活中派上用场。',
  //     '“企划“是孵化计划的第二模块，在孵化计划中，任何人都有成立企划、参与企划的权利。只要提交的企划内容通过审核，便可向所有孵化计划的参与者公示并招募参与者，同时应援团的部分企划也会在此发布。通过这一模块，既能充分释放大家的创意，也可以使学习成果尽快地投入实践以进行巩固。',
  //     '“素材”是孵化计划的第三模块，在该模块中，所有人可以自由地上传自己创作的凉宫素材，或授权进行搬运，开放给孵化计划的所有人使用。这些素材将帮助大家进行学习或创作，同时也可被各企划使用。',
  //     '“意见”是孵化计划的第四模块，孵化计划的成员可以提交对应援团、凉宫圈的意见、想法、创意等，并公示给孵化计划的所有人，所有人都可参与对该意见的讨论。合理的意见会被采纳，并给予积分奖励。',
  //     '“扶持”是孵化计划的第五模块，应援团会利用现有资源对创作者、企划组进行资源、渠道、人力等多方面的扶持，尽力解决大家遇到的困难。',
  //     '以上就是共建部/孵化计划的主要内容。之所以取了这两个名字，是因为我们想通过所有人的共同建设，孵化凉宫圈的未来。这是一个会长期给凉宫圈带来生命力的企划，如果你感兴趣，就加入我们吧！'
  //   ]
  // },
  {
    name: '后援协力部',
    logo: hyxlb,
    qq: 596962961,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=5EPDCZw',
    factor: ['捐助'],
    comment: '应援团的长远发展，离不开你我的微小支持。在后援部，你可以参与应援团的捐助并监督应援团的经费情况。',
    introduction: '应援团的长远发展，离不开你我的微小支持。',
    desc: '应援团向来是一个大众化的团体，由群众而来，信仰着群众的力量。而大家的捐款、充电、支持，也成为了应援团资金的主要来源。应援团如今有超过2500名成员，哪怕每人捐出一元钱，也足够应援团做出很多事情。因此，我们设置了后援协力部，将愿意长期捐助应援团（哪怕十分微薄）的团员聚集在一起。如果你想参与应援团的长期捐助，请加入我们吧！',
    parts: [
      '应援团是一个非营利团体，并尽可能地不使用资金完成大部分企划。然而，总有要用到资金的时候，面对我们无法解决的环节时，我们需要外包；举办活动、比赛时，我们需要设置奖品来激励大家；为了维持服务器，需要一笔固定的开支……应援团的资金需求虽然没有那么强烈，却无时无刻不存在着，并影响着应援团的许多方面。假如应援团拥有足够的资金，许多企划都能得到更好的开展，这是毋庸置疑的。',
      '应援团向来是一个大众化的团体，由群众而来，信仰着群众的力量。而大家的捐款、充电、支持，也成为了应援团资金的主要来源。应援团如今有超过2500名成员，哪怕每人捐出一元钱，也足够应援团做出很多事情。因此，我们设置了后援协力部，将愿意长期捐助应援团（哪怕十分微薄）的团员聚集在一起。如果你想参与应援团的长期捐助，请加入我们吧！'
    ]
  },
  {
    name: '文创部',
    logo: wcb,
    qq: 885779771,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=5mihUKD',
    factor: ['文创力'],
    comment: '你是否相信文字的力量？文创部是应援团最为多元、包容的部门，有着良好的讨论环境与丰富的特别活动。凉学研究、硬讲讲堂、故事接龙……总有一项适合你！',
    introduction: '应援团最为多元、包容的部门，欢迎文字创作爱好者们加入！',
    desc: '你是否相信文字的力量，你是否对文字抱有兴趣？文字有无穷的力量与无尽的趣味，如果你相信这一点，那么文创部欢迎你。本群旨在为所有爱好文字创作的SOS团成员们打造一个良好的讨论氛围，提供一个鼓励自由创作的平台，开放一个参与群活动的窗口。',
    parts: [
      '你是否相信文字的力量，你是否对文字抱有兴趣？文字有无穷的力量与无尽的趣味，如果你相信这一点，那么文创部欢迎你。',
      '文创部，全称“文字创作交流群”，是应援团最有活力的团体之一。本群旨在为所有爱好文字创作的SOS团成员们打造一个良好的讨论氛围，提供一个鼓励自由创作的平台，开放一个参与群活动的窗口。我们以满满的热忱希望你能在这里获得安放心底的归属感。',
      '你是否苦于创作过程中无处交流，优秀的作品得不到认可？在文创部你可以得到全体成员给予的建议与评论，一如凉宫春日所言：“共同进步，不落下任何一人。”渊（bian）博（tai）的群友们会给你带来意外惊喜。在这里待着，就像身处一所双一流大学的什锦学学士授业点一样（非虚假宣传），“说实话，在这个群，哪怕不说话，只要看聊天记录都能学习到很多东西”。文创部作为应援团下属的第二大人才集中地，其成员有机会接触应援团近乎全部的企划。群里还有诸如文字接龙，答题活动，一日晨博等趣味活动。总之抓住机会勇敢地展示耀眼的自己吧！'
    ]
  },
  {
    name: '音乐部',
    logo: yyb,
    qq: 125664621,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=5aNVH6x',
    factor: ['音乐力'],
    comment: '花样众多的音乐企划、有趣的日常话题、深度的专业探讨，你想要的都能在音乐部找到！用音乐进行灵魂的碰撞吧~',
    introduction: '用音乐进行灵魂的触碰吧。',
    desc: '凉宫春日应援团音乐部，聚集了凉宫粉中喜爱音乐的人士。入部无门槛，见证着众多兴趣者的成长。如今的音乐部成员近200人，大部分乐器的演奏者都能在这里找到同伴，也包含唱见、后期等成员哦~',
    parts: [
      '凉宫春日应援团音乐部，聚集了凉宫粉中喜爱音乐的人士。入部无门槛，见证着众多兴趣者的成长。如今的音乐部成员近200人，大部分乐器的演奏者都能在这里找到同伴，也包含唱见、后期等成员哦~',
      '在音乐部，你可以参与花样众多的音乐企划、可以在群里和大家聊日常话题、可以和大家探讨专业问题，还有众多谱子、教程资源提供~',
      '我们希望借着音乐，让世界变得更加热闹！'
    ]
  },
  {
    name: '视频部',
    logo: spb,
    qq: 1095916269,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=524SNzU',
    factor: ['视频力'],
    comment: '鼠标键盘下的一个个光影，是我们的创作之梦。在这里，可以自由交流视频制作技巧，如果你是初学者，这里还有一套贴心的学习企划供你成长~',
    introduction: '鼠标键盘下的一个个光影，是我们的创作之梦。',
    desc: '视频部即“视频制作交流群”，是应援团下属的组织。这里有萌新也有大佬，同时举办着专门的视频制作学习企划，只要你对制作视频感兴趣，都可以加入进来哦~',
    parts: [
      '视频部即“视频制作交流群”，是应援团下属的组织。这里有萌新也有大佬，同时举办着专门的视频制作学习企划，只要你对制作视频感兴趣，都可以加入进来哦~',
      '不知道怎么入门视频制作？来视频部吧！不知道怎么提升自己的视频制作技术？来视频部吧！想让自己的作品被更多人品鉴？来视频部吧！除了视频制作的话题，视频部还有很多好玩的地方哦~不仅日常的话题也可以在这里聊，还会有你画我猜、答题活动等好玩的群活动~',
      '视频制作不易，但制作成功的成就感是巨大的，欢迎加入视频部，让我们共同成就吧！'
    ]
  },
  {
    name: '平面设计部',
    logo: pmsjb,
    qq: 868926974,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=SAUdzrv1',
    factor: ['设计力'],
    comment: '在平面设计部，你可以自由地讨论平面设计技巧，欣赏群里不时发布的设计案例。假如你是初学平面设计的新人，这里还有很多前辈可以帮到你哦~',
    introduction: '我们探讨每个色块、每个字体、每个版式的力量。',
    desc: '在平面设计部中，你可以自由地讨论平面设计的技巧，欣赏群里不时发布的设计案例，参与应援团的平面设计工作，还可以把作品发布上来，让大家一起交流、给出建议。欢迎志同道合之士加入我们！',
    parts: [
      '设计精妙的logo出自何人之手？版式精美的书籍如何炼成？海报、封面、UI……这些都来源于平面设计。',
      '在平面设计部中，你可以自由地讨论平面设计的技巧，欣赏群里不时发布的设计案例，参与应援团的平面设计工作，还可以把作品发布上来，让大家一起交流、给出建议。',
      '如果你是初学平面设计的新人，这里更是有很多前辈可以引导学习之路、解答疑惑~',
      '欢迎志同道合之士加入我们！'
    ]
  },
  {
    name: '绘画部',
    logo: hhb,
    qq: 627992968,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=5ZXR3E8',
    factor: ['绘画力'],
    comment: '想要学习绘画却没有门路？想要为自己的画征求意见？想要讨论绘画技巧？来绘画部吧！附赠24小时夸夸夸服务~',
    introduction: '一起交流绘画吧！附赠24小时夸夸夸服务（x）',
    desc: '不知道自己画的哪里需要修改？那就来这里吧！这里有许多达人可以给出修改意见，甚至帮你修改。不会画画？没有关系。这里有很多基础的教学。只想来聊聊天？当然欢迎！这里也是广大话痨们的聚集地。同时，绘画部也是应援团企划里不可或缺的重要部门。部门间活动企划的机会俯拾即是。',
    parts: [
      '绘画部，全称是“绘画交流群”，是应援团若干下属团体之一。本部门主要目的是提供给SOS团喜爱绘画的大家一个温馨、良好的学习和聊天的场所。',
      '不知道自己画的哪里需要修改？那就来这里吧！这里有许多达人可以给出修改意见，甚至帮你修改。不会画画？没有关系。这里有很多基础的教学。只想来聊聊天？当然欢迎！这里也是广大话痨们的聚集地。同时，绘画部也是应援团企划里不可或缺的重要部门。部门间活动企划的机会俯拾即是。你画我猜，绘画大赛等等。',
      '艺术是一种使我们达到真实的假想。为了让“凉宫春日”再次出现在大家的视线中是离不开绘画的，加入我们吧,让我们一起画出最好的春日吧！（入群附赠24小时夸夸夸服务！）'
    ]
  },
  {
    name: '电研社',
    logo: dys,
    qq: 1065730406,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=YzlZ3fVO',
    factor: ['开发力'],
    comment: '欢迎加入电研社，一同交流计算机技术！无论大佬还是新人，都能在这里找到同伴哦~',
    introduction: '进群领取学姐福利（x），一起交流计算机技术吧！',
    desc: '我们是专门交流计算机技术的部门哦！群里涉及的范围十分广泛，主要集中在开发、运维上，但也欢迎研究算法、产品设计等领域的团员加入！ \n 因为群里有着各个领域的团员，无论你想讨论哪方面的问题，几乎都能在组里找到人。大家的水平也充分分布在新手、老手、大佬等不同水平上，无论何种水平都能找到同伴！如果你想找一个地方一起交流计算机技术，电研社无疑是最佳场合~',
    parts: [
      '呀嘞呀嘞，我们就是SOS团隔壁的电研社，现在加入我们，即可获得1096学姐福利（哔——）',
      '咳咳，言归正传，电研社的前身就是应援团的技术组，后来因为大家想要引进1096学姐而改名（大雾）。我们是专门交流计算机技术的部门哦！群里涉及的范围十分广泛，主要集中在开发、运维上，但也欢迎研究算法、产品设计等领域的团员加入！',
      '因为群里有着各个领域的团员，无论你想讨论哪方面的问题，几乎都能在组里找到人。大家的水平也充分分布在新手、老手、大佬等不同水平上，无论何种水平都能找到同伴！如果你想找一个地方一起交流计算机技术，电研社无疑是最佳场合~新手更是能在群里获得许多帮助哦！',
      '同时，电研社也负责着应援团的许多项目，这些项目可以自愿报名参与，不光能为圈子做很多事，还可以提升项目实践经验~',
      '热爱计算机的你，快快加入电研社吧~'
    ]
  },
  {
    name: '日本支部',
    logo: rbzb,
    qq: 391150065,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=wWXs0gZ4',
    factor: ['日语翻译能力'],
    comment: '日语交流、海外运营、留学、翻译，各种各样的话题都能在日本支部交流！欢迎加入我们哦~',
    introduction: '应援团的脚步不止于中国！交流日语、翻译、海外部分发展。',
    desc: '日本支部负责运营应援团的海外部分（推特、YouTube等），并兼任应援团的翻译工作，包括外译中、中译外。同时，日本支部也是日语交流群，欢迎学习日语的大家加入~',
    parts: [
      '应援团的道路，岂可止于本国！所以说，不要停下来啊（x）',
      '日本支部负责运营应援团的海外部分（推特、YouTube等），并兼任应援团的翻译工作，包括外译中、中译外。同时，日本支部也是日语交流群，欢迎学习日语的大家加入~',
      '当前，日本支部正招收擅长其它语言的团员，向国际化前进着（主体仍是日本支部），也欢迎擅长其它语言的团员加入我们！'
    ]
  },
  {
    name: '世界加热部',
    logo: sjjrb,
    qq: 154256283,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=kFkmJO2j',
    factor: ['开拓性'],
    comment: '加热部作为整个应援团的支持性部门而存在！编辑、写作、活动、公众关系，多种方向供你选择~一起加热世界吧！',
    introduction: '用我们的工作，让世界更加热闹吧~',
    desc: '世界加热部，即“让世界变得更加热闹部”，是应援团的支持性部门。在这里，可以参与编辑工作，为大家修改文案；参与应用写作，撰写各式各样的文稿；参与活动策划，丰富团内外的活动；参与公众关系，更好地联系起应援团与团员。一片广阔的天地等着你探索~',
    parts: [
      '世界加热部，即“让世界变得更加热闹部”，为整个应援团进行支持性的工作，包含编辑、应用写作、活动策划、公众关系四个方向~',
      '编辑方向负责审阅整个应援团的文案，进行修改、提出建议，使文案在形式上和内容上达到合格的标准，与作者共同进步~编辑对于文案有较大的改动权限，不仅负责行文措辞、内容构成、结构调整，还要把握文案整体的中心思想、价值取向。',
      '应用写作方向负责撰写杂谈、分析评论类文章、宣传文案、活动文稿等应用文，为应援团提供支持~',
      '活动策划方向负责策划与制作团内、团外活动，团内活动例如答题、看图识番、你画我猜等，团外活动例如创作大赛、直播活动、彩蛋活动等。同时，活动策划方向要向全部门输送活动力量。',
      '公众关系方向负责从已有的工作出发，在应援团与公众之间通过传达、沟通等手段，塑造良好的关系，来扩大已有工作的效果。包括团史编写、沟通渠道建设、部门访谈等。',
      '通过展开这些工作，加热部将让应援团更加热闹~'
    ]
  },
  {
    name: '游戏制作交流群',
    logo: yxzz,
    qq: 1121382716,
    joinLink: 'https://jq.qq.com/?_wv=1027&k=tbHl65bQ',
    factor: ['游戏制作'],
    comment: '你是否热爱游戏？你是否想要制作游戏？你是否想设计有趣好玩的游戏？如果是，欢迎你加入游戏制作交流群！把幻想变成现实吧~',
    introduction: '让幻想成为现实，创造你心中有趣的一切！',
    desc: '你是否热爱游戏？你是否想要制作游戏？你是否想设计有趣好玩的游戏？如果是，欢迎你加入游戏制作交流群！ \n 本群是应援团负责游戏制作的部分，正开展着相关的同人游戏企划。同时，这也是供大家交流游戏设计、游戏制作的场合，大家可以在这里自由地创作、设计自己的游戏，好的点子可能会被应援团选中并成立企划哦~',
    parts: [
      '你是否热爱游戏？你是否想要制作游戏？你是否想设计有趣好玩的游戏？如果是，欢迎你加入游戏制作交流群！',
      '本群是应援团负责游戏制作的部分，正开展着相关的同人游戏企划。同时，这也是供大家交流游戏设计、游戏制作的场合，大家可以在这里自由地创作、设计自己的游戏，好的点子可能会被应援团选中并成立企划哦~',
      '新人？零基础？这些都不用担心！游戏部内将提供一系列学习方案，助大家从零开始，同时还有从事游戏行业的团员为大家指导、解惑~',
      '将幻想变成现实，让世界变得有趣。加入我们吧！'
    ]
  }
]

// 问题列表
export const QUESTION_LIST: Question[] = [
  {
    title: '如果SOS团即将组建一支宇宙舰队去探索宇宙，这是和现在的世界完全不一样的旅途，你愿意加入吗？',
    options: [ // 选项列表
      { title: '愿意', score: ['开拓性'] }, // title: 选项描述  score: 哪些选项得分
      { title: '不愿意', score: [] }
    ]
  },
  {
    title: 'SOS团即将举办社团派对！派对上，你想做些什么？',
    multiple: true, // 多选
    options: [
      { title: '精心策划一个有趣的节目', score: ['活动制作'] },
      { title: '跟随团长去参与“SOS团突击宣传”行动', score: ['热闹度'] },
      { title: '演奏拿手的乐器', score: ['音乐力'] },
      { title: '这些都不想做', score: [] }
    ]
  },
  {
    title: '隔壁的电研社向SOS团发起视频制作挑战！你能代表SOS团出战吗？',
    options: [
      { title: '能', score: ['视频力plus'] },
      { title: '对技术没信心', score: ['视频力'] },
      { title: '完全不会', score: [] }
    ]
  },
  {
    title: 'SOS团要制作新的海报！做成什么样都可以！阿虚找到你来帮忙，你想试试吗？',
    options: [
      { title: '画一个吧！', score: ['绘画力'] },
      { title: '用PS做一个吧！', score: ['设计力'] },
      { title: '绘画和设计都可以试试', score: ['绘画力', '设计力'] },
      { title: '没法做出来', score: [] }
    ]
  },
  {
    title: 'SOS团每天放学后的社团活动你有空参加吗？',
    options: [
      { title: '有空', score: ['时间'] },
      { title: '没空', score: [] }
    ]
  },
  {
    title: 'SOS团在与电研社的游戏对战中陷入困境！你该怎么办？',
    options: [
      { title: '学习技术，用实力打败敌人', score: ['学习性'] },
      { title: '集中突破，用锐气挫败敌人', score: ['开拓性'] },
      { title: '编写脚本，多线操作', score: ['开发力'] }
    ]
  },
  {
    title: 'SOS团想要制作新的社团主页，团长画了一份设计图，你可以开发出来吗？',
    options: [
      { title: '可以', score: ['开发力'] },
      { title: '做不到', score: [] }
    ]
  },
  {
    title: 'SOS团必须做些更有意思的事情！你可以做些什么？',
    multiple: true,
    options: [
      { title: '写小说吧！', score: ['文创力'] },
      { title: '写程序吧！', score: ['开发力'] },
      { title: '制作游戏吧！', score: ['游戏制作'] },
      { title: '我还想学更多东西！', score: ['学习性'] }
    ]
  },
  {
    title: '之前的学园祭非常成功，SOS团也想办一场这样的活动，你可以做些什么？',
    multiple: true,
    options: [
      { title: '设计和制作活动！', score: ['活动制作'] },
      { title: '赞助经费', score: ['捐助'] },
      { title: '去尽力宣传活动吧', score: ['开拓性'] }
    ]
  },
  {
    title: '听说中国有个我们的粉丝团体哦，你可以负责SOS团和他们的联络吗？',
    options: [
      { title: '日语、中文都没问题的哦', score: ['日语翻译能力'] },
      { title: '可能不太行', score: [] }
    ]
  },
  {
    title: '文学社要推出社刊！要一起协力吗~',
    options: [
      { title: '写一些想写的东西吧！', score: ['文创力plus'] },
      { title: '呀嘞呀嘞，还是不太擅长这方面呢', score: [] }
    ]
  }
]
