<template>
  <div class="about">
    <div class="about-content">
      <h2>关于本项目</h2>
      <p>
        本项目旨在记录和展示AI领域的重要发展历程，包括国内外重大事件、技术突破和行业动态。通过时间线的形式，直观地呈现AI技术的演进过程。
      </p>

      <h3>数据更新机制</h3>
      <p>本项目的数据更新采用以下机制：</p>
      <ul>
        <li>通过GitHub Issues提交新的AI事件</li>
        <li>定期从可靠的新闻源和研究机构收集更新</li>
        <li>欢迎社区贡献，提交Pull Request</li>
      </ul>

      <h3>数据来源</h3>
      <p>数据来源包括但不限于：</p>
      <ul>
        <li>官方新闻发布</li>
        <li>研究机构报告</li>
        <li>行业权威媒体报道</li>
        <li>企业官方公告</li>
      </ul>

      <h3>参与贡献</h3>
      <p>如果您发现数据有误或想要补充新的事件，欢迎：</p>
      <ul>
        <li>在GitHub上提交Issue</li>
        <li>提交Pull Request</li>
        <li>通过邮件联系我们</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);

  h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  h3 {
    color: var(--secondary-color);
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  ul {
    list-style-type: none;
    padding-left: 1rem;
    margin-bottom: 1rem;

    li {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '•';
        color: var(--secondary-color);
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
