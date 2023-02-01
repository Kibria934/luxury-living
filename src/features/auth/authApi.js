import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/auth/manage/signUp",
                body: data
            }),
            transformResponse: (response, meta, arg) => {
                return response.data
            },
        })
    })
})
export const { useRegisterMutation } = authApi