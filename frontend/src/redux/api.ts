import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HexagonType, PathType, SkillTreeType } from '../types/Types'

const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
    tagTypes: ['Hexagon', 'SkillTree'],
    endpoints: (build) => ({
        getTreeById: build.query<SkillTreeType, string>({
            query: (id) => `skilltrees/${id}`,
            providesTags: ['SkillTree'],
        }),
        updateTreeById: build.mutation<SkillTreeType, Partial<SkillTreeType>>({
            query: (info) => ({
                url: `skilltrees/${info.skill_tree_id}/`,
                method: `POST`,
                body: info,
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
            invalidatesTags: ['SkillTree']
        }),
        updateHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (info) => ({
                url: `skilltreehexagons/${info.hex_id}/`,
                method: `PATCH`,
                body: info,
            }),
            invalidatesTags: ['Hexagon', 'SkillTree']
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
        })
    }),
})

export const {
    useGetTreeByIdQuery,
    useGetHexagonByIdQuery,
    useCreateHexMutation,
    useUpdateHexMutation,
    useUpdateTreeByIdMutation,
    useCreatePathMutation,
    useDeletePathMutation,
} = treeApi

export { treeApi }
