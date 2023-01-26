//#1.리덕스 툴킷 크리에이터슬라이스 임포트 하기
import { createSlice } from '@reduxjs/toolkit';

//#2. 초기값 설정하기
const initialState = {
  menuList: [
    // {
    //   count: 1,
    // },
  ],
};

//#3. 여기가 툴킷 - 액션벨류,함수로직(리듀서+액션크리에이터)
const menuListSlice = createSlice({
  name: 'addCart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const addedIdx = state.menuList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (addedIdx === -1) {
        state.menuList.push({ ...action.payload, amount: 1 });
      }
      // else {
      //   state.menuList[addedIdx].amount += 1;
      // }
    },
    deleteCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.filter(
          (menuList) => menuList.id !== action.payload
        ),
      };
    },

    upCountCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.map((menu) => {
          if (menu.id === action.payload) {
            return { ...menu, amount: menu.amount + 1 };
          }
          return menu;
        }),
      };
    },
    downCountCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.map((menu) => {
          if (menu.id === action.payload) {
            return { ...menu, amount: menu.amount - 1 };
          }
          return menu;
        }),
      };
    },
  },
});

// #4. 익스포트하기
export const { addCart, deleteCart, upCountCart, downCountCart } =
  menuListSlice.actions;
export default menuListSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { http } from "../../api/http";
// import { actionType } from "./actionType";

// /* Init value */
// const initialState = {
//   posts: [],
//   isLoading: false,
//   error: null,
//   post: {},
// };

// /* Thunk */
// export const __getPosts = createAsyncThunk(
//   actionType.posts.GET_POSTS,
//   async (_, thunkAPI) => {
//     try {
//       const result = await http.get(process.env.REACT_APP_BASE_URL + "/posts");
//       return thunkAPI.fulfillWithValue(result.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __postPost = createAsyncThunk(
//   actionType.posts.POST_POST,
//   async (post, thunkAPI) => {
//     try {
//       const result = await http.post(
//         process.env.REACT_APP_BASE_URL + "/posts",
//         post
//       );
//       return thunkAPI.fulfillWithValue(result.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __getPost = createAsyncThunk(
//   actionType.posts.GET_POST,
//   async (postID, thunkAPI) => {
//     try {
//       const result = await http.get(
//         process.env.REACT_APP_BASE_URL + `/posts/${postID}`
//       );
//       return thunkAPI.fulfillWithValue(result.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __deletePost = createAsyncThunk(
//   actionType.posts.DELETE_POST,
//   async (postID, thunkAPI) => {
//     try {
//       await http.delete(process.env.REACT_APP_BASE_URL + `/posts/${postID}`);
//       return thunkAPI.fulfillWithValue(postID);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __updatePost = createAsyncThunk(
//   actionType.posts.PUT_POST,
//   async (post, thunkAPI) => {
//     try {
//       const result = await http.patch(
//         process.env.REACT_APP_BASE_URL + `/posts/${post.id}`,
//         post
//       );

//       if (result.status === 200) {
//         thunkAPI.dispatch(__getPosts());
//       }

//       return thunkAPI.fulfillWithValue(result.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// /* Reducer */

// /*
// (builder) => {
//       builder
//       .addCase(__getPosts.pending, (state) => {state.isLoading = true;})
//       .addCase(__getPosts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.posts = action.payload;
//       })
//       .addCase(__getPosts).rejected, (state, action) => {
//         state.isLoading = false;
//       state.error = action.payload;
//       }

//     }
// */
// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // POST 목록 조회
//     [__getPosts.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__getPosts.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.posts = action.payload;
//     },
//     [__getPosts.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     // POST 생성
//     [__postPost.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__postPost.fulfilled]: (state) => {
//       state.isLoading = false;
//     },
//     [__postPost.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     // POST 조회
//     [__getPost.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__getPost.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.post = action.payload;
//     },
//     [__getPost.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     // POST 삭제
//     [__deletePost.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__deletePost.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.posts = state.posts.filter(
//         (post) => post.id !== parseInt(action.payload)
//       );
//     },
//     [__deletePost.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
// POST 수정
// [__updatePost.pending]: (state) => {
//   state.isLoading = true;
// },
// [__updatePost.fulfilled]: (state, action) => {
//   state.isLoading = false;
//   state.post = action.payload;
// },
// [__updatePost.rejected]: (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// },
