export const config = {
  isr: {
    expiration: 10,
  },
};

export async function load({}) {
  const res = await fetch(`https://randomuser.me/api/`);
  const data = await res.json();
  console.log(data);
  const user = data.results[0];
  return user;
}
