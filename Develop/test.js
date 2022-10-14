//Here are various test urls to test
const urls = ["https://github.com/kaihuan-huang/Regular-Expressions-Tutorial-", "https://www.youtube.com/","http//123$.com", "https://www.google.com/", "https://Hiiii.com"]

//the Regex to validate for the url string
const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/, "i");

//Test
urls.forEach(urls => console.log(urls, regex.test(urls)));
