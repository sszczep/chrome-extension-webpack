import { HtmlTag, Material } from "../types/material";

export const saleItemRowKey = "saleItems";
export const productNameKey = "productName";
export const quantityKey = "productQuantity";
export const productIdKey = "productId";
export const vatKey = "productVat";
export const productWeightKey = "productWeight";
export const productBuyDateKey = "productBuyDate";

export const materials: { [key: string]: Material } = {
    "Materiał: biała płyta HDF":
    {
        key: "Biała płyta HDF",
        htmlTag: new HtmlTag({
            backgroundColor: 'white',
            border: '2px solid black',
            content: "HDF"
        })
    },
    "Materiał: czarna płyta HDF":
    {
        key: "Czarna płyta płyta HDF",
        htmlTag: new HtmlTag({
            backgroundColor: 'black',
            border: '2px solid black',
            text: "font: bold, color: white",
            content: "HDF"
        })
    },
    "Materiał: sklejka":
    {
        key: "Sklejka",
        htmlTag: new HtmlTag({
            backgroundColor: "#ebbc7a",
            border: "2px solid black",
            text: "font: bold, color: black",
            content: "SKLEJKA"
        })
    },
    "Materiał: czarne plexi połysk":
    {
        key: "Czarne plexi",
        htmlTag: new HtmlTag({
            backgroundColor: "black",
            border: "2px solid black",
            text: "font: bold, color: white",
            content: "PLEXI"
        })
    },
    "Materiał: srebrne plexi lustrzane":
    {
        key: "Srebrne plexi lustrzane",
        htmlTag: new HtmlTag({
            backgroundColor: "#b4b5b8",
            border: "2px solid #b4b5b8",
            text: "font: bold, color: black",
            content: "PLEXI"
        })
    },
    "Materiał: złote plexi lustrzane":
    {
        key: "Złote plexi",
        htmlTag: new HtmlTag({
            backgroundColor: "#ffd700",
            border: "2px solid black",
            text: "font: bold, color: black",
            content: "PLEXI"
        })
    },
    "Materiał: różowe plexi lustrzane":
    {
        key: "Różowe plexi lustrzane",
        htmlTag: new HtmlTag({
            backgroundColor: "#fc03df",
            border: "2px solid #fc03df",
            text: "font: bold, color: black",
            content: "PLEXI"
        })
    },
    "Materiał: niebieskie plexi lustrzane":
    {
        key: "Niebieskie plexi lustrzane",
        htmlTag: new HtmlTag({
            backgroundColor: "#0356fc",
            border: "2px solid #0356fc",
            text: "font: bold, color: white",
            content: "PLEXI"
        })
    },
};