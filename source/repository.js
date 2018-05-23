export default class WordpressRepository {
  static getPostCollection(blog) {
    //foreignerdeveloper.wordpress.com
    return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${blog}/posts?fields=short_URL,excerpt,title,date,featured_image,post_thumbnail,author`)
      .then(response => response.json())
  }
}
