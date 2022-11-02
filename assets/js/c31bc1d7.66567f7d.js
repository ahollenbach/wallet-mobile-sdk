"use strict";(self.webpackChunkmobile_wallet_protocol=self.webpackChunkmobile_wallet_protocol||[]).push([[470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Setup",slug:"ios-setup",category:"633d1d37bc7103008654c123"},l=void 0,i={unversionedId:"client-sdk/ios-setup",id:"client-sdk/ios-setup",title:"Setup",description:"Coinbase Wallet Mobile SDK uses Universal Links to communicate between Coinbase Wallet and your application.",source:"@site/docs/client-sdk/ios-setup.md",sourceDirName:"client-sdk",slug:"/client-sdk/ios-setup",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-setup",draft:!1,tags:[],version:"current",frontMatter:{title:"Setup",slug:"ios-setup",category:"633d1d37bc7103008654c123"},sidebar:"clientSdkSidebar",previous:{title:"Install",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-install"},next:{title:"Establishing a connection",permalink:"/wallet-mobile-sdk/docs/client-sdk/ios-establishing-a-connection"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Coinbase Wallet Mobile SDK uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/ios/universal-links/"},"Universal Links")," to communicate between Coinbase Wallet and your application."),(0,a.kt)("p",null,"Before the SDK can be used, it needs to be configured with a Universal Link to your application. This callback URL will be used by the Coinbase Wallet application to navigate back to your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'CoinbaseWalletSDK.configure(\n    callback: URL(string: "https://myappxyz.com/mycallback")!\n)\n')),(0,a.kt)("p",null,"When your application receives a response from Coinbase Wallet via a Universal Link, this URL needs to be handed off to the SDK via the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleResponse")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func application(_ app: UIApplication, open url: URL ...) -> Bool {\n    if (try? CoinbaseWalletSDK.shared.handleResponse(url)) == true {\n        return true\n    }\n    // handle other types of deep links\n    return false\n}\n")),(0,a.kt)("p",null,"It\u2019s recommended to place this configuration logic in the AppDelegate as shown in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coinbase/wallet-mobile-sdk/blob/master/ios/example/SampleClient/AppDelegate.swift#L19"},"example"),"."))}u.isMDXComponent=!0}}]);