function handleResponse(response: Response) {
  if (!response.ok) throw new Error(`API Error`);
  return response.json();
}
function handleNetworkError(error: Error) {
  console.log(error);
  throw new Error(`Network Error: ${error.name}`);
}

const careApi = async (url: string, options?: RequestInit) => {
  const authToken = localStorage.getItem('ptr-auth');
  return await fetch(`${process.env.NEXT_PUBLIC_CARE_API_URL}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      UserType: 'protector',
      ...(authToken && { Authrization: authToken }),
    },
  })
    .then(handleResponse)
    .catch(handleNetworkError);
};

const caremateApi = async (url: string, options?: RequestInit) => {
  const authToken = localStorage.getItem('cgs-auth');
  return await fetch(`${process.env.NEXT_PUBLIC_CAREMATE_API_URL}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      UserType: 'caregiver',
      ...(authToken && { Authrization: authToken }),
    },
  })
    .then(handleResponse)
    .catch(handleNetworkError);
};

// login
export interface ILoginForm {
  email: string;
  password: string;
  remember?: boolean;
}
export interface ILoginResponse {
  code: number;
  data: {
    access_token: string;
    expires_at: string;
    token_type: string;
  };
  user?: {
    id: number;
  };
  message: string;
}
export const careLogin = async (user: ILoginForm) => {
  return careApi(`/login/${btoa(user.email)}`, { method: 'POST', body: JSON.stringify(user) });
};
export const caremateLogin = async (user: ILoginForm) => {
  return caremateApi(`/login/${btoa(user.email)}`, { method: 'POST', body: JSON.stringify(user) });
};
// login

export interface IAddressListParams {
  keyword: string;
  page: number;
  limit: number;
}
export const addressList = async ({ keyword, page, limit }: IAddressListParams) => {
  return await fetch(
    `https://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=${process.env.NEXT_PUBLIC_ADDRESS_API_KEY}&currentPage=${page}&keyword=${keyword}&countPerPage=${limit}&resultType=json`
  )
    .then(handleResponse)
    .catch(handleNetworkError);
};

export const searchRecommand = async (keyword: string) => {
  return await fetch(
    `https://cloudsearch.apigw.ntruss.com/CloudSearch/real/v1/domain/naver/document/search/autocomplete?type=section&query=${keyword}`
  )
    .then(handleResponse)
    .catch(handleNetworkError);
};
