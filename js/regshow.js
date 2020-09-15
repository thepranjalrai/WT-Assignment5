const entries = document.getElementById("main");
const table = document.getElementById("reg-table");

fetch("https://wt-php-database.000webhostapp.com/api/ass5/fetch.php")
    .then(res => res.json())
    .then(res => {
        const data = res['response'];

        if (!data.length) {
            let noData = document.createElement("h6");
            noData.classList.add("mt-3", "d-flex", "justify-content-center");
            noData.innerText = "No Data";
            entries.appendChild(noData);
            return;
        }
    
        for (const reg of data) {
            const tr = document.createElement("tr");
        
           
        
            for (const field of [reg.email, `${reg.fname} ${reg.lname}`, reg.phone, reg.occupation]) {
                const td = document.createElement("td");
                td.innerText = field;
                tr.appendChild(td);
            }
        
            table.appendChild(tr);
        }
    });