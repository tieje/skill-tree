import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HexagonType, SkillTreeType } from '../types/Types'

const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
    endpoints: (build) => ({
        getTreeById: build.query<SkillTreeType, string>({
            query: (id) => `skilltrees/${id}`,
        }),
        getHexagonById: build.query<HexagonType, string>({
            query: (id) => `skilltreehexagons/${id}`,
        }),
        createHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (info) => {
                return {
                    url: `skilltreehexagons/`,
                    method: `POST`,
                    body: info,
                }
            }
        }),
        updateHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (id, ...info) => {
                return {
                    url: `skilltreehexagons/${id}`,
                    method: `PUT`,
                    body: info,
                }
            }
        })
    }),
})

export const {
    useGetTreeByIdQuery,
    useGetHexagonByIdQuery,
    useCreateHexMutation,
    useUpdateHexMutation,
} = treeApi

export { treeApi }
