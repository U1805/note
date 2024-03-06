(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{333:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg"}},[a._v("#")]),a._v(" ffmpeg")]),a._v(" "),s("p",[a._v("https://www.ffmpeg.org/")]),a._v(" "),s("h2",{attrs:{id:"前置概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置概念"}},[a._v("#")]),a._v(" 前置概念")]),a._v(" "),s("h3",{attrs:{id:"容器-视频文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器-视频文件"}},[a._v("#")]),a._v(" 容器（视频文件）")]),a._v(" "),s("p",[a._v("视频文件 = 视频 + 音频 + 字幕 + ...")]),a._v(" "),s("p",[s("code",[a._v("ffmpeg -formats")])]),a._v(" "),s("h3",{attrs:{id:"编码与编码器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码与编码器"}},[a._v("#")]),a._v(" 编码与编码器")]),a._v(" "),s("p",[a._v("视频编码 -- 视频编码器")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("H.262\nH.264 -- libx264(开源)/NVENC(基于NVIDIA GPU)\nH.265 -- libx265(开源)\nVP8   -- libvpx\nVP9   -- libvpx\nAV1   -- libaom\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("音频编码")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MP3 -- \nAAC -- libfdk-aac/aac\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("查看编码 "),s("code",[a._v("ffmpeg -codecs")])]),a._v(" "),s("p",[a._v("查看编码器 "),s("code",[a._v("ffmpeg -encoders")])]),a._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),s("h3",{attrs:{id:"参数格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数格式"}},[a._v("#")]),a._v(" 参数格式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("全局参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("输入文件参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("输入文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("输出文件参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("输出文件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"全局参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局参数"}},[a._v("#")]),a._v(" 全局参数")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("-y")]),a._v("：不经过确认，输出时直接覆盖同名文件。")])]),a._v(" "),s("h3",{attrs:{id:"文件参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件参数"}},[a._v("#")]),a._v(" 文件参数")]),a._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[a._v("-c")]),a._v("：指定编码器\n"),s("ul",[s("li",[s("code",[a._v("-c copy")]),a._v("：直接复制，不经过重新编码（这样比较快）")]),a._v(" "),s("li",[s("code",[a._v("-c:v")]),a._v("：指定视频编码器")]),a._v(" "),s("li",[s("code",[a._v("-c:a")]),a._v("：指定音频编码器")])])]),a._v(" "),s("li",[s("code",[a._v("-minrate")]),a._v(" 最小码率 "),s("code",[a._v("-maxrate")]),a._v(" 最大码率 "),s("code",[a._v("-bufsize")]),a._v(" 缓冲区大小")]),a._v(" "),s("li",[s("code",[a._v("-an")]),a._v(" 去除音频流 "),s("code",[a._v("-vn")]),a._v(" 去除视频流")]),a._v(" "),s("li",[s("code",[a._v("-preset")]),a._v("：指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值\nultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow。")])])]),a._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h3",{attrs:{id:"查看文件元信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件元信息"}},[a._v("#")]),a._v(" 查看文件元信息")]),a._v(" "),s("p",[a._v("可以查看编码格式和比特率")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hide_banner")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"转换编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换编码"}},[a._v("#")]),a._v(" 转换编码")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx265 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 原编码->H.265(原编码自动判断)")]),a._v("\noutput.mp4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"转换容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换容器"}},[a._v("#")]),a._v(" 转换容器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" copy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 内部的编码格式不变，所以使用 `-c copy` 指定直接拷贝，不经过转码")]),a._v("\noutput.webm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"改变分辨率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改变分辨率"}},[a._v("#")]),a._v(" 改变分辨率")]),a._v(" "),s("p",[a._v("设置视频的宽度为480像素，高度自动调整以保持纵横比不变")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("480")]),a._v(":-1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -vf 视频滤镜")]),a._v("\noutput.mp4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"提取音频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取音频"}},[a._v("#")]),a._v(" 提取音频")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" copy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -vn 跳过视频 -c:a copy 音频编码直接拷贝")]),a._v("\noutput.aac\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"添加音轨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加音轨"}},[a._v("#")]),a._v(" 添加音轨")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.acc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\noutput.mp4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#截图"}},[a._v("#")]),a._v(" 截图")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ss")]),a._v(" 00:01:24 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" 00:00:01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始时间 持续时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q:v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 图片质量(1-5 1最高)")]),a._v("\noutput_%3d.jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ss")]),a._v(" 00:01:24 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t0")]),a._v(" 00:01:25 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始时间 结束时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\noutput_%3d.jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ss")]),a._v(" 01:23:45 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vframes")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 帧数")]),a._v("\noutput.jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"截取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#截取"}},[a._v("#")]),a._v(" 截取")]),a._v(" "),s("p",[a._v("三种定位方式与截图相同")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ss")]),a._v(" 00:01:50 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始时间 持续时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp4 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" copy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\noutput.mp4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"音频添加封面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#音频添加封面"}},[a._v("#")]),a._v(" 音频添加封面")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-loop")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 图片无限循环")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" cover.jpg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" input.mp3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx264 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" aac "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:a")]),a._v(" 192k "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-shortest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -b:a 音频码率 -shortest 当最短输出流结束时完成编码")]),a._v("\noutput.mp4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);