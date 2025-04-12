"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotSpot = getHotSpot;
const axios_1 = require("axios");
const URL = "https://www.iwencai.com/unifiedwap/unified-wap/index?is_index=0&is_recommend=0&query_types=stock";
async function getHotSpot() {
    try {
        const response = await (0, axios_1.default)({
            method: 'GET',
            url: URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const hotSpot = response.data.data?.concept_data.list;
        const formattedList = hotSpot.map(item => `${item.title}: ${item.desc}`).join('\n');
        return `📈 今日市场热点概念\n\n${formattedList}`;
    }
    catch (error) {
        const axiosError = error;
        console.error(`获取热点数据失败: ${axiosError.message}`);
        return undefined;
    }
}
//# sourceMappingURL=stockHotSpot.js.map