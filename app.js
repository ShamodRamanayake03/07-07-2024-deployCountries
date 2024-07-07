// https://restcountries.com/v3.1/all

let tblCountries=document.getElementById("tblCountries");

let tableBody =`<tr>
            <th>Name</th>
            <th>Flag</th>
        </tr>` ;


fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{
    data.forEach(element => {
        tableBody+=`<tr>
                        <td><h1>${element.name.common}</h1> 
                        <p><br>Name : ${element.name.official}</p>
                        <p><br>Region     : ${element.region}</p>
                        <p><br>Capital    : ${element.capital}</p>
                        <p><br>Population : ${element.population}</p>
                        
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        console.log(element.name.common);

    });
    tblCountries.innerHTML=tableBody;
})