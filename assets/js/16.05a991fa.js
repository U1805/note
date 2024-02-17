(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{328:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在研究 QQ 机器人搭建的时候，一个推文推送的功能需要访问外网。正好前些日子看到 "),a("a",{attrs:{href:"https://github.com/vvbbnn00/WARP-Clash-API",target:"_blank",rel:"noopener noreferrer"}},[s._v("Warp-Clash-Api"),a("OutboundLink")],1),s._v(" 的仓库，顺便试试")]),s._v(" "),a("p",[s._v("思路是这样的：Warp 是良心老大哥 Cloudfare 推出的免费 VPN 服务，warp-clash-api 可以通过订阅的方式使用 warp。QQbot 的功能需要外网访问，因此需要搭建 clash 服务，clash 服务需要订阅节点，因此先搭建 warp-clash-api 获取节点。")]),s._v(" "),a("h2",{attrs:{id:"warp-clash-api-搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warp-clash-api-搭建"}},[s._v("#")]),s._v(" WARP-CLASH-API 搭建")]),s._v(" "),a("p",[s._v("git clone 项目，在目录里新建文件 "),a("code",[s._v(".env.local")]),s._v(" 写入密钥 "),a("code",[s._v("SECRET_KEY=your_secret_key")]),s._v("，docker compose 启动即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vvbbnn00/WARP-Clash-API.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("改一下 restart: always，这样开机的时候就能自己启动了")])]),s._v(" "),a("p",[s._v("验证一下 "),a("code",[s._v("curl http://127.0.0.1:21001/")]),s._v(" 有结果")]),s._v(" "),a("p",[s._v("这时候访问 http://127.0.0.1:21001/ 会有订阅界面，获取订阅链接"),a("br"),s._v("\nhttp://127.0.0.1:21001/api/clash?best=true&randomName=true&key=srcret_key")]),s._v(" "),a("h2",{attrs:{id:"clash-搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash-搭建"}},[s._v("#")]),s._v(" Clash 搭建")]),s._v(" "),a("p",[s._v("先下一份节点文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:21001/api/clash?best=true&randomName=true&key=srcret_key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" clash.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("clash 直接使用 docker 搭建")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("clash "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/clash.yaml:/root/.config/clash/config.yaml"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7890:7890"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7891:7891"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9090:9090"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped dreamacro/clash-premium\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中 "),a("code",[s._v("~/clash.yaml")]),s._v(" 是节点文件的路径，"),a("code",[s._v("7890")]),s._v(" 是客户端端口（建议还是改一下）")]),s._v(" "),a("p",[s._v("启动之后验证一下 "),a("code",[s._v("curl --proxy http://127.0.0.1:7890 https://www.youtube.com")])]),s._v(" "),a("h2",{attrs:{id:"定时更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时更新"}},[s._v("#")]),s._v(" 定时更新")]),s._v(" "),a("p",[s._v("添加 cron 定时任务就可以实现")]),s._v(" "),a("p",[s._v("更新脚本 reload-clash.sh：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" ~/clash/clash.yaml "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:21001/api/clash?best=true&randomName=true&key=srcret_key"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container restart clash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("定时任务：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n00,30 * * * * "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ~/clash/reload-clash.sh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每小时更新运行两次")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"系统代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统代理"}},[s._v("#")]),s._v(" 系统代理")]),s._v(" "),a("p",[s._v("在环境变量中添加")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:7890\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:7890\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("no_proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost,127.0.0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("为了 docker 容器内可以访问代理，在 .docker/config 里添加")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proxies"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpProxy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7890"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"httpsProxy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7890"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noProxy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost,127.0.0.1"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"待解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待解决"}},[s._v("#")]),s._v(" 待解决")]),s._v(" "),a("p",[s._v("照理来说 docker 中应该能正常通过代理访问，但是我运行容器时发现并没有走代理")]),s._v(" "),a("p",[s._v("目前的解决办法是 docker 容器的网络模式使用 host，与主机公用 ip，缺点是没有了网络隔离和端口映射")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);