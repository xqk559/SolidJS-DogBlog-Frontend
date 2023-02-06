import { Component } from "solid-js"
import { Motion } from "@motionone/solid";

export const TestAnimation: Component = () => {
  return <Motion animate={{ rotate: 90, backgroundColor: "yellow" }} >Hello world</Motion>
}