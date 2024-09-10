const myheading = "This is My Web Page";
const linktag = "<a href = \"http://youtube.com\" target =\"_blank\">Web Site Link</a>";
const sometext = "This text can be affected by other comments";
const begineffect = "<em>";
const endeffect = "</em>";
const beginpara = "<p>";
const endpara = "</p>";



const suntext = `This is My Web Page
${linktag} 
${begineffect}This text can be affected${endeffect}`

document.write(suntext);