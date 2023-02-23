import{a as e,j as a,L as E,r as m,d as Y,f as Q,g as W,w as X,F as L,n as I,i as ee}from"./index-414ac27f.js";import{F as ie,c as ae,a as d,d as o}from"./object-0f3ede8c.js";function ne(){return e("div",{className:"login-toggle text-[#666]",children:a("div",{className:"collapse group",children:[e("input",{type:"checkbox",className:"peer"}),a("div",{className:"collapse-title py-0 min-h-0",children:["Returning customer?",e("span",{className:"font-bold text-uppercase text-[#333] ml-1 group-hover:border-b border-[#333]",children:"Login"})]}),e("div",{className:"collapse-content peer-checked:text-primary-content",children:a("form",{className:"border border-[#eee] text-[#333] border-t-4 p-7",children:[e("p",{className:"text-sm mb-4 px-2.5",children:"If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section."}),a("div",{className:"flex flex-wrap",children:[e("div",{className:"basis-1/2 px-2.5",children:a("div",{className:"form-group",children:[e("label",{className:"inline-block mb-1",children:"Username or email *"}),e("input",{type:"text",className:"input w-full input-bordered rounded-sm focus:outline-none",name:"name",required:!0})]})}),e("div",{className:"basis-1/2 px-2.5",children:a("div",{className:"form-group",children:[e("label",{className:"inline-block mb-1",children:"Password *"}),e("input",{type:"text",className:"input w-full input-bordered rounded-sm focus:outline-none",name:"password",required:!0})]})})]}),a("div",{className:"form-group my-4 px-2.5",children:[e("input",{id:"remember",type:"checkbox",className:"checkbox rounded-none align-middle "}),e("label",{htmlFor:"remember",className:"mb-0 pl-2 cursor-pointer",children:"Remember me"}),e(E,{to:"/",className:"ml-3 text-red-500",children:"Lost your password?"})]}),e("div",{className:"px-2.5",children:e("button",{className:"btn btn-md text-[#333] border-[#f1f1f1] bg-[#f1f1f1] hover:border-[#ff4747] hover:bg-[#ff4747] hover:text-white transition-colors rounded-sm px-7 py-3 block",children:"Login"})})]})})]})})}function le({handleCouponValidation:b}){const[v,c]=m.useState("");return e("div",{className:"login-toggle mb-4 text-[#666]",children:a("div",{className:"collapse group",children:[e("input",{type:"checkbox",className:"peer"}),a("div",{className:"collapse-title py-0",children:["Have A Coupon?",e("span",{className:"font-bold text-[#333] ml-1 group-hover:border-b border-[#333]",children:"Enter Your Code"})]}),e("div",{className:"collapse-content peer-checked:text-primary-content",children:a("div",{className:"border border-[#eee] text-[#333] border-t-4 p-7",children:[e("p",{className:"text-sm mb-4 px-2.5",children:"If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section."}),a("div",{className:"flex flex-wrap",children:[e("div",{className:"px-2.5",children:e("input",{defaultValue:"",placeholder:"Coupon Code",type:"text",className:"input w-full input-bordered rounded-sm focus:outline-none",name:"coupon",onChange:N=>c(N.target.value)})}),e("div",{className:"px-0.5",children:e("button",{onClick:()=>b(v),type:"button",className:"btn inline btn-md text-[#333] border-[#f1f1f1] bg-[#f1f1f1] hover:border-[#ff4747] hover:bg-[#ff4747] hover:text-white transition-colors rounded-sm px-7 py-3",children:"Apply"})})]})]})})]})})}const de=[{id:"3",name:"Dhaka",bn_name:"ঢাকা",lat:"23.810332",long:"90.412518"},{id:"1",name:"Barishal",bn_name:"বরিশাল",lat:"22.701002",long:"90.353451"},{id:"2",name:"Chattogram",bn_name:"চট্টগ্রাম",lat:"22.356851",long:"91.783182"},{id:"4",name:"Khulna",bn_name:"খুলনা",lat:"22.845641",long:"89.540328"},{id:"5",name:"Rajshahi",bn_name:"রাজশাহী",lat:"24.363589",long:"88.624135"},{id:"6",name:"Rangpur",bn_name:"রংপুর",lat:"25.743892",long:"89.275227"},{id:"7",name:"Sylhet",bn_name:"সিলেট",lat:"24.894929",long:"91.868706"},{id:"8",name:"Mymensingh",bn_name:"ময়মনসিংহ",lat:"24.747149",long:"90.420273"}],x={divisions:de},oe=[{id:"1",division_id:"3",name:"Dhaka",bn_name:"ঢাকা",lat:"23.7115253",long:"90.4111451"},{id:"2",division_id:"3",name:"Faridpur",bn_name:"ফরিদপুর",lat:"23.6070822",long:"89.8429406"},{id:"3",division_id:"3",name:"Gazipur",bn_name:"গাজীপুর",lat:"24.0022858",long:"90.4264283"},{id:"4",division_id:"3",name:"Gopalganj",bn_name:"গোপালগঞ্জ",lat:"23.0050857",long:"89.8266059"},{id:"5",division_id:"8",name:"Jamalpur",bn_name:"জামালপুর",lat:"24.937533",long:"89.937775"},{id:"6",division_id:"3",name:"Kishoreganj",bn_name:"কিশোরগঞ্জ",lat:"24.444937",long:"90.776575"},{id:"7",division_id:"3",name:"Madaripur",bn_name:"মাদারীপুর",lat:"23.164102",long:"90.1896805"},{id:"8",division_id:"3",name:"Manikganj",bn_name:"মানিকগঞ্জ",lat:"23.8644",long:"90.0047"},{id:"9",division_id:"3",name:"Munshiganj",bn_name:"মুন্সিগঞ্জ",lat:"23.5422",long:"90.5305"},{id:"10",division_id:"8",name:"Mymensingh",bn_name:"ময়মনসিংহ",lat:"24.7471",long:"90.4203"},{id:"11",division_id:"3",name:"Narayanganj",bn_name:"নারায়াণগঞ্জ",lat:"23.63366",long:"90.496482"},{id:"12",division_id:"3",name:"Narsingdi",bn_name:"নরসিংদী",lat:"23.932233",long:"90.71541"},{id:"13",division_id:"8",name:"Netrokona",bn_name:"নেত্রকোণা",lat:"24.870955",long:"90.727887"},{id:"14",division_id:"3",name:"Rajbari",bn_name:"রাজবাড়ি",lat:"23.7574305",long:"89.6444665"},{id:"15",division_id:"3",name:"Shariatpur",bn_name:"শরীয়তপুর",lat:"23.2423",long:"90.4348"},{id:"16",division_id:"8",name:"Sherpur",bn_name:"শেরপুর",lat:"25.0204933",long:"90.0152966"},{id:"17",division_id:"3",name:"Tangail",bn_name:"টাঙ্গাইল",lat:"24.2513",long:"89.9167"},{id:"18",division_id:"5",name:"Bogura",bn_name:"বগুড়া",lat:"24.8465228",long:"89.377755"},{id:"19",division_id:"5",name:"Joypurhat",bn_name:"জয়পুরহাট",lat:"25.0968",long:"89.0227"},{id:"20",division_id:"5",name:"Naogaon",bn_name:"নওগাঁ",lat:"24.7936",long:"88.9318"},{id:"21",division_id:"5",name:"Natore",bn_name:"নাটোর",lat:"24.420556",long:"89.000282"},{id:"22",division_id:"5",name:"Nawabganj",bn_name:"নবাবগঞ্জ",lat:"24.5965034",long:"88.2775122"},{id:"23",division_id:"5",name:"Pabna",bn_name:"পাবনা",lat:"23.998524",long:"89.233645"},{id:"24",division_id:"5",name:"Rajshahi",bn_name:"রাজশাহী",lat:"24.3745",long:"88.6042"},{id:"25",division_id:"5",name:"Sirajgonj",bn_name:"সিরাজগঞ্জ",lat:"24.4533978",long:"89.7006815"},{id:"26",division_id:"6",name:"Dinajpur",bn_name:"দিনাজপুর",lat:"25.6217061",long:"88.6354504"},{id:"27",division_id:"6",name:"Gaibandha",bn_name:"গাইবান্ধা",lat:"25.328751",long:"89.528088"},{id:"28",division_id:"6",name:"Kurigram",bn_name:"কুড়িগ্রাম",lat:"25.805445",long:"89.636174"},{id:"29",division_id:"6",name:"Lalmonirhat",bn_name:"লালমনিরহাট",lat:"25.9923",long:"89.2847"},{id:"30",division_id:"6",name:"Nilphamari",bn_name:"নীলফামারী",lat:"25.931794",long:"88.856006"},{id:"31",division_id:"6",name:"Panchagarh",bn_name:"পঞ্চগড়",lat:"26.3411",long:"88.5541606"},{id:"32",division_id:"6",name:"Rangpur",bn_name:"রংপুর",lat:"25.7558096",long:"89.244462"},{id:"33",division_id:"6",name:"Thakurgaon",bn_name:"ঠাকুরগাঁও",lat:"26.0336945",long:"88.4616834"},{id:"34",division_id:"1",name:"Barguna",bn_name:"বরগুনা",lat:"22.0953",long:"90.1121"},{id:"35",division_id:"1",name:"Barishal",bn_name:"বরিশাল",lat:"22.7010",long:"90.3535"},{id:"36",division_id:"1",name:"Bhola",bn_name:"ভোলা",lat:"22.685923",long:"90.648179"},{id:"37",division_id:"1",name:"Jhalokati",bn_name:"ঝালকাঠি",lat:"22.6406",long:"90.1987"},{id:"38",division_id:"1",name:"Patuakhali",bn_name:"পটুয়াখালী",lat:"22.3596316",long:"90.3298712"},{id:"39",division_id:"1",name:"Pirojpur",bn_name:"পিরোজপুর",lat:"22.5841",long:"89.9720"},{id:"40",division_id:"2",name:"Bandarban",bn_name:"বান্দরবান",lat:"22.1953275",long:"92.2183773"},{id:"41",division_id:"2",name:"Brahmanbaria",bn_name:"ব্রাহ্মণবাড়িয়া",lat:"23.9570904",long:"91.1119286"},{id:"42",division_id:"2",name:"Chandpur",bn_name:"চাঁদপুর",lat:"23.2332585",long:"90.6712912"},{id:"43",division_id:"2",name:"Chattogram",bn_name:"চট্টগ্রাম",lat:"22.335109",long:"91.834073"},{id:"44",division_id:"2",name:"Cumilla",bn_name:"কুমিল্লা",lat:"23.4682747",long:"91.1788135"},{id:"45",division_id:"2",name:"Cox's Bazar",bn_name:"কক্স বাজার",lat:"21.4272",long:"92.0058"},{id:"46",division_id:"2",name:"Feni",bn_name:"ফেনী",lat:"23.0159",long:"91.3976"},{id:"47",division_id:"2",name:"Khagrachari",bn_name:"খাগড়াছড়ি",lat:"23.119285",long:"91.984663"},{id:"48",division_id:"2",name:"Lakshmipur",bn_name:"লক্ষ্মীপুর",lat:"22.942477",long:"90.841184"},{id:"49",division_id:"2",name:"Noakhali",bn_name:"নোয়াখালী",lat:"22.869563",long:"91.099398"},{id:"50",division_id:"2",name:"Rangamati",bn_name:"রাঙ্গামাটি",lat:"22.7324",long:"92.2985"},{id:"51",division_id:"7",name:"Habiganj",bn_name:"হবিগঞ্জ",lat:"24.374945",long:"91.41553"},{id:"52",division_id:"7",name:"Maulvibazar",bn_name:"মৌলভীবাজার",lat:"24.482934",long:"91.777417"},{id:"53",division_id:"7",name:"Sunamganj",bn_name:"সুনামগঞ্জ",lat:"25.0658042",long:"91.3950115"},{id:"54",division_id:"7",name:"Sylhet",bn_name:"সিলেট",lat:"24.8897956",long:"91.8697894"},{id:"55",division_id:"4",name:"Bagerhat",bn_name:"বাগেরহাট",lat:"22.651568",long:"89.785938"},{id:"56",division_id:"4",name:"Chuadanga",bn_name:"চুয়াডাঙ্গা",lat:"23.6401961",long:"88.841841"},{id:"57",division_id:"4",name:"Jashore",bn_name:"যশোর",lat:"23.16643",long:"89.2081126"},{id:"58",division_id:"4",name:"Jhenaidah",bn_name:"ঝিনাইদহ",lat:"23.5448176",long:"89.1539213"},{id:"59",division_id:"4",name:"Khulna",bn_name:"খুলনা",lat:"22.815774",long:"89.568679"},{id:"60",division_id:"4",name:"Kushtia",bn_name:"কুষ্টিয়া",lat:"23.901258",long:"89.120482"},{id:"61",division_id:"4",name:"Magura",bn_name:"মাগুরা",lat:"23.487337",long:"89.419956"},{id:"62",division_id:"4",name:"Meherpur",bn_name:"মেহেরপুর",lat:"23.762213",long:"88.631821"},{id:"63",division_id:"4",name:"Narail",bn_name:"নড়াইল",lat:"23.172534",long:"89.512672"},{id:"64",division_id:"4",name:"Satkhira",bn_name:"সাতক্ষীরা",lat:"22.7185",long:"89.0705"}],te={districts:oe};function be(){var k,C,D,S,q,P,$,j,z;const[b,v]=m.useState("COD"),[c,N]=m.useState("Dhaka"),{user:s}=Y(i=>i==null?void 0:i.user),[F,M]=m.useState(!0),[A,K]=m.useState("Dhaka"),T=Q(),G={email:s==null?void 0:s.email,district:A},{data:l,isLoading:u,isError:_}=W(G,{skip:F});console.log(l,"aaaa");const[J,{isLoading:y,isError:se,isSuccess:w,error:re}]=X();m.useEffect(()=>{s&&(M(!1),K(c==="Dhaka"?"Dhaka":"Others"))},[s,c]);const Z=i=>{v(i.target.value)},H=i=>{N(i.target.value),l==null||l._id},U=i=>{l==null||l._id},V=i=>{const n=s==null?void 0:s.email,r={shippingName:i.fName.concat(" ",i.lName),shippingPhone:i.contact,shippingEmail:i.email,country:"Bangladesh",city:i.city,district:i.district,address:i.address1.concat(" ",i.address2),postCode:i.zip,status:"pending",paymentType:b,totalAmount:l.data.total};console.log(r),J({userEmail:n,modifiedData:r})};let p=null;return u&&(p=e(ee,{})),!u&&_&&(p=e("p",{className:"text-danger",children:"Something was wrong!"})),!u&&!_&&((D=(C=(k=l==null?void 0:l.data)==null?void 0:k.cartData)==null?void 0:C.products)==null?void 0:D.length)===0&&(p=e("p",{className:"text-danger",children:"Your cart is empty"})),!u&&!_&&((P=(q=(S=l==null?void 0:l.data)==null?void 0:S.cartData)==null?void 0:q.products)==null?void 0:P.length)>0&&(p=(z=(j=($=l==null?void 0:l.data)==null?void 0:$.cartData)==null?void 0:j.products)==null?void 0:z.map(i=>{var n,r,h,g,f;return e(L,{children:a("tr",{className:"bb-no w-full",children:[e("td",{className:"",children:e("figure",{className:"product-media ",children:e(E,{to:`/product-details/${(n=i==null?void 0:i.product)==null?void 0:n._id}`,children:e("img",{className:"rounded-full border border-gray-100 shadow-sm min-h-[62px] min-w-[62px]",src:(h=(r=i==null?void 0:i.product)==null?void 0:r.images)==null?void 0:h[0],alt:"product",width:"62"})})})}),a("td",{className:"product-name",children:[(g=i==null?void 0:i.product)==null?void 0:g.name," ",e("b",{className:"mx-2",children:"x"}),e("span",{className:"product-quantity",children:i==null?void 0:i.quantity})]}),a("td",{className:"text-right",children:["৳ ",(f=i==null?void 0:i.product)==null?void 0:f.price]})]})})})),m.useEffect(()=>{w&&(I.success("Order has been placed successfully"),T("/order-complete"))},[w]),e(L,{children:a("div",{className:"container",children:[e(ne,{}),e(ie,{validateOnChange:!0,initialValues:{fName:"",lName:"",email:"",company:"",division:"",district:"",zip:"",contact:"",city:"",address1:"",address2:"",review:"",payment:""},validationSchema:ae().shape({division:d().required("Required"),district:d().required("Required"),zip:d().matches(/^\d{4}$/,"Please enter valid Zip Code").required("Required"),contact:d().matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,"Please enter valid contact no").required("Required"),city:d().matches(/^[A-Za-z ]*$/,"Please enter city name").required("Required"),address1:d().required("Required"),address2:d(),company:d(),fName:d().max(40,"Must be 40 characters or less").matches(/^[A-Za-z ]*$/,"Please enter valid name").required("Required"),lName:d().max(40,"Must be 40 characters or less").matches(/^[A-Za-z ]*$/,"Please enter valid name").required("Required"),email:d().email().required("Required"),review:d(),payment:d()}),onSubmit:i=>{V(i)},children:({errors:i,touched:n,handleSubmit:r,values:h,handleChange:g,setFieldValue:f})=>{var R,B,O;return a("form",{className:"px-4 grid grid-cols-9 text-[#333]",onSubmit:r,children:[a("div",{className:"col-span-9 lg:col-span-5 pr-4",children:[e("h3",{className:"uppercase pt-2 pb-4 mb-0 text-2xl font-bold text-[#333]",children:"Billing Details"}),a("div",{className:"w-full flex gap-2",children:[e("div",{className:"grow max-w-[50%]",children:a("div",{className:"mb-3",children:[e("label",{className:"inline-block mb-1",children:"First Name *"}),e(o,{type:"text",name:"fName",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.fName&&n.fName?"text-input border border-red-400":"text-input"}`}),i.fName&&n.fName&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.fName})]})}),e("div",{className:"grow max-w-[50%]",children:a("div",{className:"mb-3",children:[e("label",{className:"inline-block mb-1",children:"Last Name *"}),e(o,{type:"text",name:"lName",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.lName&&n.lName?"text-input border border-red-400":"text-input"}`}),i.lName&&n.lName&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.lName})]})})]}),a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Company name (optional)"}),e(o,{type:"text",name:"company",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.company&&n.company?"text-input border border-red-400":"text-input"}`}),i.company&&n.company&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.company})]}),a("div",{className:"form-control w-full mb-3",children:[e("label",{htmlFor:"division",className:"inline-block mb-1",children:e("span",{children:"Select Division"})}),e(o,{value:h.division,id:"division",name:"division",component:"select",className:`select select-bordered rounded-sm focus:outline-none ${i.division&&n.division?"text-input border border-red-400":"text-input"}`,onChange:t=>{g(t),H(t)},children:x==null?void 0:x.divisions.map(t=>e("option",{value:t.name,children:t.name},t.id))}),i.division&&n.division&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.division})]}),a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Street address *"}),a("div",{className:"form-control gap-2.5",children:[e(o,{type:"text",name:"address1",placeholder:"House number and street name",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.address1&&n.address1?"text-input border border-red-400":"text-input"}`}),e(o,{type:"text",name:"address2",placeholder:"Appartment suit, unit etc. (optional)",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.address2&&n.address2?"text-input border border-red-400":"text-input"}`})]}),i.address1&&n.address1&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.address1}),i.address2&&n.address2&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.address2})]}),a("div",{className:"w-full flex flex-wrap gap-2 mb-3",children:[e("div",{className:"grow max-w-[50%]",children:a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Town / City *"}),e(o,{type:"text",name:"city",id:"city",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.city&&n.city?"text-input border border-red-400":"text-input"}`}),i.city&&n.city&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.city})]})}),e("div",{className:"grow max-w-[50%]",children:a("div",{className:"form-control w-full mb-3",children:[e("label",{className:"inline-block mb-1",children:e("span",{children:"Select District"})}),a(o,{id:"district",name:"district",component:"select",className:`select select-bordered rounded-sm focus:outline-none ${i.district&&n.district?"text-input border border-red-400":"text-input"}`,children:[e("option",{disabled:!0,value:"",children:"Pick one"}),te.districts.map(t=>e("option",{value:t.name,children:t.name}))]}),i.district&&n.district&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.district})]})})]}),a("div",{className:"w-full flex flex-wrap gap-2",children:[e("div",{className:"grow max-w-[50%]",children:a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Zip / Postal Code *"}),e(o,{id:"zip",name:"zip",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.zip&&n.zip?"text-input border border-red-400":"text-input"}`}),i.zip&&n.zip&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.zip})]})}),e("div",{className:"grow max-w-[50%]",children:a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Phone *"}),e(o,{type:"text",name:"contact",id:"contact",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.contact&&n.contact?"text-input border border-red-400":"text-input"}`}),i.contact&&n.contact&&e("div",{className:"badge badge-outline badge-error block my-1",children:i.contact})]})})]}),a("div",{className:"form-group mb-3",children:[e("label",{className:"inline-block mb-1",children:"Email Adress *"}),e(o,{type:"email",name:"email",className:`input w-full input-bordered rounded-sm focus:outline-none ${i.email&&n.email?"text-input border border-red-400":"text-input"}`}),i.email&&n.email&&e("div",{className:"badge badge-error badge-outline block my-1",children:i.email})]}),a("div",{className:"mb-5",children:[e("label",{className:"inline-block mb-1",children:"Order notes (optional)"}),e(o,{component:"textarea",cols:30,rows:4,placeholder:"Notes about your order, e.g special notes for delivery",id:"review",name:"review",className:`form-control border w-full p-5 ${i.review&&n.review?"text-input border border-red-400":"text-input"}`}),i.review&&n.review&&e("div",{className:"badge badge-error badge-outline block my-1",children:i.review})]})]}),e("div",{className:"col-span-9 lg:col-span-4 mb-5 px-2.5",children:a("div",{className:"p-7 pt-0 w-full",children:[e("h3",{className:"pt-2 pb-4 mb-0 text-2xl font-bold text-[#333]",children:"Your Order"}),a("div",{children:[e(le,{handleCouponValidation:U}),a("table",{className:"table border border-[#eee] w-full z-0",children:[e("thead",{children:e("tr",{children:e("th",{colSpan:3,children:e("span",{className:"text-sm",children:"Product"})})})}),a("tbody",{children:[p,a("tr",{className:"cart-subtotal bb-no",children:[e("td",{children:e("b",{children:"Subtotal"})}),e("td",{}),e("td",{className:"text-right",children:a("b",{children:["৳"," ",(R=l==null?void 0:l.data)==null?void 0:R.subtotal]})})]}),a("tr",{className:"cart-subtotal bb-no",children:[e("td",{children:e("b",{children:"Delivery Fee"})}),e("td",{}),e("td",{className:"text-right",children:a("b",{children:["৳"," ",(B=l==null?void 0:l.data)==null?void 0:B.shippingCharge]})})]})]}),e("tfoot",{children:a("tr",{className:"text-[#333]",children:[e("th",{children:e("b",{className:"text-base font-bold",children:"Total"})}),e("td",{colSpan:3,className:"text-right",children:a("b",{className:"text-base font-bold ",children:["৳"," ",(O=l==null?void 0:l.data)==null?void 0:O.total]})})]})})]}),e("div",{className:"pt-6",children:a("div",{className:"p-4",children:[e("h3",{className:"pt-2 pb-4 mb-0 font-bold text-lg text-[#333]",children:"Payment methods"}),e("div",{className:"accordion payment-accordion",children:a("div",{className:"collapse",children:[e("input",{type:"checkbox",name:"payment-method",value:"COD",checked:b==="COD",onChange:Z}),a("div",{className:"collapse-title text-xl font-medium flex items-center gap-3 px-0 py-px",children:[e(o,{type:"radio",name:"radio-payment",className:"radio radio-xs shadow-2xl",value:"COD",checked:b==="COD"}),e("span",{className:"text-base",children:"Cash on delivery"})]}),e("div",{className:"collapse-content",children:e("p",{className:"mb-0 pl-2.5",children:"Pay with cash upon delivery."})})]})})]})}),e("div",{className:"form-group place-order pt-6",children:e("button",{disabled:y,type:"submit",className:"btn btn-block rounded-sm",children:y?"Loading..":"Place Order"})})]})]})})]})}})]})})}export{be as default};
