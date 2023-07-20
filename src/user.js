import { writable } from 'svelte/store';

const userStore = writable([
    {
        id:1,
        username: "Gbenga",
        password: "1",
        qoute: "Keeping trying, one day preparation would meet opportunity"
    },
    {
        id:2,
        username: "Keeping",
        password: "2",
        qoute: "Keeping trying, one day preparation would meet opportunity"
    },
    {
        id:3,
        username: "would",
        password: "gbenga3",
        qoute: "Keeping trying, one day preparation would meet opportunity"
    },
    {
        id:4,
        username: "meet",
        password: "gbenga4",
        qoute: "Keeping trying, one day preparation would meet opportunity"
    }
]);

export default userStore;
