import httpService from './http.service'

const commentEndpoint = 'comment/'

const CommentService = {
  createComment: async (payload) => {
    const {data} = await httpService.put(commentEndpoint + payload._id, payload)
    return data
  },
  getComments: async (pageId) => {
    const {data} = await httpService.get(commentEndpoint, {
      params: {
        orderBy: '"pageId"',
        equalTo: `"${pageId}"`
      }
    })
    return data
  },
  deleteComment: async (commentId) => {
    const {data} = await httpService.delete(commentEndpoint + commentId)
    return data
  }
}

export default CommentService
