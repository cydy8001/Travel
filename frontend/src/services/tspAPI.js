import axios from "axios";

const API_URL = "http://localhost:8080/api/tsp";

export const calculateShortestPath = async (cities) => {
    try {
        const response = await axios.post(API_URL, { cities });
        return response.data; // Backend returns ordered path and other details
    } catch (error) {
        console.error("Error calculating TSP:", error);
        throw error;
    }
};
