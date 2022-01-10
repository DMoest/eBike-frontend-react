export function getBikeStatusColor(bike) {
  return bike.status === "available"
    ? "#28C941"
    : bike.status === "in_service"
    ? "#F4D25E"
    : bike.status === "broken"
    ? "#EE6A6A"
    : "#EE6A6A";
}

export function getBikeStatusSwedish(bike) {
  return bike.status === "available"
    ? "Tillgänglig"
    : bike.status === "in_service"
    ? "Repereras"
    : bike.status === "broken"
    ? "Ur funktion"
    : "Ingen information";
}

export function getBikeActiveSwedish(bike) {
  return bike.active === "true" ? "Ja" : "Nej";
}
