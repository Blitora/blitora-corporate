export default function R() { return null; }

export async function getServerSideProps() {
  return { redirect: { destination: '/#company', permanent: false } };
}
