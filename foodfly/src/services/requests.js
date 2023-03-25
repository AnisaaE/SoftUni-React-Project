const request = async (method, token, url, data) => {
    const options = {};
    if (method !== 'GET') {
      const headers = { 'content-type': 'application/json' };
      options.method = method;
      options.body = JSON.stringify(data);
      options.headers = headers;
    }
  
    if (token) {
      options.headers = {
        ...(options.headers || {}),
        'X-Authorization': token,
      };
    }
  
    const response = await fetch(url, options);
    if (response.status === 204) {
      return {};
    }
  
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
  
    return result;
  };
  
export const requestBuilder = (token) => {
    const createRequest = (method) => request.bind(null, method, token);
    return {
      get: createRequest('GET'),
      post: createRequest('POST'),
      put: createRequest('PUT'),
      patch: createRequest('PATCH'),
      delete: createRequest('DELETE'),
    };
  };