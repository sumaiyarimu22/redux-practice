const { createSlice, createAsynceThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
//initialState
const initialState = {
  loading: true,
  posts: [],
  error: "",
};

//create async thunk
const fetchPosts = createAsynceThunk("post/fetchPosts", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();

  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

module.export = postSlice.reducer;
module.export.fetchPosts = fetchPosts;

// how to create store
// const store=configureStore({
//   reducer:{
//     post:postReducer
//   },
//   middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(logger)
// })
