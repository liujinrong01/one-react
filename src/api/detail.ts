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

  /**
   * 专题详情
   */

  static async getTopicDetail(id: any) {
    return request.get(`/api/topic/htmlcontent/${id}`)
  }

  /**
   * 问答详情
   */


  static async getQuestionDetail(id: any) {
    return request.get(`/api/question/htmlcontent/${id}`)
  }
}

export default DetailApi;
