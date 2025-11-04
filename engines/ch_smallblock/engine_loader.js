document.addEventListener("DOMContentLoaded", function() {
  let data = [
    ["2bbl","2x4bbl","FI","4bbl"],
    [[8,4.125,3.75],[8,3.875,3],[8,3.671,3.1],[8,3.5,3.48],[8,3.75,3],[8,4,3]],
    ["","F6","F4","T4","39","77","E4","32","V1"],
    [55,110,200,32,20],
    // data below
    [0,0,4,0,52,12,57,2]
  ]; // something to get ./engines.json

  /*
  JSON format:

  data[0]: list[str] - fuel system types
  data[1]: list[list[int|float]] - cylinders, bore, stroke
  data[2]: list[str] - RPOs, minus first letter
  data[3]: list[int] - minimums:
    data[3][0]: minimum year - 1900      ex. 55: 1955
    data[3][1]: minimum power            ex. 110: 110 hp
    data[3][2]: minimum torque           ex. 200: 200 lb-ft
    data[3][3]: minimum power RPM / 100  ex. 32: 3,200 RPM
    data[3][4]: minimum torque RPM / 100 ex. 20: 2,000 RPM
  data[4-]: list[int] - engine data
    data[4][0]: year (add min year and 1900)
    data[4][1]: index of RPO (add "L" if not blank)
    data[4][2]: index of dimension combination
    data[4][3]: index of fuel system
    data[4][4]: power (add min power)
    data[4][5]: power RPM (add min power RPM, multiply by 100)
    data[4][6]: torque (add min torque)
    data[4][7]: torque RPM (add min torque RPM, multiply by 100)
  */

  let fuel_systems = data[0];
  let dim_combos = data[1];
  let rpos = data[2];
  
  let minimum_year = data[3][0] + 1900;
  let minimum_power = data[3][1];
  let minimum_torque = data[3][2];
  let minimum_power_rpm = data[3][3];
  let minimum_torque_rpm = data[3][4];

  data.shift(); // remove fuel system
  data.shift(); // remove dimensions
  data.shift(); // remove RPOs
  data.shift(); // remove minimums

  for (let idx = 0; idx < data.length; idx++) {
    let row = data[idx];
    
    let year = row[0];
    let rpo = row[1];
    let dim = row[2];
    let fuel_sys = row[3];
    let power = row[4];
    let power_rpm = row[5];
    let torque = row[6];
    let torque_rpm = row[7];

    year += minimum_year;
    rpo = rpos[rpo];
    dim = dim_combos[dim];
    fuel_sys = fuel_systems[fuel_sys];
    power += minimum_power;
    power_rpm += minimum_power_rpm;
    power_rpm *= 100;
    torque += minimum_torque;
    torque_rpm += minimum_power_rpm;
    torque_rpm *= 100;
  }
});