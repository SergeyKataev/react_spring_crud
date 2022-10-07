import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postApi = createApi({
    reducerPath: 'postApi', // уникальный ключ, чтобы потом добавить в rootReducer
    baseQuery: fetchBaseQuery({baseUrl: ' http://localhost:8080/api'}),
    tagTypes: ['Post'],
    endpoints: (build)  => ({
        fetchAllUsers: build.query<IPost[], IPost>({ // назваине метода с помощью которого будем работать
            // выше: что вернется и тип аргумента
            query: ()=>({
                url: '/employees',
            }),
            providesTags: resuls => ['Post']  // этот эндпоинт работает с тегом Post
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/employee',
                method: 'POST',
                body: post
            }),
            // invalidatesTags: ['Post']// при создании поста данные под тегом Post - неактуальны и RTK заново получает эти данные
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.employeeId}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']// при создании поста данные под тегом Post - неактуальны и RTK заново получает эти данные
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/employee/${post.employeeId}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post']// при создании поста данные под тегом Post - неактуальны и RTK заново получает эти данные
        }),

    })
})