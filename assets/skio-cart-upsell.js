import{LitElement,html,css}from"https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";const skioCartStyles=css`
  .skio-cart-upsell {
    
    width: 100%;
    padding: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    cursor: pointer;
    max-width: 300px;
    font-size: 13px;
  }

  .skio-cart-upgrade {
    background: transparent;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    /* padding: 5px; */
    /* width: 100%; */
  }

  /* .skio-cart-upgrade:hover {
    color: #000;
    background: rgb(245, 240, 229);
  } */

  .skio-cart-change-frequency, .skio-cart-upgrade-button {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    align-items: center;
  }

  .skio-radio__container {
    /* display: flex; */
    /* margin: 0 10px; */
    border: 1px solid #000;
    height: 18px;
    min-width: 18px;
    position: relative;
    margin-right: 10px;
  }
  
  .skio-radio {
    opacity: 0;

    height: 13px;
    width: 13px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .skio-group-label:hover .skio-radio {
    /* transform: scale(1); */
    opacity: 0.75;
  }
  .skio-cart-change-frequency .skio-radio {
    opacity: 1;
  }
`;export class SkioCartUpsell extends LitElement{static styles=skioCartStyles;static properties={item:{type:Object},line:{type:Number},product:{type:Object},selectedVariant:{type:Object},key:{type:String},skioSellingPlanGroups:{},availableSellingPlanGroups:{},selectedSellingPlanGroup:{},selectedSellingPlan:{},discount_format:{type:String},moneyFormatter:{},currency:{type:String}};constructor(){super(),this.item=null,this.line=null,this.product=null,this.selectedVariant=null,this.skioSellingPlanGroups=null,this.availableSellingPlanGroups=null,this.selectedSellingPlanGroup=null,this.selectedSellingPlan=null,this.discountFormat="percent",this.currency="USD",this.moneyFormatter=new Intl.NumberFormat("en-US",{style:"currency",currency:this.currency})}upgradeButton=()=>this.availableSellingPlanGroups?.length>0?html`
        <div class="skio-cart-upgrade-button">
          <button class="skio-cart-upgrade" type="button" @click=${()=>this.selectSellingPlan(this.availableSellingPlanGroups[0].selected_selling_plan.id)}>
            <div class="skio-radio__container">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" stroke="currentColor" viewBox="0 0 448 448"  class="skio-radio">
                <path d="M443.121 99.162c6.996-5.999 5.995-14.995 0-21.994-6.002-6.998-15.995-6.998-21.997 0L160.202 337.092 27.241 205.131c-5.999-6.998-14.995-5.999-21.994 0s-6.998 15.995 0 21.994l143.958 143.959c2.999 2.998 6.998 4.997 10.997 4.997s7.998-1.999 10.997-4.997L443.121 99.162z"></path>
              </svg>
            </div>
          </button>
          <div>
            Save 15% when you subscribe
          </div>
        </div>
    `:html``;changeFrequency=()=>html`
      <div class="skio-cart-change-frequency">
        <div class="skio-radio__container">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="img" stroke="currentColor" viewBox="0 0 448 448"  class="skio-radio">
            <path d="M443.121 99.162c6.996-5.999 5.995-14.995 0-21.994-6.002-6.998-15.995-6.998-21.997 0L160.202 337.092 27.241 205.131c-5.999-6.998-14.995-5.999-21.994 0s-6.998 15.995 0 21.994l143.958 143.959c2.999 2.998 6.998 4.997 10.997 4.997s7.998-1.999 10.997-4.997L443.121 99.162z"></path>
          </svg>
        </div>
        <select class="skio-cart-upsell" skio-cart-upsell="${this.key}" @change=${e=>this.selectSellingPlan(e.target.value)}>
          ${this.product.requires_selling_plan?"":html`
            <optgroup label="One Time Purchase">
              <option value="">One-time</option>
            </optgroup>
            `}

          ${this.availableSellingPlanGroups?this.availableSellingPlanGroups.map((group,index)=>html`
              <optgroup label="${group.name} (Save ${this.discount(group.selected_selling_plan).percent})">
                ${group?group.selling_plans.map(selling_plan=>html`
                  <option value="${selling_plan.id}" .selected=${selling_plan.id==this.selectedSellingPlan?.id}>
                    ${selling_plan.name}
                  </option>
                  `):""}
              </optgroup>
            `):""}
        </select>
      </div>
    `;render(){if(!(!this.item||!this.product||!this.selectedVariant))return this.selectedSellingPlan?this.changeFrequency():this.upgradeButton()}updated=changed=>{changed.has("item")&&this.item&&this.fetchProduct(this.item.handle),changed.has("product")&&this.product&&(this.skioSellingPlanGroups=this.product.selling_plan_groups.filter(selling_plan_group=>selling_plan_group.app_id==="SKIO"),this.selectedVariant=this.product.variants.find(variant=>variant.id==this.item.variant_id),this.item.selling_plan_allocation&&(this.selectedSellingPlanGroup=this.skioSellingPlanGroups.find(group=>group.selling_plans.find(selling_plan=>selling_plan.id==this.item.selling_plan_allocation.selling_plan.id)),this.selectedSellingPlan=this.selectedSellingPlanGroup.selling_plans.find(selling_plan=>selling_plan.id==this.item.selling_plan_allocation.selling_plan.id))),changed.has("selectedVariant")&&this.selectedVariant&&(this.availableSellingPlanGroups=this.skioSellingPlanGroups.filter(selling_plan_group=>selling_plan_group.selling_plans.some(selling_plan=>this.selectedVariant.selling_plan_allocations.some(selling_plan_allocation=>selling_plan_allocation.selling_plan_id===selling_plan.id))),this.availableSellingPlanGroups.length&&this.availableSellingPlanGroups.forEach((group=>{group.selected_selling_plan=group.selling_plans[0]}))),changed.has("selectedSellingPlan")&&this.product&&this.updateLineItem()};log=(...args)=>{args.unshift("%c[skio cart upsell]","color: #8770f2;"),console.log.apply(console,args)};error=(...args)=>{args.unshift("%c [skio cart upsell]","color: #ff0000"),console.error.apply(console,args)};getSectionsToRender(){return[{id:"CartDrawer-Form",section:document.getElementById("CartDrawer-Form").dataset.id,selector:".cart-items"}]}getSectionInnerHTML(html2,selector){return new DOMParser().parseFromString(html2,"text/html").querySelector(selector).innerHTML}updateLineItem(){if(!this.line||!this.item||this.item.selling_plan_allocation?.selling_plan?.id==this.selectedSellingPlan?.id)return;let data;this.selectedSellingPlan?data=JSON.stringify({line:this.line,quantity:this.item.quantity,selling_plan:this.selectedSellingPlan?this.selectedSellingPlan?.id:null,properties:{"Subscription Discount":this.discount(this.selectedSellingPlan).percent}}):data=JSON.stringify({line:this.line,quantity:this.item.quantity,selling_plan:null,properties:{"Subscription Discount":null}}),console.log(data),fetch("/cart/change.js",{method:"POST",headers:{"Content-Type":"application/json"},body:data}).then(response=>response.text()).then(cart=>{if(Shopify.theme.jsCart!=="undefined"&&window.location.href.includes("/cart")&&Shopify.theme.jsCart.updateView(JSON.parse(cart),this.line),typeof Shopify.theme.jsAjaxCart<"u"&&Shopify.theme.jsAjaxCart.updateView(),window.location.href.includes("/cart")){const parsedState=JSON.parse(cart);this.getSectionsToRender().forEach((section=>{const elementToReplace=document.getElementById(section.id).querySelector(section.selector)||document.getElementById(section.id);elementToReplace.innerHTML=this.getSectionInnerHTML(parsedState.sections[section.section],section.selector)}))}const event=new CustomEvent("cart:update",{detail:{line:this.line,quantity:this.item.quantity,selling_plan:this.selectedSellingPlan?this.selectedSellingPlan?.id:null,properties:{"Subscription Discount":this.discount(this.selectedSellingPlan).percent}}});document.dispatchEvent(event)})}selectSellingPlanGroup(group){this.selectedSellingPlanGroup=group,this.selectedSellingPlan=group?.selected_selling_plan}selectSellingPlan(id){if(!id){this.selectedSellingPlanGroup=null,this.selectedSellingPlan=null;return}let group=this.availableSellingPlanGroups.find(group2=>group2.selling_plans.find(selling_plan2=>selling_plan2.id==id)),selling_plan=group.selling_plans.find(x=>x.id==id);selling_plan?(group.selected_selling_plan=selling_plan,this.selectedSellingPlanGroup=group,this.selectedSellingPlan=selling_plan):this.log("Error: couldn't find selling plan with id "+element.value+" for variant "+this.selectedVariant.id+" from product "+this.product.id+" : "+this.product.handle)}money(price){return this.moneyFormatter.format(price/100)}discount(selling_plan){if(!selling_plan)return{percent:"0%",amount:0};const price_adjustment=selling_plan.price_adjustments[0],discount={percent:"0%",amount:0},price=this.selectedVariant.price;switch(price_adjustment.value_type){case"percentage":discount.percent=`${price_adjustment.value}%`,discount.amount=Math.round(price*price_adjustment.value/100);break;case"fixed_amount":discount.percent=`${Math.round(price_adjustment.value*1/price*100)}%`,discount.amount=price_adjustment.value;break;case"price":discount.percent=`${Math.round((price-price_adjustment.value)*1/price*100)}%`,discount.amount=price-price_adjustment.value;break}return discount}fetchProduct=async handle=>{let productCache=window.sessionStorage.skioCartProductCache?JSON.parse(window.sessionStorage.skioCartProductCache):[],cachedProduct=productCache?productCache.find(product=>product.handle==handle):null;cachedProduct?this.product=cachedProduct:await fetch(`/products/${handle}.js`).then(response=>response.json()).then(response=>{this.product=response,productCache.push(response),window.sessionStorage.skioCartProductCache=JSON.stringify(productCache),this.requestUpdate()})}}customElements.define("skio-cart-upsell",SkioCartUpsell);
//# sourceMappingURL=/cdn/shop/t/308/assets/skio-cart-upsell.js.map?v=124800851700703801451706209327
