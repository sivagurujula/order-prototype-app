(this["webpackJsonporder-fttp-app"]=this["webpackJsonporder-fttp-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),l=(a(92),a(93),a(53)),s=a(70),m=a(36),c=a(148),p=a(152),d=a(145),u=a(159),h=a(153),g=a(157),f=a(154),E=a(151),v=a(34),b=a(21),y=a(50),T=a(62),x=a(63);var k=a(64),S=a(65),w=a(74),A=a(71),D=a(42),F=a(44),O=a(72),N=a(138),C=a(139),P=a(140),L=a(66),B=a.n(L),j=function(e){Object(w.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).showOtherSlots=function(){n.setState({showOtherSlots:!0})},n.reserveSlot=function(e){console.log("Slot selected: ",e),n.setState({showOtherSlots:!0,defaultSlot:e.slot,selectedAppointment:e})},n.onSubmitReserve=function(){n.props.history.push("/reserve/")},n.chunk=function(e,t,a){for(var o=[],i=e.length+e.length%t+1,l=0;l<i;l++){var s=e.slice(l*t,(l+1)*t).map((function(e,t){return r.a.createElement(F.a,{variant:a===e.id?"success":"light",key:e.id,value:e.id,className:"rounded mb-0 mr-2 block-example border border-dark",onClick:function(){return n.reserveSlot(e)}},e.slot)}));o.push(r.a.createElement(O.a,{name:"pickAppointment"+l,key:l,size:"lg",className:"mb-2",type:"radio"},s,r.a.createElement("br",null)))}return o},n.formatDateTimeSlot=function(e){var t=new Date(e.startDateTime),a={timeZone:"UTC",hour12:!0,hour:"numeric"},n=t.toLocaleTimeString({},a),r=new Date(e.endDateTime).toLocaleTimeString({},a),o=t.toLocaleDateString({},{weekday:"short"}),i=t.toLocaleDateString({},{month:"short"});return o+" "+t.getDate()+" "+i+"  "+n+" - "+r},n.getList=function(e){e.sort((function(e,t){return new Date(e.startDateTime)-new Date(t.startDateTime)})),console.log("getList:: loading...",n.props.isLoading);var t=void 0===e?[]:e.map((function(e,t){return{id:t+1,slot:n.formatDateTimeSlot(e),validFor:e}}));console.log("appointmentsJSON: ",t);var a=t[1].slot;return n.setState(Object(b.a)(Object(b.a)({},n.state),{},{appointmentsFromAPI:t,defaultSlot:a,selectedAppointment:t[1]})),n.props.reserveAppointment(t[1]),t},n.state={buttonsData:null,defaultSlot:"Mon 20 Jul 8am - 1pm",selectedAppointment:null,showOtherSlots:!1,appointmentsFromAPI:null},n}return Object(S.a)(a,[{key:"getAppointments",value:function(){var e=null==this.state.selectedAppointment?null:this.state.selectedAppointment.id;null==e&&(e=1);var t=this.state.appointmentsFromAPI;return this.chunk(null===t?this.getList(this.props.appointments):t,5,e)}},{key:"componentDidMount",value:function(){this.props.fetchAppointments()}},{key:"componentWillReceiveProps",value:function(e){this.props.appointments!==e.appointments&&(console.log("nextProps",e),console.log("cuurentProps",this.props),this.getList(e.appointments))}},{key:"render",value:function(){var e=this,t=this.state,a=t.defaultSlot,n=t.showOtherSlots,o=t.selectedAppointment,i=this.props.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{src:B.a}),r.a.createElement("br",null),i&&r.a.createElement(r.a.Fragment,null,"Loading..."),!n&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null," We've reserved the first available appointment"),r.a.createElement(D.a,{variant:"success",disabled:!0,className:"rounded mb-0 mr-2 block-example border border-dark"},a),r.a.createElement(C.a,{variant:"success"},"Reserved"),r.a.createElement("br",null),r.a.createElement("br",null)),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"Select an appointment"),r.a.createElement("div",{className:"box"},r.a.createElement(P.a,{name:"pickAppointment",defaultValue:o.id},this.getAppointments())))),r.a.createElement(D.a,{variant:"primary",onClick:function(){return e.showOtherSlots()}},"Pick Another Slot?")," ")}}]),a}(n.Component),W=Object(y.b)((function(e){return Object(b.a)({},e)}),(function(e){return{fetchAppointments:function(){e((console.log(" fetchAppointments"),function(e){console.log(" dispatch Request"),e({type:"getAppointmentsSucess",isLoading:!1,appointments:T.availableTimeSlot.map((function(e){return e.validFor}))}),console.log(" dispatch Sucess")}))},reserveAppointment:function(t){e(function(e){return console.log("reserveAppointment Input: ",e),function(e){console.log(" reserveAppointment dispatch Request"),e(function(e){return{type:"reserveAppointmentSucess",isLoading:!1,reservedAppointmentResponse:e}}(x)),console.log(" reserveAppointment dispatch Sucess")}}(t))}}}))(j),Z=a(144),I=a(155),M=a(147),R=a(156);function q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Payment method"),r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:12,md:6},r.a.createElement(I.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})),r.a.createElement(Z.a,{item:!0,xs:12,md:6},r.a.createElement(I.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})),r.a.createElement(Z.a,{item:!0,xs:12,md:6},r.a.createElement(I.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})),r.a.createElement(Z.a,{item:!0,xs:12,md:6},r.a.createElement(I.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(M.a,{control:r.a.createElement(R.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"}))))}function J(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Create Your BT ID"),r.a.createElement(Z.a,{container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name",value:"John"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name",value:"Shelton"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,id:"address1",name:"address1",label:"Mobile Contact Number",fullWidth:!0,autoComplete:"shipping address-line1"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{id:"address2",name:"address2",label:"Email Address",fullWidth:!0,autoComplete:"shipping address-line2"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,id:"zip",name:"zip",label:"Postal code",fullWidth:!0,autoComplete:"shipping postal-code",value:"PO16 7GZ"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(I.a,{required:!0,id:"password",name:"password",label:"Password",fullWidth:!0,type:"password",autoComplete:"shipping postal-code",value:"password"})),r.a.createElement(Z.a,{item:!0,xs:12,sm:6})))}var U=a(146),G=a(149),H=a(150),V=[{name:"Broadband",desc:"Full Fibre 900 Broadband Only Product",price:"$26.99"},{name:"Upfront cost",desc:"",price:"$9.99"}],$=["Hampshire","PO16 7GZ","UK"],z=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Shelton"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}],Y=Object(c.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function K(){var e=Y();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(U.a,{disablePadding:!0},V.map((function(t){return r.a.createElement(G.a,{className:e.listItem,key:t.name},r.a.createElement(H.a,{primary:t.name,secondary:t.desc}),r.a.createElement(v.a,{variant:"body2"},t.price))})),r.a.createElement(G.a,{className:e.listItem},r.a.createElement(H.a,{primary:"Total"}),r.a.createElement(v.a,{variant:"subtitle1",className:e.total},"$34.06"))),r.a.createElement(Z.a,{container:!0,spacing:2},r.a.createElement(Z.a,{item:!0,xs:12,sm:6},r.a.createElement(v.a,{variant:"h6",gutterBottom:!0,className:e.title},"Hub Delivery Address"),r.a.createElement(v.a,{gutterBottom:!0},"John Shelton"),r.a.createElement(v.a,{gutterBottom:!0},$.join(", "))),r.a.createElement(Z.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},r.a.createElement(v.a,{variant:"h6",gutterBottom:!0,className:e.title},"Payment details"),r.a.createElement(Z.a,{container:!0},z.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(v.a,{gutterBottom:!0},e.name)),r.a.createElement(Z.a,{item:!0,xs:6},r.a.createElement(v.a,{gutterBottom:!0},e.detail)))}))))))}function Q(){return r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"BT")," ",(new Date).getFullYear(),".")}var X=Object(c.a)((function(e){return{appBar:{position:"relative"},layout:Object(m.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:750,marginLeft:"auto",marginRight:"auto"}),paper:Object(m.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),_=["Personal Details","Appointment","Payment details","Review your order"];function ee(){var e=X(),t=r.a.useState(0),a=Object(s.a)(t,2),n=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(d.a,{className:e.paper},r.a.createElement(v.a,{component:"h1",variant:"h4",align:"center"},"Full Fibre Prototype"),r.a.createElement(u.a,{activeStep:n,className:e.stepper},_.map((function(e){return r.a.createElement(h.a,{key:e},r.a.createElement(g.a,null,e))}))),r.a.createElement(r.a.Fragment,null,n===_.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(v.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):r.a.createElement(r.a.Fragment,null,function(e){switch(e){case 0:return r.a.createElement(J,null);case 1:return r.a.createElement(W,null);case 2:return r.a.createElement(q,null);case 3:return r.a.createElement(K,null);default:throw new Error("Unknown step")}}(n),r.a.createElement("div",{className:e.buttons},0!==n&&r.a.createElement(f.a,{onClick:function(){o(n-1)},className:e.button},"Back"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){o(n+1)},className:e.button},n===_.length-1?"Place order":"Next"))))),r.a.createElement(Q,null)))}var te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{expand:"lg",bg:"primary",variant:"dark"},r.a.createElement(l.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","BT")),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(99);var ae=a(38),ne=a(69),re={isLoading:!1,appointments:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getAppointmentsRequest":return e;case"getAppointmentsSucess":return Object(b.a)(Object(b.a)({},e),{},{appointments:t.appointments,isLoading:t.isLoading});case"getAppointmentsFailure":default:return e}},ie=Object(ae.a)(ne.a),le=Object(ae.c)(oe,ie);i.a.render(r.a.createElement(y.a,{store:le},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e){e.exports=JSON.parse('{"id":"99","href":"https://host:port/appointment/searchTimeSlot/99","status":"created","searchDate":"2020-07-13T14:40:43.071Z","searchResult":"success","RelatedPlace":{"id":"888","href":"https://host:port/addressManagement/geographicAddress /888","name":"Main Home","role":"interventionAddress","@referredType":"GeographicAddress"},"requestedTimeSlot":[{"validFor":{"startDateTime":"2020-07-13T00:00:00.000Z","endDateTime":"2020-07-21T00:00:00.000Z"}}],"relatedEntity":[{"id":"789","href":"https://host:port/troubleTicket/troubleTicket/789","name":"Full Fiber installation","role":"Problem description","@referredType":"InstallationTicket"}],"availableTimeSlot":[{"validFor":{"startDateTime":"2020-07-15T14:00:00.000Z","endDateTime":"2020-07-15T16:00:00.000Z"},"relatedParty":{"id":"56","href":"https://host:port/partyManagement/individual/56","name":"John Doe","role":"technician","@referredType":"Individual"}},{"validFor":{"startDateTime":"2020-07-16T16:30:00.000Z","endDateTime":"2020-07-16T18:00:00.000Z"},"relatedParty":{"id":"56","href":"https://host:port/partyManagement/individual/56","name":"John Doe","role":"technician","@referredType":"Individual"}},{"validFor":{"startDateTime":"2020-07-15T16:00:00.000Z","endDateTime":"2020-07-15T17:00:00.000Z"},"relatedParty":{"id":"58","href":"https://host:port/partyManagement/individual/58","name":"Adam Smith","role":"technician","@referredType":"Individual"}}]}')},63:function(e){e.exports=JSON.parse('{"id":"21","href":"https://host:port/appointment/appointment/21","externalId":"432113","category":"intervention","description":"Fix an internet connexion problem for a customer","status":"accepted","creationDate":"2018-02-01T14:40:43.071Z","lastUpdate":"2018-02-04T14:40:43.071Z","validFor":{"startDateTime":"2018-02-15T14:00:00.071Z","endDateTime":"2018-02-15T16:00:00.071Z"},"attachment":[{"id":"4444","href":"https://host:port/documentManagement/customerContract/4444","isRef":true,"@referredType":"CustomerContract","@baseType":"Attachment"}],"calendarEvent":{"id":"33","href":" https://host:port/timeManagement/calendarEvent/33","name":"Outlook calendar event"},"relatedParty":[{"id":"32","href":"https://host:port/partyManagement/individual/32","name":"Kate Smith","role":"customer","@referredType":"Individual"},{"id":"56","href":"https://host:port/partyManagement/individual/56","name":"John Doe","role":"technician","@referredType":"Individual"}],"RelatedPlace":{"id":"888","href":"https://host:port/addressManagement /geographicAddress /888","name":"Main Home","role":"interventionAddress","@referredType":"GeographicAddress"},"relatedEntity":[{"id":"789","href":"https://host:port/troubleTicket/troubleTicket/789","role":"Problem description","name":"Internet connexion problem to solve","@referredType":"TroubleTicket"},{"id":"465","href":"https://host:port/workForceManagement/workOrder/465","role":"work order description","name":"Work order generated for technician intervention","@referredType":"WorkOrder"}],"note":[{"date":"2018-02-04T11:00:18.071Z","author":"Ludovic Robert","text":"Problem explained to the technician"},{"date":"2018-02-04T14:40:43.071Z","author":"Ludovic Robert","text":"Work order generated"}]}')},66:function(e,t,a){e.exports=a.p+"static/media/appointmentMsg.4a7b429e.jpg"},87:function(e,t,a){e.exports=a(100)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.6dc22cc1.chunk.js.map