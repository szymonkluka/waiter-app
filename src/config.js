
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-labels, no-unused-expressions
  'http://localhost:3131/api'
}

export const POSTS_URL = 'http://localhost:3131/api'


window._env_ = {
  POSTS_URL: "http://localhost:3131",
};