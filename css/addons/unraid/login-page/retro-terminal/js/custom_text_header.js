
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>



$$$$$$$\                                                                       $$\  $$$$\  
$$  __$$\                                                                      $$ |$$  $$\ 
$$ |  $$ |$$$$$$\   $$$$$$$\  $$$$$$$\ $$\  $$\  $$\  $$$$$$\   $$$$$$\   $$$$$$$ |\__/$$ |
$$$$$$$  |\____$$\ $$  _____|$$  _____|$$ | $$ | $$ |$$  __$$\ $$  __$$\ $$  __$$ |   $$  |
$$  ____/ $$$$$$$ |\$$$$$$\  \$$$$$$\  $$ | $$ | $$ |$$ /  $$ |$$ |  \__|$$ /  $$ |  $$  / 
$$ |     $$  __$$ | \____$$\  \____$$\ $$ | $$ | $$ |$$ |  $$ |$$ |      $$ |  $$ |  \__/  
$$ |     \$$$$$$$ |$$$$$$$  |$$$$$$$  |\$$$$$\$$$$  |\$$$$$$  |$$ |      \$$$$$$$ |  $$\   
\__|      \_______|\_______/ \_______/  \_____\____/  \______/ \__|       \_______|  \__|   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
