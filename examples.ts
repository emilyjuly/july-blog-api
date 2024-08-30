const USER_POST = {
  endpoint: '/api/user',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    username: '',
    password: '',
    email: '',
  },
};

const USER_GET = {
  endpoint: '/api/user',
  method: 'POST',
  headers: {
    Authorization: 'Bearer TOKEN_AQUI',
  },
};

const TOKEN_POST = {
  endpoint: '/jwt-auth/v1/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    username: '',
    password: '',
  },
};

const TOKEN_VALIDATE_POST = {
  endpoint: '/jwt-auth/v1/token/validate',
  method: 'POST',
  headers: {
    Authorization: 'Bearer TOKEN_AQUI',
  },
};

const PHOTO_POST = {
  endpoint: '/api/photo',
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + 'token',
  },
  body: {
    img: 'FORM_DATA',
    nome: '',
    peso: '',
    idade: '',
  },
};

// query: ?_total=1&_page=1&_user=6
const PHOTO_GET = {
  endpoint: {
    photos: '/api/photo',
    photos_query: '/api/photo/?_total=9&_page=1&_user=0',
    photo: '/api/photo/:id',
  },
  method: 'GET',
};

const PHOTO_DELETE = {
  endpoint: '/api/photo/:id',
  method: 'DELETE',
  headers: {
    Authorization: 'Bearer ' + 'token',
  },
};

const COMMENT_POST = {
  endpoint: '/api/comment/:id',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + 'token',
  },
  body: {
    comment: '',
  },
};

const COMMENT_GET = {
  endpoint: '/api/comment/:id',
  method: 'GET',
};

const STATS_GET = {
  endpoint: '/api/stats',
  method: 'GET',
  headers: {
    Authorization: 'Bearer TOKEN_AQUI',
  },
};

const PASSWORD_LOST_POST = {
  endpoint: '/api/password/lost',
  method: 'POST',
  body: {
    login: '',
    url: '',
  },
};

const PASSWORD_RESET_POST = {
  endpoint: '/api/password/reset',
  method: 'POST',
  body: {
    login: '',
    password: '',
    key: '',
  },
};
