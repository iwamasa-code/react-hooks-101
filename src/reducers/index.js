const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1; /*三項演算子 */
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;

//reducerは二つの引数を受け取る。
//stateは未定義の場合があるから、最初から初期化しておく事もできる。
//actionには常に「type」という属性が渡ってくる。
//id = state[ length - 1] →　最後の要素を取り出せる。
