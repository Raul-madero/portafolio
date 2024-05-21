import qs from "qs"
import { getStrapiURL } from "./api-helpers";

export const fetchApi = async (
    path: string,
    urlParamsObject = {},
    options = {}
) => {
    try {
        const mergedOptions = {
            next: {revalidate: 60},
            ...options,
            headers: {
                "Content-Type": "application/json",
            },
        };
        const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true})
        const requestUrl = `${getStrapiURL(`/api/${path}${queryString ? `?${queryString} ` : ''}`)}`
        console.log(requestUrl)
        const res = await fetch(requestUrl, mergedOptions);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al tratar de llamar a la API");
    }
};