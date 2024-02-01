let lastUsedPid: number = 1; 

enum ProcessType {
    USERMODE,
    KERNEL,
}

class Process {
    pid: number;
    variables: object = {};
    type: ProcessType;
    parent: Process | null;
    user: User | null;
    executablepath: JPath;

    constructor (type: ProcessType, parent: Process, user: User, path: JPath) {
        this.pid = lastUsedPid;
        lastUsedPid++;
        this.type = type;
        this.parent = parent;
        this.user = user;
        this.executablepath = path;
    }
}