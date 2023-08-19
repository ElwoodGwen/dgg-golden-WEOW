// ==UserScript==
// @name        Golden WEOW
// @namespace   https://github.com/ElwoodGwen
// @match       *://*.destiny.gg/embed/chat*
// @version     1.0
// @description Adds the mythical golden WEOW to dgg chat
// @author      ElwoodGwen
// @grant       GM_addStyle
// @homepageURL https://github.com/ElwoodGwen/dgg-golden-WEOW
// @supportURL  https://github.com/ElwoodGwen/dgg-golden-WEOW/issues
// @downloadURL https://raw.githubusercontent.com/ElwoodGwen/dgg-golden-WEOW/main/golden-WEOW.user.js
// @icon        data:image/png;base64,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
// ==/UserScript==

const GOLDEN_WEOW_CHANCE = 100;

function create_ws() {
    const chat_ws = new WebSocket("wss://chat.destiny.gg/ws");
    chat_ws.addEventListener("message", parse_ws_message);
    chat_ws.addEventListener("error", console.log);
}


let username;
let unresolved = [];

function parse_ws_message(event) {
    const eventname = event.data.split(" ", 1)[0].toUpperCase();
    const payload = event.data.substring(eventname.length + 1);
    let data;
    try {
        data = JSON.parse(payload);
    } catch (e) {
        return;
    }
    handle_ws_message(eventname, data);
}

function handle_ws_message(eventname, data) {
    if (eventname === "ME") {
        username = data.nick.toLowerCase();
    } else if (eventname === "MSG") {
        if (data.nick.toLowerCase() !== username) return;
        handle_ws_me(data);
    }
}

function handle_ws_me(data) {
    if (unresolved.length === 0) return;
    const timestamp = data.timestamp;
    const content = data.data;
    for (let i = 0; i < unresolved.length; i++) {
        const message = unresolved[i];
        if (message.querySelector(".text").innerText !== content || parseInt(message.querySelector("time").dataset.unixtimestamp) > timestamp) continue;
        const weows = message.querySelector(".text").querySelectorAll(".emote.WEOW");
        weows.forEach((weow, index) => {
            const hash = weow_hash(timestamp, index, content, username);
            const golden = hash % GOLDEN_WEOW_CHANCE === 0;
            if (golden) weow.classList.add("golden");
        });
        unresolved.splice(i, 1);
        break;
    }
}

const custom_css = `
    @keyframes WEOW-golden-anim {
        0% {
            filter: sepia(0.1) saturate(22) drop-shadow(0 0 10px #ff0);
        }
        5%, 25% {
            transform: scale(1.2);
            filter: sepia(0.1) saturate(22) drop-shadow(0 0 10px #ff0) drop-shadow(0 0 20px #ff0) drop-shadow(0 0 30px #ff0);
        }
        100% {
            filter: sepia(0.1) saturate(22) drop-shadow(0 0 10px #ff0);
        }
    }
    .emote.WEOW.golden {
        filter: sepia(0.1) saturate(22) drop-shadow(0 0 10px #ff0);
        animation: WEOW-golden-anim 3s ease-out 1;
        transition: all 1s;
    }
    .emote.WEOW.golden:hover {
        transform: scale(1.1);
        filter: sepia(0.1) saturate(22) drop-shadow(0 0 10px #ff0) drop-shadow(0 0 20px #ff0);
        transition: all 0.5s;
    }
`;

GM_addStyle(custom_css);

const chat_lines = document.querySelector("#chat-win-main > .chat-lines");

const chats_observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.classList?.contains("msg-chat")) handle_chat_message(node);
        });
    });
});

chats_observer.observe(chat_lines, { childList: true });

function handle_chat_message(message) {
    if (message.querySelector(".text") === null) return;
    if (message.classList.contains("msg-status") && message.querySelector(".text").innerText === "Connecting to chat.destiny.gg ...") create_ws();
    if (message.classList.contains("msg-error") && message.querySelector(".text").innerText === "The message is identical to the last one you sent") unresolved = [];
    if (message.dataset.username === username && Date.now() - parseInt(message.querySelector("time").dataset.unixtimestamp) < 500) return handle_me_message(message);
    handle_other_message(message);
}

function handle_me_message(message) {
    const weows = message.querySelector(".text").querySelectorAll(".emote.WEOW");
    if (weows.length === 0) return;
    unresolved.push(message);
}

function handle_other_message(message) {
    const weows = message.querySelector(".text").querySelectorAll(".emote.WEOW");
    if (weows.length === 0) return;
    const timestamp = message.querySelector("time").dataset.unixtimestamp;
    const content = message.querySelector(".text").innerText;
    const user = message.dataset.username ?? "";
    weows.forEach((weow, index) => {
        const hash = weow_hash(timestamp, index, content, user);
        const golden = hash % GOLDEN_WEOW_CHANCE === 0;
        if (golden) weow.classList.add("golden");
    });
}

function weow_hash(timestamp, index, content, user) {
    return cyrb53(timestamp.toString() + index.toString() + content + user);
}

/*
  cyrb53 (c) 2018 bryc (github.com/bryc)
  A fast and simple hash function with decent collision resistance.
  Largely inspired by MurmurHash2/3, but with a focus on speed/simplicity.
  Public domain. Attribution appreciated.
*/
function cyrb53(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
}
