export const config = {
  runtime: "nodejs18.x",
  isr: {
    expiration: 60,
    bypassToken: "REPLACE_ME_WITH_SECRET_VALUE",
  },
};

export async function load({}) {
  const res = await fetch(`https://randomuser.me/api/`);
  const data = await res.json();
  console.log(data);
  const user = data.results[0];
  return user;
}
