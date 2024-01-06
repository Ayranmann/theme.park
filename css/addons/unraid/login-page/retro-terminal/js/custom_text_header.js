
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  _____                                    _   ___  
 |  __ \                                  | | |__ \ 
 | |__) |_ _ ___ _____      _____  _ __ __| |    ) |
 |  ___/ _` / __/ __\ \ /\ / / _ \| '__/ _` |   / / 
 | |  | (_| \__ \__ \\ V  V / (_) | | | (_| |  |_|  
 |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_|  (_)   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
