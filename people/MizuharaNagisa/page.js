"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});function MDXContent(props){if(props===void 0)props={};var _createMdxContent=function _createMdxContent(){var _components=Object.assign({h2:"h2",p:"p",a:"a"},props.components),PhotoScroll=_components.PhotoScroll;if(!PhotoScroll)_missingMdxReference("PhotoScroll",true);return Vue.h(Vue.Fragment,null,Vue.h(_components.h2,null,"简介"),"\n",Vue.h(_components.p,null,"水原渚是一名居住在上海区域的跨性别女性，蛍的好友。是活跃的维基人，曾长期编辑中文维基百科和其它 MediaWiki 站点。从 2019 年开始成为一名舰队收藏提督，最喜欢的舰娘是响（推测）。喜欢钻研树莓派等电脑硬件技术，也热爱绘画。可以熟练使用日文。"),"\n",Vue.h(_components.p,null,"因为抑郁等原因于约 2019 年休学。此后抑郁和焦虑由于家里不理解等原因日益加重，同时也患有失眠，于 2021 年 7 月 21 日永远离开了这个残酷的世界。"),"\n",Vue.h(_components.p,null,"这是水原留给我们的，",Vue.h(_components.a,{href:"https://pbs.twimg.com/media/E6odBBBVIAAM-Zt?format=jpg&name=4096x4096"},"最后的文字"),"。"),"\n",Vue.h(PhotoScroll,{photos:["${path}/photos/letter.jpg"]}),"\n",Vue.h(_components.p,null,"希望你在永远放下这个世界的苦难之后，可以在另一个世界与镇守府的姑娘们相遇，和她们一起快乐地生活下去。"))};var _ref=props.components||{},MDXLayout=_ref.wrapper;return MDXLayout?Vue.h(MDXLayout,props,Vue.h(_createMdxContent)):_createMdxContent()}var _default=MDXContent;function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}