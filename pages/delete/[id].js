export async function getServerSideProps(context) {
  const { id } = context.query;

  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/${id}`, {
    method: "DELETE",
  });
  const res = await req.json();

  if (res) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

export default function Hapus() {
  return <></>;
}
