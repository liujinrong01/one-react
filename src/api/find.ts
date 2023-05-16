

/*
*http://v3.wufazhuce.com:8000/api/channel/one/2023-05-13/beijing
*
* */


import request from '../utils/request';

const { API_platform, API_sign, API_user_id, API_uuid, API_version } = process.env;


class FindApi {


  /**
   * 发现-阅读
   * @param month '2023-05'
   */
  static async getFindRead({ month }: { month: string }) {
    return request.get(`/api/find/bymonth/1/${month}?platform=${API_platform}&sign=${API_sign}&user_id=&uuid=${API_uuid}&version=${API_version}`)

  }
}

export default FindApi;
