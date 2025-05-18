import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3000",
});

const CalendarClient = axios.create({
    baseURL: "https://fa-google-integration.azurewebsites.net/api"
});

const userClient = axios.create({
    baseURL: "http://desabafa-dev-2.us-east-1.elasticbeanstalk.com"
})

export { Axios, CalendarClient, userClient };
