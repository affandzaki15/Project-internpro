document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const duration = 2000; // Durasi total animasi dalam ms
    const interval = 10; // Interval per langkah dalam ms
    const steps = duration / interval; // Jumlah langkah animasi

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target"); // Angka tujuan
        const increment = target / steps; // Hitung increment

        let current = 0; // Mulai dari angka 0
        const updateCounter = () => {
            current += increment; // Tambah angka per langkah
            if (current < target) {
                counter.innerText = Math.floor(current); // Tampilkan angka bulat
            } else {
                counter.innerText = target; // Pastikan angka akhir sesuai target
                clearInterval(intervalId); // Hentikan interval
            }
        };

        // Jalankan animasi dengan interval tetap
        const intervalId = setInterval(updateCounter, interval);
    });
});

// Array to hold job data
let jobs = [
    { title: "Web Developer - Surabaya", description: "Develop and maintain websites." },
    { title: "Graphic Designer - Malang", description: "Design graphics for various projects." },
    { title: "Data Analyst - Jakarta", description: "Analyze and interpret data to drive decisions." }
  ];
  
  // Function to display the list of jobs in a table
  function displayJobs() {
    const jobsTableBody = document.querySelector("#jobsTable tbody");
    jobsTableBody.innerHTML = ""; // Clear previous content
  
    jobs.forEach((job, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${job.title}</td>
        <td>${job.description}</td>
        <td><button onclick="showJobDetails(${index})">View Details</button></td>
      `;
  
      jobsTableBody.appendChild(row);
    });
  }
  
  // Function to show job details
  function showJobDetails(index) {
    const job = jobs[index];
    document.getElementById("detailTitle").textContent = job.title;
    document.getElementById("detailDescription").textContent = job.description;
  
    // Show the Job Details section and hide the Jobs List section
    document.getElementById("jobs").style.display = "none";
    document.getElementById("jobDetails").style.display = "block";
  }
  
  // Function to go back to the list of jobs
  function goBack() {
    document.getElementById("jobs").style.display = "block";
    document.getElementById("jobDetails").style.display = "none";
  }
  
  // Initialize the page by displaying the list of jobs
  displayJobs();
  