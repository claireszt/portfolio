import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center gap-6 py-12">
      <img
        src="/images/claire.png"
        alt="Claire avatar"
        className="w-42 h-42 rounded-full shadow-lg"
      />
      <div className="text-center md:text-left">
        <Title>Hello, I’m Claire</Title>
        <p className="text-muted mt-1 max-w-md">
          I build modern, useful web apps with full-stack frameworks.
        </p>
        <div className="mt-6">
          <Button variant="secondary" href="/resume.pdf">
            Download my resume
          </Button>
        </div>
      </div>
    </header>
  );
}
