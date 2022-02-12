




var _body = document.body;
let button1 = document.querySelector(".btn");
let teams = [
    {
        team: "Arsenal",
        year: 1898,
        throphies: "49",
        footballers: ["Aubameyang", "Saka", "Xhaka"],
        
    },
    {
        team: "Juventus",
        year: 1899,
        throphies: "44",
        footballers: ["Chielini", "Scezny", "Dybala"],
    },
    {
        team: "Ream Madrid",
        year: 1888,
        throphies: "68",
        footballers: ["Hazard", "Benzema", "Modric"],
    },
    {
        team: "Liverpul",
        year: 1887,
        throphies: "53",
        footballers: ["Salah", "Mane", "Jota"],
    },
    {
        team: "PSG",
        year: 1908,
        throphies: "32",
        footballers: ["Messi", "Neymar", "Di Maria"],
    },
];

let headers = ["team", "year", "throphies", "footballers", ];


button1.addEventListener('click', () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach(heading => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(heading);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    teams.forEach(teams => {
        let row = document.createElement("tr");
        row.style.border = "1px solid black";
        
        
        Object.values(teams).forEach(text => {
            let cell = document.createElement("td");
            cell.style.border = "1px solid black";
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            
        })

        table.appendChild(row);

    });
   
    _body.appendChild(table);

});




