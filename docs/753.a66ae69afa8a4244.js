"use strict";(self.webpackChunkwedding_guests=self.webpackChunkwedding_guests||[]).push([[753],{2753:(He,G,a)=>{a.r(G),a.d(G,{SettingsModule:()=>Je});var m=a(6814),u=a(95),W=a(2787),j=a(6208),f=a(7582),v=a(1791),O=a(1374),t=a(5879),M=a(6396),_=a(2920),z=a(3599),l=a(6028),x=a(8645),g=a(2438),F=a(3019),K=a(3997),h=a(9773),B=a(9087),c=a(7754),X=a(4300),y=a(9388),I=a(883),Z=a(2595),T=a(8324);const q=["upHandler"],ee=["downHandler"],te=["inputElement"];function ne(i,s){if(1&i&&t._UZ(0,"nz-form-item-feedback-icon",11),2&i){const e=t.oxw();t.Q6J("status",e.status)}}let fe=(()=>{class i{onModelChange(e){this.parsedValue=this.nzParser(e),this.inputElement.nativeElement.value=`${this.parsedValue}`;const n=this.getCurrentValidValue(this.parsedValue);this.setValue(n)}getCurrentValidValue(e){let n=e;return n=""===n?"":this.isNotCompleteNumber(n)?this.value:`${this.getValidValue(n)}`,this.toNumber(n)}isNotCompleteNumber(e){return isNaN(e)||""===e||null===e||!(!e||e.toString().indexOf(".")!==e.toString().length-1)}getValidValue(e){let n=parseFloat(e);return isNaN(n)?e:(n<this.nzMin&&(n=this.nzMin),n>this.nzMax&&(n=this.nzMax),n)}toNumber(e){if(this.isNotCompleteNumber(e))return e;const n=String(e);if(n.indexOf(".")>=0&&(0,c.DX)(this.nzPrecision)){if("function"==typeof this.nzPrecisionMode)return this.nzPrecisionMode(e,this.nzPrecision);if("cut"===this.nzPrecisionMode){const o=n.split(".");return o[1]=o[1].slice(0,this.nzPrecision),Number(o.join("."))}return Number(Number(e).toFixed(this.nzPrecision))}return Number(e)}getRatio(e){let n=1;return e.metaKey||e.ctrlKey?n=.1:e.shiftKey&&(n=10),n}down(e,n){this.isFocused||this.focus(),this.step("down",e,n)}up(e,n){this.isFocused||this.focus(),this.step("up",e,n)}getPrecision(e){const n=e.toString();if(n.indexOf("e-")>=0)return parseInt(n.slice(n.indexOf("e-")+2),10);let o=0;return n.indexOf(".")>=0&&(o=n.length-n.indexOf(".")-1),o}getMaxPrecision(e,n){if((0,c.DX)(this.nzPrecision))return this.nzPrecision;const o=this.getPrecision(n),r=this.getPrecision(this.nzStep),p=this.getPrecision(e);return e?Math.max(p,o+r):o+r}getPrecisionFactor(e,n){const o=this.getMaxPrecision(e,n);return Math.pow(10,o)}upStep(e,n){const o=this.getPrecisionFactor(e,n),r=Math.abs(this.getMaxPrecision(e,n));let p;return p="number"==typeof e?((o*e+o*this.nzStep*n)/o).toFixed(r):this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(p)}downStep(e,n){const o=this.getPrecisionFactor(e,n),r=Math.abs(this.getMaxPrecision(e,n));let p;return p="number"==typeof e?((o*e-o*this.nzStep*n)/o).toFixed(r):this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(p)}step(e,n,o=1){if(this.stop(),n.preventDefault(),this.nzDisabled)return;const r=this.getCurrentValidValue(this.parsedValue)||0;let p=0;"up"===e?p=this.upStep(r,o):"down"===e&&(p=this.downStep(r,o));const d=p>this.nzMax||p<this.nzMin;p>this.nzMax?p=this.nzMax:p<this.nzMin&&(p=this.nzMin),this.setValue(p),this.updateDisplayValue(p),this.isFocused=!0,!d&&(this.autoStepTimer=setTimeout(()=>{this[e](n,o)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(e){if(`${this.value}`!=`${e}`&&this.onChange(e),this.value=e,this.parsedValue=e,this.disabledUp=this.disabledDown=!1,e||0===e){const n=Number(e);n>=this.nzMax&&(this.disabledUp=!0),n<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(e){const n=(0,c.DX)(this.nzFormatter(e))?this.nzFormatter(e):"";this.displayValue=n,this.inputElement.nativeElement.value=`${n}`}writeValue(e){this.value=e,this.setValue(e),this.updateDisplayValue(e),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(e,n,o,r,p,d,V,L,U){this.ngZone=e,this.elementRef=n,this.cdr=o,this.focusMonitor=r,this.renderer=p,this.directionality=d,this.destroy$=V,this.nzFormStatusService=L,this.nzFormNoStatusService=U,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new x.x,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new t.vpe,this.nzFocus=new t.vpe,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=A=>A.trim().replace(/\u3002/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=A=>A}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,K.x)((e,n)=>e.status===n.status&&e.hasFeedback===n.hasFeedback),(0,h.R)(this.destroy$)).subscribe(({status:e,hasFeedback:n})=>{this.setStatusStyles(e,n)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,h.R)(this.destroy$)).subscribe(e=>{e?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe((0,h.R)(this.destroy$)).subscribe(e=>{this.dir=e}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{(0,g.R)(this.inputElement.nativeElement,"keyup").pipe((0,h.R)(this.destroy$)).subscribe(()=>this.stop()),(0,g.R)(this.inputElement.nativeElement,"keydown").pipe((0,h.R)(this.destroy$)).subscribe(e=>{const{keyCode:n}=e;n!==l.LH&&n!==l.JH&&n!==l.K5||this.ngZone.run(()=>{if(n===l.LH){const o=this.getRatio(e);this.up(e,o),this.stop()}else if(n===l.JH){const o=this.getRatio(e);this.down(e,o),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(e){const{nzStatus:n,nzDisabled:o}=e;if(e.nzFormatter&&!e.nzFormatter.isFirstChange()){const r=this.getCurrentValidValue(this.parsedValue);this.setValue(r),this.updateDisplayValue(r)}o&&this.disabled$.next(this.nzDisabled),n&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{(0,F.T)((0,g.R)(this.upHandler.nativeElement,"mouseup"),(0,g.R)(this.upHandler.nativeElement,"mouseleave"),(0,g.R)(this.downHandler.nativeElement,"mouseup"),(0,g.R)(this.downHandler.nativeElement,"mouseleave")).pipe((0,h.R)(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(e,n){this.status=e,this.hasFeedback=n,this.cdr.markForCheck(),this.statusCls=(0,c.Zu)(this.prefixCls,e,n),Object.keys(this.statusCls).forEach(o=>{this.statusCls[o]?this.renderer.addClass(this.elementRef.nativeElement,o):this.renderer.removeClass(this.elementRef.nativeElement,o)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(X.tE),t.Y36(t.Qsj),t.Y36(y.Is,8),t.Y36(B.kn),t.Y36(I.kH,8),t.Y36(I.yW,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-input-number"]],viewQuery:function(e,n){if(1&e&&(t.Gf(q,7),t.Gf(ee,7),t.Gf(te,7)),2&e){let o;t.iGM(o=t.CRH())&&(n.upHandler=o.first),t.iGM(o=t.CRH())&&(n.downHandler=o.first),t.iGM(o=t.CRH())&&(n.inputElement=o.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(e,n){2&e&&t.ekj("ant-input-number-in-form-item",!!n.nzFormStatusService)("ant-input-number-focused",n.isFocused)("ant-input-number-lg","large"===n.nzSize)("ant-input-number-sm","small"===n.nzSize)("ant-input-number-disabled",n.nzDisabled)("ant-input-number-readonly",n.nzReadOnly)("ant-input-number-rtl","rtl"===n.dir)("ant-input-number-borderless",n.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:"nzMin",nzMax:"nzMax",nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:"nzStep",nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:"nzDisabled",nzReadOnly:"nzReadOnly",nzAutoFocus:"nzAutoFocus",nzBorderless:"nzBorderless",nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],features:[t._Bn([{provide:u.JU,useExisting:(0,t.Gpc)(()=>i),multi:!0},B.kn]),t.TTD],decls:11,vars:15,consts:[[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["upHandler",""],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["downHandler",""],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"disabled","placeholder","readOnly","ngModel","ngModelChange"],["inputElement",""],["class","ant-input-number-suffix",3,"status",4,"ngIf"],[1,"ant-input-number-suffix",3,"status"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"span",1,2),t.NdJ("mousedown",function(r){return n.up(r)}),t._UZ(3,"span",3),t.qZA(),t.TgZ(4,"span",4,5),t.NdJ("mousedown",function(r){return n.down(r)}),t._UZ(6,"span",6),t.qZA()(),t.TgZ(7,"div",7)(8,"input",8,9),t.NdJ("ngModelChange",function(r){return n.onModelChange(r)}),t.qZA()(),t.YNc(10,ne,1,1,"nz-form-item-feedback-icon",10)),2&e&&(t.xp6(1),t.ekj("ant-input-number-handler-up-disabled",n.disabledUp),t.xp6(3),t.ekj("ant-input-number-handler-down-disabled",n.disabledDown),t.xp6(4),t.Q6J("disabled",n.nzDisabled)("placeholder",n.nzPlaceHolder)("readOnly",n.nzReadOnly)("ngModel",n.displayValue),t.uIk("id",n.nzId)("autofocus",n.nzAutoFocus?"autofocus":null)("min",n.nzMin)("max",n.nzMax)("step",n.nzStep)("inputmode",n.nzInputMode),t.xp6(2),t.Q6J("ngIf",n.hasFeedback&&!!n.status&&!n.nzFormNoStatusService))},dependencies:[m.O5,u.Fj,u.JJ,u.On,Z.Ls,I.w_],encapsulation:2,changeDetection:0}),(0,f.gn)([(0,c.yF)()],i.prototype,"nzDisabled",void 0),(0,f.gn)([(0,c.yF)()],i.prototype,"nzReadOnly",void 0),(0,f.gn)([(0,c.yF)()],i.prototype,"nzAutoFocus",void 0),(0,f.gn)([(0,c.yF)()],i.prototype,"nzBorderless",void 0),i})(),ge=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.vT,m.ez,u.u5,T.T,Z.PV,I.mJ]}),i})();var b;function ze(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"li")(1,"input",1),t.NdJ("ngModelChange",function(o){const p=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateCats(p.key,o))}),t.qZA(),t.TgZ(2,"label",2),t._uU(3),t.qZA()()}if(2&i){const e=s.$implicit;t.xp6(1),t.Q6J("name",e.key)("placeholder",e.key)("ngModel",e.value),t.xp6(2),t.hij(" ",e.key," ")}}let D=((b=class{constructor(s){this.ds=s,this.catColors=null}ngOnInit(){this.ds.state$.pipe((0,v.t)(this),(0,O.P)()).subscribe(({catColors:s})=>{this.catColors=s})}updateCats(s,e){this.ds.updateCatColor(s,e)}trackCat(s,{value:n}){return n}}).\u0275fac=function(s){return new(s||b)(t.Y36(M.D))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-categories"]],decls:3,vars:4,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],["type","color",3,"name","placeholder","ngModel","ngModelChange"],["nzFor","sizeMm"]],template:function(s,e){1&s&&(t.TgZ(0,"ul"),t.YNc(1,ze,4,4,"li",0),t.ALo(2,"keyvalue"),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,e.catColors))("ngForTrackBy",e.trackCat))},dependencies:[m.sg,u.Fj,u.JJ,u.On,m.Nd],styles:[":host{display:block;width:100%;padding:1em}li{list-style:none;display:inline-block;margin-right:2em}ul{margin:0;display:grid;width:100%;min-width:30em;grid-template-columns:repeat(auto-fit,12em)}ul li{text-align:start}input{border-radius:50%;width:2em;height:2em;border:none}\n"],encapsulation:2,changeDetection:0}),b);D=(0,f.gn)([(0,v.c)()],D);var be=a(9862),S=a(3651),P=a(331),N=a(824),w=a(7394),J=a(4911),R=a(2181),Ce=a(9397),Se=a(5177),H=a(8180),$=a(4664),ve=a(8484),_e=a(4194);function xe(i,s){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.nzLabel)}}const ye=[[["nz-auto-option"]]],Ie=["nz-auto-option"],Q=["*"],Ne=["panel"],Ae=["content"];function Oe(i,s){}function Me(i,s){1&i&&t.YNc(0,Oe,0,0,"ng-template")}function Fe(i,s){1&i&&t.Hsn(0)}function Te(i,s){if(1&i&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.Q6J("nzValue",e)("nzLabel",e&&e.label?e.label:e),t.xp6(1),t.hij(" ",e&&e.label?e.label:e," ")}}function De(i,s){if(1&i&&t.YNc(0,Te,2,3,"nz-auto-option",7),2&i){const e=t.oxw(2);t.Q6J("ngForOf",e.nzDataSource)}}function Pe(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onAnimationEvent(o))}),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,Me,1,0,null,4),t.qZA()()(),t.YNc(5,Fe,1,0,"ng-template",null,5,t.W1O),t.YNc(7,De,1,1,"ng-template",null,6,t.W1O)}if(2&i){const e=t.MAs(6),n=t.MAs(8),o=t.oxw();t.ekj("ant-select-dropdown-hidden",!o.showPanel)("ant-select-dropdown-rtl","rtl"===o.dir),t.Q6J("ngClass",o.nzOverlayClassName)("ngStyle",o.nzOverlayStyle)("nzNoAnimation",null==o.noAnimation?null:o.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",!(null==o.noAnimation||!o.noAnimation.nzNoAnimation)),t.xp6(4),t.Q6J("ngTemplateOutlet",o.nzDataSource?n:e)}}let we=(()=>{class i{constructor(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Ie,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(e,n){1&e&&(t.F$t(ye),t.TgZ(0,"div",0),t.YNc(1,xe,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&e&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzLabel))},dependencies:[T.f],encapsulation:2,changeDetection:0}),i})();class Re{constructor(s,e=!1){this.source=s,this.isUserInput=e}}let k=(()=>{class i{constructor(e,n,o,r){this.ngZone=e,this.changeDetectorRef=n,this.element=o,this.nzAutocompleteOptgroupComponent=r,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new x.x}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,g.R)(this.element.nativeElement,"mouseenter").pipe((0,R.h)(()=>this.mouseEntered.observers.length>0),(0,h.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,g.R)(this.element.nativeElement,"mousedown").pipe((0,h.R)(this.destroy$)).subscribe(e=>e.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(e=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),e&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,c.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(e=!1){this.selectionChange.emit(new Re(this,e))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(we,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.selectViaInteraction()}),2&e&&(t.uIk("aria-selected",n.selected.toString())("aria-disabled",n.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",n.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",n.selected)("ant-select-item-option-active",n.active)("ant-select-item-option-disabled",n.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:Q,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,f.gn)([(0,c.yF)()],i.prototype,"nzDisabled",void 0),i})();const ke={provide:u.JU,useExisting:(0,t.Gpc)(()=>Y),multi:!0};let Y=(()=>{class i{get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}constructor(e,n,o,r,p,d){this.ngZone=e,this.elementRef=n,this.overlay=o,this.viewContainerRef=r,this.nzInputGroupWhitSuffixOrPrefixDirective=p,this.document=d,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new x.x,this.overlayRef=null,this.portal=null,this.previousValue=null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,h.R)(this.destroy$)).subscribe(e=>{"void"===e.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(e){this.ngZone.runOutsideAngular(()=>Promise.resolve(null).then(()=>this.setTriggerValue(e)))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.elementRef.nativeElement.disabled=e,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(e){const n=e.keyCode,o=n===l.LH||n===l.JH;n===l.hY&&e.preventDefault(),!this.panelOpen||n!==l.hY&&n!==l.Mf?this.panelOpen&&n===l.K5?this.nzAutocomplete.showPanel&&(e.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&o&&this.nzAutocomplete.showPanel&&(e.stopPropagation(),e.preventDefault(),n===l.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(e){const n=e.target,o=this.document;let r=n.value;"number"===n.type&&(r=""===r?null:parseFloat(r)),this.previousValue!==r&&(this.previousValue=r,this.onChange(r),this.canOpen()&&o.activeElement===e.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,Ce.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Se.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(e=>{this.setValueAndClose(e)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,R.h)(e=>!this.elementRef.nativeElement.contains(e.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function Ee(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new ve.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,h.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new S.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const e=[new S.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new S.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(e).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const e=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==e?(this.nzAutocomplete.setActiveItem(e),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(e){const n=e.nzValue;this.setTriggerValue(e.getLabel()),this.onChange(n),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(e){const n=this.nzAutocomplete.getOption(e),o=n?n.getLabel():e;this.elementRef.nativeElement.value=o??"",this.nzAutocomplete.nzBackfill||(this.previousValue=o)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const e=this.elementRef.nativeElement;return!e.readOnly&&!e.disabled}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(S.aV),t.Y36(t.s_b),t.Y36(N.ke,8),t.Y36(m.K0,8))},i.\u0275dir=t.lG2({type:i,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(e,n){1&e&&t.NdJ("focusin",function(){return n.handleFocus()})("blur",function(){return n.handleBlur()})("input",function(r){return n.handleInput(r)})("keydown",function(r){return n.handleKeydown(r)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([ke])]}),i})(),Ve=(()=>{class i{get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}constructor(e,n,o,r){this.changeDetectorRef=e,this.ngZone=n,this.directionality=o,this.noAnimation=r,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(p,d)=>p===d,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new x.x,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=w.w0.EMPTY,this.optionMouseEnterSubscription=w.w0.EMPTY,this.dataSourceChangeSubscription=w.w0.EMPTY,this.optionSelectionChanges=(0,J.P)(()=>this.options?(0,F.T)(...this.options.map(p=>p.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,H.q)(1),(0,$.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,J.P)(()=>this.options?(0,F.T)(...this.options.map(p=>p.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,H.q)(1),(0,$.w)(()=>this.optionMouseEnter)))}ngOnInit(){this.directionality.change?.pipe((0,h.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(e){this.animationStateChange.emit(e)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(e){const n=this.options.get(e);n&&!n.active?(this.activeItem=n,this.activeItemIndex=e,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(e){return this.options.reduce((n,o,r)=>-1===n?this.compareWith(e,o.nzValue)?r:-1:n,-1)}getOption(e){return this.options.find(n=>this.compareWith(e,n.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(n=>{!n.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(e,n=!1){this.options.forEach(o=>{o!==e&&(n&&o.deselect(),o.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,R.h)(e=>e.isUserInput)).subscribe(e=>{e.source.select(),e.source.setActiveStyles(),this.activeItem=e.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e.source,!0),this.selectionChange.emit(e.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(e=>{e.setActiveStyles(),this.activeItem=e,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(y.Is,8),t.Y36(P.P,9))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-autocomplete"]],contentQueries:function(e,n,o){if(1&e&&t.Suo(o,k,5),2&e){let r;t.iGM(r=t.CRH())&&(n.fromContentOptions=r)}},viewQuery:function(e,n){if(1&e&&(t.Gf(t.Rgc,5),t.Gf(Ne,5),t.Gf(Ae,5),t.Gf(k,5)),2&e){let o;t.iGM(o=t.CRH())&&(n.template=o.first),t.iGM(o=t.CRH())&&(n.panel=o.first),t.iGM(o=t.CRH())&&(n.content=o.first),t.iGM(o=t.CRH())&&(n.fromDataSourceOptions=o)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:Q,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(e,n){1&e&&(t.F$t(),t.YNc(0,Pe,9,10,"ng-template"))},dependencies:[m.mk,m.sg,m.tP,m.PC,P.P,k],encapsulation:2,data:{animation:[_e.mF]},changeDetection:0}),(0,f.gn)([(0,c.yF)()],i.prototype,"nzDefaultActiveFirstOption",void 0),(0,f.gn)([(0,c.yF)()],i.prototype,"nzBackfill",void 0),i})(),Ge=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.vT,m.ez,S.U8,T.T,P.g,N.o7]}),i})(),Be=(()=>{class i{constructor(e,n){this.http=e,this.ds=n,this.fonts=[],this.suggestions=[],this.activeFont=""}ngOnInit(){this.http.get("./assets/fonts.json").subscribe(e=>{this.fonts=e,this.suggestions=this.fonts}),this.ds.fontFamily.pipe((0,O.P)()).subscribe(e=>this.activeFont=e)}onFontChange(e){this.ds.setFontFamily(e)}onComplete(e){return this.fonts.filter(n=>n.includes(e))}onSearch(e){const n=e.currentTarget.value;this.suggestions=[n,...this.fonts.filter(o=>new RegExp(n,"i").test(o))]}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(be.eN),t.Y36(M.D))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-font-picker"]],decls:7,vars:5,consts:[["nzFor","fontFamily",3,"nzSpan"],[3,"nzSpan"],["placeholder","input here","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","input"],["nzBackfill","",3,"nzDataSource","selectionChange"],["auto",""]],template:function(e,n){if(1&e&&(t.TgZ(0,"nz-form-item")(1,"nz-form-label",0),t._uU(2,"Font family"),t.qZA(),t.TgZ(3,"nz-form-control",1)(4,"input",2),t.NdJ("ngModelChange",function(r){return n.activeFont=r})("input",function(r){return n.onSearch(r)})("ngModelChange",function(r){return n.onFontChange(r)}),t.qZA(),t.TgZ(5,"nz-autocomplete",3,4),t.NdJ("selectionChange",function(r){return n.onFontChange(r.nzValue)}),t.qZA()()()),2&e){const o=t.MAs(6);t.xp6(1),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",n.activeFont)("nzAutocomplete",o),t.xp6(1),t.Q6J("nzDataSource",n.suggestions)}},dependencies:[u.Fj,u.JJ,u.On,_.t3,_.SK,z.Nx,z.iK,z.Fd,Ve,Y,N.Zp]}),i})();var C;let E=((C=class{constructor(s){this.ds=s,this.sizeMm=25,this.fontSizeMm=8,this.marginMm=3,this.paddingMm=1,this.paperWMm=210,this.paperHMm=297,this.pages=[["A3",297,420],["A4",210,297],["A5",148,210],["A6",105,148],["B5",176,250],["C0",917,1297],["C1",648,917],["C10",28,40],["C2",458,648],["C3",324,458],["C4",229,324],["C5",162,229],["C6",114,162],["C7",81,114],["C8",57,81],["C9",40,57],["Executive",184.15,266.7],["Foolscap",215.9,342.9],["Government Letter",203.2,266.7],["Half Letter",139.7,215.9],["ISO B0",1e3,1414],["ISO B1",707,1e3],["ISO B10",31,44],["ISO B2",500,707],["ISO B3",353,500],["ISO B4",250,353],["ISO B5",176,250],["ISO B6",125,176],["ISO B7",88,125],["ISO B8",62,88],["ISO B9",44,62],["Junior Legal",127,203.2],["Legal",215.9,355.6],["Letter",215.9,279.4],["Postcard",101.6,152.4],["Statement",139.7,215.9],["Tabloid / Ledger",279.4,431.8]]}ngOnInit(){this.ds.printSettings.pipe((0,v.t)(this),(0,O.P)()).subscribe(({sizeMm:s,marginMm:e,paddingMm:n,fontSizeMm:o,paperHMm:r,paperWmm:p})=>{this.sizeMm=s,this.marginMm=e,this.paddingMm=n,this.fontSizeMm=o,this.paperHMm=r,this.paperWMm=p})}makeChange(s,e){this.ds.printSettings.next({sizeMm:this.sizeMm,marginMm:this.marginMm,fontSizeMm:this.fontSizeMm,paddingMm:this.paddingMm,paperWmm:210,paperHMm:297,[s]:e||0})}}).\u0275fac=function(s){return new(s||C)(t.Y36(M.D))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-settings"]],decls:36,vars:31,consts:[[1,"no-print"],[1,"inputs"],["nzFor","sizeMm",3,"nzSpan"],[3,"nzSpan"],[3,"ngModel","nzMin","nzStep","ngModelChange"],["nzFor","marginMm",3,"nzSpan"],["required","",3,"ngModel","nzMin","nzStep","ngModelChange"],["nzFor","paddingMm",3,"nzSpan"],["nzFor","fontSizeMm",3,"nzSpan"],[3,"ngModel","nzMin","nzStep","nzMax","ngModelChange"],["nzFor","paperWMm",3,"nzSpan"],["nzFor","paperHMm",3,"nzSpan"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Print Settings"),t.qZA(),t.TgZ(3,"div",1)(4,"nz-form-item")(5,"nz-form-label",2),t._uU(6," Badge size (mm) "),t.qZA(),t.TgZ(7,"nz-form-control",3)(8,"nz-input-number",4),t.NdJ("ngModelChange",function(o){return e.sizeMm=o})("ngModelChange",function(o){return e.makeChange("sizeMm",o)}),t.qZA()()(),t.TgZ(9,"nz-form-item")(10,"nz-form-label",5),t._uU(11," Badge bleed (mm) "),t.qZA(),t.TgZ(12,"nz-form-control",3)(13,"nz-input-number",6),t.NdJ("ngModelChange",function(o){return e.marginMm=o})("ngModelChange",function(o){return e.makeChange("marginMm",o)}),t.qZA()()(),t.TgZ(14,"nz-form-item")(15,"nz-form-label",7),t._uU(16," Spacing size (mm) "),t.qZA(),t.TgZ(17,"nz-form-control",3)(18,"nz-input-number",4),t.NdJ("ngModelChange",function(o){return e.paddingMm=o})("ngModelChange",function(o){return e.makeChange("paddingMm",o)}),t.qZA()()(),t.TgZ(19,"nz-form-item")(20,"nz-form-label",8),t._uU(21," Font size (mm) "),t.qZA(),t.TgZ(22,"nz-form-control",3)(23,"nz-input-number",9),t.NdJ("ngModelChange",function(o){return e.fontSizeMm=o})("ngModelChange",function(o){return e.makeChange("fontSizeMm",o)}),t.qZA()()(),t._UZ(24,"app-font-picker"),t.TgZ(25,"nz-form-item")(26,"nz-form-label",10),t._uU(27," Paper width (mm) "),t.qZA(),t.TgZ(28,"nz-form-control",3)(29,"nz-input-number",4),t.NdJ("ngModelChange",function(o){return e.paperWMm=o})("ngModelChange",function(o){return e.makeChange("paperWMm",o)}),t.qZA()()(),t.TgZ(30,"nz-form-item")(31,"nz-form-label",11),t._uU(32," Paper height (mm) "),t.qZA(),t.TgZ(33,"nz-form-control",3)(34,"nz-input-number",4),t.NdJ("ngModelChange",function(o){return e.paperHMm=o})("ngModelChange",function(o){return e.makeChange("paperHMm",o)}),t.qZA()()()(),t._UZ(35,"app-categories"),t.qZA()),2&s&&(t.xp6(5),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.sizeMm)("nzMin",25)("nzStep",1),t.xp6(2),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.marginMm)("nzMin",0)("nzStep",.5),t.xp6(2),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.paddingMm)("nzMin",0)("nzStep",.5),t.xp6(2),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.fontSizeMm)("nzMin",3)("nzStep",.2)("nzMax",50),t.xp6(3),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.paperWMm)("nzMin",3)("nzStep",1),t.xp6(2),t.Q6J("nzSpan",10),t.xp6(2),t.Q6J("nzSpan",14),t.xp6(1),t.Q6J("ngModel",e.paperHMm)("nzMin",3)("nzStep",1))},dependencies:[u.JJ,u.Q7,u.On,_.t3,_.SK,z.Nx,z.iK,z.Fd,fe,D,Be],styles:[".inputs[_ngcontent-%COMP%]{width:30em}"]}),C);E=(0,f.gn)([(0,v.c)()],E);const Ze=[{path:"",component:E}];let Je=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,u.u5,z.U5,Ge,N.o7,ge,j.m,W.Bz.forChild(Ze)]}),i})()}}]);