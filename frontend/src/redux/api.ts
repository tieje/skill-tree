import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HexagonType, LoginRequest, PathType, SkillTreePickerByUserIdType, SkillTreeType, UserResponse } from '../types/Types'
import { RootState } from './store'

const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/v1/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token !== 'null' && token !== null) {
                headers.set('authorization', `Token ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Hexagon', 'SkillTree', 'SkillTreePicker'],
    endpoints: (build) => ({
        getSkillTreePickerDataByUserId: build.query<Partial<SkillTreePickerByUserIdType>, string>({
            query: (id) => `skilltreepicker/${id}`,
            providesTags: ['SkillTreePicker']
        }),
        login: build.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'dj-rest-auth/login/',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: 'dj-rest-auth/logout/',
                method: 'POST',
            })
        }),
        getTreeById: build.query<SkillTreeType, string>({
            query: (id) => `skilltrees/${id}`,
            providesTags: ['SkillTree'],
        }),
        updateTreeById: build.mutation<SkillTreeType, Partial<SkillTreeType>>({
            query: (info) => ({
                url: `skilltrees/${info.skill_tree_id}/`,
                method: `POST`,
                body: {
                    ...info,
                    last_edit_timestamp: Date.now(),
                },
            }),
            invalidatesTags: ['SkillTree']
        }),
        getHexagonById: build.query<HexagonType, string>({
            query: (id) => `skilltreehexagons/${id}`,
            providesTags: ['Hexagon'],
        }),
        createHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (info) => ({
                url: `skilltreehexagons/`,
                method: `POST`,
                body: info,
            }),
            invalidatesTags: ['Hexagon', 'SkillTree']
        }),
        updateHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (info) => ({
                url: `skilltreehexagons/${info.hex_id}/`,
                method: `PATCH`,
                body: info,
            }),
            invalidatesTags: ['Hexagon', 'SkillTree']
        }),
        deleteHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (info) => ({
                url: `skilltreehexagons/${info.hex_id}`,
                method: `DELETE`,
                body: info,
            }),
            invalidatesTags: ['SkillTree', 'Hexagon']
        }),
        createPath: build.mutation<PathType, Partial<PathType>>({
            query: (info) => ({
                url: `skilltreepaths/`,
                method: `POST`,
                body: info,
            }),
            invalidatesTags: ['SkillTree']
        }),
        deletePath: build.mutation<PathType, Partial<PathType>>({
            query: (info) => ({
                url: `skilltreepaths/${info.path_id}`,
                method: `DELETE`,
                body: info
            }),
            invalidatesTags: ['SkillTree']
        }),
    }),
})

export const {
    useGetSkillTreePickerDataByUserIdQuery,
    useGetTreeByIdQuery,
    useGetHexagonByIdQuery,
    useCreateHexMutation,
    useUpdateHexMutation,
    useDeleteHexMutation,
    useUpdateTreeByIdMutation,
    useCreatePathMutation,
    useDeletePathMutation,
    useLoginMutation,
    useLogoutMutation,
} = treeApi

export { treeApi }
