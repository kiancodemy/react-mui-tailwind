import * as React from "react";

import Provider from "@/components/context/context";

import Container from "@/components/container";

export default function Home() {
  return (
    <Provider>
      <Container></Container>
    </Provider>
  );
}
