import axios from "axios";
const sendData = async (data) => {
  return await axios
    .post("http://localhost:5000/create", { data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return "err";
    });
};
const answer = async (data, name) => {
  await axios
    .post(`http://localhost:5000/answer/${name}`, { data })
    .then((res) => {
      return;
    });
};
const check = async (name) => {
  return axios.get(`http://localhost:5000/${name}`).then((res) => {
    return res;
  });
};
const scores = async (name) => {
  return axios
    .get(`http://localhost:5000/scores/${name}`)
    .then((res) => {
      return res;
    });
};
export { sendData, answer, check, scores };
