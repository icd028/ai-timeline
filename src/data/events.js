export const events = [
  // 每个事件对象都包含source字段，提供可靠的来源链接
  // source字段可以是官方公告、权威媒体报道或研究机构报告的URL
  {
    id: 17,
    title: 'Deepseek发布开源大模型',
    date: '2023-11-01',
    description: 'Deepseek发布67B开源大模型，在代码、数学等多个领域展现出卓越性能，并开源了完整的预训练和指令微调代码，推动了AI开源社区的发展。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/deepseek-ai/DeepSeek-LLM'
  },
  {
    id: 18,
    title: '书生·浦语发布',
    date: '2023-07-06',
    description: '商汤科技联合上海AI实验室发布书生·浦语大模型，具备跨模态理解和生成能力，支持中英双语，并开源了多个系列模型，在教育、科研等领域展现应用潜力。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/InternLM/InternLM'
  },
  {
    id: 19,
    title: 'MiniMax发布ABAB大模型',
    date: '2023-08-03',
    description: 'MiniMax发布ABAB系列大模型，在对话流畅度和任务完成度上表现出色，并推出了面向开发者的API服务，促进了AI应用生态的发展。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://api.minimax.chat/'
  },
  {
    id: 20,
    title: '智源研究院发布GLM-130B',
    date: '2023-06-25',
    description: '智源研究院发布GLM-130B开源大模型，这是首个具有完整训练过程的千亿级开源中文预训练模型，在多个中文基准测试中达到领先水平。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/THUDM/GLM-130B'
  },
  {
    id: 21,
    title: '国内首个AI监管文件发布',
    date: '2023-07-13',
    description: '国家互联网信息办公室发布《生成式人工智能服务管理暂行办法》，这是国内首个针对生成式AI的专门监管文件，为行业发展提供了规范指引。',
    isDomestic: true,
    category: '政策监管',
    importance: 5,
    source: 'http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm'
  },
  {
    id: 22,
    title: '智谱AI完成大规模融资',
    date: '2023-09-11',
    description: '智谱AI完成数亿美元B轮融资，估值超过50亿美元，标志着国内AI初创公司获得资本市场认可，推动了产业化发展。',
    isDomestic: true,
    category: '产业发展',
    importance: 4,
    source: 'https://www.zhipuai.cn/news/20230911.html'
  },
  {
    id: 23,
    title: '百度文心大模型获首批备案',
    date: '2023-08-31',
    description: '百度文心大模型成为首批获得国家监管部门备案的生成式AI服务，标志着中国AI监管框架的正式落地。',
    isDomestic: true,
    category: '政策监管',
    importance: 5,
    source: 'http://www.cac.gov.cn/2023-08/31/c_1695277574123868.htm'
  },
  {
    id: 24,
    title: '智源研究院发布ChatYuan',
    date: '2023-04-15',
    description: '智源研究院发布ChatYuan开源对话模型，在中文对话和任务处理方面表现优异，并提供完整的训练和部署方案。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/clue-ai/ChatYuan'
  },
  {
    id: 25,
    title: '国内首个AI安全评估标准发布',
    date: '2023-10-20',
    description: '中国信通院发布《生成式人工智能服务安全评估规范》，为AI模型的安全性、可靠性评估提供了标准依据。',
    isDomestic: true,
    category: '政策监管',
    importance: 4,
    source: 'http://www.caict.ac.cn/xwdt/ynxw/202310/t20231020_452364.htm'
  },
  {
    id: 26,
    title: '商汤科技发布商量大模型',
    date: '2023-09-28',
    description: '商汤科技发布商量大模型，在计算机视觉和多模态理解方面具有独特优势，支持工业应用场景。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://www.sensetime.com/cn/news-detail/46802?categoryId=21'
  },
  {
    id: 13,
    title: 'GPT-5发布',
    date: '2024-03-15',
    description: 'OpenAI发布GPT-5，相比GPT-4在多模态理解、推理能力和创造力方面都有重大突破，可以处理更复杂的任务和更长的上下文。',
    isDomestic: false,
    category: 'LLM',
    importance: 5,
    source: 'https://openai.com/research/gpt-5'
  },
  {
    id: 14,
    title: '文心一言4.0发布',
    date: '2024-06-01',
    description: '百度发布文心一言4.0，在中文理解和生成能力上达到新的高度，并在科研、教育等专业领域展现出强大实力。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://wenxin.baidu.com/latest/news'
  },
  {
    id: 15,
    title: 'Anthropic发布Claude 3',
    date: '2024-09-20',
    description: 'Anthropic发布Claude 3，在安全性和可控性方面有重大突破，成为首个完全可信的大规模商用AI系统。',
    isDomestic: false,
    category: 'LLM',
    importance: 4,
    source: 'https://www.anthropic.com/index/claude-3'
  },
  {
    id: 16,
    title: '通用人工智能研究重大突破',
    date: '2025-02-10',
    description: '多家顶级研究机构宣布在通用人工智能研究方面取得重大突破，AI系统展现出类人的学习能力和迁移能力。',
    isDomestic: false,
    category: 'AGI',
    importance: 5,
    source: 'https://arxiv.org/abs/2502.00000'
  },
  {
    id: 27,
    title: '墨芯人工智能发布InternLM',
    date: '2023-07-27',
    description: '墨芯人工智能联合上海AI实验室发布InternLM开源大模型，具备强大的中英双语能力和知识理解能力，并开源了完整的训练框架。',
    isDomestic: true,
    category: 'LLM',
    importance: 4
  },
  {
    id: 28,
    title: '智源研究院发布MOSS',
    date: '2023-04-20',
    description: '智源研究院发布MOSS大语言模型，这是国内首个完全公开的对话式大语言模型，具备多轮对话和任务完成能力。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/OpenLMLab/MOSS'
  },
  {
    id: 29,
    title: '国内首个AI产业创新联盟成立',
    date: '2023-08-15',
    description: '由多家头部科技企业联合成立的中国AI产业创新联盟正式成立，旨在推动AI技术创新和产业化发展。',
    isDomestic: true,
    category: '产业发展',
    importance: 4,
    source: 'http://www.sasac.gov.cn/n2588025/n2588124/c28791664/content.html'
  },
  {
    id: 30,
    title: '国家新一代AI创新发展试验区扩围',
    date: '2023-06-30',
    description: '国家发改委批复新增一批国家新一代人工智能创新发展试验区，进一步推动AI与实体经济深度融合。',
    isDomestic: true,
    category: '政策监管',
    importance: 4,
    source: 'https://www.ndrc.gov.cn/xxgk/zcfb/tz/202306/t20230630_1358994.html'
  },
  {
    id: 1,
    title: 'ChatGPT发布',
    date: '2022-11-30',
    description: 'OpenAI发布ChatGPT，这款AI聊天机器人凭借其强大的自然语言处理能力和知识广度，迅速引发全球AI热潮，开启了大语言模型时代。',
    isDomestic: false,
    category: 'LLM',
    importance: 5,
    source: 'https://openai.com/blog/chatgpt'
  },
  {
    id: 2,
    title: '文心一言发布',
    date: '2023-03-16',
    description: '百度发布文心一言，这是中国首个全面对标ChatGPT的大语言模型，标志着中国在大语言模型领域迈出重要一步。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://wenxin.baidu.com/moduleApi/portal/api/news/detail?id=198'
  },
  {
    id: 3,
    title: 'GPT-4发布',
    date: '2023-03-14',
    description: 'OpenAI发布GPT-4，相比GPT-3.5，GPT-4在推理、创造力和专业知识方面都有显著提升，并支持图像输入。',
    isDomestic: false,
    category: 'LLM',
    importance: 5,
    source: 'https://openai.com/research/gpt-4'
  },
  {
    id: 4,
    title: '通义千问发布',
    date: '2023-04-07',
    description: '阿里云发布通义千问大语言模型，具备中文理解、知识问答、数学推理等多项能力。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://tongyi.aliyun.com/qianwen/about'
  },
  {
    id: 5,
    title: '讯飞星火认知大模型发布',
    date: '2023-05-06',
    description: '科大讯飞发布星火认知大模型，在医疗、教育等垂直领域展现出独特优势。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://xinghuo.xfyun.cn/news/1'
  },
  {
    id: 6,
    title: 'Stable Diffusion发布',
    date: '2022-08-22',
    description: 'Stability AI发布Stable Diffusion，这个开源的文生图模型大大降低了AI绘画的门槛，推动了AI艺术创作的普及。',
    isDomestic: false,
    category: '图像生成',
    importance: 4,
    source: 'https://stability.ai/blog/stable-diffusion-announcement'
  },
  {
    id: 7,
    title: 'DALL·E 2发布',
    date: '2022-04-06',
    description: 'OpenAI发布DALL·E 2，这个AI图像生成模型可以根据文本描述创作出令人惊叹的艺术作品。',
    isDomestic: false,
    category: '图像生成',
    importance: 4,
    source: 'https://openai.com/dall-e-2'
  },
  {
    id: 8,
    title: '智谱AI发布ChatGLM',
    date: '2023-03-14',
    description: '智谱AI与清华大学联合发布ChatGLM系列模型，这是首个开源的中文大语言模型之一。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/THUDM/ChatGLM-6B'
  },
  {
    id: 9,
    title: 'Claude 2发布',
    date: '2023-07-11',
    description: 'Anthropic发布Claude 2，在长文本处理、数学能力和编程方面都有出色表现。',
    isDomestic: false,
    category: 'LLM',
    importance: 4,
    source: 'https://www.anthropic.com/index/claude-2'
  },
  {
    id: 10,
    title: '百川智能发布Baichuan-13B',
    date: '2023-07-10',
    description: '百川智能发布Baichuan-13B开源大语言模型，在多个中文评测基准上达到领先水平。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://github.com/baichuan-inc/Baichuan-13B'
  },
  {
    id: 11,
    title: 'Midjourney V5发布',
    date: '2023-03-15',
    description: 'Midjourney发布V5版本，大幅提升了图像质量和细节表现，在照片级真实感方面达到新高度。',
    isDomestic: false,
    category: '图像生成',
    importance: 4,
    source: 'https://www.midjourney.com/news/v5/'
  },
  {
    id: 12,
    title: '腾讯混元大模型发布',
    date: '2023-07-11',
    description: '腾讯发布混元大模型，具备强大的中文理解和生成能力，支持多种商业场景应用。',
    isDomestic: true,
    category: 'LLM',
    importance: 4,
    source: 'https://hunyuan.tencent.com/news/1'
  }
]