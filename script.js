function analyzeSEO() {
    let url = document.getElementById("urlInput").value;
    let resultDiv = document.getElementById("result");

    if (url === "") {
        resultDiv.innerHTML = "❌ Please enter a URL";
        return;
    }

    // Fake SEO Analysis (frontend only)
    resultDiv.innerHTML = `
        <h3>SEO Report</h3>
        <p>🌐 URL: ${url}</p>
        <p>✅ Title Tag: Found</p>
        <p>✅ Meta Description: Found</p>
        <p>⚠️ Alt Tags: Missing</p>
        <p>✅ Mobile Friendly: Yes</p>
        <p>⚠️ Page Speed: Average</p>
    `;
}