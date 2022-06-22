import React, { memo } from "react";
import Layout from "../../src/components/Generic/Layout";
import { useRouter } from 'next/router'
import Learn from "../../src/components/Learn/Learn";

const LearnPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout
      siteTitle={id as string || ''}
      siteDescription={`Learn ${id}`}
    >
      <Learn />
    </Layout>
  );
};

export default memo(LearnPage);