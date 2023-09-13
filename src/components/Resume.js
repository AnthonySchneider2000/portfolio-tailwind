import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full p-4 bg-cyan-700 consistentRounding flex flex-col justify-center items-center gap-4 pb-4 text-center">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return <div className="text-4xl ml-4 font-bold">{children}</div>;
};

export default function Resume() {
  return (
    <div className="text-white text-xl">
      <Title>Resume</Title>
      <Container>
        <div className="text-2xl">Anthony Schneider</div>
        <div className="text-xl">Software Engineer</div>
      </Container>
    </div>
  );
}
