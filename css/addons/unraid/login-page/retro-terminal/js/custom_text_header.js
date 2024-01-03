
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  

 .d8888b.  888b     d888 888     888 Y88b   d88P 
d88P  Y88b 8888b   d8888 888     888  Y88b d88P  
Y88b.      88888b.d88888 888     888   Y88o88P
                                                 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
