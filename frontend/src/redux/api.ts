import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HexagonType, SkillTreeType } from '../types/Types'

const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
    endpoints: (build) => ({
        getTreeById: build.query<SkillTreeType, string>({
            query: (id) => `skilltrees/${id}`,
        }),
        getHexagonById: build.query<HexagonType, string> ({
            query: (id) => `skilltreehexagons/${id}`,
        }),
        createHex: build.mutation<HexagonType, Partial<HexagonType>>({
            query: (body) => {
                return {
                    url: `skilltreehexagons`,
                    method: `CREATE`,
                    body: body,
                }
            }
        })
    }),
})

export const {
    useGetTreeByIdQuery,
    useGetHexagonByIdQuery,
    useCreateHexMutation,
} = treeApi

export { treeApi }
