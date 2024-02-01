enum UserPermissions {
    NONE,
    ROOT
}

enum GroupPermissions {
    NONE,
    SUPERUSER,
}

class User {
    name: string;
    uid: number;
    groups: Group[];
    permissions: UserPermissions = UserPermissions.NONE;

    constructor(name: string, uid: number, groups: Group | Group[]) {
        this.name = name;
        this.uid = uid;
        if (Array.isArray(groups)) {
            this.groups = groups;
        } else {
            this.groups = [groups];
        }
    }
}

class Group {
    name: string;
    gid: number;
    permissions: GroupPermissions = GroupPermissions.NONE;

    constructor(name: string, gid: number) {
        this.name = name;
        this.gid = gid;
    }
}