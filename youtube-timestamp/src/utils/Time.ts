export const convertTimestamp = (sec: number): string => {
    let hour = String(Math.floor(sec / 3600)).padStart(2, '0');
    let min = String(Math.floor(sec % 3600 / 60)).padStart(2, '0');
    let rem = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${hour}:${min}:${rem}`;
  }