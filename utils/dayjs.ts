import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import utc from "dayjs/plugin/utc.js";
import isToday from "dayjs/plugin/isToday.js";

/* eslint-disable import/no-named-as-default-member */
dayjs.extend(weekOfYear);
dayjs.extend(utc);
dayjs.extend(isToday);

export default dayjs;

export function getNowDayjs () {
  return dayjs.utc().add(8, "hour");
}

export function getNowStamp () {
  return getNowDayjs().toDate().getTime();
}

export const literalTime = (stamp: number) => {
  const dayOld = dayjs.utc(stamp);
  const dayNew = dayjs.utc();
  const subDay = dayNew.diff(dayOld, "day");
  const subWeek = dayNew.diff(dayOld, "week");
  const subMonth = dayNew.diff(dayOld, "month");
  const subYear = dayNew.diff(dayOld, "year");
  if (dayOld.isToday()) {
    return "Today";
  }
  if (subWeek < 1) {
    return `${subDay + 1} Days ago`;
  }
  if (subMonth < 1) {
    return `${subWeek} Weeks ago`;
  }
  if (subYear < 1) {
    return `${subMonth} Months ago`;
  }
  return `${subYear} Years ago`;
};

export function formatTime (stamp: number, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs.utc(stamp).format(format);
}
