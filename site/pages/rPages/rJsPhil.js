
const schedulePhil = document.getElementById("schedulePhil");
const pLogPhil = document.getElementById("logPhil");
const speciesPhil = document.getElementById("speciesTablePhil");
const stakePhil = document.getElementById("stakeholdersPhil");
const scheduleBtnPhil = document.getElementById("timePhil");
const pLogBtnPhil = document.getElementById("pLogPhil");
const speciesBtnPhil = document.getElementById("speciesPhil");
const stakeBtnPhil = document.getElementById("stakePhil");
const mediaBtnPhil = document.getElementById("mediaBtnPhil");
const mediaPhil = document.getElementById("mediaPhil");

// Buttons for audit information
function showSchedulePhil() {
  //toggle underline
  const off = [pLogBtnPhil, speciesBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogPhil, speciesPhil, stakePhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = schedulePhil;
    show.style.display = "flex";
}
function showLogPhil() {
  // toggle underline
  const off = [scheduleBtnPhil, speciesBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnPhil.classList.add("active-link");

  // hide other sections
  const hide = [schedulePhil, speciesPhil, stakePhil, mediaPhil];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogPhil.style.display = "flex";

}


function showSpeciesPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, stakePhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesPhil;
    show.style.display = "flex";
}
function showStakeholdersPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, speciesBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, speciesPhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakePhil;
    show.style.display = "flex";
}
function showMediaPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, speciesBtnPhil, stakeBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = mediaBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, speciesPhil, stakePhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = mediaPhil;
    show.style.display = "flex";
}


// pLog database

$('#ganttTablePhil').DataTable({
  ajax: {
    url: './rPages/rawLogPhil.json',
    dataSrc: ''
  },
  columns: [
    { data: 'Site' },
    { data: 'Start Date' },
    { data: 'End Date' },
    { data: 'Trees Planted' },
    { data: 'Area Planted' }
  ],
  dom: 'Bflrtip',   // Show Buttons, filter, table, pagination
  buttons: [
  {
    extend: 'csvHtml5',
    text: 'Download CSV',
    title: 'Tree_Planting_Data'
  },
  {
    extend: 'excelHtml5',
    text: 'Download Excel'
  }
]
});


//Load species list content

$('#speciesListPhil').DataTable({
  ajax: {
    url: './rPages/speciesListPhil.json',
    dataSrc: function(json) {
      console.log('Loaded JSON:', json);
      return json;
    }
  },
  columns: [
    { data: 'Species',
      render: function (data, type, row) {
      if (!data) return '';

      if (type === 'display') {
        return `<a href="${row.Link}" target="_blank" rel="noopener noreferrer">${data}</a>`;
      }

      return data;
    }
     },
    { data: 'Volume' }
  ],
  dom: 'Bflrtip',
  buttons: [
    { extend: 'csvHtml5', text: 'Download CSV', title: 'Tree_Planting_Data' },
    { extend: 'excelHtml5', text: 'Download Excel' }
  ]
});


document.querySelectorAll(".clickable-row").forEach(row => {
  row.addEventListener("click", () => {
    window.open(row.dataset.href, "_blank")
  });
});

fetch('./rPages/pLogPhil.json')
  .then(res => res.json())
  .then(data => {
    // Clean and map JSON
    const cleaned = data.map(d => ({
      site: d.Site,
      date: d["Planting Date"],
      count: d["Trees Planted"]
    }));

    // Unique sorted dates for labels
    const labels = [...new Set(cleaned.map(d => d.date))]
      .sort((a, b) => new Date(a) - new Date(b));

    // Unique sites
    const sites = [...new Set(cleaned.map(d => d.site))];

    // Predefined colors
    const colors = [
      'rgba(255,99,132,0.5)',
      'rgba(54,162,235,0.5)',
      'rgba(255,206,86,0.5)',
      'rgba(75,192,192,0.5)',
      'rgba(153,102,255,0.5)',
      'rgba(255,159,64,0.5)',
      'rgba(199,199,199,0.5)'
    ];
    const borderColors = colors.map(c => c.replace('0.5', '1'));

    // Map sites to colors (loop if more sites than colors)
    const colorMap = {};
    sites.forEach((site, i) => {
      const colorIndex = i % colors.length;
      colorMap[site] = { bg: colors[colorIndex], border: borderColors[colorIndex] };
    });

    // Build datasets
    const datasets = sites.map(site => {
      const sitePoints = cleaned.filter(d => d.site === site);

      const dataPoints = labels.map(labelDate => {
        const point = sitePoints.find(p => p.date === labelDate);
        return point ? point.count : null;
      });

      return {
        label: site,
        data: dataPoints,
        borderColor: colorMap[site].border,
        backgroundColor: colorMap[site].bg,
        fill: false,
        spanGaps: false,
        tension: 0.2
      };
    });

    // Render chart
    const ctx_log = document.getElementById('ganttChartPhil').getContext('2d');
    new Chart(ctx_log, {
      type: 'line',
      data: { labels, datasets },
      options: {
        interaction: { mode: 'nearest', intersect: false },
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Partner Reported Planting Events',
            font: { size: 14, weight: 'bold' }
          }
        },
        scales: {
          x: { 
            title: { display: true, text: 'Date Planted' },
            ticks: { autoSkip: false }
          },
          y: { 
            title: { display: true, text: 'Trees Planted' },
            beginAtZero: true 
          }
        }
      }
    });
  })
  .catch(err => console.error('Error loading JSON:', err));




fetch('./rPages/ganttDatesPhil.json')
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then(data => {
    console.log("Fetched gantt data:", data);

    // Pick a color for each site
    const colors = [
      'rgba(255,99,132,0.5)',
      'rgba(54,162,235,0.5)',
      'rgba(255,206,86,0.5)',
      'rgba(75,192,192,0.5)',
      'rgba(153,102,255,0.5)',
      'rgba(255,159,64,0.5)',
      'rgba(199,199,199,0.5)'
    ];

    const borderColors = colors.map(c => c.replace('0.5', '1'));

    // Convert data into Chart.js horizontal bars
    const tasks = data.map((d, i) => ({
      x: [new Date(d["Start Date"]), new Date(d["End Date"])],
      y: d.Site,
      backgroundColor: colors[i % colors.length],
      borderColor: borderColors[i % borderColors.length]
    }));

    const ctx_gantt = document.getElementById('ganttPhilCanvas').getContext('2d');
    new Chart(ctx_gantt, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Schedule',
          data: tasks,
          borderWidth: 1,
          backgroundColor: colors,   // <-- array of colors for each bar
          borderColor: borderColors, // <-- array of border colors
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          x: {
            type: 'time',
            min: new Date(2024, 0, 1),
            max: new Date(2028, 0, 4),
            time: { unit: 'month' }
          },
          y: { }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const start = new Date(context.raw.x[0]);
                const end = new Date(context.raw.x[1]);
                return `${context.raw.y}: ${start.toLocaleDateString()} → ${end.toLocaleDateString()}`;
              }
            }
          },
          legend: { display: false },
          title: {
            display: true,
            text: 'Parcel Planting Schedule',
            font: { size: 14, weight: 'bold' }
          }
        }
      }
    });
  });