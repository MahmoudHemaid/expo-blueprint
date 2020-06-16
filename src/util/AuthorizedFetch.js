// Informational responses (100–199),
// Successful responses (200–299),
// Redirects (300–399),
// Client errors (400–499),
// and Server errors (500–599).
import { select } from "redux-saga/effects";
import AppJson from "../../app.json";

export default function* (url, params, timeout = 8000) {
  const headers = {
    "Content-Type": "application/json",
    X_APP_VERSION_X: AppJson.version,
  };

  // const user = yield select(state => state.auth.userData);

  if (false) {
    let { token } = user;
    headers.Authorization = "Bearer " + token;
  }

  // Merge headers from params if exist
  if (!!params?.headers) {
    params.headers = {
      ...params.headers,
      ...headers,
    };
  } else {
    params = { ...params, headers };
  }

  // Stringify request body
  if (!!params?.body) {
    params.body = JSON.stringify(params.body);
  }

  const controller = new AbortController();
  const { signal } = controller;
  params.signal = signal;
  const _timeout = setTimeout(() => controller.abort(), timeout);

  const response = yield fetch(url, params);
  clearTimeout(_timeout);

  const { status } = response;
  const result = yield response.json();

  if (status >= 200 && status < 300) {
    return result;
  } else {
    __DEV__ && console.log({ url, params, error: result });
    throw Error(result);
  }
}
