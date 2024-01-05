class DocBlock {
    blockType!: string;
    content: any;
    constructor(blockType?: string, content?: any) {
        if (blockType !== undefined) {
            this.blockType = blockType;
        }
        if (content !== undefined) {
            this.content = content;
        }
    }

}

enum DocType {
    Heading1, Heading2, Heading3, Heading4, Paragraph, Todolist, Table,
}

