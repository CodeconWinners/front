import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3000",
});

const CalendarClient = axios.create({
    baseURL: "https://fa-google-integration.azurewebsites.net/api"
});

export {Axios, CalendarClient};
