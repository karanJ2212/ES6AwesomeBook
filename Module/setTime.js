import { DateTime } from "./luxon.js";
const showDateAndTime = document.querySelector(".date-and-time");

export const setTime = () => {
  showDateAndTime.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};
