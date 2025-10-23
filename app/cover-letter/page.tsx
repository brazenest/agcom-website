"use client";

export default function CoverLetterPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-gray-900">
        <nav id="coverletter-page-links" role="navigation" className="space-x-6">
            <li>Link 1</li>
            <li>Link 2</li>
        </nav>
      <Header />
      <LetterBody />
    </main>
  );
}

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-sky-700">Alden Gillespy</h1>
      <p className="text-sm text-gray-700">
        Salt Lake City, UT · ag@aldengillespy.com · (813) 437-7425
      </p>
      <p className="text-sm text-sky-700">
        <a href="https://aldengillespy.com" className="hover:underline">
          aldengillespy.com
        </a>{" "}
        |{" "}
        <a href="https://linkedin.com/in/alden-gillespy" className="hover:underline">
          linkedin.com/in/alden-gillespy
        </a>
      </p>
    </header>
  );
}

function LetterBody() {
  return (
    <>
      <p className="text-sm mb-4 font-bold">Dear Hiring Manager,</p>
      <p className="text-sm mb-4 leading-relaxed">
        I’m excited to apply for the Full-Stack Software Engineer position at your company. With nearly five years of prior experience in full-stack development and a strong command of React, TypeScript, and Node.js, I bring both technical depth and the humility to keep learning.
      </p>
      <p className="text-sm mb-4 leading-relaxed">
        After stepping away from professional engineering for several years, I’ve returned with renewed focus — continuing to build modern web applications using the latest frameworks and deploying full-stack projects independently. My portfolio and GitHub reflect an up-to-date understanding of today’s tech landscape, from modern frontend design to scalable backend APIs.
      </p>
      <p className="text-sm mb-4 leading-relaxed">
        I’m seeking an opportunity where I can contribute meaningfully while re-immersing myself in collaborative, production-level development. I’d welcome the chance to bring my skills and fresh perspective to your team.
      </p>
      <p className="text-sm leading-relaxed mb-6">Thank you for your consideration.</p>
      <p className="text-sm font-semibold">Warm regards,</p>
      <p className="text-sm font-bold">Alden Gillespy</p>
    </>
  );
}
