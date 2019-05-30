export class Document {
    constructor(
        public documentId: number,
        public name: string,
        public decription: string,
        public url: string,
        public children: string) { }
}
