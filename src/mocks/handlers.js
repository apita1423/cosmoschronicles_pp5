import { rest } from 'msw';

const baseURL = "https://cc-drf-api-pp5-b19f7ab60297.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "amanda-admin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/db5hwihda/image/upload/v1/media/../default_profile_cmtzmv",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
