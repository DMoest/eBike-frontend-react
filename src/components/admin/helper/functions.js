export function getBikeStatusColor(bike) {
  return bike.status === "available"
    ? "#28C941"
    : bike.status === "in_service"
    ? "#F4D25E"
    : bike.status === "in_repair" ||
      bike.status === "lost" ||
      bike.status === "out_of_service"
    ? "#EE6A6A"
    : "#EE6A6A";
}

export function getBikeStatusSwedish(bike) {
  return bike.status === "available"
    ? "Tillgänglig"
    : bike.status === "in_service"
    ? "Repereras"
    : bike.status === "in_repair"
    ? "Ur funktion"
    : bike.status === "lost"
    ? "Borttappad"
    : bike.status === "out_of_service"
    ? "Inte i bruk"
    : bike.status === "broken"
    ? "Trasig"
    : "Ingen information";
}

export function getBikeActiveSwedish(bike) {
  return bike.active === "true" ? "Ja" : "Nej";
}
