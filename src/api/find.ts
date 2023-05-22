

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
}

export default FindApi;
