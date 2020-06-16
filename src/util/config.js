const dev = {
  url: "",
};
const prod = {
  url: "",
};

export const ApiUrl = __DEV__ ? dev.url : prod.url;
