// Prompt
// I want a simple social media app that will store posts. I would like you to use Redux to store the front-end state. Each post should have a body, title, and id. Users should be able to post new posts. They should also be able to delete old posts and edit existing posts. Please describe how you would store and work with posts on the front-end using Redux. In particular,
//
// Describe the Redux state shape you would implement
// Describe the reducers and action creators you would use


// Redux Structure
// User --> Action --> Action Creator ---> Reducer --> Store


// Sample State
// users model and posts model
// I like to use ruby on rails as my backend and postgresql
// Which has a strict schema so I'll give each post a user_id as well for association

{
  user: {
    id: 1,
    username: "Sam",
    password: "some_password",
    posts: [1, 2]
  },
  posts: {
    1: {
      id: 1,
      title: 'Post #1',
      body: "Number 1 body description",
      user_id: 1
    },
    2: {
      id: 2,
      title: 'Post #2',
      body: "Number 2 body description",
      user_id: 1
    }
  }
}


// post action creator
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = id => ({
  type: REMOVE_POST,
  id
});

// Thunk action creator
export const updatePost = post => dispatch => (
  postAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
  postAPIUtil.deletePost(post).then(post => dispatch(removePost(post)))
);


// postAPIUtil
export const updatePost = (post, success, error) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post },
    success,
		error
  })
);

export const deleteNotebook = (post, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`,
    success,
		error
  })
);

// posts_reducer
const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      let newPost = {[action.post.id]: action.post };
      nextState = merge({}, state, newPost);
      return nextState;
    case REMOVE_POST:
      nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState
    default:
      return state;
  }
}

export default PostsReducer;
