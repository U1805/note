(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{332:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"python-爬虫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python-爬虫"}},[s._v("#")]),s._v(" python 爬虫")]),s._v(" "),t("h2",{attrs:{id:"用户设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户设置"}},[s._v("#")]),s._v(" 用户设置")]),s._v(" "),t("p",[s._v("设置 HEADER")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("header "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows NT 10.0; Win64; x64).."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.douban.com/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("设置代理 PROXY")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("proxies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:7890'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:7890'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.douban.com/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" proxies"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("proxies"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"http-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求"}},[s._v("#")]),s._v(" HTTP 请求")]),s._v(" "),t("p",[s._v("GET 请求页面")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.jd.com/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("GET 请求二进制数据(eg.图片)")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://img1.doubanio.com/view/photo/raw/public/p2654818960.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./cover.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wb'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("POST 请求")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.xxxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"解析-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-html"}},[s._v("#")]),s._v(" 解析 HTML")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bs4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BeautifulSoup\nsoup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BeautifulSoup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html.parser'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("soup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prettify"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照标准的缩进格式输出")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("元素选择")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("elements "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" soup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#选择器语法和css类似，返回list")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("元素属性")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"一些爬虫技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些爬虫技术"}},[s._v("#")]),s._v(" 一些爬虫技术")]),s._v(" "),t("p",[s._v("随机睡眠")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n\ntime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uniform"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("超时重试")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("adapters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HTTPAdapter\n\ns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HTTPAdapter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_retries"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超时重试3次")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" HTTPAdapter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_retries"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nres "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.xxxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (connect超时, read超时)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("多线程运行")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" threading\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 信号量，用来限制线程数")]),s._v("\nmax_connections "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npool_sema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" threading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BoundedSemaphore"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_connections"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nurl_list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目标url列表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("craw_url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要功能函数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n    pool_sema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nthread_list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" url_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    pool_sema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("acquire"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    thread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" threading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("craw_url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    thread_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" thread_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"其他功能实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他功能实现"}},[s._v("#")]),s._v(" 其他功能实现")]),s._v(" "),t("p",[s._v("新建文件夹")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mkdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("日志输出")]),s._v(" "),t("p",[s._v("引入 "),t("code",[s._v("logging")]),s._v(" 后 "),t("code",[s._v("logging.info()")]),s._v(" 即可，但是在 Jupyter notebook 中需要先设置一下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logging\nlogger "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getLogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \nformatter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Formatter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%(asctime)s - %(name)s - %(levelname)s - %(message)s'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Setup file handler")]),s._v("\nfhandler  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FileHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my.log'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志输出到 my.log")]),s._v("\nfhandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfhandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setFormatter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formatter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configure stream handler for the cells")]),s._v("\nchandler "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StreamHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nchandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setFormatter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formatter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add both handlers")]),s._v("\nlogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fhandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logging"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show the handlers")]),s._v("\nlogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("handlers\n\nlogger"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);