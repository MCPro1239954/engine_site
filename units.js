document.addEventListener("DOMContentLoaded", function() {
  let table = document.getElementsByTagName("table")[0];
  let rows = table.children[0].children;
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];

    let cells = row.children;
    [2, 3, 4, 6, 8].forEach((idx) => {
      let content = cells[idx].innerHTML;

      if (content[0] == "d") {
/*
const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal', // Specifies decimal formatting
  minimumFractionDigits: 2, // Ensures at least two decimal places
  maximumFractionDigits: 2 // Ensures no more than two decimal places
});
*/

        // displacement: cc
        let displacement = parseInt(content.substring(1));
        cells[idx].innerHTML = "";
        cells[idx].innerHTML += (Math.round(displacement / 100) / 10).toFixed(1);
        cells[idx].innerHTML += " L (";
        cells[idx].innerHTML += (Math.round(displacement / 1.6387064) / 10).toFixed(1);
        cells[idx].innerHTML += " ci, ";
        cells[idx].innerHTML += displacement;
        cells[idx].innerHTML += " cc)";
      } else if (content[0] == "b") {
        // bore: in

      } else if (content[0] == "s") {
        // stroke: in

      } else if (content[0] == "p") {
        // power: hp

      } else if (content[0] == "t") {
        // torque: lbf-ft

      }
    });
  }
});