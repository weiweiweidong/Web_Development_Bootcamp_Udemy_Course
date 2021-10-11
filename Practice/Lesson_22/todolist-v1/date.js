//jshint esversion:6

// 模块导出 getDate
module.exports.getDate = getDate;
function getDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);
  // return day;
}

module.exports.getDay = getDay;
function getDay() {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
}
