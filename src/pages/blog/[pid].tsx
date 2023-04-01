import { useRouter } from "next/router";
import React, { useEffect } from "react";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "1" } },
      { params: { pid: "2" } },
      { params: { pid: "3" } },
      { params: { pid: "4" } },
      { params: { pid: "5" } },
      { params: { pid: "6" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}

export default function BlogPost() {
  const router = useRouter();
  const { pid } = router.query;

  const [blogData, setBlogData] = React.useState<any>({});
  useEffect(() => {
    if (pid != null) {
      fetch(`/api/vans/${pid}`)
        .then((res) => res.json())
        .then((data) => setBlogData(data.vans));
    }
  }, [pid]);

  if (!blogData) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{blogData.name}</h1>
      <img src={blogData.imageUrl} />
      <p>Cost per day is is ${blogData.price}</p>
      <p>{blogData.description}</p>
    </div>
  );
}
