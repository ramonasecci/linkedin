export const ME_INFO_UPDATE = 'ME_INFO_UPDATE'
export const OTHER_USER = 'OTHER_USER'



export const meInfoAction = (meInfo)=>({
   type: ME_INFO_UPDATE,
   payload: meInfo,
});

export const otherUserAction = (otherUser) => ({
    type: OTHER_USER,
    payload: otherUser,
});