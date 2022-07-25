const canvas = document.querySelector('#flappy-bird');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let spacePressed = false; // for bird movement
let angle = 0; // for idle animation movement
let hue = 0; // color
let frame = 0; // frame count for game loop
let score = 0; // game score
let gamespeed = 2; // speed of game elements