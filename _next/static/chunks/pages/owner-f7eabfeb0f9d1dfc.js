(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4067],{18921:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/owner",function(){return t(15634)}])},15634:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var a=t(85893),i=t(67294),r=t(19211),s=t(58703),p=t(15568),o=t(69077),d=t(82737),u=t(66319),y=t(80803);let l=e=>{let{refetch:n,composeId:t,setComposeId:r}=e,[y,l]=(0,i.useState)(""),[m,c]=(0,i.useState)(!1),T=(e,n)=>{c(!1)},{address:f}=(0,o.mA)(),h={address:d.Lk,abi:d.Mt},{config:b}=(0,o.PJ)({...h,functionName:"breed",args:t,onError(e){var n;let t=(null==e?void 0:e.reason)||(null===(n=e.data)||void 0===n?void 0:n.message)||e.message;"ABI encoding params/values length mismatch.\nExpected length (params): 2\nGiven length (values): 0\n\nVersion: viem@1.20.0"!=t.toString()&&"ABI encoding params/values length mismatch.\nExpected length (params): 2\nGiven length (values): 1\n\nVersion: viem@1.20.0"!=t&&(c(!0),l(t))}}),{isLoading:v,writeAsync:x}=(0,o.GG)({...b,async onSuccess(e){console.log(e),await e.wait(),n(),r([])},onError(e){var n;let t=(null==e?void 0:e.reason)||(null===(n=e.data)||void 0===n?void 0:n.message)||e.message;c(!0),l(t)}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{open:m,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:T,children:(0,a.jsx)(p.Z,{onClose:T,severity:"error",sx:{width:"100%"},children:y})}),(0,a.jsx)(u.Z,{loading:v,variant:"contained",disabled:!x,color:"error",onClick:()=>null==x?void 0:x(),children:"合成NFT"})]})},m=e=>{let{refetch:n,owner:t}=e,{address:r}=(0,o.mA)(),[l,m]=i.useState(!1),c={address:d.Lk,abi:d.Mt},T=(e,n)=>{m(!1)},f=String(r)===String(t)?"safeMint":"feeToMint",h=String(r)===String(t)?"0":"0.001",{isLoading:b,writeAsync:v}=(0,o.GG)({...c,functionName:f,args:[r],value:(0,y.f)(h),async onSuccess(e){await e.wait(),n(),m(!0)},onError(e){console.log("Error",e)}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{open:l,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:T,children:(0,a.jsx)(p.Z,{onClose:T,severity:"success",sx:{width:"100%"},children:"成功Mint,请在Owner页面中进行查看！"})}),(0,a.jsx)(u.Z,{loading:b,variant:"contained",color:"success",disabled:!v,onClick:()=>v(),children:"Mint"})]})};var c=t(5616),T=t(66242),f=t(44267),h=t(83965),b=t(15861),v=t(9974),x=t(62023),g=t(25662),k=t(57251),w=t(50657),I=t(31425),M=t(6514),j=t(58951),C=t(37645);let Z=e=>"".concat(e.slice(0,4),"...").concat(e.slice(38));function S(e){let{data:n,handleAddCompose:t,handleRemoveCompose:r}=e,[u,y]=i.useState(!1),[l,m]=(0,i.useState)(0),[S,O]=(0,i.useState)(""),[E,F]=(0,i.useState)(!1),[N,_]=(0,i.useState)(!1),{address:D}=(0,o.mA)(),A={address:d.Lk,abi:d.Mt},R=()=>{y(!1)},B=()=>{F(!1)},z=()=>{_(!1)},{write:G}=(0,o.GG)({...A,functionName:"setMarket",args:[n.tokenId,l,D],onSuccess(){O("已成功上市NFT！请在主页进行查看！"),_(!0)},onError(e){O(e.message),F(!0)}});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(T.Z,{sx:{maxWidth:300,float:"left",marginLeft:2,marginBottom:2},children:[(0,a.jsxs)(v.Z,{children:[(0,a.jsx)(h.Z,{component:"img",height:"250",image:n.uri,alt:"green iguana"}),(0,a.jsxs)(f.Z,{children:[(0,a.jsxs)(b.Z,{gutterBottom:!0,variant:"h5",component:"div",children:["NFT ID:",String(n.tokenId)]}),(0,a.jsx)(b.Z,{variant:"body2",color:"text.secondary",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)("div",{children:["等级: ",String(n.level)]}),(0,a.jsxs)("div",{children:["父亲NFT: ",String(n.dadId)]}),(0,a.jsxs)("div",{children:["母亲NFT: ",String(n.mumId)]}),(0,a.jsxs)("div",{children:["拥有者: ",Z(n.owner)]}),(0,a.jsxs)("div",{children:["价格: ",String(n.cash)]})]})})]})]}),(0,a.jsxs)(x.Z,{children:[n.check?(0,a.jsx)(g.Z,{size:"small",color:"error",onClick:()=>r(n),children:"移除合成"}):(0,a.jsx)(g.Z,{size:"small",color:"primary",onClick:()=>t(n),children:"添加合成"}),(0,a.jsx)(g.Z,{size:"medium",color:"secondary",onClick:()=>{y(!0)},children:"上市"})]}),(0,a.jsx)(s.Z,{open:E,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:B,children:(0,a.jsx)(p.Z,{onClose:B,severity:"error",sx:{width:"100%"},children:S})}),(0,a.jsx)(s.Z,{open:N,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:z,children:(0,a.jsx)(p.Z,{onClose:z,severity:"success",sx:{width:"100%"},children:S})}),(0,a.jsxs)(w.Z,{open:u,onClose:R,children:[(0,a.jsx)(C.Z,{children:"设置上市价格"}),(0,a.jsxs)(M.Z,{children:[(0,a.jsx)(j.Z,{children:"请设置该NFT的上市价格，请注意价格的基础单位是finney，并且请确保设置的价格在正常范围内并且避免它是小数！"}),(0,a.jsx)(k.Z,{autoFocus:!0,margin:"dense",id:"name",label:"NFT prize",type:"text",fullWidth:!0,variant:"standard",value:l,onChange:e=>{m(parseInt(e.target.value))}})]}),(0,a.jsxs)(I.Z,{children:[(0,a.jsx)(g.Z,{onClick:R,children:"取消"}),(0,a.jsx)(g.Z,{onClick:()=>{y(!1),l<1?(O("输入数据不符合标准！"),F(!0)):G()},children:"上市！"})]})]})]},n.tokenId)})}function O(){let[e,n]=(0,i.useState)(""),{address:t}=(0,o.mA)(),u={address:d.Lk,abi:d.Mt},[y,T]=i.useState(!1),f=(e,n)=>{T(!1)},[h,b]=(0,i.useState)([]),[v,x]=(0,i.useState)([]),{refetch:g}=(0,o.do)({...u,functionName:"getDonkeys",args:[t],onSuccess(e){x(e.map(e=>({...e,check:!1})))}}),{data:k}=(0,o.do)({...u,functionName:"owner",args:[],onSuccess(e){console.log("owner:",e),n(String(e))}}),w=e=>{if(h.length>=2)return T(!0);x(v.map(n=>n.tokenId==e.tokenId?{...n,check:!0}:{...n})),b([...h,e.tokenId])},I=e=>{x(v.map(n=>n.tokenId==e.tokenId?{...n,check:!1}:{...n})),b(h.filter(n=>n!=e.tokenId))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{open:y,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:(0,a.jsx)(p.Z,{onClose:f,severity:"error",sx:{width:"100%"},children:"超过最大合并个数！"})}),(0,a.jsxs)(r.Z,{direction:"row",spacing:2,sx:{justifyContent:"center",marginTop:2},children:[(0,a.jsx)(l,{refetch:g,composeId:h,setComposeId:b}),(0,a.jsx)(m,{refetch:g,owner:e})]}),(0,a.jsx)(c.Z,{sx:{padding:4},children:v.map(e=>(0,a.jsx)(S,{data:e,handleAddCompose:w,handleRemoveCompose:I},e.tokenId))})]})}},82737:function(e){"use strict";e.exports=JSON.parse('{"Lk":"0x7383b34994e25DD6a630EBDBbDb0f961c51CC17B","Mt":[{"inputs":[{"internalType":"uint256","name":"initId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint8","name":"val","type":"uint8"}],"name":"batchSafeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dadId","type":"uint256"},{"internalType":"uint256","name":"_mumId","type":"uint256"}],"name":"breed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"buyNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cashList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"donkeys","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"dadId","type":"uint256"},{"internalType":"uint256","name":"mumId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bool","name":"market","type":"bool"},{"internalType":"uint256","name":"cash","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"feeToMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getDonkey","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"dadId","type":"uint256"},{"internalType":"uint256","name":"mumId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bool","name":"market","type":"bool"},{"internalType":"uint256","name":"cash","type":"uint256"}],"internalType":"struct ComposeNFT.Donkey","name":"donkey","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getDonkeyTokenIds","outputs":[{"internalType":"uint256[]","name":"res","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getDonkeys","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"dadId","type":"uint256"},{"internalType":"uint256","name":"mumId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bool","name":"market","type":"bool"},{"internalType":"uint256","name":"cash","type":"uint256"}],"internalType":"struct ComposeNFT.Donkey[]","name":"ownerkey","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaketDonkeys","outputs":[{"components":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"dadId","type":"uint256"},{"internalType":"uint256","name":"mumId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"},{"internalType":"bool","name":"market","type":"bool"},{"internalType":"uint256","name":"cash","type":"uint256"}],"internalType":"struct ComposeNFT.Donkey[]","name":"marketDonkey","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_cash","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"setMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[6853,1124,9774,2888,179],function(){return e(e.s=18921)}),_N_E=e.O()}]);