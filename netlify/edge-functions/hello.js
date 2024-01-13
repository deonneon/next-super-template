// eslint-disable-next-line import/no-anonymous-default-export
export default async (request) => {
  return new Response("Hello, World!");
};

export const config = {
  path: "/hello",
};

// export default async (request) => {
//   return new Response("Hello, World!", {
//     headers: { "content-type": "text/html" },
//   });
// };
