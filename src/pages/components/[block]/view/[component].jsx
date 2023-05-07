import SEO from "@/components/Seo";
import { COMPONENT_LIST } from "@/utils/constant";
import { useRouter } from "next/router";
import React from "react";
import componetList from "./componentList";

const ViewComponent = ({ target }) => {
  const { query } = useRouter();

  return (
    <>
      <SEO
        title={`${target?.title} - TailwindTap`}
        description={target?.description}
        image={`${process.env.NEXT_PUBLIC_APP_URL}${target?.mainImageSrc}`}
      />
      <div>{componetList(query.component, query?.color)}</div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      target:
        COMPONENT_LIST.find(
          (data) => data.type + "-" + data.slug === context.query.component
        ) || null,
    },
  };
}

export default ViewComponent;
