webpackJsonp([3],{25:function(t,s,e){e(41);var a=e(13)(e(37),e(57),"data-v-0a308568",null);a.options.__file="/Users/quanwei2016/iview-project/src/views/aboutus.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] aboutus.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},29:function(t,s,e){t.exports=e.p+"ac6bd5dfb216da1e29ffd2aa03cd4c33.png"},30:function(t,s,e){t.exports=e.p+"d0289dc0a46fc5b15b3363ffa78cf6c7.png"},31:function(t,s,e){t.exports=e.p+"06172c3c4022ae35738fb4801417599d.png"},32:function(t,s,e){t.exports=e.p+"cef8e12fb72ef2f014e7eba7f198672f.png"},33:function(t,s,e){t.exports=e.p+"329f8a0f27b702315953dcb05325bd92.png"},37:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"carrousel",data:function(){return{theme1:"primary",copyright_year:(new Date).getFullYear(),swiperOption:{loop:!0,effect:"fade",autoplay:!1,speed:1e3,pagination:{el:".pagination",clickable:!0},observer:!0,on:{init:function(){swiperAnimateCache(this),swiperAnimate(this)},slideChangeTransitionEnd:function(){swiperAnimate(this)}}},webdata:{menu_top:[{name:"3",type:"ios-pricetags-outline",menu:"门店入驻",link:"merchant",id:"3"},{name:"2",type:"ios-box-outline",menu:"服务商招募",link:"agent",id:"2"},{name:"1",type:"ios-home-outline",menu:"首页",link:"/",id:"1"}],contents:[{title:"公司简介",e_title:"Company profile",content:'<div style="margin-right:20px">\n                    <p style="text-indent: 25px">2014年2月，济南心引力网络科技有限公司正式成立，是一家软硬件相结合的高新技术产业公司，以软件技术为核心，硬件设备为支撑，移动互联为支柱的现代化IT服务公司。本公司拥有一批专业的软件项目研发人才和企业管理人才，技术力量雄厚，硬件设施齐全，具备多体系架构的系统开发技术和平台构造能力，拥有丰富的大型软件系统实施经验。<br><br></p>\n                    <p style="text-indent: 25px">2016年3月，集团正式决定将惠来钱业务全面交付给心引力科技，心引力全面负责惠来钱的开发、维护、运营，自此心引力科技将以惠来钱为全部核心，设有运营中心、审计中心、财税中心、服务中心、研发中心，把惠来钱做大做强最终要让惠来钱成为国内知名的会员共享平台。<br><br></p>\n                    <p style="text-indent: 25px">惠来钱的使命：让门店实现一个生意两种收益。<br><br></p>\n                    <p style="text-indent: 25px">惠来钱核心价值观：真诚、简单、开放</p>\n                </div>',src:"/static/img/img_14.png"},{title:"联系我们",e_title:"contact us",content:'<div style="margin-left:20px">\n                    <p style="margin-bottom: 12px">公司邮箱：admin@hlqwx.com<br></p>\n                    <p style="margin-bottom: 12px">公司电话：0531-55561125<br></p>\n                    <p style="margin-bottom: 12px">招商部电话：13553191319<br></p>\n                    <p style="margin-bottom: 12px">技术部QQ：2963052479<br></p>\n                    <p style="margin-bottom: 12px">项目部QQ：125889752<br></p>\n                    <p style="margin-bottom: 12px">CEO信箱：zzp@hlqwx.com<br></p>\n                    <p style="margin-bottom: 12px">开户行：齐鲁银行济南城东支行<br></p>\n                    <p>账号：1174014000000013794</p>\n                </div>',src:"/static/img/img_15.png"},{title:"地图指南",e_title:"Map Guide",src:"/static/img/map.png"}]}}}}},41:function(t,s){},48:function(t,s,e){t.exports=e.p+"8c48da6b70c26248352edc81329cb842.png"},51:function(t,s,e){t.exports=e.p+"de05193cba32950b360a40e2b586ef39.png"},57:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[a("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"slide3",staticStyle:{height:"600px"}},[a("img",{staticClass:"ani s1",attrs:{src:e(51),"swiper-animate-effect":"bounceInUp","swiper-animate-duration":"1s","swiper-animate-delay":"0s"}}),t._v(" "),a("img",{staticClass:"ani s2",attrs:{src:e(48),"swiper-animate-effect":"bounceInDown","swiper-animate-duration":"1s","swiper-animate-delay":"0.5s"}})])],1),t._v(" "),a("div",{staticClass:"navi_top"},[a("Affix",{attrs:{"offset-top":20}},[a("Menu",{staticClass:"main_menu",attrs:{mode:"horizontal",theme:t.theme1,"active-name":"4"}},[a("img",{staticClass:"main_menu_img",attrs:{src:e(29)}}),t._v(" "),t._l(t.webdata.menu_top,function(s){return[a("MenuItem",{staticClass:"main_menu_li",attrs:{name:s.name}},[a("router-link",{staticClass:"main_navi",attrs:{to:s.link}},[t._v("\n                            "+t._s(s.index)),a("Icon",{attrs:{type:s.type}}),t._v("\n                            "+t._s(s.menu)+"\n                        ")],1)],1)]})],2)],1)],1),t._v(" "),a("div",{staticClass:"navi_top sm_navi_top main_menu"},[a("img",{staticClass:"main_menu_img",attrs:{src:e(29)}}),t._v(" "),a("Dropdown",{attrs:{placement:"bottom-end"}},[a("a",{attrs:{href:"javascript:void(0)"}},[a("Icon",{staticClass:"sm_navi",attrs:{type:"navicon"}})],1),t._v(" "),t._l(t.webdata.menu_top,function(s){return a("DropdownMenu",{key:s.id,attrs:{slot:"list"},slot:"list"},[a("router-link",{attrs:{to:s.link}},[a("DropdownItem",[t._v(t._s(s.menu))])],1)],1)})],2)],1),t._v(" "),a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{span:"24"}},[a("div",{staticClass:"maincontent"},[a("div",{staticClass:"even"},[a("div",{staticClass:"product_top"},[a("h1",[t._v(t._s(t.webdata.contents[0].title)+" ")]),t._v(" "),a("h2",[t._v(t._s(t.webdata.contents[0].e_title))]),t._v(" "),a("h4")]),t._v(" "),a("div",{staticClass:"odd_content"},[a("Row",[a("Col",{attrs:{xs:{span:24},lg:{span:12}}},[a("div",{domProps:{innerHTML:t._s(t.webdata.contents[0].content)}})]),t._v(" "),a("Col",{attrs:{xs:{span:24},lg:{span:12}}},[a("img",{attrs:{src:t.webdata.contents[0].src}})])],1)],1)]),t._v(" "),a("div",{staticClass:"odd"},[a("div",{staticClass:"product_top"},[a("h1",[t._v(t._s(t.webdata.contents[1].title)+" ")]),t._v(" "),a("h2",[t._v(t._s(t.webdata.contents[1].e_title))]),t._v(" "),a("h4")]),t._v(" "),a("div",{staticClass:"odd_content"},[a("Row",[a("Col",{attrs:{xs:{span:24},lg:{span:16}}},[a("img",{attrs:{src:t.webdata.contents[1].src}})]),t._v(" "),a("Col",{attrs:{xs:{span:24},lg:{span:8}}},[a("div",{domProps:{innerHTML:t._s(t.webdata.contents[1].content)}})])],1)],1)]),t._v(" "),a("div",{staticClass:"even"},[a("div",{staticClass:"product_top"},[a("h1",[t._v(t._s(t.webdata.contents[2].title)+" ")]),t._v(" "),a("h2",[t._v(t._s(t.webdata.contents[2].e_title))]),t._v(" "),a("h4")]),t._v(" "),a("div",{staticClass:"odd_content"},[a("Row",[a("Col",{attrs:{span:"24"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.webdata.contents[2].src}})])],1)],1)])])])],1),t._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"copyright",staticStyle:{"margin-bottom":"50px"}},[a("div",{staticStyle:{margin:"10px auto"}},[a("Icon",{attrs:{type:"ios-telephone-outline"}}),t._v(" "),a("a",{attrs:{href:"javascript:void(0)"}},[t._v("服务热线：0531-55561126")]),a("br",{staticClass:"footer_br"}),t._v(" "),a("Icon",{attrs:{type:"ios-list-outline"}}),t._v(" "),a("a",{attrs:{href:"http://help.hlqwx.com",target:"_blank"}},[t._v("使用说明")]),a("br",{staticClass:"footer_br"}),t._v(" "),a("Icon",{attrs:{type:"ios-analytics-outline"}}),t._v(" "),a("a",{attrs:{href:"aboutus"}},[t._v("关于心引力")])],1),t._v(" "),a("p",[t._v("\n                Copyright © 2014-"+t._s(t.copyright_year)+" www.hlqwx.com. All Rights Reserved 济南心引力科技有限公司 "),a("br"),a("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e(30)}}),t._v(" 备案号：鲁ICP备14002952号  鲁公网安备 37010202001134号\n            ")]),t._v(" "),a("p",[t._v("中国.山东.济南.高新区.舜泰广场6号楼10楼")])])]),t._v(" "),t._m(0),t._v(" "),a("BackTop")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-im",staticStyle:{top:"15%"}},[a("div",{staticClass:"open-im",attrs:{id:"open_im"}},[t._v(" ")]),t._v(" "),a("div",{staticClass:"im_main",attrs:{id:"im_main"}},[a("div",{staticClass:"close-im",attrs:{id:"close_im"}},[a("a",{attrs:{href:"javascript:void(0);",title:"点击关闭"}},[t._v(" ")])]),t._v(" "),a("a",{staticClass:"im-qq qq-a",attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=125889752&site=qq&menu=yes",target:"_blank",title:"代理咨询"}},[a("div",{staticClass:"qq-container"}),t._v(" "),a("div",{staticClass:"qq-hover-c"},[a("img",{staticClass:"img-qq",attrs:{src:e(32)}})]),t._v(" "),a("span",[t._v(" 代理咨询")])]),t._v(" "),a("a",{staticClass:"im-qq qq-a",attrs:{title:"代理咨询"}},[a("div",{staticClass:"qq-container"}),t._v(" "),a("div",{staticClass:"qq-hover-c"},[a("img",{staticClass:"img-qq",attrs:{src:e(33)}})]),t._v(" "),a("span",[t._v(" 0531-55561126")])]),t._v(" "),a("a",{staticClass:"im-qq qq-a",attrs:{title:"微信扫码洽谈"}},[a("div",{staticClass:"qq-container"}),t._v(" "),a("div",{staticClass:"  qq-hover-c weixing-container"},[a("img",{staticClass:"img-qq",attrs:{src:e(31)}})]),t._v(" "),a("span",[t._v(" 微信洽谈")])])])])}]},t.exports.render._withStripped=!0}});