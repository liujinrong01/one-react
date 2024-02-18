

/*
*http://v3.wufazhuce.com:8000/api/channel/one/2023-05-13/beijing
*
* */


import request from '../utils/request';

class FindApi {


  /**
   * 发现-阅读
   * @param month '2023-05'
   */
  static async getFindRead({ month }: { month: string }) {
    return request.get(`/api/find/bymonth/1/${month}`)
  }

  /**
   * 发现-日签
   */

  static async getFindDay({ month }: { month: string }) {
    return request.get(`/api/find/bymonth/0/${month}`)
  }

  /**
   * 发现-专题
   */

  static async getFindTopic({lastId}: {lastId: number}) {
    return request.get(`/api/banner/list/4?last_id=${lastId}`)
  }

  /**
   * 发现-问答
   */

  static async getFindQuestion({ month }: { month: string }) {
    return request.get(`/api/find/bymonth/3/${month}`)
  }

  /**
   * 发现-长篇-top
   */

  static async getFindSerial() {
    return request.get(`/api/serial/top`)
  }

  /**
   * 发现-长篇-list byyear
   * /api/find/serial/byyear/2024
   */

  static async getFindSerialList({ year }: { year: number }) {
    return request.get(`/api/find/serial/byyear/${year}`)
  }

}

export default FindApi;
