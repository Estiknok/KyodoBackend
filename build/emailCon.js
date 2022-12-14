"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("./config"));
exports.default = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: config_1.default.EMAIL_USER,
        pass: config_1.default.EMAIL_PASSWORD_APP
    }
});
