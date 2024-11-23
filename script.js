const form = document.querySelector("#leaveForm");
const summaryDiv = document.querySelector("#summary");
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fbtn = document.querySelector(".fbtn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const contain = document.querySelector(".contain");
    contain.style.display = "flex";
    fbtn.style.display = "flex";
    
    const uname = document.querySelector("#name").value;
    const uclass = document.querySelector("#class").value;
    const roll = document.querySelector("#Roll").value;
    const scl = document.querySelector("#scl").value;
    const reason = document.querySelector("#Reason").value;
    const sub = document.querySelector("#sub").value;
    const startDate = document.querySelector("#startDate").value;
    const endDate = document.querySelector("#endDate").value;

    const summary = `
        <strong>To:</strong><br>
        The Principal<br>
        ${scl}<br><br>

        <strong>Date:</strong> ${new Date().toLocaleDateString()}<br><br>

        <strong>Subject:</strong> Application for Leave<br><br>

        Respected Sir/Madam,<br>

        I hope this message finds you well. I am <strong>${uname}</strong>, a student of <strong>${uclass}</strong>,
        and I am writing to inform you that I will not be able to attend school from <strong>${startDate}</strong>
        to <strong>${endDate}</strong> due to <strong>${reason}</strong>.<br><br>

        I kindly request you to grant me leave for the mentioned dates.
        I will make sure to catch up with any missed lessons or assignments once I return to school.<br><br>

        Thank you for your consideration.<br><br>

        Yours sincerely,<br><br>

        <strong>${uname}</strong><br>
        Roll No. ${roll}<br>
        Class: ${uclass}
    `;

    // Insert the generated summary into the page
    summaryDiv.innerHTML = summary;
});

// Copy to clipboard functionality
copyBtn.addEventListener('click', function() {
    const summaryText = summaryDiv.innerText;
    navigator.clipboard.writeText(summaryText).then(() => {
        alert("Application copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
});

// Download as text file functionality
downloadBtn.addEventListener('click', function() {
    const summaryText = summaryDiv.innerText;
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'leave_application.txt';
    link.click();
});
