const request = async (method, token, url, data) => {
  const headers = {};

  if (method !== 'GET') {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = {
    method: method,
    headers: headers,
    body: method !== 'GET' ? JSON.stringify(data) : undefined
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw responseData;
    }

    return responseData;
  } catch (error) {
    throw error;
  }
};

const requestBuilder = (token) => {
  return {
    get: request.bind(null, 'GET', token),
    post: request.bind(null, 'POST', token),
    put: request.bind(null, 'PUT', token),
    patch: request.bind(null, 'PATCH', token),
    delete: request.bind(null, 'DELETE', token)
  };
};