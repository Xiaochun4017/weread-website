// 共享导航栏组件
function renderNavbar(activePage) {
  const pages = [
    { id: "home", label: "首页", href: "index.html", icon: "🏠" },
    { id: "dashboard", label: "阅读数据", href: "dashboard.html", icon: "📊" },
    { id: "shelf", label: "书架", href: "shelf.html", icon: "📚" },
    { id: "notes", label: "读书笔记", href: "notes.html", icon: "✍️" }
  ];
  const navHtml = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join('');
  document.body.insertAdjacentHTML('afterbegin',
    `<nav class="navbar">
      <div class="navbar-brand"><span class="logo">📖</span> 微信读书</div>
      <ul class="navbar-nav">${navHtml}</ul>
    </nav>`);
}

// 渲染 Footer
function renderFooter() {
  document.body.insertAdjacentHTML('beforeend',
    `<footer class="footer">
      <p>📖 微信读书主题网站 · 使用 GitHub Pages 自动部署</p>
      <p>数据为示例数据，接入真实 API 后可展示个人阅读数据</p>
    </footer>`);
}

// 页面初始化
function initPage(activePage) {
  renderNavbar(activePage);
  renderFooter();
}
