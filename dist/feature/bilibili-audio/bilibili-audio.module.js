"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BilibiliAudioModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const bilibili_audio_controller_1 = require("./bilibili-audio.controller");
const bilibili_audio_service_1 = require("./bilibili-audio.service");
let BilibiliAudioModule = class BilibiliAudioModule {
};
exports.BilibiliAudioModule = BilibiliAudioModule;
exports.BilibiliAudioModule = BilibiliAudioModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [bilibili_audio_controller_1.BilibiliAudioController],
        providers: [bilibili_audio_service_1.BilibiliAudioService],
        exports: [bilibili_audio_service_1.BilibiliAudioService]
    })
], BilibiliAudioModule);
//# sourceMappingURL=bilibili-audio.module.js.map