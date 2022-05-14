const headerButton=document.querySelector(".header__button"),main=document.querySelector(".main"),selectStyle=document.querySelector(".graphs__style__select"),zoomSlider=document.querySelector(".graphs__slider"),selectsValues=document.querySelectorAll(".selects__value"),selectsItemsContainers=document.querySelectorAll(".selects__items"),visualization=document.getElementById("visualization"),groups=new vis.DataSet;let currentIndex,currentStock,currentGraphStyle,stock={},indexes={},zoom=1;async function fetchItems(e,t,n){await Promise.all(e.map(async({name:e,id:s})=>{const a=await fetchItem(s);return t[e]=parseResult(a[s],n),e}))}async function fetchItem(e){return(await fetch(`https://yfapi.net/v8/finance/spark?symbols=${e}&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false`,{headers:{"x-api-key":"XcSA7RuQIFau6cHiJMyNb3p5d9mLpLW55UEg8hOQ"}})).json()}function parseResult(e,t){return e.timestamp.map((n,s)=>({x:new Date(1e3*n).toLocaleDateString("ru").split(".").reverse().join("-"),y:e.close[s],group:t}))}async function fetchStock(){await fetchItems([{name:"Microsoft",id:"MSFT"},{name:"Gazprom",id:"GAZP.ME"},{name:"Apple",id:"AAPL"}],stock,0)}async function fetchIndexes(){await fetchItems([{name:"NYM",id:"CL=F"},{name:"IMOEX",id:"IMOEX.ME"},{name:"CMX",id:"GC=F"}],indexes,1)}function updateSelects(){const e=Object.entries(stock).map(([e])=>e),t=Object.entries(indexes).map(([e])=>e);for(;0!==selectsItemsContainers[0].childElementCount;)selectsItemsContainers[0].removeChild(selectsItemsContainers[0].firstChild);for(;0!==selectsItemsContainers[1].childElementCount;)selectsItemsContainers[1].removeChild(selectsItemsContainers[1].firstChild);e.forEach(e=>{const t=document.createElement("button");t.innerHTML=e,t.setAttribute("value",e),t.classList.add("selects__option"),t.addEventListener("click",()=>{currentStock=selectsValues[0].innerHTML=e,updateGraph()}),selectsItemsContainers[0].appendChild(t)}),t.forEach(e=>{const t=document.createElement("button");t.innerHTML=e,t.setAttribute("value",e),t.classList.add("selects__option"),t.addEventListener("click",()=>{currentIndex=selectsValues[1].innerHTML=e,updateGraph()}),selectsItemsContainers[1].appendChild(t)}),currentStock=selectsValues[0].innerHTML=e[0],currentIndex=selectsValues[1].innerHTML=t[0]}function updateGraph(){let e=[...stock[currentStock],...indexes[currentIndex]];const t=new vis.DataSet(e),n=e.reduce((e,t)=>new Date(t.x).getTime()<e.getTime()?new Date(t.x):e,new Date(e[0].x)),s=e.reduce((e,t)=>new Date(t.x).getTime()>e.getTime()?new Date(t.x):e,new Date(e[0].x));n.setDate(n.getDate()-1),s.setDate(s.getDate()+1);const a={start:n.toLocaleDateString("ru").split(".").reverse().join("-"),end:s.toLocaleDateString("ru").split(".").reverse().join("-"),height:.6*window.screen.height,graphHeight:.6*window.screen.height*zoom-50,shaded:{orientation:"bottom"}};for(currentGraphStyle&&(a.style=currentGraphStyle);0!==visualization.childElementCount;)visualization.removeChild(visualization.firstChild);new vis.Graph2d(visualization,t,groups,a)}async function fetchGraph(){await fetchStock(),await fetchIndexes(),updateSelects(),updateGraph()}document.addEventListener("DOMContentLoaded",fetchGraph),headerButton.addEventListener("click",()=>{main.scrollIntoView({behavior:"smooth"})}),selectStyle.addEventListener("change",e=>{currentGraphStyle=e.target.value,updateGraph()}),zoomSlider.addEventListener("change",e=>{zoom=e.target.value,console.log(e.target.value),updateGraph()});