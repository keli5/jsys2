// jpath.ts

export class JPath {
    path: string;
    filename: string;
    extension: string;

    constructor(path: string, filename: string = "", extension: string = "") {
        this.filename = filename;
        this.extension = extension;
        this.path = path;

        const corrected = JPath._correctStartingPeriod(filename, extension)
        this.filename = corrected[0]
        this.extension = corrected[1]
    }

    toString(): string {
        let output = ""
        if ((this.extension || this.filename) && !this.path.endsWith("/")) {
            this.path += "/"
        }
        output += this.path
        output += this.filename

        if (this.extension != "") {
            output += "." + this.extension
        }

        return output
    }

    static fromString(inputPath: string): JPath {
        const pathSegments: string[] = inputPath.split("/");
        const filenameWithExtension: string = pathSegments.pop() || "";
        const lastSlashIndex: number = inputPath.lastIndexOf("/");

        const path = lastSlashIndex !== -1 ? inputPath.substring(0, lastSlashIndex + 1) : (inputPath.startsWith("/") ? "/" : "");

        const filenameArray = filenameWithExtension.split(".");
        let filename = filenameArray.length > 1 ? filenameArray.slice(0, -1).join(".") : filenameArray[0];
        let extension = filenameArray.length > 1 ? filenameArray[filenameArray.length - 1] : "";

        const corrected = JPath._correctStartingPeriod(filename, extension)
        filename = corrected[0]
        extension = corrected[1]

        return new JPath(path, filename, extension);
    }

    private static _correctStartingPeriod(filename: string, extension: string) {
        if ((filename == "") && (extension != "")) {
            filename = "."  + extension
            extension = ""
        }

        return [filename, extension]
    }
}