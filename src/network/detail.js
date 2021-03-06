import {
    request,
} from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: './recommend'
    })
}

export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.price = itemInfo.lowNowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discount;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
        this.count = 0;
    }
}