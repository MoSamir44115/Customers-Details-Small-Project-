let custDet = {
  customers: [
    {
      id: 1,
      name: "Ahmed Ali",
    },

    {
      id: 2,
      name: "Aya Elsayed",
    },

    {
      id: 3,
      name: "Mina Adel",
    },
    {
      id: 4,
      name: "Sarah Reda",
    },
    {
      id: 5,
      name: "Mohamed Sayed",
    },
  ],

  transactions: [
    {
      id: 1,
      customer_id: 1,
      date: "2022-01-01",
      amount: 1000,
    },
    {
      id: 2,
      customer_id: 1,
      date: "2022-01-02",
      amount: 2000,
    },
    {
      id: 3,
      customer_id: 2,
      date: "2022-01-01",
      amount: 550,
    },
    {
      id: 4,
      customer_id: 3,
      date: "2022-01-01",
      amount: 500,
    },
    {
      id: 5,
      customer_id: 2,
      date: "2022-01-02",
      amount: 1300,
    },
    {
      id: 6,
      customer_id: 4,
      date: "2022-01-01",
      amount: 750,
    },

    {
      id: 7,
      customer_id: 3,
      date: "2022-01-02",
      amount: 1250,
    },
    {
      id: 8,
      customer_id: 5,
      date: "2022-01-01",
      amount: 2500,
    },
    {
      id: 9,
      customer_id: 5,
      date: "2022-01-02",
      amount: 875,
    },
  ],
};

let custDetCopy = [
  {
    id: 1,
    name: "Ahmed Ali",
    customer_id: 1,
    date1: "2022-01-01",
    date2: "2022-01-02",
    amount1: 1000,
    amount2: 2000,
  },
  {
    id: 2,
    name: "Aya Elsayed",
    customer_id: 2,
    date1: "2022-01-01",
    date2: "2022-01-02",
    amount1: 550,
    amount2: 1300,
  },
  {
    id: 3,
    name: "Mina Adel",
    customer_id: 3,
    date1: "2022-01-01",
    date2: "2022-01-02",
    amount1: 500,
    amount2: 1250,
  },
  {
    id: 4,
    name: "Sarah Reda",
    customer_id: 4,
    date1: "2022-01-01",
    date2: "2022-01-02",
    amount1: 750,
    amount2: 0,
  },
  {
    id: 5,
    name: "Mohamed Sayed",
    customer_id: 5,
    date1: "2022-01-01",
    date2: "2022-01-02",
    amount1: 2500,
    amount2: 875,
  },
];

// ................................ REAL TIME SEARCH .......................... //

function searchName() {
  let nameBox = [];
  let keyword = document.getElementById('custNameSearch').value
  for (let i = 0; i < custDetCopy.length; i++) {
    if (custDetCopy[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      nameBox.push(custDetCopy[i]);
      displayCustomersTable(nameBox);
      
      const myChart = document.getElementById("myChart");
      if (myChart) {
        myChart.remove();
      }
      
      const canvas = document.createElement("canvas");
      canvas.classList.add("mb-5","w-75","mx-auto","overflow-x")
      canvas.id = "myChart";
      document.body.appendChild(canvas);
      
      chartData(nameBox)
    }
    
  }
}

// ................................................. DATA TABLE DISPLAY ...................................... //
function displayCustomersTable(nameBox) {
  let box = "";
  for (let i = 0; i < nameBox.length; i++) {
    box += `
          <tr>
                            <th scope="row">${nameBox[i].id}</th>
                            <td>${nameBox[i].name}</td>
                            <td>${nameBox[i].amount1}</td>
                            <td>${nameBox[i].date1}</td>
                            <td>${nameBox[i].amount2}</td>
                            <td>${nameBox[i].date2}</td>
                        </tr>`;
                      }
                      document.getElementById("demo").innerHTML = box;
}



// .......................................................CHART DATA ......................................................//

function chartData(nameBox){

  let filteredname = []
  let filteredamount1 = []
  let filteredamount2= []

  for (let i = 0; i < nameBox.length; i++) {
    filteredname.push(nameBox[i].name)
    filteredamount1.push(nameBox[i].amount1)
    filteredamount2.push(nameBox[i].amount2)
    break;
  }
  const ctx = document.getElementById("myChart");
   window.thechart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [filteredname],
      datasets: [
        {
          label : "Transaction Amount Of Day 1 ",
          data: [filteredamount1],
          borderWidth: 1,
        },
        {
          label : "Transaction Amount Of Day 2",
          data:[filteredamount2],
        }
      ],
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
}  



function destroyChart() {
  window.thechart.destroy();
  }



searchName();
destroyChart()
chartData()


