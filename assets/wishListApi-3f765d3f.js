import{l as a}from"./index-414ac27f.js";const e=a.enhanceEndpoints({addTagTypes:["WishListData"]}).injectEndpoints({endpoints:s=>({getWishListDataByEmail:s.query({query:i=>({url:`/wishList/${i}`,method:"GET"}),providesTags:["WishListData"]}),addToWishListByEmail:s.mutation({query:({userEmail:i,data:t})=>({url:`/wishList/${i}`,method:"POST",body:t}),invalidatesTags:["WishListData"]}),deleteWishListDataByEmailId:s.mutation({query:({data:i,userEmail:t})=>({url:`/wishList/${t}`,method:"DELETE",body:i}),invalidatesTags:["WishListData"]})})}),{useGetWishListDataByEmailQuery:d,useAddToWishListByEmailMutation:h,useDeleteWishListDataByEmailIdMutation:n}=e;export{n as a,d as b,h as u};
