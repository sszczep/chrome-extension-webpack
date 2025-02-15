import { productIdKey, productNameKey, saleItemRowKey, materials } from "../constants/const";
import { LogMessage } from "../serviceLogger";
import { getHTMLElement } from "../utils/html-elements-finder";
import { hideColumns } from "./hide-columns";

export const highlightMaterials = () => {
    LogMessage("started...");
    const items = getHTMLElement(saleItemRowKey);

    if (!items) {
        LogMessage("Couldn't find any items in order");
        return;
    }

    items.forEach((e) => insertMaterialTags(e));
    hideColumns();
};

const insertMaterialTags = (element: Element): void => {
    if (!element) return;

    const productNameCell = element.querySelector(`[data-tid="${productNameKey}"]`);
    if (!productNameCell) return;

    const materialDescriptionElement = productNameCell.querySelector("span");
    if (!materialDescriptionElement) return;

    // Get the text content of the material description
    const materialText = materialDescriptionElement.textContent || "";
    console.log("Material description text:", materialText);

    // Search for a matching key in the materials dictionary
    const matchingKey = Object.keys(materials).find(key => materialText.includes(key));
    if (matchingKey) {
        // Retrieve the corresponding Material object
        const material = materials[matchingKey];

        // Select the productId cell and update its innerHTML
        const productIdCell = element.querySelector(`[data-tid="${productIdKey}"]`);
        if (productIdCell) {
            productIdCell.innerHTML = material.htmlTag.toHtmlString();
        }
    }

    return;
};