import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3001',
//   timeout: 1000,
//   headers: { Authorization: 'Authorization' },
// });

export const axiosInstance = axios.create({
  baseURL: 'http://3.35.176.35',
});
axiosInstance.defaults.withCredentials = true;

// export default http;

// // 요청 인터셉터 추가하기
// axios.interceptors.request.use(
//   function (config) {
//     // 요청이 전달되기 전에 작업 수행
//     return config;
//   },
//   function (error) {
//     // 요청 오류가 있는 작업 수행
//     return Promise.reject(error);
//   }
// );

// // 응답 인터셉터 추가하기
// axios.interceptors.response.use(
//   function (response) {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행
//     return response;
//   },
//   function (error) {
//     // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 오류가 있는 작업 수행
//     return Promise.reject(error);
//   }
// );

//   const fetchTodos = async () => {
//     const { data } = await axios.get(' http://jsmtmt.shop/stores', {
//       headers: { Authorization: localStorage.getItem('Authorization') },
//     });
//     setStores(data.data); //서버 연결시..
