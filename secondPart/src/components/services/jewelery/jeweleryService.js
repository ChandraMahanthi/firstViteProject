import axios from "axios";

export function getJeweleryData()
{
    return axios.get("http://localhost:3000/categories_jewellery");
}