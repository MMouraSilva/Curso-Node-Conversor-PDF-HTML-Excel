const pdf = require("html-pdf");

class PDFWriter {
  static WritePDF(filename, html) {
    pdf.create(html, { format: "Letter" }).toFile(filename, (err, res) => {
      if(err) {
        return console.log(err);
      } else {
        console.log(res);
      }
    });
  }
}

module.exports = PDFWriter;