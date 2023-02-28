const checking = (data) => {
  var keys = Object.keys(data);
  keys = keys.filter((key) => {
    if (data[key] === "") {
      return key;
    }
  });
  return keys;
};
export default checking;
