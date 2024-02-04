<script>
document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically create and show xp notification
    function showxp(type, message) {
        const xpContainer = document.querySelector('.xp-container');
        
        // Create a new div for the xp message
                const xpDiv = document.createElement('div');
                xpDiv.innerHTML = `${message}`;
                
                // Append the new xp div to the container
                xpContainer.appendChild(xpDiv);
            
            document.getElementById("xp-medicurism").addEventListener("click", function () {
                showxp("DOM medicurism has been clicked.");
            });

            document.getElementById("xp-netsim").addEventListener("click", function () {
                showxp("DOM netsim has been clicked.");
            });
            
            document.getElementById("xp-rasp").addEventListener("click", function () {
                showxp("DOM rasp has been clicked.");
            });
            
        });
    </script>