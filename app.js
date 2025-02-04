
 document.getElementById("downloadCvBtn").addEventListener("click", function() {
        // Create an invisible anchor element
        var link = document.createElement('a');
        
        // Set the download attribute with the path to your CV file
        link.href = 'laiba-content-cv.pdf';  // Path to your CV file
        link.download = 'Laiba_Laldin_CV.pdf';  // Name the downloaded file
        
        // Append the link to the body
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the link from the document after downloading
        document.body.removeChild(link);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".project-link");
    
        links.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default action
    
                const fileUrl = link.getAttribute("href");
                const fileName = fileUrl.split('/').pop(); // Extract filename
    
                // Create a temporary download link
                const a = document.createElement("a");
                a.href = fileUrl;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        });
    });
    