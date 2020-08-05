const MEMBER_INSERT = 'MEMBER_INSERT';
const MEMBER_LOGIN = 'MEMBER_LOGIN';

export const insertMember = (member) => ({
  type: MEMBER_INSERT,
  member: member,
});

export const login = (memberId, memberPwd) => ({
  type: MEMBER_LOGIN,
  memberId: memberId,
  memberPwd: memberPwd,
});

const initialState = {
  members: [
    {
      memberId: 'user1',
      memberPwd: 'user1',
      name: 'user1',
      email: 'user1@user1.co.kr',
    },
    {
      memberId: 'user2',
      memberPwd: 'user2',
      name: 'user2',
      email: 'user2@user2.co.kr',
    },
  ],
  loginUser: {},
  isLogin: false,
};

function member(state = initialState, action) {
  switch (action.type) {
    case MEMBER_INSERT:
      return { ...state, members: state.members.concat(action.member) };
    case MEMBER_LOGIN:
      var loginMember = state.members.filter(
        (user) =>
          (user.memberId =
            action.memberId && user.memberPwd == action.memberPwd)
      );
      if (loginMember.length == 1) {
        console.log('리덕스 로그인 일치 사용자:', loginMember[0]);
        return { ...state, loginUser: loginMember[0], isLogin: true };
      } else {
        return { ...state, oginUser: {}, isLogin: false };
      }
    default:
      return state;
  }
}
export default member;
