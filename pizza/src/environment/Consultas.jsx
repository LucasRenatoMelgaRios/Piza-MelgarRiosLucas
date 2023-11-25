import axios from "axios";
import { Environment } from "./environment";
export async function GET(url, setData) {
  await axios
    .get(`${Environment.API_URL + url}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => console.error(err));
}
export async function REGISTRAR(url, data, activeModal) {
  await axios
    .post(`${Environment.API_URL + url}`, data)
    .then((response) => {
      if (activeModal !== null) {
        activeModal();
      }
    })
    .catch((err) => console.error(err));
}

export async function POST(
  url,
  data,
  setRespuestas,
  changeValueIsVisible,
  setLogin
) {
  await axios
    .post(`${Environment.API_URL + url}`, data)
    .then((response) => {
      if (setLogin != null) {
        if (response.data.success === true) {
          setLogin(response.data.success);
          localStorage.setItem("logeo", response.data.success);
          localStorage.setItem("id_user", response.data.item.id_usuario);
        }
      }
      if (changeValueIsVisible != null) {
        changeValueIsVisible;
      }
      setRespuestas(response.data);
    })
    .catch((err) => {
      if (setLogin != null) {
        setRespuestas("datos proporcionados no validos");
        changeValueIsVisible;
        return;
      }
      console.error(err);
    });
}
