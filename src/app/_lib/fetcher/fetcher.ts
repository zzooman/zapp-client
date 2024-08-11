import { ILoginForm } from '@/app/login/loginForm';
import { ISignupForm } from '@/app/signup/signupForm';
import {
  Res,
  EnterChatRoomParams,
  GetPostsParams,
  LoginResponse,
  SearchTextResponse,
  MydataResponse,
  MakeRoomResponse,
  GetMessagesResponse,
  GetRoomResponse,
  CreateFeedParams,
  CreateFeedResponse,
  CreateProductParams,
  CreateProductResponse,
  GetProductResponse,
  GetProductsResponse,
  GetFeedsResponse,
  GetFeedDetailResponse,
  GetSearchProductsResponse,
  GetSearchFeedsResponse,
} from '../types/dto';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function handleResponse(res: Response) {
  try {
    const json = await res.json();
    if (res.ok)
      return {
        status: res.status,
        data: json,
      };
    if (res.status === 401) {
      throw new Error('로그인이 필요합니다.');
    }
    throw new Error(json.error ?? 'An error occurred.');
  } catch (error: unknown) {
    console.log('error', error);
    return {
      status: res.status,
      data: String(error),
    };
  }
}

export async function signup(data: ISignupForm) {
  return await fetch(`${API_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}

export async function login(data: ILoginForm): Promise<Res<LoginResponse>> {
  return await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function createProduct(data: CreateProductParams): Promise<Res<CreateProductResponse>> {
  return await fetch(`${API_URL}/product`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getProduct(id: number): Promise<Res<GetProductResponse>> {
  return await fetch(`${API_URL}/product/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getFeed(id: number): Promise<Res<GetFeedDetailResponse>> {
  return await fetch(`${API_URL}/feed/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getProducts({ limit, page }: GetPostsParams): Promise<Res<GetProductsResponse>> {
  return await fetch(`${API_URL}/products?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    cache: 'no-store',
    next: {
      tags: ['products'],
    },
  }).then(handleResponse);
}

export async function getFeeds({ limit, page }: GetPostsParams): Promise<Res<GetFeedsResponse>> {
  return await fetch(`${API_URL}/feeds?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    cache: 'no-store',
    next: {
      tags: ['feeds'],
    },
  }).then(handleResponse);
}

export async function searchFeeds({
  limit,
  page,
  query,
}: GetPostsParams & { query: string }): Promise<Res<GetSearchFeedsResponse>> {
  return await fetch(`${API_URL}/feeds/search?query=${query}&limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function searchProducts({
  limit,
  page,
  query,
}: GetPostsParams & { query: string }): Promise<Res<GetSearchProductsResponse>> {
  return await fetch(`${API_URL}/products/search?query=${query}&limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function toggleLikePost(id: number, isLiked: boolean) {
  return await fetch(`${API_URL}/post/${id}/${isLiked ? 'like' : 'unlike'}`, {
    method: isLiked ? 'POST' : 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function getHotSearchTexts(): Promise<Res<SearchTextResponse[]>> {
  return await fetch(`${API_URL}/search/hot`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function mydata(): Promise<Res<MydataResponse>> {
  return await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function productsILiked({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/products/liked?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function productsISold({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/products/sold?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function productsIBought({ limit, page }: GetPostsParams) {
  return await fetch(`${API_URL}/products/bought?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

export async function makeRoom(data: EnterChatRoomParams): Promise<Res<MakeRoomResponse>> {
  return await fetch(`${API_URL}/room`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(handleResponse);
}

export async function getMessages(roomId: string): Promise<Res<GetMessagesResponse>> {
  return await fetch(`${API_URL}/messages/${roomId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

async function enterRoom(roomId: string, onMessage: WebSocket['onmessage']): Promise<WebSocket> {
  const socketUrl = `${API_URL}/ws/${roomId}`;
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log('WebSocket connection established');
      resolve(socket);
    };

    socket.onerror = error => {
      console.log('WebSocket error:', error);
      reject(error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onmessage = onMessage;
  });
}

async function allRooms(auth: string): Promise<Res<GetRoomResponse[]>> {
  return await fetch(`${API_URL}/rooms/all/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${auth}` },
    credentials: 'include',
  }).then(handleResponse);
}

export async function createFeed(data: CreateFeedParams): Promise<Res<CreateFeedResponse>> {
  return await fetch(`${API_URL}/feed`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then(handleResponse);
}

const API = {
  signup,
  login,
  createProduct,
  getProduct,
  getProducts,
  toggleLikePost,
  searchFeeds,
  searchProducts,
  getHotSearchTexts,
  mydata,
  productsILiked,
  productsISold,
  productsIBought,
  makeRoom,
  enterRoom,
  getMessages,
  allRooms,
  createFeed,
  getFeed,
  getFeeds,
};
export default API;
