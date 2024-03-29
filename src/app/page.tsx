"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <section>
        <h2 id="about">/almqv</h2>
        <p>
          I am a 100201-year-old <em>engineer</em> with a passion for{" "}
          <em>CS</em>, <em>physics</em>, and <em>mathematics</em>.
        </p>
        <p>
          I am also a startup founder. Currently working on{" "}
          <a
            href="https://www.linkedin.com/company/ingenuityai/"
            target="_blank"
            rel="noreferrer"
          >
            ingenuity
          </a>
          .
        </p>
        {/*TODO: Add GitHub code frequency/contrib here*/}
        <p className="topmargin">
          Most of my projects are open-source, and if you are interested, you
          can find all of my projects on my{" "}
          <a href="https://git.wych.dev/elal" target="_blank" rel="noreferrer">
            git-server
          </a>{" "}
          or{" "}
          <a href="https://github.com/almqv" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </section>

      <section>
        <h2 id="contact">Contact</h2>
        <p>
          You can contact me through email. And if you prefer it, you can
          contact me using PGP.
        </p>
        <ul>
          <li>
            PGP fingerprint:{" "}
            <code>68B2 9768 49F0 3C72 38AE B081 E31A 99CE 3E75 A158</code>
          </li>
          <li>Email: elalmqvist@gmail.com</li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/almqv" target="_blank" rel="noreferrer">
              github.com/almqv
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
