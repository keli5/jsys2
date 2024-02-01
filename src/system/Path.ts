// This class only works with POSIX paths!
class JPath {
    root: string;
    path: string;
    filename: string;
    extension: string;

    constructor(root: string, path: string, filename: string, extension: string) {
        this.root = root;
        this.filename = filename;
        this.extension = extension || "";
        this.path = path;
    }

    public static fromString(path: string) {
        let pathsegments: string[] = path.split("/")
        return pathsegments
    }
}