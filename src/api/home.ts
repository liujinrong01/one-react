

/*
*http://v3.wufazhuce.com:8000/api/channel/one/2023-05-13/beijing
*
* */


import request from '../utils/request';


class HomeApi {
    // 获取首页数据

    /**
     *
     * @param date '2023-05-13'
     * @param city 'beijing'
     */
    static async getHomeData({ date, city }: { date: string; city: string }) {
        return request(`/api/channel/one/${date}/${city}`)

    }
}

export default HomeApi;
