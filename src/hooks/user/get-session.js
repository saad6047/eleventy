import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

import configSettings from "../../../config";

export default function useSession() {
    return useQuery(
        ["session", Cookies.get("access-token")],
        async () => {
            const token = Cookies.get("access-token");
            if (!token) {
                return null;
            }
            const result = await axios.get(`${configSettings.serverUrl}/auth`, {
                headers: {
                    "access-token": token,
                },
            });

            const response = result?.data;

            return response?.data;
        },
        {
            retry: 1,
        }
    );
}
