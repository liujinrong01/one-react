import request from '@/utils/request'


class DetailApi {
  /**
   * 每日详情
   */

  static async getDayDetail(id: any) {
    return request.get(`/api/hp/feeds/${id}/`)
  }

  /**
   * 文章详情
   */

  static async getArticleDetail(id: any) {
    return request.get(`/api/essay/htmlcontent/${id}/`)
  }
}

export default DetailApi;
