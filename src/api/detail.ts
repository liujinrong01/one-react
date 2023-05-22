import request from '@/utils/request'


class DetailApi {
  /**
   * 每日详情
   */

  static async getDayDetail(id: any) {
    return request.get(`/api/hp/feeds/${id}/`)
  }
}

export default DetailApi;
