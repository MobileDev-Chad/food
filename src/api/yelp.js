import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer l9HB7y-yLnUjVfUljABQLA_E-DjL2fMKFc5usnGWeVNcilBE-FZ88Pdx-KozMi0NFbEi-8aYDXz4cJf_cMXE-RHscylrPLCXtN3m5yyBffvVpcNGT04l3jeeayGwYXYx",
  },
});
