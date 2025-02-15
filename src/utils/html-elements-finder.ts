import { LogMessage } from "../serviceLogger";

export const getHTMLElement = (keyName: string): NodeListOf<Element> => {
    LogMessage(`Searching for element with data-tid: ${keyName}`);

    const element = document.querySelectorAll(`[data-tid="${keyName}"]`);

    LogMessage(element)

    if (!element) {
        LogMessage(`Couldn't find element with data-tid: ${keyName}`);
        return null;
    }
    return element;
};
