// 1 mile = 1.6 km
// 1 mile = 5280 ft
// 1 km = 3281 ft

console.log(1 / 5280);
console.log(true && true && false);

function convertLength(length, from, to) {
  let convertedLength = "";
  if (from === "miles") {
    if (to === "km") {
      convertedLength = length * 1.6 + " km";
      console.log(convertedLength);
    } else if (to === "ft") {
      convertedLength = length * 5280 + " ft";
    } else if (to === "miles") {
      console.log(length + " " + from);
    } else {
      console.log("Invalid unit: " + to);
    }
  } else if (from === "km") {
    if (to === "miles") {
      convertedLength = length * 0.625 + " miles";
      console.log(convertedLength);
    } else if (to === "ft") {
      convertedLength = lenght * 3281 + " ft";
      console.log(convertedLength);
    } else if (to === "km") {
      console.log(length + " " + from);
    } else {
      console.log("Invalid unit: " + to);
    }
  } else if (from === "ft") {
    if (to === "km") {
      convertedLength = length * 0.00030478512648582747 + " km";
      console.log(convertedLength);
    } else if (to === "miles") {
      convertedLength = length * 0.0001893939393939394 + " miles";
      console.log(convertedLength);
    } else if (to === "ft") {
      console.log(length + " " + from);
    } else {
      console.log("Invalid unit: " + to);
    }
  } else if (to === "km" || to === "miles" || to === "ft") {
    console.log("invalid unit: " + from);
  } else if (from === to) {
    console.log("Invalid unit: " + from);
  } else {
    console.log(`Wrong Convertion units usage conversion only of length units.
      1. miles
      2. km
      3. ft`);
  }
}

convertLength(50, "lbs", "km");
