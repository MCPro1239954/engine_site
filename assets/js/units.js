document.addEventListener("DOMContentLoaded", function() {
  let table = document.getElementsByTagName("table")[0];
  let rows = table.children[0].children;
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let cells = row.children;
    [2, 3, 4, 6, 8].forEach((idx) => {
      let content = cells[idx].innerHTML;
      if (content[0] == "d") {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        let displacement = parseInt(content.substring(1));
        let ci = (displacement / 16.387064).toFixed(1);
        let liters = (displacement / 1000).toFixed(1);
        let cc = formatter.format(displacement);
        cells[idx].innerHTML = `${liters} L (${ci} ci, ${cc} cc)`;
      } else if (content[0] == "b") {
        let bore = parseFloat(content.substring(1));
        let inch = bore.toFixed(3);
        let mm = (bore * 25.4).toFixed(1);
        cells[idx].innerHTML = `${inch}" (${mm} mm)`;
      } else if (content[0] == "s") {
        let stroke = parseFloat(content.substring(1));
        let inch = stroke.toFixed(3);
        let mm = (stroke * 25.4).toFixed(1);
        cells[idx].innerHTML = `${inch}" (${mm} mm)`;
      } else if (content[0] == "p") {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        let power = parseInt(content.substring(1));
        let hp = formatter.format(power);
        let kw = formatter.format(power * 0.7457);
        let ps = formatter.format(power * 1.014);
        cells[idx].innerHTML = `${hp} hp (${kw} kW, ${ps} PS)`;
      } else if (content[0] == "t") {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        let torque = parseInt(content.substring(1));
        let lbft = formatter.format(torque);
        let nm = formatter.format(torque * 1.3558);
        cells[idx].innerHTML = `${lbft} lbf-ft (${nm} Nm)`;
      }
    });
  }
});