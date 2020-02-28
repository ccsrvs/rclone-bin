"use strict";

const path = require("path");

function getPath() {
  if (process.platform === "darwin") {
    return path.join(__dirname, "mac", "rclone");
  } else if (process.platform === "win32") {
    return path.join(__dirname, "win", process.arch, "rclone.exe");
  } else {
    return path.join(__dirname, "linux", process.arch, "rclone");
  }
}

exports.pathRClone = getPath();