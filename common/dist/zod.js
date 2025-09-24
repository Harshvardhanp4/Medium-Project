"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
//signup
exports.signupInput = zod_1.default.object({
    username: zod_1.default.string().email({ message: "Invalid Email" }),
    password: zod_1.default.string().min(6, { message: "Password must be at least 6 characters" }),
    name: zod_1.default.string().optional()
});
//signin    
exports.signinInput = zod_1.default.object({
    username: zod_1.default.string().email({ message: "Invalid Email" }),
    password: zod_1.default.string().min(6)
});
//create blog
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string().min(3).max(100),
    content: zod_1.default.string().min(10).max(500)
});
//update blog
exports.updateBlogInput = zod_1.default.object({
    title: zod_1.default.string().min(3).max(100).optional(),
    content: zod_1.default.string().min(10).max(500).optional(),
});
//# sourceMappingURL=zod.js.map