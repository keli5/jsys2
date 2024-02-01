/*

Let's do this in an order, yeah?
1. Core system services
    1a. Process management
    1b. Inter-process communication (event buses)

2. Networking
    2a. Implement our own network class

3. Filesystem
    3a. Implement our own filesystem class

4. User sessions & authentication
    4a. for password salts: " (Math.random() * 1000000000000).toString(24) " makes a good salt

last. I/O (terminal)


*/

console.log(JPath.fromString("/"))