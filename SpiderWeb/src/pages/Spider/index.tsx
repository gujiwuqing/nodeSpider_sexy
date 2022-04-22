import { Select, Card, NumberInput, Button } from "@mantine/core";
import React from "react";
import QuantityInput from "../../components/QuantityInput";
import { Container, SearchHeader } from "./style";

const Spider = () => {
  return (
    <Card>
      <SearchHeader onSubmit={() => console.log("submit")}>
        <Select
          style={{ marginRight: "1rem" }}
          placeholder="爬取脚本"
          data={[
            { value: "yitudao", label: "yitudao" },
            { value: "xinwenba", label: "xinwenba" },
          ]}
        />
        <Select
          style={{ marginRight: "1rem" }}
          placeholder="爬取类别"
          data={[
            { value: "xinggan", label: "xinggan" },
            { value: "siwameitui", label: "siwameitui" },
            { value: "chemo", label: "chemo" },
            { value: "wangluomeinv", label: "wangluomeinv" },
            { value: "tiyumeinv", label: "tiyumeinv" },
            { value: "rentiyishu", label: "rentiyishu" },
          ]}
        />
        <QuantityInput />
        <Button aria-label=" ">Spider</Button>
      </SearchHeader>
      <Container>
        <div>
          <span style={{ marginRight: "1rem" }}>当前队列: 暂无队列</span>
          <span style={{ marginRight: "1rem" }}>当前页数: 暂无队列</span>
          <span style={{ marginRight: "1rem" }}>
            连接延迟: <span style={{ color: "green" }}>0ms</span>
          </span>
        </div>
      </Container>
    </Card>
  );
};

export default React.memo(Spider);
