"use strict";(self.webpackChunkmobile_wallet_protocol=self.webpackChunkmobile_wallet_protocol||[]).push([[213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={title:"Establishing a connection",slug:"ios-establishing-a-connection",category:"633d1d37bc7103008654c123"},r=void 0,l={unversionedId:"client-sdk/ios-establishing-a-connection",id:"client-sdk/ios-establishing-a-connection",title:"Establishing a connection",description:"A connection to Coinbase Wallet can be initiated by calling the initiateHandshake function provided by the SDK. The function also takes in an optional initialActions parameter which apps can use to take certain actions along with the initial handshake request.",source:"@site/docs/client-sdk/ios-establishing-a-connection.md",sourceDirName:"client-sdk",slug:"/client-sdk/ios-establishing-a-connection",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-establishing-a-connection",draft:!1,tags:[],version:"current",frontMatter:{title:"Establishing a connection",slug:"ios-establishing-a-connection",category:"633d1d37bc7103008654c123"},sidebar:"clientSdkSidebar",previous:{title:"Setup",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-setup"},next:{title:"Making requests",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-making-requests"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A connection to Coinbase Wallet can be initiated by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"initiateHandshake")," function provided by the SDK. The function also takes in an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"initialActions")," parameter which apps can use to take certain actions along with the initial handshake request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'private let cbwallet = CoinbaseWalletSDK.shared\n\ncbwallet.initiateHandshake(\n    initialActions: [\n        Action(jsonRpc: .eth_requestAccounts)\n    ]\n) { result, account in\n    switch result {\n    case .success(let response):\n        self.logObject(label: "Response:\\n", response)\n\n        guard let account = account else { return }\n        self.logObject(label: "Account:\\n", account)\n        self.address = account.address\n    case .failure(let error):\n        self.log("\\(error)")\n    }\n    self.updateSessionStatus()\n}\n')),(0,a.kt)("p",null,"An example handshake request is provided in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/wallet-mobile-sdk/blob/master/ios/example/SampleClient/ViewController.swift#L63"},"sample application"),"."))}u.isMDXComponent=!0}}]);