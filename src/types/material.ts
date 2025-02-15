export type Material = {
    key: string;
    htmlTag: HtmlTag;
};

export interface HtmlTagOptions {
    backgroundColor: string;
    border: string;
    text?: string;
    content: string;
}

export class HtmlTag {
    private options: HtmlTagOptions;

    constructor(options: HtmlTagOptions) {
        this.options = options;
    }

    toHtmlString(): string {
        const { backgroundColor, border, content, text } = this.options;
        let style = `
            background-color:${backgroundColor};
            border:${border}; 
            height: 30px;
            padding: 0 10px;
            display:inline-flex; align-items:center; justify-content:center;`;

        if (text) {
            style += text
        }

        return `<div style="${style}">${content}</div>`;
    }
}