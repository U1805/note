(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{323:function(t,s,a){"use strict";a.r(s);var n=a(7),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("要计算两条曲线之间趋势的相似程度，具体来说：")]),t._v(" "),s("p",[t._v("对于两个函数（输出是一维的，输入不一定），如果在各个区间上的单调性排列相同，则认为是趋势相似的，例如 y=x^2 和 y=3x^2 就是相似的，而 y=x^2 和 y=-x^2 是不相似的")]),t._v(" "),s("blockquote",[s("p",[t._v("这里要求能判断变化快慢不同和截距不同的函数是相似的，对相位不同不做要求")])]),t._v(" "),s("h2",{attrs:{id:"dtw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dtw"}},[t._v("#")]),t._v(" DTW")]),t._v(" "),s("p",[t._v("Dynamic Time Warping，动态时间规整")]),t._v(" "),s("p",[t._v("DTW 可以计算两个时间序列的相似度，尤其适用于不同长度、不同节奏的时间序列（比如不同的人读同一个词的音频序列）。 DTW 将两个序列拉伸放缩，使得两个序列的形态尽可能的一致，得到最大可能的相似度。")]),t._v(" "),s("p",[t._v("实现上，DTW 是用动态规划计算一个「最短路径问题」：")]),t._v(" "),s("blockquote",[s("p",[t._v("有矩阵 Dnm（n 是序列 A 的长度，m 是序列 B 的长度），Dij 是 Ai 和 Bj 的距离，现在从左上角 D11 开始，要到达右下角 Dnm，每次只能往右/下/右下方向前进。求最短路径？")])]),t._v(" "),s("p",[t._v("表现在图像，最后 DTW 会尽可能把相似的点联系起来，这是欧氏距离无法直接做到的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-6ec271681e9bdc03290bc6e51b537e19_1440w.webp",alt:"欧氏距离和DTW"}})]),t._v(" "),s("p",[t._v("实现算法如下：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtw_similarity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    D "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("这里的代码只实现了两个序列之间的比较，也就是默认输入是一维的。")]),t._v(" "),s("h2",{attrs:{id:"样条插值法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样条插值法"}},[t._v("#")]),t._v(" 样条插值法")]),t._v(" "),s("p",[t._v("这种方法的思路就是先假定输入的函数符合某种分布，然后用分布去拟合得到特征系数，将「曲线趋势的相似度」转换为「特征系数的相似度」，后者是向量，可以用余弦相似度之类的方法实现。")]),t._v(" "),s("h3",{attrs:{id:"多项式拟合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多项式拟合"}},[t._v("#")]),t._v(" 多项式拟合")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scipy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" curve_fit\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curve_similarity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义模型函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cosine_similarity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    params1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cov1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curve_fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    params2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cov2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curve_fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cosine_similarity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"广义加性模型拟合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广义加性模型拟合"}},[t._v("#")]),t._v(" 广义加性模型拟合")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pygam\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gam_similarity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cosine_similarity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("norm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pygam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinearGAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_splines"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#样条参数为 10")]),t._v("\n    \n    model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    params1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("term "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" term"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isintercept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        params1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partial_dependence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("term"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    params2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("term "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("terms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" term"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isintercept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        params2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partial_dependence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("term"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cosine_similarity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://pygam.readthedocs.io/en/latest/_images/notebooks_tour_of_pygam_44_0.png",alt:"样条函数"}}),t._v(" "),s("center",[t._v("样条函数 plt.plot(gam.partial_dependence(term=i))")])],1)])}),[],!1,null,null,null);s.default=p.exports}}]);