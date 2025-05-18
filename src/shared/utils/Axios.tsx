import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3000",
});

const CalendarClient = axios.create({
    baseURL: "https://fa-google-integration.azurewebsites.net/api"
});

const userClient = axios.create({
    baseURL: "https://applications-api-gateway.sgzlyn.easypanel.host/desabafa-dev"
})

export { Axios, CalendarClient, userClient };
