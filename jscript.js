const search=document.getElementById("search");
const smkt=document.getElementById("smkt");
const spercnt=document.getElementById("spercnt");
const tbody=document.getElementById("tbod");
const loading=document.getElementsByClassName("loading");




async function searched() {
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    
    
    let foundOut=alldata.filter(data=>{
        const regex=new RegExp(`^${searched}`,'gi');
        return data.first_name.match(regex)|| data.last_name.match(regex)|| data.email.match(regex);
    });


    foundOut(data);
  }
  

  const foundOut=(data)=>{
    console.log(data);
    if(data.length>0){
        

        const tbod=data.map(values=>
         ` <tr>
        
        <td class="icon"> <div><img src="${values.image}" alt="icon"> </div> <div> ${values.id} </div></td>
            <td></td>
            <td>${values.symbol.toUpperCase()}</td>
            <td>$${values.total_volume}</td>
            <td>${values.market_cap_change_percentage_24h}%</td>
            <td>Mkt Cap: $${values.market_cap_change_24h}</td>

        </tr>
            
            `
            ).join('');


            tbody.innerHTML=tbod;
    }
    
  }
  

  
  search.addEventListener('input',()=>loading(search.value))
  window.addEventListener("load", (event) =>loading(search.value));
// const data=await fetch(url);
// console.log(data);

// search.addEventListener(onkeyup,()=>loading(search.value))