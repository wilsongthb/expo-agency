import http from "./http.js";

class BackendService {
  static async getProducts(params) {
    return (await http.get("api_expo_agency/products/", { params })).data;
  }

  static async getProduct(id) {
    return (await http.get(`api_expo_agency/products/${id}/`)).data;
  }

  static async saveProduct(reg) {
    if (reg.id === undefined || reg.id === null) {
      return (await http.post("api_expo_agency/products/", reg)).data;
    } else {
      return (await http.put(`api_expo_agency/products/${reg.id}/`, reg)).data;
    }
  }

  static async deleteProduct(id) {
    return (await http.delete(`api_expo_agency/products/${id}/`)).data;
  }

  static async getClients(params) {
    return (await http.get("api_expo_agency/clients/", { params })).data;
  }

  static async getClient(id) {
    return (await http.get(`api_expo_agency/clients/${id}/`)).data;
  }

  static async saveClient(reg) {
    if (reg.id === undefined || reg.id === null) {
      return (await http.post("api_expo_agency/clients/", reg)).data;
    } else {
      return (await http.put(`api_expo_agency/clients/${reg.id}/`, reg)).data;
    }
  }

  static async deleteClient(id) {
    return (await http.delete(`api_expo_agency/clients/${id}/`)).data;
  }

  static async getReserves(params) {
    return (await http.get("api_expo_agency/reserves/", { params })).data;
  }

  static async getReserve(id) {
    return (await http.get(`api_expo_agency/reserves/${id}/`)).data;
  }

  static async saveReserve(reg) {
    if (reg.id === undefined || reg.id === null) {
      return (await http.post("api_expo_agency/reserves/", reg)).data;
    } else {
      return (await http.put(`api_expo_agency/reserves/${reg.id}/`, reg)).data;
    }
  }

  static async deleteReserve(id) {
    return (await http.delete(`api_expo_agency/reserves/${id}/`)).data;
  }

  static async login(username, password) {
    var response = await http.post("api/auth/token/login", {
      username,
      password,
    });
    localStorage.setItem("token", `Token ${response.data.auth_token}`);
    http.defaults.headers["Authorization"] = localStorage.getItem("token");
  }

  static async getCurrentUser() {
    return (await http.get("api/auth/users/me/")).data;
  }

  static async registerUser(username, email, password) {
    var result = await http.post("api/auth/users/", {
      password,
      username,
      email,
    });
    return result.data;
  }

  static async logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  static async getCurrentClient() {
    return (await http.get("api_expo_agency/clients/me/")).data;
  }
}

export default BackendService;
